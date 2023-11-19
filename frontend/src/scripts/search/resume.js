import { AjaxHandler } from '../modules/AjaxHandler'

(function () {

    'use strict'

    document.addEventListener('DOMContentLoaded', function () {

        const RESUME = [
            { name: 'Системный администратор', text: 'Открытая, позитивная и активная позиция в изучении нового материала и направлений, проактивная позиция в планировании задач. Нет безвыходных...'},
            { name: 'Системный администратор', text: 'Открытая, позитивная и активная позиция в изучении нового материала и направлений, проактивная позиция в планировании задач. Нет безвыходных...'},
            { name: 'Системный администратор', text: 'Открытая, позитивная и активная позиция в изучении нового материала и направлений, проактивная позиция в планировании задач. Нет безвыходных...'},
            { name: 'Системный администратор', text: 'Открытая, позитивная и активная позиция в изучении нового материала и направлений, проактивная позиция в планировании задач. Нет безвыходных...'},
            { name: 'Системный администратор', text: 'Открытая, позитивная и активная позиция в изучении нового материала и направлений, проактивная позиция в планировании задач. Нет безвыходных...'},
            { name: 'Системный администратор', text: 'Открытая, позитивная и активная позиция в изучении нового материала и направлений, проактивная позиция в планировании задач. Нет безвыходных...'},
            { name: 'Системный администратор', text: 'Открытая, позитивная и активная позиция в изучении нового материала и направлений, проактивная позиция в планировании задач. Нет безвыходных...'}

        ]

        RESUME.forEach(({name, text}) => {
            document.querySelector('.resume__list').innerHTML += `
                <div class="resume__item wow fadeIn">
                    <div class="ri__bth">
                        <button class="ri-share" type="button"><i class="mdi mdi-share-variant"></i></button>
                        <button class="ri-mark" type="button"><i class="mdi mdi-bookmark-outline"></i></button>
                    </div>
                    <div class="resume__item-left">
                        <span class="ri-img ri-lock">
                            <div class="ri-lock-i">
                                <i class="mdi mdi-lock""></i>
                            </div>
                            <img src="../../src/images/user/user.jpg" alt="">
                        </span>
                        <span class="ri-status">
                            В активном поиске
                        </span>
                    </div>
                    <div class="resume__item-right">
                        <a href="" class="ri-title">${name}</a>
                        <span class="ri-user">***** ******</span>
                        <span class="ri-salary">70 000 <i class="mdi mdi-currency-rub"></i></span>
                        <div class="ri-emp">
                            <span title="Место проживания"><i class="mdi mdi-map-marker"></i> г. Москва</span>
                            <span title="Образование"><i class="mdi mdi-school"></i> Высшее</span>
                            <span title="Возраст"><i class="mdi mdi-baby-face"></i> *** года</span>
                            <span title="Опыт работы"><i class="mdi mdi-briefcase"></i> 3 года</span>
                            <span title="Отрасль"><i class="mdi mdi-pound"></i> ИТ-технологии</span>
                        </div>
                        <div class="ri-text">
                            <span><i class="mdi mdi-information-slab-circle-outline"></i> Обо мне</span>
                            <p>${text}</p>
                        </div>
                        <div class="ri-time ri-time-active">Обновлено 16 ноября 2023 в 20:42 <m></m> На сайте</div>
                    </div>
                </div>
            `
        })

    })

})()
