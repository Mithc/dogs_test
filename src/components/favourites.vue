<template>
<div class="">
    <Header />
    <div class="doge-cards">
        <div class="fav-header">
            <h1>Favourites</h1>
        </div>
        <div class="doge-card" v-for="(dog, index) in likedDogs" :key="`dog-${index}`">
            <img height="auto" width="100%" v-bind:src="dog" alt="">
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
    .fav-header {
        width: 100%;
        font-size: 30px;
        margin-top: 30px;
        background-color: #ffffff;
        text-transform: uppercase;
        margin-bottom: 0;
        color: #0c4e09;
    }
    .doge-cards {
        display: flex;
        flex-wrap: wrap;
        background-color: white;
        left: 0;
        padding: 20px;
        .doge-card {
            display: flex;
            background: #2a2a2a;
            margin: 30px 0 0 2%;
            flex-grow: 1;
            height: auto;
            max-width: 18%;
            border: 2px solid #23004b;
            padding: 32px;
            flex-direction: column;
            justify-content: space-between;
            p {
                color: #c9ced3;
            }
            img {
                border-radius: 2px;
            }
        }
    }
</style>
