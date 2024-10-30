const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'assets/[hash][ext][query]', // Custom output path for assets
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'], // Loaders for CSS
      },
      {
        // For image files (PNG, JPG, GIF, SVG)
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource', // Webpack 5 built-in asset type
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    })
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000
  }
};
