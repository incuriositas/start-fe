/* eslint-disable no-restricted-globals */
function avg(...args) {
  let res = 0;
  let count = 0;

  for (let i = 0; i < args.length; i += 1) {
    if (!isNaN(args[i])) {
      count += 1;
      res += args[i];
    }
    if (Array.isArray(args[i])) {
      for (let j = 0; j < args[i].length; j += 1) {
        if (!isNaN(args[i][j])) {
          count += 1;
          res += args[i][j];
        }
      }
    }
  }
  return res / count;
}

module.exports = avg;
