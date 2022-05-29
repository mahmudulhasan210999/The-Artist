<template>
  <div class="bg-orange-50 w-full navbar">
    <!-- main header -->
    <div class="hidden md:flex justify-between h-36 p-2 md:mx-10 lg:mx-36 xl:mx-64">
      <div class="pt-6">
        <nuxt-link class="hover:text-red-400" :to="'/Packages'">PACKAGES</nuxt-link>
      </div>
      <div class="pt-6">
        <nuxt-link class="hover:text-red-400" :to="'/Images'">IMAGES</nuxt-link>
      </div>
      <div>
        <nuxt-link class="" :to="'/'"><img class="h-32 w-62" src="../../assets/images/Header/header2.png" alt="HOME"></nuxt-link>
      </div>
      <div class="pt-6">
        <nuxt-link class="hover:text-red-400" :to="'/Films'">FILMS</nuxt-link>
      </div>
      <div class="pt-6">
        <nuxt-link class="hover:text-red-400" :to="'/Contact'">CONTACT</nuxt-link>
      </div>
    </div>

    <!-- For Responsive Dimensions -->
    <div class="flex justify-between md:hidden">
      <div class="pl-4">
        <nuxt-link class="text-lg font-medium" :to="'/'"><img class="h-12 w-44" src="../../assets/images/Header/header2.png" alt="HOME"></nuxt-link>
      </div>
      <div class="pr-5 pt-3">
        <div class="border-2 rounded-lg border-white bg-white">
          <i @click="toggleNav" class="pi pi-bars p-1"></i>
          <Navbar v-if="navToggled" @navClosed="closeNav"/>
        </div>
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
  /* @apply bg-transparent */
}
</style>