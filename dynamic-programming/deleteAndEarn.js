// Problem: cho  một mảng các số nguyên Array
// Chọn một số bất kỳ (num[i]) và xóa số đó để nhận num[i] điểm
// Sau đó xóa các phần tử liền kề với num[i] (num[i]+1 & num[i] -1).
// Trả về: số điểm tối đa bạn có thể kiếm được bằng cách áp dụng thao tác trên một số lần.
//time: O(n^n *(3n))  n= numbers.length
function deleteAndEarn(numbers, memo = {}) {
  const key = numbers.reduce((acc, curr) => {
    return (acc += curr);
  }, "");
  if (key in memo) return memo[key];
  if (numbers.length === 0) return 0;
  //   let sum = 0;
  let maxPoint = 0;
  for (let i = 0; i < numbers.length; i++) {
    let remainderArr = Array.from(numbers);
    remainderArr.splice(i, 1);
    remainderArr = remainderArr.filter(
      (num) => num !== numbers[i] + 1 && num !== numbers[i] - 1
    );
    let sum = deleteAndEarn(remainderArr, memo) + numbers[i];
    if (sum > maxPoint) {
      maxPoint = sum;
    }
  }
  memo[key] = maxPoint;
  return maxPoint;
}

console.time("a");
console.log(
  deleteAndEarn(
    [
      10, 8, 4, 2, 1, 3, 4, 8, 2, 9, 10, 4, 8, 5, 9, 1, 5, 1, 6, 8, 1, 1, 6, 7,
      8, 9, 1, 7, 6, 8, 4, 5, 4, 1, 5, 9, 8, 6, 10, 6, 4, 3, 8, 4, 10, 8, 8, 10,
      6, 4, 4, 4, 9, 6, 9, 10, 7, 1, 5, 3, 4, 4, 8, 1, 1, 2, 1, 4, 1, 1, 4, 9,
      4, 7, 1, 5, 1, 10, 3, 5, 10, 3, 10, 2, 1, 10, 4, 1, 1, 4, 1, 2, 10, 9, 7,
      10, 1, 2, 7, 5,
    ].sort()
  )
);
console.timeEnd("a");
