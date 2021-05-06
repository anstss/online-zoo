const mapWrapper = document.getElementById("map-wrapper");
const mapWithAnimals = document.getElementById("map-with-animals");
const zoomInButton = document.getElementById("zoom-in-button");
const zoomOutButton = document.getElementById("zoom-out-button");
const mapIMG = document.querySelector(".map__world-map");

let currentScale = 1;

zoomInButton.addEventListener("click", () => {
    if (currentScale > 3) return;
    currentScale = currentScale + 0.2;
    mapWithAnimals.style.transform = `scale(${currentScale})`;
});

zoomOutButton.addEventListener("click", () => {
    if (currentScale === 1) return;
    currentScale = currentScale - 0.2;
    mapWithAnimals.style.transform = `scale(${currentScale})`;
});