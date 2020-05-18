var str = "1103102";
var arr = str.split("");
var arr_2 = [];
var num = 1;
for(var i=arr.length-1;i>=0;i--){
  arr_2.unshift(arr[i]);

  if(num%3 == 0) {
    arr_2.unshift(",")
  }
  num++;
}
var str_2 = arr_2.join("");
str_2 = JSON.stringify(str_2);
console.log(str_2);
