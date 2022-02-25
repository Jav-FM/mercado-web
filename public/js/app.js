const productos = [];

const renderCarrito = document.getElementById("modalRenderProductos");
const botonesProductos = document.getElementsByClassName("boton-producto");
const iconoCarrito = document.getElementById("botonCarrito");
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    alertPlaceholder.append(wrapper)
}

for (i = 0; i < botonesProductos.length; i++) {
  botonesProductos[i].addEventListener("click", (e) => {
    productos.push(e.target.dataset.producto);
    e.target.classList.add("disabled");
    alert(`Producto "${e.target.dataset.producto}" agregado carrito.`, 'success')
  });
}

const productosParaRender = () => {
  renderCarrito.innerHTML = "";
  productos.forEach((item) => {
    renderCarrito.innerHTML += `
        <img src="/img/${item}.png" class="img-thumbnail rounded mt-2" alt="${item}" />
        `;
  });
};

iconoCarrito.addEventListener("click", () => {
  productosParaRender();
});
