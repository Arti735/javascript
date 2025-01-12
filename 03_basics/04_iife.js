// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //name iife
    console.log(`DB CONNECTED`);
})();

(  (name)=> {
    //unnamed iife
    console.log(`DB CONNECTED Two ${name}`)
} )()