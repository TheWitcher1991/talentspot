'use strict'

const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// TODO: ПРИ РАЗРАБОТКЕ BACKEND - ВЫХОД В backend/static/

const SCRIPT =  path.join(__dirname, './src/scripts')
const EXTERNAL = path.join(__dirname, './src/styles')
const BUILD = path.join(__dirname, './build')

const mode = process.env.NODE_ENV || 'production'
const target = process.env.NODE_ENV === 'production' ? 'browserslist' : 'web'

const recursiveIssuer = m => {
    if (m.issuer)
        return recursiveIssuer(m.issuer)
    else if (m.name)
        return m.name
    else
        return false
}

// Обязательные модули реализующие фундаментальную бизнес-логику

const baseModule = [
    `${SCRIPT}/classes/Apex.js`,
    `${SCRIPT}/classes/Table.js`,
    `${SCRIPT}/classes/Calendar.js`,
    `${SCRIPT}/classes/AjaxHandler.js`,
    `${SCRIPT}/api/HTTP.js`,
    `${SCRIPT}/api/ServerSentEvent.js`,
    `${SCRIPT}/api/WebSocketAPI.js`,
    `${SCRIPT}/api/WebWorker.js`,
    `${SCRIPT}/general/config.js`,
]

module.exports = {
    entry: {
        // ТОЧКИ ВХОДА
        home: [
            `${SCRIPT}/components/home.js`
        ],
        // module: [...baseModule],
        vacancy_search: [
            ...baseModule,
            `${SCRIPT}/components/vacancy.js`
        ],
        company_search: [
            ...baseModule,
            `${SCRIPT}/components/company.js`
        ],
        resume_search: [
            ...baseModule,
            `${SCRIPT}/components/resume.js`
        ],
        signup: [
            ...baseModule,
            `${SCRIPT}/components/signup.js`
        ],
        lk: [
            ...baseModule,
            `${SCRIPT}/lk.js`
        ],
        styles: [
            `${EXTERNAL}/index.scss`
        ],
    },
    optimization: {
        // runtimeChunk: 'single',
        minimize: true,
        minimizer: [new TerserPlugin()],
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: (m, c, entry = 'styles') =>
                        m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
                    chunks: 'all',
                    enforce: true,
                }
            }
        }
    },
    output: {
        path: BUILD,
        filename: '[name].bundle.js',
    },
    mode,
    target,
    node: {
        global: true,
        __filename: true,
        __dirname: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: false
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.scss'],
        fallback: {
            fs: false,
            os: false,
            path: false
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css'
        }),
    ]
}
