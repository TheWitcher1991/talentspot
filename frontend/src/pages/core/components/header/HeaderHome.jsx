import React from 'react'
import Nav from '../Nav'

export default function Header ({children}) {
    return (
        <header id='header'>
            <div className='header__tmp'>
                <div className='container header__container'>
                    <Nav />
                    {children}
                </div>
            </div>
        </header>
    )
}
