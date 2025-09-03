// main.js - Adds interactive features to IOYou landing page

document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll for nav links
  document.querySelectorAll('.navbar-link[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Animated button hover effect
  document.querySelectorAll('.hero-store-btn').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.classList.add('btn-hovered');
    });
    btn.addEventListener('mouseleave', () => {
      btn.classList.remove('btn-hovered');
    });
  });

  // Reveal sections on scroll
  const revealSections = document.querySelectorAll('.features-row, .about-section, .different-section');
  const revealOnScroll = () => {
    const trigger = window.innerHeight * 0.85;
    revealSections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < trigger) {
        section.classList.add('revealed');
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  // Toast notification for Download button
  const downloadBtn = document.querySelector('.navbar-link[href="#download"]');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', function (e) {
      // Only show toast if not jumping to section
      if (!document.getElementById('download')) {
        e.preventDefault();
        showToast('Download coming soon!');
      }
    });
  }

  function showToast(msg) {
    let toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => { toast.classList.add('show'); }, 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 2200);
  }
});
