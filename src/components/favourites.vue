<template>
<div class="">
    <Header />
    <div class="doge-cards">
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
    .doge-cards {
        display: flex;
        flex-wrap: wrap;
        background-color: #2a2a2a;
        left: 0;
        padding: 10px;
        .doge-card {
            display: flex;
            background: #2a2a2a;
            margin: 30px 0 0 2%;
            flex-grow: 1;
            height: auto;
            max-width: calc(100% * (1 / 6) + 20px );
            border: 2px solid #25004b;
            padding: 32px;
            flex-direction: column;
            justify-content: space-around;
            img {
                border-radius: 2px;
            }
        }
    }
</style>
