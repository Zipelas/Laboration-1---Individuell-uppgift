let inventory = [];

window.addEventListener("DOMContentLoaded", main);

function main() {
  loadStartScene();
}

// Startscenen
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

// Scen 1
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
  rightText.textContent = "Du har glömt ställa om klockan och nu är du sen! Hissen eller trapporna?";
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

// Scen för "Trapporna"
function loadSceneTrapporna() {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const topRow = document.createElement("div");
  topRow.id = 'top_row';

  const topRowCenterDiv = document.createElement("div");
  topRowCenterDiv.className = "top_row_center_div";
  topRowCenterDiv.id = "top_row_center";

  const trappornaImage = document.createElement("img");
  trappornaImage.src = "assets/images/trapporna.jpg";
  trappornaImage.alt = "Bild på trapporna";
  trappornaImage.className = "start_page_Image";
  topRowCenterDiv.appendChild(trappornaImage);

  const trappornaText = document.createElement("p");
  trappornaText.textContent = "Du har valt att ta trapporna. Lycka till!";
  topRowCenterDiv.appendChild(trappornaText);

  topRow.appendChild(topRowCenterDiv);
  container.appendChild(topRow);

  const bottomRowCenterDiv = document.createElement("div");
  bottomRowCenterDiv.id = 'bottomRowCenterDiv';

  const button = document.createElement("button");
  button.textContent = "Fortsätt";
  button.className = "button1";
  button.onclick = loadStartScene;

  bottomRowCenterDiv.appendChild(button);
  container.appendChild(bottomRowCenterDiv);
}

// Scen 2
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

  if (inventory.includes("mobil")) {
    const mobileImage = document.createElement("img");
    mobileImage.src = "assets/images/mobil.webp";
    mobileImage.alt = "Liten bild på mobil";
    mobileImage.className = "small_item_image";
    topRowCenterDiv.appendChild(mobileImage);
  }

  const topRowRightDiv = document.createElement("div");
  topRowRightDiv.id = "top_row_right";
  const rightText = document.createElement("p");

  if (inventory.includes("mobil")) {
    rightText.textContent = "Du har mobilen med dig. Ska du åka med spårvagnen, eller fortsätta gå?";
  } else {
    rightText.textContent = "Du har glömt mobilen! Gå hem, tjuvåk eller gå till skolan?";
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

// Scen för att gå hem och hämta mobilen
function loadGoBackHome() {
  inventory.push("mobil");
  loadScene1();
}

// Scen för Game Over
function loadGameOver() {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const topRow = document.createElement("div");
  topRow.id = 'top_row';

  const topRowCenterDiv = document.createElement("div");
  topRowCenterDiv.className = "top_row_center_div";
  topRowCenterDiv.id = "top_row_center";

  const gameOverImage = document.createElement("img");
  gameOverImage.src = "assets/images/kontrollant.jpg";
  gameOverImage.alt = "Bild på en kontrollant som har tagit dig";
  gameOverImage.className = "start_page_Image";
  topRowCenterDiv.appendChild(gameOverImage);

  const gameOverText = document.createElement("p");
  gameOverText.textContent = "Kontrollanten tog dig! Spelet är slut.";
  topRowCenterDiv.appendChild(gameOverText);

  topRow.appendChild(topRowCenterDiv);
  container.appendChild(topRow);

  const bottomRowCenterDiv = document.createElement("div");
  bottomRowCenterDiv.id = 'bottomRowCenterDiv';

  const button = document.createElement("button");
  button.textContent = "Börja om";
  button.className = "button1";
  button.onclick = loadStartScene;

  bottomRowCenterDiv.appendChild(button);
  container.appendChild(bottomRowCenterDiv);
}

// Scen 3
function loadScene3() {
  alert("Scen 3 är inte implementerad än.");
}

// Scen för att gå till skolan
function loadWalk() {
  alert("Du valde att gå till skolan.");
  loadScene3();
}
