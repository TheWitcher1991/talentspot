import { isset, ready } from '../modules/config'
import {TRUE} from "sass";

(function () {

    'use strict'

    // ОБЩИЕ СКРИПТЫ ДЛЯ ЛИЧНЫХ КАБИНЕТОВ

    ready(function () {

        // СМЕНА ПОЛОЖЕНИЯ БОКОВОГО МЕНЮ

        let lkMenu = document.querySelector('.lk__menu'),
            lkPage = document.querySelector('.lk__page'),
            lkReplace = document.querySelector('.lk__menu-replace')

        let lkSwap = localStorage.getItem('swap')

        let swapMin = () => {
            localStorage.removeItem('swap')
            localStorage.setItem('swap', 'min')
            lkMenu.classList.remove('lk__menu-max')
            lkPage.classList.remove('lk__page-max')
            lkReplace.classList.remove('lk__menu-left')
            lkMenu.classList.add('lk__menu-min')
            lkPage.classList.add('lk__page-min')
            lkReplace.classList.add('lk__menu-right')
            lkReplace.innerHTML = '<i class="mdi mdi-unfold-more-vertical"></i>'
        }


        let swapMax = () => {
            localStorage.removeItem('swap')
            localStorage.setItem('swap', 'max')
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

    })

})()
