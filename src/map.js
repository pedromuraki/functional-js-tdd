// let newArr = [];

const map = (arr, fn, newArr = [], i = 0) => {
  if (!Array.isArray(arr)) {
    throw new Error('map should receive an array as first parameter');
  }

  if (typeof fn !== 'function') {
    throw new Error('map should receive a function as second parameter');
  }

  if (arr.length === i) return newArr;

  newArr.push(fn(arr[i], i, arr));
  return map(arr, fn, newArr, i + 1);
}

export default map;
