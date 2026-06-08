function checkNumber(){

    let number = Number(document.getElementById("number").value);

    let result = document.getElementById("result");

    let message = "";

    if(number % 2 === 0){
        message = "The number " + number + " is even.";
    }
    else{
        message = "The number " + number + " is odd.";
    }

    result.textContent = message;

    console.log(message);
}