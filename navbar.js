// ===============================
// HAMBURGER
// ===============================

let hamburger = document.getElementById("hamburger");
let nav = document.querySelector(".only-nav");
let last = document.querySelector(".drop-last");

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  });
}

document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.remove("active");
    hamburger.classList.remove("active")
  }
});

window.addEventListener("scroll", (e) => {
  if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.remove("active");
    hamburger.classList.remove("active")
  }
});



// ===============================
// DROPDOWN
// ===============================

let plus = document.querySelector(".plus-icon");
let drop2 = document.querySelector(".drop-2");

if (plus && drop2 && nav && last) {
  plus.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    last.classList.toggle("last");   // FIXED
    nav.classList.toggle("height");

    drop2.classList.toggle("active-2");
    drop2.classList.toggle("show-1");
    plus.classList.toggle("rotate");
  });
}



// ===============================
// TABS
// ===============================

const tabs = document.querySelectorAll(".btn-all-vision");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");

    const target = tab.getAttribute("data-tab");
    const targetEl = document.getElementById(target);

    if (targetEl) targetEl.classList.add("active");
  });
});

// ===============================
// SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.2 });

revealElements.forEach(el => revealObserver.observe(el));

// ===============================
// LOADER (Reduced Delay)
// ===============================

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  if (loader) {
    setTimeout(() => {
      loader.classList.add("exit");

      setTimeout(() => {
        loader.style.display = "none";
      }, 800);

    }, 800);  // reduced from 2500
  }
});

// ===============================
// BACK TO TOP
// ===============================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (backToTop) {
    backToTop.classList.toggle("show", window.scrollY > 700);
  }
});

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// ===============================
// TESTIMONIAL SLIDER
// ===============================

const items = document.querySelectorAll(".testimonial-item");
let current = 0;

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

if (nextBtn && prevBtn && items.length > 0) {

  nextBtn.onclick = () => {
    items[current].classList.remove("active");
    current = (current + 1) % items.length;
    items[current].classList.add("active");
  };

  prevBtn.onclick = () => {
    items[current].classList.remove("active");
    current = (current - 1 + items.length) % items.length;
    items[current].classList.add("active");
  };
}

// Tour Card
const buttons = document.querySelectorAll(".btn-country");
const cards = document.querySelectorAll(".tour-card");
const regions = document.querySelectorAll(".region");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    // active button
    buttons.forEach(b => b.classList.remove("active-2"));
    btn.classList.add("active-2");

    const selectedRegion = btn.getAttribute("data-region");

    // show / hide cards
    cards.forEach(card => {
      if (card.getAttribute("data-region") === selectedRegion) {
        card.classList.add("show");
      } else {
        card.classList.remove("show");
      }
    });

    // show only selected region wrapper
    regions.forEach(r => {
      if (r.classList.contains(selectedRegion)) {
        r.style.display = "block";
      } else {
        r.style.display = "none";
      }
    });

  });
});

// default Europe
document.querySelector('.btn-country[data-region="europe"]').click();


// Tour card exit