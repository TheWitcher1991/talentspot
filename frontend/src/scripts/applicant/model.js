export default function () {

    document.querySelectorAll('.model__title-close')?.forEach(el => {
        el.addEventListener('click', () => {
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
        document.querySelector(div).addEventListener('click', function () {
            document.querySelector(model).style.display = 'flex'
        })
    }

    openModel('.security__spare', '.model__spare')
    openModel('.security__question', '.model__question')
    openModel('.security__password', '.model__password')
    openModel('.security__login', '.model__login')
    openModel('.security__email', '.model__email')

}
