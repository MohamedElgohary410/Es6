function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) return value;
    }
    return null;
}
document.getElementById("userName").textContent = getCookie("userName");

//=========================================================//
const products = [
    { name: "Book", category: 'library', price: "200$", image: "/assets/cleanCode_book.jpg" },
    { name: "Shirt", category: 'clothes', price: "70$", image: "/assets/black_shirt.jpg" },
    { name: "Phone", category: 'phone', price: "800$", image: "/assets/iphone_14pro.jpg" },
    { name: "Laptop", category: 'electronics', price: "1000$", image: "/assets/laptop.jpg" },
    { name: "Headphones", category: 'electronics', price: "125$", image: "/assets/head.jpg" },
    { name: "Book", category: 'library', price: "150$", image: "/assets/js_book.jpg" },
    { name: "Shirt", category: 'clothes', price: "50$", image: "/assets/blue_shirt.jpg" },
    { name: "Phone", category: 'phone', price: "1000$", image: "/assets/iphone_14pro.jpg" },
    { name: "Laptop", category: 'electronics', price: "1000$", image: "/assets/laptop2.jpg" },
    { name: "Headphones", category: 'electronics', price: "100$", image: "/assets/head2.jpg" },
    { name: "Laptop", category: 'electronics', price: "1000$", image: "/assets/laptop2.jpg" },
    { name: "Headphones", category: 'electronics', price: "100$", image: "/assets/head2.jpg" }
];
const slideImages = ["/assets/1.jpeg", "/assets/2.jpg", "/assets/3.jpg"];
//=========================================================//
let allBtn = document.getElementById("all");
let cloths = document.getElementById("clothes");
let book = document.getElementById("book");
let phones = document.getElementById("phones");
let electronics = document.getElementById("electronics");
allProducts(products);
//=========================================================//
allBtn.addEventListener("click", function () {
    allProducts(products);
});
cloths.addEventListener("click", function () {
    allProducts(products.filter(product => product.category === 'clothes'));
});
book.addEventListener("click", function () {
    allProducts(products.filter(product => product.category === 'library'));
});
phones.addEventListener("click", function () {
    allProducts(products.filter(product => product.category === 'phone'));
});
electronics.addEventListener("click", function () {
    allProducts(products.filter(product => product.category === 'electronics'));
});
//=========================================================//
function allProducts(shownProducts) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    shownProducts.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" id="imgs">
            <div class="info">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
            </div>
            <div class="actions">
                <button class="eye" data-index="${index}"><span class="material-symbols-outlined">visibility</span></button>
                <button class="add" data-index="${index}"><span class="material-symbols-outlined">+</span></button>
            </div>
        `;
        productList.appendChild(productDiv);
    });
}
var slider = document.getElementById("slider");
function slideShow() {
    let i = 0;
    setInterval(function () {
        if (i === slideImages.length) {
            i = 0;
        }
        slider.innerHTML = `<img id="slideImage" src="${slideImages[i]}" alt="slide">`;
        i++;
    }, 1500);
}
slideShow();
//=========================================================//
var eyeButtons = document.querySelectorAll(".eye");
eyeButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const index = button.getAttribute("data-index");
        const selectedProduct = products[index];
        localStorage.setItem("viewedProduct", JSON.stringify(selectedProduct));
        window.open("product.html", "_self");
    });
});
//=========================================================//
var addButtons = document.querySelectorAll(".add");

addButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const index = button.getAttribute("data-index");
        const selectedProduct = products[index];
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(selectedProduct);
        localStorage.setItem("cart", JSON.stringify(cart));
    });
});