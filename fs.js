const fs=require('fs')

//Asynchronous implementation

fs.readFile('./folder/lo.txt','utf-8',(err,data)=>{
  console.log(data)
})


//Synchronous implementation
const f1=fs.readFileSync('./folder/lo.txt','utf-8')

console.log(f1)

fs.writeFile('./folder/sub.txt','OYE new content',(err)=>{
  if(err)
  console.log('error occured')
  else
  console.log('data written to file successfully')
})


fs.readFile('./folder/sub.txt',(err,data)=>{

  console.log(data.toString())
})

fs.writeFile('./folder/sub.txt','Appened data by setting the flag',{flag:'a'},()=>{})

fs.readFile('./folder/sub.txt','utf-8',(err,data)=>{
  console.log(data)
})