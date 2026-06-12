let cart = [];

window.onload = function () {
    const savedCart = localStorage.getItem("laundry_cart_items");
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
            synchronizeDOMInterface();
        } catch (e) {
            cart = [];
            localStorage.setItem("laundry_cart_items", JSON.stringify(cart));
            synchronizeDOMInterface();
        }
    }
};

function addItem(serviceName, price) {
    const existingItem = cart.find(item => item.name === serviceName);
    if (existingItem) {
        alert(`${serviceName} is already added.`);
        return;
    }
    cart.push({ name: serviceName, price: price });
    localStorage.setItem("laundry_cart_items", JSON.stringify(cart));
    synchronizeDOMInterface();
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("laundry_cart_items", JSON.stringify(cart));
    synchronizeDOMInterface();
}

function synchronizeDOMInterface() {
    const listContainer = document.getElementById("List");
    const totalDisplay = document.getElementById("total");
    
    listContainer.innerHTML = ""; 
    let dynamicTotal = 0;

    cart.forEach((item, index) => {
        dynamicTotal += item.price;
        const itemNode = document.createElement("li");
        itemNode.style.display = "flex";
        itemNode.style.justifyContent = "space-between";
        itemNode.style.margin = "8px 0";
        itemNode.style.padding = "6px";
        
        itemNode.innerHTML = `<span>${item.name} - ₹${item.price}</span>`;

        const removeControl = document.createElement("button");
        removeControl.innerText = "Remove";
        removeControl.style.color = "red";
        removeControl.style.border = "none";
        removeControl.style.background = "none";
        removeControl.style.cursor = "pointer";
        removeControl.style.fontWeight = "bold";
        
        removeControl.onclick = function() {
            removeItem(index);
        };

        itemNode.appendChild(removeControl);
        listContainer.appendChild(itemNode);
    });

    totalDisplay.innerText = dynamicTotal;
}

const clientBookingForm = document.getElementById("bookingForm");
if (clientBookingForm) {
    clientBookingForm.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const clientName = document.getElementById("name").value.trim();
        const clientEmail = document.getElementById("email").value.trim();
        const clientPhone = document.getElementById("phone").value.trim();
        const feedbackOutput = document.getElementById("message");

        if (!clientName || !clientEmail || !clientPhone) {
            if (feedbackOutput) {
                feedbackOutput.style.color = "red";
                feedbackOutput.innerText = "Error: All data fields are mandatory.";
            }
            return;
        }

        if (cart.length === 0) {
            if (feedbackOutput) {
                feedbackOutput.style.color = "red";
                feedbackOutput.innerText = "Validation Failed: Empty cart.";
            }
            return;
        }

        if (feedbackOutput) {
            feedbackOutput.style.color = "blue";
            feedbackOutput.innerText = "Transmitting booking request...";
        }

        let currentTotal = 0;
        const serviceNames = cart.map(item => {
            currentTotal += item.price;
            return item.name;
        }).join(", ");

        const dataPayload = {
            name: clientName,
            email: clientEmail,
            phone: clientPhone,
            services: serviceNames,
            total_amount: currentTotal
        };

        emailjs.send("service_pt7990s", "template_zjkfnsh", dataPayload)
            .then(function() {
                if (feedbackOutput) {
                    feedbackOutput.style.color = "green";
                    feedbackOutput.innerText = "Booking Confirmed! Check inbox for notification.";
                }
                clientBookingForm.reset();
                cart = [];
                localStorage.setItem("laundry_cart_items", JSON.stringify(cart));
                synchronizeDOMInterface();
            })
            .catch(function() {
                if (feedbackOutput) {
                    feedbackOutput.style.color = "red";
                    feedbackOutput.innerText = "Transmission failed. Check configuration.";
                }
            });
    });
}

const newspaperSubscribeBtn = document.getElementById("subscribeBtn");
if (newspaperSubscribeBtn) {
    newspaperSubscribeBtn.addEventListener("click", function() {
        const inputField = document.getElementById("subscribeEmail");
        const stringValue = inputField.value.trim();
        const feedbackContainer = document.getElementById("subscribeMsg");

        if (!stringValue || !stringValue.includes("@")) {
            alert("Error: Structural email syntax incorrect.");
            return;
        }

        alert("Subscribe button clicked");
        
        if (feedbackContainer) {
            feedbackContainer.style.color = "green";
            feedbackContainer.innerText = "Subscription verification successful. Thank you!";
        }
        inputField.value = ""; 
    });
}
