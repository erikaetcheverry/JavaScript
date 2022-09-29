// que ingrese su nombre 
// si el nombre es vacio que le diga que complete su nombre
// saludo a la persona
// que ingrese cantidad de usuarios
// si esta en blanco que le diga que lo complete
// si lo completa se le pide la cantidad de usurios que desea agregar
// se ve en la consola el nombre de esos usuarios   

let usuario = prompt("ingrese su usuario")

if (usuario == "") {
alert("Debe completar el usuario")
}
else{
    alert("Bienvenida/o " + usuario)

    let usuariosCantidad = parseInt(prompt("cuantos usuarios quieres ingresar?"))

    if (usuariosCantidad == "")
    {
        alert("Debe completar la cantidad de usuarios")
    }
    else{
        for (let i=1; i <= usuariosCantidad ; i++) {
            let usuarios = prompt("ingrese usuario n°" + i)
            console.log(usuarios)
        }
        
    }
}



