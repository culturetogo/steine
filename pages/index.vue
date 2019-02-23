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
    <section class="container mt-5">
      <div>
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
    <Map />
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
    }
  },
  computed: {
    ...mapGetters([
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
      'getAudio'
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
  min-height: 100vh;
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
.steinbild {
  margin-top: 2rem;
  background: #333;
}
.steinbild img {
  max-height: 16rem;
  height: auto;
}
.tour-controls {
  min-width: 14rem;
}
.tour-button {
  cursor: pointer;
}

</style>
