import ph_img1 from "../assets/images/Packages/ph1.jpg";
import ph_img2 from "../assets/images/Packages/ph2.jpg";
import ph_img3 from "../assets/images/Packages/ph3.jpg";
import ph_img4 from "../assets/images/Packages/ph4.jpg";
import ph_img5 from "../assets/images/Packages/ph5.jpg";
import ph_img6 from "../assets/images/Packages/ph6.jpg";

import vi_img1 from "../assets/images/Packages/vi1.jpg";
import vi_img2 from "../assets/images/Packages/vi2.jpg";
import vi_img3 from "../assets/images/Packages/vi3.jpg";
import vi_img4 from "../assets/images/Packages/vi4.jpg";
import vi_img5 from "../assets/images/Packages/vi5.jpg";
import vi_img6 from "../assets/images/Packages/vi6.jpg";

import co_img1 from "../assets/images/Packages/co1.jpg";
import co_img2 from "../assets/images/Packages/co2.jpg";
import co_img3 from "../assets/images/Packages/co3.jpg";
import co_img4 from "../assets/images/Packages/co4.jpg";
import co_img5 from "../assets/images/Packages/co5.jpg";
import co_img6 from "../assets/images/Packages/co6.jpg";
import co_img7 from "../assets/images/Packages/co7.jpg";

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
      console.log(result.data)
      commit('SET_PHOTOS', results)
    })
    .catch(error => {
      console.log(error)
    })       
  },

  getVideos ({ commit }) {
    axios.get(PAPI.get_video).then(result => {
      let results = result.data
      console.log(result.data)
      commit('SET_VIDEOS', results)
    })
    .catch(error => {
      console.log(error)
    })       
  },

  getCombos ({ commit }) {
    axios.get(PAPI.get_combo).then(result => {
      let results = result.data
      console.log(result.data)
      commit('SET_COMBOS', results)
    })
    .catch(error => {
      console.log(error)
    })       
  },
}