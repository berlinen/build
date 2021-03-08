module.exports = {
  entry: './src/index.js',
  mode: 'development',
  watch: true,
  // 我们就可以通过 Socket 通知到网页端，网页端在接到通知后会自动触发页面刷新
  devServer: {
    contentBase: './dist', //为./dist目录中的静态页面文件提供本地服务渲染
    open: true //启动服务后自动打开浏览器网页
  }
}