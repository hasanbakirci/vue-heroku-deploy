<template>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Ürün</th>
      <th scope="col">Fiyat</th>
      <th scope="col">Satın alma tarihi</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(urun,index) in siparisler" :key="index">
      <th scope="row">{{index+1}}</th>
      <td>{{urun.urun}}</td>
      <td>{{urun.toplam_fiyat}} ₺</td>
      <td>{{urun.olusturma_tarihi}}</td>
    </tr>
  </tbody>
</table>
</template>
<script>
import axios from 'axios';
export default {
    data(){
    return { 
      urlSiparis: "https://cafeapp-for-django.herokuapp.com/api/siparisler/",
      siparisler:[],
      };
  },
    created(){
    axios.get(this.urlSiparis).then(response => (this.siparisler = response.data))
    }
}
</script>