
function one(num,interval){
  let arr = num.toString().split("");
  let arr_2 = [];
  let count = 1;
  for(let i=arr.length-1;i>=0;i--){
    arr_2.unshift(arr[i]);
    if(count%interval === 0 && i !== 0) {
      arr_2.unshift(",")
    }
    count++;
  }
  let str_2 = arr_2.join("");
  return JSON.stringify(str_2);
}



//方法2

function two(num,interval){
  let arr = num.toString().split('').reverse()
  let str = '';
  for(let i = 1;i<=arr.length;i++){
    if(i%interval === 0 && i !== arr.length) {
      str = ','+ arr[i-1] + str
    }
    else { str = arr[i -1] + str}
  }
  return str
}


//方法3
function third(num,interval) {
  let arr = num.toString().split('').reverse()
  let len = arr.length;
  for(let i=3,count = 0;i<len;i += 3){
    arr.splice(interval*(i/3) + count,0,',')
    count++
  }
  return arr.reverse().join('')
}

console.log('one')
console.time('one')
one(123456,3)
one(1234567,3)
one(1234568,3)
one(1234569,3)
console.timeEnd('one')
