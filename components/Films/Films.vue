<template>
  <div class="bg-orange-50 w-full flex flex-col p-2">
    
    <!-- top design for TRAILERS -->
    <div class="px-20 md:px-44 lg:px-64 xl:px-80">
      <p class="border-t-2 border-gray-400 pt-2 md:pt-3 lg:pt-4"></p>
      <p class="text-center text-xl tracking-widest border-gray-400">TRAILERS</p>
      <p class="border-b-2 border-gray-400 pb-2 md:pb-3 lg:pb-4"></p>
    </div>

    <!-- YouTube links for trailers -->
    <div class="md:grid md:grid-cols-2 lg:grid-cols-3 md:py-3 lg:py-4 trailers my-3">
      <div class="p-2" v-for="(film, index) in films" :key="index">
        <iframe class="w-full md:h-40" :src="'https://www.youtube.com/embed/' + film.vid" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div> 
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState ({
      films: state => state.film.films
    })
  },

  mounted() {
    this.$store.dispatch('film/getFilms')
  }
}
</script>

<style scoped>
@media screen and (max-width: 2000px) {
  .trailers {
    @apply px-96
  }
}
@media screen and (max-width: 1536px) {
  .trailers {
    @apply px-72
  }
}
@media screen and (max-width: 1280px) {
  .trailers {
    @apply px-64
  }
}
@media screen and (max-width: 1024px) {
  .trailers {
    @apply px-44
  }
}
@media screen and (max-width: 768px) {
  .trailers {
    @apply px-20
  }
}
@media screen and (max-width: 500px) {
  .trailers {
    @apply px-6
  }
}
@media screen and (max-width: 390px) { 
  .trailers {
    @apply px-3
  }
}
</style>