import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'


export default defineConfig({
  plugins: [
    vue({
      script: {
        refSugar: true
      }
    }),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons()
      ],
    })
  ],
  resolve: {
    alias: {
      '@': resolve('./src')
    }
  },

  server: {
    open: true,
    port: 3000
  }
})
