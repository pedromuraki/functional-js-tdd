const map = (arr, fn) => {
  if (!Array.isArray(arr)) {
    throw new Error('map should receive an array as first parameter');
  }

  if (typeof fn !== 'function') {
    throw new Error('map should receive a function as second parameter');
  }

  const mapInternal = (arrayInternal, i) => {
    // if (arr.length === i) return [];
    // return [fn(arr[i], i, arr)].concat(mapInternal(arr, fn, i + 1));
    const [head, ...tail] = arrayInternal;
    if (arrayInternal.length === 0) return [];
    // return [fn(head, i, arr)].concat(mapInternal(tail, i + 1));
    return [fn(head, i, arr), ...mapInternal(tail, i + 1)];
  }

  return mapInternal(arr, 0);
}

export default map;
