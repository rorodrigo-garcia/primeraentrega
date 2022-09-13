class comic {
    propiedades (id,titulo,valor, personaje){
        this.id=id,
        this.titulo=titulo,
        this.valor = valor
        this.personaje= personaje
    }
    mostrarDatos(){
        console.log(`El numero del comic es ${this.id} , el titulo del es ${this.titulo} , el valor es ${this.valor} y el personaje que lo protagoniza es ${this.personaje}`)
    }
}

const comic1 = new comic(1 , "La era de Apocalipsis" , 1500, "x-men")
const comic2 = new comic(2, "The dark Knight" , 2000 , "Batman")
const comic3 = new comic(3, "Spiderverse" , 2500 , "Spiderman")
const comic4 = new comic(4, "El hijo rojo" ,3000 , "Superman")
const comic5 = new comic (5, "Watchmen" , 3500 , "Watchmen")
const comic6 = new comic(6,"La secta " ,4000 , "Batman")
const comic7 =new comic (7, "Las 4 estaciones" , 4500 , "Superman")
const comic8 = new comic(8 , "M of house" , 5000 , "x-men")
const comic9 =new comic (9, "el libro de ezequiel", 5500 , "Spiderman")
const comics = []
comics.push(comic1, comic2, comic3, comic4 , comic5, comic6, comic7 , comic8 , comic9)

function catalogoCompleto(completo){
    alert ("En la consola puede ver el catalogo")
    console.log("Estos son los comics correspondientes:")
   completo.forEach((comic)=>{
    comic.mostrarDatos()
   } )
    }


function buscarPorTitulo(){
    const buscarTitulo = prompt("Indique el titulo que busca")
    const comicEncontrado = comics.find((comic)=> comic.toLowerCase() == buscarTitulo.toLowerCase() )
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
        alert(`Ingreso uan opcion que no es correcta` )
    }
}

let salir
while (salir != true) {
    cuestionario()
}
