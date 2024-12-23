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

const productData = JSON.parse(localStorage.getItem("viewedProduct"));

document.getElementById("productImage").src = productData.image;
document.getElementById("productName").textContent = productData.name;
document.getElementById("productPrice").textContent = productData.price;
document.getElementById("productQuantity").textContent = "23";
document.getElementById("productCategory").textContent = productData.category;

document.getElementById("addToCart").addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(productData);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.open("/public/cart.html", "_self");
});