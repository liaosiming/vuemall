//路徑別名
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'assets': "@/assets",
        'views': '@/views',
        'network': '@/network'
      }
    }
  }
}