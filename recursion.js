const arr = [5, 10, 20, 8];

function getSum(array) {
    const last = array[array.length - 1];
    let sum = 0;
    
    if (array.length === 1) {
        return arr[0];
    }

    array.splice(-1, 1);
    
    sum = getSum(array) + last;

    return sum;
};

console.log(getSum(arr));