import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      counter: 0,
      output: "empty",
      testhtml: "<p>testabsatz</p>",
      steine: [],
      steine_innen: [],
      steine_aussen: [],
      steine_ak_tour: [],
      tour: "Innen",
      audio_version: 2,
      pointer: 0,
      baseAudio: "http://chorin-content.culture-to-go.de/files/"
    }),
    getters: {
      getTour (state) {
        return state.tour
      },
      getAudioVersion (state ) {
        return state.audio_version
      },
      getTitel (state) {
        return state.steine_ak_tour[state.pointer].attributes.title
      },
      getText (state) {
        return state.steine_ak_tour[state.pointer].attributes.body
      },
      getBildSteinUrl (state) {
        return state.steine_ak_tour[state.pointer].attributes.bildstein.url
      },
      getTranskription (state) {
        return state.steine_ak_tour[state.pointer].attributes.transkription
      },
      getInfo (state) {
        return state.steine_ak_tour[state.pointer].attributes.info
      },
      getCopyright (state) {
        return state.steine_ak_tour[state.pointer].attributes.copyright
      },
      getBibeltext (state) {
        return state.baseAudio + state.steine_ak_tour[state.pointer].attributes.bibeltext
      },
      getGesang (state) {
        return state.baseAudio + state.steine_ak_tour[state.pointer].attributes.gesang
      },
      getIntroBibeltext (state) {
        return state.steine_ak_tour[state.pointer].attributes.introbibeltext
      },
      getIntroGesang (state) {
        return state.steine_ak_tour[state.pointer].attributes.introgesang
      },
      // Check-Funktionen
      checkBibeltext (state) {
        if (state.steine_ak_tour[state.pointer].attributes.bibeltext != "" ) {
          return true
        } else {
          return false
        }
      },
      checkGesang (state) {
        if (state.steine_ak_tour[state.pointer].attributes.gesang != "" ) {
          return true
        } else {
          return false
        }
      }
    },
    mutations: {
      increment (state) {
        state.counter++
      },
      ladeSteine (state, payload) {
        let steine = payload
        state.steine = steine
      },
      splitSteine (state) {
        for (let i = 0; i < state.steine.length; i++) {
          if(state.steine[i].attributes.multiselect == "Innen") {
            state.steine_innen.push(state.steine[i])
          }
          if(state.steine[i].attributes.multiselect == "Außen") {
            state.steine_aussen.push(state.steine[i])
          }
        }
        state.steine_ak_tour = state.steine_innen
      },
      SET_IP (state, payload) {
        state.output = payload
      },
      pointerMove (state, payload) {
        let pointer = state.pointer
        pointer += payload
        // Endlos-Durchlauf
        pointer = pointer < 0 ? state.steine_ak_tour.length -1 : pointer
        pointer = pointer > state.steine_ak_tour.length -1 ? pointer = 0 : pointer
        state.pointer = pointer
        // Reload Audio-Element bei Stein-Wechsel
        state.audio_version = state.audio_version == 1 ? state.audio_version = 2 : state.audio_version = 1
        console.log(state.audio_version)
      },
      toggleTour (state) {
        console.log("Tour vor Toggle: ", state.tour)
          if(state.tour === "Innen") {
            state.tour = "Außen"
            state.pointer = 0
            state.steine_ak_tour = state.steine_aussen
          } else {
            state.tour = "Innen"
            state.pointer = 0
            state.steine_ak_tour = state.steine_innen
          }
      }
    },
    actions: {
      async nuxtServerInit ({ commit }, { $axios }) {
        //const res = await $axios.$get('http://icanhazip.com')
        const reset = []
        commit('ladeSteine', reset)
        const res = await $axios.$get('http://chorin-content.culture-to-go.de/json/steine/?sort=ordnungszahl&page[size]=500')
        //commit('SET_IP', res)
        commit('ladeSteine', res.data)
        commit('splitSteine')
      },
      pointerVor ({ commit }, r) {
        commit('pointerMove', r)
      }
    }
  })
}

export default createStore
