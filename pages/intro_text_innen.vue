<template>
  <b-container
    class="main-content"
  >
    <b-row
      class="mmok-content"
    >
      <b-col>
        <div
          v-html="getSeiteInnen"
        />
        <b-button
          block
          variant="light"
          @click="mapInnen"
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
      'getSeiteInnen'
    ])
  },
  methods: {
    mapInnen () {
      this.$store.dispatch('changeMode', 'map')
    }
  }
}
</script>
