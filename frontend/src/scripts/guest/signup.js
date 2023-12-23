import HTTP from '../modules/HTTP'
import { mask, HandlingInputError, ready } from '../modules/config'

(function () {

    'use strict'

    // МОДУЛЬ ПОЭТАПНОЙ РЕГИСТРАЦИИ ПОЛЬЗОВАТЕЛЯ
    // ГЛАВНЫЕ ПЕРЕМЕННЫЕ:
    // - VERIFY_RESUME_BUTTON CREATE_RESUME_BUTTON
    // - VERIFY_COMPANY_BUTTON CREATE_COMPANY_BUTTON
    // - PIN_CODE_INPUT

    ready(function () {

        const START_CREATE_BUTTON  = document.querySelector('.signup__start'),
              NEXT_RESUME_BUTTON   = document.querySelector('.signup__resume__next'),
              VERIFY_RESUME_BUTTON = document.querySelector('.signup__resume__exp'),
              CREATE_RESUME_BUTTON = document.querySelector('.signup__resume__create'),
              NEXT_COMPANY_BUTTON  = document.querySelector('.signup__company__next'),
              VERIFY_COMPANY_BUTTON = document.querySelector('.signup__company__exp'),
              CREATE_COMPANY_BUTTON = document.querySelector('.signup__company__create'),
              BLOCK_EXP_BUTTON = document.querySelector('#block__end-date'),
              PIN_CODE_INPUT = document.querySelector('.pin__code-wrap')

        let CONTENT = {
            type: undefined,
            data: {}
        }

        let VERIFY_RESUME = false,
            VERIFY_COMPANY = false,
            CREATE_RESUME = false,
            CREATE_COMPANY = false,
            THIS_PIN_CODE = undefined

        START_CREATE_BUTTON.addEventListener('mouseup', function () {

            let choice = document.querySelectorAll('.choice__input');

            choice.forEach(el => {
                if (el.checked) {
                    document.querySelectorAll('.auth__next').forEach(el => el.style.display = 'none')
                    if (Number(el.value) === 1) START_RESUME_CREATE()
                    if (Number(el.value) === 2) START_COMPANY_CREATE()
                }
            })

            let phone = document.querySelectorAll('.phone__mask')

            if (phone) {
                phone.forEach(el => {
                    IMask(el, {
                        mask: '+{7} 000 000 0000'
                    })
                })
            }

            let year = document.querySelectorAll('.year__mask')

            if (year) {
                year.forEach(el => {
                    IMask(el, {
                        mask: '0000'
                    })
                })
            }

        })

        BLOCK_EXP_BUTTON.addEventListener('change', function () {
            document.querySelector('#exp__end-date-1').toggleAttribute('disabled')
            document.querySelector('#exp__end-date-2').toggleAttribute('disabled')
            document.querySelector('#exp__end-date-2').value = ''
        })

        PIN_CODE_INPUT.addEventListener('paste', function (e) {
            let paste = (e.clipboardData || window.clipboardData).getData('text'),
                i = 0

            paste = paste.split('')

            this.querySelectorAll('input').forEach(el => {
                if (parseInt(el.dataset.index) === i) {
                   el.value = paste[i]
                }

                i++
            })
        }, false)

        PIN_CODE_INPUT.addEventListener('keyup', e => {
            let target = e.srcElement,
                maxLength = parseInt(target.attributes['maxlength'].value, 10),
                myLength = target.value.length

            if (e.keyCode === 8) {
                if (myLength <= maxLength) {
                    let prev = target
                    while (prev = prev.previousElementSibling) {
                        if (prev === null) break
                        if (prev.tagName.toLowerCase() === 'input') {
                            prev.focus()
                            break
                        }
                    }
                }
            } else {
                if (myLength >= maxLength) {
                    let next = target
                    while (next = next.nextElementSibling) {
                        if (next === null) break
                        if (next.tagName.toLowerCase() === 'input') {
                            next.focus()
                            break
                        }
                    }
                }

                if (myLength === 0) {
                    let next = target
                    while (next === next.previousElementSibling) {
                        if (next === null) break;
                        if (next.tagName.toLowerCase() === 'input') {
                            next.focus()
                            break
                        }
                    }
                }
            }
        }, false)

        PIN_CODE_INPUT.addEventListener('keydown', e => {
            let target = e.srcElement
            target.value = ''
        }, false)

        /**
         * ОБРАБОТКА ФОРМЫ РЕГИСТРАЦИИ РЕЗЮМЕ
         */

        const START_RESUME_CREATE = () => {
            document.querySelector('.auth__start__resume').style.display = 'block'

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

                let err = HandlingInputError(ALL_INPUT)

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
                        VERIFY_RESUME = true
                    }

                    if (CONTENT.data.choice === 2 ) {
                        document.querySelector('.auth__form__for__applicant').style.display = 'block'
                        VERIFY_RESUME = true
                    }
                }
            })
        }

        VERIFY_RESUME_BUTTON.addEventListener('click', function (e) {
            e.preventDefault()

            if (!VERIFY_RESUME) return false

            if (CONTENT.data.choice === 1) {

                let PROFESSION = document.querySelector('#prof__student').value,
                    SALARY = document.querySelector('#salary__student').value,
                    EDUCATION = document.querySelector('#ed__education').value,
                    COMPANY = document.querySelector('#ed__company').value,
                    YEAR = document.querySelector('#ed__year').value,
                    SPECIALITY = document.querySelector('#ed__prof').value,
                    ALL_INPUT = document.querySelectorAll('.auth__form__for__student input')

                let err = HandlingInputError(ALL_INPUT)

                if (err === 0) {

                    CONTENT.data = {
                        ...CONTENT.data,
                        profession          : PROFESSION,
                        salary              : SALARY,
                        education           : EDUCATION,
                        company             : COMPANY,
                        year                : YEAR,
                        speciality          : SPECIALITY,
                        csrfmiddlewaretoken : '' // document.querySelector('input[name="csrfmiddlewaretoken"]').value
                    }

                    HTTP.ajax({
                        method: 'POST',
                        cache: false,
                        url: '/procedure/signup',
                        dataType: JSON.stringify(CONTENT),
                        ok: (xhr) => {
                            document.querySelectorAll('.auth__next').forEach(el => el.style.display = 'none')
                            document.querySelector('.email__from__resume').innerHTML = `Введите код, который был отправлен на ${CONTENT.data.email}`
                            document.querySelector('.auth__create__resume').style.display = 'block'

                            CREATE_RESUME = true
                            THIS_PIN_CODE = parseInt(xhr.response.data['pin_code'])
                        },
                        error: (xhr) => {
                            console.log(xhr)
                        }
                    })

                }

            }

            if (CONTENT.data.choice === 2) {

                let PROFESSION = document.querySelector('#prof__applicant').value,
                    SALARY = document.querySelector('#salary__applicant').value,
                    COMPANY = document.querySelector('#exp__company').value,
                    ADDRESS = document.querySelector('#exp__address').value,
                    FUNCTION = document.querySelector('#exp__prof').value,
                    TEXT = document.querySelector('#exp__text').value,
                    NOW = document.querySelector('#block__end-date').checked,
                    ALL_INPUT = document.querySelectorAll('.auth__form__for__applicant input')

                let err = HandlingInputError(ALL_INPUT)

                if (err === 0) {

                    CONTENT.data = {
                        ...CONTENT.data,
                        profession          : PROFESSION,
                        salary              : SALARY,
                        company             : COMPANY,
                        address             : ADDRESS,
                        function            : FUNCTION,
                        text                : TEXT,
                        now                 : NOW ? 1 : 0,
                        csrfmiddlewaretoken : '' // document.querySelector('input[name="csrfmiddlewaretoken"]').value
                    }

                    HTTP.ajax({
                        method: 'POST',
                        cache: false,
                        url: '/procedure/signup',
                        data: JSON.stringify(CONTENT),
                        ok: (xhr) => {
                            document.querySelectorAll('.auth__next').forEach(el => el.style.display = 'none')
                            document.querySelector('.email__from__resume').innerHTML = `Введите код, который был отправлен на ${CONTENT.data.email}`
                            document.querySelector('.auth__create__resume').style.display = 'block'

                            CREATE_RESUME = true
                            THIS_PIN_CODE = parseInt(xhr.response.data['pin_code'])
                        },
                        error: (xhr) => {
                            console.log(xhr)
                        }
                    })

                }

            }
        })

        CREATE_RESUME_BUTTON.addEventListener('click', function (e) {
            e.preventDefault()

            if (!CREATE_RESUME) return false

            let code = ''

            document.querySelector('.pin__code-resume input').forEach(el => {
                code += el.value
            })

            code = parseInt(code)

            if (code === THIS_PIN_CODE) {

                HTTP.ajax({
                    method: 'POST',
                    cache: false,
                    url: '/procedure/user_create',
                    data: JSON.stringify(CONTENT),
                    ok: (xhr) => {
                        window.location.href = '/procedure/user_create/?token=[CREATE_TOKEN]'
                    },
                    error: (xhr) => {
                        console.log(xhr)
                    }
                })

            } else {

            }
        })

        /**
         * ОБРАБОТКА ФОРМЫ РЕГИСТРАЦИИ КОМПАНИИ
         */

        const START_COMPANY_CREATE = () => {
            document.querySelector('.auth__start__company').style.display = 'block'
            mask(document.querySelectorAll('.phone__mask'))

            CONTENT.type = 'company'

            NEXT_COMPANY_BUTTON.addEventListener('mouseup', NEXT_COMPANY_CREATE)
        }

        const NEXT_COMPANY_CREATE = (e) => {
            e.preventDefault()

            let CONTACT = document.querySelector('#contact').value,
                PHONE = document.querySelector('#phone_company').value,
                EMAIL = document.querySelector('#email_company').value,
                TYPE = document.querySelector('#type_company').value,
                PASSWORD = document.querySelector('#password_company').value,
                ALL_INPUT = document.querySelectorAll('.auth__start__company-form input')

            let err = HandlingInputError(ALL_INPUT)

            if (err === 0) {

                CONTENT.data = {
                    contact  : CONTACT,
                    phone    : PHONE,
                    email    : EMAIL,
                    type     : TYPE,
                    password : PASSWORD
                }

                document.querySelectorAll('.auth__next').forEach(el => el.style.display = 'none')
                document.querySelector('.auth__exp__company').style.display = 'block'

                VERIFY_COMPANY = true

            }
        }

        VERIFY_COMPANY_BUTTON.addEventListener('click', function (e) {
            e.preventDefault()

            if (!VERIFY_COMPANY) return false

            let INN = document.querySelector('#inn').value,
                ORGN = document.querySelector('#ogrn').value,
                NAME = document.querySelector('#name_company').value,
                ADDRESS = document.querySelector('#address_company').value,
                CEO = document.querySelector('#ceo').value,
                ALL_INPUT = document.querySelectorAll('.auth__exp__company-form input')

            let err = HandlingInputError(ALL_INPUT)

            if (err === 0) {
                CONTENT.data = {
                    ...CONTENT.data,
                    inn     : INN,
                    ogrn    : ORGN,
                    name    : NAME,
                    address : ADDRESS,
                    ceo     : CEO,
                    csrfmiddlewaretoken : '' // document.querySelector('input[name="csrfmiddlewaretoken"]').value
                }

                HTTP.ajax({
                    method: 'POST',
                    cache: false,
                    url: '/procedure/signup',
                    dataType: JSON.stringify(CONTENT),
                    ok: (xhr) => {
                        document.querySelectorAll('.auth__next').forEach(el => el.style.display = 'none')
                        document.querySelector('.email__from__company').innerHTML = `Введите код, который был отправлен на ${CONTENT.data.email}`
                        document.querySelector('.auth__create__company').style.display = 'block'

                        CREATE_COMPANY = true
                        THIS_PIN_CODE = parseInt(xhr.response.data['pin_code'])
                    },
                    error: (xhr) => {
                        console.log(xhr)
                    }
                })
            }
        })

        CREATE_COMPANY_BUTTON.addEventListener('click', function (e) {
            e.preventDefault()

            if (!CREATE_COMPANY) return false

            let code = ''

            document.querySelector('.pin__code-company input').forEach(el => {
                code += el.value
            })

            code = parseInt(code)

            if (code === THIS_PIN_CODE) {

                HTTP.ajax({
                    method: 'POST',
                    cache: false,
                    url: '/procedure/company_create',
                    data: JSON.stringify(CONTENT),
                    ok: (xhr) => {
                        window.location.href = '/procedure/company_create/?token=[CREATE_TOKEN]'
                    },
                    error: (xhr) => {
                        console.log(xhr)
                    }
                })

            } else {

            }
        })

    })

})()
