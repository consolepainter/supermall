module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],//配置后缀比如js,vue,配置后可省略
      alias:{ //取别名，@是src的别名，引用文件更加方便，cli4不能使用了
        'assets': '@assets',
        'network': '@network',
        'components': '@components',
        'commom': '@commom',
        'views': '@views',
      }
    }
  }
}