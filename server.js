const express = require('express')

const app = express();
const port = 3000;


app.get('/', (req, res)=> {
res.send(`<h1>99 Bottles of beer on the wall  <a href="/98">Take one down, Pass it around </a> </h1>`)

})


app.get("/:number_of_bottles", (req, res)=> {

const currentNumOfBottles = req.params.number_of_bottles;
const newNumOfBottles = currentNumOfBottles - 1;



if (newNumOfBottles === 0) {
    res.send(`<a href="/"> Start OVer </a> `)
} else {
    
    res.send(`<h1>${currentNumOfBottles} Bottles of beer on the wall</h1> <a href="${newNumOfBottles}">Take one down, Pass it around </a> `)
    
 }



})



app.listen(port, () => {
    console.log("listening on port", port)
})