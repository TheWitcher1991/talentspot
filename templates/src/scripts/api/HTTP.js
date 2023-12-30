/**
 * Класс для работы с интерфейсом XMLHttpRequest, использующий запросы по протоколу HTTP
 *
 * Класс реализует методы, которые позволяют создавать готовые AJAX запросы
 *
 * [MDN Reference](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest)
 *
 * @class
 */
export default class HTTP {

    static #TYPE_URLENCODED = 'application/x-www-form-urlencoded'
    static #TYPE_JSON = 'application/json'
    static #TYPE_FROM_DATA = 'multipart/form-data'
    static #TYPE_PLAIN = 'text/plain'
    static #TYPE_XML = 'application/xml, text/xml'

    /**
     *
     * @return {XMLHttpRequest|boolean}
     */
    static #getXMLHttp = () => {
        try {
            this.xmlHttp = new window.XMLHttpRequest()
        } catch (e) {
            try {
                this.xmlHttp = new ActiveXObject('Microsoft.XMLHTTP')
            } catch(e) {
                console.log('Your browser does not support AJAX!')
                return false;
            }
        }

        return this.xmlHttp
    }

    /**
     * AJAX запрос на базе XMLHttpRequest
     * @param {{
     *     method: string,
     *     data: Document | XMLHttpRequestBodyInit | null,
     *     url: string,
     *     ok: function,
     *     error: function,
     *     async: boolean,
     *     cache: boolean,
     *     dataType: string,
     *     contentType: string
     * }} options - параметры ajax запроса
     */
    static ajax = options => {

        let xhr = this.#getXMLHttp()

        let {
            method,
            data,
            url,
            ok,
            error,
            async = true,
            cache = true,
            dataType = 'json',
            contentType = this.#TYPE_JSON
        } = options

        xhr.open(method, url, async)

        xhr.responseType = dataType

        xhr.setRequestHeader('Content-type', contentType)
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')

        if (!cache) {
            xhr.setRequestHeader('Cache-Control', 'no-cache, no-store, max-age=0')
            xhr.setRequestHeader('Pragma', 'no-cache')
        }

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)
                ok(xhr)
            else
                error(xhr)
        }

        xhr.onerror = error(xhr)

        try {
            xhr.send(data)
        } catch (e) {
            throw e;
        }

    }

}
