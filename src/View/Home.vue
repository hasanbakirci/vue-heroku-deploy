<template>
<div class="container">
<div class="col-md-12">
  <Header/>
  <hr>
  <Card @data="childData= $event"/>

  <Buy :data="childData"/>
  <hr>
  <Footer/>
</div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Buy from '../components/Buy.vue'
import Footer from '../components/Common/Footer.vue'
import Header from '../components/Common/Header.vue'

export default {
  name: 'Home',
  components: {
    Card,
    Buy,
    Footer,
    Header,
  },
  data(){
    return{
      childData : []
    }
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
