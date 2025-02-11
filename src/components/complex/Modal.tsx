'use client';
import React, {useState} from "react";
import {Input, Button} from '@sharedComponents';

import {createTask} from '@store/features/todoSlice';
import {AppDispatch} from '@store/store';
import {useDispatch} from 'react-redux';

type NewTaskData = {
  title: string,
  description: string,
  hours: number,
  minutes: number
}

export default function Modal ({
  setModalOpen
  } : {
  setModalOpen: (x: boolean) => void
}) {
  const dispatch = useDispatch<AppDispatch>();
  const [newTaskData, setNewTaskData] = useState({});

  const createNewTask = (newTaskData: NewTaskData) => {
      dispatch(createTask(newTaskData));
    };

  const inputHandler = (e: Event & {target: HTMLInputElement}) => {
    setNewTaskData(
      {
        ...newTaskData,
        [e.target.name]: e.target.value
      }
    );
  };

  const closeModalHandler = () => {
    setModalOpen(false);
  };

  const createTaskHandler = () => {
    createNewTask(newTaskData as NewTaskData);
    setModalOpen(false);
  };

  return (
    <div className={'absolute inset-0 bg-slate-200/50'}>
      <div className={'float-right'}>
        <div className={'flex gap-[8px] items-start flex-col border border-slate-200 shadow-sm m-[8px] p-[8px] bg-blue-100'}>
          <div>
            <span className={'mr-[8px]'}>{'Название'}</span>
            <Input name={'title'} onChange={inputHandler} />
          </div>
          <div className={'flex'}>
            <span className={'mr-[8px]'}>{'Описание'}</span>
            <textarea
              className={'bg-white text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow'}
              onChange={(e) => setNewTaskData({...newTaskData, description: e.target.value})}
            />
          </div>
          <div>
            <span className={'mr-[8px]'}>{'Время на выполнение'}</span>
            <div>
              <span className={'mr-[8px]'}>{'ч'}</span>
              <Input name={'hours'} onChange={inputHandler} />
              <span className={'mx-[8px]'}>{'м'}</span>
              <Input name={'minutes'} onChange={inputHandler} />
            </div>
          </div>
          <div className={'flex gap-[16px]'}>
            <Button onClick={createTaskHandler}>{'Создать'}</Button>
            <Button color={'danger'} onClick={closeModalHandler}>{'Закрыть'}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}