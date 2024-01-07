import React from 'react'
import Header from "../components/header/Header";
import {Link} from "react-router-dom";

export default function SearchCompany () {
    return (
        <>
            <Header image={3}>
                <div className='header__search'>
                    <h1 className='wow fadeIn'>Сейчас доступно <br />
                        <b>27
                            <img src='../../../images/static/Vector.png' alt='' />
                        </b> компаний</h1>

                    <div className='form__search-two wow fadeIn'>
                        <div className='search__label-two'>
                            <label htmlFor='search' className='search__span-two'>
                                <i className='mdi mdi-magnify'></i>
                                <input name='search' id='search' type='text' placeholder='Ключевое слово' />
                            </label>
                            <label htmlFor='search' className='search__span-two'>
                                <i className='mdi mdi-crosshairs-gps'></i>
                                <input name='search' id='address' type='text' placeholder='Город' />
                            </label>
                        </div>
                        <button type='button'><i className='mdi mdi-arrow-top-right'></i></button>
                    </div>
                </div>
            </Header>

            <div id='context'>
                <div className='container context__container'>

                    <h1 className='search__title'>
                        Найдено 27 компаний
                    </h1>

                    <section className='context__order resume__order'>
                        <div className='order__top'>
                            <div className='order__top-left'>
                                <span>Фильтры</span>
                                <button type='button'>Сбросить</button>
                            </div>
                            <div className='order__top-right'>
                                <span>Показано 1-11 из 11</span>
                                <div className='order__top-select'>
                                    <a href='' className='a__trans'>
                                        Расширенный поиск <i className='mdi mdi-tune-variant'></i>
                                    </a>
                                    <div className='select__trans'>
                                        Сортировка: <span>Новые</span> <i className='mdi mdi-chevron-down'></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='order__wrap'>
                            <div className='order__filter resume__filter'>
                                <div className='filter__load'></div>

                            </div>
                            <div className='order__list'>
                                <div className='company__list'>

                                </div>
                                <div className='paginator'>
                                    <div data-page='1'><a><i className='mdi mdi-chevron-double-left'></i></a></div>
                                    <div className='page-active' data-page='1'><a href=''>1</a></div>
                                    <div data-page='2'><a>2</a></div>
                                    <div data-page='3'><a>3</a></div>
                                    <span>...</span>
                                    <div data-page='5'><a>5</a></div>
                                    <div data-page='2'><a><i className='mdi mdi-chevron-right'></i></a></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}
