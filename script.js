// =============================
// 1️⃣ DARK MODE TOGGLE
// =============================

const darkToggle = document.createElement("button");
darkToggle.innerText = "🌙";
darkToggle.classList.add("dark-toggle");
document.body.appendChild(darkToggle);

if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark");
}

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("darkMode", "enabled");
    darkToggle.innerText = "☀️";
  } else {
    localStorage.setItem("darkMode", "disabled");
    darkToggle.innerText = "🌙";
  }
});


// =============================
// 2️⃣ INTERSECTION OBSERVER (ADVANCED SCROLL ANIMATIONS)
// =============================

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".service-card, .about, .contact, .cta").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});


// =============================
// 3️⃣ PARALLAX HERO EFFECT
// =============================

window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  hero.style.backgroundPositionY = window.scrollY * 0.5 + "px";
});


// =============================
// 4️⃣ ANIMATED COUNTERS
// =============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;
    const increment = target / 200;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };

  observer.observe(counter);
  counter.addEventListener("transitionend", updateCounter);
});


// =============================
// 5️⃣ TYPING EFFECT
// =============================

const typingText = "Innovating IT for a Smarter Future";
const typingElement = document.querySelector(".hero h2");

let index = 0;
function typeEffect() {
  if (index < typingText.length) {
    typingElement.innerHTML += typingText.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}

typingElement.innerHTML = "";
typeEffect();


// =============================
// 6️⃣ MAGNETIC BUTTON EFFECT
// =============================

document.querySelectorAll(".btn-primary").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});


// =============================
// 7️⃣ SCROLL TO TOP
// =============================

const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.classList.add("scroll-top");
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 400 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// =============================
// 8️⃣ PAGE FADE-IN
// =============================

window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});
