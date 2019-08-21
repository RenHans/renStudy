
//循环插值法
var a = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']
var b = ['A','B','C','D']
var start1 = 0 ,start2 = 0
var result = []
for(var i = 1 ;i <= b.length;i++){
  let arr1 = a.slice(start1,i*2)
  let arr2 = b.slice(start2,i)
  start1 = i*2
  start2 = i
  result = [...result,...arr1,...arr2]
}
console.log(result,'-30-插值法')

//替换排序法
let a1 =  ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']
let a2 = ['A', 'B', 'C', 'D'].map((item) => {
  return item + 3
})

let a3 = [...a1, ...a2].sort().map((item) => {
  if(item.includes('3')){
    return item.split('')[0]
  }
  return item
})
console.log(a3,'-30-替换排序法')
