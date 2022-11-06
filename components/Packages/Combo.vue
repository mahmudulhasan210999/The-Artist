<template>
    <!-- details about Packages -->
    <div class="bg-orange-50 w-full pb-10">
        <div v-for="(combo, index) in combos" :key="index"> 
            <div class="text-center pt-2 all" v-if="combo.slug == slug">
                <div class="px-2 md:px-5 lg:px-8">
                    <img class="" :src="host + combo.img" alt="">
                </div>
                <div class="text-center">
                    <p class="text-base lg:text-xl font-medium p-1 pt-4">{{ combo.package_name }}</p>
                    <p class="text-base lg:text-xl font-medium p-1">Price: {{ combo.price }} BDT</p>
                    <p class="text-base lg:text-xl p-1">{{ combo.p_c_qty }}</p>
                    <p class="text-base lg:text-xl p-1">{{ combo.time }}</p>
                    <div v-for="(detail, index) in combo.details" :key="index">
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
            host: "https://api.theartist.com.bd"
        }
    },

    computed: {
        ...mapState ({
            combos: state => state.package.combos
        })
    },

    mounted() {
        this.$store.dispatch('package/getCombos');
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