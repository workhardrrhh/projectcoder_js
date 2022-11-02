const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

let carrito = [];

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
        carrito.push({
            id: service.id,
            img: service.img,
            nombre: service.nombre,
            precio: service.precio,
        });
        console.log(carrito);
    });
});

