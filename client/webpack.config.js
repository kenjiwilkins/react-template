const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    mode: 'development',
    entry: "./src/components/index.js",
    output: {
        path: path.join(__dirname, "/build"),
        filename: "index_bundle.js"
    },
    module: {
        rules: [{
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpg|gif)$/,
            use: [
                {
                    loader: 'file-loader'
                }
            ]
        }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            hash: true,
            filename: "index.html",  //target html
            template: "./src/components/index.html" //source html
        }),
    ]
}