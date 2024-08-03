
//SwiperJS 
// Dupliquer les diapositives existantes
let originalSlides = document.querySelectorAll(".swiper-slide");

originalSlides.forEach((slide) => {
  let duplicateSlide = slide.cloneNode(true);
  document.querySelector(".mySwiper .swiper-wrapper").appendChild(duplicateSlide);
});

// Initialiser Swiper avec les diapositives doublées
document.addEventListener("DOMContentLoaded", (event) => {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    initialSlide: 0,
    spaceBetween: 30,  
    effect: 'coverflow',
    grabCursor: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth:20,
      modifier: 1,
      slideShadows: false,
    },
});
});

//Animation Titres

document.addEventListener('DOMContentLoaded', function() {
  const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("titleMov1");
        return;
      }
      entry.target.classList.remove("titleMov1");
    });
  });
  
  const Section1 = document.querySelectorAll(".titleAnim1");
  
  Section1.forEach((element) => observer1.observe(element));
  
  

  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("titleMov2");
        return;
      }
      entry.target.classList.remove("titleMov2");
    });
  });
  
  const Section2 = document.querySelectorAll(".titleAnim2");
  
  Section2.forEach((element) => observer2.observe(element));
});

// Scroll clouds

// Affichage d'un message dans la console
//console.log("Démarrage du cript en cours...!");

// Sélection de l'élément HTML avec l'ID "NuagesBleu"
//const NuagesBleu = document.getElementById("NuagesBleu");

// Vitesse de déplacement des nuages
//const NuagesBleuVitesse = 0.3;

// Position initiale verticale des nuages
//const NuagesBleuPosition = window.innerHeight / 2 - 40;//position du nuage

// Fonction de défilement des nuages en réponse à l'événement de défilement de la fenêtre
//function scrollNuage() {
  // Calcul de la nouvelle position horizontale des nuages en fonction du défilement de la fenêtre
  //const NuagesBleuX = -window.scrollY * NuagesBleuVitesse + NuagesBleuPosition;//déplacement du nuage
  
  // Application de la transformation pour déplacer les nuages horizontalement
  //NuagesBleu.style.transform = `translateX(${NuagesBleuX}px)`; //applique le déplacement

// Ajout d'un écouteur d'événement pour détecter le défilement de la fenêtre et déclencher la fonction de défilement des nuages
//window.addEventListener("scroll", scrollNuage);

// Scroll clouds

// Affichage d'un message dans la console
/* console.log("Démarrage du cript en cours...!");

// Sélection de l'élément HTML avec l'ID "NuagesBleu"
const bigCloud = document.getElementById("big_cloud");
const littleCloud = document.getElementById("little_cloud");


// Vitesse de déplacement des nuages
const bigCloudSpeed = 0.3;
const littleCloudSpeed = 0.3;

// Position initiale verticale des nuages
const bigCloudPosition = window.innerHeight / 2 - 40;//position du nuage
const littleCloudPosition = window.innerHeight / 2 - 40;//position du nuage

// Fonction de défilement des nuages en réponse à l'événement de défilement de la fenêtre
function scrollNuage() {
  // Calcul de la nouvelle position horizontale des nuages en fonction du défilement de la fenêtre
  const bigCloudX = -window.scrollY * bigCloudSpeed + bigCloudPosition;//déplacement du nuage
  const littleCloudX = -window.scrollY * littleCloudSpeed + littleCloudPosition;//déplacement du nuage
  
  // Application de la transformation pour déplacer les nuages horizontalement
  bigCloud.transform = `translateX(${bigCloudX}px)`; //applique le déplacement
  littleCloud.transform = `translateX(${littleCloudX}px)`; //applique le déplacement
}

// Ajout d'un écouteur d'événement pour détecter le défilement de la fenêtre et déclencher la fonction de défilement des nuages
window.addEventListener("scroll", scrollNuage); */

/*console.log("Démarrage du script en cours...!");
function moveCloudsOnScroll() {
  const bigCloud = document.querySelector('.big-cloud');
  const littleCloud = document.querySelector('.little-cloud');
  const placeSection = document.getElementById('place');
  const bigCloudInitialRight = 80; // Position initiale en CSS
  const littleCloudInitialRight = 480; // Position initiale en CSS
  
  function animateClouds() {
      const scrollY = window.scrollY;
      const placeSectionRect = placeSection.getBoundingClientRect();

      if (placeSectionRect.top < window.innerHeight && placeSectionRect.bottom > 0) {
        const bigCloudX = -scrollY * 0.3 + bigCloudInitialRight; // Position initiale + ajustement
        const littleCloudX = -scrollY * 0.3 + littleCloudInitialRight; // Position initiale + ajustement

        bigCloud.style.transform = `translateX(${bigCloudX}px)`;
        littleCloud.style.transform = `translateX(${littleCloudX}px)`;
    }
}

animateClouds();

window.addEventListener('scroll', animateClouds);
}

document.addEventListener('DOMContentLoaded', moveCloudsOnScroll);*/

/*console.log("Le script lancé est animationNuages.js");
function moveCloudsOnScroll() {
    const bigCloud = document.querySelector('.big-cloud');
    const littleCloud = document.querySelector('.little-cloud');
    const placeSection = document.getElementById('place');
    const bigCloudInitialRight = 80; // Position initiale en CSS
    const littleCloudInitialRight = 480; // Position initiale en CSS
    
    function animateClouds() {
        const scrollY = window.scrollY;
        const placeSectionRect = placeSection.getBoundingClientRect();

        if (placeSectionRect.top < window.innerHeight && placeSectionRect.bottom > 0) {
            const bigCloudX = -scrollY * 0.3 + bigCloudInitialRight; // Position initiale + ajustement
            const littleCloudX = -scrollY * 0.3 + littleCloudInitialRight; // Position initiale + ajustement

            bigCloud.style.transform = `translateX(${bigCloudX}px)`;
            littleCloud.style.transform = `translateX(${littleCloudX}px)`;
        }
    }

    animateClouds();

    window.addEventListener('scroll', animateClouds);
}

document.addEventListener('DOMContentLoaded', moveCloudsOnScroll);*/

window.addEventListener('scroll', function() {
	let scrollClouds = document.querySelector('.clouds');
	let topClouds = scrollClouds.offsetTop; 
  	let debutAnimClouds  = topClouds + 400;
	let scrollY = window.scrollY;
	if (scrollY >= debutAnimClouds) {
		limitMoveCloud = Math.min(300, scrollY  - debutAnimClouds );
		scrollClouds.style.transform = 'translateX(-' + limitMoveCloud  + 'px)';
	}
 });

 //Initialisation Skrollr

 var s = skrollr.init();