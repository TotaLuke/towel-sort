
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let result = [];

  if (arguments.length === 0) return [];

  matrix.forEach((elem, index) => {
    if (index % 2 === 0) {
      result.push(...elem);
    } else {
      result.push(...elem.reverse());
    }

  })
  return result;
}