import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from '../components/Footer'

export default function SearchLayout () {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    )
}
