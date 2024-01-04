import React from 'react'
import {Link} from 'react-router-dom'
import PriceList from './components/PriceList'
import PlusMap from './components/PlusMap'
import HeaderHome from './components/HeaderHome'
import CategoryItem from './components/CategoryItem'
import VacancyHome from './components/VacancyHome'
import specialization from '../../utils/specialization'
import vacancies from '../../utils/vacancies'

export default function Home () {
    const [category, setCategory] = React.useState(specialization)
    const [vacancy, setVacancy] = React.useState(vacancies)

    return (
        <>
            <HeaderHome>
                <h1 className='header__name'>TALENT <b></b> SPOT</h1>
                <img className='header__purple' src='../../images/static/header/header_bg_1.png' alt='' />
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
                                    <img src='../../images/media/company/c_1.png' alt='' />
                                    <img src='../../images/media/company/c_2.png' alt='' />
                                    <img src='../../images/media/company/c_3.png' alt='' />
                                    <img src='../../images/media/company/c_4.png' alt='' />
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
                                <img src='../../images/static/person/home_hero_1.png' alt='' />
                            </span>
                    </div>
                </div>
            </HeaderHome>

            <div className='container context__container'>
                <section className='home__section category__section'>
                    <div className='section__title wow fadeIn'>
                        <h2>ВАКАНСИИ ПО КАТЕГОРИЯМ</h2>
                        <Link to=''>Посмотреть все <i className='mdi mdi-arrow-right'></i></Link>
                    </div>
                    <div className='category__list vac__list'>
                        {category.map(({link, icon, name, count}) => {
                            return <CategoryItem link={link} icon={icon} name={name} count={count} key={Date.now()} />
                        })}
                    </div>
                </section>

                <section className='home__section hero__section wow fadeIn'>
                    <img src='../../images/static/person/home_hero_2.png' alt='' />
                    <div className='hero__text'>
                        <span>Вы в поисках <br /> работы?</span>
                        <Link to='/signup'>Создать резюме бесплатно</Link>
                    </div>
                </section>

                <section className='home__section job__section'>
                    <div className='section__title wow fadeIn'>
                        <h2>СВЕЖИЕ ВАКАНСИИ</h2>
                        <Link to=''>Посмотреть все <i className='mdi mdi-arrow-right'></i></Link>
                    </div>
                    <div className='section__content job__list'>
                        {vacancy.map(({time, company, title, text, link, exp}) => {
                            return <VacancyHome time={time} company={company} title={title} text={text} link={link} exp={exp} key={Date.now()} />
                        })}
                    </div>
                </section>

                <section className='home__section hero__section wow fadeIn'>
                    <img src='../../images/static/person/company_2.png' alt='' />
                    <div className='hero__text'>
                        <span>Вы хотите нанять <br /> специалиста?</span>
                        <Link to='/signup'>Создать личный кабинет</Link>
                    </div>
                </section>

                <PlusMap />

                <section className='home__section plus__section'>
                    <div className='plus__title wow fadeIn'>
                        <span>Наши тарифы<m></m></span>
                        <span>На множество <m>услуг</m> портала</span>
                    </div>
                    <PriceList />
                </section>
            </div>
        </>
    )
}
