function copyToClipboard() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}


var swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },
    navigation: {
        nextEl: '.swiper-next-button',
        prevEl: '.swiper-prev-button',
    },
});

// Modal btn

// const btnModal = document.querySelectorAll('.modal-btn')
const modalImpressum = document.getElementById('modal-impressum')
const modalOverlay = document.querySelector('.modal-overlay')
const modalQr = document.getElementById('modal-qr')

function removeOverlay() {
    modalImpressum.classList.add('hidden')
    modalQr.classList.add('hidden')
    document.body.classList.remove('overflow-hidden')
    document.body.classList.remove('pr-4')
}

// Open impressum
function openModal() {
    modalImpressum.classList.remove('hidden')
    document.body.classList.remove('overflow-hidden')
    document.body.classList.remove('pr-4')
}

// Open impressum
function openQrCode() {
    modalQr.classList.remove('hidden')
    document.body.classList.remove('overflow-hidden')
    document.body.classList.remove('pr-4')
}

// Close modals
function closeModal() {
    modalImpressum.classList.add('hidden')
    modalQr.classList.add('hidden')
    document.body.classList.remove('overflow-hidden')
    document.body.classList.remove('pr-4')
}