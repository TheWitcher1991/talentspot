/**
 * Конвертирует объект с параметрами в строку запроса
 * @param {Object} params
 * @return {string}
 */
const convertObjectToQueryString = params => {
    let urlParams = '';

    Object.keys(params).forEach((key) => {
        if (urlParams !== '') {
            urlParams += '&';
        }
        urlParams += `${key}=${encodeURIComponent(String(params[key]))}`;
    });

    return `?${urlParams}`;
}

/**
 * Проверка, что это email
 * @param {string} str
 * @return {boolean}
 */
const isEmail = str => {
    return  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
        .test(String(str).toLowerCase())
}

/**
 * Проверка, что это ИНН
 * @param {string} i
 * @return {boolean}
 */
const isINN = i => {
    if (i.match(/\D/)) return false

    let inn = i.match(/(\d)/g)

    if (inn.length === 10) {
        return inn[9] === String(((
            2 * inn[0] + 4 * inn[1] + 10 * inn[2] +
            3 * inn[3] + 5 * inn[4] +  9 * inn[5] +
            4 * inn[6] + 6 * inn[7] +  8 * inn[8]
        ) % 11) % 10)
    } else if (inn.length === 12) {
        return inn[10] === String(((
            7 * inn[0] + 2 * inn[1] + 4 * inn[2] +
            10 * inn[3] + 3 * inn[4] + 5 * inn[5] +
            9 * inn[6] + 4 * inn[7] + 6 * inn[8] +
            8 * inn[9]
        ) % 11) % 10) && inn[11] === String(((
            3 * inn[0] +  7 * inn[1] + 2 * inn[2] +
            4 * inn[3] + 10 * inn[4] + 3 * inn[5] +
            5 * inn[6] +  9 * inn[7] + 4 * inn[8] +
            6 * inn[9] +  8 * inn[10]
        ) % 11) % 10)
    }

    return false
}

/**
 * Проверка, что это ОГРН
 * @param {string} ogrn
 * @return {boolean}
 */
const isOGRN = ogrn => {
    ogrn += ''

    if (ogrn.length === 13 && (ogrn.slice(12,13) === ((ogrn.slice(0,-1)) % 11 + '').slice(-1))) {
        return true
    } else return ogrn.length === 15 && (ogrn.slice(14, 15) === ((ogrn.slice(0, -1)) % 13 + '').slice(-1));
}

/**
 * Переключение табов
 * @param {Event} event
 * @param {string} id
 */
const swipeTabs = (event, id) => {

    let tabcontent = document.querySelectorAll('.tab__content'),
        tablinks   = document.querySelectorAll('.tab__links');

    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none'
    }

    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' tab__active', '');
    }

    document.querySelector(id).style.display = 'block'

    event.currentTarget.className += ' tab__active'

}

/**
 * Проверить, что элемент - массив
 * @param {any} vars
 * @returns {*}
 */
const isArray = vars => Array.prototype.isArray(vars)

/**
 * Проверить, что элемент - объект
 * @param {any} vars
 * @returns {boolean}
 */
const isObject = vars => typeof vars === 'object' && vars !== null && !isArray(vars)

/**
 * Проверить, что элемент - функция
 * @param {any} obj
 * @returns {boolean}
 */
const isFunction = obj => typeof obj === 'function' && typeof obj.nodeType !== 'number' && typeof obj.item !== 'function'

/**
 * Проверить существование переменной
 * @param {any} vars
 * @returns {boolean}
 */
const isset = vars => typeof vars !== 'undefined' && vars !== null

/**
 * Получить случайное число
 * @param {number} max
 * @returns {number}
 */
const getRandomInt = (max = 100) => Math.floor(Math.random() * max)

/**
 * Всплывающиее уведомление
 * @param {string} text
 */
const MessageBox = text => {
    let id = getRandomInt(100);
    document.querySelector('.errors-block-fix').innerHTML += `
        <div class="alert-block alert-${id}">
            <div>
                <span>${text}</span>
                    </br />
            </div>
            <span class="exp-ed"><i class="mdi mdi-close"></i></span>  
        </div>
    `
    document.querySelector('.errors-block-fix > div').style.display = 'flex'
    setTimeout (() => {
        document.querySelector(`.alert-${id}`).remove()
    }, 3000)
}

/**
 * Вывод сообщения в блоке контента
 * @param {string} text
 * @returns {string}
 */
const RenderSearchError = text => {
    return `
        <span class="no__file">
            <svg width="224" viewBox="0 0 306 262" fill="none" xmlns="http://www.w3.org/2000/svg" class="e-notification__sign"><path d="M156.615 210.474c47.95 0 86.921-38.971 86.921-86.921 0-47.95-38.971-86.921-86.921-86.921-48.129 0-86.92 38.791-86.92 86.921 0 47.95 38.791 86.921 86.92 86.921Z" fill="#EDEDED"></path><path d="M101.923 99.791h105.07c3.936 0 7.477 3.345 7.477 7.477v66.308c0 3.935-3.345 7.477-7.477 7.477h-105.07c-3.935 0-7.477-3.345-7.477-7.477v-66.308c0-4.132 3.542-7.477 7.477-7.477Z" fill="url(#a)"></path><path d="M257.724 101.822c2.694-2.514 2.873-6.645.359-9.338-2.514-2.694-6.645-2.874-9.339-.36-2.694 2.515-2.873 6.645-.359 9.339 2.335 2.514 6.645 2.873 9.339.359ZM258.084 72.19c1.078-1.078 1.257-2.874.18-3.951-1.078-1.078-2.874-1.258-3.951-.18-1.078 1.077-1.257 2.873-.18 3.95 1.078 1.258 2.874 1.258 3.951.18ZM187.507 31.424c.718-.719.898-1.976.179-2.694-.718-.719-1.975-.898-2.694-.18-.718.718-.898 1.976-.179 2.694.718.718 1.975.898 2.694.18Z" fill="#EDEDED"></path><g filter="url(#b)"><path d="m252.642 64.768-26.169 46.633c-.984 1.574-2.952 2.164-4.329 1.18l-44.861-26.169c-1.574-.984-2.165-2.951-1.181-4.329l34.433-59.421c.984-1.575 2.952-2.165 4.329-1.181l32.465 18.889 5.313 24.398Z" fill="#F8F8F8"></path></g><path d="m247.33 40.37-7.477 12.593c-.984 1.967-.394 3.935 1.377 5.116l11.216 6.493" fill="#DDD"></path><path d="M216.438 52.569c.787-.197 1.574-.197 2.165-.197h2.361c.787.197 1.771.394 2.558.59.983.394 1.77.787 2.557 1.18a8.71 8.71 0 0 1 2.952 2.362c.787.787 1.377 1.77 1.771 2.952.393.983.393 2.164.393 3.148-.197 1.18-.59 2.36-1.18 3.345-.591.983-1.181 1.77-1.968 2.557-.787.59-1.377.984-2.361 1.378-.787.393-1.574.59-2.361.59l-2.165.197c-.59 0-1.18.197-1.967.393-.59.197-.984.394-1.377.787l-2.165 2.755-3.542-1.968 1.575-3.541c.196-.59.787-1.18 1.18-1.574.59-.394 1.181-.59 1.771-.787.787-.197 1.377-.197 2.164-.394.787 0 1.574-.197 2.361-.393.787-.197 1.378-.394 2.165-.787.787-.394 1.18-.984 1.574-1.771.197-.394.393-.984.59-1.574 0-.59 0-.984-.197-1.378-.196-.59-.393-.983-.787-1.377-.393-.394-.787-.787-1.377-1.18-.59-.394-1.377-.788-2.164-.984-.591-.197-1.181-.197-1.771-.197h-1.377c-.197 0-.591 0-.788-.197-.393-.197-.787-.787-.787-1.18l.197-2.755ZM206.403 78.54c.197-.393.591-.787.984-1.18.394-.197.787-.59 1.181-.59.984-.197 1.967-.197 2.754.393.394.197.787.59 1.181.984l.59 1.18c.591 1.968-.59 3.739-2.558 4.329-.983.197-1.967 0-2.754-.394-.394-.196-.787-.59-1.181-.983-.197-.394-.59-.787-.59-1.18-.197-.394-.197-.985 0-1.378 0-.394.197-.787.393-1.18Z" fill="#E0E0E0"></path><g filter="url(#c)"><path d="m84.412 44.503 29.908 31.285c.983 1.18.983 2.754-.197 3.738L83.625 108.45c-1.18.984-2.755.984-3.739-.197L41.715 67.917c-.984-1.18-.984-2.754.197-3.738l22.234-20.857 20.266 1.18Z" fill="#F8F8F8"></path></g><path d="m63.95 42.928 8.264 8.657c1.18 1.18 3.148 1.18 4.329 0l7.673-7.28" fill="#DDD"></path><path d="M66.31 69.884c0-.59.197-1.18.394-1.77l.59-1.772c.197-.59.59-1.18.984-1.77.394-.59.984-1.181 1.574-1.771.787-.788 1.574-1.378 2.558-1.771.787-.394 1.771-.59 2.558-.59.787 0 1.77.196 2.558.393.787.394 1.574.984 2.361 1.574.59.59 1.18 1.377 1.377 2.164.197.59.394 1.378.59 2.165v1.967c-.196.59-.196 1.181-.393 1.771 0 .59-.197.984-.197 1.574 0 .394 0 .787.394 1.18l1.574 2.362-2.361 2.164-2.361-2.164c-.394-.394-.787-.787-.984-1.377-.197-.59-.197-.984-.197-1.574 0-.59.197-1.181.197-1.771.197-.59.197-1.18.197-1.771 0-.59 0-1.18-.197-1.77-.197-.591-.59-1.181-.984-1.772-.197-.393-.59-.59-.984-.787-.393-.197-.787-.197-1.18-.197-.394 0-.787.197-1.18.394-.394.197-.788.394-1.181.787-.394.394-.787.984-1.181 1.377-.197.394-.394.787-.59 1.378-.197.393-.197.787-.197.983 0 .197-.197.394-.394.59-.196.394-.787.394-1.18.198l-2.164-.394Zm18.102 13.773c-.196-.197-.393-.59-.59-.984-.197-.393-.197-.787-.197-1.18 0-.787.394-1.574.984-2.164.197-.197.59-.394.984-.59.394-.198.787-.198 1.18-.198 1.181 0 2.362.788 2.755 1.968.197.394.197.787.197 1.18 0 .394-.197.788-.197 1.181-.197.394-.393.59-.787.984-.197.197-.59.59-.984.59-.787.197-1.574.197-2.164 0-.59-.197-.984-.393-1.18-.787Z" fill="#E0E0E0"></path><g filter="url(#d)"><path d="m162.524 93.692-11.608 41.516c-.394 1.378-1.968 2.362-3.345 1.771l-40.336-11.805c-1.378-.394-2.361-1.968-1.771-3.345l15.741-53.52c.393-1.376 1.967-2.36 3.345-1.77l29.317 8.657 8.657 18.496Z" fill="#F8F8F8"></path></g><path d="m153.873 75.27-3.742 11.732c-.394 1.574.59 3.345 2.164 3.739l10.378 2.932" fill="#DDD"></path><path d="m131.634 91.134 1.77-.59c.591-.197 1.181-.394 1.968-.394h2.164c.787 0 1.574.197 2.361.394.984.197 1.968.787 2.755 1.377a9.349 9.349 0 0 1 1.968 1.968c.393.787.787 1.574.984 2.361.196.984 0 1.968-.197 2.755-.197.787-.591 1.574-1.181 2.361a5.996 5.996 0 0 1-1.574 1.574c-.59.393-1.18.787-1.771.984l-1.771.59c-.393.197-.983.393-1.377.59-.393.197-.787.59-.787.984l-1.181 2.558-3.148-1.377.591-3.149c0-.59.393-.983.787-1.377.393-.393.787-.787 1.377-.984.59-.196 1.181-.393 1.574-.59.59-.197 1.181-.394 1.771-.787.59-.197.984-.59 1.574-.984.394-.393.787-.984.984-1.77v-.984c0-.394-.197-.788-.394-1.181-.196-.394-.59-.59-.984-.984a9.586 9.586 0 0 0-1.377-.59c-.59-.197-1.18-.197-1.967-.197-.394 0-.984 0-1.378.197-.393 0-.787.197-.984.197-.196 0-.393.196-.787 0-.393 0-.787-.394-.787-.787l-.983-2.165Zm-2.952 22.628c.197-.394.197-.787.59-.984.197-.394.591-.59.787-.787.787-.394 1.575-.394 2.165-.197.393.197.787.394.984.59l.787.787c.787 1.378.196 3.149-1.181 3.739-.787.393-1.574.393-2.164.197-.394-.197-.787-.197-.984-.591-.394-.196-.59-.59-.787-.787-.197-.393-.197-.59-.394-.984.197-.196.197-.59.197-.983Z" fill="#E0E0E0"></path><g filter="url(#e)"><path d="m257.364 164.723-38.171 20.66c-1.181.59-2.951.197-3.542-1.181l-19.086-37.187c-.59-1.181-.196-2.952 1.181-3.542l49.584-26.169c1.18-.591 2.951-.197 3.541 1.18l13.774 26.956-7.281 19.283Z" fill="#F8F8F8"></path></g><path d="m264.448 145.834-10.625 5.509c-1.377.787-1.968 2.755-1.377 4.132l4.722 9.445" fill="#DDD"></path><path d="M238.082 140.718c.59.197.984.59 1.574.787.59.197.984.59 1.574 1.18.59.591.984.984 1.377 1.574.591.591.984 1.181 1.378 1.968.59.787.787 1.968.787 2.755.196.984 0 1.771 0 2.754-.197.787-.591 1.574-.984 2.362-.59.787-1.377 1.377-2.164 1.77-.591.394-1.575.591-2.362.787-.59.197-1.574.197-2.164 0-.59-.196-1.377-.196-1.968-.59l-1.574-.787c-.393-.197-.983-.393-1.377-.59-.393-.197-.984-.197-1.181.197l-2.557.983-1.378-2.951 2.558-1.771c.394-.393.984-.393 1.574-.393.591 0 .984 0 1.574.196.591.197.984.591 1.378.787.59.197.983.591 1.771.787.59.197.983.197 1.77.394.591 0 1.181-.197 1.968-.59.59-.394 1.377-.984 1.377-1.968.197-.393 0-.787 0-1.377-.196-.394-.196-.787-.59-1.378-.197-.59-.59-.983-.984-1.574-.197-.196-.59-.59-.984-.787-.196-.196-.59-.393-.787-.59-.196-.197-.393-.197-.59-.59-.197-.197-.197-.787 0-.984l.984-2.361Zm-18.299 13.576c.394-.197.59-.393 1.181-.196.393-.197.787 0 .984 0 .787.196 1.377.787 1.574 1.377.196.393.196.787.196 1.18v.984c-.196.59-.787 1.378-1.377 1.574-.394.197-.787.197-1.181.197h-.983c-.787-.197-1.378-.787-1.574-1.377-.197-.394-.197-.787-.197-1.181-.197-.393 0-.787 0-.984.197-.393.393-.59.393-.983.197-.197.787-.197.984-.591Z" fill="#E0E0E0"></path><path d="M216.438 142.489v32.662c0 4.132-3.541 7.674-7.673 7.674H100.743c-4.132 0-7.674-3.542-7.674-7.674v-35.417" stroke="#5F6865" stroke-width="5.575" stroke-linecap="round" stroke-linejoin="round"></path><path d="M212.308 121.436h-36.991c-3.542 0-7.083 1.18-9.838 3.541l-9.838 7.871c-2.755 2.164-6.296 3.541-9.838 3.541h-42.107c-4.132 0-7.674 3.345-7.674 7.674 0 .394 0 .787.197 1.181l7.674 40.336c.59 3.738 3.935 6.689 7.674 6.689h89.919c3.935 0 7.084-2.754 7.674-6.493l10.822-55.486c.59-4.132-2.165-8.067-6.493-8.658-.394-.196-.788-.196-1.181-.196Z" fill="#fff"></path><g filter="url(#f)"><path d="M222.538 114.155h-44.074c-4.132 0-8.461 1.574-11.609 4.132l-11.806 9.642c-3.345 2.754-7.477 4.131-11.609 4.131H92.873c-4.92 0-9.248 3.936-9.248 9.248 0 .394 0 .984.197 1.378l9.248 48.993c.787 4.525 4.525 8.067 9.247 8.067h107.235c4.525 0 8.46-3.345 9.248-7.87l12.789-67.096c.787-4.919-2.558-9.838-7.674-10.625h-1.377Z" fill="url(#g)"></path></g><path d="M137.536 165.707c2.558 0 4.722-2.164 4.722-4.722 0-2.558-2.164-4.722-4.722-4.722-2.558 0-4.723 2.164-4.723 4.722 0 2.558 2.165 4.722 4.723 4.722ZM174.331 164.919c2.558 0 4.722-2.164 4.722-4.722 0-2.558-2.164-4.722-4.722-4.722-2.558 0-4.723 2.164-4.723 4.722 0 2.558 2.165 4.722 4.723 4.722ZM165.872 172.79h-2.558c-2.164-4.329-7.477-6.1-11.608-3.738-1.771.787-3.149 2.361-3.739 3.738h-2.558c2.165-5.706 8.658-8.657 14.167-6.493 2.951 1.18 5.116 3.542 6.296 6.493Z" fill="#CCC"></path><path d="M240.443 215.683c-2.164 0-1.377.197-18.102-16.528-16.134 12.003-38.565.394-38.565-19.282 0-13.183 10.822-24.005 24.005-24.005 19.086 0 30.892 21.447 19.676 37.778l15.544 15.544a3.708 3.708 0 0 1-2.558 6.493Zm-32.465-52.141c-9.051 0-16.528 7.28-16.528 16.528 0 9.247 7.28 16.528 16.528 16.528.984 0 1.968 0 2.951-.197.984-.197 1.968-.394 2.755-.787.984-.394 1.771-.787 2.558-1.181.984-.59 1.771-1.18 2.558-1.967l1.967-1.968c.591-.787 1.181-1.574 1.574-2.361.394-.787.787-1.771 1.181-2.755s.59-1.967.59-2.951c0-.787.197-1.377.197-2.165.197-9.444-7.28-16.724-16.331-16.724Z" fill="#BCBCBC"></path><path d="m125.93 152.917 10.625-5.706M183.58 150.163l-10.625-5.903" stroke="#CCC" stroke-width="2.787" stroke-miterlimit="10"></path><defs><filter id="b" x="134.738" y=".559" width="158.787" height="173.828" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="20.442"></feOffset><feGaussianBlur stdDeviation="20.442"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.27 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter><filter id="c" x=".117" y="22.881" width="155.8" height="147.609" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="20.442"></feOffset><feGaussianBlur stdDeviation="20.442"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.27 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter><filter id="d" x="64.406" y="45.923" width="139.001" height="152.556" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="20.442"></feOffset><feGaussianBlur stdDeviation="20.442"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.27 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter><filter id="e" x="155.417" y="96.597" width="150.111" height="150.376" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="20.442"></feOffset><feGaussianBlur stdDeviation="20.442"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.27 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter><filter id="f" x="42.742" y="93.714" width="229.844" height="167.357" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="20.442"></feOffset><feGaussianBlur stdDeviation="20.442"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.27 0"></feColorMatrix><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter><linearGradient id="a" x1="154.458" y1="105.765" x2="154.458" y2="136.483" gradientUnits="userSpaceOnUse"><stop stop-color="#BEBEBE"></stop><stop offset="1" stop-color="#8C8C8C"></stop></linearGradient><linearGradient id="g" x1="157.616" y1="112.175" x2="157.616" y2="200.669" gradientUnits="userSpaceOnUse"><stop stop-color="#FFFDFD"></stop><stop offset=".996" stop-color="#F1F1F1"></stop></linearGradient></defs></svg>
            ${text}
        </span>
    `
}

/**
 * Создание макси ввода номера телефона в поле input
 * @param {NodeListOf<HTMLObjectElement>} el
 */
const mask = el => {
    [].forEach.call(el, input => {
        let keyCode

        const temp = function (event) {
            event.keyCode && (keyCode = event.keyCode)
            let pos = this.selectionStart

            if (pos < 3) event.preventDefault()

            let matrix = '+7 (___) ___ ____',
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, a => i < val.length ? val.charAt(i++) : a)

            i = new_value.indexOf('_')

            if (i !== -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }

            let reg = matrix.substr(0, this.value.length)
                                    .replace(/_+/g, a => `\\d{1,${a.length}`)
                                    .replace(/[+()]/g, '\\$&')
            reg = new RegExp(`^${reg}$`)

            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                this.value = new_value
            }

            if (event.type === 'blur' && this.value.length < 5) {
                this.value = ''
            }
        }

        input.addEventListener('input', temp, false)
        input.addEventListener('change', temp, false)
        input.addEventListener('focus', temp, false)
        input.addEventListener('blur', temp, false)
        input.addEventListener('keydown', temp, false)

    })
}

/**
 * Запуска кода JavaScript, как только объектная модель документа (DOM) страницы
 * станет безопасной для манипулирования
 * @param {function} callback
 */
let ready = callback => {
    if (document.readyState !== 'loading') callback();
    else document.addEventListener('DOMContentLoaded', callback);
}

/**
 *
 * @param {NodeListOf<HTMLObjectElement>} nodeList
 * @return {number}
 */
const HandlingInputError = nodeList => {
    let err = 0

    const NO_TYPE = ['i_choice', 'password', 'phone', 'email'],
          NO_DATA = ['year']

    document.querySelectorAll('.label__error').forEach(el => el.style.display = 'none')
    nodeList.forEach(el => el.classList.remove('input__error'))

    nodeList.forEach(el => {
        let id = el.id

        let tmp = text => {
            el.classList.add('input__error')
            document.querySelector(`.error__${id}`).style.display = 'block'
            document.querySelector(`.error__${id}`).innerHTML = text
            err++
        }

        if (el.value.trim() === '' && !NO_TYPE.includes(id) && !NO_DATA.includes(el.dataset.type)) {
            tmp('Данные указаны неверно')
        }

        if (el.dataset.id === 'email' && (el.value.trim() === '' || !isEmail(el.value))) {
            tmp('Email указан неверно')
        }

        if (el.dataset.id === 'password' && (el.value.trim() === '' || el.value.length < 8)) {
            tmp('Пароль должен быть не менее 8 символов')
        }

        if (el.dataset.id === 'phone' && (el.value.trim() === '' || el.value.length < 15)) {
            tmp( 'Телефон указан неверно')
        }

        if (el.dataset.type === 'year' && (el.value.trim() === '' || el.value.length < 4)) {
            tmp('Год указан неверно')
        }
    })

    return err
}

/**
 * GET параметры страницы
 * @type {{}}
 * @returns {array}
 */
const $_GET = window
    .location
    .search
    .replace('?','')
    .split('&')
    .reduce(
        function(p,e){
            let a = e.split('=');
            p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
            return p;
        },
        {}
    );

export {
    isset,
    isEmail,
    isINN,
    isOGRN,
    isArray,
    isObject,
    isFunction,
    MessageBox,
    RenderSearchError,
    HandlingInputError,
    convertObjectToQueryString,
    ready,
    mask,
    swipeTabs,
    $_GET
}
