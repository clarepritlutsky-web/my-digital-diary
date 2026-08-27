const galleryPhotos = document.querySelectorAll(".gallery-photo");

const lightbox = document.querySelector(".photo-lightbox");

const lightboxImage = document.querySelector(".lightbox-image");

const closeButton = document.querySelector(".close-photo");


galleryPhotos.forEach(photo => {

    photo.addEventListener("click", () => {

        const fullImage = photo.dataset.full;

        lightboxImage.src = fullImage;

        lightboxImage.alt = photo.alt;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


closeButton.addEventListener("click", closeLightbox);


lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        closeLightbox();

    }

});


function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}
