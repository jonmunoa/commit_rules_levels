// Function to generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to create an array of random numbers
function createRandomArray(size, min, max) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(getRandomNumber(min, max));
    }
    return arr;
}

// Function to find the maximum number in an array
function findMax(arr) {
    return Math.max(...arr);
}

// Function to find the minimum number in an array
function findMin(arr) {
    return Math.min(...arr);
}

// Function to calculate the average of numbers in an array
function calculateAverage(arr) {
    let sum = arr.reduce((a, b) => a + b, 0);
    return sum / arr.length;
}

// Function to sort an array in ascending order
function sortArrayAscending(arr) {
    return arr.sort((a, b) => a - b);
}

// Function to sort an array in descending order
function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
}

// Main function to demonstrate the above utilities
function main() {
    let size = 10;
    let min = 1;
    let max = 100;
    let randomArray = createRandomArray(size, min, max);

    console.log("Random Array:", randomArray);
    console.log("Maximum Value:", findMax(randomArray));
    console.log("Minimum Value:", findMin(randomArray));
    console.log("Average Value:", calculateAverage(randomArray));
    console.log("Sorted Array (Ascending):", sortArrayAscending([...randomArray]));
    console.log("Sorted Array (Descending):", sortArrayDescending([...randomArray]));
}

// Execute the main function
main();
