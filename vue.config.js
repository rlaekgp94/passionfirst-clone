// 경로: 루트 디렉토리/vue.config.js
const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "src/")
      }
    }
  }
};
