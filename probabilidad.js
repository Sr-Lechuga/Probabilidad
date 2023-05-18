function calculateProbabilities(integerArray) {
    const PROBABILITY_VALUE = 1;

    const totalCases = integerArray.length;
    const repetitions = {};
    
    integerArray.forEach(number => (repetitions[number] = repetitions[number] + 1 || 1));
    
    const probabilities = new Map();
    Object.keys(repetitions).forEach(number => {
        const favorableCases = repetitions[number];
        const probability = favorableCases/totalCases*100;
    
        probabilities.set(number, probability);
    });
    
    const sortedProbabilities = new Map([...probabilities.entries()].sort((j, l) => j[PROBABILITY_VALUE] - l[PROBABILITY_VALUE]));
    
    return Array.from(sortedProbabilities.keys());
}

const numeros = [1,3,1,2,4,5,6,6,7,13,42,13,25,243,1];

console.log(calculateProbabilities(numeros));