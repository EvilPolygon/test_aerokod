'use client'
import {useState} from 'react';

import {useAppSelector} from '@store/hooks';
import {TaskItem, Modal, Input, Button} from '@sharedComponents';

import type {Task} from '@store/features/todoSlice';


export default function TrackerList () {

  const [modalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState('');

  const tasks = useAppSelector((state) => state.todoReducer.tasks)

  const changeHandler = (e) => {
    setSearch(e.target.value);
  }
  const openModalHandler = () => {
    setModalOpen(true)
  }
  
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
      <div className={'p-[32px]'}>
        <div className={'flex items-center gap-[16px]'}>
          <span className={'grow'}>{'Текущие задачи'}</span>
          <span>{'Поиск по заголовку'}</span>
          <Input onChange={changeHandler}/>
          <Button color={'blue'} onClick={openModalHandler}>Создать задачу</Button>
        </div>
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