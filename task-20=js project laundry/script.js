let total = 0;

function addItem(service, price) {
    const list = document.getElementById("list");
    const totalElement = document.getElementById("total");

    const li = document.createElement("li");
    li.textContent = service + " - ₹" + price;

    list.appendChild(li);

    total += price;
    totalElement.innerText = total;
}

function scrollBooking() {
    document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
    });
}
function addItem(service, price) {

    let li = document.createElement("li");

    li.innerHTML =
        service +
        " ₹" +
        price;

    document
        .getElementById("list")
        .appendChild(li);

    total += price;

    document
        .getElementById("total")
        .innerText = total;
}

function bookNow() {

    document
        .getElementById("message")
        .innerText =
        "Thank you For Booking the Service We will get back to you soon!";
}