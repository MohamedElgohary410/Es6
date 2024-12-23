function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === name) return value;
    }
    return null;
}
document.getElementById("userName").textContent = getCookie("userName");

var cart = JSON.parse(localStorage.getItem("cart")) || [];
var cartList = document.getElementById("cart-list");
cart.forEach((product, index) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    var count = 0
    productDiv.innerHTML = `
        <div class="info">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        <button class="actions" id="removeBtn">-</button>
        <p>${count}</p>
        <button class="actions" id="addBtn">+</button>
        </div>
        <div></div>
    `;
    cartList.appendChild(productDiv);
    productDiv.querySelector("#removeBtn").addEventListener("click", () => {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
    });
});