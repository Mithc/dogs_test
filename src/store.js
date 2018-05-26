import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allBreeds: {},
    dogs: []
  },
  getters: {
  },
  mutations: {
    SET_BREEDS_LIST (state, data) {
      state.allBreeds = data
    },
    SET_DOGS (state, data) {
      state.dogs.push(data)
    }
  },
  actions: {
    LOAD_BREEDS_LIST ({commit}) {
      const url = 'https://dog.ceo/api/breeds/list/all'
      axios.get(url).then((response) => {
        commit('SET_BREEDS_LIST', {allBreeds: response.data.message})
      }, (err) => {
        console.log(err)
      })
    },
    LOAD_DOGS ({commit}) {
      const url = 'https://dog.ceo/api/breeds/image/random/20'
      axios.get(url).then((response) => {
        commit('SET_DOGS', {allBreeds: response.data.message})
      }, (err) => {
        console.log(err)
      })
    }
  }

})
