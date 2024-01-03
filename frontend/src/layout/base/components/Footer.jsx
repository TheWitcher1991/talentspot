import React from 'react'
import {Link} from 'react-router-dom'
import Icon from '@mdi/react'
import {mdiPhoneOutline, mdiEmailOutline} from '@mdi/js'

export default function Footer () {
    return (
        <footer id='footer'>
            <div className='footer__tmp'>
                <div className='container footer__container'>
                    <div className='footer__block-wrap'>
                        <div className='footer__logo'>
                            <div className='footer__logo-img'>
                                <img src='../../../images/static/logo.png' alt='' />
                            </div>
                            <div className='footer__phone footer__rev'><span><Icon path={mdiPhoneOutline} size={0.8} color='white' /></span> +7 (909) 767-72-17</div>
                            <div className='footer__mail footer__rev'><span><Icon path={mdiEmailOutline} size={0.8} color='white' /></span> admin@talentspot.ru</div>
                        </div>
                        <div className='footer__info'>
                            <div className='footer__block'>
                                <span>Материалы сайта</span>
                                <ul>
                                    <li><Link to=''>О нас</Link></li>
                                    <li><Link to=''>Центр поддержки</Link></li>
                                    <li><Link to=''>Реклама на сайте</Link></li>
                                    <li><Link to=''>Политика конфиденциальности</Link></li>
                                    <li><Link to=''>Публичная оферта</Link></li>
                                    <li><Link to=''>Обратная связь</Link></li>
                                </ul>
                            </div>
                            <div className='footer__block'>
                                <span>Работодателям</span>
                                <ul>
                                    <li><Link to=''>Разместить вакансии</Link></li>
                                    <li><Link to=''>Найти сотрудников</Link></li>
                                    <li><Link to=''>Прайс-лист</Link></li>
                                    <li><Link to='/automation'>Автоматизация найма</Link></li>
                                    <li><Link to=''>Помощь работодателям</Link></li>
                                </ul>
                            </div>
                            <div className='footer__block'>
                                <span>Соискателям</span>
                                <ul>
                                    <li><Link to=''>Разместить резюме</Link></li>
                                    <li><Link to=''>Каталог компаний</Link></li>
                                    <li><Link to=''>Каталог вакансий</Link></li>
                                    <li><Link to=''>Помощь соискателям</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='footer__copy'>
                        <div className='copy__text'>
                            <span><i className='mdi mdi-copyright'></i> 2023 ООО «ТалентСпот»</span>
                            <span>
                                Мы используем cookies для сбора обезличенных персональных данных — они помогают нам настраивать рекламу и анализировать трафик.
                                Оставаясь на сайте, вы соглашаетесь на сбор персональных данных
                                <br/><br/>
                                Данный портал был разработан при поддержке гранта Фонда содействия инновациям,
                                предоставляемого в рамках программы «Студенческий стартап» федерального проекта
                                «Платформа университетского технологического предпринимательства»
                            </span>
                        </div>
                        <div className='copy__img'>
                            <Link target='_blank' to='https://univertechpred.ru/'>
                                <img src='../../../images/static/nti.svg' alt='nti' />
                            </Link>
                            <span>/</span>
                            <Link target='_blank' to='https://fasie.ru/'>
                                <img src='../../../images/static/fasie.svg' alt='nti' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )

}
