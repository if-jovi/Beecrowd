/*try{
    try{
        throw new Error("oops");

    }
    finally{
        console.log("finally");
    }
}
catch (ex){
    console.error("outer",ex.message);
}*/
//resultado
//"finally"
//"outer" "oops"

try{
    try{
        throw new Error("oops");
    }
    catch(ex){
        console.error("inner", ex.message);
    }
    finally{
        console.log("finally");
    }
}
catch (ex){
    console.error("outer",ex.message);
}
//resultado
//"inner" "oops"
// "finally"


/*
try{
    try{
        throw new Error("oops");
    }
    catch(ex){
        console.error("inner", ex.message);
        throw ex;
    }
    finally{
        console.log("finally");
    }
}
catch (ex){
    console.error("outer",ex.message);
}
*/
//resultado:
//"inner" "oops"
//"finally"
// "outer" "oops"