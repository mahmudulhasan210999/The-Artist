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


export const state = () => ({
  photos: [
    {
      id: 1,
      slug: 'basic',
      img: ph_img1,
      package_name: 'BASIC',
      price: '6000',
      photographer: 'One senior photographer',
      time: '4 hours coverage',
      details: [
        {
          detail: 'Professional photo editing'
        },
        {
          detail: '50 special edit | 50 print 4R'
        },
        {
          detail: 'Disc of images | Online proofing'
        },
      ]
    },
    {
      id: 2,
      slug: 'economy',
      img: ph_img2,
      package_name: 'ECONOMY',
      price: '7000',
      photographer: 'One top photographer',
      time: '4 hours coverage',
      details: [
        {
          detail: 'Professional photo editing'
        },
        {
          detail: '50 special edit | 50 print 4R'
        },
        {
          detail: 'Disc of images | Online proofing'
        },
      ]
    },
    {
      id: 3,
      slug: 'standard',
      img: ph_img3,
      package_name: 'STANDARD',
      price: '12000',
      photographer: 'One top photographer | One senior photographer',
      time: '5 hours coverage',
      details: [
        {
          detail: 'Professional photo editing'
        },
        {
          detail: '50 special edit | 50 print 4R'
        },
        {
          detail: 'Disc of images | Online proofing'
        },
      ]
    },
    {
      id: 4,
      slug: 'classic',
      img: ph_img4,
      package_name: 'CLASSIC',
      price: '18000',
      photographer: 'One top photographer | Two senior photographers',
      time: '5 hours coverage',
      details: [
        {
          detail: 'Professional photo editing'
        },
        {
          detail: '50 special edit | 50 print 4R'
        },
        {
          detail: 'Exclusive photo album'
        },
        {
          detail: 'Pen drive of images | online proofing'
        },
      ]
    },
    {
      id: 5,
      slug: 'premium',
      img: ph_img5,
      package_name: 'PREMIUM',
      price: '25000',
      photographer: 'Three top photographers | One senior photographer',
      time: '6 hours coverage',
      details: [
        {
          detail: 'Professional photo editing'
        },
        {
          detail: '100 special edit | 100 print 4R'
        },
        {
          detail: 'Exclusive photo album | one 10L poster size frame'
        },
        {
          detail: 'Pen drive of images  | Online proofing'
        },
      ]
    },
    {
      id: 6,
      slug: 'luxury',
      img: ph_img6,
      package_name: 'LUXURY',
      price: '40000',
      photographer: 'Four top photographers | Two senior photographers',
      time: '7 hours coverage',
      details: [
        {
          detail: 'Professional photo editing'
        },
        {
          detail: '150 special edit | 150 print 5R'
        },
        {
          detail: 'Exclusive photo album | one 20L poster size frame'
        },
        {
          detail: 'Pen drive of images  | Online proofing'
        },
      ]
    },
  ],

  videos: [
    {
      id: 1,
      slug: 'basic',
      img: vi_img1,
      package_name: 'BASIC',
      price: '6000',
      cinematographer: 'One senior cinematographer',
      time: '4 hours coverage',
      details: [
        {
          detail: 'Professional video editing'
        },
        {
          detail: 'One trailer | 20-25 mins movie'
        },
        {
          detail: 'Clients can choose the music for trailer'
        },
        {
          detail: 'Disc of videos | online proofing'
        },
      ]
    },
    {
      id: 2,
      slug: 'economy',
      img: vi_img2,
      package_name: 'ECONOMY',
      price: '8000',
      cinematographer: 'One top cinematographer',
      time: '4 hours coverage',
      details: [
        {
          detail: 'Professional video editing'
        },
        {
          detail: 'One trailer | 20-25 mins movie'
        },
        {
          detail: 'Clients can choose the music for trailer'
        },
        {
          detail: 'Disc of videos | online proofing'
        },
      ]
    },
    {
      id: 3,
      slug: 'standard',
      img: vi_img3,
      package_name: 'STANDARD',
      price: '15000',
      cinematographer: 'One top cinematographer | One senior cinematographer',
      time: '5 hours coverage',
      details: [
        {
          detail: 'Professional video editing'
        },
        {
          detail: 'One trailer | 25-30 mins movie'
        },
        {
          detail: 'Clients can choose the music for trailer'
        },
        {
          detail: 'Disc of videos | online proofing'
        },
      ]
    },
    {
      id: 4,
      slug: 'classic',
      img: vi_img4,
      package_name: 'CLASSIC',
      price: '20000',
      cinematographer: 'One top cinematographer | Two senior cinematographers',
      time: '5 hours coverage',
      details: [
        {
          detail: 'Professional video editing'
        },
        {
          detail: 'One trailer | 30-40 mins movie'
        },
        {
          detail: 'Clients can choose the music for trailer'
        },
        {
          detail: 'Pen drive of videos | online proofing'
        },
      ]
    },
    {
      id: 5,
      slug: 'premium',
      img: vi_img5,
      package_name: 'PREMIUM',
      price: '30000',
      cinematographer: 'Two top cinematographers | Two senior cinematographers',
      time: '6 hours coverage',
      details: [
        {
          detail: 'Professional video editing'
        },
        {
          detail: 'One trailer | 40-60 mins movie'
        },
        {
          detail: 'Clients can choose the music for trailer'
        },
        {
          detail: 'Pen drive of videos | online proofing'
        },
      ]
    },
    {
      id: 6,
      slug: 'luxury',
      img: vi_img6,
      package_name: 'LUXURY',
      price: '45000',
      cinematographer: 'Three top cinematographers | Three senior Cinematographers',
      time: '6 hours coverage',
      details: [
        {
          detail: 'Professional video editing'
        },
        {
          detail: 'One trailer | 60-80mins movie'
        },
        {
          detail: 'Clients can choose the music for trailer'
        },
        {
          detail: 'Pen drive of videos | online proofing'
        },
      ]
    },
  ],

  combos: [
    {
      id: 1,
      slug: 'love',
      img: co_img1,
      package_name: 'LOVE',
      price: '13500',
      p_c_qty: 'One top photographer , One top cinematographer',
      time: '4 hours coverage',
      details: [
        {
          detail: '50 special edit | 50 4R print'
        },
        {
          detail: 'One trailer | 20-25 mins movie'
        },
        {
          detail: 'Disc of images and videos'
        },
        {
          detail: 'Online proofing'
        },
      ]
    },
    {
      id: 2,
      slug: 'sparkle',
      img: co_img2,
      package_name: 'SPARKLE',
      price: '25000',
      p_c_qty: 'Two top photographers, Two top cinematographers',
      time: '4 hours coverage',
      details: [
        {
          detail: '100 special edit | 100*4R | 10L*3'
        },
        {
          detail: 'One trailer | 20-25 mins movie'
        },
        {
          detail: 'Disc of images and videos'
        },
        {
          detail: 'Online proofing'
        },
      ]
    },
    {
      id: 3,
      slug: 'glitter',
      img: co_img3,
      package_name: 'GLITTER',
      price: '37000',
      p_c_qty: 'Two top photographers | One senior photographer, Two top cinematographers | One senior cinematographer',
      time: '5 hours coverage',
      details: [
        {
          detail: '150 special edit | 150*4R | 12L*3'
        },
        {
          detail: 'One trailer | 30-40 mins movie'
        },
        {
          detail: 'Pen drive of images and videos'
        },
        {
          detail: 'Online proofing'
        },
      ]
    },
    {
      id: 4,
      slug: 'diamond',
      img: co_img4,
      package_name: 'DIAMOND',
      price: '50000',
      p_c_qty: 'Three top photographers | One senior photographer, Three top cinematographer | One senior cinematographer',
      time: '6 hours coverage with Basor',
      details: [
        {
          detail: '200 special edit | 200*4R | 12L*5'
        },
        {
          detail: 'Exclusive photo album'
        },
        {
          detail: 'One 20L poster size frame'
        },
        {
          detail: 'One trailer | 30-40 mins movie'
        },
        {
          detail: 'Pen drive of images and videos'
        },
        {
          detail: 'Online proofing'
        },
      ]
    },
    {
      id: 5,
      slug: 'sharif_reza_startup',
      img: co_img5,
      package_name: 'SHARIF REZA STARTUP',
      price: '20000',
      sharif_reza: '2 hours portrait sessions with SHARIF REZA',
      p_c_qty: 'One top photographer, One top cinematographer',
      time: '4 hours coverage',
      details: [
        {
          detail: 'Professional photo and video editing'
        },
        {
          detail: '50 special edit | 50 4R print'
        },
        {
          detail: 'One trailer | 20-25 mins movie'
        },
        {
          detail: 'Disc of images and videos'
        },
        {
          detail: 'Online proofing'
        },
      ]
    },
    {
      id: 6,
      slug: 'sharif_reza_premium',
      img: co_img6,
      package_name: 'SHARIF REZA PREMIUM',
      price: '50000',
      sharif_reza: '3 hours portrait sessions with SHARIF REZA',
      p_c_qty: 'Two top photographers | One senior photographer, two top cinematographers | One senior cinematographer',
      time: '5 hours coverage',
      details: [
        {
          detail: 'Professional photo and video editing'
        },
        {
          detail: '150 special edit | 150*4R | 12L*3'
        },
        {
          detail: 'Exclusive photo album | one 20L poster size frame'
        },
        {
          detail: 'One trailer | 30-40 mins movie'
        },
        {
          detail: 'Pen drive of images and videos'
        },
        {
          detail: 'Online proofing'
        },
      ]
    },
    {
      id: 7,
      slug: 'sharif_reza_signature',
      img: co_img7,
      package_name: 'SHARIF REZA SIGNATURE',
      price: '70000',
      sharif_reza: '6 hours portrait sessions with SHARIF REZA',
      p_c_qty: 'Three top photographers | One senior photographer, Three top cinematographers | One senior cinematographer',
      time: '6 hours coverage with Basor',
      details: [
        {
          detail: 'Professional photo and video editing'
        },
        {
          detail: '200 special edit | 200*4R | 12L*5'
        },
        {
          detail: 'Exclusive photo album | one 20L poster size frame'
        },
        {
          detail: 'One trailer | 30-40 mins movie'
        },
        {
          detail: 'Pen drive of images and videos'
        },
        {
          detail: 'Online proofing'
        },
      ]
    },
  ],

})

export const getters = { 
}

export const actions = {
}

export const mutations = {
}