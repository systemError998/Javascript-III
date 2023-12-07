//Url a cui fare chiamata
let urlLibreria = 'https://striveschool-api.herokuapp.com/books'

//request , oggetto in grado di fare chiamate 
let xhr = new XMLHttpRequest()

let arrayLibri = []

//definisco metodo chiamata , url da chiamare
xhr.open('GET', urlLibreria)
//Eseguo la chiamata
xhr.send()
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log("completata");
        let json = JSON.parse(xhr.response)
        console.log(json);
        // console.log(json[0].title);
       /*  json.forEach(libro => {
            arrayLibri.push(libro)
        }); */
        // console.log(arrayLibri);
        createCard(json)
    }
}

// console.log(arrayLibri);

function createCard(libri) {
    let booksSpace = document.querySelector(".row")
    console.log(booksSpace);
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
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${libri[i].category}</li>
                        <li class="list-group-item">${libri[i].price}</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="btn btnShop card-link">"Compra Ora"</a>
                        <a href="#" class="btn btnDelete card-link">"Scarta"</a>
                    </div>
                </div> `
                
                // console.log(btnDelete);
                let btnDelete = document.querySelectorAll(".btnDelete")
                console.log(btnDelete);
                btnDelete[i].addEventListener('click', (b) => {
                    console.log(b.target);
                    b.target.parentNode.parentNode.parentNode.classList.add("d-none")
                    })

                let btnShop = document.querySelectorAll(".btnShop")
                btnShop[i].addEventListener('click', (s) => {
                    console.log(s.target);
                    localStorage.setItem("title", s.title)
                    })
    }
}


