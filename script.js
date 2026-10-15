/**
 * College of Science & Engineering, Jhansi (CSE Jhansi)
 * Modern Interactive Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Drawer Menu ---
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');
  const mobileNavClose = document.getElementById('mobileNavClose');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    mobileNav.classList.add('open');
    mobileNavBackdrop.classList.add('open');
    mobileToggle.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileNav.classList.remove('open');
    mobileNavBackdrop.classList.remove('open');
    mobileToggle.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      if (mobileNav.classList.contains('open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (mobileNavClose) {
    mobileNavClose.addEventListener('click', closeMobileMenu);
  }

  if (mobileNavBackdrop) {
    mobileNavBackdrop.addEventListener('click', closeMobileMenu);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // --- Scroll-Triggered Reveal Animations ---
  const revealElements = document.querySelectorAll('.reveal-fade-up');

  if ('IntersectionObserver' in window) {
    document.body.classList.add('js-reveal-init');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        // Element is already in the viewport on initial load
        setTimeout(() => el.classList.add('active'), 60);
      } else {
        revealObserver.observe(el);
      }
    });
  } else {
    revealElements.forEach(el => el.classList.add('active'));
  }

  // --- Animated Number Counters ---
  const counterElements = document.querySelectorAll('.stat-number');
  let countersStarted = false;

  function runCounters() {
    counterElements.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target'));
      const isDecimal = target % 1 !== 0;
      const duration = 1600; // ms
      const stepTime = 25;
      const totalSteps = duration / stepTime;
      const increment = target / totalSteps;
      let current = 0;
      counter.textContent = '0';

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = isDecimal ? target.toFixed(1) : Math.floor(target);
          clearInterval(timer);
        } else {
          counter.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);
        }
      }, stepTime);
    });
  }

  const statsSection = document.querySelector('.stats-bar');
  if (statsSection && 'IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersStarted) {
          countersStarted = true;
          runCounters();
        }
      });
    }, { threshold: 0.2 });

    statsObserver.observe(statsSection);
  } else {
    runCounters();
  }

  // --- Program Filter Tabs ---
  const tabButtons = document.querySelectorAll('.tab-btn');
  const courseCards = document.querySelectorAll('.course-card');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      courseCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });

  // --- Back to Top Button ---
  const backToTopBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- Admission Modal Popup ---
  const modalBackdrop = document.getElementById('enquiryModal');
  const modalOpenBtns = document.querySelectorAll('.open-modal-btn');
  const modalCloseBtn = document.getElementById('modalCloseBtn');

  function openModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  modalOpenBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  // ESC key to close modal or mobile menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeMobileMenu();
    }
  });

  // --- Form Submission Handling with Feedback ---
  const enquiryForm = document.getElementById('admissionEnquiryForm');
  const modalEnquiryForm = document.getElementById('modalEnquiryForm');

  function handleFormSubmit(e, form) {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = 'Submitting Enquiry...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = '✓ Enquiry Submitted Successfully!';
      submitBtn.style.background = '#10B981';
      submitBtn.style.color = '#FFFFFF';

      setTimeout(() => {
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        submitBtn.style.background = '';
        submitBtn.style.color = '';
        if (form.closest('#enquiryModal')) {
          closeModal();
        }
        alert('Thank you! Your admission enquiry has been submitted. Our admissions counselor will contact you shortly.');
      }, 1500);
    }, 1000);
  }

  const rdContactForm = document.getElementById('rdContactForm');
  const directInquiryForm = document.getElementById('directInquiryForm');

  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => handleFormSubmit(e, enquiryForm));
  }
  if (modalEnquiryForm) {
    modalEnquiryForm.addEventListener('submit', (e) => handleFormSubmit(e, modalEnquiryForm));
  }
  if (rdContactForm) {
    rdContactForm.addEventListener('submit', (e) => handleFormSubmit(e, rdContactForm));
  }
  if (directInquiryForm) {
    directInquiryForm.addEventListener('submit', (e) => handleFormSubmit(e, directInquiryForm));
  }
});
