const path = require('path')
const {
  SRC,
  DIST
} = require('../utils/paths')

module.exports = {
  context: SRC,
  entry: {
    'easy-react-toast': path.join(SRC, 'index')
  },
  output: {
    path: DIST
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      // babel
      {
        test: /\.(js|jsx|mjs)$/,
        loader: require.resolve('babel-loader'),
        options: {
          babelrc: false,
          cacheDirectory: true,
          presets: [
            require.resolve('babel-preset-env'),
            require.resolve('babel-preset-react')
          ],
          plugins: [
            require.resolve('babel-plugin-transform-object-rest-spread')
          ]
        }
      },
      // less/css/style
      {
        test: /\.less$/,
        use: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          require.resolve('less-loader'),
        ]
      },
      // css/style
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          require.resolve('css-loader')
        ]
      }
    ]
  }
}