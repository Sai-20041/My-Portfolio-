document.addEventListener("DOMContentLoaded", () => {
  const fills = document.querySelectorAll(".fill");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.width = el.getAttribute("data-width");
        observer.unobserve(el); // run only once per skill
      }
    });
  }, { threshold: 0.3 });

  fills.forEach(fill => observer.observe(fill));
});
// Highlight active nav link while scrolling
(function() {
  const sections = document.querySelectorAll("section[id], div[id]");
  const navLinks = document.querySelectorAll("nav ul li a");

  function getCurrentSection() {
    let current = "";
    sections.forEach(section => {
      const top = section.offsetTop - 120; // adjust offset for header height
      if (window.scrollY >= top) {
        current = section.getAttribute("id");
      }
    });
    return current;
  }

  function updateActiveLink() {
    const current = getCurrentSection();
    navLinks.forEach(link => {
      link.classList.remove("active");
      const href = link.getAttribute("href");
      if (href === "#" + current) link.classList.add("active");
    });
  }

  window.addEventListener("scroll", updateActiveLink);
  window.addEventListener("load", updateActiveLink);
})();

document.addEventListener("DOMContentLoaded", () => {
  const fills = document.querySelectorAll(".fill");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.width = el.getAttribute("data-width");
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  fills.forEach(fill => observer.observe(fill));

  // Resume Animation
  gsap.from(".resume-box", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".resume-section",
      start: "top 80%"
    }
  });
});
// Contact Form Validation + Animation
function validateForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    alert("Please fill out all fields.");
    return false;
  }

  alert("Message sent successfully!");
  document.getElementById("contact-form").reset();
  return true;
}

// GSAP animation for contact section
gsap.from("#contact .contact-container", {
  opacity: 0,
  y: 50,
  duration: 1.2,
  scrollTrigger: {
    trigger: "#contact",
    start: "top 85%",
  },
});
