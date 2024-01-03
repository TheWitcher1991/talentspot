import {Link} from 'react-router-dom'

export default function Support () {
    return (
        <>
            <h1 className='search__title'>
                Центр поддержки сервиса TalentSpot
            </h1>

            <section className='context__order'>
                <div className='support__list'>
                    <Link to='/support/legal'>
                        <div>
                            <i className='mdi mdi-briefcase-variant'></i>
                            <span>Открытые документы ООО «ТалентСпот»</span>
                        </div>
                        <span><i className='mdi mdi-arrow-top-right'></i></span>
                    </Link>
                    <Link to='/support/policy'>
                        <div>
                            <i className='mdi mdi-police-badge'></i>
                            <span>Политика обработки персональных данных</span>
                        </div>
                        <span><i className='mdi mdi-arrow-top-right'></i></span>
                    </Link>
                    <Link to='/support/terms'>
                        <div>
                            <i className='mdi mdi-web'></i>
                            <span>Условия использования cайта</span>
                        </div>
                        <span><i className='mdi mdi-arrow-top-right'></i></span>
                    </Link>
                    <Link to='/support/conditions'>
                        <div>
                            <i className='mdi mdi-view-grid-outline'></i>
                            <span>Условия оказания <br /> услуг</span>
                        </div>
                        <span><i className='mdi mdi-arrow-top-right'></i></span>
                    </Link>
                    <Link to='/support/offer'>
                        <div>
                            <i className='mdi mdi-file-sign'></i>
                            <span>Публичная офёрта</span>
                        </div>
                        <span><i className='mdi mdi-arrow-top-right'></i></span>
                    </Link>
                    <Link to='/support/promo'>
                        <div>
                            <i className='mdi mdi-volume-high'></i>
                            <span>Реклама на сайте</span>
                        </div>
                        <span><i className='mdi mdi-arrow-top-right'></i></span>
                    </Link>
                    <Link to='/support'>
                        <div>
                            <i className='mdi mdi-account-school'></i>
                            <span>Руководство использования соискателя</span>
                        </div>
                        <span><i className='mdi mdi-arrow-top-right'></i></span>
                    </Link>
                    <Link to='/support' target='_blank'>
                        <div>
                            <i className='mdi mdi-domain'></i>
                            <span>Руководство использования работодателя</span>
                        </div>
                        <span><i className='mdi mdi-arrow-top-right'></i></span>
                    </Link>
                    <Link to='/support/feedback'>
                        <div>
                            <i className='mdi mdi-headset'></i>
                            <span>Обратная связь</span>
                        </div>
                        <span><i className='mdi mdi-arrow-top-right'></i></span>
                    </Link>
                </div>
            </section>
        </>
    )
}
