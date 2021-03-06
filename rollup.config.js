import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
// import analyze from 'rollup-plugin-analyzer'
// import visualizer from 'rollup-plugin-visualizer'
import replace from 'rollup-plugin-replace'
import {terser} from 'rollup-plugin-terser'

module.exports = {
  input: 'src/index.ts',
  external: ['react', 'react-dom', 'styled-components'],
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    commonjs(),
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    // analyze(),
    babel({
      exclude: 'node_modules/**',
    }),
    typescript({
      typescript: require('typescript'),
      rollupCommonJSResolveHack: true,
      clean: true,
    }),
    terser(),
    // visualizer(),
  ],
};
