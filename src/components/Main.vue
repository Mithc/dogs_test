<template>
    <div class="">
        <Header/>
        <div class="doge-cards">
            <div class="doge-card" v-for="(dog, index) in dogs" :key="`dog-${index}`">
                <img height="auto" width="200" v-bind:src="dog" alt="">
                <div class="like">
                    <p>{{getBreed(dog)}}</p>
                    <button :class="{ active: likedDogs.indexOf(url) !== -1 }" v-on:click="likeBreed(dog)">Like</button>
                </div>
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
      if (this.likedDogs.indexOf(url) !== -1) {
        this.$store.commit('SET_LIKED', url)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .doge-cards {
        display: flex;
        flex-wrap: wrap;
        background-color: white;

        .doge-card {
            width: auto;
            background-color: white;
            height: auto;
            border-radius: 8px;
            border: 1px solid #d0d3d5;
            padding: 32px;
            margin: 32px auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .like{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 16px;
            align-items: center;
            button{
                border-radius: 4px;
                border: none;
                background-color: lightblue;
                color: white;
                width: 64px;
                height: 32px;
                cursor: pointer;
                outline: none;
            }
            button:hover{
                background-color: lightskyblue;
            }
        }
    }
</style>
