function getMinMaxSum(arr) {
    let [min,...rest] = arr;
    let max = min;
    let sum = min;

    for (let num of rest) {
        if (num < min) {
            min = num;
        } else if (num > max) {
            max = num;
        }
        sum += num;
    }

    return { min, max, sum };
}
let numbers = [3, 1, 4, 1, 5, 9, 2, 6];
let result = getMinMaxSum(numbers);
console.log(result);
