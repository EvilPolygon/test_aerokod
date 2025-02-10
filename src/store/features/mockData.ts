export const initialStoreData = {
  timeTracker: {
    currentTaskId: -1,
    timeStarted: 0
  },
  tasks: [
    {
      id: 1,
      title: 'Wash dishes',
      description: 'Wash some dish on kitchen',
      timeLeft: 3790000,
      timeSpend: 0
    },
    {
      id: 2,
      title: 'Feed a cats',
      description: 'У вас есть ПЯТЬ секунд что бы покормить этих вечно голодных обжор',
      timeLeft: 5000,
      timeSpend: 0
    },
    {
      id: 3,
      title: 'Get some workout',
      description: 'Have a such beatiful day for some workout',
      timeLeft: -42,
      timeSpend: 0
    },
  ]
}