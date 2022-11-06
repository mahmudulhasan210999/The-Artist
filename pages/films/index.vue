<template>
    <div>
        <Header />
        <Films />
        <Footer />
    </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
import Films from '../../components/Films/Films.vue'
import Footer from '../../components/Footer/Footer.vue'

export default {
    components: {
        Header,
        Films,
        Footer
    }
}
</script>