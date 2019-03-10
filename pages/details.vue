<template>
  <b-container
    class="main-content"
  >
    <b-row
      class="mmok-content"
    >
      <div
        class="steinbild"
      >
        <img
          :src="getBildSteinUrl"
        >
      </div>
    </b-row>
    <b-row
      class="sub-navi"
    >
      <div
        class="stein-titel"
      >
        {{ getTitel }}
      </div>
      <div>
        <b-button
          variant="outline-dark"
          @click="toggleModalStone"
        >
          Lage des Steins
        </b-button>
        <b-button
          variant="outline-dark"
          @click="backToMap"
        >
          Zum Plan
        </b-button>
      </div>
    </b-row>
    <b-row
      class="mmok-content text"
    >
      <div
        v-html = "getText"
      />
    </b-row>
    <b-row
      v-if="getTranskription"
      class="mmok-content transkription"
    >
      <div
        id="transkription" >
        <h3>Inschrift</h3>
        <div
          v-html = "getTranskription" />
      </div>
    </b-row>
    <b-row
      v-if="getInfo"
      class="mmok-content info"
    >
      <div
        id="Info" >
        <h3>Weiterführende Information</h3>
        <p
          v-html = "getInfo" />
      </div>
    </b-row>
    <b-row
      v-if="checkBibeltext"
      class="mmok-content bibeltext"
    >
      <div
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
    </b-row>
    <b-row
      v-if="checkGesang"
      class="mmok-content gesang"
    >
      <div
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
    </b-row>
    <b-row
      class="mmok-content copyright"
    >
      <div
        v-html="getCopyright" />
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
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
      'getAudio',
      'getMarker'
    ])
  },
  methods: {
    toggleModalStone() {
      // ruft Modal von der Detailseite zu einem Stein auf
      this.$root.$emit('bv::show::modal', 'details-modal')
    },
    backToMap () {
      this.$store.dispatch('changeMode', 'map')
    }
  }
}
</script>
