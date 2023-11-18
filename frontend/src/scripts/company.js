import { AjaxHandler } from './modules/AjaxHandler'

(function () {

    'use strict'

    document.addEventListener('DOMContentLoaded', function () {

        let COMPANY = [
            { name: 'Тинькофф', text: 'Тинькофф — это технологический лидер российского банкинга. Мы решаем амбициозные задачи: развиваем мобильный банк, создали облачный колл-центр с 12 000 операторов, первыми в России внедрили систему распознавания голоса и лиц в реальном времени. Мы...' },
            { name: 'SberTech', text: 'Российский разработчик программного обеспечения для бизнеса и государства, основной поставщик решений для Сбера.' },
            { name: 'SberTech', text: 'Российский разработчик программного обеспечения для бизнеса и государства, основной поставщик решений для Сбера.' },
            { name: 'SberTech', text: 'Российский разработчик программного обеспечения для бизнеса и государства, основной поставщик решений для Сбера.' },
            { name: 'SberTech', text: 'Российский разработчик программного обеспечения для бизнеса и государства, основной поставщик решений для Сбера.' },
            { name: 'SberTech', text: 'Российский разработчик программного обеспечения для бизнеса и государства, основной поставщик решений для Сбера.' },
            { name: 'SberTech', text: 'Российский разработчик программного обеспечения для бизнеса и государства, основной поставщик решений для Сбера.' },
            { name: 'SberTech', text: 'Российский разработчик программного обеспечения для бизнеса и государства, основной поставщик решений для Сбера.' },
            { name: 'SberTech', text: 'Российский разработчик программного обеспечения для бизнеса и государства, основной поставщик решений для Сбера.' },
            { name: 'SberTech', text: 'Российский разработчик программного обеспечения для бизнеса и государства, основной поставщик решений для Сбера.' },
        ]

        COMPANY.forEach(({name, text}) => {
            document.querySelector('.company__list').innerHTML += `
                <a href="" class="company__item wow fadeIn">
                    <div class="company__top">
                        <span>
                            <img src="../../../src/images/company/c_5.png" alt="">
                        </span>
                        <div class="company__title">
                            <span>${name}</span>
                            <p>${text}</p>
                        </div>
                    </div>
                    <div class="company__bottom">
                        <span class="company__bottom-address"><i class="mdi mdi-map-marker"></i> Москва</span>
                        <span class="company__bottom-tag"><i class="mdi mdi-pound"></i> ИТ-технологии</span>
                        <span class="company__bottom-vacancy"><i class="mdi mdi-briefcase"></i> Вакансии 1</span>
                    </div>
                </a>
            `
        })

        /* HTTP.ajax({
            type: 'json',
            method: 'POST',
            async: true,
            cache: false,
            url: '/ajax/login',
            data: ``,
            ok: (xhr) => {
                if (xhr.status === 200) {

                }
            },
            error: (xhr) => {
                console.log(xhr)
            }
        }) */

    })

})()
