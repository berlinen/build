module.exports = {
  entry: './src/index1.js',
  mode: 'development',
  watch: true,
  // 我们就可以通过 Socket 通知到网页端，网页端在接到通知后会自动触发页面刷新
  devServer: {
    contentBase: './dist', //为./dist目录中的静态页面文件提供本地服务渲染
    open: true, //启动服务后自动打开浏览器网页
    // 简单改动 JS 中的显示文本并不能达到热替换的效果。尽管网络端同样新增了 hot-update.json 和 hot-update.js，但刷新了整个页面。
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css/,
        // 其中 css-loader 处理的是将导入的 CSS 文件转化为模块供后续 Loader 处理；而 style-loader 则是负责将 CSS 模块的内容在运行时添加到页面的 style 标签中。
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}