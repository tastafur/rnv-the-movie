const Configs = require('../_shared/configs.js');
const Extend = require('./webpack.extend.js');

const config = {
    currentDir: __dirname,
    metaTags: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
    environment: 'development',
    customScripts: [],
    devServerHost: '0.0.0.0',
    baseUrl: '',
    ...Extend
};

const C = Configs.generateConfig(config);
const plugins = [C.Plugins.webpack, C.Plugins.html, C.Plugins.harddisk, C.Plugins.css];
if (config.analyzer) plugins.push(C.Plugins.analyzer);

module.exports = {
    entry: C.entry,
    devServer: C.devServer,
    output: C.output,
    module: {
        rules: [C.Rules.babel, C.Rules.css, C.Rules.image, C.Rules.fonts, C.Rules.video, C.Rules.sourcemap],
    },
    plugins,
    resolve: {
        symlinks: false,
        extensions: C.extensions,
        alias: C.aliases,
    },
};
