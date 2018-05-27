import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allBreeds: {},
    dogs: [],
    likedDogs: JSON.parse(localStorage.getItem('favoriteDogs')) ? JSON.parse(localStorage.getItem('favoriteDogs')) : [],
    dogsByBreed: []
  },
  getters: {
  },
  mutations: {
    SET_BREEDS_LIST (state, data) {
      state.allBreeds = data
    },
    SET_DOGS (state, data) {
      state.dogs = data
    },
    SET_LIKED (state, url) {
      state.likedDogs.push(url)
      localStorage.setItem('favoriteDogs', JSON.stringify(state.likedDogs))
    },
    SET_DOGS_BY_BREED (state, data) {
      state.dogsByBreed = data
    }
  },
  actions: {
    LOAD_BREEDS_LIST ({commit}) {
      const url = 'https://dog.ceo/api/breeds/list/all'
      axios.get(url).then((response) => {
        commit('SET_BREEDS_LIST', response.data.message)
      }, (err) => {
        console.log(err)
      })
    },
    LOAD_DOGS ({commit}) {
      const url = 'https://dog.ceo/api/breeds/image/random/20'
      axios.get(url).then((response) => {
        commit('SET_DOGS', response.data.message)
      }, (err) => {
        console.log(err)
      })
    },
    LOAD_DOGS_BY_BREED ({commit}, breed) {
      const url = 'https://dog.ceo/api/breed/' + breed + '/images'
      axios.get(url).then((response) => {
        commit('SET_DOGS_BY_BREED', response.data.message)
      }, (err) => {
        console.log(err)
      })
    }
  }

})
