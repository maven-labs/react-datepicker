module.exports = {
  presets: [
    '@babel/preset-react',
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        modules: 'commonjs',
      },
    ],
  ],
  "env": {
    "test": {
      "plugins": ["require-context-hook"]
    }
  },
  /*
  plugins: [
    ["@babel/plugin-proposal-pipeline-operator", { "proposal": "minimal" }]
  ],
  */
};
