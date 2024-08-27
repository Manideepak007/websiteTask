// const path = require("path");

// module.exports = {
//     entry : path.resolve(__dirname, "src/index.js"),
//     output : {
//         path : path.join(__dirname, "/dist"),
//         fileName : "bundle.js"
//     },
//     devServer : {
//         port : 4000,
//         watchContentBase : true
//     },
//     module : {
//         rules : [
//         {
//             test : /\.(js|jsx)$/,
//             exclude : /node_modules/,
//             use : {
//                 loader : 'babel-loader'
//             }
//         },
//         {
//             test : /\.scss/,
//             use : ['style-loader', 'css-loader', 'sass-loader']
//         }
//     ]
//     }
// }

const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry : "./src/index.js",
    devServer : {
        port : 3000,
        watchContentBase : true,
        historyApiFallback : true
    },
    module : {
        rules : [
            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(js|jsx)$/,
                use : "babel-loader",
            }
        ]
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'index_bundle.js'
      },
    resolve : {
       alias : {
        "@component" : path.resolve(__dirname, "../src/Components")
       },
       extensions : ["*", ".js", ".jsx"]
    },
      plugins: [
        // new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template : './public/index.html',
            filename : 'index.html'
        })
      ],
      mode: "production",

}