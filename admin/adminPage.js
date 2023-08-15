// Product list array to store added products
var productList = [];

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    var name = document.getElementById('name').value;
    var price = document.getElementById('price').value;
    var imageFile = document.getElementById('image').files[0];
    var type = document.getElementById('type').value;

    // Create a product object with the form values
    var product = {
        productName: name,
        productPrice: price,
        productImg: imageFile,
        type: type
    };

    // Add the product to the product list array
    productList.push(product);

    // Perform further processing with the product object
    console.log('New Product:', product);
    
    // Render the updated product list
    renderProductList();

    // Clear the form inputs
    document.getElementById('name').value = '';
    document.getElementById('price').value = '';
    document.getElementById('image').value = '';
    document.getElementById('type').value = '';
}


// Function to render the product list
function renderProductList() {
    var productListContainer = document.getElementById('productList');
    productListContainer.innerHTML = ''; // Clear the container

    // Loop through the product list array and generate the HTML for each product
    productList.forEach(function(product) {
      var productItem = `<div class="product">` +
                          `<img src="` + URL.createObjectURL(product.productImg) + `" alt="` + product.productName + `">` +
                          `<h3>` + product.productName + `</h3>` +
                          `<p>Price: $` + product.productPrice + `</p>` +
                        `</div>`;
  
      productListContainer.innerHTML += productItem;
    });
}

// Add event listener to the form
var form = document.getElementById('addProductForm');
form.addEventListener('submit', handleFormSubmit);





