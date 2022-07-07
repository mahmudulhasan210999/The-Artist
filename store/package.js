import axios from 'axios';
import PAPI from './../api-path/apipath';

export const state = () => ({
  photos: [],
  videos: [],
  combos: [],
})

export const getters = { 
}

export const mutations = {
  SET_PHOTOS (state, items) {
    state.photos = items
  },

  SET_VIDEOS (state, items) {
    state.videos = items
  },

  SET_COMBOS (state, items) {
    state.combos = items
  },
}

export const actions = {
  getPhotos ({ commit }) {
    axios.get(PAPI.get_photo).then(result => {
      let results = result.data
      // console.log(result.data)
      commit('SET_PHOTOS', results)
    })
    .catch(error => {
      console.log(error)
    })       
  },

  getVideos ({ commit }) {
    axios.get(PAPI.get_video).then(result => {
      let results = result.data
      // console.log(result.data)
      commit('SET_VIDEOS', results)
    })
    .catch(error => {
      console.log(error)
    })       
  },

  getCombos ({ commit }) {
    axios.get(PAPI.get_combo).then(result => {
      let results = result.data
      // console.log(result.data)
      commit('SET_COMBOS', results)
    })
    .catch(error => {
      console.log(error)
    })       
  },
}