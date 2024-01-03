import React from 'react'
import Header from "../components/Header";

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
        </>
    )
}
