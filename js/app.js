const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

servicios.forEach((service) => {
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

    comprar.addEventListener("click", () => {
        const repeat  = carrito.some((reapeatService) => reapeatService.id == service.id);

        if (repeat) {
            carrito.map((serv) => {
                if (serv.id === service.id) {
                    serv.cantidad++;
                }
            });
        }   else {
            carrito.push({
                id: service.id,
                img: service.img,
                nombre: service.nombre,
                precio: service.precio,
                cantidad: service.cantidad,
            });
        }
        console.log(carrito);
        console.log(carrito.length);
        carritoCounter();
        saveLocal();
    });
});


//set item
const saveLocal  = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

//get item

JSON.parse(localStorage.getItem("carrito"));