!function(){"use strict";document.addEventListener("DOMContentLoaded",(function(){var n=document.querySelectorAll(".parallax-bg-1"),a=document.querySelectorAll(".parallax-bg-2"),i=document.querySelectorAll(".parallax-bg-3"),e=document.querySelectorAll(".parallax-bg-4"),t=function(n,a,i){for(var e=function(e){window.addEventListener("mousemove",(function(t){var c=t.clientX/window.innerWidth,m=t.clientY/window.innerHeight;n[e].style.transform="translate(-"+c*a+"px, -"+m*i+"px)"}))},t=0;t<n.length;t++)e(t)};t(n,20,5),t(a,30,30),t(i,20,20),t(e,30,30),[{icon:"mdi mdi-microsoft-visual-studio-code",name:"IT-технологии"},{icon:"mdi mdi-silo",name:"Сельское хозяйство"},{icon:"mdi mdi-hand-front-right-outline",name:"Юриспруденция"},{icon:"mdi mdi-factory",name:"Промышленность"},{icon:"mdi mdi-medical-bag",name:"Медицина"},{icon:"mdi mdi-account-group-outline",name:"Кадры"},{icon:"mdi mdi-currency-usd",name:"Экономика"},{icon:"mdi mdi-truck-cargo-container",name:"Логистика"},{icon:"mdi mdi-lightning-bolt-circle",name:"Энергетика"},{icon:"mdi mdi-barrel-outline",name:"Нефть и газ"},{icon:"mdi mdi-account-hard-hat-outline",name:"Строительство"},{icon:"mdi mdi-car",name:"Автомобильный бизнес"}].forEach((function(n){var a=n.icon,i=n.name;document.querySelector(".vac__list").innerHTML+='\n                <a href="" class="category__name wow fadeIn">\n                    <i class="'.concat(a,'"></i>\n                    <p>').concat(i,'</p>\n                    <span>доступно 103 вакансий <i class="mdi mdi-arrow-right"></i></span>\n                </a>\n            ')})),[{name:"Аналитик данных CRM",text:"Аналитическая поддержка бизнес-подразделения, развитие и накопление экспертизы в области аналитики, статистики..."},{name:"Аналитик данных CRM",text:"Аналитическая поддержка бизнес-подразделения, развитие и накопление экспертизы в области аналитики, статистики..."},{name:"Аналитик данных CRM",text:"Аналитическая поддержка бизнес-подразделения, развитие и накопление экспертизы в области аналитики, статистики..."},{name:"Аналитик данных CRM",text:"Аналитическая поддержка бизнес-подразделения, развитие и накопление экспертизы в области аналитики, статистики..."},{name:"Аналитик данных CRM",text:"Аналитическая поддержка бизнес-подразделения, развитие и накопление экспертизы в области аналитики, статистики..."},{name:"Аналитик данных CRM",text:"Аналитическая поддержка бизнес-подразделения, развитие и накопление экспертизы в области аналитики, статистики..."},{name:"Аналитик данных CRM",text:"Аналитическая поддержка бизнес-подразделения, развитие и накопление экспертизы в области аналитики, статистики..."},{name:"Аналитик данных CRM",text:"Аналитическая поддержка бизнес-подразделения, развитие и накопление экспертизы в области аналитики, статистики..."},{name:"Аналитик данных CRM",text:"Аналитическая поддержка бизнес-подразделения, развитие и накопление экспертизы в области аналитики, статистики..."}].forEach((function(n){var a=n.name,i=n.text;document.querySelector(".job__list").innerHTML+='\n                <div class="home__job-item wow fadeIn">\n                    <span class="hji-time">8 октября в 16:50</span>\n                    <span class="hji-img">\n                        <img src="../../src/images/media/company/c_5.png" alt="">\n                    </span>\n                    <a href="" class="hji-company">SberTech</a>\n                    <a href="" class="hji-title">'.concat(a,'</a>\n                    <div class="hji-emp">\n                        <span class="hji-salary"><i class="mdi mdi-currency-rub"></i> 70 000</span>\n                        <span><i class="mdi mdi-map-marker"></i> г. Москва</span>\n                        <span><i class="mdi mdi-clock-outline"></i> Полный рабочий день</span>\n                        <span><i class="mdi mdi-briefcase"></i> Без опыта</span>\n                        <span><i class="mdi mdi-pound"></i> ИТ-технологии</span>\n                    </div>\n                    \x3c!--<span class="hji-loc">Москва, Россия</span>--\x3e\n                    <span class="hji-text">').concat(i,'</span>\n                    <div class="hji-bth">\n                        <button type="button" class="hji-get">Связаться</button>\n                        <a href="" class="hji-go">Посмотреть</a>\n                    </div>\n                </div>\n            ')}))}))}();