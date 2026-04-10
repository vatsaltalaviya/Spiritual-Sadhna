document.addEventListener('DOMContentLoaded', function () {
    var getCurrentPage = function () {
        var path = window.location.pathname.split('/').pop();
        if (!path) {
            return 'index.html';
        }
        return path.toLowerCase();
    };

    var normalizeHrefToPage = function (href) {
        if (!href || href.indexOf('#') === 0 || href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0) {
            return null;
        }
        var cleanHref = href.split('#')[0].split('?')[0];
        var file = cleanHref.split('/').pop();
        return (file || 'index.html').toLowerCase();
    };

    var syncActiveHeaderLinks = function () {
        var currentPage = getCurrentPage();
        var navLinks = document.querySelectorAll('#main-header nav a, #mobile-menu nav a');

        navLinks.forEach(function (link) {
            if (link.classList.contains('bg-primary')) {
                return;
            }

            var targetPage = normalizeHrefToPage(link.getAttribute('href'));
            if (!targetPage) {
                return;
            }

            var isActive = targetPage === currentPage;
            link.classList.remove('text-primary', 'font-semibold');
            link.classList.add('text-textDark');

            if (isActive) {
                link.classList.remove('text-textDark');
                link.classList.add('text-primary', 'font-semibold');
            }
        });
    };

    syncActiveHeaderLinks();

    var menuButton = document.getElementById('mobile-menu-button');
    var menuCloseButton = document.getElementById('mobile-menu-close');
    var menu = document.getElementById('mobile-menu');
    var overlay = document.getElementById('mobile-menu-overlay');

    if (!menuButton || !menu || !overlay) {
        return;
    }

    var closeMenu = function () {
        menu.classList.add('translate-x-full');
        menu.setAttribute('aria-hidden', 'true');
        overlay.classList.add('opacity-0', 'pointer-events-none');
        document.body.classList.remove('overflow-hidden');
        menuButton.setAttribute('aria-expanded', 'false');
    };

    var openMenu = function () {
        menu.classList.remove('translate-x-full');
        menu.setAttribute('aria-hidden', 'false');
        overlay.classList.remove('opacity-0', 'pointer-events-none');
        document.body.classList.add('overflow-hidden');
        menuButton.setAttribute('aria-expanded', 'true');
    };

    menuButton.addEventListener('click', openMenu);

    if (menuCloseButton) {
        menuCloseButton.addEventListener('click', closeMenu);
    }

    overlay.addEventListener('click', closeMenu);

    menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });

    // Header Scroll Effect
    var header = document.getElementById('main-header');
    if (header) {
        var handleScroll = function () {
            if (window.scrollY > 20) {
                header.classList.remove('bg-transparent', 'border-transparent');
                header.classList.add('bg-white/80', 'backdrop-blur-md', 'border-gray-100', 'shadow-sm');
            } else {
                header.classList.add('bg-transparent', 'border-transparent');
                header.classList.remove('bg-white/80', 'backdrop-blur-md', 'border-gray-100', 'shadow-sm');
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }

    window.addEventListener('resize', function () {
        if (window.innerWidth >= 1024) {
            closeMenu();
        }
    });
});
