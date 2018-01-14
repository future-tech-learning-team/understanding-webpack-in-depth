/**
 * @since 2017-12-31 22:33
 * @author chenyiqin
 */

const path = require('path');
const cwd = process.cwd();
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isDev = process.env.NODE_ENV === "development";

const extrackPlugin = new ExtractTextPlugin({
    filename: 'dist/main.css',       // the name of extracting css code to a file,
    disable: isDev,
});

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
                test: /\.less/,      // the pattern of regexp to match the module files
                // use: [
                //     'style-loader',         // generate js code to add style tag (css code) to page when js bundle is loaded.
                //     'css-loader',           // only analyze and add css code to javascript, but not use it
                //     'less-loader',          // analyze less code to css code
                // ]
                use: extrackPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: isDev,
                            }
                        },
                        'less-loader',
                    ],
                    // use style-loader in development
                    fallback: "style-loader"
                }),
            },
        ],
    },
    plugins: [
        extrackPlugin,
    ],
};