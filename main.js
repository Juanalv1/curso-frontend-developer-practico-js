const emailMenu = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const mobileMenu = document.querySelector('.mobile-menu')
const burguerMenu = document.querySelector('.icon-menu')

const shoppingMenu = document.querySelector('.shopping-cart')
const shoppingCart = document.querySelector('.shopping-cart-icon')

const cardsContainer = document.querySelector('.cards-container')

let productList = []
productList.push({name: 'guitar', price: 120, image: 'https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'})

productList.push({name: 'guitar', price: 120, image: 'https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'})

productList.push({name: 'guitar', price: 120, image: 'https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'})

productList.push({name: 'guitar', price: 120, image: 'https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'})

// function Product(img, name, price) {
//   this.img = img;
//   this.name = name;
//   this.price = price;
//   };
function renderProducts(arr) {
  


for (i of arr) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  
  const productImg = document.createElement('img');
  productImg.setAttribute('src', product.image);

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');

  const productInfoDiv = document.createElement('div');

  const productInfoName = document.createElement('p');
  productInfoName.innerText = product.name

  const productInfoPrice = document.createElement('p');
  productInfoPrice.innerText= '$' + product.price

  const productInfoFigure = document.createElement('figure');

  const productInfoCartIcon = document.createElement('img');
  productInfoCartIcon.setAttribute('src', './Platzi_YardSale_Icons/bt_add_to_cart.svg')

  productCard.append(productImg, productInfo)
  productInfo.append(productInfoDiv, productInfoFigure)
  productInfoDiv.append(productInfoName, productInfoPrice)
  productInfoFigure.append(productInfoCartIcon)
  cardsContainer.append(productCard)
  
}

console.log(productList)}

emailMenu.addEventListener('click', toggleEmailMenu)
burguerMenu.addEventListener('click', toggleMobileMenu)
shoppingCart.addEventListener('click', toggleShoppingMenu)


function toggleEmailMenu(event) {
  event.preventDefault();
  if (!shoppingMenu.classList.contains('inactive')) {
    console.log('no contiene')
    shoppingMenu.classList.toggle('inactive');
    
  }
  desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
  if (!shoppingMenu.classList.contains('inactive')) {

    shoppingMenu.classList.toggle('inactive');
  }
  mobileMenu.classList.toggle('inactive');
}
  
function toggleShoppingMenu(){
  if (!desktopMenu.classList.contains('inactive')) {
    desktopMenu.classList.toggle('inactive');
  }
  if (!mobileMenu.classList.contains('inactive')) {
    mobileMenu.classList.toggle('inactive');
  } 

  shoppingMenu.classList.toggle('inactive');
}
// function newProductadd(img, nombre, precio){
//   let product = new Product(img, nombre, precio);
//   productList.push(product)

// }

/* <div class="product-card">
          <img src="https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="product">
          <div class="product-info">
            <div>
              <p>120,00$</p>
              <p>Product</p>
            </div>
            <figure>
              <img src="./Platzi_YardSale_Icons/bt_add_to_cart.svg" alt="">
            </figure>
          </div> */

  

