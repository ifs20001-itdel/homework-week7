//Buat sebuah module di NodeJS untuk menghitung rumus luas dan keliling dari
// persegi dan persegi panjang. Setelah membuat module, panggil di dalam file soal1.js

//Persegi panjang adalah bangun datar dua dimensi yang dibentuk oleh dua pasang sisi yang masing-masing sama panjang dan sejajar dengan pasangannya, dan memiliki empat buah sudut yang kesemuanya adalah sudut siku-siku.


exports.rumusLuasPersegiPanjang = function(panjang, lebar){
    return panjang * lebar;
}

exports.rumusKelilingPersegiPanjang = function(panjang, lebar){
    return 2*panjang + 2*lebar
}



//Persegi adalah segi empat yang keempat sisinya sama panjang dan keempat sudutnya siku-siku atau 90°

exports.rumusLuasPersegi = (sisi)=>{
    return sisi * sisi
}

exports.rumusKelilingPersegi = (sisi)=>{
    return 4 * sisi
}