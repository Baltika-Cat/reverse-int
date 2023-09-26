module.exports = function reverse (n) {
  const str = n.toString();
  let result = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += str[i];
  }
  return parseInt(result, 10);
}
