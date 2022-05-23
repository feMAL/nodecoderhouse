const User = require('./class/users')

const userNro1 = new User('fer', 'mal');


console.info('Nombre completo: ',userNro1.getFullName())
console.log('Cantidad de Mascotas',userNro1.countPets())
userNro1.addPet('horse');
userNro1.addPet('cat');
userNro1.addPet('dog');
console.log('Cantidad de Mascotas',userNro1.countPets())


userNro1.addBook('1984', 'Orwell');
userNro1.addBook('Harry Potter y la piedra Filosofal', 'J.K.Rowling');
console.table(userNro1.getBookNames())