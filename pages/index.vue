<template>
  <div>
    <nav class="navbar fixed-top navbar-light bg-light">
      <button @click="$store.commit('pointerRueck')">&larr;</button>
      <p class="anz-stein"><strong>{{ $store.state.steine[$store.state.pointer].attributes.title }}</strong></p>
      <button @click="$store.commit('pointerVor')">&rarr;</button>
    </nav>
    <section class="container mt-5">
      <div>
        <div class="steinbild"><img
          :src="$store.state.steine[$store.state.pointer].attributes.bildstein.url"
          class="mx-auto d-block">
        </div>
        <div v-html = "$store.state.steine[$store.state.pointer].attributes.body" />
        <div
          v-if="$store.state.steine[$store.state.pointer].attributes.transkription"
          id="transkription" >
          <h3>Inschrift</h3>
          <p
            v-html = "$store.state.steine[$store.state.pointer].attributes.transkription" />
        </div>
        <div
          v-if="$store.state.steine[$store.state.pointer].attributes.info"
          id="Info" >
          <h3>Weiterführende Information</h3>
          <p
            v-html = "$store.state.steine[$store.state.pointer].attributes.info" />
        </div>
        <div
          v-if="$store.state.steine[$store.state.pointer].attributes.bibeltext"
          id="bibeltext" >
          <h3>Bibeltext</h3>
          <p
            v-html = "$store.state.steine[$store.state.pointer].attributes.introbibeltext" />
          <audio controls>
            <source
              :src="$store.state.baseAudio + $store.state.steine[$store.state.pointer].attributes.bibeltext"
              type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    // Logo
  },
  data(){
    return {
      test: "data",
      out: "leer",
    }
  },
  methods: {
    async fetchSomething() {
      const ip = await this.$axios.$get('http://icanhazip.com')
      //this.ip = ip
      this.out = ip
      console.log( ip )
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
.steinbild {
  margin-top: 2rem;
  background: #333;
}
.steinbild img {
  max-height: 16rem;
  height: auto;
}
.anz-stein {
  margin-bottom: 0;
  padding: .6rem;
  min-width: 8rem;
  text-align: center;
}

</style>
