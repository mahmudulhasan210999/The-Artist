<template>
    <div>
        <Header />
        <Details :slug="getDetails()" />
        <Footer />
    </div>
</template>

<script>
import Header from '../../../components/Header/Header.vue'
import Details from '../../../components/Packages/Photography.vue'
import Footer from '../../../components/Footer/Footer.vue'

export default {
    // props: ['detail'],

    components: {
        Header,
        Details,
        Footer
    },
    methods: {
        getDetails() {
        return this.$route.params.id
        }
    },
}
</script>