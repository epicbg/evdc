import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import projects from './projects'
import database from './database'

export default new Vuex.Store({
  modules: {
      projects, database
  }
})
