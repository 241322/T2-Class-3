let hour = 11;

if (hour < 12){
    console.log("Good Morning");
}else if (hour < 16) {
    console.log("Good Afternoon")
}else if (hour < 24){
    console.log("Good Evening")
}else{
    console.log("Error")
}


let numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23];
let even = [];
let odd = [];

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] %2 !=1){
        even.push(numbers[i]);
    } else {
        odd.push(numbers[i]);
    }
}

console.log("even: " + even);
console.log("odd: " + odd);

let total = 0;

for (let i = 0; i < odd.length; i++){
    total += odd[i];
}

console.log("Total: " + total);

function tester(){
    if (bool){
        document.getElementById('display').innerHTML = "True";
    } else {
        document.getElementById('display').innerHTML = "False";
    }
}