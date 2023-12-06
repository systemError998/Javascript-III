// Varibili JS
let var1 = 'testo';
let var2 = 25;
let var3 = true;
let var4 = [25, 9, 6, 12, 18]; // Array
let var5 = {}; // Oggetto
let var6 = undefined;
let var7 = null;

// Funzioni JS
// dichiarazione di funzione
func1();
function func1(params) {
    // blocco di istruzioni
    return params; // ritorno un valore
}
func1();

// funzione espressione
// func2(); // Errore
let func2 = function(params) {
    // blocco di istruzioni
    return params; // ritorno un valore
}
func2();

// Arrow Function
let func3 = (params) => {
    // blocco di istruzioni
    return params; // ritorno un valore
}
func3();

// Funzioni autoinvocanti
(function() {
    console.log("Sono una funzione anonima!!!")
})()

// funzione di callback
function call(name) {
    return "Sono una funzione di callback di nome " + name;
}

function sum(num) {
    return num + Math.floor(Math.random() * 10);
}

function miaFunc(v, f) {
    console.log(f(v));
}

miaFunc('abc', call);
miaFunc(25, sum);


function itera(n, i) {
    console.log(i + ": " + n);
}

var4.forEach(itera)

console.log("--------")

var4.forEach((n, i) => {
    console.log(i + ": " + n);
})


// Object Js
let obj1 = {
    name: 'Mario',
    "last name": "Rossi",
    city: "Roma",
    2: "occhi",
    saluta: function () {
        return this.name + " " + this.city;
    }
}

console.log(obj1);
console.log(obj1.name); // dot notation
console.log(obj1['name']);
console.log(obj1["last name"]); 
console.log(obj1[2])
console.log(obj1.saluta())


let fiat500 = {
    marca: 'Fiat',
    modello: '500',
    alimentazione: 'benzina',
    colore: 'Rosso'
}

let fordFiesta = {
    marca: 'Ford',
    modello: 'Fiesta',
    porte: 3,
    colore: 'blu'
}

let mercedesSmart = {
    marca: 'Mercedes',
    modello: 'Smart',
    colore: 'Nero',
    cambio: 'automatico'
}

// Prototipo JS
function Auto(marca, modello, colore) {
    this.marca = marca;
    this.modello = modello;
    this.colore = colore;
}

let cinquecento = new Auto('Fiat', '500', 'Rosso');
let fiesta = new Auto('Ford', 'Fiesta', 'blu');
let smart = new Auto('Mercedes', 'Smart', 'nero');

let arr = [cinquecento, fiesta, smart];

Auto.prototype.info = function () {
    return this.marca + " " + this.modello + " " + this.colore;
}

Auto.prototype.ruote = 4;

smart.cambio = 'automatico';


arr.forEach(obj => console.log(obj.info()))

console.log(cinquecento.info());
console.log(fiesta.info());
console.log(smart.info()); 

console.log(cinquecento.marca);
console.log(fiesta.marca);
console.log(smart.marca);

// Classi in JS
// Ereditarietà 

class AutoClass {
    constructor(marca, modello, colore) {
        this.marca = marca;
        this.modello = modello;
        this.colore = colore;
    }
}

let c = new AutoClass('Fiat', '500', 'Rosso');
let f = new AutoClass('Ford', 'Fiesta', 'blu');
let s = new AutoClass('Mercedes', 'Smart', 'nero');

AutoClass.prototype.info = function () {
    return this.marca + " " + this.modello + " " + this.colore;
}

console.log(c);
console.log(f);
console.log(s);

class Persona {

    static conta = 0;

    constructor(nome, cognome, citta, anni) {
        this.nome = nome;
        this.cognome = cognome;
        this.citta = citta;
        this.anni = anni;
        Persona.conta++;
    }

    confronta(p) {
        if(p.anni > this.anni) {
            return p.name + ' è più vecchio di ' + this.name;
        } else {
            return p.name + ' è più giovane di ' + this.name;
        }
    }

    compleanno() {
        this.anni++;
    }

    saluta() {
        return 'Ciao sono ' + this.nome + " " + this.cognome + " di anni " + this.anni;
    }

    verso() {
        return 'Ahhhhh ';
    }
}

class Uomo extends Persona {
    barba;
    constructor(nome, cognome, citta, anni, barba) {  
        super(nome, cognome, citta, anni)
        this.barba = barba;
    }

    static lavora() {
        return 'Sto lavorando';
    }

    verso() {
        return super.verso() + "ah ah ah";
    }
}

class Donna extends Persona {
    constructor(nome, cognome, citta, anni, smalto) {
        super(nome, cognome, citta, anni)
        this.smalto = smalto;
    }

    contabilita() {

    }
}

class Altro extends Persona{
    constructor(nome, cognome, citta, anni, x) {
        super(nome, cognome, citta, anni)
        this.x = x;
    }

    altro() {

    }
}

let u = new Uomo('Mario', 'Rossi', 'Roma', 44, true);
console.log('Persone: ' + Persona.conta)
let m = new Uomo('Giuseppe', 'Verdi', 'Napoli', 38, false);
console.log('Persone: ' + Persona.conta)
let d = new Donna('Francesca', 'Neri', 'Milano', 22, true);
console.log('Persone: ' + Persona.conta)

u.compleanno();
d.compleanno();

u.confronta(d);

console.log(u.verso());
console.log(d.verso());

console.log(u.saluta());
console.log(m.saluta());
console.log(d.saluta());

console.log(u.lavora())

Math.random();