const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const autoprefixer = require('autoprefixer')
const webpack = require('webpack');

const mode = process.env.NODE_ENV || "development";

const entry = {
    app: [
        './source/javascripts/index.ts', 
        './source/stylesheets/style.sass'
    ]
}

const output = {
    path: path.resolve(__dirname, '../.tmp/dist'),
    filename: "assets/[name].js"
}

const resolve = {
    extensions: ['.ts', '.tsx', '.js', '.json']
}

const _module = {
    rules: [
        {
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            use: [
                'babel-loader',
            ]
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path: '/app/config/'
                        }
                    }
                },
                'sass-loader'
            ]
        }
    ]
}

const plugins = [
    new CleanWebpackPlugin(),

    new MiniCssExtractPlugin({
        filename: 'assets/style.css'
    }),

    new webpack.LoaderOptionsPlugin({
        options: {
            postcss: [
                autoprefixer()
            ]
        }
    }),

    new ForkTsCheckerWebpackPlugin()
]

module.exports = {
    mode,
    entry,
    resolve,
    module: _module,
    plugins,
    output
};