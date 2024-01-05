import React from 'react'

export default function Dashboard() {
	return (
		<section class="lk__section lk__wrapper">
			<aside class="lk__menu lk__menu-max">
				<div class="lk__menu-tmp">
					<div class="lk__menu-brand">
						<div>
							<img
								src="../../src/images/static/logo/166666/png/128x128.png"
								alt=""
							/>
							<span>TalentSpot</span>
						</div>
					</div>
					<ul class="lk__menu-ul">
						<li>
							<a class="lk__link" href="">
								<span>
									<i class="mdi mdi-arrow-top-right-thin-circle-outline"></i>
									<div class="lk__link-title">Искать вакансии</div>
								</span>
							</a>
						</li>
						<li>
							<a class="lk__link lk__link-active" href="">
								<span>
									<i class="mdi mdi-chart-line-variant"></i>
									<div class="lk__link-title">Дашборд</div>
								</span>
							</a>
						</li>
						<li>
							<a class="lk__link">
								<span>
									<i class="mdi mdi-database-lock-outline"></i>
									<div class="lk__link-title">Мои резюме</div>
								</span>
							</a>
						</li>
						<li>
							<a class="lk__link" href="">
								<span>
									<i class="mdi mdi-briefcase-outline"></i>
									<div class="lk__link-title">Мои отклики</div>
								</span>
							</a>
						</li>
						<li>
							<a class="lk__link" href="">
								<span>
									<i class="mdi mdi-shield-outline"></i>
									<div class="lk__link-title">Безопасность</div>
								</span>
							</a>
						</li>
						<li>
							<a class="lk__link" href="">
								<span>
									<i class="mdi mdi-handshake-outline"></i>
									<div class="lk__link-title">Центр поддержки</div>
								</span>
							</a>
						</li>
					</ul>
				</div>
				<div class="lk__copy">
					<i class="mdi mdi-copyright"></i> 2023 ООО «ТалентСпот»
				</div>
			</aside>

			<div class="lk__page lk__page-max">
				<div class="lk__nav lk__nav-max">
					<div class="lk__nav-left">
						<div class="lk__menu-replace"></div>

						<div class="lk__search-wrapper">
							<label for="lk__search" class="lk__search-label">
								<i class="mdi mdi-magnify"></i>
								<input
									type="text"
									name="lk__search"
									id="lk__search"
									placeholder="Введите для поиска..."
								/>
							</label>
							<div class="lk__search-result"></div>
						</div>
					</div>
					<div class="lk__nav-right">
						<a href="">Добавить резюме</a>
						<div class="lk__nav-item lk__nav-bell lk__nav-chat">
							<span>
								<i class="mdi mdi-chat"></i>
							</span>
							<div class="pip"></div>
							<div class="lk__chat-pop">
								<div class="chat__wrap">
									<div class="chat__left">
										<div class="chat__title">
											Чаты
											<div>
												<span>
													<i class="mdi mdi-tune-variant"></i>
												</span>
												<span>1</span>
											</div>
										</div>
										<div class="chat__list">
											<a href="" class="chat__href chat__href-active">
												<span class="chat__img">
													<img
														src="../../src/images/media/user/user.jpg"
														alt=""
													/>
												</span>
												<div class="chat__info">
													<div class="chat__info-top">
														<span class="chat__info-title">Николай Иванов</span>
														<span class="chat__info-time">15:30</span>
													</div>
													<div class="chat__info-subject">
														<i class="mdi mdi-briefcase"></i>
														Java разработчик
													</div>
													<div class="chat__info-bottom">
														<span class="chat__info-bottom-text">
															Образец документа для подтверждения
															юридического...
														</span>
														<div class="chat__pin">
															<span class="chat__bot-count">12</span>
														</div>
													</div>
												</div>
											</a>
										</div>
									</div>
									<div class="chat__right">
										<div class="chat__header">
											<div class="chat__header-left">
												<span class="chat__header-img">
													<img
														src="../../src/images/media/user/user.jpg"
														alt=""
													/>
												</span>
												<div class="chat__header-top">
													<a href="" class="chat__header-title">
														Николай Иванов
													</a>
													<a href="" class="chat__header-subject">
														<i class="mdi mdi-briefcase"></i>
														Java разработчик
													</a>
												</div>
											</div>
											<div class="chat-header-right">
												<button type="button">
													<i class="mdi mdi-source-fork"></i>
												</button>
												<button type="button">
													<i class="mdi mdi-dots-vertical"></i>
												</button>
												<button type="button" class="lk__chat-close">
													<i class="mdi mdi-close"></i>
												</button>
											</div>
										</div>
										<div class="chat__layout">
											<div class="chat__content">
												<div
													class="chat__messages"
													style={{
														backgroundImage:
															'url(../../src/images/static/chat.png)',
													}}
												>
													<div class="chat__context-time">
														<span>5 ноября</span>
													</div>
													<div class="msg__item msg__to">
														<div class="msg__tmp">
															<span class="msg__text">
																Добрый день! Мы рассмотрели вашу кандидатуру.
																Бот позже проведёт с вами интервью
															</span>
															<div class="msg__time">19:52</div>
														</div>
													</div>
													<div class="msg__item msg__from">
														<div class="msg__tmp">
															<span class="msg__text">
																Здравствуйте! Хорошо, жду
															</span>
															<div class="msg__time">19:53</div>
														</div>
													</div>
													<div class="chat__context-time">
														<span>6 ноября</span>
													</div>
													<div class="msg__item msg__to">
														<div class="msg__tmp">
															<span class="msg__text">
																Доброе утро! На связи чат-бот TalentSpot.
																Настало время пройти интервью!
															</span>
															<div class="msg__time">10:00</div>
														</div>
													</div>
													<div class="msg__item msg__to">
														<div class="msg__tmp">
															<span class="msg__text">
																У вас был опыт в разработке крупных проектов?
															</span>
															<div class="msg__time">10:00</div>
														</div>
													</div>
													<div class="msg__item msg__from">
														<div class="msg__tmp">
															<span class="msg__text">Да</span>
															<div class="msg__time">10:02</div>
														</div>
													</div>
													<div class="msg__item msg__to">
														<div class="msg__tmp">
															<span class="msg__text">
																У вас есть личный автомобиль?
															</span>
															<div class="msg__time">10:02</div>
														</div>
														<div class="msg__bth">
															<button>Да</button>
															<button>Нет</button>
														</div>
													</div>
												</div>
												<div class="chat__actions">
													<input type="text" placeholder="Сообщение" />
													<button type="button">
														<i class="mdi mdi-arrow-up"></i>
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="lk__nav-item lk__nav-bell">
							<span>
								<i class="mdi mdi-bell"></i>
							</span>
							<div class="pip"></div>
							<div class="lk__bell-pop">
								<div>
									<div class="bell__none">
										<img src="../../src/images/static/event/6.png" alt="" />
										Нет уведомлений
									</div>
								</div>
							</div>
						</div>
						<div class="lk__nav-item lk__nav-name">
							<span>
								<i class="mdi mdi-account"></i>
							</span>
							<div>
								<span>Иван</span>
								<p>admin@talentspot.ru</p>
							</div>
							<div class="lk__name-pop">
								<div>
									<div class="lk__pop-bth">
										<a href="">
											<i class="mdi mdi-account-outline"></i> Личные данные
										</a>
										<a href="">
											<i class="mdi mdi-pencil-box-outline"></i> Общие данные
										</a>
										<a href="">
											<i class="mdi mdi-eye-off-outline"></i> Скрытое
										</a>
										<a href="">
											<i class="mdi mdi-heart-outline"></i> Избранное
										</a>
										<a href="">
											<i class="mdi mdi-cog-outline"></i> Настройки
										</a>
									</div>
									<div class="lk__pop-line"></div>
									<div class="lk__pop-bth">
										<a href="">
											<i class="mdi mdi-thumb-up-outline"></i> Подходящие
											вакансии
										</a>
										<a href="">
											<i class="mdi mdi-star-outline"></i> Отзывы
										</a>
										<a href="">
											<i class="mdi mdi-check-decagram-outline"></i> Подписки
										</a>
									</div>
									<div class="lk__pop-line"></div>
									<div class="lk__pop-bth">
										<a href="">
											<i class="mdi mdi-logout"></i> Выход
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="lk__content">
					<div class="lk__content-flex">
						<div class="lk__content-left">
							<div class="lk__div-flex">
								<div class="lk__div">
									<div class="lk__div-title-flex">
										<div class="lk__div-title-min">Моя аналитика</div>
										<div class="lk__div-title-more">Подробнее</div>
									</div>
									<div class="lk__div-content">
										<div class="lk__strike-list">
											<div class="lk__div-strike-line">
												<div class="lk__div-strike-item"></div>
												<span class="lk__div-once">
													Всего за месяц <br />
													30
												</span>
											</div>
											<div class="lk__div-strike-line">
												<div class="lk__div-strike-item"></div>
												<span class="lk__div-once">
													За неделю <br />
													<m>+20</m>
												</span>
											</div>
										</div>
										<div id="chart__once"></div>
									</div>
								</div>

								<div class="lk__div">
									<div class="lk__div-title-min">
										<div>Мои события</div>
									</div>
									<div class="lk__div-content">
										<div class="lk__strike-block">
											<div class="lk__strike-block-item">
												<div>
													<span>126</span>
													<p>Всего просмотров</p>
												</div>
												<i class="mdi mdi-eye-outline"></i>
											</div>
											<div class="lk__strike-block-item">
												<div>
													<span>16</span>
													<p>Всего откликов</p>
												</div>
												<i class="mdi mdi-briefcase-outline"></i>
											</div>
										</div>
										<div class="lk__strike-list">
											<div class="lk__div-strike-line">
												<div class="lk__div-strike-item"></div>
												<span class="lk__div-once">
													<time>25 декабря 16:54</time> <br /> Компания Тинькофф
													смотрела ваше резюме{' '}
												</span>
											</div>
											<div class="lk__div-strike-line">
												<div class="lk__div-strike-item"></div>
												<span class="lk__div-once">
													<time>20 декабря 16:54</time> <br /> У вас новое
													сообщение от Тинькофф{' '}
												</span>
											</div>
											<div class="lk__div-strike-line">
												<div class="lk__div-strike-item"></div>
												<span class="lk__div-once">
													<time>16 декабря 16:54</time> <br /> У вас новое
													сообщение от СБЕР
												</span>
											</div>
											<div class="lk__div-strike-line">
												<div class="lk__div-strike-item"></div>
												<span class="lk__div-once">
													<time>15 декабря 16:54</time> <br /> Вы оставили
													отклик на вакансии администратор{' '}
												</span>
											</div>
										</div>
										<div class="dash__exp">
											<span>События за две недели</span>
											<div class="lk__div-title-more">Все события</div>
										</div>
									</div>
								</div>
							</div>

							<div class="lk__div-flex">
								<div class="lk__div">
									<div class="lk__div-title-flex">
										<div class="lk__div-title-min">Последняя активность</div>
									</div>
									<div class="lk__div-content">
										<div class="lk__session-wrap">
											<div class="lk__session-item">
												<span>
													<i class="mdi mdi-monitor"></i>
												</span>
												<div class="lk__session-text">
													<div>Браузер Chrome</div>
													<span>194.8.129.16 · Краснодар · сегодня в 9:29</span>
												</div>
											</div>
											<div class="lk__session-item">
												<span>
													<i class="mdi mdi-monitor"></i>
												</span>
												<div class="lk__session-text">
													<div>Браузер Yandex</div>
													<span>
														95.153.161.251 · Краснодар · сегодня в 9:29
													</span>
												</div>
											</div>
											<div class="lk__session-item">
												<span>
													<i class="mdi mdi-cellphone"></i>
												</span>
												<div class="lk__session-text">
													<div>Мобильный Браузер Chrome</div>
													<span>
														95.153.161.251 · Краснодар · 28 октября в 00:17
													</span>
												</div>
											</div>
											<div class="lk__session-item">
												<span>
													<i class="mdi mdi-monitor"></i>
												</span>
												<div class="lk__session-text">
													<div>Браузер Edge</div>
													<span>194.8.129.16 · Краснодар · сегодня в 9:29</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="lk__div">
									<div class="lk__div-title-min">
										<div>Последние отклики</div>
									</div>
									<div class="lk__div-content">
										<div class="table__master">
											<div class="table__filter"></div>
											<div class="table__base">
												<table class="table__mini">
													<thead>
														<tr>
															<th class="td__left">
																<span>
																	<i class="mdi mdi-briefcase-outline"></i>{' '}
																	Вакансия
																</span>
															</th>
															<th class="td__left">
																<span>
																	<i class="mdi mdi-clock-time-four-outline"></i>{' '}
																	Дата
																</span>
															</th>
															<th class="td__left">
																<span>
																	<i class="mdi mdi-source-fork"></i> Статус
																</span>
															</th>
															<th class="td__left">
																<span>
																	<i class="mdi mdi-map-marker-outline"></i>{' '}
																	Город
																</span>
															</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td class="td__text td__left">
																<span>21.08.2023</span>
															</td>
															<td class="td__text td__left">
																<span>Инженер-разработчик</span>
															</td>
															<td class="td__text td__left">
																<div class="market__status">
																	<i class="mdi mdi-check-circle"></i> На
																	рассмотрении
																</div>
															</td>
															<td class="td__text td__left">
																<span>Ставрополь</span>
															</td>
														</tr>
														<tr>
															<td class="td__text td__left">
																<span>21.08.2023</span>
															</td>
															<td class="td__text td__left">
																<span>Инженер-разработчик</span>
															</td>
															<td class="td__text td__left">
																<div class="market__status">
																	<i class="mdi mdi-check-circle"></i> На
																	рассмотрении
																</div>
															</td>
															<td class="td__text td__left">
																<span>Ставрополь</span>
															</td>
														</tr>
														<tr>
															<td class="td__text td__left">
																<span>21.08.2023</span>
															</td>
															<td class="td__text td__left">
																<span>Инженер-разработчик</span>
															</td>
															<td class="td__text td__left">
																<div class="market__status">
																	<i class="mdi mdi-check-circle"></i> На
																	рассмотрении
																</div>
															</td>
															<td class="td__text td__left">
																<span>Ставрополь</span>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
