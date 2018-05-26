<template>
    <div class="">
        <Header />
        <div class="doge-cards" v-for="(dog, index) in dogs" :key="`dog-${index}`">
            <div class="doge-card" v-on:click="likeBreed(dog)">
                <img height="auto" width="200" v-bind:src="dog" alt="">
                <p>{{getBreed(dog)}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import Header from '@/components/Header.vue'

export default {
  name: 'main',
  mounted () {
    this.$store.dispatch('LOAD_BREEDS_LIST')
    this.$store.dispatch('LOAD_DOGS')
  },
  components: {
    Header
  },
  computed: {
    ...mapState([
      'allBreeds',
      'dogs',
      'likedDogs'
    ])
  },
  methods: {
    getBreed (url) {
      let urlSplit = url.split('/')
      return urlSplit[4]
    },
    likeBreed (url) {
      this.$store.commit('SET_LIKED', url)
      console.log(this.$store.state.likedDogs)
    }
  }
}
</script>

<style lang="scss" scoped>
    .doge-cards{
        display: flex;
        .doge-card {
            height: auto;
            width: 200px;
            padding: 10px;
            background-color: #031d0e;
            margin: 10px;
        }
    }
</style>
