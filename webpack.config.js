const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname), 
    filename: 'bundle.js',
    assetModuleFilename: 'assets/[hash][ext][query]', 
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
      {
        // For PDF files
        test: /\.pdf$/,
        type: 'asset/resource', // Webpack 5 handles PDF files as assets
        generator: {
          filename: 'assets/[hash][ext]', // Output path for PDF files
        },
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    alias: {
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@public': path.resolve(__dirname, 'public'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      favicon: './src/assets/images/favicon.png', 
    })
  ],
  devServer: {
    static: path.resolve(__dirname),
    port: 3000,
    historyApiFallback: true,
  }
};