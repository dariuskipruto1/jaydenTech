const darkToggle = document.createElement("button");
darkToggle.classList.add("dark-toggle");
darkToggle.innerText = localStorage.getItem("darkMode") === "enabled" ? "☀️" : "🌙";
document.body.appendChild(darkToggle);

if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark");
}

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
  darkToggle.innerText = isDark ? "☀️" : "🌙";
});

const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      // If it's a counter, start the count
      if (entry.target.classList.contains("counter")) {
        updateCounter(entry.target);
      }
    }
  });
}, observerOptions);

document.querySelectorAll(".service-card, .about, .contact, .cta, .counter").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

function updateCounter(counter) {
  const target = +counter.getAttribute("data-target");
  const current = +counter.innerText;
  const increment = target / 100; // Adjusted for speed

  if (current < target) {
    counter.innerText = Math.ceil(current + increment);
    setTimeout(() => updateCounter(counter), 20);
  } else {
    counter.innerText = target;
  }
}
const typingElement = document.querySelector(".hero h2");
if (typingElement) {
  const typingText = "Innovating IT for a Smarter Future";
  let index = 0;
  typingElement.innerHTML = ""; // Clear existing text

  function typeEffect() {
    if (index < typingText.length) {
      typingElement.innerHTML += typingText.charAt(index);
      index++;
      setTimeout(typeEffect, 70);
    }
  }
  typeEffect();
}

function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  const overlay = document.getElementById("overlay");
  const toggleIcon = document.querySelector(".menu-toggle span");

  navMenu.classList.toggle("active");
  overlay.classList.toggle("active");

  
  if (navMenu.classList.contains("active")) {
    toggleIcon.classList.replace("fa-bars", "fa-times");
  } else {
    toggleIcon.classList.replace("fa-times", "fa-bars");
  }
}


document.getElementById("overlay").addEventListener("click", toggleMenu);

const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollBtn.classList.add("scroll-top");
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 400 ? "block" : "none";
  

  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.backgroundPositionY = window.scrollY * 0.5 + "px";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});