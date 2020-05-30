function random(min, max = 0) {
  let minValue = min;
  let maxValue = max;

  minValue = Math.ceil(minValue);
  maxValue = Math.floor(maxValue);

  if (typeof min !== 'number' || typeof max !== 'number') {
    return -1;
  }

  return Math.floor(Math.random() * (maxValue - minValue + 1)) + min;
}

module.exports = random;
