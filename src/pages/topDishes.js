import chrickenBiryani from '../images/food/chicken-biryani.png';
import southIndian from '../images/food/south-indian-thali.png';
import tandooriChicken from '../images/food/tandoori-chicken.png';  

export default function loadTopDishes() {
    const content = document.getElementById("content");

    const topDishes = document.createElement("div");
    topDishes.classList.add("top-dishes-container");

    const header = document.createElement("div");
    header.classList.add("top-dishes-header");

    const headerLeft = document.createElement("div");
    headerLeft.classList.add("header-left");
    headerLeft.innerHTML = `<p class="dishes-heading">
      Our <span class="primary-color">bestselling</span> <br> flavors
  </p>`;

    const headerRight = document.createElement("div");
    headerRight.classList.add("header-right");
    headerRight.innerHTML = 
            `<p class="dishes-subtext">
                <span class="primary-color">Ready to eat?</span> 
                Take a look at our top choices and order now!
             </p>`;

    header.appendChild(headerLeft);
    header.appendChild(headerRight);

    const dishesContainer = document.createElement("div");
    dishesContainer.classList.add("dishes-container");

    const dishes = [
        { img: southIndian, name: "South Indian Thali" },
        { img: chrickenBiryani, name: "Chicken Biryani" },
        { img: tandooriChicken, name: "Tandoori Chicken" },
    ];


    dishes.forEach((dish) => {
        const dishCard = document.createElement("div");
        dishCard.classList.add("dish-card");

        dishCard.innerHTML = `
          <img src="${dish.img}" alt="${dish.name}">
          <p class="dish-name">${dish.name}</p>
          <a class="order-link">Order Now</a>
      `;

        dishesContainer.appendChild(dishCard);
    });

    topDishes.appendChild(header);
    topDishes.appendChild(dishesContainer);

    content.appendChild(topDishes);
}
