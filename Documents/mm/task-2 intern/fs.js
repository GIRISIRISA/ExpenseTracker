const fs= require("fs");
file=fs.readFileSync('./data.json')
console.log(file)
const data=JSON.parse(file)
console.log(data)
data.author = "John Doe"
fs.writeFileSync('./data.json', JSON.stringify(data))