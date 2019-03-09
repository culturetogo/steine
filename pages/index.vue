<template>
  <div id="mmok">
    <b-navbar
      v-if = "getMode != 'intro'"
      fixed = "top"
      type="light"
      variant="light">
      <b-navbar-toggle target="nav_text_collapse" />
      <b-navbar-brand
        v-if = "getMode == 'details'"
      >
        <div
          class="stein-anzeige-wrapper"
        >
          <b-button
            variant="outline-dark"
            @click="$store.dispatch('pointerVor', -1), stopAllAudio()"
          >&lsaquo;
          </b-button>
          <div
            class="anzeige-stein"
          >
            {{ getTour }}<br>
            <span
              class="stein-nr"
            >
              {{ getTitel }}
            </span>
          </div>
          <b-button
            variant="outline-dark"
            @click="$store.dispatch('pointerVor', 1), stopAllAudio()"
          >&rsaquo;
          </b-button>
        </div>
      </b-navbar-brand>
      <b-navbar-brand
        v-if = "getMode == 'map'"
      >
        <div
          class="tour-anzeige-wrapper"
        >
          <b-button
            variant="outline-dark"
            @click="$store.dispatch('toggleTour')"
          >
            Tour wechseln
          </b-button>
        </div>
      </b-navbar-brand>
      <b-collapse
        id="nav_text_collapse"
        is-nav >
        <b-navbar-nav>
          <b-nav-text
            @click="backToMap"
          >
            Zum Plan
          </b-nav-text>
          <b-nav-text
            @click="backToIntro"
          >
            Zur Startseite
          </b-nav-text>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container
      v-if="getMode == 'details'"
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
    <b-container
      v-if="getMode == 'map'"
      class="main-content"
    >
      <b-row
        class="sub-navi"
      >
        <div
          class="tour-titel"
        >
          {{ getTour }}
        </div>
      </b-row>
      <b-row>
        <div
          v-if="getAkTour == 'Innen'"
          id="map-container"
        >
          <figure id="imagemap">
            <svg viewBox="0 0 2000 2000" >
              <defs>
                <style>
                  rect:hover {
                  fill: green;
                  opacity:0;
                  }
                </style>
              </defs>

              <image
                xlink:href="~/assets/Plan_Master_02.png"
                width="2000"
                height="2000"
              >
                <title>Plan</title>
              </image>

              <a
                v-for="(marker, index) in getMarkers"
                :key="index"
                class="a-marker"
                xlink:href=""
                @click.prevent="toggleModalMap(marker.index)"
              >
                <rect
                  :x="marker.marker_pos_left"
                  :y="marker.marker_pos_top"
                  :width="getMarker.width"
                  :height="getMarker.height"
                  opacity="0" />
              </a>
            </svg>
          </figure>
        </div>
        <div
          v-if="getAkTour == 'Außen'"
          id="map-container"
        >
          <figure id="imagemap">
            <svg viewBox="0 0 2000 2000" >
              <defs>
                <style>
                  rect:hover {
                  fill: green;
                  opacity:0;
                  }
                </style>
              </defs>

              <image
                xlink:href="~/assets/Plan_Master_01.png"
                width="2000"
                height="2000"
              >
                <title>Plan</title>
              </image>

              <a
                v-for="(marker, index) in getMarkers"
                :key="index"
                class="a-marker"
                xlink:href=""
                @click.prevent="toggleModalMap(marker.index)"
              >
                <rect
                  :x="marker.marker_pos_left"
                  :y="marker.marker_pos_top"
                  :width="getMarker.width"
                  :height="getMarker.height"
                  opacity="0" />
              </a>
            </svg>
          </figure>
        </div>
      </b-row>
    </b-container>
    <Intro
      v-if="getMode == 'intro'"
    />
    <!-- Modal Component Map -->
    <map-modal @input="aufrufStein"/>
    <!-- Modal Component Details -->
    <details-modal/>

  </div>
</template>

<script>
//import Logo from '~/components/Logo.vue'
import Intro from '~/components/Intro.vue'
import MapModal from '~/components/modals/map-modal.vue'
import DetailsModal from '~/components/modals/details-modal.vue'
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    // Logo
    Intro,
    'map-modal': MapModal,
    'details-modal': DetailsModal
  },
  data(){
    return {
      test: "data",
      out: "leer"

    }
  },
  computed: {
    ...mapGetters([
      'getMode',
      'getTour',
      'getAkTour',
      'getTitel',
      'getBildSteinUrl',
      'getBildSteinLageUrl',
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
      'getMapImage',
      'getMarker',
      'getMarkers'
    ])
  },
  methods: {
    stopAllAudio() {
     //console.log("Stop All Audio!")
     Vue.nextTick(() => {
       Array.from(document.getElementsByTagName('audio'))
        .forEach(audio => audio.load());
     });
    },
    toggleModalMap(mi) {
      // ruft Modal mit dem ausgewählten Stein auf
      let index = mi -1
      console.log("toggleMapIndex: ", index)
      this.$store.dispatch('pointerTo', index)
      this.$root.$emit('bv::show::modal', 'map-modal')
    },
    toggleModalStone() {
      // ruft Modal von der Detailseite zu einem Stein auf
      this.$root.$emit('bv::show::modal', 'details-modal')
    },
    aufrufStein () {
      this.$root.$emit('bv::hide::modal', 'map-modal')
      this.$store.dispatch('changeMode', 'details')
    },
    backToMap () {
      this.$store.dispatch('changeMode', 'map')
    },
    backToIntro () {
      this.$store.dispatch('changeMode', 'intro')
    }
  }
}
</script>

<style>
body {

}
.container,
.navbar {
  max-width: 36rem;
}
.navbar {
  margin: 0 auto;
}
.mmok-content,
.sub-navi {
  padding: .4rem .6rem;
}
.sub-navi {
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: 600;
  padding-bottom: .6rem;
  margin-bottom: .6rem;
  border-bottom: 2px solid #eee;
}
.sub-navi .stein-titel {
  align-self: flex-end;
}
.sub-navi .btn {
  font-size: .68rem;
}
.main-content {
  padding-top: 4.8rem;
}
.intro-content {
  background: #A2232C;
  min-height: 100vh;
}
#mmok h2 {
  font-size: 1.1rem;
}
#mmok h3 {
  font-size: 1.0rem;
}
.stein-anzeige-wrapper {
  display: flex;
  justify-content: space-between;
  min-width: 12rem;
}
.anzeige-stein {
  display: inline-block;
  font-size: .75rem;
  line-height: 1.1rem;
  font-weight: 600;
  text-align: center;
}
.anzeige-stein .stein-nr {
  font-size: 1.1rem;
  align-self: center;
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
  width: 100%;
}
.steinbild img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  max-height: 16rem;
  height: auto;
}
.steinbildlage img {
  max-height: 65vh;
  max-width: 85%;
}
.transkription,
.bibeltext,
.gesang {
  line-height: 1.2rem;
  font-size: .9rem;
}
.transkription p{
  margin-bottom: .6rem;
}
.copyright {
  font-size: .75rem;
  padding-top: 1.4rem;
  margin-top: 1.4rem;
  border-top: 2px solid #eee;
}
#map-container {
  position: relative;
  width: 100%;
  background: #eee;
}
#map-container .map {
  width: 100%;
}
.tour-controls {
  min-width: 14rem;
}
.tour-button {
  cursor: pointer;
}
.a-marker {
  border: 1px solid red;
}
.modal h3 {
  text-align: center;
}
.modal footer {
  display: none;
}
.mmok-modal-footer{
  margin-top: 1rem;
}
</style>
