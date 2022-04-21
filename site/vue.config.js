const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    port: process.env.SERVER_PORT,
    proxy: `http://localhost:3001/`
    },
  transpileDependencies: true
})
