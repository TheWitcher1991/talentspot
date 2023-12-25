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
