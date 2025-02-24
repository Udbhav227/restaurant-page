import loadTopDishes from './topDishes';
import butterChicken from '../images/food/butter-chicken.jpg';
import paneerTikka from '../images/food/paneer-tikka.jpg'
import vegBiryani from '../images/food/veg-biryani.jpg'
import strawberryCake from '../images/food/strawberry-cake.jpg'
import kadayif from '../images/food/kadayif.jpg'
import brulee from '../images/food/brulee.jpg'
import lasagne from '../images/food/lasagna.jpg'
import alfredo from '../images/food/alfredo1.jpg'
import pizza from '../images/food/pizza.jpg'

export default function loadMenu() {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    menuContainer.innerHTML = `
        <div class="menu-header">
            <div class="menu-heading">
                Our <span class="primary-color">Regular</span> <br> Menu
            </div>
            <div class="menu-subtext">
                We use only the <span class="primary-color">freshest, high-quality ingredients</span> sourced from organic farms.
            </div>
        </div>
        <div class="menu-item-container"></div>
    `;

    const menuItems = [
      { name: "Royal <br> Butter Chicken", price: 450, rating: "⭐⭐⭐⭐⭐ 3,916", image: butterChicken },
      { name: "Paneer <br> Tikka Masala", price: 450, rating: "⭐⭐⭐⭐⭐ 3,892", image: paneerTikka },
      { name: "Aromtaic <br> Veg Biryani", price: 465, rating: "⭐⭐⭐⭐⭐ 4,128", image: vegBiryani },
      
      { name: "Vegitable <br> Lasagne", price: 465, rating: "⭐⭐⭐⭐⭐ 1,330", image: lasagne },
      { name: "Chicken <br> Tikka Pizza", price: 450, rating: "⭐⭐⭐⭐⭐ 1,484", image: pizza },
      { name: "Vegitable <br> Rice Alfredo", price: 465, rating: "⭐⭐⭐⭐⭐ 1,818", image: alfredo },

      { name: "Turkish <br> Pistachio Kadayif", price: 450, rating: "⭐⭐⭐⭐⭐ 1,147", image: kadayif},
      { name: "Baked <br> Meringue Pavlova", price: 400, rating: "⭐⭐⭐⭐⭐ 1,476", image: strawberryCake},
      { name: "Mint <br> Creme brulee", price: 400, rating: "⭐⭐⭐⭐⭐ 1,176", image: brulee},

    ];

    const menuItemContainer = menuContainer.querySelector(".menu-item-container");

    menuItems.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        menuItem.innerHTML = `
            <div class="item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="item-name">${item.name}</div>
            <div class="item-rating">${item.rating}</div>
            <div class="item-price">
                <p class="price">₹${item.price}</p>
                <button class="buy-now-btn">Buy Now</button>
            </div>
        `;

        menuItemContainer.appendChild(menuItem);
    });

    loadTopDishes()
    document.getElementById("content").appendChild(menuContainer);
}
