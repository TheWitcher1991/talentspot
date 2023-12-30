/**
 * Класс работы с календарем событий
 *
 * Класс реализует методы, которые позволяют создать календарь
 *
 * @class
 */
export default class Calendar {

    static DaysOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

    static TimesOfDay = ['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']

    static Months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

    static Date = new Date()

    static currMonth = this.Date.getMonth()
    static currYear = this.Date.getFullYear()
    static currDay = this.Date.getDate()

    static selector = ''
    static title = ''

    static getElement (selector) {
        return document.querySelector(selector)
    }

    static getWeekDate (date) {
        return this.DaysOfWeek[date.getDay()]
    }

    /**
     * МОДУЛЬ СОЗДАНИЯ КАЛЕНДАРЯ ПО ДНЯМ
     */

    static renderWeek (selector, title, prev, next) {
        this.showWeek(selector, title)
    }

    static showWeek(selector, title) {
        this.setWeek(this.currYear, this.currMonth, selector, title)
    }

    static setWeek(y, m, selector, title) {
        let firstDayOfWeek = this.currDay,
            lastDayOfWeek = this.currDay + 6

        let html = `<table class="week-calendar">`

        html += '<thead><tr>'
        html += '</tr></thead>'

        html += '<tr class="days">';

        html += `
            <td class="days-gmt">GMT+3</td>
        `
        for (let i= firstDayOfWeek; i <= lastDayOfWeek; i++) {

            html += `
                <td ${new Date(y, m, i).getDate() === this.Date.getDate() ? 'class="day-today"' : ''}>
                    <div>
                          <span>${this.getWeekDate(new Date(y, m, i - 1))}</span>
                        <span class="day-number">${i}</span>
                  
                    </div>
                </td>
            `
        }

        html += '</tr>'

        let i = 1

        html += `<tr class="times"><td class="times-number"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><tr>`

        for (let j = 0; j < this.TimesOfDay.length; j++) {

            html += '<tr class="times">'

            html += `<td class="times-number"><span>${this.TimesOfDay[j]}</span></td>`

            for (let k= firstDayOfWeek; k <= lastDayOfWeek; k++) {
                html += `
                <td class="times-event ${new Date(y, m, k).getDate() === this.Date.getDate() ? 'day-today' : ''}">
                    <div>
                        
                    </div>
                </td>
            `
            }

            html += '</tr>'

        }
        html += '</table>'

        document.querySelector(selector).innerHTML = html;
    }

    /**
     * МОДУЛЬ СОЗДАНИЯ КАЛЕНДАРЯ ПО НЕДЕЛЯМ
     */

    static renderMonth (selector, title, prev, next) {
        this.selector = selector
        this.title = title

        this.showcurr()

        document.querySelector(prev).addEventListener('click', () => this.previousMonth())
        document.querySelector(next).addEventListener('click', () => this.nextMonth())
    }

    static nextMonth () {
        if (this.currMonth === 11) {
            this.currMonth = 0
            this.currYear = this.currYear + 1
        } else {
            this.currMonth = this.currMonth + 1
        }

        this.showcurr()
    }

    static previousMonth () {
        if (this.currMonth === 0) {
            this.currMonth = 11
            this.currYear = this.currYear - 1
        } else {
            this.currMonth = this.currMonth - 1
        }

        this.showcurr()
    }

    static showcurr () {
        this.showMonth(this.currYear, this.currMonth)
    }

    static showMonth (y, m) {
        let d = new Date(),
            firstDayOfMonth = new Date(y, m, 7).getDay(),
            lastDateOfMonth =  new Date(y, m+1, 0).getDate()

        let lastDayOfLastMonth = m === 0 ? new Date(y - 1, 11, 0).getDate() : new Date(y, m, 0).getDate()

        let html = `<table>`

        html += '<thead><tr>'
        html += '</tr></thead>'

        html += '<tr class="days">';
        for (let i= 0; i < this.DaysOfWeek.length; i++) {
            html += '<td>' + this.DaysOfWeek[i] + '</td>'
        }
        html += '</tr>'

        let i = 1

        do {

            let dow = new Date(y, m, i).getDay()

            if (dow === 1) {
                html += '<tr>';
            } else if (i === 1) {
                html += '<tr>'
                let k = lastDayOfLastMonth - firstDayOfMonth + 1
                for(let j= 0; j < firstDayOfMonth; j++) {
                    html += '<td class="not-current">' + k + '</td>';
                    k++;
                }
            }

            let chk = new Date();
            let chkY = chk.getFullYear();
            let chkM = chk.getMonth();
            if (chkY === this.currYear && chkM === this.currMonth && i === this.currDay) {
                html += '<td class="today"><span>' + i + '</span></td>'
            } else {
                html += '<td class="normal">' + i + '</td>'
            }

            if (dow === 0) {
                html += '</tr>';
            } else if (i === lastDateOfMonth) {
                let k= 1;
                for(dow; dow < 7; dow++) {
                    html += '<td class="not-current">' + k + '</td>';
                    k++;
                }
            }

            i++

        } while (i <= lastDateOfMonth)

        html += '</table>'

        document.querySelector(this.title).innerHTML = this.Months[m] + ' ' + y
        document.querySelector(this.selector).innerHTML = html;
    }

}
