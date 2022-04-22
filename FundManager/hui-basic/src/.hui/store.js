import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let options = {}

;['index.js', 'todos.js'].forEach(module => {
  resolveModule(module)
})

function resolveModule(file) {
  const module = require('@/store/' + file)
  if (file === 'index.js') {
    options = { ...options, ...module }
  } else {
    const moduleName = file.replace(/.js$/, '')
    if (options.modules) {
      options.modules[moduleName] = { namespaced: true, ...module }
    } else {
      options.modules = {}
      options.modules[moduleName] = { namespaced: true, ...module }
    }
  }
}

export default new Vuex.Store(options)
