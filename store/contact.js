import axios from 'axios';
import PAPI from './../api-path/apipath';

export const state = () => ({
  
})

export const getters = {
  
}

export const mutations = {
  // mutations
 
}

export const actions = {
  // actions
  async saveDetails({ commit }, payload) {
    let config = {}
    
    let response = await axios.post(PAPI.create_contract, {
      bf_name: payload.bf_name,
      bl_name: payload.bl_name,
      gf_name: payload.gf_name,
      gl_name: payload.gl_name,
      wedding_dates: payload.wedding_dates,
      event_details: payload.event_details,
      venue: payload.vanue,
      c_number: payload.c_number,
      email: payload.email,
      story: payload.story,
      thoughts: payload.thoughts,
    }, config).then( result => {
    
       return result.data.code;
  })
  console.log(
    response
  )
  return response;
  },
}