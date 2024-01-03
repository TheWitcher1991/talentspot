import React, {lazy, Suspense} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Loader from './components/Loader'
import './styles/index.scss'

const BaseLayout = lazy(() => import('./layout/base/BaseLayout'))
const Home = lazy(() => import('./layout/base/Home'))
const Automation = lazy(() => import('./layout/base/Automation'))
const NotFound = lazy(() => import('./components/NotFound'))

export default function App () {

    let user = 1
    // 1 - гость
    // 2 - соискатель
    // 3 - работодатель

    /**
     * Все три имеют доступ к страницам, которые находятся в layout/base
     * В зависимости типа пользователя будет соответствующий header, footer и т.д.
     *
     * Стартовая страница для гостя: /
     * Стартовая страница для соискателя: applicant/dashboard
     * Стартовая страница для работодателя: employer/dashboard
     *
     * TODO: Сделать файл routes.js
     */

    return (
        <main id='wrapper' className='wrapper'>
            <Router>
                <Suspense fallback={<Loader />}>
                    <Routes>
                        {/** <BASE_ROUTER> **/}
                        <Route path='/' element={<BaseLayout />} >
                            <Route index element={<Home/>} />
                            <Route path='vacancy'  />
                            <Route path='company'  />
                            <Route path='resume'  />
                            <Route path='about'  />
                            <Route path='automation' element={<Automation />} />
                        </Route>

                        <Route path='/search'>
                            {/** ПОИСК **/}
                            <Route path='vacancy'  />
                            <Route path='company'  />
                            <Route path='resume'  />
                            {/** РАСШИРЕННЫЕ ПОИСК **/}
                            <Route path='expanded'>
                                <Route path='vacancy'  />
                                <Route path='company'  />
                                <Route path='resume'  />
                            </Route>
                        </Route>

                        <Route path='/support'>
                            {/** ЦЕНТР ПОДДЕРЖКИ **/}
                            <Route index />
                            <Route path='conditions'  />
                            <Route path='feedback'  />
                            <Route path='legal'  />
                            <Route path='main'  />
                            <Route path='oferta'  />
                            <Route path='policy'  />
                            <Route path='promo'  />
                            <Route path='terms'  />
                        </Route>
                        {/** </BASE_ROUTER> **/}

                        {/** С этим че делать? **/}
                        <Route path='/logout'  />

                        {user === 1 && (
                            <>
                                <Route path='/login'  />
                                <Route path='/signup'  />
                                <Route path='/recovey'  />
                            </>
                        )}

                        {user === 2 && (
                            <Route path='/employer'>
                            </Route>
                        )}

                        {user === 3 && (
                            <Route path='/applicant'>
                            </Route>
                        )}

                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Suspense>
            </Router>
        </main>
    )
}
