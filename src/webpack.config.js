module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  },
  postcss: () => {
    return [
       require('autoprefixer')({ browsers: 'last 2 versions, not ie <= 11, not ie_mob <= 11', grid : false })
    ]
  }
}