//tính toán xem có thể tạo ra target từ các số được cho trong mảng numbers hay ko
//có thể sử dụng lại phần tử trong mảng bao nhiêu lần tùy ý
//Cách 1:
function canSum(target, numbers, memo = {}) {
  if (target in memo) return memo[target];
  //base case: nếu có thể trừ target thành 0 từ các số trong mảng ta cũn có thể tạo nên target từ các số trong mảng đó
  //nếu ko thể (target < 0) ta trả về false
  if (target === 0) return true;
  if (target < 0) return false;
  //chạy vòng lặp qua các phần tử của mảng và tìm các số dư
  for (const num of numbers) {
    const remainder = target - num;
    //gọi hàm phân chia cho các số dư đó và nếu các số dư tách ra được thành 1 thì trả về true
    if (canSum(remainder, numbers, memo)) {
      memo[target] = true;
      return true;
    }
  }
  //tất cả các trường hợp đều không thê tạo ra target từ mảng thì trả về false
  memo[target] = false;
  return false;
}
//Cách 2:sủ dụng mảng đề lưu trữ các bước khả thi khi tinh toán
function canSumTable(target, numbers) {
  const table = Array(target + 1).fill(false);
  table[0] = true;
  for (let i = 0; i < table.length; i++) {
    if (table[i] === true) {
      for (let num of numbers) {
        if (i + num < table.length) table[i + num] = true;
        if (table[target]) return true;
      }
    }
  }
  return table[target];
}
