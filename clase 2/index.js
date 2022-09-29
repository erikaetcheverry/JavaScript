// que ingrese su nombre 
// saludo a la persona
// si el nombre es vacio que le diga que complete su nombre
// que ingrese su contraseña
// si esta en blanco que le diga que lo complete
// si la contraseña es diferenta a pruebajs que le diga que no es
// y si es pruebajs. Bienvenido !!

let usuario = prompt("ingrese su usuario")

if (usuario == "") {
alert("Debe completar el usuario")
}
else{
    alert("Bienvenida/o " + usuario)

    let contraseña= prompt("ingrese su contraseña")

    if (contraseña == "pruebajs")
            {
            let adivinanza = prompt("excelente! ahora adivina qué número estoy pensando ¿el 1, 2, o 3?")
            if (adivinanza == "1")
            {
                alert("Ups! Será la próxima")
            } 
            else if (adivinanza == "2"){
                alert("Ups! Será la próxima")
            }
            else if(adivinanza == "3"){
                alert("Ganaste! Felicidades " + usuario)
            }
            else{
                alert("Lo siento, no está dentro de mis opciones, vuelve a intentarlo!")
            }
            }
    else if(contraseña == "")
    {
        alert("Debe completar la contraseña")
    }
    else{
    alert("ouch! contraseña incorrecta")
    }
}



