'use client'
import {deleteTask, startTrack, stopTrack} from '@store/features/todoSlice';
import {AppDispatch} from '@store/store';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '@store/hooks';

import {parseFROMTimestamp} from '@utils/timeParsers';

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
      // выести что задача уже выполняется
      console.log('denied')
      return ;
    }
    return dispatch(startTrack(id))
  }

  return (
    <div>
      {task.id}
      {task.title}
      {task.description}
      {parseFROMTimestamp(task.timeLeft)}

      <button 
        className={'bg-lime-200'}
        onClick={() => trackHandler(task.id)}
      >
        {
          curentTaskIsTracking ? 'Остановить' : 'Выполнять'
        }
      </button>

      <button 
        className={'bg-red-100'} 
        onClick={() => deleteThisTask(task.id)}
      >
        Удалить задачу
      </button>
    </div>
  )
}