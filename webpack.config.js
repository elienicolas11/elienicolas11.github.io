const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname), // Output dans la racine
    filename: 'bundle.js',
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.pdf$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    alias: {
      '@images': path.resolve(__dirname, 'src/assets/images'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@public': path.resolve(__dirname, 'public'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      favicon: './src/assets/images/favicon.png',
    }),
    new HtmlWebpackPlugin({
      template: './public/404.html',
      filename: '404.html',
    }),
  ],
  devServer: {
    static: path.resolve(__dirname),
    port: 3000,
    historyApiFallback: true, // Fallback pour le serveur de développement
  },
};
