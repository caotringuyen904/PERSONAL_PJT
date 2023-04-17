let carts = document.querySelectorAll('.add-cart');

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
        productTitle: "BreakTalk",
        productPrice: 10,
        type: "CAKE",
    },
    {
        id: 11,
        inCart: 0,
        productImg: "./images/c-pasta.jpg",
        productTitle: "Pasta Romna",
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
        productTitle: "CreamO",
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

//render all product
function handleAllProduct() {
    const productTypeAll = document.getElementsByClassName("box-container")
    const productContent = document.querySelector(".content-all")
    let temp = ""
    for (let product of products) {
        temp += `
            <div class="box-container" style="margin:10px">
            <div class ="box">
                <img width=300px src="${product.productImg}"/>
                    <div class="content">
                        <h2>${product.productTitle}</h2>
                        <p>${product.productPrice}.00$</p>
                        <button class="add-cart" onclick="hanldeAddToCart(${product.id})" >Add to cart</button>
                    </div>
            </div>
         </div>
            `
    }

    productContent.innerHTML = ` <h1 class="heading"> All <span>product </span>gallery</h1>  `;
    productTypeAll[0].innerHTML = temp;

    var x = document.getElementById("displayAll");
    x.style.display === "block" ? x.style.display = "none"
        : x.style.display = "block";
}
// handleAllProduct();


//render Type Burger
const handleFilterBurger = () => {
    const productBurger = document.querySelector(".burger");
    const productContent = document.querySelector(".content-burger");

    const filteredBurger = products.filter((product) => product.type === 'BURGER');
    productBurger.innerHTML = "";
    for (let product of filteredBurger) {
        productBurger.innerHTML += ` 
                <div class="box-container" style="margin:10px">
                    <div class ="box">
                        <img width=300px src="${product.productImg}"/>
                            <div class="content">
                                <h2>${product.productTitle}</h2>
                                <p>${product.productPrice}.00$</p>
                                <button class="add-cart" onclick="hanldeAddToCart(${product.id})" >Add to cart</button>
                            </div>
                    </div>
                 </div>
            `
    }
    productContent.innerHTML = ` <h1 class="heading">BUR<span>GER</span></h1> `;

    var x = document.getElementById("displayBurger");
    x.style.display === "none" ? x.style.display = "block"
        : x.style.display = "none";
}


// render Type Chicken

const handleFilterChicken = () => {
    const productChicken = document.querySelector(".chicken");
    const productContent = document.querySelector(".content-chicken");

    const filteredChicken = products.filter((product) => product.type === 'CHICKEN');
    productChicken.innerHTML = "";
    for (let product of filteredChicken) {
        productChicken.innerHTML += ` 
                <div class="box-container" style="margin:10px">
                    <div class ="box">
                        <img width=300px src="${product.productImg}"/>
                            <div class="content">
                                <h2>${product.productTitle}</h2>
                                <p>${product.productPrice}.00$</p>
                                <button class="add-cart" onclick="hanldeAddToCart(${product.id})" >Add to cart</button>
                            </div>
                    </div>
                 </div>
            `
    }
    productContent.innerHTML = ` <h1 class="heading">CHIC<span>KEN</span></h1> `;

    var x = document.getElementById("displayChicken");
    x.style.display === "none" ? x.style.display = "block"
        : x.style.display = "none";
}

// render Type cake

const handleFilterCake = () => {
    const productCake = document.querySelector(".cake");
    const productContent = document.querySelector(".content-cake");

    const filteredCake = products.filter((product) => product.type === 'CAKE');
    productCake.innerHTML = "";
    for (let product of filteredCake) {
        productCake.innerHTML += ` 
                <div class="box-container" style="margin:10px">
                    <div class ="box">
                        <img width=300px src="${product.productImg}"/>
                            <div class="content">
                                <h2>${product.productTitle}</h2>
                                <p>${product.productPrice}.00$</p>
                                <button class="add-cart" onclick="hanldeAddToCart(${product.id})" >Add to cart</button>
                            </div>
                    </div>
                 </div>
            `
    }
    productContent.innerHTML = ` <h1 class="heading">CA<span>KE</span></h1> `;

    var x = document.getElementById("displayCake");
    x.style.display === "none" ? x.style.display = "block"
        : x.style.display = "none";
}


// render Type dessert

const handleFilterDessert = () => {
    const productDessert = document.querySelector(".dessert");
    const productContent = document.querySelector(".content-dessert");

    const filteredDessert = products.filter((product) => product.type === 'DESSERT');
    productDessert.innerHTML = "";
    for (let product of filteredDessert) {
        productDessert.innerHTML += ` 
                <div class="box-container" style="margin:10px">
                    <div class ="box">
                        <img width=300px src="${product.productImg}"/>
                            <div class="content">
                                <h2>${product.productTitle}</h2>
                                <p>${product.productPrice}.00$</p>
                                <button class="add-cart" onclick="hanldeAddToCart(${product.id})" >Add to cart</button>
                            </div>
                    </div>
                 </div>
            `
    }
    productContent.innerHTML = ` <h1 class="heading">DES<span>ERT</span></h1> `;

    var x = document.getElementById("displayDessert");
    x.style.display === "none" ? x.style.display = "block"
        : x.style.display = "none";
}



// get value from input

// func filter type products
const TITLE_ALL = "ALL FOOD AND BEVARAGE";
const TITLE_BURGER = "KING BURGER";
const TITLE_CHICKEN = "IT'S FINGER LICKING GOODS";
const TITLE_CAKE = "EVERY DAY FRESH";
const TITLE_DESSERT = "ENERGY NEW DAY";

//....continue wrtie filter products...



// ADd TO CART PAGE
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

// get cartNumbers on localStorage upload on UI cart-span
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}
onLoadCartNumbers();
//upload change value on local web
function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }
    else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

// Set value after render

function setItems(product) {
    let cartItems = localStorage.getItem('productsIncart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.productImg] == undefined) {
            cartItems = {
                ...cartItems,
                [product.productImg]: product
            }
        }
        cartItems[product.productImg].inCart += 1;
    }
    else {
        product.inCart = 1;
        cartItems = {
            [product.productImg]: product
        }
    }
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

//total cost cart
function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    console.log('My cartCost is:', cartCost);
    console.log(typeof cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.productPrice)
    } else {
        localStorage.setItem('totalCost', product.productPrice);
    }
}

//render UI cart.html

function renderCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let productContainer = document.getElementsByClassName('products-container');
    let cartCost = localStorage.getItem('totalCost');

        console.log(cartItems);
        console.log(productContainer);


    if (cartItems && productContainer) {
        productContainer.innerHTML = ``;
        Object.values(cartItems).map((product) => {
            productContainer.innerHTML += `
            <div class="products">
            <i class="fa-regular fa-circle-xmark"></i>
            <img src= "${product.productImg}">
            <h2>${product.productTitle}</h2>
            </div>

            <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">.No</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr style= {text-align: center;}>
                <td>${index + 1}</td>
                <img width="40px" src="${product.productImg}" >
                <td>${product.productTitle}</td>
                <td>${product.inCart}</td>
                <td>${product.productPrice}.00$</td>
              </tr>
            </tbody>
            <tr>
                <td colspan="2">Total cost</td>
                <td>${cartCost}.00$</td>
              </tr>
          </table>
            `
        });
    }
}
renderCart();


