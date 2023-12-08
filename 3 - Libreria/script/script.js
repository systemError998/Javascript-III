//Url a cui fare chiamata
let urlLibreria = 'https://striveschool-api.herokuapp.com/books'
//request , oggetto in grado di fare chiamate 
let request = new XMLHttpRequest()
//definisco metodo chiamata , url da chiamare
request.open('GET', urlLibreria)
//Eseguo la chiamata
request.send()
request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
        // console.log(request.status);
        //console.log(this.readyState);
        console.log("Request completata");
        let json = JSON.parse(request.response)
        // console.log(json);
        createCard(json)
    } 
}

function createCard(libri) {
    let booksSpace = document.querySelector(".row")
    // console.log(booksSpace);
    // console.log(libri);
    for(let i=0; i<libri.length; i++) {
        let div = document.createElement("div")
        booksSpace.appendChild(div)
        div.classList.add("col")
        div.innerHTML = `
                <div class="card">
                    <img src="${libri[i].img}" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${libri[i].title}</h5>
                    </div>
                    

                    <ul class="price list-group list-group-flush">
                        <li class="list-group-item category">${libri[i].category} <span class="float-end"> € ${libri[i].price}</span> </li>
                    </ul>
                    <div class="card-body d-flex justify-content-between">
                        <a href="#" class="btn btnShop card-link">Compra Ora</a>
                        <a href="#" class="btn btnDelete card-link"><i class="bi bi-trash-fill"></i></a>
                    </div>
                </div> `
    }   


        let btnDelete = document.querySelectorAll(".btnDelete")
        // console.log(btnDelete);
        btnDelete.forEach(btn => {
            btn.addEventListener('click', (d) => {
                console.log(d.target);
                d.target.parentNode.parentNode.parentNode.classList.add("d-none")
            })
        });

        //Button COMPRA ORA
        let btnShop = document.querySelectorAll(".btnShop")
        //console.log(btnShop);
        let shopItems = document.querySelector(".modal-body")
        // console.log(shopItems);
        // shopItems.innerText = "bella pe te"
        btnShop.forEach((btn, index) => {
            btn.addEventListener('click', (s) => {
                s.preventDefault()
                sessionStorage.setItem(`title${index}`, libri[index].title)
                let items = document.createElement("p")
                items.classList.add("titleBookShop")
                shopItems.appendChild(items)
                items.innerHTML = ` ${libri[index].title} 
                                    <span class="priceBookShop"> €${libri[index].price} </span> ` 
            // CREARE MESSAGGIO DI AGGIUNTA AL CARRELLO
                /* let alert = document.createElement("div").classList.add("alert")
                btn.appendChild("alert") */

            //creare tot carrello
            })
        });

}
