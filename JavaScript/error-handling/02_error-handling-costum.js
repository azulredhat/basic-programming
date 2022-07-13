/*
=============================== [  Costum Error  ] ==================================
*/

class costumError extends Error {
    constructor(message) {
        super(message);
        this.name = "costumError";
    }
}

// let apiJson = '{ "name" : "Ade Iskandar Zulkarnaen", "age" : 22}';
let apiJson = '{ "name" : "Ade Iskandar Zulkarnaen"}';
try {
    let user = JSON.parse(apiJson);
    if (!user.name) {
        throw new costumError("'name' is required");
    }
    if (!user.age) {
        throw new costumError("'age' is required");
    }
    console.log(user.name);
    console.log(user.age);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error : ${error.message}`);
    } else if (error instanceof costumError) {
        console.log(`Invalid data : ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(`Detail error : ${error.stack}`);
    }
}
