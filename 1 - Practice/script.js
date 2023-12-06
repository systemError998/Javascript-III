/* Crea un form per la creazione di oggetti “Pet” (animali domestici). 
La classe Pet dovrà essere dotata delle seguenti proprietà:
- petName
- ownerName
- species // (cane, gatto, coniglio etc.)
- breed // (labrador, soriano, nano etc.) 
Nella classe che utilizzerai per creare questi oggetti aggiungi anche 
un metodo che restituisca true se due animali condividono lo stesso padrone. Crea, raccogliendo i dati 
dal form, diverse istanze della classe Pet e mostrane i dati in una lista sottostante. */

class pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    sameOwner(x) {
        if(x.ownerName === this.ownerName) {
            console.log(`${x.petName} ha lo stesso padrone di ${this.petName} ed è ${this.ownerName}`);
        } else {
            console.log(`${x.petName} e ${this.petName} non hanno lo stesso padrone`);
        }
    }
}

let pet1 = new pet('Baby','Anna','gatto','meticcio');
console.log(pet1);
let pet2 = new pet('Damiano','Cielo','gatto','roscio');
console.log(pet2);
let pet3 = new pet('Mia','Anna','cane','Maremmano');
console.log(pet3);
let pet4 = new pet('Karina','Roberta','gatto','meticcia');
console.log(pet4); 

pet1.sameOwner(pet3)

let petzForm = document.forms
// let petzForm = document.forms.petzForm  <= Metodo alternativo
console.log(petzForm);

let inputForm = document.querySelectorAll(".petzForm input, .petzForm select")

let inputPet = document.querySelector(".petzForm button")
// console.log(inputPet);

inputPet.addEventListener('click', () => {
    //Al click, leggo tutti i value degli input
    let petz = new pet(inputForm[0].value,inputForm[1].value,inputForm[2].value,inputForm[3].value)
    console.log(petz);

    //Passo il nuovo oggetto alla funzione (che lo scriverà sul documento)
    addPetz(petz)

    //Svuoto i campi di input 
    inputForm[0].value = ''
    inputForm[1].value = ''
    inputForm[2].value = ''
    inputForm[3].value = ''
})

// Funzione che aggiunge un list item con i dati inseriti 
function addPetz(petz) {
    let ulPetz = document.querySelector(".petzList")
    let liPetz = document.createElement("li")
    let pOwner = document.createElement("p")
    liPetz.classList.add("list-group-item")
    liPetz.innerHTML = `Pet Name : ${petz.petName}
                        Owner Name: ${petz.ownerName}
                        Species: ${petz.species}
                        Breed: ${petz.breed}`

    ulPetz.appendChild(liPetz)
}