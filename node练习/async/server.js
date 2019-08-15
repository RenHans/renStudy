const express = require('express');
const app = express()//express.static 提供静态文件，就是html，css，jss
app.use(express.static('public'))

//电话号码使用省和市，为了模拟延迟，使用了setTimeOut
app.post('/phoneLocation',(req,res)=> {
  setTimeout(() => {
    res.json({
      success:true,
      obj:{
        province:'四川',
        city:'成都'
      }
    })
  },1000);
});

//返回面值列表
app.post('/faceList',(req,res) => {
  setTimeout(() => {
    res.json({
      success:true,
      obj:['10元','20元','100元']
    })
  },1000)
})

app.listen(3000,()=>{
  console.log('serve start')
});
