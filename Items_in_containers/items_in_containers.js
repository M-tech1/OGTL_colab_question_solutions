const getItems = (str, startIndices, endIndices) => {
    let count = 0;
    const arr = Array(str.length);
    arr[0] = 0;
    for (let i = 1; i < str.length; i++) {
      if (str[i] === '*') {
        count++;
        arr[i] = arr[i - 1];
      } else {
        arr[i] = count;
      }
    }
    const ret = Array(startIndices.length);
    for (let i = 0; i < startIndices.length; i++) {
      ret[i] = arr[endIndices[i] - 1] - arr[startIndices[i] - 1];
    }
    return ret;
  }
  
  console.log(getItems('|**|*|*', [1, 1], [5, 6])); // [2,3]
  