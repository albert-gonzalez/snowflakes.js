let webpack = require('webpack');
module.exports = {
    entry: {
        'snowflakes': './src/js/snowflakes.js',
        'snowflakes.min': './src/js/snowflakes.js',
    },
    output: {
        path: 'dist',
        filename: '[name].js',
        publicPath: "dist/",
        library: 'snowflakes'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a valid name to reference
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true
        })
    ]
};
