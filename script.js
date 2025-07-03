 // Mobile Navigation Toggle
        const hamburger = document.getElementById('hamburger');
        const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
        const closeMobileNavButton = document.getElementById('close-mobile-nav');
        let isMenuOpen = false;

        // Ensure initial state
        mobileNavOverlay.style.transform = 'translateX(100%)';
        mobileNavOverlay.style.opacity = '0';
        mobileNavOverlay.style.pointerEvents = 'none';

        function toggleMobileNav() {
            if (isMenuOpen) {
                // Close menu
                mobileNavOverlay.style.transform = 'translateX(100%)';
                mobileNavOverlay.style.opacity = '0';
                mobileNavOverlay.style.pointerEvents = 'none';
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            } else {
                // Open menu
                mobileNavOverlay.style.transform = 'translateX(0)';
                mobileNavOverlay.style.opacity = '1';
                mobileNavOverlay.style.pointerEvents = 'auto';
                hamburger.innerHTML = '<i class="fas fa-times"></i>';
            }
            isMenuOpen = !isMenuOpen;
        }

        hamburger.addEventListener('click', toggleMobileNav);
        closeMobileNavButton.addEventListener('click', toggleMobileNav);

        // Close mobile nav when clicking a nav link
        mobileNavOverlay.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (isMenuOpen) {
                    toggleMobileNav();
                }
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Handle form submissions with custom modal
        const quoteForm = document.getElementById('quote-form');
        const calculatorForm = document.getElementById('calculator-form');
        const submissionModal = document.getElementById('submission-modal');
        const closeModalButton = document.getElementById('close-modal');
        const modalOkButton = document.getElementById('modal-ok-button');

        function handleFormSubmission(event) {
            event.preventDefault(); // Prevent default form submission
            // Show the custom modal
            submissionModal.style.display = 'flex'; // Use flex to center content
            // Reset the form
            event.target.reset();
        }

        quoteForm.addEventListener('submit', handleFormSubmission);
        calculatorForm.addEventListener('submit', handleFormSubmission);

        // Close modal when close button or OK button is clicked
        closeModalButton.addEventListener('click', () => {
            submissionModal.style.display = 'none';
        });

        modalOkButton.addEventListener('click', () => {
            submissionModal.style.display = 'none';
        });

        // Close modal when clicking outside of it
        window.addEventListener('click', (event) => {
            if (event.target === submissionModal) {
                submissionModal.style.display = 'none';
            }
        });