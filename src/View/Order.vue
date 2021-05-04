<template>
<div class="container">
<div class="col-md-12">
  <Header/>
  <hr>
  <Table/>
  <hr>
  <Footer/>
</div>
  </div>
</template>

<script>
import Table from '../components/Table.vue'
import Footer from '../components/Common/Footer.vue'
import Header from '../components/Common/Header.vue'

export default {
  name: 'Order',
  components: {
    Table,
    Footer,
    Header,
  }

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
