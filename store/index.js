import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      counter: 0,
      output: "empty",
      testhtml: "<p>testabsatz</p>",
      mode: 'map',
      steine: [],
      steine_innen: [],
      steine_aussen: [],
      steine_ak_tour: [],
      tour: "Innen",
      audio_version: 2,
      pointer: 0,
      baseAudio: "http://chorin-content.culture-to-go.de/files/",
      audio: 1,
      marker: {
        width: 131,
        height: 128,
      },
      markersInnen: [
        {
          index: 1,
          stein: "innen_1",
          marker_pos_left: "1091",
          marker_pos_top: "1126",
        },
        {
          index: 2,
          stein: "innen_2",
          marker_pos_left: "1183",
          marker_pos_top: "405",
        },
        {
          index: 3,
          stein: "innen_3",
          marker_pos_left: "625",
          marker_pos_top: "431",
        },
        {
          index: 4,
          stein: "innen_4",
          marker_pos_left: "444",
          marker_pos_top: "634",
        },
        {
          index: 5,
          stein: "innen_5",
          marker_pos_left: "875",
          marker_pos_top: "124",
        },
        {
          index: 6,
          stein: "innen_6",
          marker_pos_left: "1581",
          marker_pos_top: "226",
        },
        {
          index: 7,
          stein: "innen_7",
          marker_pos_left: "1451",
          marker_pos_top: "429",
        },
        {
          index: 8,
          stein: "innen_8",
          marker_pos_left: "1417",
          marker_pos_top: "46",
        },
        {
          index: 9,
          stein: "innen_9",
          marker_pos_left: "1832",
          marker_pos_top: "351",
        },
        {
          index: 10,
          stein: "innen_10",
          marker_pos_left: "1583",
          marker_pos_top: "607",
        },
        {
          index: 11,
          stein: "innen_11",
          marker_pos_left: "1408",
          marker_pos_top: "755",
        },
        {
          index: 12,
          stein: "innen_12",
          marker_pos_left: "1215",
          marker_pos_top: "685",
        }
      ],
      markersAussen: [
        {
          index: 1,
          stein: "außen_1",
          marker_pos_left: "236",
          marker_pos_top: "1220",
        },
        {
          index: 2,
          stein: "außen_2",
          marker_pos_left: "237",
          marker_pos_top: "1061",
        },
        {
          index: 3,
          stein: "außen_3",
          marker_pos_left: "467",
          marker_pos_top: "996",
        },
        {
          index: 4,
          stein: "außen_4",
          marker_pos_left: "237",
          marker_pos_top: "916",
        },
        {
          index: 5,
          stein: "außen_5",
          marker_pos_left: "465",
          marker_pos_top: "852",
        },
        {
          index: 6,
          stein: "außen_6",
          marker_pos_left: "1191",
          marker_pos_top: "91",
        },
        {
          index: 7,
          stein: "außen_7",
          marker_pos_left: "1417",
          marker_pos_top: "4",
        },
        {
          index: 8,
          stein: "außen_8",
          marker_pos_left: "1572",
          marker_pos_top: "202",
        },
        {
          index: 9,
          stein: "außen_9",
          marker_pos_left: "1766",
          marker_pos_top: "203",
        },
        {
          index: 10,
          stein: "außen_10",
          marker_pos_left: "1862",
          marker_pos_top: "453",
        },
        {
          index: 11,
          stein: "außen_11",
          marker_pos_left: "1823",
          marker_pos_top: "603",
        },
        {
          index: 12,
          stein: "außen_12",
          marker_pos_left: "1592",
          marker_pos_top: "642",
        }
      ]
    }),
    getters: {
      getMode (state) {
        return state.mode
      },
      getTour (state) {
        let str = "Rundgang " + state.tour
        return str
      },
      getAkTour (state) {
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
      getBildSteinLageUrl (state) {
        return state.steine_ak_tour[state.pointer].attributes.bildsteinlage.url
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
      },
      getAudio (state) {
        return state.audio
      },
      getMapImage (state) {
        if( state.tour == "Innen" ) {
          return "~/assets/Plan_Master_02.png"
        } else {
          return "~/assets/Plan_Master_01.png"
        }
      },
      getMarker (state) {
        return state.marker
      },
      getMarkers (state) {
        if ( state.tour == "Innen" ) {
          return state.markersInnen
        } else {
          return state.markersAussen
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
        console.log("steine_ak_tour: ", state.steine_ak_tour)
      },
      pointerTo (state, payload) {
        console.log("pointerTo payload: ", payload)
        state.pointer = payload
        //state.mode = "details"
        //console.log("nach PointerTo", state.pointer)
      },
      changeMode (state, payload) {
        state.mode = payload
        console.log("ChangeMode: ", payload)
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
      },
      pointerTo ({ commit }, n){
        commit( 'pointerTo', n)
      }
      ,
      changeMode ({ commit }, m) {
        commit( 'changeMode', m)
      },
      toggleTour ( { commit } ) {
        commit( 'toggleTour' )
      }
    }
  })
}

export default createStore
