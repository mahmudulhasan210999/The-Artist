<template>
  <!-- details about Packages -->
  <div class="bg-orange-50 w-full pb-10">
    <div v-for="(video, index) in videos" :key="index">
      <div class="text-center pt-2 all" v-if="video.slug == slug">
        <div class="px-2 md:px-5 lg:px-8">
          <img class="" :src="host + video.img" alt="">
        </div>  
        <div class="text-center">
          <p class="text-base lg:text-xl font-medium p-1 pt-4">{{ video.package_name }}</p>
          <p class="text-base lg:text-xl font-medium p-1">Price: {{ video.price }} BDT</p>
          <p class="text-base lg:text-xl p-1">{{ video.cinematographer }}</p>
          <p class="text-base lg:text-xl p-1">{{ video.time }}</p>
          <div v-for="(detail, index) in video.details" :key="index">
            <p class="text-base lg:text-xl p-1">{{ detail.detail }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ['slug'],

  data() {
    return {
      host: "https://theartistapi.bitflex.xyz"
    }
  },

  computed: {
    ...mapState ({
      videos: state => state.package.videos
    })
  },

  mounted() {
    this.$store.dispatch('package/getVideos');
  },
}
</script>

<style scoped>
@media screen and (max-width: 2000px) {
  .all {
    @apply px-96
  }
}
@media screen and (max-width: 1536px) {
  .all {
    @apply px-80
  }
}
@media screen and (max-width: 1280px) {
  .all {
    @apply px-60
  }
}
@media screen and (max-width: 1024px) {
  .all {
    @apply px-36
  }
}
@media screen and (max-width: 768px) {
  .all {
    @apply px-28
  }
}
@media screen and (max-width: 500px) {
  .all {
    @apply px-6
  }
}
@media screen and (max-width: 390px) { 
  .all {
    @apply px-6
  }
}
</style>