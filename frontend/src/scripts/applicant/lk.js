import Security from './model'
import { isset, ready, swipeTabs } from '../modules/config'

(function () {

    'use strict'

    // ОБЩИЕ СКРИПТЫ ДЛЯ ЛИЧНЫХ КАБИНЕТОВ

    ready(function () {

        document.querySelectorAll('textarea').forEach(el => {
            el.classList.add('auto');
            el.addEventListener('input', e => {
                el.style.height = 'auto'
                el.style.height = (el.scrollHeight) + 'px'
            })
        })

        // СМЕНА ПОЛОЖЕНИЯ БОКОВОГО МЕНЮ

        let lkNav = document.querySelector('.lk__nav'),
            lkMenu = document.querySelector('.lk__menu'),
            lkPage = document.querySelector('.lk__page'),
            lkReplace = document.querySelector('.lk__menu-replace')

        let lkSwap = localStorage.getItem('swap')

        let swapMin = () => {
            localStorage.removeItem('swap')
            localStorage.setItem('swap', 'min')
            lkMenu.classList.remove('lk__menu-max')
            lkNav.classList.remove('lk__nav-max')
            lkPage.classList.remove('lk__page-max')
            lkReplace.classList.remove('lk__menu-left')
            lkNav.classList.add('lk__nav-min')
            lkMenu.classList.add('lk__menu-min')
            lkPage.classList.add('lk__page-min')
            lkReplace.classList.add('lk__menu-right')
            lkReplace.innerHTML = '<i class="mdi mdi-unfold-more-vertical"></i>'
        }


        let swapMax = () => {
            localStorage.removeItem('swap')
            localStorage.setItem('swap', 'max')
            lkNav.classList.remove('lk__nav-min')
            lkNav.classList.add('lk__nav-max')
            lkMenu.classList.remove('lk__menu-min')
            lkMenu.classList.add('lk__menu-max')
            lkPage.classList.remove('lk__page-min')
            lkPage.classList.add('lk__page-max')
            lkReplace.classList.remove('lk__menu-right')
            lkReplace.classList.add('lk__menu-left')
            lkReplace.innerHTML = '<i class="mdi mdi-unfold-less-vertical"></i>'

        }

        !isset(lkSwap) || lkSwap === 'max' ?  swapMax() : swapMin()

        lkReplace.addEventListener('click', function () {

            if (lkReplace.classList[1] === 'lk__menu-left') {
                return swapMin()
            }

            if (lkReplace.classList[1] === 'lk__menu-right') {
                return swapMax()
            }
        })

        // ТАБЫ В ЛИЧНОМ КАБИНЕТЕ

        document.querySelectorAll('.lk__tabs-link').forEach(el => {
            el.addEventListener('click', event => swipeTabs(event, el.dataset.tab))
        })


        document.querySelector('#default__tab')?.click()

        // ВСПЛЫВАЮЩЕЕ МЕНЮ В ЛЕВОМ БОКОМ МЕНЮ ЛИЧНОГО КАБИНЕТА

        document.querySelectorAll('.lk__menu-max .lk__link').forEach(el => {
            el.addEventListener('click', function () {
                let ul = el.parentElement.querySelector('ul')
                ul.classList.toggle('lk__menu-show')
            })
        })

        Security()

    })

})()
