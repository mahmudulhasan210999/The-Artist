<template>
    <div class="bg-color w-full flex flex-col">
        <div class="md:flex md:justify-between md:mx-10 lg:mx-20 xl:mx-48 py-3 md:py-5 lg:py-10 xl:py-16 md:px-3 lg:px-6">
            <!-- left -->
            <div class="md:w-72 text-center">
                <div class="w-full flex justify-center">
                    <nuxt-link class="" :to="'/'">
                        <img class="h-20 w-52 lg:h-24 lg:w-60" src="../../assets/images/Header/header2.png" alt="logo">
                    </nuxt-link>
                </div>
                <p class="">House -76, Road - 14, Sector - 11</p>
                <p>Uttara, Dhaka 1230</p>
            </div>

            <!-- middle -->
            <div class="mt-4 md:mt-0 md:w-72 flex flex-col items-center">
                <p class="py-2 md:py-4">FIND US ELSEWHERE</p>
                <div class="flex">
                    <div>
                        <a target="_blank" href="https://www.facebook.com/theartist.com.bd/"><i class="pi pi-facebook" style="font-size: 27px; color: rgb(66 103 178); this.style.hover {color: rgb(255 0 0)"></i></a>
                    </div>
                    <div class="px-4">
                        <a target="_blank" href="https://www.youtube.com/channel/UCcCqoaZd8DYCwM9v8cG5ZYA"><i class="pi pi-youtube" style="font-size: 27px; color: rgb(255 0 0)"></i></a>
                    </div>
                    <div class="pr-4">
                        <a target="_blank" href="https://www.instagram.com/theartist.bd/"><i class="pi pi-instagram" style="font-size: 27px; color: rgb(225, 48, 108)"></i></a>
                    </div>
                    <div>
                        <a target="_blank" href="https://mobile.twitter.com/theartistbd/"><i class="pi pi-twitter" style="font-size: 27px; color: rgb(0, 172, 238)"></i></a>
                    </div>
                </div>
            </div>

            <!-- right -->
            <div class="mt-4 md:mt-0 md:w-72 text-center">
                <p class="py-2 md:py-4">GET IN TOUCH</p>
                <p>theartist.bd.info@gmail.com</p>
                <p>+8801707680865</p>
                <p>+8801707680854</p>
            </div>
        </div>

        <!-- Copyright bottom -->
        <div>
            <p class="text-center sm:text-sm p-4 text-gray-600">© Copyright 2022 <a class="text-blue-600 font-medium" target="_blank" href="https://www.facebook.com/catchbitflex/">Bitflex</a> | <a class="text-blue-600 font-medium" target="_blank" href="https://www.facebook.com/catchbangladesh">Catch Bangladesh</a> All Rights Reserved.</p>
        </div>
    </div>
</template>

<script>
import Primeicons from 'primeicons/primeicons.css';

export default {
    components: {
        Primeicons
    }
}
</script>

<style scoped>
    .bg-color {
        background-color: #f7e9d8;
    }
</style>