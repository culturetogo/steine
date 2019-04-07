<template>
  <b-container
    class="main-content"
  >
    <b-row
      class="mmok-content"
    >
      <b-col>
        <div
          v-html="getSeite"
        />
        <b-button
          block
          variant="light"
          @click="callIntroTextInnen"
        >
          Rundgang 1: Kreuzgang und Innenräume
        </b-button>
        <b-button
          block
          variant="light"
          @click="callIntroTextAussen"
        >
          Rundgang 2: Die Außenmauern
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'IntroTextGeneralComponent',
  computed: {
    ...mapGetters([
      'getSeite'
    ])
  },
  methods: {
    callIntroTextInnen () {
      this.$store.dispatch('changeMode', 'intro-text-innen')
    },
    callIntroTextAussen () {
      this.$store.dispatch('changeMode', 'intro-text-aussen')
    },
    backToMap () {
      this.$store.dispatch('changeMode', 'map')
    }
  }
}
</script>
