
//SwiperJS 
// Dupliquer les diapositives existantes


console.log("c'est parti pour le script du Swiper...!");

let originalSlides = document.querySelectorAll(".swiper-slide");

originalSlides.forEach((slide) => {
  let duplicateSlide = slide.cloneNode(true);
  document.querySelector(".mySwiper .swiper-wrapper").appendChild(duplicateSlide);
});

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

console.log("c'est parti pour le script des titres...!");

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
console.log("c'est parti pour le script des nuages...!");

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


 // Menu burger
 
  //... Selected class menuToggle DOM

  console.log("c'est parti pour le script du burger...!");

  document.addEventListener("DOMContentLoaded", function() {

    // Sélectionner le bouton burger
    const menuToggle = document.querySelector(".menuToggle");
    // Sélectionner les parties du menu
    const partToggle = [
        document.querySelector(".menuNav"),
        document.querySelector(".menuLogo"),
        document.querySelector(".menuFlowers"),
        document.querySelector(".menuCats"),
        document.querySelector(".menuFooter"),
    ];
    menuToggle.addEventListener("click", toggleNav);
    console.log("tu cliques sur le burger!!");
    // Ajouter les écouteurs pour les parties du menu (permet de faire fermer le menu)
    partToggle.forEach((part) =>
        part.addEventListener("click", toggleNav)
    );
    // Ajouter les écouteurs pour les liens du menu (ferme le menu lorsque l'on clique sur un lien)
    document
    .querySelectorAll(".linkNav")
    .forEach((link) => link.addEventListener("click", closedMenu));
    // Fonction pour basculer l'état du menu
    function toggleNav() {
        menuToggle.classList.toggle("active");
        partToggle.forEach((part) => part.classList.toggle("active"));
    }
    // Fonction pour fermer le menu
    function closedMenu() {
        menuToggle.classList.remove("active");
        partToggle.forEach((part) => part.classList.remove("active"));
    }
  });