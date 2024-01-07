import React from 'react'
import Nav from './Nav'

export default function Header ({children, ...props}) {

    let imgHref = `../../../images/static/header/header_bg_${props.image}.png` || '../../../images/static/header/header_bg_3.png'

    return (
        <header id='header__search'>
            <div className='header__tmp-search'>
                <div className='container header__container'>
                    <Nav />
                    <img className='header__purple-search' src={imgHref} alt='' />
                    {children}
                </div>
            </div>
        </header>
    )
}
