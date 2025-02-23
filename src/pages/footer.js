import igImg from '../images/icons/instagram.png';
import twitterImg from '../images/icons/twitter.png';
import facebookImg from '../images/icons/facebook.png';

const footerLoader = () => {
    let footerContainer = document.querySelector('footer');
    if (!footerContainer) {
        footerContainer = document.createElement('footer');
        document.body.appendChild(footerContainer);
    } else {
        footerContainer.innerHTML = ''; // Clear existing footer to prevent duplication
    }

    footerContainer.innerHTML = `
        <div class="left-footer-container">
            <div class="footer-company-name footer-red-font">Bistroo</div>
            <div class="copyright">Bistroo 2025 all rights reserved</div>
            <div class="company-social-media footer-red-font">Follow Us On</div>
            <div class="sosmed-img-container"></div>
        </div>
        <div class="left-left-footer">
            <div class="footer-red-font">Menu</div>
            <ul>
                <li>Home</li>
                <li>Offers</li>
                <li>Service</li>
                <li>About Us</li>
            </ul>
        </div>
        <div class="right-footer">
            <div class="footer-red-font">Information</div>
            <ul>
                <li>Menu</li>
                <li>Quality</li>
                <li>Make an Offer</li>
                <li>Delivery</li>
                <li>Subscription</li>
            </ul>
        </div>
        <div class="right-right-footer">
            <div class="footer-red-font">Contact</div>
            <ul>
                <li>+91 123 4567 789</li>
                <li>Explore More</li>
                <li>Info@Bistroo.com</li>
                <li>Unit Market, South Delhi, India</li>
            </ul>
        </div>`;

    const sosmedImgContainer = footerContainer.querySelector('.sosmed-img-container');
    if (!sosmedImgContainer) return console.error("Social media container not found!");

    const sosmedImages = [igImg, twitterImg, facebookImg];
    sosmedImages.forEach(src => {
        const img = document.createElement('img');
        img.classList.add('sosmed-img');
        img.src = src;
        sosmedImgContainer.appendChild(img);
    });

    return footerContainer;
};

export { footerLoader };
