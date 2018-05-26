<template>
<div class="">
    <Header />
    <div class="doge-cards" v-for="(dog, index) in likedDogs" :key="`dog-${index}`">
        <div class="doge-card" v-on:click="likeBreed(dog)">
            <img height="auto" width="200" v-bind:src="dog" alt="">
            <p>{{getBreed(dog)}}</p>
        </div>
    </div>
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import {mapState} from 'vuex'

export default {
  name: 'Favorite',
  components: {
    Header
  },
  computed: {
    ...mapState([
      'likedDogs'
    ])
  },
  methods: {
    getBreed (url) {
      let urlSplit = url.split('/')
      return urlSplit[4]
    }
  }
}
</script>

<style scoped>

</style>
