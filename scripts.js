document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu a');
    const headerTitle = document.querySelector('.header-title');
    const getStartedButton = document.querySelector('.cta-button');

    // Toggle menu visibility on mobile
    menuToggle.addEventListener('click', () => {
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            menu.classList.add('exit');
            // Wait for animation to end before removing exit class
            setTimeout(() => menu.classList.remove('exit'), 300);
        } else {
            menu.classList.add('active');
        }
        menuToggle.classList.toggle('active');
    });

    // Smooth scroll and close menu when a menu item is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: 'smooth'
                });

                // Close the menu after clicking a link (mobile view)
                if (menu.classList.contains('active')) {
                    menu.classList.remove('active');
                    menu.classList.add('exit');
                    // Wait for animation to end before removing exit class
                    setTimeout(() => menu.classList.remove('exit'), 300);
                    menuToggle.classList.remove('active');
                }
            }
        });
    });

    // Smooth scroll to the home section when the title is clicked
    headerTitle.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = 'home';
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });

    // Smooth scroll to the contact section when the "Get Started" button is clicked
    getStartedButton.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = 'contact'; // Target contact section
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });

            // Close the menu if it's open (mobile view)
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
                menu.classList.add('exit');
                // Wait for animation to end before removing exit class
                setTimeout(() => menu.classList.remove('exit'), 300);
                menuToggle.classList.remove('active');
            }
        }
    });
});
