const array1 = ["1", "2", "3"]

const array2 = array1.map((currentItem) =>{
    return currentItem + " is a cool number."
})
console.log(array1)

// EXAMPLE

// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

const numTimesTwo = nums.map((num) => {
    return num * 2
})

console.log(numTimesTwo)
