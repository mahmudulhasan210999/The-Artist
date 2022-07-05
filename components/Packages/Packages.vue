<template>
  <div class="bg-orange-50 w-full p-2">

    <!-- top design for PACKAGES -->
    <div class="px-20 md:px-44 lg:px-64 xl:px-80 mb-3">
      <p class="border-t-2 border-gray-400 pt-2 md:pt-3 lg:pt-4"></p>
      <p class="text-center text-xl tracking-widest border-gray-400">PACKAGES</p>
      <p class="border-b-2 border-gray-400 pb-2 md:pb-3 lg:pb-4"></p>
    </div>

    <!-- packages list -->
    <div class="pb-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 justify-center pt-4 button">
        <button @click="photography" class="md:mx-4 lg:mx-28 xl:mx-32 h-8 lg:h-10" :class="[{ 'clicked' : photographyDetails}]">PHOTOGRAPHY</button>
        <button @click="video" class="md:mx-4 lg:mx-28 xl:mx-32 h-8 lg:h-10" :class="[{ 'clicked' : videoDetails}]">CINEMATOGRAPHY</button>
        <button @click="combo" class="md:mx-4 lg:mx-28 xl:mx-32 h-8 lg:h-10" :class="[{ 'clicked' : comboDetails}]">COMBO</button>
      </div>

      <div class="pt-2 md:pt-4">
        <!-- v-if="photographyDetails" -->
        <div v-if="photographyDetails">
          <div class="packages">
            <Carousel :value="photos" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
              <template #item="slotProps">
                <div class="p-3 xl:p-4 w-full h-full">
                  <nuxt-link :to="{ path: '/packages/photography/' + slotProps.data.slug, params: { id: slotProps.data }}">
                    <img class="" :src="slotProps.data.img" alt="Image">
                    <div class="text-center">
                      <p class="p-1 font-medium">{{ slotProps.data.package_name }}</p>
                      <p class="font-medium">Price: {{ slotProps.data.price }} BDT</p>
                    </div>
                  </nuxt-link>
                </div>
              </template>
            </Carousel>
          </div>
        </div>

        <!-- v-if="videoDetails" -->
        <div v-if="videoDetails">
          <div class="packages">
            <Carousel :value="videos" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
              <template #item="slotProps">
                <div class="p-3 xl:p-4 w-full h-full">
                  <nuxt-link :to="{ path: '/packages/cinematography/' + slotProps.data.slug, params: { id: slotProps.data }}">
                    <img class="" :src="slotProps.data.img" alt="Image">
                    <div class="text-center">
                      <p class="p-1 font-medium">{{ slotProps.data.package_name }}</p>
                      <p class="font-medium">Price: {{ slotProps.data.price }} BDT</p>
                    </div>
                  </nuxt-link>
                </div>
              </template>
            </Carousel>
          </div>
        </div>

        <!-- v-if="comboDetails" -->
        <div v-if="comboDetails">
          <div class="packages">
            <Carousel :value="combos" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
              <template #item="slotProps">
                <div class="p-3 xl:p-4 w-full h-full">
                  <nuxt-link :to="{ path: '/packages/combo/' + slotProps.data.slug, params: { id: slotProps.data }}">
                    <img class="" :src="slotProps.data.img" alt="Image">
                    <div class="text-center">
                      <p class="p-1 font-medium">{{ slotProps.data.package_name }}</p>
                      <p class="font-medium">Price: {{ slotProps.data.price }} BDT</p>
                    </div>
                  </nuxt-link>
                </div>
              </template>
            </Carousel>
          </div>
        </div>
      </div>

      <!-- Button for TERMS AND CONDITIONS -->
      <div class="flex justify-center px-10 lg:px-52">
        <button class="p-1 lg:p-2 text-sm lg:text-base hover:text-blue-600 flex" @click="terms">
          <p class="text-amber-400 pr-1">★★</p>
          <p>TERMS AND CONDITIONS</p> 
          <p class="pl-1 font-bold">+</p>
        </button>
      </div>

      <!-- TERMS AND CONDITIONS text -->
      <div v-if="termsAndConditions">
        <div class="px-4 md:px-52 pt-4">
          <div class="md:px-32 lg:px-52 xl:px-72">
            <p class="p-2"><i class="pi pi-arrow-circle-right pr-1" style="font-size: 12px"></i>
            50% of total payment is required in advance for booking & the rest 50% is payable on the day of event.</p>

            <p class="p-2"><i class="pi pi-arrow-circle-right pr-1" style="font-size: 12px"></i>
            Booking money is non-refundable, but may reschedule under special circumstances and on availability.</p>

            <p class="p-2"><i class="pi pi-arrow-circle-right pr-1" style="font-size: 12px"></i>
            We strictly maintain the schedule for couple and portrait photo-shoot, so client is requested at the venue on time.</p>

            <p class="p-2"><i class="pi pi-arrow-circle-right pr-1" style="font-size: 12px"></i>
            After 12:00 a.m. extra charges will be added and client must provide transport facilities.</p>

            <p class="p-2"><i class="pi pi-arrow-circle-right pr-1" style="font-size: 12px"></i>
            Clients themselves have to select the pictures for print and song for the trailer.</p>

            <p class="p-2"><i class="pi pi-arrow-circle-right pr-1" style="font-size: 12px"></i>
            For outside Dhaka clients need to pay 35% extra with package price.</p>

            <p class="p-2"><i class="pi pi-arrow-circle-right pr-1" style="font-size: 12px"></i>
            It may takes around 4 weeks or 28 days to deliver.</p>

            <p class="p-2"><i class="pi pi-arrow-circle-right pr-1" style="font-size: 12px"></i>
            Clients have to collect the DVD & the prints from the office.</p>

            <p class="p-2"><i class="pi pi-arrow-circle-right pr-1" style="font-size: 12px"></i>
            The artist holds the right to display any photograph and video to promote the business in Facebook, advertising media, brochures, magazine articles, websites, sample albums etc.</p>

            <p class="p-2"><i class="pi pi-arrow-circle-right pr-1" style="font-size: 12px"></i>
            Clients will get complementary Drone for cinematography if they book GLITTER and DIAMOND.</p>

            <p class="p-2"><i class="pi pi-arrow-circle-right pr-1" style="font-size: 12px"></i>
            If clients hires us at least for 3 events we will offer an outdoor photo-shoot as gift.</p>
          </div>
        </div>
      </div>
    </div>



    <!-- top design for REVIEWS -->
    <div class="px-20 md:px-44 lg:px-64 xl:px-80 mb-3">
      <p class="border-t-2 border-gray-400 pt-2 md:pt-3 lg:pt-4"></p>
      <p class="text-center text-xl tracking-widest border-gray-400 ">REVIEWS</p>
      <p class="border-b-2 border-gray-400 pb-2 md:pb-3 lg:pb-4"></p>
    </div>

    <!-- Slider for REVIEWS -->
    <div class="packages mb-4">
      <Carousel :value="reviews" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
        <template #item="slotProps">
          <div class="p-3 xl:p-4 w-full h-full">
            <img class="h-76 w-full" :src="host + slotProps.data.img" alt="review-image">
            <div class="text-center">
              <p class="text-xl text-slate-800 p-2">{{ slotProps.data.name }}</p>
              <p class="text-amber-400">★★★★★</p>
              <p class="text-slate-600">{{ slotProps.data.text }}</p>
              <!-- <p class="font-medium text-slate-700 p-1">{{ slotProps.data.sign }}</p> -->
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ImagePreview from 'primevue/imagepreview';
import Button from 'primevue/button';
import Primeicons from 'primeicons/primeicons.css';
import Carousel from 'primevue/carousel';

export default {
  components: {
    ImagePreview,
    Button,
    Primeicons,
    Carousel
  },

  data() {
    return {
      host: "https://theartistapi.bitflex.xyz",
      responsiveOptions: [
			{
				breakpoint: '1024px',
				numVisible: 3,
				numScroll: 3
			},
			{
				breakpoint: '600px',
				numVisible: 2,
				numScroll: 2
			},
			{
				breakpoint: '480px',
				numVisible: 1,
				numScroll: 1
			}
		],

      photographyDetails: true,
      videoDetails: false,
      comboDetails: false,

      potoDetails: false,

      termsAndConditions: false,
    }
  },

  methods: {
    photography() {
      this.videoDetails = false;
      this.comboDetails = false;
      this.photographyDetails = true;
    },
    video() {
      this.photographyDetails = false;
      this.comboDetails = false;
      this.videoDetails = true;
    },
    combo() {
      this.photographyDetails = false;
      this.videoDetails = false;
      this.comboDetails = true;
    },
    touch() {
      this.potoDetails = this.potoDetails;
      this.potoDetails = !this.potoDetails;
    },
    terms() {
      this.termsAndConditions = !this.termsAndConditions;
    },
  },

  computed: {
    ...mapState ({
      photos: state => state.package.photos
    }),
    ...mapState ({
      videos: state => state.package.videos
    }),
    ...mapState ({
      combos: state => state.package.combos
    }),

    ...mapState ({
      reviews: state => state.review.reviews
    }),
  },

  mounted() {
    this.$store.dispatch('review/getReviews')
  },
}
</script>

<style scoped>
.clicked {
  @apply text-white bg-neutral-600;
}

/* Btton paddig */
@media screen and (max-width: 2000px) {
  .button {
    @apply px-64
  }
}
@media screen and (max-width: 1536px) {
  .button {
    @apply px-52
  }
}
@media screen and (max-width: 1280px) {
  .button {
    @apply px-44
  }
}
@media screen and (max-width: 1024px) {
  .button {
    @apply px-32
  }
}
@media screen and (max-width: 768px) {
  .button {
    @apply px-28
  }
}
@media screen and (max-width: 500px) {
  .button {
    @apply px-24
  }
}
@media screen and (max-width: 390px) { 
  .button {
    @apply px-20
  }
}

/* Packages paddig */
@media screen and (max-width: 2000px) {
  .packages {
    @apply px-64
  }
}
@media screen and (max-width: 1536px) {
  .packages {
    @apply px-52
  }
}
@media screen and (max-width: 1280px) {
  .packages {
    @apply px-44
  }
}
@media screen and (max-width: 1024px) {
  .packages {
    @apply px-32
  }
}
@media screen and (max-width: 768px) {
  .packages {
    @apply px-12
  }
}
@media screen and (max-width: 500px) {
  .packages {
    @apply px-3.5
  }
}
@media screen and (max-width: 390px) { 
  .packages {
    @apply px-0
  }
}
</style>