import { footerLoader } from "./footer.js";
import loadHero from "./hero.js";
import loadServices from "./services.js";
import loadTopDishes from "./topDishes.js";

export default function loadHome() {
  const content = document.getElementById("content");

  content.innerHTML = "";

  const heroNode = loadHero();

  content.appendChild(heroNode);
  loadServices();
  loadTopDishes();
}
