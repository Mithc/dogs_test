<template>
    <div class="main">
        <Header/>
        <div class="doge-cards">
            <div class="doge-card" v-for="(dog, index) in dogs" :key="`dog-${index}`">
                <img height="auto" width="100%" v-bind:src="dog" alt="">
                <div class="like">
                    <p>{{getBreed(dog)}}</p>
                    <button :class="{ active: likedDogs.indexOf(dog) !== -1 }" v-on:click="likeBreed(dog)">Like</button>
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
            margin: 30px 0 0 2%;
            flex-grow: 1;
            height: auto;
            max-width: calc(100% * (1 / 6) + 20px );
            border: 2px solid #23004b;
            padding: 32px;
            flex-direction: column;
            justify-content: space-between;
            img {
                border-radius: 2px;
                -webkit-filter: grayscale(20%); /* Safari 6.0 - 9.0 */
                filter: grayscale(20%);
                &:hover {
                    -webkit-filter: grayscale(0); /* Safari 6.0 - 9.0 */
                    filter: grayscale(0);
                }
            }
        }
        .like {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 16px;
            align-items: center;
            font-size: 20px;
            button {
                font-size: 20px;

                border-radius: 4px;
                border: #000 solid 1px;
                background-color: #2a2a2a;
                color: #000000;
                width: 64px;
                height: 32px;
                cursor: pointer;
                outline: none;
                &.active {
                    background-color: #500052;
                }
            }
            button:hover {
                background-color: #4b4b4b;
            }
        }
    }
</style>
