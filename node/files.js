const fs = require('fs');


//read the text from the blog1.txt
const myfile='./docs/blog1.txt';
//call back function
fs.readFile(myfile,(err, data)=>{
    if (err){
        console.log("An error occured: "+ err);
    }else{
        console.log(data.toString());
    }
});

//overwrite into the file blog1.txt
fs.writeFile(myfile, "good day!", (err)=>{
    if(err){
        console.log(err);

    }else{
        console.log("the file was updated");
    }
})

//append into file
fs.appendFile(myfile, 'bye bye', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("the file was updated");
    }
})

fs.writeFile('./docs/blog2.txt', 'Hello World', (err)=>{
    if (err){
        console.log(err);
    }else{
        console.log('a new file was created');
    }
})
