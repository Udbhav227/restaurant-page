import heroImgSrc from "../images/burger.png";
import mascotImgSrc from "../images/mascot.png";

export default function loadHero() {
  const main = document.createElement("main");

  const hero = document.createElement("div");
  hero.classList.add("hero");

  const heroLeft = document.createElement("div");
  heroLeft.classList.add("hero-left");

  const tagline = document.createElement("p");
  tagline.classList.add("tagline");
  tagline.textContent = "Life’s too short for boring food. Come taste the difference today!";

  const mascotContainer = document.createElement("div");
  mascotContainer.classList.add("mascot-container");

  const mascotImgContainer = document.createElement("div");
  mascotImgContainer.classList.add("mascot-img-container");

  const mascotImage = new Image();  // Fixed variable name
  mascotImage.src = mascotImgSrc;
  mascotImage.alt = "Restaurant Mascot";

  mascotImgContainer.appendChild(mascotImage);

  const mascotText = document.createElement("p");
  mascotText.classList.add("mascot-text");
  mascotText.innerHTML = "A True Taste on Your Plate! <br> Reserve Your Table Now & Let the Feast Begin!";

  mascotContainer.append(mascotImgContainer, mascotText);

  const ctaButtons = document.createElement("div");
  ctaButtons.classList.add("cta-buttons");

  const reserveButton = document.createElement("button");
  reserveButton.classList.add("reserve-now");
  reserveButton.textContent = "Reserve a Table";

  ctaButtons.appendChild(reserveButton);

  heroLeft.append(tagline, mascotContainer, ctaButtons);

  const heroRight = document.createElement("div");
  heroRight.classList.add("hero-right");

  const heroImageContainer = document.createElement("div");
  heroImageContainer.classList.add("hero-image-container");

  const heroImage = new Image();
  heroImage.src = heroImgSrc;
  heroImage.alt = "Delicious Burger";

  heroImageContainer.appendChild(heroImage);
  heroRight.appendChild(heroImageContainer);

  hero.append(heroLeft, heroRight);
  main.append(hero);
  return main;
}
