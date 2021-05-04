<template>
    <div class="container">
        <div class="col-sm-3">
            <h6 v-for="(urun,index) in data" :key="index"> {{urun.isim}} satın alındı. -{{urun.fiyat}} ₺</h6>
            
        </div>
        <div class="col-sm-12">
            
            <h5 v-if="data.length === 0"></h5>   
            <h5 v-else><hr>Harcanan toplam miktar: {{toplamFiyatHesapla}} ₺</h5>   
        </div>
    </div>
</template>
<script>
export default {
    props:["data"],
    data(){
        return{
            toplam : 0
        }},
    computed:{
        toplamFiyatHesapla(){
            let total = 0
            this.data.forEach(element => {
                total += element.fiyat
            });
            return total
        }
    },
    }
</script>