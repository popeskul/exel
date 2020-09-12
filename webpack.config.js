const path = require("path");

// path.join('/a', '/b') // Outputs '/a/b'
// path.resolve('/a', '/b') // Outputs '/b'

module.exports = {
  context: path.resolve(__dirname, "src"), // return string with absolute path
  mode: "development",
  entry: "./index",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
