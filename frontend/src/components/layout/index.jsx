import React from 'react'
import { Outlet } from 'react-router'
import { Header } from './header'

React.lazy(()=> import('react'));

React.lazy(()=> import('react-router'));
React.lazy(()=> import('./header'));

export const Layout = () => {
  return (
    <div>
        <Header/>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

