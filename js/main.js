// =====================================================
// SLIDER
// =====================================================

const slides =
document.querySelectorAll(".slide");

let currentSlide = 0;

function changeSlide(){

  slides[currentSlide]
  .classList.remove("active");

  currentSlide++;

  if(currentSlide >= slides.length){

    currentSlide = 0;

  }

  slides[currentSlide]
  .classList.add("active");

}

setInterval(changeSlide,5000);

// =====================================================
// VISOR
// =====================================================

const visor =
document.getElementById("visor");

const visorImg =
document.getElementById("visor-img");

// =====================================================
// IMAGENES PROMOS
// =====================================================

const promoImages =
document.querySelectorAll(".promo-card img");

// =====================================================
// IMAGENES PIZARRON
// =====================================================

const pizarronImages =
document.querySelectorAll(".foto img");

// =====================================================
// VARIABLES
// =====================================================

let currentImages = [];

let currentImage = 0;

// =====================================================
// ABRIR PROMOS
// =====================================================

promoImages.forEach((img,index)=>{

  img.addEventListener("click",()=>{

    currentImages = promoImages;

    currentImage = index;

    visor.style.display = "flex";

    visorImg.src = img.src;

  });

});

// =====================================================
// ABRIR PIZARRON
// =====================================================

pizarronImages.forEach((img,index)=>{

  img.addEventListener("click",()=>{

    currentImages = pizarronImages;

    currentImage = index;

    visor.style.display = "flex";

    visorImg.src = img.src;

  });

});

// =====================================================
// CERRAR VISOR
// =====================================================

function cerrarVisor(){

  visor.style.display = "none";

}

// =====================================================
// CAMBIAR FOTO
// =====================================================

function cambiarFoto(direction){

  currentImage += direction;

  if(currentImage < 0){

    currentImage =
    currentImages.length - 1;

  }

  if(currentImage >= currentImages.length){

    currentImage = 0;

  }

  visorImg.src =
  currentImages[currentImage].src;

}
