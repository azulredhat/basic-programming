/* 
============================= [ error handling ] =========================================
*/

// try-catch
try {
    // kode
} catch (error) {
    // error handling
}

// try-catch-finally
try {
    // kode
} catch (error) {
    // error handling
} finally {
    // will still be executed
}

/*

============================= [  Throwing Errors  ] =====================================
    
*/
let apiJson = '{ "name" : "Ade Iskandar Zulkarnaen", "married": false }';
try {
    let user = JSON.parse(apiJson);
    if (!user.age) {
        throw new SyntaxError("'age' is required");
    }
    console.log(user.name);
    console.log(typeof user.married);
} catch (error) {
    console.log(`JSON Error: ${error.message}`);
}

/*

=========================== [  Throwing Errors : instanceof  ] ============================
    
*/
let apiJson2 = '{ "name" : "Ade Iskandar Zulkarnaen", "age" :22, "married": false }';
try {
    let user = JSON.parse(apiJson2);
    if (!user.age) {
        throw new SyntaxError("'age' is required");
    }
    hasilHitung; // undefined
    console.log(user.name);
    console.log(typeof user.married);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log("Pesan error : ", error.message);
    } else {
        console.log("Detail error: ", error.stack);
    }
}
