<template>
    <div class="">
        <Header />

    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Header from '@/components/Header.vue'

export default {
  name: 'main',
  mounted () {
    this.$store.dispatch('getTwentyRandomDogs')
    this.$store.dispatch('getDogsList')
  },
  components: {
    Header
  },
  methods: {
    ...mapActions('allBreeds', ['setList'])
  },
  computed: {
    ...mapState([
      'allBreeds',
      'dogs'
    ])
  }
}
</script>

<style scoped>

</style>
