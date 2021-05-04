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
      urlUrun: "https://cafeapp-for-django.herokuapp.com/api/urunler/",
      siparisler:[],
      urunler:[],
      deger: "bos"
      };
  },
  methods:{
    hesapla(id){
      switch(id){
        case 1:
          this.deger = "Çay"
          break
        case 2:
          this.deger = "Türk Kahvesi"
          break
        case 4:
          this.deger = "Limonata"
          break
        case 5:
          this.deger = "Cappuccino"
          break
      }
      return this.deger
    },
  },
    created(){
    axios.get(this.urlSiparis).then(response => (this.siparisler = response.data))
    axios.get(this.urlUrun).then(response => (this.urunler = response.data))
    }
}
</script>