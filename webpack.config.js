const path = require('path');

module.exports = {
  entry: './src/index.ts',

  output: {
    library: '@maven-labs/react-datepicker',
    libraryTarget: 'umd',
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
    ]
  },

  externals: {
    'react': 'commonjs react',
  },
};
