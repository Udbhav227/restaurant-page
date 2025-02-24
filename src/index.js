import './style/joshreset.css';
import './style/style.css';
import loadHome from "./pages/home.js";
import loadServices from './pages/services.js';
import { footerLoader } from './pages/footer.js';
import loadMenu from './pages/menu.js';

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");

  function switchTab(tabFunction) {
    content.innerHTML = "";  
    tabFunction();
    document.body.appendChild(footerLoader());
  }

  switchTab(loadHome);

  document.getElementById("home-btn").addEventListener("click", () => switchTab(loadHome));
  document.getElementById("services-btn").addEventListener("click", () => switchTab(loadServices));
  document.getElementById("menu-btn").addEventListener("click", () => switchTab(loadMenu));
});

window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none"; // Hide loader
  document.getElementById("content").style.display = "block"; // Show content
});

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 1024) {
    document.body.innerHTML = "<h2 style='text-align:center; color:red; margin-top:20vh;'>This site is best viewed on a laptop or desktop.</h2>";
  }
});


