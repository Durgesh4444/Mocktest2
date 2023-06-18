const mySqrt = function (x) {
  if (x < 2) return x;
  let low = 0,
    high = Math.floor(x / 2) + 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (mid * mid === x) return mid;
    else if (mid * mid < x) low = mid + 1;
    else high = mid - 1;
  }
  return high;
};
