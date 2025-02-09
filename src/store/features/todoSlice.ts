import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {initialStoreData} from './mockData'
import {parseTOTimestamp} from "@utils/timeParsers";

type Task = {
  id: number,
  title: string,
  description: string,
  timeLeft: number,
}

type CreateTaskData = {
  title: string,
  description: string,
  hours: number,
  minutes: number
}

let nextId: number = 4;

export const todo = createSlice({
  name: 'todo',
  initialState: initialStoreData,
  reducers: {
    deleteTask: (state, action: PayloadAction<number>) => {
      const taskForDelete = state.tasks.map(item => item.id).indexOf(action.payload)
      state.tasks.splice(taskForDelete, 1)
    },
    createTask: (state, action: PayloadAction<CreateTaskData>) => {
      state.tasks.push(
        {
          id: nextId,
          title: action.payload.title,
          description: action.payload.description,
          timeLeft: parseTOTimestamp(action.payload.hours, action.payload.minutes)
        }
      )
      nextId += 1;
    },
    startTrack: (state, action: PayloadAction<number>) => {
      state.timeTracker.currentTaskId = action.payload;
      state.timeTracker.timeStarted = Date.now();
    },
    stopTrack: (state) => {
      const timeEnd = Date.now();
      const idTask = state.tasks.map(item => item.id).indexOf(state.timeTracker.currentTaskId);
      state.tasks[idTask].timeLeft = state.tasks[idTask].timeLeft - (timeEnd - state.timeTracker.timeStarted);

      state.timeTracker.currentTaskId = -1;
    }
  }
})

export type {Task};

export const {deleteTask, createTask, startTrack, stopTrack} = todo.actions;
export default todo.reducer;