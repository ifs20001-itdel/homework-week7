var rumus = require('./rumus');

//Persegi panjang adalah bangun datar dua dimensi yang dibentuk oleh dua pasang sisi yang masing-masing sama panjang dan sejajar dengan pasangannya, dan memiliki empat buah sudut yang kesemuanya adalah sudut siku-siku.

var panjang = 20
var lebar = 20

console.log("Persegi Panjang : ")
console.log(`Maka Luas dari Persegi Panjang dengan panjang ${panjang} dan lebar ${lebar} adalah `+ rumus.rumusLuasPersegiPanjang(panjang, lebar))
console.log(`Maka Keliling dari Persegi Panjang dengan panjang ${panjang} dan lebar ${lebar} adalah `+ rumus.rumusKelilingPersegiPanjang(panjang, lebar))


console.log("===============================================")

//Persegi adalah segi empat yang keempat sisinya sama panjang dan keempat sudutnya siku-siku atau 90°

var sisi = 10
console.log("Persegi : ")
console.log(`Maka Luas dari Persegi dengan panjang Sisi ${sisi} adalah `+ rumus.rumusLuasPersegi(sisi))
console.log(`Maka Keliling dari Persegi dengan panjang Sisi ${sisi} adalah `+ rumus.rumusKelilingPersegi(sisi))