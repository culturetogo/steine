<template>
  <b-modal
    id="map-modal"
    no-stacking
  >
    <h3>{{ getTitel }}</h3>
    <div class="steinbildlage"><img
      :src="getBildSteinLageUrl"
      class="mx-auto d-block">
    </div>
    <div class="mmok-modal-footer">
      <b-button
        block
        variant="secondary"
        size = "small"
        @click="aufrufStein"
      >
        Zu diesem Stein
      </b-button>
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
  },
  methods: {
    aufrufStein() {
      this.$emit('input', false);
      // this.$router.push({path: '/details'})
    }
  }
}
</script>

<style>

</style>
