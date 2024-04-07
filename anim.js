import './style.css';
(async () => {

 
  
  ///////////////////////////////////////////////////////////
  const { Application } = await import('@splinetool/runtime');
  const canvas = document.getElementsByClassName('switchSpline')[0]; // Assuming you've adjusted your HTML or JS as mentioned earlier
  const canvas2 = document.getElementsByClassName('canvas3d2')[0]; // Assuming you've adjusted your HTML or JS as mentioned earlier
  const canvas3 = document.getElementsByClassName('canvas3d3')[0]; // Assuming you've adjusted your HTML or JS as mentioned earlier
  const SplineHero = document.getElementsByClassName('canvas3dlamp')[0]; // Assuming you've adjusted your HTML or JS as mentioned earlier

  const app = new Application(canvas);
  const app2 = new Application(canvas2);
  const app3 = new Application(canvas3);
  const lamp = new Application(SplineHero);

  lamp.load('https://prod.spline.design/Ers8tHqNy1FXlB8N/scene.splinecode').then(() => {

  });

  app.load('https://prod.spline.design/YERwog8omlgGsuHH/scene.splinecode').then(() => {
    app.addEventListener('mouseDown', (e) => {

      const text = document.getElementById("text");
      const text2 = document.getElementById("text2");
      const textb = document.getElementById("textb");


      const body = document.getElementById("body");
      setTimeout(() => {
        body.style.backgroundColor = "#979797";
      }, 100)

      setTimeout(function () {
        body.style.backgroundColor = "#131313"; // Remplacez "blue" par la couleur de votre choix
      }, 500);

      setTimeout(function () {
        text.style.display = "none";
        textb.style.display = "none";
        text2.style.display = "flex";
      }, 800);



    });
  }); 

  app2.load('https://prod.spline.design/J05adJSJ7rlG3B73/scene.splinecode').then(() => {

  });

  app3.load('https://prod.spline.design/iv9WIhQoreNNY-b2/scene.splinecode').then(() => {

  });


   // JS /////////////////////////////////////////////////

   var bouton = document.getElementById("falsebtn_id");
   var falsehero = document.getElementById("falsehero");
   var voile = document.getElementById("voile");
   var voile2 = document.getElementById("voile2");
   var hero = document.getElementById("hero");
   var Switch = document.getElementById("Switch");
 
 
   bouton.addEventListener("click", function() {
     falsehero.classList.add("animationglitch");
 
     setTimeout(() => {
         voile.style.top = "0px";
         voile2.style.top = "50%";
     }, 1000); 
 
     setTimeout(() => {
       falsehero.style.display ="none";
       hero.style.display ="flex";
       voile2.style.display = "none";
       voile.style.display = "none";
       Switch.style.display ="flex";
       

 
   }, 2000);
 
   });
   
})();



/////////////////////////////////////////ANIMATION AVEC LE TEXTE ///////////////////////////////////////////////////

function checkScroll() {
  var elements = document.querySelectorAll('.appears'); // Sélectionnez tous les éléments avec la classe 'appears'

  elements.forEach(function (element) {
    var windowScroll = window.scrollY;
    var windowHeight = window.innerHeight;
    var elementTop = element.getBoundingClientRect().top;
    var elementBottom = element.getBoundingClientRect().bottom;

    // Calculer quand l'élément entre dans la fenêtre d'affichage
    var start = windowScroll + elementTop - windowHeight;
    // Calculer quand l'élément est complètement visible (ajuster la division par 2 pour modifier la rapidité de l'apparition)
    var fullyVisible = windowScroll + elementTop - windowHeight / 2;
    // Calculer quand l'élément commence à sortir de l'écran par le bas
    var startToDisappear = windowScroll + elementBottom - windowHeight;

    if (windowScroll > start && windowScroll < fullyVisible) {
      // Faire apparaître l'élément
      var opacity = (windowScroll - start) / (fullyVisible - start);
      element.style.opacity = opacity;
      element.style.transform = `translateY(${(1 - opacity) * 50}px)`;
    } else if (windowScroll >= fullyVisible && windowScroll < startToDisappear) {
      // L'élément est complètement visible
      element.style.opacity = 1;
      element.style.transform = 'translateY(0px)';
    } else if (windowScroll >= startToDisappear) {
      // Faire disparaître l'élément
      var opacity = (windowHeight - (windowScroll - startToDisappear)) / (windowHeight / 2);
      element.style.opacity = opacity;
      element.style.transform = `translateY(${(1 - opacity) * 50}px)`;
    } else {
      // L'élément n'est pas encore dans la fenêtre d'affichage
      element.style.opacity = 0;
      element.style.transform = 'translateY(50px)';
    }
  });
}
// Initialisation de l'opacité et de la position de tous les éléments .appears lors du chargement de la page
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.appears').forEach(function (element) {
    element.style.opacity = 0;
    element.style.transform = 'translateY(50px)';
  });
  checkScroll(); // Appliquez immédiatement les styles appropriés en fonction de la position de défilement initiale
});

// Ajoutez l'écouteur d'événement 'scroll' à la fenêtre
window.addEventListener('scroll', checkScroll);


