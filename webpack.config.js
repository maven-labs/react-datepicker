const path = require('path');

module.exports = {
  entry: './src/index.ts',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },

  module: {
    rules: [
      {
        test: /\.mdx?$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          "@mdx-js/loader"
        ]
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      /*
      {
        test: /\.(eot|otf|ttf|woff|woff2|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [ 'url-loader' ],
      },
      {
        test: /\.(gif|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [ 'file-loader' ],
      }
      */
    ]
  },

  //plugins: []
};
