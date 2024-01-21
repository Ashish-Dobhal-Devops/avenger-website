// Function to handle superhero clicks
function superheroClicked(superheroId) {
    var clicksElement = document.getElementById(superheroId + "Clicks");
    var clicks = parseInt(clicksElement.innerText.split(": ")[1]) + 1;
    clicksElement.innerText = "Clicks: " + clicks;

    // Perform roar and signature move (replace with actual actions)
    alert(superheroId + " roars and performs a signature move!");
}

// Attach click event listeners to each superhero
document.getElementById("ironMan").addEventListener("click", function () {
    superheroClicked("ironMan");
});

document.getElementById("captainAmerica").addEventListener("click", function () {
    superheroClicked("captainAmerica");
});

document.getElementById("thor").addEventListener("click", function () {
    superheroClicked("thor");
});

document.getElementById("hulk").addEventListener("click", function () {
    superheroClicked("hulk");
});

document.getElementById("blackWidow").addEventListener("click", function () {
    superheroClicked("blackWidow");
});

