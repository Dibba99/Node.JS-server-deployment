const fs = require('fs');
const path = require('path');

//create folder
/*
fs.mkdir(path.join(__dirname, '/test'), {}, function(error){
    if (error) throw error;
    console.log("Folder is created!");
});
*/

//write to a file and add multiple lines
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),"Hello world :))", function(error){
//     if (error) throw error;
//     console.log("File was written!")
    
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), "This is my second line ever!!", function(error){
//         if (error) throw error;
//         console.log("printing second line!");
//     })
// });

//Read a file
// fs.readFile(path.join(__dirname, '/test' , 'hello.txt'), 'utf8', (error,data) => {
//     if (error) throw error;
//     console.log(data);
// });

//rename a file
fs.rename(path.join(__dirname, '/test' , 'hello.txt'), path.join(__dirname, '/test' , 'helloworld.txt'), function(error){
    if (error) throw error;
    console.log("File has been renamed!");
});

