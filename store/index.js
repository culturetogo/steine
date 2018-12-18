import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      counter: 0,
      output: "empty",
      testhtml: "<p>testabsatz</p>",
      steine: [],
      pointer: 0,
      baseAudio: "http://chorin-content.culture-to-go.de/files/"
    }),
    getters: {

    },
    mutations: {
      increment (state) {
        state.counter++
      },
      ladeSteine (state, payload){
        let steine = payload
        state.steine = steine
      },
      SET_IP (state, payload) {
        state.output = payload
      },
      pointerVor (state) {
        if(state.pointer < state.steine.length -1){
          state.pointer += 1
        } else {
          state.pointer = 0
        }
      },
      pointerRueck (state) {
        if(state.pointer > 0){
          state.pointer -= 1
        } else {
          state.pointer = state.steine.length -1
        }
      }
    },
    actions: {
      async nuxtServerInit ({ commit }, { $axios }) {
        //const res = await $axios.$get('http://icanhazip.com')
        const res = await $axios.$get('http://chorin-content.culture-to-go.de/json/steine/?sort=ordnungszahl')
        //commit('SET_IP', res)
        commit('ladeSteine', res.data)
      },
    }
  })
}

export default createStore
