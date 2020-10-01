
exports.min = function min (array = 0) {
  if(array == 0) {
    return 0;
  }
  let max = array[0];
  for (let i = 0; i < array.length; i++){
    if (array[i] < max) max = array[i];
  }
  return max;
}

exports.max = function max (array = 0) {
  if(array == 0) {
    return 0;
  }
  let max = array[0];
  for (let i = 0; i < array.length; i++){
    if (array[i] > max) max = array[i];
  }
  return max;
}

exports.avg = function avg (array = 0) {
  if(array == 0) {
    return 0;
  }
  let max = 0;
  for (let i = 0; i < array.length; i++){
    max += array[i];
  }
  return max/array.length;
}
