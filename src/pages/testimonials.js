export function loadTestimonials() {
  const content = document.getElementById("content");
  const testimonialsSection = document.createElement("section");
  testimonialsSection.id = "testimonials";

  testimonialsSection.innerHTML = `
      <div class="container">
          <h2>What Our <span class="primary-color">Esteemed Chefs</span> Say</h2>
          <div class="testimonials-grid">
              <div class="testimonial">
                  <div class="quote">❝</div>
                  <p class="testimonial-text">Absolutely stunning! The flavors, the presentation, and the passion in every dish are top-notch. This restaurant sets the standard for fine dining.</p>
                  <div class="testimonial-footer">
                      <div class="testimonial-author">Gordon Ramsay</div>
                      <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSEEav9LKO516L6eFSZe_6Z_xihRnppBZXc5Wbs-p__gCL9re7c4Ue3BCghYuOrxlLl4evg3N0wZBc1hw7wVuw-uWGZL5yIcs1JIchdkdo" alt="Gordon Ramsay">
                  </div>
              </div>
              <div class="testimonial">
                  <div class="quote">❝</div>
                  <p class="testimonial-text">Anyone can cook, but here, they truly understand the art of cuisine. The harmony of flavors is simply magnifique!</p>
                  <div class="testimonial-footer">
                      <div class="testimonial-author">Auguste Gusteau</div>
                      <img src="https://pbs.twimg.com/profile_images/1049773036944154636/qZQWARHc_400x400.jpg" alt="Gusteau">
                  </div>
              </div>
              <div class="testimonial">
                  <div class="quote">❝</div>
                  <p class="testimonial-text">A meal should tell a story, and every bite here does exactly that. The seafood dishes? Flawless. This place is a chef’s paradise.</p>
                  <div class="testimonial-footer">
                      <div class="testimonial-author">Vinsmoke Sanji</div>
                      <img src="https://i.pinimg.com/736x/4c/21/d0/4c21d08d5cc583a01d59c33f0ddf2436.jpg" alt="Sanji">
                  </div>
              </div>
          </div>
      </div>
  `;

  content.appendChild(testimonialsSection);
}
