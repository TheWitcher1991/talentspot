import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from '../components/Footer'

export default function BaseLayout () {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    )
}
