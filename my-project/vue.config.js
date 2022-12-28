// const { defineConfig } = require('./babel.config.js')
// 
// module.exports = defineConfig({
//   presets: [
//     [
//       '@vue/cli-plugin-babel/preset',
//       {
//         useBuiltIns: 'entry'
//       }
//     ]
//   ]
// })

// Path: MiniPlayer/my-project/vue.config.js
// Compare this snippet from MiniPlayer/scripts/script.js:
// import { createApp } from 'vue'
// import { I18n } from "i18n-js";
// import translations from "./translations.json";
//

const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  devServer: {
    port: 8080,
  },
});

