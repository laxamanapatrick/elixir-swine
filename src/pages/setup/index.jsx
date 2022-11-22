import React from 'react'
import { Outlet } from 'react-router-dom'
import { MotionTag } from '../../utils/Page-Transition'

export const Setup = () => {
  return (
    <MotionTag>
      <Outlet />
    </MotionTag>
  )
}
