// =====================================================
// ===================== SLIDER =========================
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
// ====================== VISOR =========================
// =====================================================

const visor =
document.getElementById("visor");

const visorImg =
document.getElementById("visor-img");

// =====================================================
// ================= IMAGENES PROMOS ===================
// =====================================================

const promoImages =
document.querySelectorAll(".promo-card img");

// =====================================================
// ================ IMAGENES PIZARRON ==================
// =====================================================

const pizarronImages =
document.querySelectorAll(".foto img");

// =====================================================
// ===================== VARIABLES =====================
// =====================================================

let currentImages = [];

let currentImage = 0;

// =====================================================
// ================== ABRIR PROMOS =====================
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
// ================= ABRIR PIZARRON ====================
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
// ================== CERRAR VISOR =====================
// =====================================================

function cerrarVisor(){

  visor.style.display = "none";

}

// =====================================================
// ================== CAMBIAR FOTO =====================
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

// =====================================================
// ================== CERRAR CON ESC ===================
// =====================================================

document.addEventListener("keydown",(e)=>{

  if(e.key === "Escape"){

    cerrarVisor();
    cerrarModal();

  }

});

// =====================================================
// =============== CERRAR CLICK FUERA ==================
// =====================================================

visor.addEventListener("click",(e)=>{

  if(e.target === visor){

    cerrarVisor();

  }

});

// =====================================================
// ================= MODAL INTRANET ====================
// =====================================================

const modal =
document.getElementById("modal-intranet");

// =====================================================
// ================== ABRIR MODAL ======================
// =====================================================

function abrirModal(){

  modal.style.display = "flex";

  document.body.style.overflow = "hidden";

}

// =====================================================
// ================== CERRAR MODAL =====================
// =====================================================

function cerrarModal(){

  modal.style.display = "none";

  document.body.style.overflow = "auto";

}

// =====================================================
// ========= CERRAR MODAL CLICK FUERA ==================
// =====================================================

modal.addEventListener("click",(e)=>{

  if(e.target === modal){

    cerrarModal();

  }

});

// =====================================================
// ================== EFECTO NAVBAR ====================
// =====================================================

const navLinks =
document.querySelectorAll(".navbar a");

navLinks.forEach((link)=>{

  link.addEventListener("mouseenter",()=>{

    link.style.transition = ".3s";

  });

});

// =====================================================
// ================= ANIMACION CARDS ===================
// =====================================================

const cards =
document.querySelectorAll(
  ".card, .promo-card, .foto"
);

const observer =
new IntersectionObserver((entries)=>{

  entries.forEach((entry)=>{

    if(entry.isIntersecting){

      entry.target.style.opacity = "1";

      entry.target.style.transform =
      "translateY(0px)";

    }

  });

},{
  threshold:0.15
});

cards.forEach((card)=>{

  card.style.opacity = "0";

  card.style.transform =
  "translateY(40px)";

  card.style.transition =
  ".7s ease";

  observer.observe(card);

});

// =====================================================
// ================== BOTON LOGIN ======================
// =====================================================

const loginBtn =
document.querySelector(".btn-login");

if(loginBtn){

  loginBtn.addEventListener("click",()=>{

    alert(
      "Acceso a intranet próximamente."
    );

  });

}