window.addEventListener("DOMContentLoaded", main);

function main() {
    // Visa startskärmen när sidan har laddats
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
        // Om användaren väljer "Hissen"
        sceneImage.src = "assets/images/hissen.jpg";
        sceneText.innerText = "Du tar hissen, som sakta men säkert för dig ner till bottenvåningen. Du slipper trapporna, men tiden går långsamt...";
        characterImage.src = "assets/images/hissen.jpg";
        option1.innerHTML = "<h3>Vänta tålmodigt</h3> Hissen är långsam, men du är på väg.";
        option2.innerHTML = "<h3>Hoppa av och ta trapporna</h3> Kanske kan du spara lite tid.";
    } else if (option === 2) {
        // Om användaren väljer "Trapporna"
        sceneImage.src = "assets/images/trapporna.jpg";
        sceneText.innerText = "Du tar trapporna i hög fart. Dina ben börjar kännas tunga, men du gör snabb framsteg.";
        characterImage.src = "assets/images/trapporna.jpg";
        option1.innerHTML = "<h3>Fortsätt springa</h3> Du sparar tid, men det är jobbigt.";
        option2.innerHTML = "<h3>Ta en paus</h3> Du kan behöva en sekund att andas.";
    }
}
