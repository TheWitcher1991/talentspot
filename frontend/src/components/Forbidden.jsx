import React from 'react'
import {Link} from 'react-router-dom'
import Helmet from 'react-helmet'

export default function Forbidden () {
    return (
        <div className='global__error'>
            <Helmet
                title='Ошибка 403 - TalentSpot'
            />
            <div className='global__error-left'>
                <h1>Ошибка доступа</h1>
                <span>Ошибка 403 :/</span>
                <p>У Вас нет прав для просмотра этой <br /> страницы или файла</p>
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
