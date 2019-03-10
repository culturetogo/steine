<template>
  <b-container
    class="main-content"
  >
    <b-row
      class="mmok-content"
    >
      <b-col>
        <div
          v-html="getSeiteAussen"
        />
        <b-button
          block
          variant="light"
          @click="mapAussen"
        >
          Rundgang starten
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getSeiteAussen'
    ])
  },
  methods: {
    mapAussen () {
      this.$store.dispatch('switchTourTo', 'Außen')
      this.$store.dispatch('changeMode', 'map')
    }
  }
}
</script>
