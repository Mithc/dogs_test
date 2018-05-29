<template>
    <div class="main">
        <Header/>
        <div class="select-by-breed">
            <label for="breed-select">Filter by breed</label>
            <select v-on:change="filterByBreed(breedFilter)" v-model="breedFilter" id="breed-select">
                <option value="">Choose breed</option>
                <option v-for="(dog, index) in dogs" :key="`dog-${index}`" :value="dog.split('/')[4]">{{dog.split('/')[4]}}</option>
            </select>
            <button class="clear-filter-button" v-on:click="clearFilter()">Clear Filter</button>
        </div>
        <div class="doge-cards">
            <div class="doge-card" v-for="(dog, index) in dogsToShow" :key="`dog-${index}`">
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
  data () {
    return {
      breedFilter: '',
      breeds: [],
      dogsToShow: []
    }
  },
  mounted () {
    this.$store.dispatch('LOAD_DOGS')
  },
  components: {
    Header
  },
  created: function () {
    this.dogsToShow = this.dogs
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  computed: {
    ...mapState([
      'dogs',
      'likedDogs'
    ])
  },
  methods: {
    getBreed (url) {
      let urlSplit = url.split('/')
      return urlSplit[4]
    },
    filterByBreed (breedFilter) {
      window.removeEventListener('scroll', this.handleScroll)
      this.dogsToShow = this.$store.getters.filteredDogs(breedFilter)
    },
    clearFilter () {
      window.addEventListener('scroll', this.handleScroll)
      this.dogsToShow = this.dogs
    },
    likeBreed (url) {
      if (this.likedDogs.indexOf(url) === -1) {
        this.$store.commit('SET_LIKED', url)
      }
    },
    handleScroll (event) {
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
    .select-by-breed {
        padding-top: 50px;
        background-color: white;
        position: relative;
        width: 100%;
        height: 100px;
        label {
            font-size: 20px;
            color: #80858a;
        }
        select {
            color: #80858a;
            margin: 25px;
            height: 30px;
            width: 50%;
            font-size: 20px;
            border: 1px solid  #a5aaaf;
            border-radius:  8px;
            &:focus {
                outline: none;
            }
        }
        .clear-filter-button {
            color: #80858a;
            height: 30px;
            font-size: 20px;
            border-radius: 8px;
            background-color: white;
            border: 1px solid #a5aaaf;
            &:focus {
                outline: none;
            }
            &:hover {
                background-color: #d7d7d7;
            }
        }
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
                    background-color: #4b4b4b;
                }
            }
            button:hover {
                background-color: #4b4b4b;
            }
        }
    }
</style>
