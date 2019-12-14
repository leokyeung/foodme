const path = require('path');
const SRC_DIR = path.resolve(__dirname, './client/src/components');

module.exports = {
  entry: './client/src/components/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './client/dist'),
  },
  module: {
    rules: [{
        test: /\.jsx$/,
        include: SRC_DIR,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        include: SRC_DIR,
        use: ['style-loader', 'css-loader']
      }

    ]
  }
};