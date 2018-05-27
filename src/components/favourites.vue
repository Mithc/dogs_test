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


<style lang="scss" scoped>
    .doge-cards {
        /*margin-top: 75px;*/
        /*display: grid;*/
        /*grid-gap: 50px 50px;*/
        /*grid-column-start: 1;*/
        /*grid-column-end: 3;*/
        /*grid-template-columns: 25% 25% 25%;*/
        /*align-content: start;*/
        /*justify-content: space-evenly;*/
        display: flex;
        flex-direction: column;
        background-color: white;
        align-items: center;
        .doge-card {
            /*padding: 10px;*/
            width: auto;
            background-color: white;
            height: auto;
            border-radius: 8px;
            border: 1px solid #d0d3d5;
            padding: 32px;
            margin: 32px auto;
        }
    }
</style>
