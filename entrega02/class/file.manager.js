const fs = require('fs');

class FileManager {

    constructor(name){
        this.file_name = name+ '.txt';
    }
    

    write(text){
        fs.writeFile(this.file_name, text, (err) => {
            if (err) throw err;
            console.log("The file was succesfully saved!");
        }); 
    }

    read(){
        return new Promise((resolve, reject)=> {
            fs.readFile('./'+this.file_name,'utf8', (err,data ) => {
                if (err) throw err;
                console.log("The file was readed succesfully!");
                resolve(data);
            });
        })  
    }

}

module.exports = FileManager;