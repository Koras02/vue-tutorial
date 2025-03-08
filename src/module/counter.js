const state = {
  count: 0,
}

const mutations = {
  increment(state) {
    state.count++
  },
  decrement(state) {
    if (state.count > 0) {
      state.count--
    }
  },
}

const actions = {
  increment({ commit }) {
    commit('increment')
  },
  decrement({ commit }) {
    commit('decrement')
  },
}

const getters = {
  currentCount: (state) => state.count,
}

export default {
  state,
  mutations,
  actions,
  getters,
}
