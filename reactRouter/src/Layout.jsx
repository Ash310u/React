import React from 'react'
import Headers from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout () {
    return (
        <>
            <Headers />
            <Outlet />
            <Footer />
        </>
    )
}