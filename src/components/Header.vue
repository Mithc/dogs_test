<template>
    <div class="header">
        <div class="routes">
            <router-link to="/">main</router-link>
            <a v-on:click="seen = !seen">breed⮟</a>
            <router-link to="/favorite">favourites</router-link>
        </div>
        <div v-show="!seen">
            <div class="breedsList">
            <!-- eslint-disable-next-line-->
            <div class="breedItem" v-for="breed in Object.keys(allBreeds)">
                <router-link :to="breed">{{ breed }}</router-link>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Header',
  data () {
    return {
      seen: true
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
    }
  }
}
</script>

<style lang="scss" scoped>
    .routes {
        z-index: 2;
        font-size: 50px;
        color: aliceblue;
        height: 66px;
        width: 100%;
        background-color: #000000;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        a {
            cursor: pointer;
            text-decoration: none;
            color: #757a7f;
            &:hover {
                color: white;
            }
        }
    }
    .breedsList {
        position: fixed;
        top: 66px;
        padding: 10px;
        width: 100%;
        height: auto;
        background-color: black;
        z-index: 2;
        .breedItem {
            display: inline-block;
            background-color: #000000;
            width: 120px;
            height: 30px;
            border: aqua;
            a {
                text-decoration: none;
                color: #757a7f;
                &:hover {
                    color: #d3d8dd;
                }
            }
        }
    }
</style>
