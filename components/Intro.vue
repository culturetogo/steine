<template>
  <div
    id="mmok-intro"
  >
    <b-container
      class="intro-content"
    >
      <b-row
        class="intro-titel"
      >
        <h1
          class="mx-auto"
        >
          Sprechende Steine <br>im Kloster Chorin
        </h1>
        <h2
          class="mx-auto intro-sub"
        >
          Inschriften und Zeichen aus der Backsteingotik
        </h2>
      </b-row>
      <b-row
        class="intro-logo"
      >
        <img
          src="~/assets/chorin-logo.jpg"
          class="mx-auto"
        >
      </b-row>
      <b-row
        class="intro-tour"
      >
        <b-button
          block
          variant="light"
          @click="backToMap"
        >
          Tour starten!
        </b-button>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {

  },
  data(){
    return {

    }
  },
  computed: {
    ...mapGetters([

    ])
  },
  methods: {
    backToMap () {
      this.$store.dispatch('changeMode', 'map')
      console.log("BackToMap")
    }
  }
}
</script>

<style>
  body {
    padding-top: 0rem;
  }
  .intro-content {
    padding: 1rem 2rem;
  }
  .intro-titel {
    color: #eee;
    min-height: 20vh;
    margin-top: 8vh;
  }
  .intro-logo {
    min-height: 56vh;
  }
  .intro-logo img {
    max-height: 48vh;
  }
  .intro-tour {

  }
  #mmok-intro h1 {
    font-size: 2rem;
    text-align: center;
  }
  #mmok-intro h2.intro-sub {
    font-size: 1.4rem;
    text-align: center;
  }
</style>
