class Table {

    #colums = ''
    #rows = ''
    #html = ''

    constructor (selector, options) {
        this.selector = selector
        this.options = options
        this.table = document.querySelector(selector).querySelector('table')
    }

    get setColums () {

        this.#colums += '<tr>'
        for (let i in this.options.colums) {
            this.#colums +=
                `<th data-sort="0" data-type="${this.options.colums[i].type}">
                <span>${this.options.colums[i].text}</span>
            </th>`
        }
        this.#colums += '</tr>'

        return this.#colums
    }

    get setRows () {

    }

    setEvent () {
        this.table.querySelectorAll('thead th').forEach(el => {
            el.addEventListener('click', e => {
                e.preventDefault()

                let th = e.target
                this.sortTable(th)
            })
        })
    }

    sortTable (th) {
        let tbody = this.table.querySelector('tbody'),
            rows = [].slice.call(tbody.rows) // tbody.querySelectorAll('tr')

        let {cellIndex, type, sort} = th

        let cellTable = (sort) => {

        }

        switch (sort) {
            case 0:

                break
            case 1:

                break
            case 2:
                break
        }
    }

    renderHTML () {
        this.#html += '<table><thead>'
        this.#html += this.setColums
        this.#html += '</thead'
        this.#html += '</table>'

        this.setEvent()
    }

}


export default function () {

    let table = document.querySelector('.table__master table')

    table?.addEventListener('click', function (e) {
        if (e.target.tagName !== 'TH') return
        /**
         *
         * @type {HTMLTableCellElement}
         */
        let th = e.target
        console.log(th)
        sortTable(th.cellIndex, th.dataset.type)
    })

    const sortTable = (colNum, type) => {
        let tbody = table.querySelector('tbody'),
            rowsArray = [].slice.call(tbody.rows),
            compare

        console.log(table.querySelector('tbody'))

        switch (type) {
            case 'number':
                compare = (rowA, rowB) => rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML
                break
            case 'string':
                compare = (rowA, rowB) => rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1
                break
        }

        rowsArray.sort(compare)
        tbody.append(...rowsArray)
    }

}
