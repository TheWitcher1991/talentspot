import React from 'react'
import {Link} from 'react-router-dom'
import Header from './components/header/Header'

export default function Automation () {
    return (
        <>
            <Header image={2}>
                <div className="header__search-flex">
                    <div>
                        <h1>Автоматизируйте процесс <br /> найма кадров</h1>
                        <span>Привлечем, отберем и пригласим кандидатов — вам <br /> останется только провести собеседование</span>
                        <Link to=''>Узнать подробнее</Link>
                    </div>
                </div>
            </Header>

            <div className='container context__container'>
                <section className='home__section employer__section'>
                    <div className='plus__title wow fadeIn'>
                        <span>Почему вы должны<m></m></span>
                        <span>включить <m>автоматизацию</m>?</span>
                    </div>
                    <div className='section__content section__employer'>
                        <div className='employer__item'>
                            <picture><img src='../../images/static/dashboard/p_1.png' alt='' /></picture>
                            <span>Вы не будете терять ценных кандидатов</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className='employer__item'>
                            <picture><img src='../../images/static/dashboard/p_2.png' alt='' /></picture>
                            <span>Вы получаете только подходящие отклики</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className='employer__item'>
                            <picture><img src='../../images/static/dashboard/p_3.png' alt='' /></picture>
                            <span>Остается больше времени на стратегические задачи</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </section>

                <section className='home__section employer__section'>

                    <div className='section__content section__text'>
                        <div className='section__text-item'>
                            <span>Обеспечим постоянный поток подходящих кандидатов</span>
                            <p>Взаимодействием с кандидатом займется наш чат-бот</p>
                            <a href=''>Как это работает?</a>
                        </div>
                        <div className='section__text-img'>
                            <img src='../../images/static/dashboard/auto.png' alt='' />
                        </div>
                    </div>
                </section>

                <section className='home__section employer__section'>
                    <div className='plus__title wow fadeIn'>
                        <span>Как работает<m></m></span>
                        <span><m>автоматизация</m> найма?</span>
                    </div>
                    <div className='section__content section__slot-wrap'>
                        <div className='section__slot section__slot-bigger' id='item-0' style={{backgroundImage: `url('../../images/static/dashboard/auto_2.png')`}}>
                            <div className='slot__div-text'>
                                <span>Готово к подключению</span>
                                <p>Вы выбираете критерии отбора резюме по всем доступным на портале фильтрам — система оценивает по ним кандидатов</p>
                            </div>
                            <a href=''>Как включить?</a>
                        </div>
                        <div className='section__slot section__slot-hover' id='item-1'>
                        <span className='slot__text'>
                             Чат-бот может провести профессиональные собеседование: вы можете сформулировать задачи, которые кандидат должен в установленном вами время сделать,
                            или задать контрольные вопросы и варианты ответов на них,
                            все ответы и решения задач кандидат отравит чат-боту, а чат-бот отправит их на оценку вам
                        </span>
                            <button className='slot__arrow'>Собеседование <i className='mdi mdi-arrow-top-right'></i></button>
                        </div>
                        <div className='section__slot section__slot-hover section__slot-center section__slot-main' id='item-2'>
                        <span className='slot__text'>
                            Работаем с базой резюме вместо вас: система сама оценит соискателя или отправит его в кадровый резерв либо пригласит на вакансию по установленным критериям
                        </span>
                            <button className='slot__arrow'>Приглашения <i className='mdi mdi-arrow-top-right'></i>   </button>
                        </div>
                        <div className='section__slot section__slot-hover section__slot-center' id='item-3'>
                        <span className='slot__text'>
                             Чат-бот проведет за вас интервью с кандидатом, по заданным вами вопросам и ответам, после чего пришлет результаты вам на оценку
                        </span>
                            <button className='slot__arrow'>Интервью <i className='mdi mdi-arrow-top-right'></i> </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
