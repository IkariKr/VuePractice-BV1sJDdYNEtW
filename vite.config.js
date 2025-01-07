import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  //配置根路径@
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src')
    }
  },
  server:{
    proxy:{
      '/api':{
        target:'http://localhost:3000',
        changeOrigin:true,//是否改变请求头的origin
        rewrite:path=>path.replace(/^\/api/,'/api') //重写路径
      }
    }
  }
})
