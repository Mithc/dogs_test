<template>
    <div class="breed">
        <Header />
        <div class="doge-cards">
            <div class="doge-card" v-for="(dog, index) in dogsByBreed" :key="`dog-${index}`">
                <img height="auto" width="100%" v-bind:src="dog" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import {mapState} from 'vuex'

export default {
  name: 'breed',
  components: {
    Header
  },
  created () {
    this.$store.dispatch('LOAD_DOGS_BY_BREED', this.$route.params.breed)
  },
  updated () {
    this.$store.dispatch('LOAD_DOGS_BY_BREED', this.$route.params.breed)
  },
  computed: {
    ...mapState([
      'dogsByBreed'
    ])
  }
}
</script>

<style lang="scss" scoped>
    .doge-cards {
        display: flex;
        flex-wrap: wrap;
        background-color: #2a2a2a;
        left: 0;
        padding: 20px;
        .doge-card {
            display: flex;
            background: #2a2a2a;
            margin: 50px 0 0 2%;
            flex-grow: 1;
            height: auto;
            width: calc(100% * (1 / 6) - 10px - 1px);
            border-radius: 20px;
            border: 2px solid #410081;
            padding: 32px;
            flex-direction: column;
            justify-content: space-between;
            img {
                border-radius: 2px;
            }
        }
    }
</style>
