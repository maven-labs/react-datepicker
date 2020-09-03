const path = require('path');

module.exports = {
  entry: './src/index.ts',
  /*
  entry: {
    index: './src/index.ts',
    'hooks/index': './src/hooks/index.ts',
    'styled/index': './src/styled/index.ts',
  },
  */

  output: {
    //library: 'reactDatepicker',
    //libraryTarget: 'umd',
    //libraryTarget: 'commonjs',
    libraryTarget: 'commonjs2',
    path: path.resolve(__dirname, 'dist/cjs'),
    //filename: '[name].js',
    //filename: 'react-datepicker.js',
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
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["ts-loader"]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
    ]
  },

  devtool: 'source-map',

  /*
  optimization: {
    runtimeChunk: true
  },
  */

  externals: {
    'react': {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
  /*
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components',
      root: 'StyledComponents', // ??
    },
  */
  },
};
