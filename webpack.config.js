const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        // new CleanWebpackPlugin(['dist']),
        new TransferWebpackPlugin([
            {from: 'www'}
        ], path.join(__dirname, 'src')),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: JSON.stringify('production')
        //     }
        // }),
        // new webpack.optimize.UglifyJsPlugin()

    ],
    module: {
        rules: [
            {test: /\.(js|jsx)$/, exclude: /node_modules/, loader: ['babel-loader']},
            {test: /\.css$/, exclude: /node_modules/, use: ['style-loader', 'css-loader']},
            {
                test: /\.(jpg|png|gif|svg)$/,
                exclude: /node_modules/,
                use: 'file-loader?limit=100000'
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000
                    }
                }
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        // historyApiFallback: true,
        hot: true,
        // host: 'localhost',
        port: 3000,
        // disableHostCheck: true,
        contentBase: path.resolve(__dirname, 'dist')
    }
};