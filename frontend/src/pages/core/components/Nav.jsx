import React, {useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'

export default function BaseNav () {
    const [user, setUser] = useState(1)
    const { pathname } = useLocation()

    let routesGuest = {

    }

    return (
        <nav className='header__menu'>
            <span className='header__logo'><img src='../../../images/static/logo.png' alt='' /></span>
            <ul className='header__ul'>
                <li><Link className='header__active' to='/'>Главная</Link></li>
                <li><Link to='/search/resume'>Резюме</Link></li>
                <li><Link to='/search/vacancy'>Вакансии</Link></li>
                <li><Link to='/search/company'>Компании</Link></li>
                <li><Link to='/about'>О нас</Link></li>
            </ul>
            <div className='header__bth'>
                <Link to='/login'><i className='mdi mdi-login'></i> Войти</Link>
                <Link to='/signup'><i className='mdi mdi-account-plus-outline'></i> Регистрация</Link>
            </div>
        </nav>
    )
}
