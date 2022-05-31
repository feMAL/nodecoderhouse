const FileManager = require('./file.manager');
const {uuid} = require('uuidv4');


class Container extends FileManager {
    data=[];

    constructor(name){
        super(name);
        this.read().then((data) => {
            console.log(data)
            if(data) this.data = JSON.parse(data);
        }).catch(
            () => this.data = []
        )
    }

    save(obj) {
        if(typeof obj === 'object'){
            const data_save = { id: uuid(), value: obj };
            this.data.push(data_save);
            this.write(JSON.stringify(this.data));
        }else throw new Error('Value is not an object');
    }
    
    getById(number){

    }

    getAll(){
        try{
            
            
        }catch(error){
            throw error;
        }
    }

    deleteById(){

    }

}

module.exports = Container