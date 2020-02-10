const path = require("path")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        import: ["~@/styles/index"]
      }
    }
  }
}
