module.exports = {
  mode: 'development',
  output: {
    filename: 'index.pack.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  entry: {
    index: './index.js',
  },
};