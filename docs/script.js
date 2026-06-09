const output = document.getElementById("output");

const divideNumbers = (num1, num2) => {

    return new Promise((resolve, reject) => {

        if (num2 === 0) {
            reject("Error: Division by zero is not allowed.");
        } else {
            resolve(num1 / num2);
        }

    });

};

function testDivision(num1, num2) {

    divideNumbers(num1, num2)

        .then(function(result) {

            console.log(`Dividing ${num1} by ${num2}`);
            console.log("Result:", result);

            output.innerHTML += 
               ` <p>Dividing ${num1} by ${num2} = ${result}</p>
            `;

        })

        .catch(function(error) {

            console.log(`Dividing ${num1} by ${num2}`);
            console.log(error);

            output.innerHTML += 
               ` <p>${error}</p>
           ` ;

        });

}

/* 5 Test Cases */

testDivision(10,2);

testDivision(20,4);

testDivision(15,3);

testDivision(100,5);

testDivision(10,0);
