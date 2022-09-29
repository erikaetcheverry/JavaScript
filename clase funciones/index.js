
//pedir nombre (variable)
//bienvenido nombre a esat nueva aventura. Al fin te hemos encontrado! te estabamos buscando. sabes a lo que nos enfrentamos si o no? (alert)
// (if) si dice que si, excelente! pues es muy dificil de explicar sino... 
//y si dice que no o eeee.. es algo dificil de explicar. mientras tanto no tenemos mucho tiempo, necesito que descifres las tres palabras que se encuentran dentro de este texto que empiecen con la letra e. "Hola, vivimos en el exterior, no podemos contar mucho pero tenemos un escrito que debemos descifrar. Por aqui hace mucho calor,y  ayer vimos las primeras estrellas "
//(function) ingrese palabra 1, palabra 2, palabra 3
// (alert)Exterior, escrito, estrellas, qué nos querrán decir? Ah! todavia no te he contado.. uf!! se viene algo muy grande y debemos estar listos. Espera! "7548L932U97268Z" esto dice al final. Ves algunas letras?
//(fuction)ingresa letras
// (alert)continuara.. Si quieres salvarte, deberás demostrar tu valía en el proceso de selección más selectivamente selectivo de la historia de la humanidad, estas preparado?

saludo()

function saludo() {

    let nombre = prompt("Hola! queremos darte la bienvenida a esta nueva aventura. Por favor, escribe tu nombre.")

    if (nombre=="" || nombre==null) {
        alert("Ups! Parece que no ha completado su nombre")
        saludo()
    }
    else {
        let bienvenida = prompt("Al fin " + nombre + " te hemos encontrado! te estabamos buscando. Sabes a lo que nos enfrentamos si, o no?")
        acertijo1(bienvenida)
    }
}

function acertijo1(bienvenida) {
    
    let adivinanza1 = "Eeee.. es algo dificil de explicar, agarra papel y lapiz y toma nota. Mientras tanto no tenemos mucho tiempo"

    let adivinanza1bis = "Excelente! Pues es muy dificil de explicar sino.  Mientras tanto no tenemos mucho tiempo, agarra papel y lapiz. ¡Vamos!"

    let adivinanza = "Necesito que decifres las tres palabras que se encuentran dentro de este texto que empiecen con la letra E. 'Hola, vivimos en el exterior, no podemos contar mucho pero tenemos un escrito que debemos descifrar. Por aqui hace mucho calor, y ayer vimos las primeras estrellas'"
    
    if (bienvenida=="no") {
        alert(adivinanza1)
        alert(adivinanza)
        tresPalabras ()
    }
    else if (bienvenida=="si") {
        alert (adivinanza1bis)
        alert(adivinanza)
        tresPalabras()
    }
    else {
        alert("Lo siento! no entiendo tu respuesta")
    }
}

function tresPalabras() {
    let palabra  
    let palabra2  
    let palabra3 

    for (let i=1 ; i<=3 ; i++) {
        if (i===1) {
            palabra = prompt ("ingrese palabra nº" + i)
        }else if(i===2){
            palabra2 = prompt ("ingrese palabra nº" + i)
        }else if(i===3){
            palabra3 = prompt ("ingrese palabra nº" + i)
        }
    }

    if (palabra === "exterior" && palabra2 === "escrito" && palabra3 === "estrellas") {
        acertijo2()
    }
    else {
        alert ("Parece que no son las palabras correctas")
        tresPalabras()
    }
}

function acertijo2() {
    let acertijo = (prompt("Exterior, escrito, estrellas... ¿Qué nos querrán decir? Ah! Todavía no te he contado... Se viene algo muy grande y debemos estar listos. ¡Espera! '7548L932U97268Z' esto dice al final. Ves algunas letras?"))

    if (acertijo.toUpperCase()==="LUZ") {
        alert("Excelente. Si quieres salvarte, deberás demostrar tu valentía ¿Estás preparado? Continuará")
    }
    else {
        alert ("Vuelve a intentarlo!")
        acertijo2()
    }
}