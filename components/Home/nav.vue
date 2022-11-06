<template>
    <div class="flex flex-col">
        <div class=" navbar"> 
            <div class="nav-cross">
                <i @click="$emit('navClosed')" class="pi pi-times py-2.5 mx-4 px-3"></i>
            </div>

            <div class="p-4">
                <div>
                    <nuxt-link class="font-medium" :to="'/'">HOME</nuxt-link>
                </div>
                <div class="mt-4">
                    <nuxt-link class="font-medium" :to="'/packages'">PACKAGES</nuxt-link>
                </div>
                <div class="mt-4">
                    <nuxt-link class="font-medium" :to="'/images'">IMAGES</nuxt-link>
                </div>
                <div class="mt-4">
                    <nuxt-link class="font-medium" :to="'/films'">FILMS</nuxt-link>
                </div>
                <div class="mt-4">
                    <nuxt-link class="font-medium" :to="'/contact'">CONTACT</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.navbar {
    z-index: 999;
    width: 60vw;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    @apply shadow-lg bg-white;
}
.nav-cross { 
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    align-self: flex-start;
    padding-top: 3%;
    padding-right: 0%;
    margin-bottom: 4%;
    border-bottom-width: 2px;
}
</style>