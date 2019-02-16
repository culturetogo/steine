<template>
  <div>
    <nav class="navbar fixed-top navbar-light bg-light">
      <button @click="$store.dispatch('pointerVor', -1)">&larr;</button>
      <div class="tour-controls d-flex justify-content-around mt-3">
        <p
          class="tour-button"
          @click="$store.commit('toggleTour')"><strong>{{ getTour }}</strong></p>
        <p class="anz-stein"><strong>{{ getTitel }}</strong></p>
      </div>
      <button @click="$store.dispatch('pointerVor', 1)">&rarr;</button>
    </nav>
    <section class="container mt-5">
      <div>
        MAP
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

</style>
