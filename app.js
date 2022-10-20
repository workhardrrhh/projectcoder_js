const shopContent = document.getElementById("shopContent");

let carrito = [];

let seleccion = prompt("¡Hola! ¿desea adquirir algun servicio? (si/no)")

while(seleccion != "si" && seleccion !== "no"){
    alert("Por favor ingresa si o no")
    seleccion = prompt("¡Hola! ¿desea adquirir algun servicio? (si/no)")
}

if(seleccion === "si"){
    alert("A continuacion nuestra lista de servicios:")
    let todoslosServicios = servicios.map((servicio) => servicio.nombre + " " + servicio.precio + "$");
    alert(todoslosServicios.join(" - "))
}   else if (seleccion == "no"){
    alert("¡Gracias por visitarnos! ¡Hasta pronto!")
}

while(seleccion != "no"){
    let servicio = prompt("Agrega un servicio al carrito")
    let precio = 0

    if(servicio == "CV Recien Graduado" || servicio == "CV Profesional" || servicio == "CV Ejecutivo"){
        switch(servicio) {
            case "CV Recien Graduado":
                precio = 99;
                break;
            case "CV Profesional":
                precio = 129;
                break;
            case "CV Ejecutivo":
                precio = 179;
                break;
            default:
                break;
        }
    let unidades = parseInt(prompt("¿Cuantas unidades desea adquirir?"))

    carrito.push({servicio, unidades, precio})
    console.log(carrito)
    } else {
        alert("Este servicio no se encuentra disponible")
    }

    seleccion = prompt("¿Desea seguir comprando?")

    while(seleccion === "no"){
        alert("¡Gracias por su compra! ¡Hasta pronto!")
        carrito.forEach((carritoFinal) => {
            console.log(`servicio: ${carritoFinal.servicio}, unidades: ${carritoFinal.unidades}, total a pagar por servicio ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por su compra es: ${total}`)


servicios.forEach((service)=> {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src="${service.img}">
        <h3>${service.nombre}</h3>
        <p class="price">${service.precio} $</p>  
    `;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "Comprar";

    content.append(comprar);
});