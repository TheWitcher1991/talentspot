(()=>{var __webpack_modules__={759:()=>{eval("(function () {\n  'use strict';\n\n  document.addEventListener('DOMContentLoaded', function () {\n    var bg1 = document.querySelectorAll('.parallax-bg-1'),\n      bg2 = document.querySelectorAll('.parallax-bg-2'),\n      bg3 = document.querySelectorAll('.parallax-bg-3'),\n      bg4 = document.querySelectorAll('.parallax-bg-4');\n\n    // Параллах эффект для фигни в шапке\n\n    var parallax = function parallax(el, Ox, Oy) {\n      var _loop = function _loop(i) {\n        window.addEventListener('mousemove', function (e) {\n          var x = e.clientX / window.innerWidth;\n          var y = e.clientY / window.innerHeight;\n          el[i].style.transform = 'translate(-' + x * Ox + 'px, -' + y * Oy + 'px)';\n        });\n      };\n      for (var i = 0; i < el.length; i++) {\n        _loop(i);\n      }\n    };\n    parallax(bg1, 20, 5);\n    parallax(bg2, 30, 30);\n    parallax(bg3, 20, 20);\n    parallax(bg4, 30, 30);\n    var CATEGORY = [{\n      icon: 'mdi mdi-microsoft-visual-studio-code',\n      name: 'IT-технологии'\n    }, {\n      icon: 'mdi mdi-silo',\n      name: 'Сельское хозяйство'\n    }, {\n      icon: 'mdi mdi-hand-front-right-outline',\n      name: 'Юриспруденция'\n    }, {\n      icon: 'mdi mdi-factory',\n      name: 'Промышленность'\n    }, {\n      icon: 'mdi mdi-medical-bag',\n      name: 'Медицина'\n    }, {\n      icon: 'mdi mdi-account-group-outline',\n      name: 'Кадры'\n    }, {\n      icon: 'mdi mdi-currency-usd',\n      name: 'Экономика'\n    }, {\n      icon: 'mdi mdi-truck-cargo-container',\n      name: 'Логистика'\n    }, {\n      icon: 'mdi mdi-lightning-bolt-circle',\n      name: 'Энергетика'\n    }, {\n      icon: 'mdi mdi-barrel-outline',\n      name: 'Нефть и газ'\n    }, {\n      icon: 'mdi mdi-account-hard-hat-outline',\n      name: 'Строительство'\n    }, {\n      icon: 'mdi mdi-car',\n      name: 'Автомобильный бизнес'\n    }];\n    CATEGORY.forEach(function (_ref) {\n      var icon = _ref.icon,\n        name = _ref.name;\n      document.querySelector('.vac__list').innerHTML += \"\\n                <a href=\\\"\\\" class=\\\"category__name wow fadeIn\\\">\\n                    <i class=\\\"\".concat(icon, \"\\\"></i>\\n                    <p>\").concat(name, \"</p>\\n                    <span>\\u0434\\u043E\\u0441\\u0442\\u0443\\u043F\\u043D\\u043E 103 \\u0432\\u0430\\u043A\\u0430\\u043D\\u0441\\u0438\\u0439 <i class=\\\"mdi mdi-arrow-right\\\"></i></span>\\n                </a>\\n            \");\n    });\n    var JOB = [{\n      name: 'Аналитик данных CRM',\n      text: 'Аналитическая поддержка бизнес-подразделения, развитие и накопление экспертизы в области аналитики, статистики...'\n    }, {\n      name: 'Аналитик данных CRM',\n      text: 'Аналитическая поддержка бизнес-подразделения, развитие и накопление экспертизы в области аналитики, статистики...'\n    }, {\n      name: 'Аналитик данных CRM',\n      text: 'Аналитическая поддержка бизнес-подразделения, развитие и накопление экспертизы в области аналитики, статистики...'\n    }, {\n      name: 'Аналитик данных CRM',\n      text: 'Аналитическая поддержка бизнес-подразделения, развитие и накопление экспертизы в области аналитики, статистики...'\n    }, {\n      name: 'Аналитик данных CRM',\n      text: 'Аналитическая поддержка бизнес-подразделения, развитие и накопление экспертизы в области аналитики, статистики...'\n    }, {\n      name: 'Аналитик данных CRM',\n      text: 'Аналитическая поддержка бизнес-подразделения, развитие и накопление экспертизы в области аналитики, статистики...'\n    }, {\n      name: 'Аналитик данных CRM',\n      text: 'Аналитическая поддержка бизнес-подразделения, развитие и накопление экспертизы в области аналитики, статистики...'\n    }, {\n      name: 'Аналитик данных CRM',\n      text: 'Аналитическая поддержка бизнес-подразделения, развитие и накопление экспертизы в области аналитики, статистики...'\n    }, {\n      name: 'Аналитик данных CRM',\n      text: 'Аналитическая поддержка бизнес-подразделения, развитие и накопление экспертизы в области аналитики, статистики...'\n    }];\n    JOB.forEach(function (_ref2) {\n      var name = _ref2.name,\n        text = _ref2.text;\n      document.querySelector('.job__list').innerHTML += \"\\n                <div class=\\\"home__job-item wow fadeIn\\\">\\n                    <span class=\\\"hji-time\\\">8 \\u043E\\u043A\\u0442\\u044F\\u0431\\u0440\\u044F \\u0432 16:50</span>\\n                    <span class=\\\"hji-img\\\">\\n                        <img src=\\\"../../src/images/media/company/c_5.png\\\" alt=\\\"\\\">\\n                    </span>\\n                    <a href=\\\"\\\" class=\\\"hji-company\\\">SberTech</a>\\n                    <a href=\\\"\\\" class=\\\"hji-title\\\">\".concat(name, \"</a>\\n                    <div class=\\\"hji-emp\\\">\\n                        <span class=\\\"hji-salary\\\"><i class=\\\"mdi mdi-currency-rub\\\"></i> 70 000</span>\\n                        <span><i class=\\\"mdi mdi-map-marker\\\"></i> \\u0433. \\u041C\\u043E\\u0441\\u043A\\u0432\\u0430</span>\\n                        <span><i class=\\\"mdi mdi-clock-outline\\\"></i> \\u041F\\u043E\\u043B\\u043D\\u044B\\u0439 \\u0440\\u0430\\u0431\\u043E\\u0447\\u0438\\u0439 \\u0434\\u0435\\u043D\\u044C</span>\\n                        <span><i class=\\\"mdi mdi-briefcase\\\"></i> \\u0411\\u0435\\u0437 \\u043E\\u043F\\u044B\\u0442\\u0430</span>\\n                        <span><i class=\\\"mdi mdi-pound\\\"></i> \\u0418\\u0422-\\u0442\\u0435\\u0445\\u043D\\u043E\\u043B\\u043E\\u0433\\u0438\\u0438</span>\\n                    </div>\\n                    \x3c!--<span class=\\\"hji-loc\\\">\\u041C\\u043E\\u0441\\u043A\\u0432\\u0430, \\u0420\\u043E\\u0441\\u0441\\u0438\\u044F</span>--\x3e\\n                    <span class=\\\"hji-text\\\">\").concat(text, \"</span>\\n                    <div class=\\\"hji-bth\\\">\\n                        <button type=\\\"button\\\" class=\\\"hji-get\\\">\\u0421\\u0432\\u044F\\u0437\\u0430\\u0442\\u044C\\u0441\\u044F</button>\\n                        <a href=\\\"\\\" class=\\\"hji-go\\\">\\u041F\\u043E\\u0441\\u043C\\u043E\\u0442\\u0440\\u0435\\u0442\\u044C</a>\\n                    </div>\\n                </div>\\n            \");\n    });\n  });\n})();\n\n//# sourceURL=webpack://talentspot-frontend/./src/scripts/main/home.js?")}},__webpack_exports__={};__webpack_modules__[759]()})();