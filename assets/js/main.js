/* ==========================================================================
   SHE CAN FOUNDATION - INTERACTIVE LOGIC & ANIMATIONS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  
  /* -------------------------------------------------------------
     1. PRELOADER HANDLER
     ------------------------------------------------------------- */
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      // Small timeout to ensure loading animation is seen and feels smooth
      setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        document.body.style.overflowY = 'auto'; // Enable scrolling
      }, 600);
    });

    // Fallback: in case load event takes too long, hide after 3 seconds
    setTimeout(() => {
      if (preloader.style.visibility !== 'hidden') {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        document.body.style.overflowY = 'auto';
      }
    }, 3000);
  }

  /* -------------------------------------------------------------
     2. STICKY NAVBAR & BACK-TO-TOP SCROLL LISTENER
     ------------------------------------------------------------- */
  const header = document.querySelector('.header');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Sticky Navbar Toggle
    if (scrollPos > 50) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }

    // Back to top Visibility
    if (scrollPos > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  // Back to top Click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* -------------------------------------------------------------
     3. NAVIGATION LINK SCROLL ACTIVE SYNC
     ------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function scrollActiveSync() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120; // Offset for fixed header
      const sectionId = current.getAttribute('id');
      const targetLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

      if (targetLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
          targetLink.classList.add('active');
        } else {
          targetLink.classList.remove('active');
        }
      }
    });
  }
  window.addEventListener('scroll', scrollActiveSync);

  /* -------------------------------------------------------------
     4. MOBILE HAMBURGER MENU
     ------------------------------------------------------------- */
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const mobileNavLinks = document.querySelectorAll('.nav-link, .btn-cta-nav');

  if (hamburger && navMenu) {
    // Open/Close toggle
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close when clicking any menu link
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  /* -------------------------------------------------------------
     5. SCROLL REVEAL VIEWPORT OBSERVER
     ------------------------------------------------------------- */
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); // Reveal only once for performance
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px' // Trigger slightly before element fully enters viewport
  });

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

  /* -------------------------------------------------------------
     6. VIEWPORT TRIGGERED IMPACT COUNTERS
     ------------------------------------------------------------- */
  const counterElements = document.querySelectorAll('.counter-number');
  const impactSection = document.getElementById('impact');
  let countersAnimated = false;

  const countUp = (element) => {
    const target = parseInt(element.getAttribute('data-target'), 10);
    const suffix = element.getAttribute('data-suffix') || '';
    const duration = 2000; // Animation duration in milliseconds
    const frameRate = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const counterInterval = setInterval(() => {
      frame++;
      // Clean ease-out progression
      const progress = frame / totalFrames;
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease out
      const currentValue = Math.floor(easeProgress * target);

      element.textContent = currentValue.toLocaleString() + suffix;

      if (frame === totalFrames) {
        element.textContent = target.toLocaleString() + suffix;
        clearInterval(counterInterval);
      }
    }, frameRate);
  };

  if (impactSection && counterElements.length > 0) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersAnimated) {
          counterElements.forEach(counter => countUp(counter));
          countersAnimated = true;
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    counterObserver.observe(impactSection);
  }

  /* -------------------------------------------------------------
     7. VOLUNTEER REGISTRATION FORM VALIDATION & MODAL SUCCESS
     ------------------------------------------------------------- */
  const volunteerForm = document.getElementById('volunteer-form');
  const successModal = document.getElementById('form-success-modal');
  const closeModalBtn = document.getElementById('btn-modal-close');

  // Input elements
  const fullNameInput = document.getElementById('full-name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const cityInput = document.getElementById('city');
  const interestInput = document.getElementById('interest');
  const messageInput = document.getElementById('message');

  const setError = (element, message) => {
    element.classList.add('error');
    const errorContainer = element.nextElementSibling;
    if (errorContainer && errorContainer.classList.contains('form-error-msg')) {
      errorContainer.textContent = message;
    }
  };

  const clearError = (element) => {
    element.classList.remove('error');
  };

  const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const isValidPhone = (phone) => {
    // Basic phone validation (allowing digits, spaces, hyphens, plus sign)
    const re = /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/;
    return re.test(String(phone));
  };

  if (volunteerForm) {
    volunteerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let hasError = false;

      // Reset previous error markings
      const formControls = volunteerForm.querySelectorAll('.form-control');
      formControls.forEach(control => clearError(control));

      // 1. Full name validation
      if (!fullNameInput.value.trim()) {
        setError(fullNameInput, 'Please enter your full name');
        hasError = true;
      } else if (fullNameInput.value.trim().length < 2) {
        setError(fullNameInput, 'Name must be at least 2 characters');
        hasError = true;
      }

      // 2. Email validation
      if (!emailInput.value.trim()) {
        setError(emailInput, 'Please enter your email address');
        hasError = true;
      } else if (!isValidEmail(emailInput.value.trim())) {
        setError(emailInput, 'Please enter a valid email address');
        hasError = true;
      }

      // 3. Phone validation
      if (!phoneInput.value.trim()) {
        setError(phoneInput, 'Please enter your phone number');
        hasError = true;
      } else if (!isValidPhone(phoneInput.value.trim())) {
        setError(phoneInput, 'Please enter a valid phone number (10+ digits)');
        hasError = true;
      }

      // 4. City validation
      if (!cityInput.value.trim()) {
        setError(cityInput, 'Please enter your city of residence');
        hasError = true;
      }

      // 5. Interest selection validation
      if (interestInput.value === '') {
        setError(interestInput, 'Please select your area of interest');
        hasError = true;
      }

      // Submit if there are no validation errors
      if (!hasError) {
        // Collect volunteer information
        const formData = {
          fullName: fullNameInput.value.trim(),
          email: emailInput.value.trim(),
          phone: phoneInput.value.trim(),
          city: cityInput.value.trim(),
          area: interestInput.options[interestInput.selectedIndex].text,
          message: messageInput.value.trim()
        };

        console.log('Volunteer Registration Form Data:', formData);

        // Display beautiful modal success alert
        if (successModal) {
          successModal.classList.add('active');
          document.body.style.overflow = 'hidden'; // Lock background scrolling
        }

        // Reset form inputs
        volunteerForm.reset();
      }
    });

    // Event listener to clear errors on typing
    const inputsToWatch = [fullNameInput, emailInput, phoneInput, cityInput, interestInput];
    inputsToWatch.forEach(input => {
      if (input) {
        input.addEventListener('input', () => {
          if (input.classList.contains('error')) {
            clearError(input);
          }
        });
        // Select changes
        if (input.tagName === 'SELECT') {
          input.addEventListener('change', () => {
            if (input.classList.contains('error')) {
              clearError(input);
            }
          });
        }
      }
    });
  }

  // Modal Close Action
  if (closeModalBtn && successModal) {
    closeModalBtn.addEventListener('click', () => {
      successModal.classList.remove('active');
      document.body.style.overflowY = 'auto'; // Re-enable background scrolling
    });

    // Close when clicking outside the modal card
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) {
        successModal.classList.remove('active');
        document.body.style.overflowY = 'auto';
      }
    });
  }

  /* -------------------------------------------------------------
     8. NEWSLETTER FORM HANDLER
     ------------------------------------------------------------- */
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterFeedback = document.getElementById('newsletter-feedback');

  if (newsletterForm && newsletterFeedback) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailField = newsletterForm.querySelector('.newsletter-input');
      const email = emailField.value.trim();

      if (email && isValidEmail(email)) {
        // Successful subscription
        newsletterFeedback.textContent = 'Thank you for subscribing to our updates!';
        newsletterFeedback.className = 'newsletter-feedback success';
        newsletterForm.reset();

        // Fade out message after 4 seconds
        setTimeout(() => {
          newsletterFeedback.style.display = 'none';
        }, 4000);
      }
    });
  }

});
