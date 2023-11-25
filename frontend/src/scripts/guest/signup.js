import { AjaxHandler } from '../modules/AjaxHandler'
import { mask } from '../modules/config'

(function () {

    'use strict'

    document.addEventListener('DOMContentLoaded', function () {

        let CONTENT = {
            type: undefined,
            data: {}
        }

        const START_CREATE_BUTTON = document.querySelector('.signup__start'),
              NEXT_RESUME_BUTTON  = document.querySelector('.signup__resume__next'),
              VERIFY_RESUME_BUTTON = document.querySelector('.signup__resume__exp'),
              NEXT_COMPANY_BUTTON = document.querySelector('.signup__company__next')

        START_CREATE_BUTTON.addEventListener('mouseup', function () {

            let choice = document.querySelectorAll('.choice__input');

            choice.forEach(el => {
                if (el.checked) {
                    document.querySelectorAll('.auth__next').forEach(el => el.style.display = 'none')
                    if (Number(el.value) === 1) START_RESUME_CREATE()
                    if (Number(el.value) === 2) START_COMPANY_CREATE()
                }
            })

        })

        /**
         * ОБРАБОТКА ФОРМЫ РЕГИСТРАЦИИ РЕЗЮМЕ
         */

        const START_RESUME_CREATE = () => {
            document.querySelector('.auth__start__resume').style.display = 'block'
            mask(document.querySelectorAll('.phone__mask'))

            CONTENT.type = 'resume'

            NEXT_RESUME_BUTTON.addEventListener('mouseup', NEXT_RESUME_CREATE)
        }

        const NEXT_RESUME_CREATE = (e) => {
            e.preventDefault()

            let SURNAME = document.querySelector('#surname').value,
                NAME = document.querySelector('#name').value,
                EMAIL = document.querySelector('#email').value,
                PHONE = document.querySelector('#phone').value,
                DATE = document.querySelector('#date').value,
                PASSWORD = document.querySelector('#password').value,
                I_STUDENT = document.querySelector('#i_student'),
                I_APPLICANT = document.querySelector('#i_applicant'),
                ALL_INPUT = document.querySelectorAll('.auth__start__resume-form input')

            NEXT_RESUME_BUTTON.addEventListener('click', function (e) {
                e.preventDefault()

                let err = 0

                document.querySelectorAll('.label__error').forEach(el => el.style.display = 'none')
                ALL_INPUT.forEach(el => el.classList.remove('input__error'))

                ALL_INPUT.forEach(el => {

                    let id = el.id

                    if (el.value.trim() === '' && el.name !== 'i_choice' && id !== 'password' && id !== 'phone') {
                        el.classList.add('input__error')
                        console.log(`error__${id}`)
                        document.querySelector(`.error__${id}`).style.display = 'block'
                        document.querySelector(`.error__${id}`).innerHTML = 'Данные указаны неверно'
                        err++
                    }

                    if (id === 'password' && (el.value.trim() === '' || el.value.length < 8)) {
                        el.classList.add('input__error')
                        console.log(`error__${id}`)
                        document.querySelector(`.error__${id}`).style.display = 'block'
                        document.querySelector(`.error__${id}`).innerHTML = 'Пароль должен быть не менее 8 символов'
                        err++
                    }

                    if (id === 'phone' && (el.value.trim() === '' || el.value.length < 17)) {
                        el.classList.add('input__error')
                        console.log(`error__${id}`)
                        document.querySelector(`.error__${id}`).style.display = 'block'
                        document.querySelector(`.error__${id}`).innerHTML = 'Телефон указан неверно'
                        err++
                    }
                })

                if (err === 0) {
                    CONTENT.data = {
                        surname  : SURNAME,
                        name     : NAME,
                        email    : EMAIL,
                        phone    : PHONE,
                        date     : DATE,
                        password : PASSWORD,
                        choice   : I_STUDENT.checked ? 1 : I_APPLICANT ? 2 : 0
                    }

                    document.querySelectorAll('.auth__next').forEach(el => el.style.display = 'none')
                    document.querySelector('.auth__exp__resume').style.display = 'block'

                    if (CONTENT.data.choice === 1 ) {
                        document.querySelector('.auth__form__for__student').style.display = 'block'
                    }

                    if (CONTENT.data.choice === 2 ) {
                        document.querySelector('.auth__form__for__applicant').style.display = 'block'
                    }
                }
            })
        }

        VERIFY_RESUME_BUTTON.addEventListener('click', function (e) {
            e.preventDefault()

            if (CONTENT.data.choice === 1) {

                let err = 0

                let PROFESSION = document.querySelector('#prof__student').value,
                    SALARY = document.querySelector('#salary__student').value,
                    EDUCATION = document.querySelector('#ed__education').value,
                    COMPANY = document.querySelector('#ed__company').value,
                    YEAR = document.querySelector('#ed__year').value,
                    SPECIALITY = document.querySelector('#ed__prof').value,
                    ALL_INPUT = document.querySelectorAll('.auth__form__for__student input')

            }

            if (CONTENT.data.choice === 2) {

            }
        })

        /**
         * ОБРАБОТКА ФОРМЫ РЕГИСТРАЦИИ КОМПАНИИ
         */

        const START_COMPANY_CREATE = (e) => {
            e.preventDefault()

            document.querySelector('.auth__start__company').style.display = 'block'
            mask(document.querySelectorAll('.phone__mask'))

            CONTENT.type = 'company'

            NEXT_COMPANY_BUTTON.addEventListener('mouseup', NEXT_COMPANY_CREATE)
        }

        const NEXT_COMPANY_CREATE = () => {
            document.querySelectorAll('.auth__next').forEach(el => el.style.display = 'none')
            document.querySelector('.auth__exp__company').style.display = 'block'

            NEXT_COMPANY_BUTTON.addEventListener('click', function (e) {
                e.preventDefault()

                let err = 0

                if (err === 0) {

                }
            })
        }

    })

})()
