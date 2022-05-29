<template>
  <div>
    <Header />
    <Stories />
    <Footer />
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
import Stories from '../../components/Packages/Packages.vue'
import Footer from '../../components/Footer/Footer.vue'

export default {
  components: {
    Header,
    Stories,
    Footer
  }

}
</script>