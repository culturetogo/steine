<template>
  <b-modal
    id="details-modal"
    no-stacking
  >
    <h3>{{ getTitel }}</h3>
    <div class="steinbildlage"><img
      :src="getBildSteinLageUrl"
      class="mx-auto d-block">
    </div>
  </b-modal>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getTitel',
      'getBildSteinLageUrl'
    ])
  }
}
</script>

<style>

</style>
