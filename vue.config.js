module.exports = {
  "publicPath": "/",
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  },
  "configureWebpack": {
    "devServer": {
      "headers": {
        "Access-Control-Allow-Origin": "*"
      },
      "sockHost": "http://127.0.0.1:8080",
      "disableHostCheck": true,
      "host": "127.0.0.1",
      "port": 8080
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}