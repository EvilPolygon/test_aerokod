"use client"

import {Header, TrackerList} from '@sharedComponents'
import {AppDispatch} from '@store/store';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '@store/hooks';

export default function Page() {
  return (
    <>
      <Header />
      <TrackerList />
    </>
  )
}