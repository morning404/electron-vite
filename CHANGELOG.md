# 2021年7月20日

- 更新依赖
- `__static`静态目录现在将不会补全`/`，例如开发环境时是：`http://localhost:9080`，生产环境则是`软件所在目录/resources/app/dist/electron/renderer`，需要注意的是，在生产环境中，不一定是`/`，路径分隔符是由当前操作系统决定，请自行拼接。
- 调整依赖结构，降低node_module包内包含的内容。
- 开启主进程代码混淆。
# 2021年7月15日

- 修正在渲染进程中无法使用`__static`静态目录的问题，同时，在生产环境时，若要访问`__lib`文件夹，请使用`process.env.__lib`，可以通过`process.env`对象得到的静态目录还有`__static`，`__updateFolder`。
- 修正部分单词拼写错误。
- 更新依赖
- 主进程添加代码混淆但暂不启用
# 2021年6月10日

- 更新依赖
# 2021年06月08日

- 渲染进程组件实现全 `setup` 化

## 如何使用 `setup`？

#### vscode 环境

- 禁用 `vetor` 或 `voter` 扩展
- 安装并启用扩展 `volor`

> 更多 `setup` 语法糖问题请访问 [New script setup](https://github.com/vuejs/rfcs/pull/227)

# 2021年02月26日

- 项目创建。