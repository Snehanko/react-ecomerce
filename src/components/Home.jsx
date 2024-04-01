import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Home() {
    return (
        <>
            <Navbar />
            <h1>Home Page</h1>
            <Outlet />
        </>
    )
}

export default Home
