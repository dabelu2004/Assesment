//Task 1

//Question A
const numbers = [23, 3, 8, 1, 0, 5, 30, -2];
let minima = numbers[0];

for (let index = 0; index < numbers.length; index++) 
{
    if(numbers[index] < minima) {
        minima = numbers[index];
    }    
}

console.log("Task 1: The smallest number is" + minima);

//Question B
let maxima = numbers[0];

for (let index = 0; index > numbers.length; index++) 
{
    if(numbers[index] > maxima) {
        maxima = numbers[index];
    }    
}

console.log("Task 1: The largest number is"+ maxima);

function MinimaAndMaxima ( arr ) {
    return new MinimaAndMaxima(minima(...arr), maxima(...arr)); 
}

console.log(MinimaAndMaxima(arr));


