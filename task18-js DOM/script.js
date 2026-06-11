const heading = document.getElementById("heading");

const nameInput = document.getElementById("nameInput");

const greetBtn = document.getElementById("greetBtn");

greetBtn.addEventListener("click", function () {

    let name = nameInput.value;

    heading.innerText = "Hello, " + name;

});


document.getElementById("redBox").addEventListener("click", function () {
    this.style.backgroundColor = "red";
});

document.getElementById("blueBox").addEventListener("click", function () {
    this.style.backgroundColor = "blue";
});

document.getElementById("greenBox").addEventListener("click", function () {
    this.style.backgroundColor = "green";
});

document.getElementById("yellowBox").addEventListener("click", function () {
    this.style.backgroundColor = "yellow";
});