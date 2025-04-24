// Function to change text randomly
function changeText() {
    var textsArray = ["Text 1", "Text 2", "Text 3", "Text 4", "Text 5"];
    var number = getRandomNumberBetween(0, textsArray.length - 1);
    console.log("Index: ", number);
    document.getElementById("heading").innerHTML = textsArray[number];
}

// Utility to get random number in a range
function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Connect to the socket.io server
const socket = io();

// Listen for 'number' event from server
socket.on("number", function (data) {
    console.log("Received number from server:", data);
    document.getElementById("random-number").innerText = "Random number: " + data;
});
