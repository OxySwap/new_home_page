module.exports = {
  "publicPath": "/",
  pwa: {
    name: 'OxySwap Website',
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    },
    manifestOptions: {
      short_name: 'OxySwap',
      icons: [],
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