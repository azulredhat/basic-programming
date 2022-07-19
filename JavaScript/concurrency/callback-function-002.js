/*
============[ CallBack Function ]===================
*/

function cetak(param) {
    console.log(param);
}

const orderCoffee = (callback) => {
    let coffee = null;
    console.log("Sedang membuat kopi, silakan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah jadi!";
        callback(coffee);
    }, 3000);
};

orderCoffee(cetak);

/* output
Sedang membuat kopi, silakan tunggu...
---- setelah 3 detik ----
Kopi sudah jadi!
*/
