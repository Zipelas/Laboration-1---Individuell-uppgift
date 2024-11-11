// Array för att hålla koll på objekt spelaren har med sig
const inventory = [];

// Laddar startscenen
window.addEventListener("DOMContentLoaded", main);

function main() {
  loadStartScene();
}

function loadStartScene() {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const topRow = document.createElement("div");
  topRow.id = 'top_row';

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

// Laddar första scenen
function loadScene1() {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const topRow = document.createElement("div");
  topRow.id = 'top_row';

  const topRowLeftDiv = document.createElement("div");
  topRowLeftDiv.id = "top_row_left";
  const leftImage = document.createElement("img");
  leftImage.src = "assets/images/overslept.jpg";
  leftImage.alt = "Bild på karta för scenen där du har försovit dig";
  leftImage.className = "start_page_Image";
  topRowLeftDiv.appendChild(leftImage);

  const topRowCenterDiv = document.createElement("div");
  topRowCenterDiv.className = "top_row_center_div";
  topRowCenterDiv.id = "top_row_center";
  const centerImage = document.createElement("img");
  centerImage.src = "assets/images/hissen.jpg";
  centerImage.alt = "Karta för hissen";
  centerImage.className = "start_page_Image";
  topRowCenterDiv.appendChild(centerImage);

  const topRowRightDiv = document.createElement("div");
  topRowRightDiv.id = "top_row_right";
  const rightText = document.createElement("p");
  rightText.textContent = "Helvete! tänker du argt. Jag glömde ju ställa om klockan till vintertid! ... Du har nu låst ytterdörren och står inför ditt första val. Hissen eller trapporna?";
  topRowRightDiv.appendChild(rightText);

  topRow.appendChild(topRowLeftDiv);
  topRow.appendChild(topRowCenterDiv);
  topRow.appendChild(topRowRightDiv);
  container.appendChild(topRow);

  const bottomRowCenterDiv = document.createElement("div");
  bottomRowCenterDiv.id = 'bottomRowCenterDiv';

  const button1 = document.createElement("button");
  button1.textContent = "Hissen";
  button1.className = "button1";
  button1.onclick = loadScene2;

  const button2 = document.createElement("button");
  button2.textContent = "Trapporna";
  button2.className = "button1";
  button2.onclick = loadSceneTrapporna;

  bottomRowCenterDiv.appendChild(button1);
  bottomRowCenterDiv.appendChild(button2);
  container.appendChild(bottomRowCenterDiv);
}

// Laddar andra scenen
function loadScene2() {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const topRow = document.createElement("div");
  topRow.id = 'top_row';

  const topRowLeftDiv = document.createElement("div");
  topRowLeftDiv.id = "top_row_left";
  const leftImage = document.createElement("img");
  leftImage.src = "assets/images/scandinavium.jpg";
  leftImage.alt = "Du står vid Scandinaviums hållplats";
  leftImage.className = "start_page_Image";
  topRowLeftDiv.appendChild(leftImage);

  const topRowCenterDiv = document.createElement("div");
  topRowCenterDiv.className = "top_row_center_div";
  topRowCenterDiv.id = "top_row_center";

  const centerImage = document.createElement("img");
  centerImage.src = "assets/images/eas_left.jpg";
  centerImage.alt = "Bild på dig själv när du funderar vilket val du ska göra";
  centerImage.className = "start_page_Image";
  topRowCenterDiv.appendChild(centerImage);

  // Om mobilen är i inventory, lägg till en liten bild på mobilen
  if (inventory.includes("mobil")) {
    const mobileImage = document.createElement("img");
    mobileImage.src = "assets/images/mobil.webp";
    mobileImage.alt = "Liten bild på mobil";
    mobileImage.className = "small_item_image"; // Lägg till CSS för att styra storlek och position
    topRowCenterDiv.appendChild(mobileImage);
  }

  const topRowRightDiv = document.createElement("div");
  topRowRightDiv.id = "top_row_right";
  const rightText = document.createElement("p");

  if (inventory.includes("mobil")) {
    rightText.textContent = "Du har mobilen med dig nu. Ska du åka med spårvagnen, eller fortsätta gå?";
  } else {
    rightText.textContent = "Ska du gå tillbaka hem och hämta mobilen, tjuvåka med spårvagnen, eller börja gå?";
  }

  topRowRightDiv.appendChild(rightText);

  topRow.appendChild(topRowLeftDiv);
  topRow.appendChild(topRowCenterDiv);
  topRow.appendChild(topRowRightDiv);
  container.appendChild(topRow);

  const bottomRowCenterDiv = document.createElement("div");
  bottomRowCenterDiv.id = 'bottomRowCenterDiv';

  const button1 = document.createElement("button");
  button1.textContent = inventory.includes("mobil") ? "Åk med spårvagnen" : "Gå hem och hämta mobilen";
  button1.className = "button1";
  button1.onclick = inventory.includes("mobil") ? loadScene3 : loadGoBackHome;

  const button2 = document.createElement("button");
  button2.textContent = inventory.includes("mobil") ? "Gå!" : "Tjuvåk med spårvagnen";
  button2.className = "button1";
  button2.onclick = inventory.includes("mobil") ? loadWalk : loadGameOver;

  const button3 = document.createElement("button");
  button3.textContent = "Gå!";
  button3.className = "button1";
  button3.onclick = loadWalk;

  if (inventory.includes("mobil")) {
    bottomRowCenterDiv.appendChild(button1);
    bottomRowCenterDiv.appendChild(button3);
  } else {
    bottomRowCenterDiv.appendChild(button1);
    bottomRowCenterDiv.appendChild(button2);
    bottomRowCenterDiv.appendChild(button3);
  }

  container.appendChild(bottomRowCenterDiv);
}
// Lägg till mobil i inventory och gå tillbaka till scen 1
function loadGoBackHome() {
  inventory.push("mobil");
  loadScene1();
}

// Laddar tredje scenen (likadan som första scenen)
function loadScene3() {
  loadScene1();
}

// Funktion för "Gå!"-valet
function loadWalk() {
  alert("Du valde att gå till skolan.");
}

// Funktion för "Trapporna"
function loadSceneTrapporna() {
  alert("Scenen för Trapporna kommer att läggas till här.");
}


function loadSceneTrapporna() {
  const container = document.getElementById("container");
  container.innerHTML = "";

  // Skapa innehållet för scenen "Trapporna"
  const topRow = document.createElement("div");
  topRow.id = 'top_row';

  const topRowCenterDiv = document.createElement("div");
  topRowCenterDiv.className = "top_row_center_div";
  topRowCenterDiv.id = "top_row_center";

  const trappornaImage = document.createElement("img");
  trappornaImage.src = "assets/images/trapporna.jpg"; // Ange rätt sökväg till bild
  trappornaImage.alt = "Bild på trapporna";
  trappornaImage.className = "start_page_Image";

  topRowCenterDiv.appendChild(trappornaImage);

  const trappornaText = document.createElement("p");
  trappornaText.textContent = "Du har valt att ta trapporna. Lycka till!";
  topRowCenterDiv.appendChild(trappornaText);

  topRow.appendChild(topRowCenterDiv);
  container.appendChild(topRow);

  // Skapa botten-rad med en knapp för att gå vidare
  const bottomRowCenterDiv = document.createElement("div");
  bottomRowCenterDiv.id = 'bottomRowCenterDiv';

  const button = document.createElement("button");
  button.textContent = "Fortsätt";
  button.className = "button1";
  button.onclick = loadStartScene; // Exempel: kan ändras för att gå till en annan scen

  bottomRowCenterDiv.appendChild(button);
  container.appendChild(bottomRowCenterDiv);
}

// Funktion för biljettkontroll (GAME OVER)
function loadGameOver() {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const gameOverText = document.createElement("h1");
  gameOverText.textContent = "GAME OVER";
  
  const gameOverDescription = document.createElement("p");
  gameOverDescription.textContent = "Du åkte fast i en biljettkontroll. Tryck på knappen nedanför för att komma till startsidan.";
  
  const buttonRestart = document.createElement("button");
  buttonRestart.textContent = "Till startsidan";
  buttonRestart.className = "button1";
  buttonRestart.onclick = loadStartScene;

  container.appendChild(gameOverText);
  container.appendChild(gameOverDescription);
  container.appendChild(buttonRestart);
}
