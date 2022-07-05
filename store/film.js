import axios from 'axios';
import PAPI from './../api-path/apipath';

export const state = () => ({
  films: []
})

export const getters = { 
}

export const mutations = {
  SET_FILMS (state, items) {
    state.films = items
  },
}

export const actions = {
  getFilms ({ commit }) {
    axios.get(PAPI.get_film).then(result => {
      let results = result.data
      // console.log(result.data)
      commit('SET_FILMS', results)
    })
    .catch(error => {
      console.log(error)
    })     
  }
}
