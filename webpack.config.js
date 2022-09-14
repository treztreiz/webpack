const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/js/app.js',
    devServer: {

        static: './dist',
    
    },
    plugins: [

        new HtmlWebpackPlugin({

        template: 'src/index.html',

        }),

    ],
    output: {
        filename: 'app.[hash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {

        rules: [

        {

            test: /\.s[ac]ss$/i,

            use: ['style-loader', 'css-loader', 'sass-loader'],

        },

        ],
    },
    // optimization: {

    //     runtimeChunk: 'single',
    
    // },
}