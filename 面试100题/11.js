var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
// 深度遍历法
////检测数据是不是除了symbol 外的原始数据
// function isStatic(value) {
//   return (typeof value === 'string' ||
//           typeof value === 'number' ||
//           typeof value === 'boolean' ||
//           typeof value === 'undefined' ||
//           value === 'null')
// }
var result = []
function deep(arr) {
  if(arr) {
    for (let key in arr) {
      if (isStatic(arr[key])) {
        result.push(arr[key])
      } else {
        deep(arr[key])
      }
    }
  }
}
deep(arr);
 result = [...new Set(result)]
sortAB(result)
console.log(result,'11-深度遍历法')

//扁平化法
var json = JSON.stringify(arr)
var brr = json.split(',')
var result_2 = []
for (var i = 0; i < brr.length; i++) {
  var num = brr[i].replace(/[^0-9]/g,'')
  if(JSON.stringify(result_2).indexOf(num.toString()) === -1) {
    result_2.push(Number(num))
  }
}
sortAB(result_2)
console.log(result_2,'11-深度遍历法')

//11-some方法平坦数组
function flatten(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
var result_3 = flatten(arr)
result_3 = [...new Set(result_3)]
sortAB(result_3)
console.log(result_3,'11-some方法平坦数组')
// every()是对数组中每一项运行给定函数，如果该函数对每一项返回true,则返回true。
// some()是对数组中每一项运行给定函数，如果该函数对任一项返回true，则返回true。
// some一直在找符合条件的值，一旦找到，则不会继续迭代下去。
// every从迭代开始，一旦有一个不符合条件，则不会继续迭代下去。

//最简介

arr = Array.from(new Set(arr.flat(Infinity))).sort((a,b)=>{ return a-b})
console.log(arr,'11-最简洁')
