// Contenedor de productos
const products = document.querySelector(".productos-container");
// Contenedor de productos del carrito
const productsCart = document.querySelector(".cart-container");
//El total acumulado en el carrito
const total = document.querySelector(".total");
// El contenedor de las categorías
const categories = document.querySelector(".categorias");
// Un htmlCollection de botones de todas las categorías (mostrar el dataset)
const categoriesList = document.querySelectorAll(".categoria");
// Botón de ver más
const btnCargar = document.querySelector(".btn-cargar");
// Botón de comprar
const btnComprar = document.querySelector(".btn-comprar");
// Botón para abrir y cerrar carrito
const cartBtn = document.querySelector(".cart-icon-container");
// Botón para abrir y cerrar menú
const barsBtn = document.querySelector(".menu-label");
// Carrito
const cartMenu = document.querySelector(".cart");
//  Menú (Hamburguesa)
const barsMenu = document.querySelector(".navbar-list");
//  Overlay estético para menú hamburguesa y el cart.
const overlay = document.querySelector(".overlay");
//  Modal de agregado al carrito.
const successModal = document.querySelector(".add-modal");
//  Boton de vaciado del carrito.
const btnVaciar = document.querySelector(".btn-vaciar");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveLocalStorage = (cartList) => {
  localStorage.setItem("cart", JSON.stringify(cartList));
};

const renderProduct = (product) => {
  const { id, titulo, autor, ilustrador, editorial, precio, texto_alt, categoria, imagen } = product;

  return `
    <div class="producto">
      <img src=${imagen} alt=${texto_alt} />
      <div class="producto-info">
        <!-- top -->
        <div class="producto-info-top">
          <h3>${titulo}</h3>
          <h2>Editorial: ${editorial}</h2>
        </div>

        <!-- Medio -->
        <div class="producto-info-medio">
            <p>Autor: ${autor}</p>
            <p>Ilustrador: ${ilustrador}</p>
        </div>
        
        <!-- Pie -->
        <div class="producto-info-pie">
          <span>$ ${precio}</span>
          <button class="btn-add"
            data-id='${id}'
            data-titulo='${titulo}'     
            data-texto_alt='${texto_alt}' 
            data-precio='${precio}'
            data-imagen='${imagen}'>Agregar
          </button>            
        </div>
      </div>
    </div>
  `;
};

const renderDividedProducts = (index = 0) => {
  // Agregué el testeo de la existencia de "products", para poder compartir el renderizado del
  // carrito en el header en los .html de Inicio de Sesión y Registro.
  if (!products) return;
  products.innerHTML += productsController.dividedProducts[index]
    .map(renderProduct) 
    .join("");
};

const renderFilteredProducts = (category) => {
  const productsList = productsData.filter(
    (product) => product.categoria === category
  );
  products.innerHTML = productsList.map(renderProduct).join("");
};

const renderProducts = (index = 0, category = undefined) => {
  if (!category) {
    renderDividedProducts(index);
    return;
  }
  renderFilteredProducts(category);
};


// Manejo de FILTROS
//Cambia estados relacionados a los filtros
const changeFilterState = (e) => {
  const selectedCategory = e.target.dataset.categoria;
  // necesito cambiar el estado visual de los botones
  changeBtnActiveState(selectedCategory);
  // necesito evaluar si el boton ver mas se muestra o no
  changeShowMoreBtnState(selectedCategory);
};

//Cambiar el estado visual de las categorias (la categoria seleccionada)
const changeBtnActiveState = (selectedCategory) => {
  const categories = [...categoriesList];
  categories.forEach((categoryBtn) => {
    if (categoryBtn.dataset.categoria !== selectedCategory) {
      categoryBtn.classList.remove("activa");
      return;
    }
    categoryBtn.classList.add("activa");
  });
};

//Evalua si muestra o no el botón "Ver más"
const changeShowMoreBtnState = (category) => {
  if (!category) {
    btnCargar.classList.remove("hidden");
    return;
  }
  btnCargar.classList.add("hidden");
};

const applyFilter = (e) => {
  if (!e.target.classList.contains("categoria")) return;
  changeFilterState(e);
  if (!e.target.dataset.categoria) {
    products.innerHTML = "";
    renderProducts();
  } else {
    renderProducts(0, e.target.dataset.categoria);
    productsController.nextProductsIndex = 1;
  }
};

const isLastIndexOF = () =>
  productsController.nextProductsIndex === productsController.productsLimit;

const showMoreProducts = () => {
  renderProducts(productsController.nextProductsIndex);
  productsController.nextProductsIndex++;
  if (isLastIndexOF()) {
    btnCargar.classList.add("hidden");
  }
};

const toggleMenu = () => {
  barsMenu.classList.toggle("open-menu");
  if (cartMenu.classList.contains("open-cart")) {
    cartMenu.classList.remove("open-cart");
    return;
  }
  overlay.classList.toggle("show-overlay");
};

const toggleCart = () => {
  cartMenu.classList.toggle("open-cart");
  if (barsMenu.classList.contains("open-menu")) {
    barsMenu.classList.remove("open-menu");
    return;
  }
  overlay.classList.toggle("show-overlay");
};

const closeOnClick = (e) => {
  if (!e.target.classList.contains("navbar-list")) return;   /*Antes navbar-link*/
  barsMenu.classList.remove("open-menu");
  overlay.classList.remove("show-overlay");
};

const closeOnScroll = () => {
  if (
    !barsMenu.classList.contains("open-menu") &&
    !cartMenu.classList.contains("open-cart")
  )
    return;
  barsMenu.classList.remove("open-menu");
  cartMenu.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
};

const closeOnResize = () => {
  if (
    !barsMenu.classList.contains("open-menu") 
  )
    return;
  barsMenu.classList.remove("open-menu");
  overlay.classList.remove("show-overlay");
};

const closeOnOverlayClick = () => {
  barsMenu.classList.remove("open-menu");
  cartMenu.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
};


// Agregado de productos y manejo del carrito.
const renderCartProduct = (cartProduct) => {
  const { id, titulo, texto_alt, precio, imagen, cantidad } = cartProduct;
  return `    
  <div class="cart-item">
    <img src=${imagen} alt=${texto_alt} en el carrito" />
    <div class="item-info">
      <h3 class="item-title">${titulo}</h3>
      <p class="item-bid">Precio $ </p>
      <span class="item-price">${precio}</span>
    </div>
    <div class="item-handler">
      <span class="quantity-handler down" data-id=${id}>-</span>
      <span class="item-quantity">${cantidad}</span>
      <span class="quantity-handler up" data-id=${id}>+</span>
    </div>
  </div>`;
};

const renderCart = () => {
  // Si el carrito esta vacío, muestro mensaje.
  if (!cart.length) {
    productsCart.innerHTML = `<p class="empty-msg"> No hay productos en el carrito. </p>`;
    return;
  }
  // Si hay elementos en el carrito, los Renderizamos.
  productsCart.innerHTML = cart.map(renderCartProduct).join("");
};

const getCartTotal = () => {
  return cart.reduce(
    (acc, cur) => acc + Number(cur.precio) * Number(cur.cantidad),
    0 );
};

const showTotal = () => {
  total.innerHTML = `$ ${getCartTotal().toFixed(2)}`;
};

const disableBtn = (btn) => {
  if (!cart.length) {
    btn.classList.add("disabled");
    return;
  }
  btn.classList.remove("disabled");
};


// Funcion para agregar productos al carrito.
const addUnitToProduct = (product) => {
  cart = cart.map((cartProduct) => {
    return cartProduct.id === product.id
      ? { ...cartProduct, cantidad: cartProduct.cantidad + 1 }
      : cartProduct;
  });
};

const createCartProduct = (product) => {
  cart = [...cart, { ...product, cantidad: 1 }];
};

const isExistingCartProduct = (product) => {
  return cart.find((item) => item.id === product.id);
};

const createProductData = (id, titulo, texto_alt, precio, imagen) => {
  return { id, titulo, texto_alt, precio, imagen };
};

const checkCartState = () => {
  saveLocalStorage(cart);
  renderCart(cart);
  showTotal(cart);
  disableBtn(btnComprar);
  disableBtn(btnVaciar);
};

const showSuccessModal = (msg) => {
  successModal.classList.add("active-modal");
  successModal.textContent = msg;
  setTimeout(() => {
    successModal.classList.remove("active-modal");
  }, 1500);
};

const addProduct = (e) => {
  if (!e.target.classList.contains("btn-add")) return;
  const {  id, titulo, texto_alt, precio, imagen } = e.target.dataset;

  const product = createProductData( id, titulo, texto_alt, precio, imagen);

  //El producto exista en el carrito
  if (isExistingCartProduct(product)) {
    addUnitToProduct(product);
    showSuccessModal("Se agregó una unidad del producto al carrito");
  } else {
    //No existe el producto en el carrito, lo creo.
    createCartProduct(product);
    showSuccessModal("El producto se ha agregado al carrito");
  }
  checkCartState();
};

const substractProductUnit = (existingProduct) => {
  cart = cart.map((cartProduct) => {
    return cartProduct.id === existingProduct.id
      ? { ...cartProduct, cantidad: cartProduct.cantidad - 1 }
      : cartProduct;
  });
};

const removeProductFromCart = (existingProduct) => {
  cart = cart.filter((product) => product.id !== existingProduct.id);
  checkCartState();
};

const handleMinusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => item.id === id);

  if (existingCartProduct.cantidad === 1) {
    if (window.confirm("¿Desea Eliminar el producto del carrito?")) {
      removeProductFromCart(existingCartProduct);
    }
    return;
  }
  substractProductUnit(existingCartProduct);
};

const handlePlusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => item.id === id);
  addUnitToProduct(existingCartProduct);
};

const handleQuantity = (e) => {
  if (e.target.classList.contains("down")) {
    handleMinusBtnEvent(e.target.dataset.id);
  } else if (e.target.classList.contains("up")) {
    handlePlusBtnEvent(e.target.dataset.id);
  }
  checkCartState();
};

const resetCartItems = () => {
  cart = [];
  checkCartState();
};

const completeCartAction = (confirmMsg, successMsg) => {
  if (!cart.length) return;
  if (window.confirm(confirmMsg)) {
    resetCartItems();
    alert(successMsg);
  }
};


const completeBuy = () => {
  completeCartAction(
    "¿Desea completar su compra?",
    "La compra se ha realizado correctamente"
  );
};

const deleteCart = () => {
  completeCartAction(
    "¿Está seguro de que desea vaciar el carrito?",
    "No hay productos en el carrito"
  );
};

const init = () => {
  renderProducts();
  if (categories) {
    categories.addEventListener("click", applyFilter);
    btnCargar.addEventListener("click", showMoreProducts); 
  }
  barsBtn.addEventListener("click", toggleMenu);
  cartBtn.addEventListener("click", toggleCart);
  barsMenu.addEventListener("click", closeOnClick);
  window.addEventListener("scroll", closeOnScroll);
  window.addEventListener("resize", closeOnResize);
  overlay.addEventListener("click", closeOnOverlayClick);
  document.addEventListener("DOMContentLoaded", renderCart);
  document.addEventListener("DOMContentLoaded", showTotal);

  productsCart.addEventListener("click", handleQuantity);
  if (products){
    products.addEventListener("click", addProduct);
  }
  btnComprar.addEventListener("click", completeBuy);
  btnVaciar.addEventListener("click", deleteCart);

  disableBtn(btnComprar);
  disableBtn(btnVaciar);

};

init();
