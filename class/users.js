
class Users {

    constructor(name, surname, books = [], pets = []){
        this.name = name;
        this.surname = surname;
        this.books = books
        this.pets = pets;
    }

    getFullName(){
        return `${this.surname}, ${this.name}` ;
    }

    addPet(pet_name){
        if(typeof pet_name === 'string'){
            console.info(`Agregando ${pet_name} como mascota...`)
            this.pets.push(pet_name);
        };
    }

    countPets(){
        return this.pets.length;
    }

    addBook(title, autor){
        if(!title || typeof title !== 'string') throw Error('you has send title of book');
        if(!autor || typeof autor !== 'string') throw Error('you has send autor of book');

        const book = { title, autor };
        console.info(`Agregando Libro... ${autor}`);
        this.books.push(book);
    }

    getBookNames(){
        const booksTitle = [];
        for(let r of this.books){
            const { title = '' } = r;
            booksTitle.push(title);
        }
        return booksTitle;
    }

}

module.exports = Users;