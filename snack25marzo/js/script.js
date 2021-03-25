function getZucchiniWeight(zucchini) {

    var totalWeight = 0;
    for (i=0; i<zucchini.length; i++) {

        totalWeight += zucchini[i]["weight"];
    }

    return totalWeight
}

// Crea un array di 10 oggetti che rappresentano una
// zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
function zucchiniTotalWeight(zucchini) {
    var zucchini = [

        {
            "type" : "green",
            "weight" : 200,
            "length" : 12
        },

        {
            "type" : "white",
            "weight" : 400,
            "length" : 18
        },

        {
            "type" : "orange",
            "weight" : 350,
            "length" : 10
        }
    ]

    var totalWeight = getZucchiniWeight(zucchini);

    console.log(zucchini);
    console.log("The total weight of zucchini is: " + totalWeight + "gr");
    
}


// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano
// meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi
// di zucchine
function zucchini15() {

    var zucchini = [

        {
            "type" : "orange",
            "weight" : 300,
            "length" : 12
        },

        {
            "type" : "orange",
            "weight" : 250,
            "length" : 13
        },

        {
            "type" : "orange",
            "weight" : 150,
            "length" : 19
        },

        {
            "type" : "orange",
            "weight" : 50,
            "length" : 22
        },

        {
            "type" : "orange",
            "weight" : 20,
            "length" : 4
        },

        {
            "type" : "orange",
            "weight" : 150,
            "length" : 7
        },

        {
            "type" : "orange",
            "weight" : 450,
            "length" : 11
        },

        {
            "type" : "orange",
            "weight" : 550,
            "length" : 10
        },

        {
            "type" : "orange",
            "weight" : 150,
            "length" : 30
        },

        {
            "type" : "orange",
            "weight" : 250,
            "length" : 15
        }
    ]

    console.log(zucchini);

    var zucchiniS = [];
    var zucchiniL = [];

    for (var i=0; i<zucchini.length; i++) {

        if (zucchini[i]["length"] > 15 ) {
            
            zucchiniL.push(zucchini[i])
        } else {

            zucchiniS.push(zucchini[i])
        }
    }

    var weightL = getZucchiniWeight(zucchiniL);
    var weightS = getZucchiniWeight(zucchiniS);

    console.log(zucchiniS)
    console.log(" weight " + weightS);
    console.log(zucchiniL);
    console.log("weight " + weightL);
    
}

// Scrivi una funzione che accetti una stringa come
// argomento e la ritorni girata (es. Ciao -> oaiC)

function stringReverse() {
    
    var string = "Hello World!";
    var reversed = string.split("").reverse().join("");
    // var reversed = "";
    // for (var i=string.length-1; i>=0; i--) {

    //     var char = string[i];
    //     reversed += char;
    // }

    // console.log(reversed);
}


    // Scrivi una funzione che fonda due array (aventi lo stesso
    // numero di elementi) prendendo alternativamente gli
    // elementi da uno e dall'altro
    // es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

function arrayFusion() {
    
    var goku = [ "a", "b", "c", "d", "e"];
    var vegeta = [ 0 , 1 , 2 , 3 , 4 ];

    var gogeta = [];

    for (var i=0; i<goku.length; i++) {

        gogeta.push(goku[i], vegeta[i]);
        
    }

    console.log(gogeta);
}

function splitter(min, max, array) {

    var splittedArray = [];
    for (var i=min; i<=max; i++) {

        splittedArray.push(array[i])
    }

    return splittedArray;
}


function esArraySplitter() {
    var arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]; // 8
    var indMin = 3;
    var indMax = 7;

   
    var splitted = splitter(indMin, indMax, arr);
    console.log(splitted);
}

function init() {

    
    // zucchini15();
    // zucchiniTotalWeight();
    // stringReverse();
    // arrayFusion();
    esArraySplitter();
}

$(document).ready(init);