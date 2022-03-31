const arr3 = [1, 8, 5, 6, 2, 4, 3, 2, 2, 2, 10, -3];

function quickSort(array) {
    if (array.length < 2) {
        return array;
    };

    const pivot = array[Math.floor((array.length - 1) / 2)];
    const less = [];
    const greater = [];

    array.forEach(item => {
        if (item < pivot) less.push(item);
        if (item > pivot) greater.push(item);
    });

    return [...quickSort(less), pivot, ...quickSort(greater)];
};

console.log(quickSort(arr3));