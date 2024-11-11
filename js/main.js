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
  
  // Skapa topRowCenterDiv och lägg till bild och text
  const topRowCenterDiv = document.createElement("div");
  topRowCenterDiv.className = "top_row_center_div";
  topRowCenterDiv.id = "top_row_center";

  const startPageImage = document.createElement("img");
  startPageImage.src = "assets/images/karta_startsida.jpg";
  startPageImage.alt = "Karta för startsidan";
  startPageImage.className = "start_page_Image";

  topRowCenterDiv.appendChild(startPageImage);

  const startText = document.createElement("p");
  startText.textContent = "Ditt uppdrag, om du väljer att acceptera det, är att ta dig från ditt hem till skolan. Du kommer att stöta på flera hinder.";
  topRowCenterDiv.appendChild(startText);

  topRow.appendChild(topRowCenterDiv);
  container.appendChild(topRow);

  // Skapa botten-rad med knapp
  const bottomRowCenterDiv = document.createElement("div");
  bottomRowCenterDiv.id = 'bottomRowCenterDiv';

  const button1 = document.createElement("button");
  button1.textContent = "Starta uppdrag!";
  button1.className = "button1";
  button1.id = "button1";
  button1.onclick = loadScene1;

  bottomRowCenterDiv.appendChild(button1);
  container.appendChild(bottomRowCenterDiv);
}

// Funktion för att ladda första scenen
function loadScene1() {
  const container = document.getElementById("container");
  container.innerHTML = ""; // Rensa innehåll

  // Skapa top_row-div och dess barn-element
  const topRow = document.createElement("div");
  topRow.id = 'top_row';

  // Vänstra div: topRowLeftDiv
  const topRowLeftDiv = document.createElement("div");
  topRowLeftDiv.id = "top_row_left";
  const leftImage = document.createElement("img");
  leftImage.src = "assets/images/overslept.jpg";
  leftImage.alt = "Bild på karta för scenen där du har försovit dig";
  leftImage.className = "start_page_Image";
  topRowLeftDiv.appendChild(leftImage);

  // Mittersta div: topRowCenterDiv
  const topRowCenterDiv = document.createElement("div");
  topRowCenterDiv.className = "top_row_center_div";
  topRowCenterDiv.id = "top_row_center";
  const centerImage = document.createElement("img");
  centerImage.src = "assets/images/hissen.jpg";
  centerImage.alt = "Karta för hissen";
  centerImage.className = "start_page_Image";
  topRowCenterDiv.appendChild(centerImage);

  // Högra div: topRowRightDiv med text
  const topRowRightDiv = document.createElement("div");
  topRowRightDiv.id = "top_row_right";
  const rightText = document.createElement("p");
  rightText.textContent = "Helvete! tänker du argt. Jag glömde ju ställa om klockan till vintertid! ... Du har nu låst ytterdörren och står inför ditt första val. Hissen eller trapporna?";
  topRowRightDiv.appendChild(rightText);

  // Lägg till de tre divarna i topRow
  topRow.appendChild(topRowLeftDiv);
  topRow.appendChild(topRowCenterDiv);
  topRow.appendChild(topRowRightDiv);

  // Lägg till topRow i containern
  container.appendChild(topRow);

  // Skapa botten-rad för knapparna
  const bottomRowCenterDiv = document.createElement("div");
  bottomRowCenterDiv.id = 'bottomRowCenterDiv';

  // Knapp 1: "Hissen"
  const button1 = document.createElement("button");
  button1.textContent = "Hissen";
  button1.className = "button1";
  button1.onclick = loadScene2;

  // Knapp 2: "Trapporna"
  const button2 = document.createElement("button");
  button2.textContent = "Trapporna";
  button2.className = "button1";
  button2.onclick = loadSceneTrapporna;

  // Lägg till båda knapparna i bottomRowCenterDiv
  bottomRowCenterDiv.appendChild(button1);
  bottomRowCenterDiv.appendChild(button2);

  // Lägg till bottomRowCenterDiv i containern
  container.appendChild(bottomRowCenterDiv);
}

function loadScene2() {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const topRow = document.createElement("div");
  topRow.id = 'top_row';

  // Vänstra div: topRowLeftDiv
  const topRowLeftDiv = document.createElement("div");
  topRowLeftDiv.id = "top_row_left";
  const leftImage = document.createElement("img");
  leftImage.src = "assets/images/scandinavium.jpg";
  leftImage.alt = "Du står vid Scandinaviums hållplats";
  leftImage.className = "start_page_Image";
  topRowLeftDiv.appendChild(leftImage);

  // Mittersta div: topRowCenterDiv
  const topRowCenterDiv = document.createElement("div");
  topRowCenterDiv.className = "top_row_center_div";
  topRowCenterDiv.id = "top_row_center";
  const centerImage = document.createElement("img");
  centerImage.src = "assets/images/eas_left.jpg";
  centerImage.alt = "Bild på dig själv när du funderar vilket val jag ska göra";
  centerImage.className = "start_page_Image";
  topRowCenterDiv.appendChild(centerImage);

  // Högra div: topRowRightDiv med text
  const topRowRightDiv = document.createElement("div");
  topRowRightDiv.id = "top_row_right";
  const rightText = document.createElement("p");
  rightText.textContent = "Du står nu i trapphuset. Ska du gå tillbaka hem och hämta mobilen, tjuvåka med spårvagnen, eller helt enkelt börja gå?";
  topRowRightDiv.appendChild(rightText);

  // Lägg till de tre divarna i topRow
  topRow.appendChild(topRowLeftDiv);
  topRow.appendChild(topRowCenterDiv);
  topRow.appendChild(topRowRightDiv);

  // Lägg topRow i containern
  container.appendChild(topRow);

  // Botten-rad med tre knappar
  const bottomRowCenterDiv = document.createElement("div");
  bottomRowCenterDiv.id = 'bottomRowCenterDiv';

  // Knapp 1: "Gå hem och hämta mobilen"
  const button1 = document.createElement("button");
  button1.textContent = "Gå hem och hämta mobilen";
  button1.className = "button1";
  button1.onclick = loadGoBackHome;

  // Knapp 2: "Tjuvåk med spårvagn"
  const button2 = document.createElement("button");
  button2.textContent = "Tjuvåk med spårvagn";
  button2.className = "button1";
  button2.onclick = loadRideTram;

  // Knapp 3: "Gå!"
  const button3 = document.createElement("button");
  button3.textContent = "Gå!";
  button3.className = "button1";
  button3.onclick = loadWalk;

  // Lägg till knapparna i bottomRowCenterDiv
  bottomRowCenterDiv.appendChild(button1);
  bottomRowCenterDiv.appendChild(button2);
  bottomRowCenterDiv.appendChild(button3);

  // Lägg till bottomRowCenterDiv i containern
  container.appendChild(bottomRowCenterDiv);
}

// Nya funktioner för scenövergångar
function loadGoBackHome() {
  alert("Du valde att gå hem och hämta mobilen.");
}

function loadRideTram() {
  alert("Du valde att tjuvåka med spårvagnen.");
}

function loadWalk() {
  alert("Du valde att gå till skolan.");
}

function loadSceneTrapporna() {
  alert("Scenen för Trapporna kommer att läggas till här.");
}