export default function loadServices() {
  const servicesDiv = document.createElement("div");
  servicesDiv.classList.add("services-container");

  const servicesList = document.createElement("ul");
  servicesList.classList.add("info-container");

  const services = [
    {
      className: "fresh-info",
      title: "Fresh & Organic",
      subtitle: "We use only the freshest, high-quality ingredients sourced from organic farms."
    },
    {
      className: "dining-info",
      title: "Dine-In Delight",
      subtitle: "Enjoy chef-crafted meals in a cozy and vibrant ambiance. Perfect for family dinners and casual meetups."
    },
    {
      className: "catering-info",
      title: "Event Catering",
      subtitle: "Make every occasion special with our delicious, handcrafted dishes delivered to your venue."
    }
  ];

  services.forEach(service => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.classList.add(service.className);

    const title = document.createElement("p");
    title.classList.add("info-title");
    title.textContent = service.title;

    const subtitle = document.createElement("p");
    subtitle.classList.add("info-subtitle");
    subtitle.textContent = service.subtitle;

    div.appendChild(title);
    div.appendChild(subtitle);
    li.appendChild(div);
    servicesList.appendChild(li);
  });

  servicesDiv.appendChild(servicesList);
  return servicesDiv;
}
