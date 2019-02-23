<template>
  <div>
    <nav class="navbar fixed-top navbar-light bg-light" />
    <section class="container mt-5">
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
              @click="$store.dispatch('pointerTo', marker.index)"
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
import { mapGetters } from 'vuex'

export default {
  components: {

  },
  data(){
    return {
      test: ""
    }
  },
  computed: {
    ...mapGetters([
      'getMarker',
      'getMarkers'
    ])
  },
  methods: {
    callStone(stein) {

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
</style>
