'use client'
import {deleteTask, startTrack, stopTrack} from '@store/features/todoSlice';
import {AppDispatch} from '@store/store';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '@store/hooks';

import {parseFROMTimestamp} from '@utils/timeParsers';
import {Button} from '@sharedComponents'

export default function TaskItem ({task}) {
  const dispatch = useDispatch<AppDispatch>();

  const timeTracker = useAppSelector((state) => state.todoReducer.timeTracker)

  const curentTaskIsTracking = timeTracker.currentTaskId === task.id;
  
  const deleteThisTask = (id: number) => {
    dispatch(deleteTask(id));
  }

  const trackHandler = (id: number) => {
    if (timeTracker.currentTaskId !== -1){
      if(curentTaskIsTracking) {
        return dispatch(stopTrack())
      } 
      console.log('denied')
      return ;
    }
    return dispatch(startTrack(id))
  }

  return (
    <div className={'border border-slate-200 bg-white shadow-sm m-[8px] p-[8px]'}>
      <div>
        {task.title}
      </div>
      <div>
        {task.description}
      </div>
      <div>
        <span>{'Затрачено времени: '}</span>
        <span>{parseFROMTimestamp(task.timeSpend)}</span>
      </div>
      <div>
        <span>{'Оставшееся время: '}</span>
        <span>{parseFROMTimestamp(task.timeLeft)}</span>
        {task.timeLeft < 0 && (
          <span className={'bg-red-300 ml-[8px]'}>{'Просрочена'}</span>
        )}
      </div>

      <div className={'flex justify-between'}>
      <Button 
        color={'lime'}
        onClick={() => trackHandler(task.id)}
      >
        {
          curentTaskIsTracking ? 'Остановить' : 'Выполнять'
        }
      </Button>

      <Button 
        color={'danger'}
        onClick={() => deleteThisTask(task.id)}
      >
        {'Удалить задачу'}
      </Button>
      </div>
    </div>
  )
}