import { HTTP } from './HTTP'

class AjaxHandler {

    constructor(options, timeout, selector, placeholder = '') {
        this.options = options
        this.timeout = timeout
        this.selector = selector
        this.placeholder = placeholder
    }

    bindHandlers() {

    }

    bindRequest() {

    }

    bindPagination() {

    }

    renderPagination() {

    }

    renderContext() {

    }

    renderError() {

    }

    init() {
        this.bindHandlers()
        this.bindRequest()
    }

}

export {
    AjaxHandler
}
