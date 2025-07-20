// Immediately Invoked Function Expression ( IIFE )


(function coffee(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// first () = function definition, second () = execution call


// we used iife  to create a private scope for variables and functions, preventing them from polluting the global namespace


((name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`)
} )('Achyut')
