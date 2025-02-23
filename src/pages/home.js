import loadHero from "./hero.js";
import loadServices from "./services.js";

export default function loadHome() {
  const content = document.getElementById("content");

  content.innerHTML = "";

  const heroNode = loadHero();
  const servicesNode = loadServices();

  content.appendChild(heroNode);
  content.appendChild(servicesNode);  // Append the returned Node from loadServices
}
