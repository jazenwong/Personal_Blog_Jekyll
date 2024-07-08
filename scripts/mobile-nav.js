document.addEventListener('DOMContentLoaded', function() {
    var nav = document.querySelector('nav.modal-overlay'); // Selects the overlay nav element
    var toggleButton = document.querySelector('.mobile-toggle'); // Selects the toggle button outside nav
    var closeButton = document.getElementById('closeNav'); // Selects the new close button inside nav

    // Function to toggle the navigation visibility
    function toggleNav() {
        nav.classList.toggle('active');
        if (nav.classList.contains('active')) {
            toggleButton.textContent = 'Close';
        } else {
            toggleButton.textContent = 'Writing';
        }
    }

    // Function to close the navigation when clicking outside the modal content
    function closeNav(event) {
        if (event.target === nav) {
            toggleNav();
        }
    }

    // Event listener for the external toggle button
    toggleButton.addEventListener('click', toggleNav);

    // Event listener for the close button inside the navigation
    closeButton.addEventListener('click', toggleNav);

    // Event listener for clicking outside the modal content
    nav.addEventListener('click', closeNav);
});
