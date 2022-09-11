<template>
  <div class="bg-orange-50 w-full flex flex-col">
    <!-- top design with Header -->
    <div class="w-full image-size" :style="{'background-image': 'url(https://theartistapi.bitflex.xyz'+banners.image1+')'}">
      <div class="w-full navbar">
        <!-- main header -->
        <div class="hidden md:flex justify-between h-36 p-2 md:mx-10 lg:mx-36 xl:mx-64">
          <div class="pt-6">
            <nuxt-link class="text-white" :to="'/packages'">PACKAGES</nuxt-link>
          </div>
          <div class="pt-6">
            <nuxt-link class="text-white" :to="'/images'">IMAGES</nuxt-link>
          </div>
          <div class="flex items-center">
            <nuxt-link class="text-lg font-medium" :to="'/'">
              <img class="h-20 w-52 lg:h-24 lg:w-60 xl:h-32 xl:w-80" src="../../assets/images/Header/header1.png" alt="HOME">
            </nuxt-link>
          </div>
          <div class="pt-6">
            <nuxt-link class="text-white" :to="'/films'">FILMS</nuxt-link>
          </div>
          <div class="pt-6">
            <nuxt-link class="text-white" :to="'/contact'">CONTACT</nuxt-link>
          </div>
        </div>

        <!-- For Responsive Dimensions -->
        <div class="flex justify-between md:hidden">
          <div class="pl-4">
            <nuxt-link class="text-lg font-medium" :to="'/'"><img class="h-16 w-44" src="../../assets/images/Header/header1.png" alt="HOME"></nuxt-link>
          </div>
          <div class="pr-5 flex items-center">
            <div class="border-2 rounded-lg border-white bg-white">
              <i @click="toggleNav" class="pi pi-bars p-1"></i>
              <Navbar v-if="navToggled" @navClosed="closeNav"/>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col items-center text-white text-center font-sans">
        <p class="w-60 sm:w-96 mt-96 sm:mt-80">As a professionally trained photographer and creative visual artist, my job of telling the most beautiful love stories brings me so much fulfillment and joy. I’m hard-working, yet light-hearted. I love music, movies and most of all, my adorable family.</p>
        <p class="font-semibold">- Mohammad Rezaul Karim</p>
      </div>
    </div>

    <!-- WHAT WE LOVE? -->
    <div class=""> 
      <div class="p-12 md:p-16 xl:p-20 md:px-40 lg:px-44 xl:px-64 text-center">
        <p class="border-t-2 border-gray-400 pt-4"></p>
        <div class="lg:px-16 xl:px-32">
          <p>As a professionally trained photographer and creative visual artist, my job of telling the most beautiful love stories brings me so much fulfillment and joy. I’m hard-working, yet light-hearted. I love music, movies and most of all, my adorable family. I love luminous light, beautiful architecture and couples who are deeply in love and who care about creating a magical experience for their wedding day.</p>
          <p class="font-medium">-- Mohammad Rezaul Karim</p>
        </div>
        <p class="border-b-2 border-gray-400 pb-4"></p>
      </div>

      <div class="bg-love" v-prlx.mobile.background="{ speed: 0.08 }" :style="{'background-image': 'url(https://theartistapi.bitflex.xyz'+banners.image2+')'}"> 
        <p class="questions">WHAT WE LOVE ?</p>
      </div>

      <div class="p-12 md:p-16 xl:p-20 md:px-40 lg:px-44 xl:px-64 text-center">
        <p class="border-t-2 border-gray-400 pt-4"></p>
        <div class="lg:px-16 xl:px-32">
          <p>We are die-hard, hopeless romantics at heart and, photographers by qualification. We love travelling all across the country to film the most important day of your life. Narrating your wedding story through our lenses is a passion we all share as a team.</p>
        </div>
        <p class="border-b-2 border-gray-400 pb-4"></p>
      </div>
    </div>

    <!-- WHAT WE BELIVE? -->
    <div>
      <div class="bg-belive" v-prlx.mobile.background="{ speed: 0.08 }" :style="{'background-image': 'url(https://theartistapi.bitflex.xyz'+banners.image3+')'}">
        <p class="questions">WHAT WE BELIVE ?</p>
      </div>

      <div class="p-12 md:p-16 xl:p-20 md:px-40 lg:px-44 xl:px-64 text-center">
        <p class="border-t-2 border-gray-400 pt-4"></p>
        <div class="lg:px-16 xl:px-32">
          <p>Images don’t just happen, they’re crafted. Whether it’s being in-the-moment to capture that perfect candid, or saying just the right thing to evoke the ideal reaction, our years of experience have taught us how to navigate all the different aspects of a wedding day so we never miss a moment.</p>
        </div>
        <p class="border-b-2 border-gray-400 pb-4"></p>
      </div>
    </div>

    <!-- WHAT WE DO? -->
    <div>
      <div class="bg-do" v-prlx.mobile.background="{ speed: 0.08 }" :style="{'background-image': 'url(https://theartistapi.bitflex.xyz'+banners.image4+')'}">
        <p class="questions">WHAT WE DO ?</p>
      </div>

      <div class="p-12 md:p-16 xl:p-20 md:px-40 lg:px-44 xl:px-64 text-center">
        <p class="border-t-2 border-gray-400 pt-4"></p>
        <div class="lg:px-16 xl:px-32">
          <p>With over seven years of experience documenting beautiful weddings around the country, you can trust us to never miss those important details, candid's and spontaneous moments.</p>
          <p>You can be sure we’ll direct you effortlessly with a guided approach, to allow for a refined, fine art look that always displays authentic emotion.</p>
        </div>
        <p class="border-b-2 border-gray-400 pb-4"></p>
      </div>
    </div>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-prlx/dist/v-prlx.min.js"></script>
<script>
import { mapState } from "vuex";
import Navbar from "./nav.vue";
import Vue from "vue"
import VuePrlx from 'vue-prlx'

Vue.use(VuePrlx);
export default {
  data() {
    return {
      navToggled: false,
    }
  },

  components: {
    Navbar
  },

  computed: {
    ...mapState ({
      banners: state => state.image.home_banners
    })
  },

  mounted() {
    this.$store.dispatch('image/getHomeBanner')
  },

  methods: {
    toggleNav: function () {
      this.navToggled = !this.navToggled
    },
    closeNav: function () {
      this.navToggled = false
    },
  }
}
</script>

<style scoped>
.navbar {
  overflow: hidden;
  /* position: fixed; */
  /* position: sticky; */
  z-index: 100;
  top: 0;
  width: 60%;
  @apply bg-transparent;
}

.image-size {
  /* background-image: url('../../assets/images/Home/1.jpg'); */
  width: 100vw;
  height: 90vh;
  position: relative;
  background-size: cover;
  background-position: center;
}

.bg-love {
    width: 100%;
    height: 36vh;
    background: fixed center top no-repeat;
    background-size: cover;
    
}

.bg-belive {
  width: 100%;
  height: 36vh;
  background: fixed center top no-repeat;
  background-size: cover;
}

.bg-do {
  width: 100%;
  height: 36vh;
  background: fixed center top no-repeat;
  background-size: cover;
}

.questions {
  @apply text-xl md:text-2xl lg:text-3xl text-slate-200 text-center tracking-widest;
}

@media screen and (max-width: 2000px) {
  .questions {
    @apply pt-40
  }
}

@media screen and (max-width: 1536px) {
  .questions {
    @apply pt-32
  }
}

@media screen and (max-width: 1280px) {
  .questions {
    @apply pt-20
  }

  .bg-love {
    height: 25vh;
    background-size: cover;
  }

  .bg-belive {
    height: 25vh;
    background-size: cover;
    
  }
  .bg-do {
    height: 25vh;
    background-size: cover;
    
  }
}
@media screen and (max-width: 1024px) {
  .questions {
    @apply pt-16
  }

  .bg-love {
    height: 23vh;
    background-size: contain;
  }

  .bg-belive {
    height: 23vh;
    background-size: contain;
  }

  .bg-do {
    height: 23vh;
    background-size: contain;
  }
}

@media screen and (max-width: 900px) {
  .questions {
    @apply pt-16
  }
  .bg-love {
    height: 22vh;
    background-size: contain;
  }

  .bg-belive {
    height: 22vh;
    background-size: contain;
  }

  .bg-do {
    height: 22vh;
    background-size: contain;
  }
}

@media screen and (max-width: 768px) {
  .questions {
    @apply pt-14
  }

  .bg-love {
    height: 20vh;
    background-size: contain;
  }

  .bg-belive {
    height: 20vh;
    background-size: contain;
  }

  .bg-do {
    height: 20vh;
    background-size: contain;
  }
}

@media screen and (max-width: 500px) {
  .questions {
    @apply pt-12
  }

  .bg-love {
    height: 18vh;
    background-size: contain;
  }

  .bg-belive {
    height: 18vh;
    background-size: contain;
  }

  .bg-do {
    height: 18vh;
    background-size: contain;
  }
}

@media screen and (max-width: 390px) {
  .questions {
    @apply pt-10
  }

  .bg-love {
    height: 15vh;
    background-size: contain;
  }

  .bg-belive {
    height: 15vh;
    background-size: contain;
  }

  .bg-do {
    height: 15vh;
    background-size: contain;
  }
}
</style>