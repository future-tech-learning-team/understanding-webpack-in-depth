/**
 * @since 2017-12-31 22:33
 * @author chenyiqin
 */

const path = require('path');
const cwd = process.cwd();
const webpack = require('webpack');

module.exports = {
    // entry: 'src/js/app.js',     // incorrect! must be a nodejs path!
    entry: './src/js/app.js',       // canbe an alias path name
    // entry: path.resolve(__dirname, 'src/js/app.js'),
    // entry: path.join(cwd, 'src/js/app.js'),
    // entry: [ './src/js/app.js' ],
    // entry: {
    //     app: [ './src/js/app.js' ],
    // },
    output: {
        // path: path.resolve(__dirname, 'dist'),  // output folder path, must be an absolute path
        path: cwd,
        // filename: 'bundle.js',  // output filename of bundle, can be a relative path + filename, webpack dev server will find file by this conifg
        filename: 'dist/bundle.js',  // if set a relative path + filename, it can create folder(s) automatically by relative path
    },
    module: {
        rules: [
            {
                test: /\.css/,      // the pattern of regexp to match the module files
                // /loader: 'css-loader',   // only analyze and add css code to javascript, but not use it
                use: [
                    // 'css-loader',
                    // 'style-loader',      // wrong order, webpack will execute loader in reverse order

                    'style-loader',         // generate js code to add style tag (css code) to page when js bundle is loaded.
                    'css-loader',
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJSPlugin({
            //...
        }),
    ],
    devServer: {
        // publicPath: '/dist',
        // publicPath: '/',    // default value is already '/', can be ignored
    },
};