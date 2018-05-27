<template>
    <div class="main">
        <Header/>
        <div class="doge-cards">
            <div class="doge-card" v-for="(dog, index) in dogs" :key="`dog-${index}`">
                <img height="auto" width="100%" v-bind:src="dog" alt="">
                <div class="like">
                    <p>{{getBreed(dog)}}</p>
                    <button :class="{ active: likedDogs.indexOf(dog) === -1 }" v-on:click="likeBreed(dog)">Like</button>
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
  created: function () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll)
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
      if (this.likedDogs.indexOf(url) === -1) {
        this.$store.commit('SET_LIKED', url)
      }
    },
    handleScroll: function (event) {
      let scroll = window.pageYOffset + document.documentElement.clientHeight
      let windowHeight = document.documentElement.scrollHeight
      if (scroll / windowHeight > 0.95) {
        this.$store.dispatch('LOAD_DOGS')

        // fix for stoploading
        window.removeEventListener('scroll', this.handleScroll)
        setTimeout(() => {
          window.addEventListener('scroll', this.handleScroll)
        }, 500)
      }
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
        .like {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 16px;
            align-items: center;
            button {
                border-radius: 4px;
                border: none;
                background-color: #5600a1;
                color: #000000;
                width: 64px;
                height: 32px;
                cursor: pointer;
                outline: none;
            }
            button:hover {
                background-color: #410081;
            }
        }
    }
</style>
