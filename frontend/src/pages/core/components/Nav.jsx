import React, {useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'

export default function BaseNav () {
    const [user, setUser] = useState(1)
    const { pathname } = useLocation()

    let routesGuest = [
        { name: 'Главная', link: '/' },
        { name: 'Резюме', link: '/search/resume' },
        { name: 'Вакансии', link: '/search/vacancy' },
        { name: 'Компании', link: '/search/company' },
        { name: 'О нас', link: '/about' },
    ]
//
    return (
        <nav className='header__menu'>
            <span className='header__logo'><img src='../../../images/static/logo.png' alt='' /></span>
            <ul className='header__ul'>
                {user === 1 && routesGuest.map(({name, link}) => {
                    return <li><Link to={link} className={pathname === link ? 'header__active' : ''}>{name}</Link></li>
                })}
            </ul>
            <div className='header__bth'>
                <Link to='/login'><i className='mdi mdi-login'></i> Войти</Link>
                <Link to='/signup'><i className='mdi mdi-account-plus-outline'></i> Регистрация</Link>
            </div>
        </nav>
    )
}
