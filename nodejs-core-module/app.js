// Core Module
// File System
const fs = require('fs');

// menuliskan string ke file (synchronous)
// try {
//     fs.writeFileSync('data/test.txt', 'Hello World secara Synchronous!');
// } catch (e) {
//     console.log(e);
// }

// menuliskan string ke file (asynchronous)
// fs.writeFile('data/message.txt', "Hello World secara Asynchronous!", (err) => {
//     console.log(err);
// });

// membaca isi file (synchronous)
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);

// membaca isi file (asynchronous)
// fs.readFile('data/message.txt', 'utf-8', (err, data2) => {
//     if (err) throw err;
//     console.log(data2);
// });

// Readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

// rl.question("Siapa nama anda: ", (nama) => {
//     console.log(`Terimakasih ${nama}`);
//     rl.question("Masukkan no HP anda: ", (nohp) => {
//         console.log(`No HP: ${nohp}`);
//         rl.close();
//     });
//     // rl.close();
// });

// Challenge
// Menerima input nama dan nomor HP kemudian dimasukkan ke file JSON

const contact = fs.readFileSync('data/contacts.json', 'utf-8');
let contact_array = JSON.parse(contact);  
rl.question("Masukkan nama anda: ", (nama) => {
    rl.question("Masukkan No HP anda: ", (noHP) => {
        let new_contact = {
            nama,
            noHP
        };

        contact_array.push(new_contact);

        try {
            fs.writeFileSync("data/contacts.json", JSON.stringify(contact_array, null, 4), 'utf-8');
            console.log("Data berhasil disimpan!")
        } catch (e) {
            console.log(e);
        }

        rl.close();
    });
});
