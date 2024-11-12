document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');

    menuBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent click event from bubbling up
        navbar.style.display = navbar.style.display === 'block' ? 'none' : 'block';
        menuBtn.classList.toggle('active');
    });

    document.addEventListener('click', function(e) {
        const isClickedInsideMenu = navbar.contains(e.target);
        const isClickedOnMenuBtn = e.target.classList.contains('menu-btn');
        if (!isClickedInsideMenu && !isClickedOnMenuBtn) {
            navbar.style.display = 'none';
            menuBtn.classList.remove('active');
        }
    });
});
