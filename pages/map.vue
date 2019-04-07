<template>
  <b-container
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
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getTour',
      'getAkTour',
      'getMarker',
      'getMarkers',
      'getSeite'
    ])
  },
  methods: {
    toggleModalMap(mi) {
      // ruft Modal mit dem ausgewählten Stein auf
      let index = mi -1
      console.log("toggleMapIndex: ", index)
      this.$store.dispatch('pointerTo', index)
      this.$root.$emit('bv::show::modal', 'map-modal')

    }
  }
}
</script>
