'use client'
import {useState} from "react"

import {createTask} from '@store/features/todoSlice';
import {AppDispatch} from '@store/store';
import {useDispatch} from 'react-redux';

export default function Modal ({setModalOpen}) {
  const dispatch = useDispatch<AppDispatch>();
  const [newTaskData, setNewTaskData] = useState({})

  const createNewTask = (newTaskData) => {
      dispatch(createTask(newTaskData));
    }

  return (
    <div className={'bg-blue-100'}>
      <div>
        <span>{'Название'}</span>
        <input type={'text'} onChange={(e) => setNewTaskData({...newTaskData, title: e.target.value})} />
      </div>
      <div>
        <span>{'Описание'}</span>
        <textarea onChange={(e) => setNewTaskData({...newTaskData, description: e.target.value})} />
      </div>
      <div>
        <span>{'Время на выполнение'}</span>
        <div>
        <span>{'ч'}</span>
        <input type={'text'} onChange={(e) => setNewTaskData({...newTaskData, hours: e.target.value})} />
        <span>{'м'}</span>
        <input type={'text'} onChange={(e) => setNewTaskData({...newTaskData, minutes: e.target.value})} />
        </div>
      </div>
      <button onClick={() =>createNewTask(newTaskData)}>{'Создать'}</button>
      <button onClick={() => setModalOpen(false)}>Закрыть</button>
    </div>
  )
}