import { HTTP } from './HTTP'
import { isFunction, isset, RenderSearchError, $_GET } from './config'

/**
 * Класс для создания ajax запроса, с учетом фильтров и вывода пагинации
 * @class
 */
class AjaxHandler {

    /**
     * @constructor
     * @param {
     *  {
     *      type: string,
     *      method: string,
     *      async: boolean,
     *      cache: boolean,
     *      url: string,
     *      data: string,
     *      placeholder: string,
     *      button: HTMLObjectElement,
     *      context: HTMLObjectElement,
     *      title: HTMLObjectElement,
     *      timeout: number
     *  }
     * } options - основные параметры запроса
     * @param {object[]} selector - селекторы и типы событий фильтров
     * @param {function} preload - функция, которая выполниться перед запросом
     */
    constructor(options, selector, preload = undefined) {
        this.options = options
        this.selector = selector
        this.preload = preload
        this.pagination = null
    }

    bindHandlers() {
        this.selector.forEach(({text, type}) => {
            if (type === 'pagination') {
                document.querySelector(text).addEventListener('click', this.bindPagination)
                this.pagination = document.querySelector(text)
                return false
            }

            document.querySelector(text).addEventListener(type, () => this.bindRequest(1))
        })
    }

    bindPagination(e) {
        e.preventDefault()
        e.stopPropagation()

        let $page = e.target.parentElement
        this.pagination.querySelector('div').classList.remove('main-active')
        this.bindRequest(1)
        $page.classList.add('main-active')

        window.scrollTo(0, 0)
    }

    bindRequest(page = 1) {
        document.querySelector('.filter__load').style.display = 'block'
        this.pagination.innerHTML = ''
        this.options.context.innerHTML = this.options.placeholder
        this.options.title.innerHTML = '<span><div class="placeholder-item jx-title"></div></span>'

        let thisHandler = () => {
            HTTP.ajax({
                type: this.options.type,
                method: this.options.method,
                async: this.options.async,
                cache: this.options.cache,
                url: this.options.url,
                data: this.options.data,
                ok: (xhr) => {
                    if (xhr.status !== 200) {
                        this.renderError(xhr)
                        return false
                    }

                    this.options.context.innerHTML = ''
                    this.renderContext(xhr.data)
                    this.renderPagination(xhr.data.pagination)
                },
                error: (xhr) => {
                    this.renderError(xhr)
                }
            })
        }

        if (isFunction(this.preload)) this.preload()

        if (this.options.timeout === 0) {
            thisHandler()
            return false
        }

        setTimeout(thisHandler, this.options.timeout)
    }

    renderContext(data) {
        this.options.title.innerHTML = data.count
        document.querySelector('.filter__load').style.display = 'none'
    }

    renderPagination({countAll, midSize, limit}) {
        let html = ''

        if (countAll > limit) {

            const PAGE = $_GET['page']

            let countPages = Math.ceil(countAll / limit)

            let start_page, end_page, last, forward, page_left, page_right

            if (PAGE > midSize + 1) {
                start_page = '<div data-main="1"><a href><i class="mdi mdi-chevron-double-left"></i></a></div>';
            }

            if (PAGE < (countPages - midSize)) {
                end_page = `<div data-page="countPages"><a href>${countPages}</div>`
            }


            if (PAGE < ((countPages - midSize) - 1)) {
                last = '<span>...</span>';
            }

            if (PAGE < countPages) {
                forward = `<div data-page="${PAGE + 1}"><a href><i class="mdi mdi-chevron-right"></i></a></div>`
            }

            page_left = '';
            for (let i = midSize; i > 0; i--) {
                if (PAGE - i > 0) {
                    page_left += `<div data-page="${PAGE - i}"><a href>${PAGE - i}</a></div>`
                }
            }

            page_right = '';
            for (let i = 1; i <= midSize; i++) {
                if (PAGE + i <= countPages) {
                    page_right += `<div data-page="${PAGE + i}"><a href>${PAGE + i}</a></div>`
                }
            }

            html = start_page + page_left + `<div class="page-active" data-page="${PAGE}"><a href>${PAGE}</a></div>` + page_right + last + end_page + forward

            this.pagination.append(html)
        }
    }

    renderError(xhr) {
        this.options.context.innerHTML = RenderSearchError('Произошла неизвестная ошибка. <br> Компании не найдены')
    }

    init() {
        this.bindHandlers()
        this.bindRequest(1)

        if (isset(this.options.button)) {
            this.options.button.addEventListener('click', () => this.bindRequest(1))
        }
    }

}

export {
    AjaxHandler
}
