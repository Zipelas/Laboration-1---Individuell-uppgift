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
  button2.onclick = loadGameOver;

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
  button2.onclick = inventory.includes("mobil") ? loadScene3 : loadGameOver2;

  const button3 = document.createElement("button");
  button3.textContent = "Gå!";
  button3.className = "button1";
  button3.onclick = loadScene3;

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

// Game Over-scen
function loadGameOver() {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const topRow = document.createElement("div");
  topRow.id = 'top_row';

  const topRowCenterDiv = document.createElement("div");
  topRowCenterDiv.className = "top_row_center_div";
  topRowCenterDiv.id = "top_row_center";

  const gameOverImage = document.createElement("img");
  gameOverImage.src = "assets/images/falling.jpg";
  gameOverImage.alt = "Bild på att du ramlade";
  gameOverImage.className = "start_page_Image";
  topRowCenterDiv.appendChild(gameOverImage);

  const gameOverText = document.createElement("p");
  gameOverText.textContent = "Aj då! Du ramlade när du sprang i trapporna för att du var stressad. Nu kan du inte göra provet för att du måste till sjukhuset.";
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

// Scen för Game Over när man tjuvåker
function loadGameOver2() {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const topRow = document.createElement("div");
  topRow.id = 'top_row';

  const topRowCenterDiv = document.createElement("div");
  topRowCenterDiv.className = "top_row_center_div";
  topRowCenterDiv.id = "top_row_center";

  const gameOverImage = document.createElement("img");
  gameOverImage.src = "assets/images/biljettkontroll.webp";
  gameOverImage.alt = "Bild på biljettkontroll";
  gameOverImage.className = "start_page_Image";
  topRowCenterDiv.appendChild(gameOverImage);

  const gameOverText = document.createElement("p");
  gameOverText.textContent = "Tyvärr så åkte du fast i en biljettkontroll. Tryck på knappen nedför för att börja om.";
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

// Scen 3 - Kopia av Scen 1 med modifieringar
function loadScene3() {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const topRow = document.createElement("div");
  topRow.id = 'top_row';

  const topRowLeftDiv = document.createElement("div");
  topRowLeftDiv.id = "top_row_left";
  const leftImage = document.createElement("img");
  leftImage.src = "assets/images/ullevi.jpg";
  leftImage.alt = "Bild på Ullevi";
  leftImage.className = "start_page_Image";
  topRowLeftDiv.appendChild(leftImage);

  const topRowCenterDiv = document.createElement("div");
  topRowCenterDiv.className = "top_row_center_div";
  topRowCenterDiv.id = "top_row_center";
  const centerImage = document.createElement("img");
  centerImage.src = "assets/images/eas_right.jpg";
  centerImage.alt = "Bild som visar väg till skolan";
  centerImage.className = "start_page_Image";
  topRowCenterDiv.appendChild(centerImage);

  const topRowRightDiv = document.createElement("div");
  topRowRightDiv.id = "top_row_right";
  const rightText = document.createElement("p");
  rightText.textContent = "Du ser en cykel. Vad vill du göra?";
  topRowRightDiv.appendChild(rightText);

  topRow.appendChild(topRowLeftDiv);
  topRow.appendChild(topRowCenterDiv);
  topRow.appendChild(topRowRightDiv);
  container.appendChild(topRow);

  const bottomRowCenterDiv = document.createElement("div");
  bottomRowCenterDiv.id = 'bottomRowCenterDiv';

  const button1 = document.createElement("button");
  button1.textContent = "Fråga om du får låna cykeln";
  button1.className = "button1";
  button1.onclick = loadScene4;

  const button2 = document.createElement("button");
  button2.textContent = "Sno cykeln";
  button2.className = "button1";
  button2.onclick = loadGameOver;

  bottomRowCenterDiv.appendChild(button1);
  bottomRowCenterDiv.appendChild(button2);
  container.appendChild(bottomRowCenterDiv);
}

// Scen 4 - Modifierad kopia av Scen 1
function loadScene4() {
  inventory.push("cykel");

  const container = document.getElementById("container");
  container.innerHTML = "";

  const topRow = document.createElement("div");
  topRow.id = 'top_row';

  const topRowLeftDiv = document.createElement("div");
  topRowLeftDiv.id = "top_row_left";
  const leftImage = document.createElement("img");
  leftImage.src = "assets/images/skolan.jpg";
  leftImage.alt = "Bild på skolan";
  leftImage.className = "start_page_Image";
  topRowLeftDiv.appendChild(leftImage);

  const topRowCenterDiv = document.createElement("div");
  topRowCenterDiv.className = "top_row_center_div";
  topRowCenterDiv.id = "top_row_center";
  const centerImage = document.createElement("img");
  centerImage.src = "assets/images/eas_left.jpg";
  centerImage.alt = "Bild på väg till skolan";
  centerImage.className = "start_page_Image";
  topRowCenterDiv.appendChild(centerImage);

  if (inventory.includes("cykel")) {
    const cykelImage = document.createElement("img");
    cykelImage.src = "assets/images/cykel.png";
    cykelImage.alt = "Liten bild på cykel";
    cykelImage.className = "small_item_image";
    topRowCenterDiv.appendChild(cykelImage);
  }
  
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
  rightText.textContent = "Du är nästan framme! Hur vill du göra provet?";
  topRowRightDiv.appendChild(rightText);

  topRow.appendChild(topRowLeftDiv);
  topRow.appendChild(topRowCenterDiv);
  topRow.appendChild(topRowRightDiv);
  container.appendChild(topRow);

  const bottomRowCenterDiv = document.createElement("div");
  bottomRowCenterDiv.id = 'bottomRowCenterDiv';

  const button1 = document.createElement("button");
  button1.textContent = "Gör provet utan chatGPT";
  button1.className = "button1";
  button1.onclick = loadScene5;

  const button2 = document.createElement("button");
  button2.textContent = "Gör provet med chatGPT";
  button2.className = "button1";
  button2.onclick = loadGameOver;

  bottomRowCenterDiv.appendChild(button1);
  bottomRowCenterDiv.appendChild(button2);
  container.appendChild(bottomRowCenterDiv);
}

function loadScene5() {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const topRow = document.createElement("div");
  topRow.id = 'top_row';

  // Vänstra delen med "tullen.jpg"-bilden
  const topRowLeftDiv = document.createElement("div");
  topRowLeftDiv.id = "top_row_left";
  const leftImage = document.createElement("img");
  leftImage.src = "assets/images/tullen.jpg"; // Ange rätt sökväg till tullen.jpg
  leftImage.alt = "Bild på Tullen";
  leftImage.className = "start_page_Image";
  topRowLeftDiv.appendChild(leftImage);

  const topRowCenterDiv = document.createElement("div");
  topRowCenterDiv.className = "top_row_center_div";
  topRowCenterDiv.id = "top_row_center";

  // Visa items i inventory: "beer.jpg" och "gammeldansk.jpg" tillsammans med eventuella andra items
  if (inventory.includes("cykel")) {
    const bikeImage = document.createElement("img");
    bikeImage.src = "assets/images/cykel.png";
    bikeImage.alt = "Bild på cykel";
    bikeImage.className = "small_item_image";
    topRowCenterDiv.appendChild(bikeImage);
  }

  const beerImage = document.createElement("img");
  beerImage.src = "assets/images/beer.jpg";
  beerImage.alt = "Bild på öl";
  beerImage.className = "small_item_image";
  topRowCenterDiv.appendChild(beerImage);

  const gammeldanskImage = document.createElement("img");
  gammeldanskImage.src = "assets/images/gammeldansk.jpg";
  gammeldanskImage.alt = "Bild på Gammeldansk";
  gammeldanskImage.className = "small_item_image";
  topRowCenterDiv.appendChild(gammeldanskImage);

  topRow.appendChild(topRowLeftDiv);
  topRow.appendChild(topRowCenterDiv);
  container.appendChild(topRow);

  // Ändra texten till den nya texten
  const congratulatoryText = document.createElement("p");
  congratulatoryText.textContent = "Stort grattis!!! Du har klarat provet och kan nu avnjuta en stor kall öl och en liten gammeldansk på Tullen. Nu kan du njuta av en lugn helg utan pluggande...tills det är dags igen. School mission kommer komma tillbaka i ny tappning.";
  topRowCenterDiv.appendChild(congratulatoryText);

  // Botten-rad med en enda knapp
  const bottomRowCenterDiv = document.createElement("div");
  bottomRowCenterDiv.id = 'bottomRowCenterDiv';

  const restartButton = document.createElement("button");
  restartButton.textContent = "Grattis!!! Gå till startsidan";
  restartButton.className = "button1";
  restartButton.onclick = loadStartScene;

  bottomRowCenterDiv.appendChild(restartButton);
  container.appendChild(bottomRowCenterDiv);
}

// loadScene6
function loadScene6() {
  // Rensa scenen först
  clearScene();

  // Lägg till bild "trapporna.jpg" i scenen
  const image1 = document.createElement("img");
  image1.src = "trapporna.jpg";
  document.body.appendChild(image1);

  // Lägg till bild "granne.jpg" i scenen
  const image2 = document.createElement("img");
  image2.src = "granne.jpg";
  document.body.appendChild(image2);

  // Skapa knappen som leder tillbaka till loadScene1, om det behövs
  const elevatorButton = document.createElement("button");
  elevatorButton.innerText = "Tillbaka till Hissen";
  elevatorButton.onclick = loadScene1;
  document.body.appendChild(elevatorButton);
}

function helpNeighborWithPhone() {
  // Funktion för att hantera valet "Hjälp grannen med mobilen"
  const mainContainer = document.getElementById('main-container');
  mainContainer.innerHTML = `
      <img src="granne.jpg" alt="Granne">
      <p>Du hjälper grannen med mobilen.</p>
      <button onclick="loadScene1()">Tillbaka till början</button>
  `;
}

function helpNeighborAfterSchool() {
  // Funktion för att hantera valet "Hjälp grannen efter skolan"
  const mainContainer = document.getElementById('main-container');
  mainContainer.innerHTML = `
      <img src="granne.jpg" alt="Granne">
      <p>Du bestämmer dig för att hjälpa grannen efter skolan.</p>
      <button onclick="loadScene1()">Tillbaka till början</button>
  `;
}

// Scen för att gå till skolan
function loadWalk() {
  alert("Du valde att gå till skolan.");
  loadScene3();
}
