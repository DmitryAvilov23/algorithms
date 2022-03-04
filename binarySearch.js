const arr = [1, 2, 8, 16, 32, 75, 89, 100];

function findNumberIndex(number, array) {
  let start = 0;
  let mid = Math.floor((array.length - 1) / 2);
  let end = array.length - 1;
  let result;
  
  while(result === undefined) {
    if (number === array[mid]) {
      result = mid;
      break;
    } else if ((start === mid || end === mid) && !result) {
      result = -1;
      break;
    } else if (number > array[mid]) start = mid + 1;
      else if (number < array[mid]) end = mid - 1;
    
    mid = Math.floor((end + start) / 2);
  }

  return result;
}

console.log(findNumberIndex(32, arr));