
//Synchronous
// const fs= require("fs");
// file=fs.readFileSync('./data.json')
// console.log(file)
// const data=JSON.parse(file)
// console.log(data)

// data.author = "John Doe"
// fs.writeFileSync('./data.json', JSON.stringify(data))


//Asynchronous
const fs= require("fs");
fs.readFile('./data.json',function(err, file){
  const data=JSON.parse(file)
 data.rating=0
 fs.writeFile('./data.json',JSON.stringify(data)),
 function(){
    console.log('file edited successfully')
 }

})
