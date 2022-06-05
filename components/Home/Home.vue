<template>
  <div class="bg-orange-50 w-full flex flex-col">
    <!-- top design with Header -->
    <div class="w-full image-size">
      <div class="w-full navbar">
        <!-- main header -->
        <div class="hidden md:flex justify-between h-36 p-2 md:mx-10 lg:mx-36 xl:mx-64">
          <div class="pt-6">
            <nuxt-link class="text-white" :to="'/Packages'">PACKAGES</nuxt-link>
          </div>
          <div class="pt-6">
            <nuxt-link class="text-white" :to="'/Images'">IMAGES</nuxt-link>
          </div>
          <div>
            <nuxt-link class="text-lg font-medium" :to="'/'"><img class="h-32 w-62" src="../../assets/images/Header/header1.png" alt="HOME"></nuxt-link>
          </div>
          <div class="pt-6">
            <nuxt-link class="text-white" :to="'/Films'">FILMS</nuxt-link>
          </div>
          <div class="pt-6">
            <nuxt-link class="text-white" :to="'/Contact'">CONTACT</nuxt-link>
          </div>
        </div>

        <!-- For Responsive Dimensions -->
        <div class="flex justify-between md:hidden">
          <div class="pl-4">
            <nuxt-link class="text-lg font-medium" :to="'/'"><img class="h-12 w-44" src="../../assets/images/Header/header1.png" alt="HOME"></nuxt-link>
          </div>
          <div class="pr-5 pt-3">
            <div class="border-2 rounded-lg border-white bg-white">
              <i @click="toggleNav" class="pi pi-bars p-1"></i>
              <Navbar v-if="navToggled" @navClosed="closeNav"/>
            </div>
          </div>
        </div>
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

      <div class="bg-love">
        <p class="text-xl md:text-2xl lg:text-3xl text-slate-200 text-center tracking-widest questions">WHAT WE LOVE ?</p>
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
      <div class="bg-belive">
        <p class="text-xl md:text-2xl lg:text-3xl text-slate-200 text-center tracking-widest questions">WHAT WE BELIVE ?</p>
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
      <div class="bg-do">
        <p class="text-xl md:text-2xl lg:text-3xl text-slate-200 text-center tracking-widest questions">WHAT WE DO ?</p>
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

<script>
import Navbar from "./nav.vue";

export default {
  data() {
    return {
      navToggled: false,
    }
  },
  components: {
    Navbar
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
  @apply bg-transparent
}

.image-size {
  background-image: url('../../assets/images/Home/1.jpg');
  position: relative;
  background-size: cover;
  width: 100vw;
}
.bg-love {
  background-image: url('../../assets/images/Home/2.jpg');
  /* background-position: center; */
  position: relative;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

.bg-belive {
  background-image: url('../../assets/images/Home/3.jpg');
  position: relative;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
.bg-do {
  background-image: url('../../assets/images/Home/4.jpg');
  position: relative;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

@media screen and (max-width: 2000px) {
  .image-size {
    height: 95vh;
  }
  .questions {
    @apply pt-40
  }
  .bg-love {
    height: 36vh;
    margin-top: auto;
    margin-bottom: auto;
  }
  .bg-belive {
    height: 36vh;
    margin-top: auto;
    margin-bottom: auto;
  }
  .bg-do {
    height: 36vh;
    margin-top: auto;
    margin-bottom: auto;
  }
}

@media screen and (max-width: 1536px) {
  .image-size {
    height: 95vh;
  }
  .questions {
    @apply pt-32
  }
  .bg-love {
    height: 36vh;
    margin-top: auto;
    margin-bottom: auto;
  }
  .bg-belive {
    height: 36vh;
    margin-top: auto;
    margin-bottom: auto;
  }
  .bg-do {
    height: 36vh;
    margin-top: auto;
    margin-bottom: auto;
  }
}
@media screen and (max-width: 1280px) {
  .image-size {
    height: 62vh;
  }
  .questions {
    @apply pt-20
  }
  .bg-love {
    height: 25vh;
    margin-top: auto;
    margin-bottom: auto;
  }
  .bg-belive {
    height: 25vh;
    margin-top: auto;
    margin-bottom: auto;
  }
  .bg-do {
    height: 25vh;
    margin-top: auto;
    margin-bottom: auto;
  }
}
@media screen and (max-width: 1024px) {
  .image-size {
    height: 55vh;
  }
  .questions {
    @apply pt-16
  }
  .bg-love {
    height: 23vh;
    margin-top: auto;
    margin-bottom: auto;
  }
  .bg-belive {
    height: 23vh;
    margin-top: auto;
    margin-bottom: auto;
  }
  .bg-do {
    height: 23vh;
    margin-top: auto;
    margin-bottom: auto;
  }
}

@media screen and (max-width: 900px) {
  .image-size {
    height: 45vh;
  }
  .questions {
    @apply pt-16
  }
  .bg-love {
    height: 22vh;
    background-size: contain;
    margin-top: auto;
    margin-bottom: auto;
  }
  .bg-belive {
    height: 22vh;
    background-size: contain;
    margin-top: auto;
    margin-bottom: auto;
  }
  .bg-do {
    height: 22vh;
    background-size: contain;
    margin-top: auto;
    margin-bottom: auto;
  }
}

@media screen and (max-width: 768px) {
  .image-size {
    height: 35vh;
  }
  .questions {
    @apply pt-14
  }
  .bg-love {
    height: 20vh;
    background-size: contain;
    margin-top: auto;
    margin-bottom: auto;
  }
  .bg-belive {
    height: 20vh;
    background-size: contain;
    margin-top: auto;
    margin-bottom: auto;
  }
  .bg-do {
    height: 20vh;
    background-size: contain;
    margin-top: auto;
    margin-bottom: auto;
  }
}

@media screen and (max-width: 500px) {
  .image-size {
    height: 28vh;
  }
  .questions {
    @apply pt-12
  }
  .bg-love {
    height: 18vh;
    background-size: contain;
    margin-top: auto;
    margin-bottom: auto;
  }
  .bg-belive {
    height: 18vh;
    background-size: contain;
    margin-top: auto;
    margin-bottom: auto;
  }
  .bg-do {
    height: 18vh;
    background-size: contain;
    margin-top: auto;
    margin-bottom: auto;
  }
}

@media screen and (max-width: 390px) {
  .image-size {
    height: 25vh;
  }
  .questions {
    @apply pt-10
  }
  .bg-love {
    height: 15vh;
    background-size: contain;
    margin-top: auto;
    margin-bottom: auto;
  }
  .bg-belive {
    height: 15vh;
    background-size: contain;
    margin-top: auto;
    margin-bottom: auto;
  }
  .bg-do {
    height: 15vh;
    background-size: contain;
    margin-top: auto;
    margin-bottom: auto;
  }
}
</style>