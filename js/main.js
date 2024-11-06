window.addEventListener("DOMContentLoaded", main);

function main() {
    // Initiering av startskärm och sceninnehåll
}

function startMission() {
    console.log("Startar uppdraget"); // Kontroll för att se om funktionen anropas
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("scene").classList.remove("hidden");
    loadScene(1);
}

function loadScene(sceneNumber) {
    const sceneImage = document.getElementById("scene-image");
    const sceneText = document.getElementById("scene-text");
    const characterImage = document.getElementById("character-image");
    const option1 = document.getElementById("option1");
    const option2 = document.getElementById("option2");
    const option3 = document.getElementById("option3");

    if (sceneNumber === 1) {
        sceneImage.src = "assets/images/overslept.jpg";
        sceneText.innerText = "Du vaknar upp i panik av att alarmet på klockan tjuter som hesa Fredrik. Helvete! tänker du argt...";
        characterImage.src = "assets/images/hissen.jpg";
        option1.innerHTML = "<h3>Hissen</h3> Den är långsam, men du kommer inte stöta på någon som saktar ner dig.";
        option2.innerHTML = "<h3>Trapporna</h3> Det går mycket fortare än att ta den långsamma hissen.";
        option3.classList.add("hidden"); // Dölj knapp 3 i scen 1
    } else if (sceneNumber === 2) {
        sceneImage.src = "assets/images/scandinavium.jpg";
        sceneText.innerText = "Du står vid Scandinaviums hållplats och väntar på spårvagnen. Gud vad sen jag är...";
        characterImage.src = "assets/images/eas_left.jpg";
        option1.innerHTML = "Gå hem och hämta mobilen.";
        option2.innerHTML = "Tjuvåk med spårvagnen.";
        option3.innerHTML = "Sno en cykel";
        option3.classList.remove("hidden"); // Visa knapp 3 i scen 2
    }
}

function chooseOption(choice) {
    if (choice === 1) {
        loadScene(2); // Går till scen 2 om "Hissen" väljs i scen 1
    } else if (choice === 2) {
        loadScene(2); // Samma om "Trapporna" väljs i scen 1
    } else if (choice === 3) {
        alert("Du valde att sno en cykel. Lycka till!"); // Tillfälligt exempel
    }
}
