module.exports = {
  build: {
    DisableF12: true,   //是否注册全局快捷键禁用F12
    env: require('./prod.env'),
    hotPublishUrl:"",
    hotPublishConfigName: ""
  },
  dev: {
    env: require('./dev.env'),
    removeElectronJunk: true, //是否关闭electron垃圾输出
    chineseLog: false,  //是否启用部分中文控制台输出
    port: 9080,
  },
  DllFolder: '',
  HotUpdateFolder: 'update',
  UseStartupChart: true,  //是否启用动画
  IsUseSysTitle: true,  //是否使用系统自带的标题栏
  BuiltInServerPort: 25565
}