import React from 'react'
import { Outlet } from 'react-router-dom'

const TabsInner = () => {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default TabsInner