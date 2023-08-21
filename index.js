
const openOffcanvasButton = document.querySelector(".offcanvasCloseJs");

openOffcanvasButton.addEventListener('click', chekBackdrop);

function chekBackdrop  () {
    const backdropOffcanvas = document.querySelector('.offcanvas-backdrop');
    let scrollPosition = 0;
    
    backdropOffcanvas.addEventListener('click', function (event) {
        event.preventDefault();
        scrollPosition = window.scrollY;
        setTimeout( function scroll() {
            console.log("спрацював скрол")
            window.scrollTo(0, scrollPosition)},360)
    } )
    document.querySelector('.btn-close').addEventListener('click', function (event) {
        event.preventDefault();
        scrollPosition = window.scrollY;
        setTimeout( function scroll() {
            window.scrollTo(0, scrollPosition)},310)
    });
}

const galleryButtonExpand = document.querySelector(".button-expand");
const galleryButtonCollapse = document.querySelector(".button-collapse");
const gallery = document.querySelector('.gallery-container');
const galleryFog = document.querySelector('.gallery-fog');

function openGallery (e){
    e.preventDefault();
    gallery.classList.add("isOpen");
    galleryButtonExpand.classList.add('hide');
    galleryButtonCollapse.classList.remove('hide');
    galleryFog.classList.add('isOpen');
}

function closeGallery (e){
    e.preventDefault();
    gallery.classList.remove("isOpen");
    galleryButtonExpand.classList.remove('hide');
    galleryButtonCollapse.classList.add('hide');
    galleryFog.classList.remove('isOpen');
}

galleryButtonExpand.addEventListener('click', openGallery);
galleryButtonCollapse.addEventListener('click', closeGallery);



