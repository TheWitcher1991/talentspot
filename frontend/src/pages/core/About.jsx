import React from 'react'
import Header from './components/header/Header'

export default function About () {
    return (
        <>
            <Header image={2}>
                <div className='header__search'>
                    <div className='header__resume parallax-bg-1'>
                        <div className='hr-top'>
                            <img src='../../images/media/user/image-room.png' alt='' />
                                <div>
                                    <span>Иван Иванов</span>
                                    <p>1С:Программист</p>
                                </div>
                        </div>
                        <div className='hr-bottom'>
                            <div>
                                <span title='Город'><i className='mdi mdi-map-marker'></i> Ставрополь</span>
                                <span title='Опыт работы'><i className='mdi mdi-briefcase'></i> 3 года</span>
                            </div>
                            <div>
                                <span title='Образование'><i className='mdi mdi-school'></i> Высшее</span>
                                <span title='Возраст'><i className='mdi mdi-baby-face'></i> 26 лет</span>
                            </div>
                        </div>
                    </div>

                    <h1 className='wow fadeIn'>Сервис для поиска<br />
                        <m>квалифицированного </m>
                         персонала <br />
                        TalentSpot
                    </h1>

                    <a href='/support' className='support__quest support__quest-large wow fadeIn'>
                        <span className='sq__text'>Центр поддержки</span>
                        <span className='sq__bth'><i className='mdi mdi-arrow-top-right'></i></span>
                    </a>

                    <span className='header__cart-mini cart__company-about parallax-bg-2'>
                        <span><i className='mdi mdi-server-security'></i></span>217 работодателей
                    </span>
                    <span className='header__cart-mini cart__resume-about parallax-bg-3'>
                        <span><i className='mdi mdi-account-school'></i></span> 10000+ специалистов
                    </span>
                    <span className='header__cart-mini cart__univers-about parallax-bg-4'>
                        <span><i className='mdi mdi-domain'></i></span> 100+ университетов
                    </span>
                </div>
            </Header>

            <div id='context'>

            </div>
        </>
    )
}
