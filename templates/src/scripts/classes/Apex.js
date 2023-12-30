/**
 * Класс работы с графиками ApexCharts
 *
 * Класс реализует методы, которые позволяют создать графики разного вида
 *
 * [MDN Reference](https://apexcharts.com/)
 *
 * @class
 */
export default class Apex {

    static #color = {
        white : '#ffffff',
        main  : '#166666',
        grey  : '#e1e1e1',
        text  : '#989898'
    }

    static #strokeArea = {
        stroke: {
            width: 3,
            curve: 'smooth',
            lineCap: 'butt',
        },
    }

    static #gridArea = {
        grid: {
            borderColor: this.#color.grey,
            clipMarkers: false,
            yaxis: {
                lines: {
                    show: true
                }
            }
        },
    }

    static #fillArea = {
        fill: {
            gradient: {
                enabled: true,
                opacityFrom: 0.60,
                opacityTo: 0
            }
        },
    }

    static #tooltipDark = {
        tooltip: {
            theme: 'dark',
        },
    }

    static #xaxisArea = {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        labels: {
            style: {
                colors: this.#color.text
            }
        }
    }

    static #yaxisArea = {
        min: 0,
        opposite: true,
        tickAmount: 3,
        labels: {
            offsetX: -5,
            style: {
                colors: this.#color.text
            }
        }
    }

    /**
     *
     * @param {string} selector
     * @param {Object} options
     * @return {ApexCharts}
     */
    static renderArea (selector, options) {
        let { type, series, xaxis, chartAdd } = options

        return new ApexCharts(document.querySelector(`#${selector}`), {
            chart: {
                id: selector,
                type: type,
                height: 250,
                foreColor: this.#color.white,
                toolbar: {
                    show: false
                },
                ...chartAdd
            },
            series: series,
            colors: [this.#color.main],
            dataLabels: {
                enabled: false
            },
            xaxis: {
                ...xaxis,
                ...this.#xaxisArea
            },
            yaxis: {
                ...this.#yaxisArea
            },
            ...this.#strokeArea,
            ...this.#gridArea,
            ...this.#fillArea,
            ...this.#tooltipDark
        })
    }

}
