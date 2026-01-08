let total = 0;

function addToCart(price) {
    total += price;
    document.getElementById("total").innerText = total;
}

function checkout() {
    alert("Payment Successful!\nTotal Amount: ₹" + total);
    total = 0;
    document.getElementById("total").innerText = total;
}
