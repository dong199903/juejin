const { defineConfig } = require('@vue/cli-service')
const path = require("path")
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack:{
    resolve: {
      //配置路径别名
      alias: {
       "@":path.resolve(__dirname,"src")
      }
    },
    devServer:{
      proxy:{
        "/api":{
          target:"http://127.0.0.1:9999"
        }
      }
    }
  }
})
