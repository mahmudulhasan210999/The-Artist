<template>
  <div class="bg-orange-50 w-full flex flex-col p-2">
    
    <!-- top design -->
    <div class="px-20 md:px-44 lg:px-64 xl:px-80 mb-3">
      <p class="border-t-2 border-gray-400 pt-2 md:pt-3 lg:pt-4"></p>
      <p class="text-center text-xl tracking-widest border-gray-400">IMAGES</p>
      <p class="border-b-2 border-gray-400 pb-2 md:pb-3 lg:pb-4"></p>
    </div>

    <!-- Loop for images -->
    <div class="w-full h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ml-0.5 gap-3 md:gap-4 lg:gap-6 p-3 md:p-6">
      <div v-for="(image, index) in images" :key="index">
        <ImagePreview :src="image.img" alt="Image" preview  />

        <!-- <ImagePreview :src="image.img" alt="Image">
          <template #indicator>
            <preview />
          </template>
        </ImagePreview> -->

      </div>
    </div>
  </div>
</template>

<script>
import ImagePreview from 'primevue/imagepreview';
import { mapState } from "vuex";

export default {
  components: {
    ImagePreview,
  },
  
  computed: {
    ...mapState ({
      images: state => state.image.images
    })
  }
}
</script>