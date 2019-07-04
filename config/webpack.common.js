const path = require('path');
const webpack = require('webpack')

module.exports = {
    entry: path.resolve(__dirname, '../', 'src', 'index.js'),
    target: 'node',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../', 'dist')
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../', 'dist'),
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};