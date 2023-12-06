/* Crea una classe User per la creazione di oggetti di tipo “utente”. 
Il suo costruttore dovrà inizializzare ogni oggetto utente con i seguenti attributi: 
- firstName - lastName - age - location 
Aggiungi alla classe User anche un metodo che restituisca il confronto con l'età di un'altra persona.
Ad esempio, date due istanze della classe utente “x” e “y” inizializzate con le proprietà sopra descritte, 
il metodo dovrà restituire una frase simile a “x è più vecchio di y” a seconda del risultato del confronto.
Crea degli oggetti a partire dalla classe User e verifica che la comparazione tra le età funzioni correttamente. */

class User {
    constructor(name, lastName, age, location) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }
    confronto(newUser) {
        if (newUser.age == this.age) {
            console.log(`${newUser.name} ha la stessa età di ${this.name}`);
        } else if ( newUser.age < this.age) {
            console.log(`${this.name} è più grande di ${newUser.name}`);
        } else {
            console.log(`${newUser.name} è più grande di ${this.name}`);
        }
    }
}

let user1 = new User('Anna', 'Cera', '25', 'Roma');
console.log(user1);
let user2 = new User('Damiano', 'DellAmore', '26', 'Emilia Romagna');
console.log(user2);
let user3 = new User('Trixia', 'Lorenz', '25', 'Milano');
console.log(user3);
let user4 = new User('Arcangelo', 'Xaivar', '21', 'Napoli');
console.log(user4);

user1.confronto(user2)