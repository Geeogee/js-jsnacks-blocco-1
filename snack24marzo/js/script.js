
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
function exercise3(student) {

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

    var students = [];

    students.push(student);
    students.push(newStudent);

    for (var i=0; i<students.length; i++) {

        console.log(students[i]["name"]);
        console.log(students[i]["lastname"]);
        console.log(students[i]["age"]);
    }
    
}



function init() {
    
    var student = exercise1();
    // exercise2();
    exercise3(student);
}



document.addEventListener("DOMContentLoaded", init);