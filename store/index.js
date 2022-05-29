import team from "assets/images/Teams/team.jpg";

export const state = () => ({

  // State
  mandatory_details: [
    {
      id: 1,
      bf_name: '',
      bl_name: '',
      gf_name: '',
      gl_name: '',
      wedding_dates: '',
      event_details: '',
      vanue: '',
      c_number: '',
      email: '',
      story: '',
      thoughts: '',
    }
  ],
  films: [
    {
      id: 1,
      vid: 'https://www.youtube.com/embed/-GBHgtS9jcY'
    },
    {
      id: 2,
      vid: 'https://www.youtube.com/embed/T1tzCKLjvCg'
    },
    {
      id: 3,
      vid: 'https://www.youtube.com/embed/BlGcccrqRGM'
    },
    {
      id: 4,
      vid: 'https://www.youtube.com/embed/5jJ4uyggcEU'
    },
    {
      id: 5,
      vid: 'https://www.youtube.com/embed/UCDmKWMIlx8'
    },
    {
      id: 6,
      vid: 'https://www.youtube.com/embed/yEnDvGqx72M'
    },
    {
      id: 7,
      vid: 'https://www.youtube.com/embed/Oxc5gSAW81o'
    },
    {
      id: 8,
      vid: 'https://www.youtube.com/embed/EIKoFzuW7I8'
    },
    {
      id: 9,
      vid: 'https://www.youtube.com/embed/wFDaJVTe-TI'
    },
    
  ],
  teams: [
    {
      id: 1,
      img: team,
      name: 'THE ARTIST',
      designation: 'Founder',
    },
    {
      id: 2,
      img: team,
      name: 'THE ARTIST',
      designation: 'Creative Director',
    },
    {
      id: 3,
      img: team,
      name: 'THE ARTIST',
      designation: 'Creative Director',
    },
    {
      id: 4,
      img: team,
      name: 'THE ARTIST',
      designation: 'Creative Visualiser',
    },
    {
      id: 5,
      img: team,
      name: 'THE ARTIST',
      designation: 'Photographer',
    },
    {
      id: 6,
      img: team,
      name: 'THE ARTIST',
      designation: 'Chief Editor',
    },
    {
      id: 7,
      img: team,
      name: 'THE ARTIST',
      designation: 'Photographer',
    },
    {
      id: 8,
      img: team,
      name: 'THE ARTIST',
      designation: 'Photographer',
    },
  ],
})

export const getters = {
  
}

export const actions = {
  // actions
  saveDetails({commit}, payload) {
    console.log(payload)
    commit("saveDet", payload);
  }
}

export const mutations = {
  // mutations
  saveDet(state, payload) {
    state.mandatory_details.push(payload)
  }
}
