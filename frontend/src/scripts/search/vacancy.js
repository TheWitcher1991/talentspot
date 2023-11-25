import { AjaxHandler } from '../modules/AjaxHandler'

(function () {

    'use strict'

    document.addEventListener('DOMContentLoaded', function () {

        let VACANCY = [
            { text: 'Backend-разработчик', company: 'SberTech' },
            { text: 'Backend-разработчик', company: 'SberTech' },
            { text: 'Backend-разработчик', company: 'SberTech' },
            { text: 'Backend-разработчик', company: 'SberTech' },
            { text: 'Backend-разработчик', company: 'SberTech' },
            { text: 'Backend-разработчик', company: 'SberTech' },
            { text: 'Backend-разработчик', company: 'SberTech' },
            { text: 'Backend-разработчик', company: 'SberTech' },
            { text: 'Backend-разработчик', company: 'SberTech' },
            { text: 'Backend-разработчик', company: 'SberTech' },
            { text: 'Backend-разработчик', company: 'SberTech' },
        ]

        VACANCY.forEach(({name, text}) => {
            document.querySelector('.vacancy__list').innerHTML += `
                <div class="vacancy__item wow fadeIn">
                    <div class="vi__bth">
                        <button class="vi-share" type="button"><i class="mdi mdi-share-variant"></i></button>
                        <button class="vi-mark" type="button"><i class="mdi mdi-bookmark-outline"></i></button>
                    </div>
                    <span class="vi-img">
                        <img src="../../src/images/media/company/c_5.png" alt="">
                    </span>
                    <a class="vi-company" href=""><m></m> SberTech <i class="mdi mdi-check-circle-outline"></i></a>
                    <a class="vi-title" href="">Backend-разработчик</a>
                    <span class="vi-salary">70 000 <i class="mdi mdi-currency-rub"></i></span>
                    <span class="vi-text">Основные должностные обязанности: разрабатывать новую инфраструктуру и поддерживать существующую. 
                    Конкретные задачи зависят от проекта.</span>
                    <div class="vi-emp">
                        <span title="Место работы"><i class="mdi mdi-map-marker"></i> г. Москва</span>
                        <span title="График работы"><i class="mdi mdi-clock-outline"></i> Полный рабочий день</span>
                        <span title="Опыт работы"><i class="mdi mdi-briefcase"></i> Без опыта</span>
                        <span title="Отрасль"><i class="mdi mdi-pound"></i> ИТ-технологии</span>
                    </div>
                    <div class="vi-time vi-time-active">16 ноября 2023 в 20:42 <m></m> На сайте</div>
                </div>
            `
        })

    })

})()
