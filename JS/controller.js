/*
ÖDEV:
Bu digital saat asagidaki özellikleri icerecek:
- Saat, dakika, saniye ve milisaniye alanlarini gösterecek
- Saat alanina tiklayinca 12 lik veya 24 lük gösterim arasinda degisecek (AM ve PM)
- Ikinci bir satirda aktüel epoch degeri gösterilecek
- Digital Saat sayfanin sag alt kisminda gösterilecek
- 3. satirda „log“ butonu olacak, bu butona basilinca, butona basilma zamani, butonun alzmtinda olan bir listeye eklenecek.
- Görüntüsel olarak cok iyi bir saat dizayni 
- (optional) Kullanici digital saati sürpkleyip birakmak(drag&drop) süreti ile yeniden konumlandirabilecek.


Ögrenilecek konular:
- „setInterval“ fonksiyonu
- drag&drop yaklasimi
- epoch
*/

/**
 * problem cözümü
 * 1. hangi metodla gosterilecek
 * 2. get hour, minute, second, mili second olumlu geliyor
 * 3. select-box ile 12 ya da 24saat btn secenekli 
 * 4. epoch degeri ????
 * 5. css ile saat sayfanin sag alt kisminda olacak
 * 6. (3. satirda „log“ butonu olacak,...) anlamadim
 * 7. (optional) sürükle birak yöntemi (https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_draganddrop)
 *      ne ise yarayacak anlamadim ??
 * 
 * adimlar
 * 1. html yi yaz (css..)
 * 2. saati sag altt yerlestir
 * 3. select box yerlestir
 * 4.
 * 5. function lari bagla
 * 6. 
 * 
 * 
 * bu gun 
 * saat app yeniden yazdik
 * arada cpu ayni anda nasil calisir, process, dedlock,  slide...
 * app. yazmaya devam jq baglanti,  drag & drop
 */

$(function () {

    $(".zamanButonu").click(function () {
        let currentTime = $(".tarihSaatinput").val() + ": zaman donduruldu";
        let zamanGiris = $(".zamanGris");
        zamanGiris.html(zamanGiris.html() + "\n" + currentTime);
    });
    let hour24 = false;
    console.log("");
    drawTime(hour24);
    drawEpoch();

    let handler = setInterval(function () {
        drawTime(hour24);
        drawEpoch();
    }, 100);

    $('#ampm').click(function(){
        hour24 = !hour24;
    });
    
});
