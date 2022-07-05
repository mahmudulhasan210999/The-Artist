import axios from 'axios';
import PAPI from './../api-path/apipath';

export const state = () => ({

})

export const getters = {
  
}

export const actions = {
  // actions
  saveDetails({ commit }, payload) {
    let config = {}
    axios.post(PAPI.create_contract, {
      bf_name: payload.bf_name,
      bl_name: payload.bl_name,
      gf_name: payload.gf_name,
      gl_name: payload.gl_name,
      wedding_dates: payload.wedding_dates,
      event_details: payload.event_details,
      venue: payload.venue,
      c_number: payload.c_number,
      email: payload.email,
      story: payload.story,
      thoughts: payload.thoughts,
    }, config).then( result => {
      let msg = result.data
      console.log(result)
      commit('SET_MESSAGE', msg)
  })
  },
}

export const mutations = {
  // mutations
}
