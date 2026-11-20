/* Portfolio interactions — vanilla JS, no dependencies */

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

/* ---- Footer year ---- */
  document.getElementById("year").textContent = new Date().getFullYear();

/* ---- Header shadow on scroll ---- */
  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

/* ---- Mobile nav toggle ---- */
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    navToggle.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

// Close the menu when a link is clicked or Escape is pressed
  navMenu.querySelectorAll(".nav-link").forEach((link) =>
    link.addEventListener("click", () => closeMenu())
  );
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

function closeMenu() {
    navMenu.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }

/* ---- Active nav link highlighting ---- */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

const highlightNav = () => {
    const scrollPos = window.scrollY + 120;
    let currentId = "home";
    sections.forEach((section) => {
      if (scrollPos >= section.offsetTop) currentId = section.id;
    });
    navLinks.forEach((link) =>
      link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`)
    );
  };
  window.addEventListener("scroll", highlightNav, { passive: true });
  highlightNav();

/* ---- Scroll reveal ---- */
  const revealEls = document.querySelectorAll(".reveal");

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  }

/* ---- Animated skill bars ---- */
  const skillFills = document.querySelectorAll(".skill-fill");
  const skillPcts = document.querySelectorAll(".skill-pct");

const animateSkills = (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const fill = entry.target;
      const width = Number(fill.dataset.width);
      fill.style.width = `${width}%`;

const pctEl =
        fill.closest(".skill")?.querySelector(".skill-pct") ||
        [...skillPcts].find((p) => p.closest(".skill") === fill.closest(".skill"));
      if (pctEl && !prefersReducedMotion) countUp(pctEl, Number(pctEl.dataset.target));
      else if (pctEl) pctEl.textContent = `${pctEl.dataset.target}%`;

observer.unobserve(fill);
    });
  };

const skillObserver =
    "IntersectionObserver" in window
      ? new IntersectionObserver(animateSkills, { threshold: 0.4 })
      : null;

if (skillObserver && !prefersReducedMotion) {
    skillFills.forEach((f) => skillObserver.observe(f));
  } else {
    skillFills.forEach((f) => {
      f.style.width = `${f.dataset.width}%`;
    });
    skillPcts.forEach((p) => (p.textContent = `${p.dataset.target}%`));
  }

function countUp(el, target) {
    const duration = 1200;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = `${Math.round(progress * target)}%`;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

/* ---- Contact form validation ---- */
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();

const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

let valid = true;

if (!name) {
      showError("name", "Please enter your name.");
      valid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError("email", "Please enter a valid email address.");
      valid = false;
    }
    if (!subject) {
      showError("subject", "Please enter a subject.");
      valid = false;
    }
    if (message.length < 10) {
      showError("message", "Message must be at least 10 characters.");
      valid = false;
    }

if (!valid) {
      formStatus.textContent = "Please fix the errors above.";
      formStatus.className = "form-status error";
      return;
    }

// Safe integration point: send `payload` to your backend or a form
    // service (e.g. Formspree) via fetch(). No credentials are stored here.
    const payload = { name, email, subject, message };
    console.log("Form data ready to send:", payload);

formStatus.textContent = "✓ Message validated. Connect a form service to deliver it.";
    formStatus.className = "form-status success";
    form.reset();
  });

function showError(field, msg) {
    const input = form[field];
    const errorEl = document.getElementById(`${field}Error`);
    input.classList.add("invalid");
    input.setAttribute("aria-invalid", "true");
    errorEl.textContent = msg;
  }

function clearErrors() {
    ["name", "email", "subject", "message"].forEach((field) => {
      const input = form[field];
      const errorEl = document.getElementById(`${field}Error`);
      input.classList.remove("invalid");
      input.removeAttribute("aria-invalid");
      errorEl.textContent = "";
    });
    formStatus.textContent = "";
    formStatus.className = "form-status";
  }
});
