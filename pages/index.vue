<template>
  <div>
    <nav class="navbar fixed-top navbar-light bg-light">
      <button @click="$store.dispatch('pointerVor', -1), stopAllAuido()">&larr;</button>
      <div class="tour-controls d-flex justify-content-around mt-3">
        <p
          class="tour-button"
          @click="$store.commit('toggleTour')"><strong>{{ getTour }}</strong></p>
        <p class="anz-stein"><strong>{{ getTitel }}</strong></p>
      </div>
      <button @click="$store.dispatch('pointerVor', 1), stopAllAuido()">&rarr;</button>
    </nav>
    <section
      v-if="getMode == 'details'"
      class="container mt-5"
    >
      <div>
        <div id="map-icon">
          <img
            class="map-icon-img"
            src="~/assets/Map_Icon.png"
            @click="$store.dispatch('changeMode', 'map')"
          >
        </div>
        <div class="steinbild"><img
          :src="getBildSteinUrl"
          class="mx-auto d-block">
        </div>
        <div v-html = "getText" />
        <div
          v-if="getTranskription"
          id="transkription" >
          <h3>Inschrift</h3>
          <div
            v-html = "getTranskription" />
        </div>
        <div
          v-if="getInfo"
          id="Info" >
          <h3>Weiterführende Information</h3>
          <p
            v-html = "getInfo" />
        </div>
        <div
          v-if="checkBibeltext"
          id="bibeltext" >
          <h3>Bibeltext</h3>
          <p
            v-html = "getIntroBibeltext" />
          <audio
            v-if="getAudio"
            id="audio_01"
            controls>
            <source
              :src="getBibeltext"
              type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
        </div>
        <div
          v-if="checkGesang"
          id="gesang" >
          <h3>Gesang</h3>
          <div
            v-html = "getIntroGesang" />
          <audio
            v-if="getAudio"
            id="audio_g_01"
            controls>
            <source
              :src="getGesang"
              type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
        </div>
        <hr>
        <div
          class="copyright"
          v-html="getCopyright" />
      </div>
    </section>
    <section
      v-if="getMode == 'map'"
      class="container mt-5"
    >
      <div id="map-container">
        <figure id="imagemap">
          <svg viewBox="0 0 1000 1000" >
            <defs>
              <style>
                rect:hover {
                fill: green;
                opacity:0.5;
                }
              </style>
            </defs>

            <image
              width="1000"
              height="1000"
              xlink:href="~/assets/Plan_Master_01.png">
              <title>Mount Rushmore National Memorial</title>
            </image>

            <a
              v-for="(marker, index) in getMarkers"
              :key="index"
              xlink:href=""
              @click.prevent="$store.dispatch('pointerTo', marker.index)"
            >
              <rect
                :x="marker.marker_pos_left"
                :y="marker.marker_pos_top"
                :width="getMarker.width"
                :height="getMarker.height"
                opacity=".1" />
            </a>
          </svg>
        </figure>
      </div>
    </section>
  </div>
</template>

<script>
//import Logo from '~/components/Logo.vue'
//import Map from '~/components/Map.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    // Logo
    // Map
  },
  data(){
    return {
      test: "data",
      out: "leer",
      mapIcon: "~/assets/Plan_Master_01.png"
    }
  },
  computed: {
    ...mapGetters([
      'getMode',
      'getTour',
      'getTitel',
      'getBildSteinUrl',
      'getText',
      'getTranskription',
      'getInfo',
      'getCopyright',
      'getBibeltext',
      'getGesang',
      'getIntroBibeltext',
      'getIntroGesang',
      'checkBibeltext',
      'checkGesang',
      'getAudioVersion',
      'getAudio',
      'getMarker',
      'getMarkers'
    ])
  },
  methods: {
    async stopAllAuido() {
     console.log("Stop All Audio!")
     console.log();
    }
  }
}
</script>

<style scoped>

.container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
}

section {

  max-width: 24rem;
}
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
}
.tour-button {
  display: block;
}
#map-icon {
  margin-top: 2rem;
}
#map-icon .map-icon-img {
  cursor: pointer;
}
.steinbild {
  margin-top: 1rem;
  background: #333;
}
.steinbild img {
  max-height: 16rem;
  height: auto;
}

#map-container {
  position: relative;
  width: 100%;
  background: #eee;
}
#map-container .map {
  width: 100%;
}
#map-container .marker {
  position: absolute;
  width: 20px;
  top: 50%;
  left: 33.3%;
}
.tour-controls {
  min-width: 14rem;
}
.tour-button {
  cursor: pointer;
}

</style>
