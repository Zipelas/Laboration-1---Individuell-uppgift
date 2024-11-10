window.addEventListener("DOMContentLoaded", main);

function main() {
  loadStartScene();
}

function loadStartScene() {
  const container = document.getElementById("container");
  container.innerHTML = "";

  // Skapa topp-rad
  const topRow = document.createElement("div");
  topRow.id = 'top_row';
  
  // Skapa topRowCenterDiv och lägg till startPageImage
  const topRowCenterDiv = document.createElement("div");
  topRowCenterDiv.className = "top_row_center_div";
  topRowCenterDiv.id = "topRowCenterDiv"; // ID för att kunna hitta elementet senare

  const startPageImage = document.createElement("img");
  startPageImage.src = "assets/images/karta_startsida.jpg";
  startPageImage.alt = "Karta för startsidan";
  startPageImage.className = "start_page_Image";

  topRowCenterDiv.appendChild(startPageImage);

  const textDIV = document.createElement("p");
  textDIV.textContent = "Ditt uppdrag, om du väljer att acceptera det, är att ta dig från ditt hem till skolan. Du kommer att stöta på flera hinder.";
  topRowCenterDiv.appendChild(textDIV);

  topRow.appendChild(topRowCenterDiv);
  container.appendChild(topRow);

  // Skapa botten-rad med bottomRowCenterDiv och knapp
  const bottomRowCenterDiv = document.createElement("div");
  bottomRowCenterDiv.id = 'bottomRowCenterDiv';

  const button1 = document.createElement("button");
  button1.textContent = "Starta uppdrag!";
  button1.className = "button1";
  button1.id = "button1"; // ID för att kunna hitta elementet senare
  button1.onclick = loadScene1;

  bottomRowCenterDiv.appendChild(button1);
  container.appendChild(bottomRowCenterDiv);
}

// Funktion för att uppdatera topRowCenterDiv och button1
function loadScene1() {
  // Hämta befintliga element med ID
  const topRowCenterDiv = document.getElementById("topRowCenterDiv");
  const button1 = document.getElementById("button1");

  // Uppdatera topRowCenterDiv med ny text och bild
  topRowCenterDiv.innerHTML = ""; // Rensar innehållet
  const newImage = document.createElement("img");
  newImage.src = "assets/images/karta_overslept.jpg"; // Uppdatera bildkälla
  newImage.alt = "Ny bild för uppdrag";
  newImage.className = "start_page_Image"; // Behåller klassen för samma stil
  topRowCenterDiv.appendChild(newImage);

  const newText = document.createElement("p");
  newText.textContent = "Nytt uppdrag: Försök att navigera hinder på vägen till skolan.";
  topRowCenterDiv.appendChild(newText);

  // Uppdatera knappens text och funktionalitet
  button1.textContent = "Fortsätt till nästa scen";
  button1.onclick = loadNextScene; // Ny funktion för nästa scen
}

function loadNextScene() {
  alert("Nästa scen laddas...");
}
