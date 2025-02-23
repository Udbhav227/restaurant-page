import './style/joshreset.css';
import './style/style.css';
import loadHome from "./pages/home.js";

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");

  function switchTab(tabFunction) {
    content.innerHTML = "";  
    tabFunction();
  }

  switchTab(loadHome);

  document.getElementById("home-btn").addEventListener("click", () => switchTab(loadHome));
});
