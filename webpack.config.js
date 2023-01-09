const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  devtools: "source-map",
  module: {
    rules: [{ test: /\.js$/, 
    exclude: /node_modules/,
    use: 'babel-loader' },

    { test: /\.html$/, 
    exclude: /node_modules/,
    use: 'html-loader' },

    { test: /\.css$/, 
    exclude: /node_modules/,
    use: ['style-loader', 'css-loader'] },

    { test: /\.(png|jpe?g|gif)$/i, 
    exclude: /node_modules/,
    use: ['file-loader'] },

    { resolve: /\.html$/, 
    extensions: [".js", ".jsx"]
    
    }


],
    

   
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};