// ============================================================
// Portfolio Site - Interactions & Animations
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimations();
  initNavScroll();
  initModal();
  initSmoothScroll();
  initPixelStars();
});

// --- Scroll-triggered Fade-in Animations ---
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
}

// --- Navigation Shadow on Scroll ---
function initNavScroll() {
  const nav = document.querySelector(".nav");
  if (!nav) return;

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 10);
  });
}

// --- Modal / Lightbox ---
function initModal() {
  const overlay = document.querySelector(".modal-overlay");
  if (!overlay) return;

  const modalImg = overlay.querySelector(".modal-image");
  const modalTitle = overlay.querySelector(".modal-title");
  const modalDesc = overlay.querySelector(".modal-description");
  const modalTechs = overlay.querySelector(".modal-techs");
  const closeBtn = overlay.querySelector(".modal-close");

  document.querySelectorAll(".card[data-modal]").forEach((card) => {
    card.addEventListener("click", () => {
      const img = card.querySelector(".card-image img");
      const title = card.querySelector(".card-title");
      const desc = card.querySelector(".card-description");
      const techs = card.querySelectorAll(".card-tech");

      if (modalImg && img) modalImg.src = img.src;
      if (modalTitle && title) modalTitle.textContent = title.textContent;
      if (modalDesc && desc) modalDesc.textContent = desc.textContent;
      if (modalTechs) {
        modalTechs.innerHTML = "";
        techs.forEach((t) => {
          const span = document.createElement("span");
          span.className = "card-tech";
          span.textContent = t.textContent;
          modalTechs.appendChild(span);
        });
      }

      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  function closeModal() {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// --- Smooth Scroll for Anchor Links ---
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const navHeight = document.querySelector(".nav")?.offsetHeight || 0;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

// --- Pixel Star Decorations ---
function initPixelStars() {
  const container = document.querySelector(".pixel-stars");
  if (!container) return;

  const starCount = 15;
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.className = "pixel-star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    container.appendChild(star);
  }
}
