import React from 'react'
import {Link, Outlet, useLocation} from 'react-router-dom'
import AuthIcon from '../components/AuthIcon'

export default function AuthLayoutWithIcon () {
    const { pathname} = useLocation()

    return (
        <main id='auth__wrapper' className='auth__wrapper'>
            <section className='auth__section'>
                <AuthIcon />
                <div className='auth__content'>
                    <div className='auth__logo'>
                        <img src='../../../images/static/logo/166666/png/128x128.png' alt='' />
                        <Link to='/'>TalentSpot</Link>
                    </div>
                    <div className='auth__context'>
                        <Outlet />
                    </div>
                    <div className='auth__link'>
                        {pathname === '/login' && (
                            <>
                                У вас нет аккаунта? <Link to='/signup'>Регистрация</Link>
                            </>
                        )}
                        {pathname === '/signup' && (
                            <>
                                У вас есть аккаунт? <Link to='/login'>Войти</Link>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </main>
    )
}
