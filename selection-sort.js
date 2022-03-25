const arr2 = [1, 8, 6, 2, 5, 10, -3, 0, 4, 9];

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let max = -Infinity;
        let index;
        
        for (let j = 0; j < array.length - i; j++) {
            if (max < array[j]) {
                max = array[j];
                index = j;
            }
        }
        
        const last = array[array.length - 1 - i];

        array[array.length - 1 - i] = max;
        array[index] = last;
    }

    return array;
}

console.log(selectionSort(arr2));
