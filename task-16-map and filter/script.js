const students = [
    {
        name: "Riya Sharma",
        marks: 85,
        class: "10th",
        address: "Delhi"
    },
    {
        name: "Aman Kumar",
        marks: 78,
        class: "9th",
        address: "Patna"
    },
    {
        name: "Pooja Singh",
        marks: 92,
        class: "12th",
        address: "Lucknow"
    },
    {
        name: "Rohan Verma",
        marks: 67,
        class: "8th",
        address: "Jaipur"
    },
    {
        name: "Neha Gupta",
        marks: 88,
        class: "11th",
        address: "Mumbai"
    },
    {
        name: "Rahul Yadav",
        marks: 74,
        class: "10th",
        address: "Bhopal"
    }
];

const container = document.getElementById("studentContainer");
const searchInput = document.getElementById("search");

function displayStudents(studentList){

    container.innerHTML = "";

    studentList.map(student => {

        container.innerHTML += `
    <div class="card">
        <h3>${student.name}</h3>
        <p><strong>Marks:</strong> ${student.marks}</p>
        <p><strong>Class:</strong> ${student.class}</p>
        <p><strong>Address:</strong> ${student.address}</p>
    </div>
    `;
    });
}

displayStudents(students);

searchInput.addEventListener("keyup", function(){

    const searchText = searchInput.value.toLowerCase();

    const filteredStudents = students.filter(function(student){
        return student.name.toLowerCase().includes(searchText);
    });

    displayStudents(filteredStudents);
});