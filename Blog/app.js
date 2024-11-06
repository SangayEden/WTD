// important command
const express = require('express'); 
const app = express(); 
app.listen(3000); //keep the number inside the brackets same in both the server and here
app.get('/',(request, response) =>{
    // response.send("<h1> welcome </h1>");  //go to a web browser and  type localhost:3000
    // console.log(__dirname);
    response.sendFile('./views/home.html', {root:__dirname});
});

