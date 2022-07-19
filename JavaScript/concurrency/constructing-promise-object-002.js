/*
 ===================[  constructing promise object ]==================
*/

const coffeePromise = new Promise((resolve, reject) => {
    const isCoffeeMakerReady = true;
    if (isCoffeeMakerReady) {
        resolve("Kopi berhasil dibuat");
    } else {
        reject("Mesin kopi tidak bisa digunakan");
    }
});

console.log(coffeePromise);
