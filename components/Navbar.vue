<template>
  <b-navbar
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
</template>

<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getMode',
      'getTour',
      'getTitel'
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
    backToMap () {
      this.$store.dispatch('changeMode', 'map')
    },
    backToIntro () {
      this.$store.dispatch('changeMode', 'intro')
    }
  }
}
</script>
