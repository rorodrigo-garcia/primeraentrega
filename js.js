class comic {
    constructor (id,titulo,valor, personaje, imagen){
        this.id=id,
        this.titulo=titulo,
        this.valor = valor,
        this.personaje= personaje,
        this.imagen= imagen
    }
    mostrarDatos(){
        console.log(`El numero del comic es ${this.id} , el titulo del es ${this.titulo} , el valor es ${this.valor} y el personaje que lo protagoniza es ${this.personaje}`)
    };
}

const comic1 = new comic(1 , "La era de Apocalipsis" , 1500, "x-men" , "apoxmen01.jpg")
const comic2 = new comic(2, "The dark Knight" , 2000 , "Batman", "the dark night.jpg")
const comic3 = new comic(3, "Spiderverse" , 2500 , "Spiderman" , "spiderverce.jpg")
const comic4 = new comic(4, "El hijo rojo" ,3000 , "Superman", "hijo rojo.jpg")
const comic5 = new comic (5, "Watchmen" , 3500 , "Watchmen", "watchmen.jpg")
const comic6 = new comic(6,"La secta " ,4000 , "Batman" , "la secta.jpg")
const comic7 =new comic (7, "Las 4 estaciones" , 4500 , "Superman" , "las 4 estaciones.jpg")
const comic8 = new comic(8 , "House of M" , 5000 , "x-men" , "House of M.jpg")
const comic9 =new comic (9, "el libro de ezequiel", 5500 , "Spiderman", "el libro de ezequiel.jpg")
const comics = []
comics.push(comic1, comic2, comic3, comic4 , comic5, comic6, comic7 , comic8 , comic9)
let contenedor = document.getElementById("contenedor")
comics.forEach((comic)=>{
    let muestraComic = document.createElement("div")
    muestraComic.innerHTML =` <div id= "${comic.id}"class="card" style="width: 18rem;">
    <img src="./img/${comic.imagen}" class="card-img-top" alt="${comic.titulo} de ${comic.personaje} ">
    <div class="card-body"
      <h4 class="card-title">${comic.titulo}</h4>
      <h5>${comic.personaje}
      <p class="card-text">El valor del comic es de ${comic.valor}</p>
      <a href="#" id="btnCompra" class="btn btn-primary">comprar</a>
      </div>
  </div>`
    contenedor.append(muestraComic)

})
// ponerle un ID a el boton de compra y despues configurarlo asi :
let btnCompra = document.getElementsByClassName ("btn")
for (let compras of btnCompra){
    compras.addEventListener("click" , () =>{
        alert(`Felicitaciones has comprado un comic `)
    })
}


function catalogoCompleto(completo){
    alert ("En la consola puede ver el catalogo")
    console.log("Estos son los comics correspondientes:")
   completo.forEach((comic)=>{
    comic.mostrarDatos()
   } )
    }


function buscarPorTitulo(){
    const buscarTitulo = prompt("Indique el titulo que busca")
    const comicEncontrado = comics.find((comic)=> comic.titulo.toLowerCase() == buscarTitulo.toLowerCase() )
    if(comicEncontrado == undefined){
        alert ("Su comic no fue encontrado")
     } else{
            console.log (`Su comic es: `)
            console.log (comicEncontrado)
        }
    
}    

function buscarPorPersonaje(){
    const buscarPersonaje = prompt ("Ingrese el personaje interesado")
    const busqueda = comics.filter ((comic)=> comic.personaje.toLowerCase() == buscarPersonaje.toLocaleLowerCase() )
    if (busqueda.length == 0){
        alert ("No se encuentra ningun personaje con ese nombre")
    } else{
        console.log ("Los comics de ese personaje son:")
        console.log(busqueda)
        for(let tengoEseComic of busqueda){
            tengoEseComic.mostrarDatos()
        }
    }
}








function cuestionario(){
    let menu = parseInt(prompt(
            `Ingrese la accion correspondiente :
            1- Ver catalogo 
            2- Encontrar por titulo
            3- Buscar comics del mismo personaje 
            0- salir
         `
    ))
    opciones(menu)
}

function opciones (opcionSeleccionada){
    switch(opcionSeleccionada){
        case 0: 
        salir =true
        alert("Gracias,vuelva pronto")
        break
        case 1: 
        catalogoCompleto(comics)
        break
        case 2:
        buscarPorTitulo(comics)
        break
        case 3:
        buscarPorPersonaje(comics)
        break
        default: 
        alert(`Ingreso una opcion que no es correcta` )
    }
}

let salir
while (salir != true) {
    cuestionario()
}
