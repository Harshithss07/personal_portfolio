
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const breadcrumb = document.querySelector('.breadcrumb');
    const navLinks = document.querySelectorAll('nav a');
    const mobileNavLinks = mobileMenu.querySelectorAll('a');

    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('show');
      mobileMenu.setAttribute('aria-hidden', isExpanded);
    });

    // Navigation update and breadcrumb update on click
    function setActiveLink(sectionId) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === sectionId);
      });
      mobileNavLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === sectionId);
        link.tabIndex = link.classList.contains('active') ? 0 : -1;
      });
      // Update breadcrumb
      const name = sectionId.replace('#', '');
      breadcrumb.textContent = name.charAt(0).toUpperCase() + name.slice(1);
    }

    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        setActiveLink(e.target.getAttribute('href'));
      });
    });
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', e => {
        setActiveLink(e.target.getAttribute('href'));
        mobileMenu.classList.remove('show');
        mobileMenuBtn.setAttribute('aria-expanded', false);
      });
    });

    // Resume Tab switching
    const tabButtons = document.querySelectorAll('.resume-menu button');
    const panels = document.querySelectorAll('.resume-content .panel');

    tabButtons.forEach((button) => {
      button.addEventListener('click', () => {
        // Set active button
        tabButtons.forEach(btn => {
          btn.classList.toggle('active', btn === button);
          btn.setAttribute('aria-selected', btn === button);
          btn.tabIndex = btn === button ? 0 : -1;
        });

        // Show the correct panel
        panels.forEach(panel => {
          if(panel.id === button.getAttribute('aria-controls')) {
            panel.hidden = false;
            panel.classList.add('active', 'fade-in');
          } else {
            panel.hidden = true;
            panel.classList.remove('active', 'fade-in');
          }
        });
      });
    });

    // Portfolio Next/Prev Controls (simple example, single project shown)
    const portfolioButtons = document.querySelectorAll('.portfolio-buttons button');
    portfolioButtons.forEach(button => {
      button.addEventListener('click', () => {
        alert('Portfolio navigation button clicked. Add project slider here.');
      });
    });

    // Contact form basic submit handler
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      alert('Thank you for your message! This is a demo form submission.');
      contactForm.reset();
    });
