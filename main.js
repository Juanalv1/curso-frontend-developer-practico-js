const emailMenu = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const emailArrow = document.querySelector('#email-arrow')

const mobileMenu = document.querySelector('.mobile-menu')
const burguerMenu = document.querySelector('.icon-menu')

const shoppingMenu = document.querySelector('.shopping-cart')
const shoppingCart = document.querySelector('.shopping-cart-icon')
const shoppingArrow = document.querySelector('#shopping-arrow')

const cardsContainer = document.querySelector('.cards-container'
)

let productList = []
productList.push({name: 'guitar', price: 120, image: 'https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'})

productList.push({name: 'guitar', price: 120, image: 'https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'})

productList.push({name: 'guitar', price: 120, image: 'https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'})

productList.push({name: 'guitar', price: 120, image: 'https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'})
renderProducts(productList)


const productDetail =document.querySelector('.product-detail');

const asideClose = document.querySelector('.product-detail-close')
asideClose.addEventListener('click', toggleProductDetail)




// function Product(img, name, price) {
//   this.img = img;
//   this.name = name;
//   this.price = price;
//   };
emailMenu.addEventListener('click', toggleEmailMenu)
emailArrow.addEventListener('click', toggleEmailMenu)
burguerMenu.addEventListener('click', toggleMobileMenu)
shoppingCart.addEventListener('click', toggleShoppingMenu)
shoppingArrow.addEventListener('click', toggleShoppingMenu)

function renderProducts(arr) {
for (i of arr) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  
  const productImg = document.createElement('img');
  productImg.setAttribute('src', i.image);

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');

  const productInfoDiv = document.createElement('div');

  const productInfoPrice = document.createElement('p');

  productInfoPrice.innerText= '$' + i.price
  const productInfoName = document.createElement('p');
  productInfoName.innerText = i.name

  

  const productInfoFigure = document.createElement('figure');

  const productInfoCartIcon = document.createElement('img');
  productInfoCartIcon.setAttribute('src', './Platzi_YardSale_Icons/bt_add_to_cart.svg')

  productCard.append(productImg, productInfo)
  productInfo.append(productInfoDiv, productInfoFigure)
  productInfoDiv.append(productInfoPrice,productInfoName)
  productInfoFigure.append(productInfoCartIcon)
  cardsContainer.append(productCard)
  
 
  productCard.addEventListener('click', toggleProductDetail)
}

console.log(productList)}




function toggleEmailMenu(event) {
  event.preventDefault();
  if (!productDetail.classList.contains('inactive')) {
    productDetail.classList.toggle('inactive');
  }
  if (!shoppingMenu.classList.contains('inactive')) {
    shoppingMenu.classList.toggle('inactive');
  }
  desktopMenu.classList.toggle('inactive');
  
}
function toggleMobileMenu() {
  if (!shoppingMenu.classList.contains('inactive')) {

    shoppingMenu.classList.toggle('inactive');
  }
  if (!productDetail.classList.contains('inactive')) {

    productDetail.classList.toggle('inactive');
  }
  mobileMenu.classList.toggle('inactive');
}
  
function toggleShoppingMenu(){
  
  if (!mobileMenu.classList.contains('inactive')) {
    mobileMenu.classList.toggle('inactive');
  } 
  if (!productDetail.classList.contains('inactive')) {
    productDetail.classList.toggle('inactive');
  } 
  if (!desktopMenu.classList.contains('inactive')) {
    desktopMenu.classList.toggle('inactive');
  }

  shoppingMenu.classList.toggle('inactive');
}
function toggleProductDetail(){
  if (!shoppingMenu.classList.contains('inactive')) {

    shoppingMenu.classList.toggle('inactive');
  }
  if (!desktopMenu.classList.contains('inactive')) {

    desktopMenu.classList.toggle('inactive');
  }
  
  productDetail.classList.toggle('inactive')
}

/* <aside class="product-detail inactive">
      <div class="product-detail-image-container">
         <img src="./Platzi_YardSale_Icons/icon_close.png" alt="close" class="product-detail-close">
         <img src="https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Guitar" class="aside-product-image"></div>
         <div class="product-info-aside">
           <p>$35,00</p>
           <p>Bike</p>
           <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
           <button class="aside-button add-to-cart-button">
             <img src="./Platzi_YardSale_Icons/bt_add_to_cart.svg" alt="add to cart">
             Add to cart
           </button>
       </div>
     </aside> */