/*
 ===================[   consuming-promises   ]==================
*/

const stock = {
    coffeeBeans: 250,
    water: 1000,
};

const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
    console.log(rejectionReason);
};

const myPromise = new Promise((resolve, reject) => {
    if (stock.coffeeBeans >= 16 && stock.water >= 250) {
        resolve("Stok cukup. Bisa membuat kopi");
    } else {
        reject("Stok tidak cukup");
    }
});

// myPromise.then(handleSuccess, handleFailure);
myPromise.then(handleSuccess).catch(handleFailure);
