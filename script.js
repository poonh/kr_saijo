// script.js - Lightbox & Mobile Menu Controller

// Mobile Menu Functions
function toggleMobileMenu() {
    const menuList = document.querySelector('.mobile-menu-list');
    const menuIcon = document.querySelector('.menu-icon');
    const backdrop = document.querySelector('.mobile-menu-backdrop');
    if (menuList) menuList.classList.toggle('active');
    if (menuIcon) menuIcon.classList.toggle('active');
    if (backdrop) backdrop.classList.toggle('active');
    document.body.classList.toggle('menu-open', menuList && menuList.classList.contains('active'));
}

function hideMobileMenu() {
    const menuList = document.querySelector('.mobile-menu-list');
    const menuIcon = document.querySelector('.menu-icon');
    const backdrop = document.querySelector('.mobile-menu-backdrop');
    if (menuList) menuList.classList.remove('active');
    if (menuIcon) menuIcon.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
    document.body.classList.remove('menu-open');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const menuList = document.querySelector('.mobile-menu-list');
    const menuIcon = document.querySelector('.menu-icon');
    if (
        menuList &&
        menuList.classList.contains('active') &&
        !menuList.contains(event.target) &&
        menuIcon &&
        !menuIcon.contains(event.target)
    ) {
        hideMobileMenu();
    }
});

// Close menu or overlay on Escape key press
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        hideMobileMenu();
        const overlay = document.getElementById('overlay');
        if (overlay) overlay.style.display = 'none';
    }
});

// Image Lightbox Overlay Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Ensure overlay container exists
    let overlay = document.getElementById('overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'overlay';
        overlay.className = 'overlay';
        overlay.innerHTML = `
            <span class="overlay-close" title="点击关闭">&times;</span>
            <img id="overlayImg" src="" alt="放大查看图片">
            <div id="overlayCaption" class="overlay-caption"></div>
        `;
        document.body.appendChild(overlay);
    }

    const overlayImg = document.getElementById('overlayImg');
    const overlayCaption = document.getElementById('overlayCaption');
    const closeBtn = overlay.querySelector('.overlay-close');

    // Attach click listeners to all .picture images
    const pictures = document.querySelectorAll('.picture');
    pictures.forEach(picture => {
        picture.addEventListener('click', function(e) {
            e.stopPropagation();
            if (overlayImg) {
                overlayImg.src = this.getAttribute('data-full') || this.src;
            }
            if (overlayCaption) {
                const figcaption = this.closest('figure') ? this.closest('figure').querySelector('figcaption') : null;
                const altText = this.getAttribute('alt') || '';
                const cardCaption = this.closest('.gallery-card') ? this.closest('.gallery-card').querySelector('.gallery-caption') : null;
                
                if (figcaption) {
                    overlayCaption.innerHTML = figcaption.innerHTML;
                    overlayCaption.style.display = 'block';
                } else if (cardCaption) {
                    overlayCaption.innerHTML = cardCaption.innerHTML;
                    overlayCaption.style.display = 'block';
                } else if (altText) {
                    overlayCaption.textContent = altText;
                    overlayCaption.style.display = 'block';
                } else {
                    overlayCaption.style.display = 'none';
                }
            }
            overlay.style.display = 'flex';
        });
    });

    // Close overlay on clicking background or close button
    overlay.addEventListener('click', function(e) {
        if (e.target !== overlayImg) {
            overlay.style.display = 'none';
        }
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            overlay.style.display = 'none';
        });
    }
});
