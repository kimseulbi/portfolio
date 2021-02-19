
module.exports = {
  parser: "postcss-scss",
  plugins: [
    require("postcss-flexbugs-fixes"),
    require('autoprefixer')({ browsers: 'last 2 versions, not ie <= 11, not ie_mob <= 11', grid : false }),
    require("postcss-fail-on-warn"),
  ],
};