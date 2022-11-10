class Acertijo {
    constructor (consigna, resolucion) {
        this.consigna = consigna
        this.resolucion = resolucion
    }
}
////// variables globales
let textoUno = document.getElementById("valueInput")

let consignaUno = "Necesito que decifres las tres palabras que se encuentran dentro de este texto que empiecen con la letra E. 'Hola, vivimos al exterior, no podemos contar mucho pero tenemos un escrito que debemos descifrar. Por aqui hace mucho calor, y ayer vimos las primeras estrellas'" 
let resolucionUno = ["exterior", "escrito", "estrellas"]
const acertijoUno = new Acertijo (consignaUno, resolucionUno)
let consignaDos = "Exterior, escrito, estrellas... ¿Qué nos querrán decir? Ah! Todavía no te he contado... Se viene algo muy grande y debemos estar listos. ¡Espera! ¿Esta imagen podrá ayudarnos?"
let resolucionDos = "area 51"
const acertijoDos = new Acertijo (consignaDos, resolucionDos)
let consignaTres = "Excelente. Si quieres salvarte, deberás demostrar tu valentía ¿Estás preparado? Las coordenadas son ______ "
const acertijoTres = new Acertijo (consignaTres, "")



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
    textoUno.innerHTML = "Al fin " + inputNombre + " te hemos encontrado! te estabamos buscando. Espero que sepas a lo que nos encontramos. Mientras tanto no tenemos mucho tiempo. ¡Vamos!"
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
            if (resolucionUno.includes(palabra.value.toLowerCase())) {
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
        let btnArea

        segundoAcertijo.innerHTML = " <p id='textoAcertijoDos' class='texto'></p><img src='multimedia/estrellas.jpg' class='imagen'> <input type='text' id='area51' class='inputs'/> <button type='button' id='validacionDos' class='btn'><a href='#resolucionDos'>Enviar</a></button><p id='resolucionDos' class='texto'></p>"

        textoAcertijoDos = document.getElementById("textoAcertijoDos")
        textoAcertijoDos.innerHTML = consignaDos
        
        btnArea = document.getElementById("validacionDos")
        btnArea.onclick = () => {
            validacionDos()
        }

      
    }
    
    function validacionDos (){
        let respuestaUsuario = document.getElementById("area51").value
        let resolucionDos = document.getElementById("resolucionDos")

        if (respuestaUsuario.toLowerCase()==="area 51") {
        resolucionDos.innerHTML = acertijoTres.consigna
        tercerAcertijo ()
        }
        else {
            resolucionDos.innerHTML = "vuelve a intentarlo"
        }
    }

    function tercerAcertijo () {
    let tercerAcertijo = document.getElementById("tercerAcertijo")
    
    tercerAcertijo.innerHTML = "<form> <input type='radio' name='choice' value='37°16′35″N 115°45′20″O'> 37°16′35″N 115°45′20″O <input type='radio' name='choice' value='38°0'1.5'' S 57°33.372' O'> 38°0'1.5'' S 57°33.372' O <input type='radio' name='choice' value='40°27'49.2'' N 3°44.953' O'> 40°27'49.2'' N 3°44.953' O <input type='radio' name='choice' value='37°5'24.9'' N 95°42.773' O'> 37°5'24.9'' N 95°42.773' O </form> <button onclick='validacionTres()' class='btn'>Me siento con suerte</button><div id='mapa'></div>"
}

    function validacionTres(){

            var radios = document.getElementsByName('choice');
            var valor= "";
            for (var i = 0, length = radios.length; i < length; i++) {
                if (radios[i].checked) {
                   valor = radios[i].value; 
                   break;
                 }
            }
            
            if (valor == "" ) {
              alert('please select choice answer');
            } else if ( valor == "37°16′35″N 115°45′20″O" ) {
              buscarMapa()
            } else {
              alert('Answer is wrong');
            }
          };


    function objetosEnJson() {  
        let acertijosJSON = JSON.stringify([new Acertijo (consignaUno), new Acertijo (consignaDos)])
        localStorage.setItem("acertijos", acertijosJSON)
    }

    async function buscarMapa() {

        const options = {
            method: 'GET'
        };
        
        fetch('https://maps.googleapis.com/maps/api/staticmap?center=37.1635,-115.4840&zoom=6&markers=37.1635,-115.4840&size=400x400&key=AIzaSyAFH5E3FCuIvWIT8C1mPns5NvecNBE_Wng', options)
        .then((data) => mostrarMapa(data.url))
        .catch((err) => console.error(err));

    } 

    async function mostrarMapa(data) {
        let mapa = document.getElementById("mapa")
       
        mapa.innerHTML = "<p class='texto'>Acá te espero! Se termina mi tiempo de conexion. No sabes cuanto te agradezco la ayuda. Te veo pronto<p><img src='"+data+"'>";
    }
