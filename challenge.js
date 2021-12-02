// here we are going to break down a coding challenge step by step 






// Step 1 Atriculate the problem and put it into human format:

// is translates to the equal sign. = 
// if is also a good keyword

    // A kids fruit counting games needs functionality. 
    // I need this program to add the number of fruits the user provided at any one time and display that number. 
    // If the number is not provided give him a messgae that tells him no fruit have been added yet.









// Step 2 Iterate and Translate: (iteration - psedocode): 

    // A kids fruit counting games needs functionality. 
    // function addFruitNumber(any number of arguments go here, including none)

    // I need this program to add the number of fruits the user provided at any one time and display that number. 
    // add numbers provided by the user(then print total number of fruits)

    // If the number is not provided give him a messgae that tells him no fruit have been added yet.
    // If number = undefined (print message saying no fruits have been added)



// Step 3 Solve with any programming language you choose: 

    function addFruits(){
        let fruitBasket = 0;
        for(let i = 0; i < arguments.length; i++){
            fruitBasket += arguments[i];
        }
        if(isNaN(fruitBasket) || fruitBasket === 0){
            return "No fruit has been added yet!";
        }else{
            return `${fruitBasket} FRUITS HAVE BEEN ADDED!`;
        }
    }

// Step 3.5 Ask For Help! if you need it reach out, or do your research 

// Step 4 Refactor your solution -- if you have time!



