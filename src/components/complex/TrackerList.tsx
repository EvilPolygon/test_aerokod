'use client'
import {useState} from 'react';

import {AppDispatch} from '@store/store';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '@store/hooks';
import {TaskItem, Modal} from '@sharedComponents';

import type {Task} from '@store/features/todoSlice';


export default function TrackerList () {

  const [modalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState('');

  const tasks = useAppSelector((state) => state.todoReducer.tasks)
  
  const getTaskItems = () => {
    let tasksForShow = tasks;

    if (search !== '') {
      tasksForShow = tasksForShow.filter((item) => item.title.includes(search));
    }

    return tasksForShow.map((item: Task) => {
      return (
        <TaskItem
          key={item.id}
          task={item}
        />
      )
    })
  }

  return (
    <>
      <div>
        <span>{'Текущие задачи'}</span>
        <span>{'Поиск по заголовку'}</span>
        <input type={'text'} onChange={(e) => setSearch(e.target.value)}/>
        <button className={'bg-lime-100'} onClick={() => setModalOpen(true)}>Создать задачу</button>
        <div>
          {getTaskItems()}
        </div>
        {
          modalOpen && (
            <Modal 
              setModalOpen={setModalOpen}
            />
          )
        }
      </div>
    </>
  )
}