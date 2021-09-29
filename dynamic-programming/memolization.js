

function combinationSum(candidates, target) {
  //sắp xếp các số toán
  candidates.sort();
  return combinationHelper(candidates, target);
}

function combinationHelper(candidates, target, start = 0, memo = {}) {
  if (target === 0) return [[]];
  if (target in memo) return memo[target];
  if (target < 0) return null;
  const result = [];
  for (let i = start; i < candidates.length; i++) {
    const remainder = target - candidates[i];
    const remainderWays = combinationHelper(candidates, remainder, i);
    if (remainderWays) {
      const targetWays = remainderWays.map((way) => [candidates[i], ...way]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return result;
}

console.log(combinationSum([1, 2], 4));

// ================================================================
//tìm có bao nhiêu cách để di chuyển từ top-lft đến bottom-right của một mảng 2 chiều
// biết ràng bạn chỉ có thể di chuyển xuống hoặc sang phải
//cách 1: dùng object đề lưu trữ lại những mảng 2 chiều đã đi qua
//cách 2: dùng mảng 2 chiều để lưu lại tất cả các bước cần thực hiện để đi tới vị trí đó
function gridTraveler(m, n, memo = {}) {
  //base case: đối với mảng 2 chiều có 1 cạnh vs chiều dài = 0 (m =0 or n = 0) => ko thể di chuyển
  const key = m + "," + n;
  //trả về kêt quả nếu đã đi qua mảng 2 chiều này rồi
  if (key in memo) return memo[key];
  if (m === 0 || n === 0) return 0;
  //base case: với mảng 2 chiều m =1, n =1 => có duy nhất 1 cách di chuyển
  if (m === 1 && n === 1) return 1;

  // tìm tất cả các bước khả thi khi di chuyển xuống hoặc sang phải
  //lưu lại các mảng 2 chiều đã đi qua
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
}

function canContructor(numStrs, str, memo = {}) {
  if (str === "") return true;
  if (str in memo) return memo[str];
  for (let value of numStrs) {
    if (str.indexOf(value) === 0) {
      const subString = str.slice(value.length);
      //console.log(subString);
      if (canContructor(numStrs, subString, memo) === true) {
        memo[str] = true;
        return true;
      }
    }
  }
  memo[str] = false;
  return false;
}

function countContructor(numStrs, str, memo = {}) {
  if (str === "") return 1;
  if (str in memo) return memo[str];
  let totalCount = 0;
  for (let value of numStrs) {
    if (str.indexOf(value) === 0) {
      const subString = str.slice(value.length);
      //console.log(subString);
      const numberOFway = countContructor(numStrs, subString, memo);
      memo[str] = numberOFway;
      totalCount += numberOFway;
    }
  }
  memo[str] = 0;
  return totalCount;
}

//console.log(countContructor(["ab", "abc", "cd", "def", "abcd"], "abcdef"));
