(function () {

    'use strict'

    document.addEventListener('DOMContentLoaded', function () {

        let bg1 = document.querySelectorAll('.parallax-bg-1'),
            bg2 = document.querySelectorAll('.parallax-bg-2'),
            bg3 = document.querySelectorAll('.parallax-bg-3'),
            bg4 = document.querySelectorAll('.parallax-bg-4')

        // Параллах эффект для фигни в шапке

        const parallax = (el, Ox, Oy) => {
            for (let i = 0; i < el.length; i++){
                window.addEventListener('mousemove', function(e) {
                    let x = e.clientX / window.innerWidth
                    let y = e.clientY / window.innerHeight
                    el[i].style.transform = 'translate(-' + x * Ox + 'px, -' + y * Oy + 'px)'
                })
            }
        }

        parallax(bg1, 20, 5)
        parallax(bg2, 30, 30)
        parallax(bg3, 20, 20)
        parallax(bg4, 30, 30)

        const CATEGORY = [
            { icon: 'mdi mdi-microsoft-visual-studio-code', name: 'IT-технологии' },
            { icon: 'mdi mdi-silo', name: 'Сельское хозяйство' },
            { icon: 'mdi mdi-hand-front-right-outline', name: 'Юриспруденция' },
            { icon: 'mdi mdi-factory', name: 'Промышленность' },
            { icon: 'mdi mdi-medical-bag', name: 'Медицина' },
            { icon: 'mdi mdi-account-group-outline', name: 'Кадры' },
            { icon: 'mdi mdi-currency-usd', name: 'Экономика' },
            { icon: 'mdi mdi-truck-cargo-container', name: 'Логистика' },
            { icon: 'mdi mdi-lightning-bolt-circle', name: 'Энергетика' },
            { icon: 'mdi mdi-barrel-outline', name: 'Нефть и газ' },
            { icon: 'mdi mdi-account-hard-hat-outline', name: 'Строительство' },
            { icon: 'mdi mdi-car', name: 'Автомобильный бизнес' },
        ]

        CATEGORY.forEach(({icon, name}) => {
            document.querySelector('.vac__list').innerHTML += `
                <a href="" class="category__name wow fadeIn">
                    <i class="${icon}"></i>
                    <p>${name}</p>
                    <span>доступно 103 вакансий <i class="mdi mdi-arrow-right"></i></span>
                </a>
            `
        })

        const JOB = [
            { name: 'Аналитик данных CRM', text: 'Аналитическая поддержка бизнес-подразделения, развитие и накопление экспертизы в области аналитики, статистики...' },
            { name: 'Аналитик данных CRM', text: 'Аналитическая поддержка бизнес-подразделения, развитие и накопление экспертизы в области аналитики, статистики...' },
            { name: 'Аналитик данных CRM', text: 'Аналитическая поддержка бизнес-подразделения, развитие и накопление экспертизы в области аналитики, статистики...' },
            { name: 'Аналитик данных CRM', text: 'Аналитическая поддержка бизнес-подразделения, развитие и накопление экспертизы в области аналитики, статистики...' },
            { name: 'Аналитик данных CRM', text: 'Аналитическая поддержка бизнес-подразделения, развитие и накопление экспертизы в области аналитики, статистики...' },
            { name: 'Аналитик данных CRM', text: 'Аналитическая поддержка бизнес-подразделения, развитие и накопление экспертизы в области аналитики, статистики...' },
            { name: 'Аналитик данных CRM', text: 'Аналитическая поддержка бизнес-подразделения, развитие и накопление экспертизы в области аналитики, статистики...' },
            { name: 'Аналитик данных CRM', text: 'Аналитическая поддержка бизнес-подразделения, развитие и накопление экспертизы в области аналитики, статистики...' },
            { name: 'Аналитик данных CRM', text: 'Аналитическая поддержка бизнес-подразделения, развитие и накопление экспертизы в области аналитики, статистики...' },
        ]

        JOB.forEach(({name, text}) => {
            document.querySelector('.job__list').innerHTML += `
                <div class="home__job-item wow fadeIn">
                    <span class="hji-time">8 октября в 16:50</span>
                    <span class="hji-img">
                        <img src="../src/images/company/c_5.png" alt="">
                    </span>
                    <a href="" class="hji-company">SberTech</a>
                    <a href="" class="hji-title">${name}</a>
                    <div class="hji-emp">
                        <span class="hji-salary"><i class="mdi mdi-currency-rub"></i> 70 000</span>
                        <span><i class="mdi mdi-map-marker"></i> г. Москва</span>
                        <span><i class="mdi mdi-clock-outline"></i> Полный рабочий день</span>
                        <span><i class="mdi mdi-briefcase"></i> Без опыта</span>
                        <span><i class="mdi mdi-pound"></i> ИТ-технологии</span>
                    </div>
                    <!--<span class="hji-loc">Москва, Россия</span>-->
                    <span class="hji-text">${text}</span>
                    <div class="hji-bth">
                        <button type="button" class="hji-get">Связаться</button>
                        <a href="" class="hji-go">Посмотреть</a>
                    </div>
                </div>
            `
        })

    })

})()
