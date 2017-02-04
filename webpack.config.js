const ngToolsWebpack = require('@ngtools/webpack');

//var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    resolve: {
        extensions: ['.ts', '.js']
    },
    entry: {
        main: './app/main.aot.ts',
        vendor: './app/vendor.ts',
    },
    output: {
        path: './dist',
        publicPath: 'dist/',
        filename: '[name].js'
    },
    plugins: [
        // Comment this for lazy routes chunks work
        /*new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname
        ),*/


        new ngToolsWebpack.AotPlugin({
            tsConfigPath: './tsconfig.json',
            entryModule: __dirname + '/app/app.module#AppModule',
        }),
        //new CopyWebpackPlugin([
        //	{from: './index.html'}
        //]),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: [ 'main', 'vendor' ]
        }),
        /*new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: true
        })*/
    ],
    module: {
        loaders: [
            {test: /\.scss$/, loaders: ['raw-loader', 'sass-loader']},
            {test: /\.css$/, loader: 'raw-loader'},
            {test: /\.html$/, loader: 'raw-loader'},
            {test: /\.ts$/, loader: '@ngtools/webpack'}
        ]
    },
    devServer: {
        historyApiFallback: true
    }
};

