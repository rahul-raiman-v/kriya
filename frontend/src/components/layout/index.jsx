import React from 'react'
import { Header } from './header'
import { Outlet } from 'react-router'

export const Layout = () => {
  return (
    <div className='w-full h-screen'>
      <Header/>
      <Outlet/>
    </div>
  )
}

