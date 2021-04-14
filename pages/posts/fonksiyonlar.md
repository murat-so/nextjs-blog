---
title: 'Swift Fonksiyonlar'
date: '2021-04-14'
category: 'development'
cover_photo: 'https://miro.medium.com/max/880/1*GAe8KcJzh1JwhtgUoHpYSg.png'
---

### Fonksiyon nedir? 
Yazılımda Fonksiyon, gerçekleştirilecek işlemleri tanımlayan bir ifade grubudur. Bu ifade grubu girdileri alır, işler ve bunun sonucunda bir çıktı verir. Fonksiyonların tercih edilme sebebi kodun tekrar kullanılabilirliğini sağlamaktır.

### Swift 5.4 dilinde Fonksiyon kullanımı 

Swift dilinde fonksiyonları tanımlarken func ifadesini kullanırız. Ardından fonksiyon adını belirleriz. Parantez açıp kapatırız. Ve fonksiyona ait ifadeleri yazmak için süslü parantez açıp kapatırız.

```swift
func FonksiyonAdi(){
	// ifadeler
}
```

Fonksiyonu çağırmak için ise fonksiyonun adını yazıp parantez açıp kapatırız.
```swift
FonksiyonAdi()
```
Şimdi bu öğrendiklerimizle basit bir örnek yapalım. Merhaba() yazdığımızda ekrana bir karşılama mesajı yazdıralım.   
```swift
func Merhaba(){
	print("Merhaba, Nasılsın?")
	print("Umarım güzel bir geçiriyorsundur.")
}
Merhaba()
```
Bu şekilde ekrana karşılama mesajını yazdırdık. Peki biz programın bizi ismimizle karşılamasını istiyorsak ne yapmamız gerekiyor? Bu durumda fonksiyona ismimizi içeren bir parametre göndermemiz gerekiyor.
```swift
func Merhaba(isim: String){
	// ifadeler
} 
Merhaba(isim: "Murat")
```
Fonksiyonu tanımlarken parantez içerisinde parametre adı ve parametrenin türünü yazarız. Fonksiyonu çağırırken ise parantez içerisinde parametre adı ve fonksiyona göndermek istediğimiz değeri gireriz. Şimdi programımızı tamamlayalım.
```swift
func Merhaba(isim: String){
		print("Merhaba \(isim), Nasılsın?")
		print("Umarım güzel bir gün geçiriyorsundur.")
}
Merhaba(isim: “Murat”) 
```

Programımızın çıktısı aşağıdaki gibi olacaktır: 
```html
Merhaba Murat, Nasılsın?
Umarım güzel bir gün geçiriyorsundur.
```
