const cart = document.querySelector('#cart');
const cartModalOverlay = document.querySelector('.cart-modal-overlay');

cart.addEventListener('click', () => {
  if (cartModalOverlay.style.transform === 'translateX(-200%)'){
    cartModalOverlay.style.transform = 'translateX(0)';
  } else {
    cartModalOverlay.style.transform = 'translateX(-200%)';
  }
})

const closeBtn = document.querySelector ('#close-btn');

closeBtn.addEventListener('click', () => {
  cartModalOverlay.style.transform = 'translateX(-200%)';
});

cartModalOverlay.addEventListener('click', (e) => {
  if (e.target.classList.contains('cart-modal-overlay')){
    cartModalOverlay.style.transform = 'translateX(-200%)'
  }
})

const addToCart = document.getElementsByClassName('add-to-cart');
const productRow = document.getElementsByClassName('product-row');

for (var i = 0; i < addToCart.length; i++) {
  button = addToCart[i];
  button.addEventListener('click', addToCartClicked)
}

function addToCartClicked (event) {
  button = event.target;
  const cartItem = button.parentElement;
  const price = cartItem.getElementsByClassName('product-price')[0].innerText;
  
  const imageSrc = cartItem.getElementsByClassName('product-image')[0].src;
  addItemToCart (price, imageSrc);
  updateCartPrice()
}

function addItemToCart (price, imageSrc) {
    const productRow = document.createElement('div');
    productRow.classList.add('product-row');
    const productRows = document.getElementsByClassName('product-rows')[0];
    const cartImage = document.getElementsByClassName('cart-image');

    for (var i = 0; i < cartImage.length; i++) {
        if (cartImage[i].src == imageSrc){
            alert ('This item has already been added to the cart')
            return;
        }
    }
  
    const cartRowItems = `
        <div class="product-row is-flex is-justify-center is-align-center">
            <img class="cart-image" src="${imageSrc}" alt="">
            <span class ="cart-price">${price}</span>
            <input class="product-quantity" type="number" value="1">
            <button class="remove-btn">x</button>
        </div>
    `;
    productRow.innerHTML = cartRowItems;
    productRows.append(productRow);
    productRow.getElementsByClassName('remove-btn')[0].addEventListener('click', removeItem)
    productRow.getElementsByClassName('product-quantity')[0].addEventListener('change', changeQuantity)
    updateCartPrice()
}

const removeBtn = document.getElementsByClassName('remove-btn');
for (var i = 0; i < removeBtn.length; i++) {
    button = removeBtn[i]
    button.addEventListener('click', removeItem)
}

function removeItem (event) {
    btnClicked = event.target
    btnClicked.parentElement.parentElement.remove()
    updateCartPrice()
}

const quantityInput = document.getElementsByClassName('product-quantity')[0];

for (var i = 0; i < quantityInput; i++){
    input = quantityInput[i]
    input.addEventListener('change', changeQuantity)
}

function changeQuantity(event) {
    const input = event.target
    if (isNaN(input.value) || input.value <= 0){
    input.value = 1
    }
    updateCartPrice()
}

function updateCartPrice() {
    let total = 0
    for (var i = 0; i < productRow.length; i += 2) {
        const cartRow = productRow[i]
        const priceElement = cartRow.getElementsByClassName('cart-price')[0]
        const quantityElement = cartRow.getElementsByClassName('product-quantity')[0]
        const price = parseFloat(priceElement.innerText.replace('$', ''))
        const quantity = quantityElement.value
        total = total + (price * quantity )
    }
    document.getElementsByClassName('total-price')[0].innerText =  '$' + total

    document.getElementsByClassName('cart-quantity')[0].textContent = i /= 2
}
