function superheroClicked(superheroId) {
    var superheroElement = document.getElementById(superheroId);

    // Define a mapping of superhero IDs to animation classes
    var animationClasses = {
        "ironMan": "zoom-in",
        "captainAmerica": "rotate",
        "thor": "slide-in",
        "hulk": "pulse",
        "blackWidow": "bounce"
    };

    // Get the corresponding animation class for the clicked superhero
    var animationClass = animationClasses[superheroId];

    // Toggle the animation class
    superheroElement.classList.add(animationClass);

    // Remove the animation class after the animation completes
    setTimeout(function () {
        superheroElement.classList.remove(animationClass);
    }, 500); // Adjust the timeout to match the animation duration

    // Increment click count
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

