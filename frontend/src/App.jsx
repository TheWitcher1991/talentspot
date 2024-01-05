import React, { lazy, Suspense, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Loader from './components/Loader'
import './styles/index.scss'
const Dashboard = lazy(() => import('./pages/applicant/Dashboard'))

const BaseLayout = lazy(() => import('./pages/core/layout/BaseLayout'))
const Home = lazy(() => import('./pages/core/Home'))
const Vacancy = lazy(() => import('./pages/core/Vacancy'))
const Company = lazy(() => import('./pages/core/Company'))
const Resume = lazy(() => import('./pages/core/Resume'))
const About = lazy(() => import('./pages/core/About'))
const Automation = lazy(() => import('./pages/core/Automation'))

const AuthLayoutWithIcon = lazy(() =>
	import('./pages/auth/layout/AuthLayoutWithIcon')
)
const AuthLayoutWithoutIcon = lazy(() =>
	import('./pages/auth/layout/AuthLayoutWithoutIcon')
)
const Recovery = lazy(() => import('./pages/auth/Recovery'))
const Signup = lazy(() => import('./pages/auth/Signup'))
const Login = lazy(() => import('./pages/auth/Login'))

const SearchLayout = lazy(() => import('./pages/core/layout/SearchLayout'))
const SearchVacancy = lazy(() => import('./pages/core/search/SearchVacancy'))
const SearchCompany = lazy(() => import('./pages/core/search/SearchCompany'))
const SearchResume = lazy(() => import('./pages/core/search/SearchResume'))

const SupportLayout = lazy(() => import('./pages/core/layout/SupportLayout'))
const Support = lazy(() => import('./pages/core/support/Support'))
const Conditions = lazy(() => import('./pages/core/support/Conditions'))
const Legal = lazy(() => import('./pages/core/support/Legal'))
const Offer = lazy(() => import('./pages/core/support/Offer'))
const Policy = lazy(() => import('./pages/core/support/Policy'))
const Promo = lazy(() => import('./pages/core/support/Promo'))
const Terms = lazy(() => import('./pages/core/support/Terms'))
const Feedback = lazy(() => import('./pages/core/support/Feedback'))

const NotFound = lazy(() => import('./components/NotFound'))

export default function App() {
	const [user, setUser] = useState(3)
	// 1 - гость
	// 2 - соискатель
	// 3 - кандидат

	// Установка прокрутки страницы на 0 при смене маршрута
	useEffect(() => {
		document.documentElement.scrollTop = 0
		document.scrollingElement.scrollTop = 0
	}, [])

	/**
	 * Все три имеют доступ к страницам, которые находятся в pages/core
	 * В зависимости типа пользователя будет соответствующий header, footer и т.д.
	 *
	 * Стартовая страница для гостя: /
	 * Стартовая страница для соискателя: applicant/dashboard
	 * Стартовая страница для работодателя: employer/dashboard
	 *
	 * TODO: Сделать файл routes.js
	 */

	return (
		<main id="wrapper" className="wrapper">
			<Router>
				<Suspense fallback={<Loader />}>
					<Routes>
						{/** <BASE_ROUTER> **/}
						<Route path="/" element={<BaseLayout />}>
							<Route index element={<Home />} />
							<Route path="vacancy/:id" element={<Vacancy />} />
							<Route path="company/:id" element={<Company />} />
							<Route path="resume/:id" element={<Resume />} />
							<Route path="about" element={<About />} />
							<Route path="automation" element={<Automation />} />
						</Route>

						<Route path="/search" element={<SearchLayout />}>
							{/** ПОИСК **/}
							<Route path="vacancy" element={<SearchVacancy />} />
							<Route path="company" element={<SearchCompany />} />
							<Route path="resume" element={<SearchResume />} />
							{/** РАСШИРЕННЫЕ ПОИСК **/}
							<Route path="expanded">
								<Route path="vacancy" />
								<Route path="company" />
								<Route path="resume" />
							</Route>
						</Route>

						<Route path="/support" element={<SupportLayout />}>
							{/** ЦЕНТР ПОДДЕРЖКИ **/}
							<Route index element={<Support />} />
							<Route path="conditions" element={<Conditions />} />
							<Route path="feedback" element={<Feedback />} />
							<Route path="legal" element={<Legal />} />
							<Route path="offer" element={<Offer />} />
							<Route path="policy" element={<Policy />} />
							<Route path="promo" element={<Promo />} />
							<Route path="terms" element={<Terms />} />
						</Route>
						{/** </BASE_ROUTER> **/}

						{/** С этим че делать? **/}
						<Route path="/logout" />

						{user === 1 && (
							<>
								<Route path="/" element={<AuthLayoutWithIcon />}>
									<Route path="/login" element={<Login />} />
									<Route path="/signup" element={<Signup />} />
								</Route>
								<Route path="/" element={<AuthLayoutWithoutIcon />}>
									<Route path="/recovery" element={<Recovery />} />
								</Route>
							</>
						)}

						{user === 2 && <Route path="/employer"></Route>}

						{user === 3 && (
							<Route path="/applicant">
								<Route path="dashboard" element={<Dashboard />} />
							</Route>
						)}

						<Route path="*" element={<NotFound />} />
					</Routes>
				</Suspense>
			</Router>
		</main>
	)
}
