import React from 'react'
import {Outlet} from 'react-router-dom'

export default function AuthLayoutWithoutIcon () {
    return (
        <main id='auth__wrapper' className='auth__wrapper'>
            <section className='auth__section'>
                <Outlet />
            </section>
        </main>
    )
}
