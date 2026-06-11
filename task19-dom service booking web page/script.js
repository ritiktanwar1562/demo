const services = [
    {
    name:"Dry Cleaning",
    price:200,
    image:"images/drycleaning.jpg"
    },
    
    {
    name:"Laundry",
    price:150,
    image:"images/laundry.jpg"
    },
    
    {
    name:"Ironing",
    price:100,
    image:"images/ironing.jpg"
    },
    
    {
    name:"Premium Wash",
    price:300,
    image:"images/premiumwash.jpg"
    }
    ];
    
    const servicesContainer =
    document.getElementById("servicesContainer");
    
    const cartList =
    document.getElementById("cartList");
    
    const totalElement =
    document.getElementById("total");
    
    const empty =
    document.getElementById("empty");
    
    let total = 0;
    
    services.forEach(function(service){
    
    let card = document.createElement("div");
    
    card.className = "card";
    
    card.innerHTML = `
    <img src="${service.image}" alt="$
    {service.name}" width="150">
    <h3>${service.name}</h3>
    <p>₹${service.price}</p>
    
    <button class="skip">Skip Item</button>
    
    <button class="add">Add Item</button>
    `;
    
    servicesContainer.appendChild(card);
    
    let addBtn =
    card.querySelector(".add");
    
    let skipBtn =
    card.querySelector(".skip");
    
    addBtn.addEventListener("click",function(){
    
    empty.style.display = "none";
    
    let li =
    document.createElement("li");
    
    li.innerText =
    service.name + " - ₹" + service.price;
    
    cartList.appendChild(li);
    
    total += service.price;
    
    totalElement.innerText = total;
    
    });
    
    skipBtn.addEventListener("click",function(){
    
    alert("Item Skipped");
    
    });
    
    });
    
    document.getElementById("bookBtn")
    .addEventListener("click",function(){
    
    if(total === 0){
    
    alert("Please add at least one service");
    
    }
    else{
    
    alert("Booking Successful");
    
    }
    
    });