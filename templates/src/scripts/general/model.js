export default function () {

    // ВСПЛЫВАЮЩИЕ ОКНА В МОДУЛЕ "БЕЗОПАСНОСТЬ"

    document.querySelectorAll('.model__title-close')?.forEach(el => {
        el?.addEventListener('click', () => {
            document.querySelectorAll('.model').forEach(model => {
                model.style.display = 'none'
            })
        })
    })

    /**
     *
     * @param {string} div
     * @param {string} model
     */
    let openModel = (div, model) => {
        document.querySelector(div)?.addEventListener('click', function () {
            document.querySelector(model).style.display = 'flex'
        })
    }

    openModel('.security__spare', '.model__spare')
    openModel('.security__question', '.model__question')
    openModel('.security__password', '.model__password')
    openModel('.security__login', '.model__login')
    openModel('.security__email', '.model__email')

    document.querySelector('.lk__nav-chat > span')?.addEventListener('click', function (e) {
        e.preventDefault()

        document.querySelector('.lk__chat-pop').classList.toggle('lk__chat-block')
    })

    document.querySelectorAll('.lk__button-wrap > button')?.forEach(el => {
        el.addEventListener('click', () => el.nextElementSibling.classList.toggle('lk__button-menu-show'))
    })

}
