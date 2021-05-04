**Bu proje [cafeapp django](https://github.com/hasanbakirci/django-heroku-deploy) reposunun frontend kısmıdır.**

![Screenshot_7](https://user-images.githubusercontent.com/44363093/116947444-79431780-ac85-11eb-987c-c61dbf55a2d7.jpg)
# Vuejs projesini heroku ile yayınlama
Vue projesi oluşturmak için;
`
vue create projeismi
`
`npm start` ile proje çalıştırılabilir.

Proje dosyası içerisine `static.json` adında dosya oluşturalım içerisini alttaki gibi değiştirelim;
`
{  
"root": "dist",  
"clean_urls": true,  
"routes": {  
"/**": "index.html"  
}  
}
`

Projemizi build edelim;
`
npm run build
`

Heroku'ya giriş yapalım `heroku login` ardından `heroku create` ile heroku projesi oluşturalım.
projemizi push etmeden önce heroku'ya bir nodejs dosyası yüklüceğimizi belirtelim;

`
heroku buildpacks:add heroku/nodejs  
heroku buildpacks:add [https://github.com/heroku/heroku-buildpack-static](https://github.com/heroku/heroku-buildpack-static)
`
Ve yükleme işlemini başlatalım `git push heroku master`
______________
**Güncelleme işlemleri**
Heroku üzerindeki uygulamalar `heroku apps` ile listelenir. 
Uygulama üzerine yerleşmek için `heroku git:remote -a projeismi`
Projede güncelleme yaptıktan sonra`npm build` ve `git add . && git commit -m "Heroku config"` komutları ile git'e yüklenip, commit mesajı verebiliriz. Ardından tekrar `git push heroku master` ile güncelleme işlemlerini yapabiliriz.

