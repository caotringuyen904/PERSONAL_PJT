//ADD TO CART PAGE


let products = [
  {
      id: 1,
      inCart: 0,
      productImg: "./images/b-grill-beef-speacial.jpeg",
      productTitle: "Beef cheese",
      productPrice: 10,
      type: 'BURGER'
  },
  {
      id: 2,
      inCart: 0,
      productImg: "./images/b-chicken-grill.jpg",
      productTitle: "Chicken grill hotcool",
      productPrice: 8,
      type: "BURGER",
  },
  {
      id: 3,
      inCart: 0,
      productImg: "./images/b-chicken.jpg",
      productTitle: "Chicken french fried",
      productPrice: 6,
      type: "BURGER",
  },
  {
      id: 4,
      inCart: 0,
      productImg: "./images/b-tuna_fish_double.jpg",
      productTitle: "Tuna fish delicous",
      productPrice: 9,
      type: "BURGER",
  },
  {
      id: 5,
      inCart: 0,
      productImg: "./images/f-chicken-boneless.png",
      productTitle: "Chicken boneless",
      productPrice: 12,
      type: "CHICKEN",
  },
  {
      id: 6,
      inCart: 0,
      productImg: "./images/f-chicken-1p.png",
      productTitle: "Chicken drum stick",
      productPrice: 10,
      type: "CHICKEN",
  },
  {
      id: 7,
      inCart: 0,
      productImg: "./images/f-chicken-finger-6p.png",
      productTitle: "Chicken finger",
      productPrice: 14,
      type: "CHICKEN",
  },
  {
      id: 8,
      inCart: 0,
      productImg: "./images/f-chicken-combo.png",
      productTitle: "Combo happy",
      productPrice: 14,
      type: "CHICKEN",
  },
  {
      id: 9,
      inCart: 0,
      productImg: "./images/c-cupcake-chocolate.jpg",
      productTitle: "Valentine",
      productPrice: 12,
      type: "CAKE",
  },
  {
      id: 10,
      inCart: 0,
      productImg: "./images/c-grape-bread.jpg",
      productTitle: "Break Talk",
      productPrice: 10,
      type: "CAKE",
  },
  {
      id: 11,
      inCart: 0,
      productImg: "./images/c-pasta.jpg",
      productTitle: "Pasta Roma",
      productPrice: 14,
      type: "CAKE",
  },
  {
      id: 12,
      inCart: 0,
      productImg: "./images/c-sandwich.jpg",
      productTitle: "Sanwich cheese egg",
      productPrice: 14,
      type: "CAKE",
  },
  {
      id: 13,
      inCart: 0,
      productImg: "./images/d-drink-fruirt.jpg",
      productTitle: "Fruirt fresh cool",
      productPrice: 12,
      type: "DESSERT",
  },
  {
      id: 14,
      inCart: 0,
      productImg: "./images/d-cream.jpg",
      productTitle: "Cream Orie",
      productPrice: 10,
      type: "DESSERT",
  },
  {
      id: 15,
      inCart: 0,
      productImg: "./images/d-coffee-crosssaint.jpg",
      productTitle: "CrosSaint TourLes",
      productPrice: 14,
      type: "DESSERT",
  },
  {
      id: 16,
      inCart: 0,
      productImg: "./images/d-chocolate.jpg",
      productTitle: "Chocolate Dickiese",
      productPrice: 14,
      type: "DESSERT",
  },
]

// import products from "./index.js";
  //RENDER BUILD CART

  function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}
onLoadCartNumbers();

  function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
        console.log(cartItems);


    let productContainer = document.querySelector('.products-container');
    let productTotal = document.querySelector('.product-total')
    let cartCost = localStorage.getItem('totalCost');

    // console.log(cartItems);
    // console.log(typeof cartItems);


    if (cartItems && productContainer) {
      productContainer.innerHTML = `
      <div class="product-title">
                    <span class="col">.No</span>
                    <span class="col">Product</span>
                    <span class="col">Price</span>
                    <span class="col">Quantity</span>
                    <span class="col">Total</span>
        </div>
      `;
      Object.values(cartItems).map((product, index) => {
        productContainer.innerHTML += `
        <div class="product">
                    <span class="col">${index + 1}</span>
                    <span class="col"> 
                        <button onClick="removeProduct(${product.id})">Remove</button>
                        <img width="50px" height="40px" text-align="center" src="${product.productImg}" >
                        <h5>
                            ${product.productTitle}
                        </h5>
                    </span>
                    <span class="col">${product.productPrice}.00$</span>
                    <span class="col">
                    <button class="asc">+</button>
                    ${product.inCart}
                    <button class="desc">-</button>

                    </span>
                    <span class="col">${product.inCart * product.productPrice}.00$</span>
        </div>
        `
      })

      productTotal.innerHTML = `
      <div class="product-total">
             <span>Total cost: &nbsp&nbsp </span>
              <span> ${cartCost}.00$</span>
        </div> `;
    }
  }

  displayCart();


  function removeProduct(itemId){

    // remove product in cart
    let cartItems = JSON.parse(localStorage.getItem('productsInCart')) || [];
    console.log(cartItems);

    let cartItemsArray = Object.values(cartItems);

    const index = cartItemsArray.findIndex(item => item.id === itemId)
    console.log(index);

    if(index !== -1) {
        cartItemsArray.splice(index,1);

        console.log(cartItemsArray);

        console.log('Item removed from cart:', itemId);
    }

    // Update the cartItemsArray in localStorage
    localStorage.setItem('productsInCart', JSON.stringify(cartItemsArray));
    console.log('Array in localStorage updated:', cartItemsArray);

     
    //update TotalCost
    const prices = cartItemsArray.map(price => price.inCart * price.productPrice);
    const sumPrice = prices.reduce((acc,cur) => acc + cur, 0);

    console.log(sumPrice);

    localStorage.setItem('totalCost', sumPrice);

    console.log(sumPrice);
    //update TotalCost //

    // update cartNumbers
    const cartNumbers = cartItemsArray.map(cartNum => cartNum.inCart);
    const sumCartNum = cartNumbers.reduce((acc,cur) => acc + cur, 0);
    localStorage.setItem('cartNumbers', sumCartNum);
    onLoadCartNumbers();

    // update cartNumbers





    // remove product in cart //



    displayCart();
    
   }



    
