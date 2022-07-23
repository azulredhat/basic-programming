/*
=============================== [  Custom Error : Network Error  ] ==================================
*/

class NetworkError extends Error{
    constructor(message){
        super(message);
        this.name = "ErrorInNetwork";
    }
}

try{
    /* conncted status : true || false */
    const netISP = '{ "ISPname": "TELKOM", "connected" : false }';
    const NetKantor = JSON.parse(netISP);

    if(!NetKantor.connected){
        throw new NetworkError("Jaringan Tidak Terhubung");
    };

    /* 'result' is not defined */
    result;

}catch(error){
    if (error instanceof NetworkError){
        console.log("Error Code    : " + error.name);
        console.log("Error Message : " + error.message);
    }else if(error instanceof SyntaxError) {
        console.log("Error in writing code : " + error.message);
    }else{
        console.log(error.message);
    }
    
}finally {
    console.log("====[ this line will always be executed ]====");
}

