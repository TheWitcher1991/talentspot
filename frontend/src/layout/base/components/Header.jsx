import React from 'react'
import {Link} from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiLogin, mdiAccountPlusOutline } from '@mdi/js'

export default function Header ({location}) {

    console.log(location)

    return (
        <header id='header'>
            <div className='header__tmp'>
                <div className='container header__container'>
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
                            <Link to='/login'><Icon path={mdiLogin} size={1} color='white' style={{marginRight: 10}} /> Войти</Link>
                            <Link to='/signup'><Icon path={mdiAccountPlusOutline} size={1} color='white' style={{marginRight: 10}} /> Регистрация</Link>
                        </div>

                    </nav>
                    <h1 className='header__name'>TALENT <m></m> SPOT</h1>
                    <img className='header__purple' src='../../../images/static/header/header_bg_1.png' alt='' />
                    <div className='header__info'>
                        <div className='header__info-left wow fadeIn'>
                            <form className='home__form' action='' method='GET'>
                                <label htmlFor='search' className='search__label'>
                                    <div className='search__span'>
                                        <i className='mdi mdi-magnify'></i>
                                        <input name='search' id='search' type='text' placeholder='Должность или ключевое слово' />
                                    </div>
                                    <button type='button'><i className='mdi mdi-arrow-top-right'></i></button>
                                </label>
                            </form>
                            <div className='header__popular'>
                                Популярное:
                                <div>
                                    <a href=''>Программист</a>
                                    <a href=''>Инженер</a>
                                    <a href=''>Дизайнер</a>
                                </div>
                            </div>
                            <div className='header__company'>
                                <span>Нам доверяют</span>
                                <div className='header__company-flex'>
                                    <div className='header__company-left'>
                                        <img src='../../../images/media/company/c_1.png' alt='' />
                                        <img src='../../../images/media/company/c_2.png' alt='' />
                                        <img src='../../../images/media/company/c_3.png' alt='' />
                                        <img src='../../../images/media/company/c_4.png' alt='' />
                                    </div>
                                    <div className='header__company-right'>
                                        <span>200+</span>
                                        <p>работодателей</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='header__info-right'>
                            <span className='parallax-bg-2 header__cart-mini cart__company wow fadeIn'>
                                <span><i className='mdi mdi-server-security'></i></span>217 работодателей
                            </span>
                                <span className='parallax-bg-3 header__cart-mini cart__job wow fadeIn'>
                                <span><i className='mdi mdi-briefcase'></i></span>7000+ рабочих мест
                            </span>
                                <span className='parallax-bg-4 header__cart-mini cart__resume wow fadeIn'>
                                <span><i className='mdi mdi-account-school'></i></span> 10000+ специалистов
                            </span>
                                <span className='parallax-bg-1 header__hero wow fadeIn'>
                                <img src='../../../images/static/person/home_hero_1.png' alt='' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
