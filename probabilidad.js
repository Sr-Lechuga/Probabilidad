function calculateProbabilities(integerArray) {
    /* Probability is all favorable cases divided all possible cases, to make it percentual gets mutiplicated by 100 

        Precondition: Arreglo de enteros (pueden haber repetidos) 
    
       */
    const PROBABILITY_VALUE = 1;

    const totalCases = integerArray.length;
    const repetitions = {};
    
    if (totalCases == 0) 
        return "Empty array, it isn't possible to calculate probability";
    
    /* Count repetitions of each number, and save them in an object number : amountOfRepetitions
        if none is defined for a number, starts at 1.*/
    integerArray.forEach(number => (repetitions[number] = repetitions[number] + 1 || 1));
    
    /* Define a map, with probability for each number */
    const probabilities = new Map();
    Object.keys(repetitions).forEach(number => {
        const favorableCases = repetitions[number];
        const probability = favorableCases/totalCases*100;
    
        probabilities.set(number, probability);
    });
    
    /* Probability is in the second position of the array in each map entry, so it's acceces with const variable PROBABILITY_VALUE */
    const sortedProbabilities = new Map([...probabilities.entries()].sort((j, l) => j[PROBABILITY_VALUE] - l[PROBABILITY_VALUE]));
    
    /* Key value for map object represent each number (without repeat them)  */
    return Array.from(sortedProbabilities.keys());
}

// Generate 100 random numbers to test
const numeros = [];
for (let i = 0; i < 100; i++) {
    numeros.push(Math.floor(Math.random() * 101));
}

console.log(calculateProbabilities(numeros));