console.log("🌿 The Garden awakens...");
const gardenerName = "The Cheeky Nurgling";
console.log(gardenerName);
const forgeName = "The Forge";
const chamberCount = 6;
const isSanctuaryActive = true;

console.log(forgeName);
console.log(chamberCount);
console.log(isSanctuaryActive);

function announceGarden() {
  console.log("The Garden stirs...");
}
announceGarden();

function announceChamber(chamberName) {
  console.log(chamberName + " has been entered.");
}

announceChamber("The Forge");
announceChamber("The Archives");
announceChamber("The Sanctuary");
announceChamber("The Greenhouse");
announceChamber("The Reliquary");
announceChamber("The Apothecary");

const sanctuaryLink = document.querySelector(".navigation-link.active");
console.log(sanctuaryLink);

const allLinks = document.querySelectorAll(".navigation-link");
console.log(allLinks);

for (const link of allLinks) {
  console.log(link.textContent);
}

for (const link of allLinks) {
  link.addEventListener("click", function () {
    for (const otherLink of allLinks) {
      otherLink.classList.remove("active");
    }
    link.classList.add("active");
  });
}