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
  leftImage.alt = "Bild på en man som vaknar upp när han har försovit sig";
  leftImage.className = "start_page_Image";
  topRowLeftDiv.appendChild(leftImage);

  const topRowCenterDiv = document.createElement("div");
  topRowCenterDiv.className = "top_row_center_div";
  topRowCenterDiv.id = "top_row_center";
  const centerImage = document.createElement("img");
  centerImage.src = "assets/images/hissen.jpg";
  centerImage.alt = "Bild på en svale med hiss och trappor.";
  centerImage.className = "start_page_Image";
  topRowCenterDiv.appendChild(centerImage);

  const topRowRightDiv = document.createElement("div");
  topRowRightDiv.id = "top_row_right";
  const rightText = document.createElement("p");
  rightText.textContent = "Helvete! tänker du argt. Jag glömde ju ställa om klockan till vintertid! Som en studsboll studsar du upp ur sängen och springer ut i köket. Slänger i två brödskivor i brödrosten och sen springa vidare till badrummet. Borsta tänderna och på med lite deo. Springer ut till köket igen och tar första mackan. Sen springer du in i sovrummet och klär på dig för att sen springa ut i köket igen och ta den sista mackan. Nu var det klart. Packa ryggsäcken och sen på med jacka och skor. Du har nu låst ytterdörren och står inför ditt första val. Hissen eller trapporna?";
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
    rightText.textContent = "Vad bra.Nu har du mobilen med så att du kan köpa en biljett och inte åka fast i en biljettkontroll. Ska du åka med spårvagnen, eller fortsätta gå?";
  } else {
    rightText.textContent = "Du står vid Scandinaviums hållplats och väntar på spårvagnen. Gud vad sen jag är. tänker du. Hoppas att jag inte missar tentan. Plötsligt kommer du på. FAAAN, jag glömde ju mobilen! Nu kan jag inte betala för biljetten. Vad gör du nu? Går hem och hämta mobilen, tjuvåk med spårvagnen eller går du till skolan?";
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
  gameOverImage.alt = "Bild på att du har ramlat i trappan";
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
  gameOverImage.alt = "Bild på biljettkontrollant";
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

// Scen för Game Over när man snor cykeln
function loadGameOver3() {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const topRow = document.createElement("div");
  topRow.id = 'top_row';

  const topRowCenterDiv = document.createElement("div");
  topRowCenterDiv.className = "top_row_center_div";
  topRowCenterDiv.id = "top_row_center";

  const gameOverImage = document.createElement("img");
  gameOverImage.src = "assets/images/polisen.jpg";
  gameOverImage.alt = "Bild på polisen";
  gameOverImage.className = "start_page_Image";
  topRowCenterDiv.appendChild(gameOverImage);

  const gameOverText = document.createElement("p");
  gameOverText.textContent = "Busted!!! Du har blivit tagen av lagens långa arm. Du åker rätt i fängelse utan att passera gå.";
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

// Scen för Game Over när man använder ChatGPT
function loadGameOver4() {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const topRow = document.createElement("div");
  topRow.id = 'top_row';

  const topRowCenterDiv = document.createElement("div");
  topRowCenterDiv.className = "top_row_center_div";
  topRowCenterDiv.id = "top_row_center";

  const gameOverImage = document.createElement("img");
  gameOverImage.src = "assets/images/teacher.jpg";
  gameOverImage.alt = "Bild på läraren";
  gameOverImage.className = "start_page_Image";
  topRowCenterDiv.appendChild(gameOverImage);

  const gameOverText = document.createElement("p");
  gameOverText.textContent = "Busted!!! Du har blivit tagen av Davids långa arm. Det blir ingen pilsner och gammeldansk för din del.";
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
  const container = document.getElementById("container");
  container.innerHTML = "";

  const topRow = document.createElement("div");
  topRow.id = 'top_row';

  const topRowLeftDiv = document.createElement("div");
  topRowLeftDiv.id = "top_row_left";
  const leftImage = document.createElement("img");
  leftImage.src = "assets/images/ullevi.jpg";
  leftImage.alt = "Bild på cyklist utanför Ullevi";
  leftImage.className = "start_page_Image";
  topRowLeftDiv.appendChild(leftImage);

  const topRowCenterDiv = document.createElement("div");
  topRowCenterDiv.className = "top_row_center_div";
  topRowCenterDiv.id = "top_row_center";
  const centerImage = document.createElement("img");
  centerImage.src = "assets/images/eas_right.jpg";
  centerImage.alt = "Bild på dig själv när du funderar vilket val du ska göra";
  centerImage.className = "start_page_Image";
  topRowCenterDiv.appendChild(centerImage);

  const topRowRightDiv = document.createElement("div");
  topRowRightDiv.id = "top_row_right";
  const rightText = document.createElement("p");
  rightText.textContent = "I hög fart går du mot skolan. Solen skiner och allt är bra. Plötsligt när du har gått förbi Ullevi så blir du påkörd av en cyklist som kommer i en hög fart. Du tar dig upp på fötterna igen och står inför valet. Ska du sno cykeln eller ska du be snällt om att få låna cykeln för du har ett prov?";
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
  button2.onclick = loadGameOver3;

  bottomRowCenterDiv.appendChild(button1);
  bottomRowCenterDiv.appendChild(button2);
  container.appendChild(bottomRowCenterDiv);
}

// Scen 4
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
  centerImage.alt = "Bild på dig själv när du funderar vilket val du ska göra";
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
  rightText.textContent = "Dags för tenta och dags att se om du är lika grym som David. Hur väljer du att gå vidare? Ska du gör tentan med eller utan chatGPT?";
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
  button2.onclick = loadGameOver4;

  bottomRowCenterDiv.appendChild(button1);
  bottomRowCenterDiv.appendChild(button2);
  container.appendChild(bottomRowCenterDiv);
}

function loadScene5() {
  const container = document.getElementById("container");
  container.innerHTML = "";

  const topRow = document.createElement("div");
  topRow.id = 'top_row';

  const topRowLeftDiv = document.createElement("div");
  topRowLeftDiv.id = "top_row_left";
  const leftImage = document.createElement("img");
  leftImage.src = "assets/images/tullen.jpg"; 
  leftImage.alt = "Bild på Tullen";
  leftImage.className = "start_page_Image";
  topRowLeftDiv.appendChild(leftImage);

  const topRowCenterDiv = document.createElement("div");
  topRowCenterDiv.className = "top_row_center_div";
  topRowCenterDiv.id = "top_row_center";
  
  // Inventory: "beer.jpg" och "gammeldansk.jpg" tillsammans med eventuella andra items
  if (inventory.includes("mobil")) {
    const mobileImage = document.createElement("img");
    mobileImage.src = "assets/images/mobil.webp";
    mobileImage.alt = "Bild på mobil";
    mobileImage.className = "small_item_image";
    topRowCenterDiv.appendChild(mobileImage);
  }

  if (inventory.includes("cykel")) {
    const bikeImage = document.createElement("img");
    bikeImage.src = "assets/images/cykel.png";
    bikeImage.alt = "Bild på cykel";
    bikeImage.className = "small_item_image";
    topRowCenterDiv.appendChild(bikeImage);
  }

  const beerImage = document.createElement("img");
  beerImage.src = "assets/images/beer.jpg";
  beerImage.alt = "Bild på ölglas";
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

  // Texten för scen 5
  const topRowRightDiv = document.createElement("div");
  topRowRightDiv.id = "top_row_right";
  topRowRightDiv.style.textAlign = "left"; // Gör texten vänsterjusterad
  const congratulatoryText = document.createElement("p");
  congratulatoryText.textContent = "Stort grattis!!! Du har klarat provet och kan nu avnjuta en stor kall öl och en liten gammeldansk på Tullen. Nu kan du njuta av en lugn helg utan pluggande...tills det är dags igen. School mission kommer komma tillbaka i ny tappning.";
  topRowRightDiv.appendChild(congratulatoryText);

  topRow.appendChild(topRowLeftDiv);
  topRow.appendChild(topRowCenterDiv);
  topRow.appendChild(topRowRightDiv);
  container.appendChild(topRow);
  
   // Botten-rad med knapp
   const bottomRowCenterDiv = document.createElement("div");
   bottomRowCenterDiv.id = 'bottomRowCenterDiv';

   const restartButton = document.createElement("button");
   restartButton.textContent = "Grattis!!! Gå till startsidan";
   restartButton.className = "button1";
   restartButton.onclick = loadStartScene;

   bottomRowCenterDiv.appendChild(restartButton);
   container.appendChild(bottomRowCenterDiv);
 }