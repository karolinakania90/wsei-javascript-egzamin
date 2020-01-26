function bigestSumOfTwoElements(array) {
    if(array.length < 1) {
        return false;
    }
    if(array.length == 1) {
        return array[0];
    }
    array.sort().reverse();

    return array[0] + array[1];
}

let sum1 = bigestSumOfTwoElements([1,2,3,4]); // => 7
let sum2 = bigestSumOfTwoElements([]); // => false
let sum3 = bigestSumOfTwoElements([76]); // => 76
let sum4 = bigestSumOfTwoElements([23,45,17,12]); // => 68

console.log(sum1);
console.log(sum2);
console.log(sum3);
console.log(sum4);