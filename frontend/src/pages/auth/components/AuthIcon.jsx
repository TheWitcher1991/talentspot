import React from 'react'

export default function AuthIcon () {
    return (
        <div className='auth__image auth__image-large'>
            <div className='auth__list'>
                <h3>Наши возможности</h3>
                <div className='auth__item'>
                    <span>
                        <i className='mdi mdi-account-search-outline'></i>
                    </span>
                    <div>
                        <span>Поиск резюме и вакансии</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
                <div className='auth__item'>
                     <span>
                        <i className='mdi mdi-database-lock-outline'></i>
                     </span>
                    <div>
                        <span>Разместить резюме и вакансии</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
                <div className='auth__item'>
                     <span>
                        <i className='mdi mdi-creation'></i>
                     </span>
                    <div>
                        <span>Автоматизация найма</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
                <div className='auth__item'>
                     <span>
                        <i className='mdi mdi-chart-line-variant'></i>
                     </span>
                    <div>
                        <span>Аналитическая информация</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
                <div className='auth__item'>
                     <span>
                        <i className='mdi mdi-view-grid-outline'></i>
                     </span>
                    <div>
                        <span>Дополнительные сервисы</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
                <div className='auth__item'>
                     <span>
                        <i className='mdi mdi-domain'></i>
                     </span>
                    <div>
                        <span>Реклама вашей компании</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
