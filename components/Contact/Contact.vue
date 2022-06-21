<template>
  <div class="bg-orange-50 w-full p-2">

    <!-- top design for CONTACT US -->
    <div class="px-20 md:px-44 lg:px-64 xl:px-80 mb-3">
      <p class="border-t-2 border-gray-400 pt-2 md:pt-3 lg:pt-4"></p>
      <p class="text-center text-xl tracking-widest border-gray-400">CONTACT US</p>
      <p class="border-b-2 border-gray-400 pb-2 md:pb-3 lg:pb-4"></p>
    </div>

    <!-- Mandatory details Form -->
    <div class="team-container pt-4">
        <div>
          <p class="border-b-2 border-gray-400">MANDATORY DETAILS</p>
        </div>

        <div class="py-2">
          <p class="py-2">BRIDE *</p>
          <div class="flex">
            <div class="pr-2 w-full"><InputText type="text" class="w-full" placeholder="First Name" v-model="temp_details.bf_name" /></div>
            <div class="pl-2 w-full"><InputText type="text" class="w-full" placeholder="Last Name" v-model="temp_details.bl_name" /></div>
          </div>
        </div>

        <div class="py-2">
          <p class="py-2">GROOM *</p>
          <div class="flex">
            <div class="pr-2 w-full"><InputText type="text" class="w-full" placeholder="First Name" v-model="temp_details.gf_name" /></div>
            <div class="pl-2 w-full"><InputText type="text" class="w-full" placeholder="Last Name" v-model="temp_details.gl_name" /></div>
          </div>
        </div>
 
        <div class="py-2">
          <p class="py-2">YOUR WEDDING DATES *</p>
          <InputText type="text" class="w-full" v-model="temp_details.wedding_dates" />
        </div>

        <div class="py-2">
          <p class="pt-2">EVENT DETAILS *</p>
          <Textarea class="w-full" v-model="temp_details.event_details" placeholder="What are the tentative events / functions / timings per day" rows="4" cols="30" />
        </div>

        <div class="py-2">
          <p class="py-2">VENUE *</p>
          <InputText type="text" class="w-full" placeholder="Please mention the hotel & the city" v-model="temp_details.vanue" />
        </div>

        <div class="py-2" >
          <p class="py-2">CONTACT NUMBER *</p>
          <InputText type="number" class="w-full" placeholder="Contact Number" v-model="temp_details.c_number" />
        </div>

        <div class="py-2">
          <p class="py-2">YOUR EMAIL *</p>
          <InputText type="text" class="w-full" placeholder="Your Email" v-model="temp_details.email" />
        </div>

        <div class="pt-3">
          <p class="border-b-2 border-gray-400">Now that we have all the mandatory details, we are curious to know your story !!</p>
        </div>

        <div class="py-2"> 
          <p class="py-2">YOUR STORY</p>
          <Textarea class="w-full" v-model="temp_details.story" placeholder="We would love to hear our story, tell us in details - Your first meeting, what do you love about each other etc." rows="4" cols="30" />
        </div>

        <div class="py-2">
          <p class="py-2">YOUR THOUGHTS</p>
          <Textarea class="w-full" v-model="temp_details.thoughts" placeholder="Tell us what you imagine your wedding film to be like? What kind of photos you want? Where you would like to do your pre-wedding shoot?" rows="4" cols="30" />
        </div>

        <div class="flex justify-center mt-5 mb-4">
          <Button @click="submitDetails" label="Submit" class="p-button-rounded p-button-secondary w-32 sm:w-1/4 object-center" />
        </div>
    </div>

    <!-- Team members title -->
    <div class="px-16 md:px-44 lg:px-64 xl:px-80 pt-4 mb-2">
      <p class="border-t-2 border-gray-400 pt-2 md:pt-3 lg:pt-4"></p>
      <p class="text-center text-xl tracking-widest border-gray-400 ">MEET OUR TEAM</p>
      <p class="border-b-2 border-gray-400 pb-2 md:pb-3 lg:pb-4"></p>
    </div>

    <!-- Team members list -->
    <div class="team-container mt-4 mb-10"> 
      <div class="grid grid-cols-2 sm:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-4">
        <div class="h-full" v-for="(team, index) in teams" :key="index">
          <img class="h-44 sm:h-48 md:h-52 lg:h-60 xl:h-64 2xl:h-72 w-full bg-cover" :src="team.img" alt="Image" />
          <div class="text-center p-2">
            <p class="text-slate-700">{{ team.name }}</p>
            <p class="text-sm text-slate-500">{{ team.designation }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';

export default {
  components: {
    InputText,
    Textarea,
    Button,
  },

  data() {
    return {
      temp_details: {},
    }
  },

  methods: {
    submitDetails() {
      this.temp_details = {};
      this.$store.dispatch("saveDetails", this.temp_details);
    }
  },

  mounted() {
    console.log(this.mandatory_details)
  },

  computed: {
    teams() {
      return this.$store.state.teams;
    },
    mandatory_details() {
      return this.$store.state.mandatory_details;
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 2000px) {
  .team-container {
    @apply px-80;
  }
}
@media screen and (max-width: 1280px) {
  .team-container {
    @apply px-52;
  }
}
@media screen and (max-width: 1024px) {
  .team-container {
    @apply px-36;
  }
}
@media screen and (max-width: 768px) {
  .team-container {
    @apply px-20;
  }
}
@media screen and (max-width: 500px) {
  .team-container {
    @apply px-4;
  }
}

</style>