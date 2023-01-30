// First OPTION: 

var asci = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "F",
    7: "G",
    8: "H",
    9: "I",
    10: "J",
    11: "K",
    12: "L",
    13: "M",
    14: "N",
    15: "O",
    16: "P",
    17: "Q",
    18: "R",
    19: "S",
    20: "T",
    21: "U",
    22: "V",
    23: "W",
    24: "X",
    25: "Y",
    26: "Z",
}

function chr(input){

    if(input in asci){
        // alert(asci[input]);
        document.getElementById("value").innerText = asci[input];
        document.getElementById("value").style.backgroundColor = "black";
    }
}

// Second OPTION:

// var asci = {
//     chr: function chr(input){
//         if(input == 1){
//             alert("A")
//         }
//         else if(input == 2){
//             alert("B")
//         }
//         else if(input == 3){
//             alert("C")
//         }
//         else if(input == 4){
//             alert("D")
//         }
//         else if(input == 5){
//             alert("E")
//         }
//         else if(input == 6){
//             alert("F")
//         }
//         else if(input == 7){
//             alert("G")
//         }
//         else if(input == 8){
//             alert("H")
//         }
//         else if(input == 9){
//             alert("I")
//         }
//         else if(input == 10){
//             alert("J")
//         }
//         else if(input == 11){
//             alert("K")
//         }
//         else if(input == 12){
//             alert("L")
//         }
//         else if(input == 13){
//             alert("M")
//         }
//         else if(input == 14){
//             alert("N")
//         }
//         else if(input == 15){
//             alert("O")
//         }
//         else if(input == 16){
//             alert("P")
//         }
//         else if(input == 17){
//             alert("Q")
//         }
//         else if(input == 18){
//             alert("R")
//         }
//         else if(input == 19){
//             alert("S")
//         }
//         else if(input == 20){
//             alert("T")
//         }
//         else if(input == 21){
//             alert("U")
//         }
//         else if(input == 22){
//             alert("V")
//         }
//         else if(input == 23){
//             alert("W")
//         }
//         else if(input == 24){
//             alert("X")
//         }
//         else if(input == 25){
//             alert("Y")
//         }
//         else if(input == 26){
//             alert("Z")
//         }
//         else{
//             alert("Please Type Any Number Then See Result!")
//         }
//     }
// }

