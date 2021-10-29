var http = require('http');
const url = require('url');
const express = require('express');
const app =express()
//write your code here

const port = 8000;

app.get('/cal', (req,res)=> {
    
console.log(req.query.func)
});

app.listen(port, ()=> {
  console.log("Server is running on port ", port);
})

