import React from 'react'
import {Link} from 'react-router-dom'
import Icon from '@mdi/react'
import {mdiAtom, mdiAutoFix, mdiCrownOutline, mdiCheckCircle} from '@mdi/js'
import colors from '../../../utils/colors'

export default function PriceList () {
    return (
        <div className='section__content section__services'>
            <div className='services__item'>
                <div className='services__item-title'><Icon className='' path={mdiAtom} size={1} color={colors.MAIN} style={{marginRight: 10}} /> Базовый</div>
                <div className='services__item-price'>
                    <span>3600 руб. </span>
                    <m> / месяц</m>
                </div>
                <div className='services__item-list'>
                    <div><i className='mdi mdi-briefcase'></i> 15 вакансий</div>
                    <div><i className='mdi mdi-timer'></i> Вакансия до 30 дней</div>
                    <div><i className='mdi mdi-account-circle'></i> 7 менеджеров вакансий</div>
                    <div><i className='mdi mdi-school'></i> Доступ к базе кандидатов на 70%</div>
                    <a href='/automation'><i className='mdi mdi-creation'></i> Автоматизация найма</a>
                </div>
                <Link className='services__item-link' to='/signup'>Регистрация</Link>
            </div>
            <div className='services__item'>
                <div className='services__item-title'><Icon path={mdiAutoFix} size={1} color={colors.MAIN} style={{marginRight: 10}} /> Базовый плюс</div>
                <div className='services__item-price'>
                    <span>6600 руб. </span>
                    <m>/ месяц</m>
                </div>
                <div className='services__item-list'>
                    <div><i className='mdi mdi-briefcase'></i> 30 вакансий</div>
                    <div><i className='mdi mdi-timer'></i> Вакансия до 60 дней</div>
                    <div><i className='mdi mdi-account-circle'></i> 15 менеджеров вакансий</div>
                    <div><i className='mdi mdi-school'></i> Полный доступ к базе кандидатов</div>
                    <a href='/automation'><i className='mdi mdi-creation'></i> Автоматизация найма</a>
                </div>
                <Link className='services__item-link' to='/signup'>Регистрация</Link>
            </div>
            <div className='services__item'>
                <div className='services__item-title'><Icon path={mdiCrownOutline} size={1} color={colors.MAIN} style={{marginRight: 10}} /> Премиум</div>
                <div className='services__item-price'>
                    <span>10800 руб. </span>
                    <m>/ месяц</m>
                </div>
                <div className='services__item-list'>
                    <div><i className='mdi mdi-briefcase'></i> Неограниченные вакансии</div>
                    <div><i className='mdi mdi-timer'></i>Срок вакансии до 120 дней</div>
                    <div><i className='mdi mdi-account-circle'></i> Неограниченные менеджеры</div>
                    <div><i className='mdi mdi-school'></i> Полный доступ к базе кандидатов</div>
                    <a href='/automation'><i className='mdi mdi-creation'></i> Автоматизация найма</a>
                    <div><i className='mdi mdi-check-circle'></i> Брендирование страницы компании</div>
                </div>
                <Link className='services__item-link' to='/signup'>Регистрация</Link>
            </div>
        </div>
    )
}
