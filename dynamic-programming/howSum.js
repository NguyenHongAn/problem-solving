//tìm một cách có thể cộng các phần tử của lại với nhau đễ tạo thành target cho phép sử dụng trùng các phần tử
//

function howSum(target, numbers, memo = {}) {
  if (target in memo) return momo[target];
  //basecase:nếu có thể trừ target thành 0 từ các số trong mảng ta cũn có thể tạo nên target từ các số trong mảng đó
  //nếu ko thể (target < 0) ta trả về false
  if (target === 0) return [];
  if (target < 0) return null;

  for (const num of numbers) {
    const remainderComb = howSum(target - num, numbers, memo);
    //nếu có thể tạo ra target từ các number trong mảng thì tạo mảng mới lưu trữ giá trị
    if (remainderComb !== null) {
      memo[target] = [...remainderComb, num];
      return memo[target];
    }
  }
  memo[target] = null;
  return null;
}

function howSumTable(target, numbers) {
  const table = Array(target + 1).fill(0);
  table[0] = [];
  for (let i = 0; i < target; i++) {
    if (table[i] !== null) {
      for (const num of numbers) {
        table[i + num] = [...table[i], num];
      }
    }
  }
  return table[target];
}
