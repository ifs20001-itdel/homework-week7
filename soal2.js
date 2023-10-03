const fs = require('fs');

// Membaca file homework.log
fs.readFile('homework.log', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
    }

    // Menuliskan data yang dibaca ke file log.txt
    fs.writeFile('log.txt', data, (err) => {
        if (err) {
            console.error(err);
        }
        console.log('Data berhasil ditulis ke log.txt');
    });
});
