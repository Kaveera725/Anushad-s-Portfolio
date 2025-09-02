// Portfolio image modal logic
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.getElementById('close-modal');

    // Select all images in the carousel
    const carouselImages = document.querySelectorAll('.portfolio-carousel .img-item img');

    carouselImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            modalImg.src = this.src;
            modalImg.alt = this.alt || 'Portfolio Full View';
            modal.style.display = 'flex';
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        modalImg.src = '';
    });

    // Optional: close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            modalImg.src = '';
        }
    });
});
// Navigation and section switching
const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');

const activepage = () => {
    const barsBox = document.querySelector('.bars-box');
    const header = document.querySelector('header');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    sections.forEach(sections => {
        sections.classList.remove('active');
    });
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if(!link.classList.contains('active')) {
            activepage();
            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

logoLink.addEventListener('click', () => {
    if(!navLinks[0].classList.contains('active')) {
        activepage();

        navLinks[0].classList.add('active');

        setTimeout(() => {
                sections[0].classList.add('active');
            }, 1100);
    }
});

// Resume section tab switching
const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});

// Portfolio carousel navigation
const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;  

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
    if(index < 2) {
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else {
        index = 5;
        arrowRight.classList.add('disabled');
    }

    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if(index > 1) {
        index--;
        arrowRight.classList.remove('disabled');
    }
    else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activePortfolio();
});

// Collage image modal logic
    (function() {
        const collageImg = document.getElementById('collage-img');
        const imageModal = document.getElementById('image-modal');
        const closeModal = document.getElementById('close-modal');
        const modalImg = document.getElementById('modal-img');
        if (collageImg && imageModal && closeModal && modalImg) {
            collageImg.addEventListener('click', function() {
                // Always show modal, reset display property
                imageModal.style.display = 'flex';
                imageModal.focus && imageModal.focus();
            });
            closeModal.addEventListener('click', function() {
                imageModal.style.display = 'none';
            });
            imageModal.addEventListener('click', function(e) {
                if (e.target === imageModal) {
                    imageModal.style.display = 'none';
                }
            });
        }
    })();
