import webpack from 'webpack';
import path from 'path';

export default {
    debug: true,
    // devtool: 'cheap-module-eval-source-map',
    devtool: 'eval-source-map',
    noInfo: false,
    entry: [
        'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
        './src/index.jsx'
    ],
    target: 'web',
    output: {
        path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './src'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            { test: /(\.js$|\.jsx$)/, include: include('src'), loaders: ['babel'] },
            { test: /\.tsx$/, include: include('src'), loaders: ['babel'] }, //ts-loader
            { test: /(\.css)$/, xinclude: include('src'), loaders: ['style', 'css'] },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, xinclude: include('src'), loader: 'file' },
            { test: /\.(woff|woff2)$/, xinclude: include('src'), loader: 'url?prefix=font/&limit=5000' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, xinclude: include('src'), loader: 'url?limit=10000&m)imetype=application/octet-stream' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, xinclude: include('src'), loader: 'url?limit=10000&mimetype=image/svg+xml' }
        ]
    },
    resolve: {
        extensions: ['', '.es6', '.js', '.jsx', '.tsx']
    },
    externals: {
        // "react": "React", // exclude from bundle.js
        // "react-dom": "ReactDOM"
    }
};

function include(filepath) {
    return path.join(__dirname, filepath);
}