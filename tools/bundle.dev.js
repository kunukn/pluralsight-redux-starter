import webpack from 'webpack';
import webpackConfig from '../webpack.config.babel';

const bundler = webpack(webpackConfig);

bundler.run();