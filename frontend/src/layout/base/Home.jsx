import {Link} from 'react-router-dom'
import PriceList from './components/PriceList'
import PlusMap from './components/PlusMap'

export default function Home () {
    return (
        <div className='container context__container'>
            <section className='home__section category__section'>
                <div className='section__title wow fadeIn'>
                    <h2>ВАКАНСИИ ПО КАТЕГОРИЯМ</h2>
                    <Link to=''>Посмотреть все <i className='mdi mdi-arrow-right'></i></Link>
                </div>
                <div className='category__list vac__list'>
                </div>
            </section>

            <section className='home__section hero__section wow fadeIn'>
                <img src='../../images/static/person/home_hero_2.png' alt='' />
                <div className='hero__text'>
                    <span>Вы в поисках <br /> работы?</span>
                    <Link to=''>Создать резюме бесплатно</Link>
                </div>
            </section>

            <section className='home__section job__section'>
                <div className='section__title wow fadeIn'>
                    <h2>СВЕЖИЕ ВАКАНСИИ</h2>
                    <Link to=''>Посмотреть все <i className='mdi mdi-arrow-right'></i></Link>
                </div>
                <div className='section__content job__list'>
                </div>
            </section>

            <section className='home__section hero__section wow fadeIn'>
                <img src='../../images/static/person/company_2.png' alt='' />
                <div className='hero__text'>
                    <span>Вы хотите нанять <br /> специалиста?</span>
                    <Link to=''>Создать личный кабинет</Link>
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
    )
}
