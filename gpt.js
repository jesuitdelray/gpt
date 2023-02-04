// Initialize the cart
let cart = [];

// Function to add a product to the cart
function addToCart(product) {
  cart.push(product);
  updateCartCount();
}

// Function to update the number of items in the cart
function updateCartCount() {
  let cartCount = document.querySelector(".cart-count");
  cartCount.textContent = cart.length;
}

// Add event listeners to the "Add to Cart" buttons
let addToCartButtons = document.querySelectorAll(".product button");
for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", function () {
    let product = {
      name: this.previousElementSibling.previousElementSibling.textContent,
      price: this.previousElementSibling.textContent,
    };
    addToCart(product);
  });
}
for (let i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("mouseenter", function () {
    this.style.backgroundColor = "#4CAF50";
    this.style.color = "white";
  });
  addToCartButtons[i].addEventListener("mouseleave", function () {
    this.style.backgroundColor = "white";
    this.style.color = "#4CAF50";
  });
}
let links = document.querySelectorAll("a");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseenter", function () {
    this.style.color = "lightblue";
  });
  links[i].addEventListener("mouseleave", function () {
    this.style.color = "black";
  });
}
let closeAdButton = document.querySelector("#close-ad");
closeAdButton.addEventListener("click", function () {
  let adWindow = document.querySelector("#ad-window");
  adWindow.style.display = "none";
});
document
  .getElementById("registration-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "register.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        alert("Registration successful!");
      }
    };

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    xhr.send(
      "username=" + username + "&email=" + email + "&password=" + password
    );
  });
