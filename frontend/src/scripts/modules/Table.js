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
            rows = [].slice.call(tbody.rows), // tbody.querySelectorAll('tr')
            compare = null

        let {cellIndex, type, sort} = th

        // TODO: ДОРАБОТАТЬ ПОЯВЛЕНИЕ СТРЕЛОК
        //       И ИЗМЕНЕНИЕ В ЗАВИСИМОСТИ ОТ ТИПА
        let cellTable = (sort) => {
            if (sort === 0) {
                return (rowA, rowB) => rowA.cells[cellIndex].innerHTML > rowB.cells[cellIndex].innerHTML ? 1 : -1
            } else if (sort === 1) {
                return (rowA, rowB) => rowA.cells[cellIndex].innerHTML < rowB.cells[cellIndex].innerHTML ? 1 : -1
            } else if (sort === 2) {
                return (rowA, rowB) => rowA.cells[cellIndex].innerHTML > rowB.cells[cellIndex].innerHTML ? 1 : -1
            }
        }

        compare = cellTable(sort)
        rows.sort(compare)
        tbody.append(...rows)
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
        sortTable(th.cellIndex, th.dataset.type)
    })

    const sortTable = (colNum, type) => {
        let tbody = table.querySelector('tbody'),
            rowsArray = [].slice.call(tbody.rows),
            compare

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
