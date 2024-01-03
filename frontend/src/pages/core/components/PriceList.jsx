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
                    <span>3000 руб. </span>
                    <m> / месяц</m>
                </div>
                <div className='services__item-list'>
                    <div><Icon path={mdiCheckCircle} size={0.8} color={colors.MAIN} style={{marginRight: 5}} /> 15 вакансий</div>
                    <div><Icon path={mdiCheckCircle} size={0.8} color={colors.MAIN} style={{marginRight: 5}} /> Вакансия на 30 дней</div>
                    <div><Icon path={mdiCheckCircle} size={0.8} color={colors.MAIN} style={{marginRight: 5}} /> 3 менеджера вакансий</div>
                    <div><Icon path={mdiCheckCircle} size={0.8} color={colors.MAIN} style={{marginRight: 5}} /> Доступ к базе кандидатов на 50%</div>
                </div>
                <Link className='services__item-link' to='/signup'>Регистрация</Link>
            </div>
            <div className='services__item'>
                <div className='services__item-title'><Icon path={mdiAutoFix} size={1} color={colors.MAIN} style={{marginRight: 10}} /> Базовый плюс</div>
                <div className='services__item-price'>
                    <span>6000 руб. </span>
                    <m>/ месяц</m>
                </div>
                <div className='services__item-list'>
                    <div><Icon path={mdiCheckCircle} size={0.8} color={colors.MAIN} style={{marginRight: 5}} /> 30 вакансий</div>
                    <div><Icon path={mdiCheckCircle} size={0.8} color={colors.MAIN} style={{marginRight: 5}} /> Срок вакансии до 60 дней</div>
                    <div><Icon path={mdiCheckCircle} size={0.8} color={colors.MAIN} style={{marginRight: 5}} /> 10 менеджеров вакансий</div>
                    <div><Icon path={mdiCheckCircle} size={0.8} color={colors.MAIN} style={{marginRight: 5}} /> Доступ к базе кандидатов на 75%</div>
                </div>
                <Link className='services__item-link' to='/signup'>Регистрация</Link>
            </div>
            <div className='services__item'>
                <div className='services__item-title'><Icon path={mdiCrownOutline} size={1} color={colors.MAIN} style={{marginRight: 10}} /> Премиум</div>
                <div className='services__item-price'>
                    <span>9000 руб. </span>
                    <m>/ месяц</m>
                </div>
                <div className='services__item-list'>
                    <div><Icon path={mdiCheckCircle} size={0.8} color={colors.MAIN} style={{marginRight: 5}} /> Неограниченные вакансии</div>
                    <div><Icon path={mdiCheckCircle} size={0.8} color={colors.MAIN} style={{marginRight: 5}} /> Срок вакансии до 120 дней</div>
                    <div><Icon path={mdiCheckCircle} size={0.8} color={colors.MAIN} style={{marginRight: 5}} /> Неограниченные менеджеры</div>
                    <div><Icon path={mdiCheckCircle} size={0.8} color={colors.MAIN} style={{marginRight: 5}} /> Полный доступ к базе кандидатов</div>
                    <div><Icon path={mdiCheckCircle} size={0.8} color={colors.MAIN} style={{marginRight: 5}} /> Брендирование страницы компании</div>
                </div>
                <Link className='services__item-link' to='/signup'>Регистрация</Link>
            </div>
        </div>
    )
}
