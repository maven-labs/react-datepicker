module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: 'commonjs',
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  "env": {
    "test": {
      "plugins": ["require-context-hook"]
    }
  },
};
