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


// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [midToppingOne, midToppingTwo] = pizzaToppings

console.log(midToppingOne)
console.log(midToppingTwo)


// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
};

const {make, model} = car

console.log(make)
console.log(model)