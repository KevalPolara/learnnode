const file = require('node:fs');

// 1) Aanu Kam Folder ne Add karvanu Hoy:-

// file.mkdir('./src/data' , {recursive : true} , (err) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('Folder is Aded');

// })

// 2) Aanu Kam File ne Create Karv

// file.writeFile('./src/data/user.txt','Hiii', (err) =>{
//         if(err){
//         console.log(err);
//         return;
//     }

//         console.log('File is Created');

// })

// AppendFile Ma Behind File ni Aandar Name Add Thay :-

// file.appendFile('./src/data/user.txt','Hiii', (err) =>{
//         if(err){
//         console.log(err);
//         return;
//     }

//  console.log('File is Created');

// })

// ReadFile Ma File data ne Read kare

// file.readFile('./src/data/user.txt', 'utf-8',(err,data) => {
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(data);

// })

// How to File is Deleted :-

// file.unlink('./src/data/user.txt', (err) => {
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log('File is Deleted SuccesFully');

// })

file.writeFile('./src/data/data.html' , '<div style="color:blue">Keval</div>', (err,data) => {
    if(err){
                console.log(err);
                return
            }
            console.log('File is Deleted SuccesFully');
        
})

