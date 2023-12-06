let input = document.querySelector("form input")
let buttonSave = document.querySelector(".save")
let buttonCancel = document.querySelector(".cancel")
let buttonClear = document.querySelector(".clear")
let p = document.createElement("p")
let i = 0;


buttonSave.addEventListener('click', () => {
    localStorage.setItem(`value${i}`, input.value)
    let userSalvati = document.querySelector(".savedUser")
    let p = document.createElement("p")
    p.innerText = input.value
    userSalvati.appendChild(p)
    i++;
    input.value = ""
})

buttonCancel.addEventListener('click', () => {
    document.querySelector(".savedUser p:last-child").remove()
    localStorage.removeItem(`value${i}`) //Rimuove la key , non il valore
    i--
})

buttonClear.addEventListener('click', () => {
    let users = document.querySelectorAll("p")
    users.forEach(user => {
        user.remove()
    });
    localStorage.clear()
})

/* Crea un contatore che tenga conto del tempo che passa, utilizzando sessionStorage. 
Aggiornando la pagina il valore prosegue, chiudendo la pagina - ovviamente - ricomincia. 
Il valore del contatore deve aggiornarsi ad ogni secondo. */

/* function scorrere() {
    let timer = document.querySelector(".timer")
    // SPAN console.log(timer);
    // let tempo = 0;
    let tempo = sessionStorage.getItem("tempo")
    console.log(tempo);
    
 /*    if (tempo) {
        parseInt(tempo)+1;
    } else {tempo=0} */

    // let newValue = (tempo ? parseInt(tempo) : 0)+1
    /* sessionStorage.setItem('tempo', tempo)
    timer.innerText = tempo
}
setInterval(scorrere, 1000) */ 

function timer() {
    let tempo = sessionStorage.getItem("tempo")
    console.log(tempo)
    let timer = document.querySelector(".timer")
    // SPAN console.log(timer);
    setInterval(() => {
        tempo++
        sessionStorage.setItem('tempo', tempo)
        timer.innerText = tempo
    }, 1000);
}
timer()
console.log(timer);
