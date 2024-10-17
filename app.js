let daftarSiswa = ["aruto", "asuke", "Nobita", "Doraemon", "autfi"];



function cek (){
    let jumlah = [];
    for(let i = 0; i<daftarSiswa.length; i++){
        console.log(`${i+1}.${daftarSiswa[i][0]}`);

        if(daftarSiswa[i][0] == "a"){
            jumlah.push(i)
        };
    };
    console.log("\n\n",jumlah.length)
}
cek()

// console.log("\n\n");

// for (let i = 0; i < daftarSiswa.length ; i++ ){
//     console.log(`${i+1}. ${daftarSiswa[i]}` );
// };
// console.log("\n\n");

// for(let index of daftarSiswa){
//     console.log(index);
// };
// console.log("\n\n");

// for(let index in daftarSiswa){
//     console.log(index);
// };


// daftarSiswa[1] = "Minato";

// console.log(daftarSiswa);
