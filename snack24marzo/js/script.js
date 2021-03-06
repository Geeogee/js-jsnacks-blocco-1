
// - Creare un oggetto che descriva uno studente con le
// seguenti proprietà: nome, cognome e età. Stampare a
// schermo attraverso il for in tutte le proprietà.
function exercise1() {
    var student = {
        "name" : "Gioele",
        "lastname" : "Armiento",
        "age" : 24
    }

    for (var key in student) {
        console.log(key + " : " + student[key])
    }

    return student;
}

// - Creare un array di oggetti di studenti. Ciclare su tutti gli
// studenti e stampare per ognuno nome e cognome
function exercise2() {

    var students = [
        {
            "name" : "Gioele",
            "lastname" : "Armiento"
        },

        {
            "name" : "Mastro",
            "lastname" : "Lindo"
        },

        {
            "name" : "Sorge",
            "lastname" : "Sana"
        }
    ]

    for (var i=0; i<students.length; i++) {

        console.log(students[i]["name"]);
        console.log(students[i]["lastname"]);
    }

}

// - Dare la possibilità all'utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo
// nell'ordine: nome, cognome e età.
function exercise3(students) {

    var name = prompt("Insert you name");
    var lastname = prompt("Insert your lastname");
    var age = parseInt(prompt("Insert your age"));

    var newStudent = {

        "name" : name,
        "lastname" : lastname,
        "age" : age
    }

    console.log("Name: " + newStudent["name"]);
    console.log("Lastname: " + newStudent["lastname"]);
    console.log("Age: " + newStudent["age"]);

    
    students.push(newStudent);

    // for (var i=0; i<students.length; i++) {

    //     console.log(students[i]["name"]);
    //     console.log(students[i]["lastname"]);
    //     console.log(students[i]["age"]);
    // }


    // console.log(students);
    
    var table = genTable(students, newStudent);
    document.getElementById("results").innerHTML = table;
}

function genTable(students, newStudent) {

    var printMe = "<table><tr><th class='index-th'>Index</th><th>Name</th><th>Lastname</th><th>Age</th></tr>";
    for (var i=0; i<students.length; i++) {

        printMe += "<tr><td>" + i + "</td>";
        for (var j in newStudent) {
            
            console.log("Dentro ciclo " + students[i][j]);
            printMe += "<td>" + students[i][j] + "</td>";
        }

        printMe += "</tr>";
    }

    printMe += "</table>";
    return printMe;
}


function init() {
    var students = [];

    var student = exercise1();
    // exercise2();
    students.push(student);
    var button = document.getElementById("test");
    button.addEventListener("click", function() {

        exercise3(students);
    });
}



document.addEventListener("DOMContentLoaded", init);