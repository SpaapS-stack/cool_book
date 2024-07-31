import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <header>karp</header>
    <main>
        <Outlet/>
    </main>
    <footer>cazan</footer>
    </>
  )
}
