<template>
    <div class="header">
        <router-link to="/">main</router-link>
        <router-link to="/favorite">favourites</router-link>
        <a v-on:click="toggleBreedList">breed</a>
        <ul v-if="showBreedsList" class="breedList">
            <li v-for="breed in Object.keys(allBreeds)"><router-link :to="breed">{{ breed }}</router-link></li>
        </ul>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Header',
  data: function () {
    return {
      showBreedsList: false
    }
  },
  mounted () {
    this.$store.dispatch('LOAD_BREEDS_LIST')
  },
  computed: {
    ...mapState([
      'allBreeds'
    ])
  },
  methods: {
    getBreed (url) {
      let urlSplit = url.split('/')
      return urlSplit[4]
    },
    toggleBreedList () {
      this.showBreedList = !this.showBreedList
    }
  }
}
</script>

<style lang="scss" scoped>
    .header {
        height: 66px;
        width: 100%;
        background-color :#d0d3d5;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
</style>
