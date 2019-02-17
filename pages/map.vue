<template>
  <div>
    <nav class="navbar fixed-top navbar-light bg-light" />
    <section class="container mt-5">
      <div id="map-container">
        <figure id="imagemap">
          <svg viewBox="0 0 3000 2000" >
            <defs>
              <style>
                rect:hover {
                fill: white;
                opacity:0.5;
                }
              </style>
            </defs>

            <image
              width="3000"
              height="2000"
              xlink:href="~/assets/map_01.jpg">
              <title>Mount Rushmore National Memorial</title>
            </image>

            <a
              xlink:href="https://de.wikipedia.org/wiki/George_Washington">
              <rect
                :x="marker_pos_left"
                :y="marker_pos_top"
                opacity=".1"
                width="250"
                height="300" />
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
      test: "",
      marker_pos_top: "1000",
      marker_pos_left: "1000"
    }
  },
  computed: {
    ...mapGetters([

    ])
  },
  methods: {

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
