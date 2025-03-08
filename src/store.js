import Vuex from 'vuex'
import counter from './module/counter'

const store = new Vuex.Store({
  modules: {
    counter,
  },
})

export default store
