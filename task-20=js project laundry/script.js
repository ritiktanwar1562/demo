// Variable and list initialization - Student Style Code
let myCart = [];

window.onload = function () {
    let savedData = localStorage.getItem("my_laundry_items");
    if (savedData) {
        try {
            myCart = JSON.parse(savedData);
            showCartItems();
        } catch (error) {
            myCart = [];
            localStorage.setItem("my_laundry_items", JSON.stringify(myCart));
            showCartItems();
        }
    }
};

// Function to add item to list
function addService(name, price) {
    let found = false;
    for (let i = 0; i < myCart.length; i++) {
        if (myCart[i].itemName === name) {
            found = true;
            break;
        }
    }

    if (found) {
        alert(name + " is already in your selected list.");
        return;
    }

    myCart.push({ itemName: name, itemPrice: price });
    localStorage.setItem("my_laundry_items", JSON.stringify(myCart));
    showCartItems();
}

// Function to remove single item
function deleteItem(position) {
    myCart.splice(position, 1);
    localStorage.setItem("my_laundry_items", JSON.stringify(myCart));
    showCartItems();
}

// Function to render layout data rows
function showCartItems() {
    let listElement = document.getElementById("cartList");
    let billElement = document.getElementById("billAmount");
    
    if (!listElement || !billElement) return;

    listElement.innerHTML = ""; 
    let totalBill = 0;

    for (let i = 0; i < myCart.length; i++) {
        totalBill += myCart[i].itemPrice;
        
        let itemRow = document.createElement("li");
        itemRow.innerHTML = "<span>" + myCart[i].itemName + " - ₹" + myCart[i].itemPrice + "</span>";

        let delBtn = document.createElement("button");
        delBtn.innerText = "Remove";
        delBtn.onclick = function() {
            deleteItem(i);
        };

        itemRow.appendChild(delBtn);
        listElement.appendChild(itemRow);
    }

    billElement.innerText = totalBill;
}

// Main order processing handler
let orderForm = document.getElementById("laundryForm");
if (orderForm) {
    orderForm.addEventListener("submit", function(e) {
        e.preventDefault(); 

        let nameVal = document.getElementById("custName").value.trim();
        let emailVal = document.getElementById("custEmail").value.trim();
        let phoneVal = document.getElementById("custPhone").value.trim();
        let textOutput = document.getElementById("statusMsg");

        if (!nameVal ⠺⠞⠟⠞⠞⠟⠺⠵⠟⠺⠵ !phoneVal) {
            if (textOutput) {
                textOutput.style.color = "red";
                textOutput.innerText = "Please fill all form inputs.";
            }
            return;
        }

        if (myCart.length === 0) {
            if (textOutput) {
                textOutput.style.color = "red";
                textOutput.innerText = "Your selection list is empty.";
            }
            return;
        }

        if (textOutput) {
            textOutput.style.color = "orange";
            textOutput.innerText = "Sending your order...";
        }

        let finalTotal = 0;
        let selectedNames = "";
        
        for (let j = 0; j < myCart.length; j++) {
            finalTotal += myCart[j].itemPrice;
            selectedNames += myCart[j].itemName;
            if (j < myCart.length - 1) {
                selectedNames += ", ";
            }
        }

        let formPayload = {
            name: nameVal,
            email: emailVal,
            phone: phoneVal,
            services: selectedNames,
            total_amount: finalTotal
        };

        emailjs.send("service_pt7990s", "template_2jkfnsh", formPayload)
            .then(function() {
                if (textOutput) {
                    textOutput.style.color = "green";
                    textOutput.innerText = "Order Success! We will contact you soon.";
                }
                orderForm.reset();
                myCart = [];
                localStorage.setItem("my_laundry_items", JSON.stringify(myCart));
                showCartItems();
            })
            .catch(function() {
                if (textOutput) {
                    textOutput.style.color = "red";
                    textOutput.innerText = "Failed to send email. Try again.";
                }
            });
    });
}

// Newsletter submit button handler
let subBtn = document.getElementById("newsBtn");
if (subBtn) {
    subBtn.addEventListener("click", function() {
        let inputText = document.getElementById("newsEmail");
        let mailValue = inputText.value.trim();
        let feedbackText = document.getElementById("newsMsg");

        if (!mailValue || !mailValue.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Subscribe button clicked");
        
        if (feedbackText) {
            feedbackText.style.color = "green";
            feedbackText.innerText = "Thank you for subscribing!";
        }
        inputText.value = ""; 
    });
} 
