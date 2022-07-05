import axios from 'axios';
import PAPI from './../api-path/apipath';

export const state = () => ({
  reviews: [],
})

export const getters = {
  
}

export const mutations = {
  SET_REVIEWS (state, items) {
    state.reviews = items
  },
}

export const actions = {
  getReviews ({ commit }) {
    axios.get(PAPI.get_review).then(result => {
      let results = result.data
      // console.log(result.data)
      commit('SET_REVIEWS', results)
    })
    .catch(error => {
      console.log(error)
    })     
  }
}