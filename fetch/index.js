class Acertijo {
    constructor (consigna, resolucion) {
        this.consigna = consigna
        this.resolucion = resolucion
    }
}
////// variables globales
let textoUno = document.getElementById("valueInput")

let consignaUno = "Necesito que decifres las tres palabras que se encuentran dentro de este texto que empiecen con la letra E. 'Hola, vivimos en el exterior, no podemos contar mucho pero tenemos un escrito que debemos descifrar. Por aqui hace mucho calor, y ayer vimos las primeras estrellas'" 
let resolucionUno = ["exterior", "escrito", "estrellas"]
const acertijoUno = new Acertijo (consignaUno, resolucionUno)
let consignaDos = "Exterior, escrito, estrellas... ¿Qué nos querrán decir? Ah! Todavía no te he contado... Se viene algo muy grande y debemos estar listos. ¡Espera! '7548L932U97268Z' esto dice al final. Ves algunas letras?"
let resolucionDos = "LUZ"
const acertijoDos = new Acertijo (consignaDos, resolucionDos)

////// saludo . input nombre completo. boton de continuar que me lleve al primer acertijo.
let btnContinuar = document.getElementById("btnContinuar")

objetosEnJson()

btnContinuar.onclick = () => {
    let inputNombre = document.getElementById("inputNombre").value;
    validacionNombre (inputNombre)
    localStorage.setItem('guardarNombre', inputNombre)
  }

function validacionNombre (inputNombre) {

    if (inputNombre=="" || inputNombre == null) {
        //textoUno.innerHTML = "Debes completar tu nombre para poder continuar"
        toastify()
    } 
    else {
    textoUno.innerHTML = "Al fin " + inputNombre + " te hemos encontrado! te estabamos buscando. Espero que sepas a lo que nos encontramos. Mientras tanto no tenemos mucho tiempo, agarra papel y lapiz. ¡Vamos!"
    primerAcertijo()
    }
}

function toastify (){
    Toastify({
        text: "Debemos conocer tu nombre",
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "green",
        },
             }).showToast();
}

function primerAcertijo(){

    let btnTresPalabras
    let inputsTresPalabras = document.getElementById("inputsTresPalabras")

    document.getElementById("primerAcertijo").innerHTML = acertijoUno.consigna
    inputsTresPalabras.innerHTML = "<input type='text' class='tresPalabras inputs' /><input type='text' class='tresPalabras inputs' /> <input type='text' class='tresPalabras inputs'/> <button type='button' id='btnTresPalabras' class='btn'><a href='#textoAcertijoDos'>Enviar</a></button> <p id='validacionTresPalabras' class='texto'></p>"

    btnTresPalabras = document.getElementById("btnTresPalabras")

    btnTresPalabras.onclick = () => {
        valueTresPalabras()
    }
  }

 function valueTresPalabras() {
    
        let tresPalabras = document.getElementsByClassName("tresPalabras");
    
        if (tresPalabras.length>0 && ValidacionTresPalabras(tresPalabras, resolucionUno)) {
            let validacionTresPalabras = document.getElementById("validacionTresPalabras")
            validacionTresPalabras.style.display = 'none'
            segundoAcertijo()
        } 
        else {
            document.getElementById("validacionTresPalabras").innerHTML = "Tus palabras no son las correctas"
        }
            
    }
    
    //cada elemento del array tresPalabras debe ser igual que los elementos de resolucionUno sin importar su orden
    function ValidacionTresPalabras (tresPalabras, resolucionUno) {
    
        let flag = false 

        for (let palabra of tresPalabras) {
            if (resolucionUno.includes(palabra.value)) {
                flag = true
            }
            else {
                return false
            }
        }
        return flag
    }


function segundoAcertijo() {
        let segundoAcertijo = document.getElementById("segundoAcertijo")
        let textoAcertijoDos 
        let btnLuz

        segundoAcertijo.innerHTML = " <p id='textoAcertijoDos' class='texto'></p> <input type='text' id='luz' class='inputs'/> <button type='button' id='validacionDos' class='btn'><a href='#resolucionDos'>Enviar</a></button><p id='resolucionDos' class='texto'></p><div id='mapa'></div>"

        textoAcertijoDos = document.getElementById("textoAcertijoDos")
        textoAcertijoDos.innerHTML = consignaDos
        
        btnLuz = document.getElementById("validacionDos")
        btnLuz.onclick = () => {
            validacionDos()
        }

      
    }
    
    function validacionDos (){
        let respuestaUsuario = document.getElementById("luz").value
        let resolucionDos = document.getElementById("resolucionDos")
        
        if (respuestaUsuario.toUpperCase()==="LUZ") {
        resolucionDos.innerHTML = "Excelente. Necesito que busques a ver si encuentras alguna noticia sobre la coordenada que te voy a mandar"
        mostrarMapa()
        }
        else {
            resolucionDos.innerHTML = "vuelve a intentarlo"
        }
    }

    function objetosEnJson() {
        let acertijosJSON = JSON.stringify([new Acertijo (consignaUno, resolucionUno), new Acertijo (consignaDos, resolucionDos)])
        localStorage.setItem("acertijos", acertijosJSON)
    }

    
    let mapa = document.getElementById("mapa") 

    function buscarMapa() {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
                'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com'
            }
        };
        
        fetch('https://google-maps-geocoding.p.rapidapi.com/geocode/json?latlng=37.24804%2C-115.800155&language=en', options)
            .then(response => response.json())
            .then(data => mostrarMapa(data))
            .catch(err => console.error(err));
    }

    function mostrarMapa(data) {
       
    }