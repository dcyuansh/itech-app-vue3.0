const path = require("path");
// vite.config.js # or vite.config.ts
console.log(path.resolve(__dirname, "./src"));

module.exports = {
  alias: {
    // 键必须以斜线开始和结束
    "/@/": path.resolve(__dirname, "./src"),
  },

  //在生产中服务时的基本公共路径。 @default '/'
  base: "./",
  // 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。 @default 'dist'
  outDir: "dist",
  //端口号
  port: 3000,
  // 是否自动在浏览器打开
  open: false,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  // 引入第三方的配置
  optimizeDeps: {
    include: ["element-plus/lib/locale/lang/zh-cn"],
  },

  server: {
    proxy: {
      "/api": {
        target: 'http://localhost:8443',//代理地址，这里设置的地址会代替axios中设置的baseURL
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {
          '^/api': '/api'
          //pathRewrite: {'^/api': '/'} 重写之后url为 http://localhost:8443/xxxx
          //pathRewrite: {'^/api': '/api'} 重写之后url为 http://localhost:8443/api/xxxx
        }
      },
    },
  },


};
