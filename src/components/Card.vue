<template>
      <div class="row">
        <h2 class="text-center"> Bakiye:  {{money}} ₺</h2>
        <div class="col-lg-3" v-for="(urun,index) in urunler" :key="index">
          <div class="card mb-4 shadow-sm">
            <img
              v-bind:src=urun.resim
              class="card-img-top"
              alt="Sample Movie"
              style="height : 250px"
            />
            <div class="card-body">
              <h5 class="card-title">{{urun.isim}}</h5>
              <p class="card-text">{{ urun.fiyat}} ₺</p>
              <div class="align-items-center">
                <button
                  class="btn btn-primary"
                  v-on:click="calculate(urun)"
                >
                  Satın Al
                </button>
                <h2>
                  <span class="badge badge-info">{movie.rating}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return { 
      money: Math.floor(Math.random() * (11 - 2) + 2),
      url: "https://cafeapp-for-django.herokuapp.com/api/urunler/",
      urunler:[],
      siparisler:[]
      };
  },
  methods:{
    calculate(urun){
      if(this.money >= urun.fiyat){
        console.log(urun.id," /",urun.isim,"/",urun.fiyat)
        this.money = this.money - urun.fiyat
        this.siparisler.push(urun)
        axios({
          method: 'post',
          url: 'https://cafeapp-for-django.herokuapp.com/api/siparisler/',
          data:{
            adet: 1,
            toplam_fiyat: urun.fiyat,
            urun: urun.id
          }
        })
      }
      this.$emit("data",this.siparisler)
    }
  },
  created(){
    axios.get(this.url).then(response => (this.urunler = response.data))
    }

}
</script>
