<template>
  <div id="mmok">
    <Navbar v-if="getMode !== 'intro'"/>
    <Details v-if="getMode === 'details'"/>
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
import Navbar from '~/components/Navbar.vue'
import Intro from '~/components/Intro.vue'
import Details from './details.vue'
import Map from './map.vue'
import MapModal from '~/components/modals/map-modal.vue'
import DetailsModal from '~/components/modals/details-modal.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    // Logo
    Navbar,
    Intro,
    Details,
    Map,
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
