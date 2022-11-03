const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText = "x";
    modalButton.className = "modal-header-button";

    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalButton);

    carrito.forEach((service) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
            <img src="${service.img}">
            <h3>${service.nombre}</h3>
            <p>${service.precio} $</p>
            <span class="restar"> - </span>
            <p>Cantidad: ${service.cantidad}</p>
            <span class="sumar"> + </span>
            <p>Total: ${service.cantidad * service.precio}</p>
            <span class="delete-service"> ❌ </span>
        `;

        modalContainer.append(carritoContent);

        let restar = carritoContent.querySelector(".restar")

        restar.addEventListener("click", () => {
            if (service.cantidad !==1) {
                service.cantidad--;
            }
            saveLocal();
            pintarCarrito();
        });

        let sumar = carritoContent.querySelector(".sumar")

        sumar.addEventListener("click", () => {
            service.cantidad++;
            saveLocal();
            pintarCarrito();
        });

        let eliminar = carritoContent.querySelector(".delete-service");

        eliminar.addEventListener("click", () => {
            eliminarServicio(service.id);
        });
    });

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `Total a pagar: ${total} $`;
    modalContainer.append(totalBuying);
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarServicio = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    console.log(foundId);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
});
    carritoCounter();
    saveLocal();
    pintarCarrito();
};


const  carritoCounter =  () => {
    cantidadCarrito.style.display = "block";

    const carritoLength = carrito.length;

    localStorage.setItem ("carritoLength", JSON.stringify(carritoLength))

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();