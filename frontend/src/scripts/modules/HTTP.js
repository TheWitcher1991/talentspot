/**
 * Класс для работы с интерфейсом XMLHttpRequest, использующий запросы по протоколу HTTP
 *
 * Класс реализует методы, которые позволяют создавать готовые AJAX запросы
 *
 * [MDN Reference](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest)
 *
 * @class
 */
class HTTP {
    /**
     *
     * @return {XMLHttpRequest|boolean}
     */
    static getXMLHttp = () => {
        try {
            this.xmlHttp = new window.XMLHttpRequest()
        } catch (e) {
            try{
                this.xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch(e) {
                console.log('Your browser does not support AJAX!')
                return false;
            }
        }

        return this.xmlHttp
    }

    /**
     *
     * @param options {object} - параметры ajax запроса
     */
    static ajax = options => {

        let xhr = this.getXMLHttp()

        let { type, method, data, url, async, cache, ok, error } = options

        xhr.open(method, url, async)

        xhr.responseType = type
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=UTF-8')

        if (!cache) {
            xhr.setRequestHeader('Cache-Control', 'no-cache, no-store, max-age=0')
            xhr.setRequestHeader('Pragma', 'no-cache')
        }

        xhr.onload = ok(xhr)
        xhr.onerror = error(xhr)

        xhr.send(data)

    }
}

export {
    HTTP
}
