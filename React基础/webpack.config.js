const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "baber-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.(css|scss|less)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader",
          { loader: "sass-resources-loader",
            options: {
              // resolve方法第二个参数为scss配置文件地址，如果有多个，就进行依次添加即可
              resources: [
                path.resolve(__dirname, './src/assets/css/variable.scss'),
                path.resolve(__dirname, './src/assets/css/minxin.scss')
              ]
            }
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: ["*", "js", ".jsx", '.json', '.ts'],
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      'pages': path.resolve(__dirname, './src/pages'),
      'assets': path.resolve(__dirname, './src/assets'),
      'config': path.resolve(__dirname, './src/config'),
      'router': path.resolve(__dirname, './src/router'),
      'utils': path.resolve(__dirname, './src/utils'),
      'store': path.resolve(__dirname, './src/store')
    }
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3001,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}