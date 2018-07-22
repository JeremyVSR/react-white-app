const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
    entry: __dirname + "/src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
        publicPath: "/"
    },
    devtool: "source-map",
    devServer: {
        port: 8080
    },
    resolve: { extensions: [".ts", ".tsx", ".js", ".json"] },
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                enforce: "pre",
                use: [
                    { loader: 'tslint-loader', options: { emitErrors: true } },
                ]
            },
            {
                test: /\.(ts|tsx)$/,
                use: [{ loader: "ts-loader" }]
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: 'src/index.html',
            title: 'My Awesome application'
        })
    ],
};

export default config;