import React from 'react'
import {Link} from 'react-router-dom'
import Helmet from 'react-helmet'

export default function NotFound () {
    return (
        <div className='global__error'>
            <Helmet
                title='Ошибка 404 - TalentSpot'
            />
            <div className='global__error-left'>
                <h1>Такой страницы нет</h1>
                <span>Ошибка 404 :(</span>
                <p>К сожалению, страница не найдена <br /> Такой страницы не существует, либо она была не удалена</p>
                <div>
                    <Link to='/'>Главная</Link>
                    <Link to='/search/resume'>Резюме</Link>
                    <Link to='/search/vacancy'>Вакансии</Link>
                    <Link to='/search/company'>Компании</Link>
                </div>
            </div>

            <div className='global__error-right'>
                <img src='../images/static/404.png' alt='' />
            </div>
        </div>
    )
}
