window.addEventListener("DOMContentLoaded", main);

function main() {
    document.getElementById("start-screen").classList.remove("hidden");
}

/**
 * Startar uppdraget och växlar till Scen 1
 */
function startMission() {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("scene-1").classList.remove("hidden");
}

/**
 * Hanterar valen i Scen 1 och uppdaterar innehållet
 * @param {number} option Vald alternativ (1 eller 2)
 */
function chooseOption(option) {
    const sceneImage = document.getElementById("scene-image");
    const sceneText = document.getElementById("scene-text");
    const characterImage = document.getElementById("character-image");
    const option1 = document.getElementById("option1");
    const option2 = document.getElementById("option2");

    if (option === 1) {
        // Om användaren väljer "Gå till vänster"
        sceneImage.src = "left-path-image.jpg";
        sceneText.innerText = "Du valde att gå till vänster och möter en hög mur. Ska du försöka klättra över eller gå tillbaka?";
        characterImage.src = "character2.jpg";
        option1.innerText = "Klättra över";
        option2.innerText = "Gå tillbaka";
    } else if (option === 2) {
        // Om användaren väljer "Gå till höger"
        sceneImage.src = "right-path-image.jpg";
        sceneText.innerText = "Du gick till höger och stöter på en flod. Ska du simma över eller leta efter en bro?";
        characterImage.src = "character3.jpg";
        option1.innerText = "Simma över";
        option2.innerText = "Leta efter en bro";
    }
}
