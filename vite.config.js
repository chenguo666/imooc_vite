import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      mockPath: './src/mock',
      supportTs: false
    })
  ],
  resolve: {
    alias: {
      '@': join(__dirname, '/src')
    }
  }
  // 代理
  // server: {
  //   proxy: {
  //     // 代理所有 /api 的请求，该求情将被代理到 target 中
  //     '/api': {
  //       // 代理请求之后的请求地址
  //       target: 'https://api.imooc-front.lgdsunday.club/',
  //       // 跨域
  //       changeOrigin: true
  //     }
  //   }
  // }
})
