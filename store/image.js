import axios from 'axios';
import PAPI from './../api-path/apipath';

export const state = () => ({
  images: [],
  home_banners: {}
})

export const getters = {
  
}

export const mutations = {
  SET_IMAGES (state, items) {
    state.images = items
  },

  SET_BANNER_IMAGES(state, items) {
    state.home_banners = items
  },
}

export const actions = {
  getImages ({ commit }) {
    axios.get(PAPI.get_image).then(result => {
      let results = result.data
      // console.log(result.data)
      commit('SET_IMAGES', results)
    })
    .catch(error => {
      console.log(error)
    })       
  },

  getHomeBanner({ commit }) {
    axios.get(PAPI.get_home_banners).then(result => {
      let results = result.data
      console.log(result.data)
      commit('SET_BANNER_IMAGES', results)
    })
    .catch(error => {
      console.log(error)
    })       
  },
}
