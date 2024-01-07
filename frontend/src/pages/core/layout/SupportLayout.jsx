import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Header from '../components/header/Header'

export default function SupportLayout () {
    return (
        <>
            <Helmet
                title='Центр поддержки - TalentSpot'
            />
            <Header>
                <img className='header__purple-search header__purple-search-top' src='../../../images/static/header/header_bg_2.png' alt="" />
                <div className='header__search'>
                    <h1 className='wow fadeIn'>Добро пожаловать в <br /> центр поддержки</h1>

                    <Link to='' className='support__quest'>
                        <span className='sq__text'>Задать вопрос</span>
                        <span className='sq__bth'><i className='mdi mdi-arrow-top-right'></i></span>
                    </Link>
                </div>
            </Header>
            <div id='context'>
                <div className='container context__container'>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    )
}
