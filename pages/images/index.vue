<template>
  <div>
    <Header />
    <Images />
    <Footer />
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
import Images from '../../components/Images/Images.vue'
import Footer from '../../components/Footer/Footer.vue'

export default {
  components: {
    Header,
    Images,
    Footer
  }

}
</script>