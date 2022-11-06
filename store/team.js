import axios from 'axios';
import PAPI from './../api-path/apipath';

export const state = () => ({
    teams: [],
})

export const getters = {}

export const mutations = {
    SET_TEAMS (state, items) {
        state.teams = items
    },
}

export const actions = {
    getTeams ({ commit }) {
        axios.get(PAPI.get_team).then(result => {
            let results = result.data
            // console.log(result.data)
            commit('SET_TEAMS', results)
        })
        .catch(error => {
            console.log(error)
        })       
    },
}