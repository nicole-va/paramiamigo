function moverPositionRandom(elm){
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px'
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px'
}
let btnSi = document.getElementById("btn-si");
let btnNo = document.getElementById("btn-no");
let divModoSor = document.getElementsByClassName("modo-sorpresa")[0];

btnNo.addEventListener('mousedown', function(e){moverPositionRandom(e.target)});

btnSi.addEventListener('click', function(e){
    alert("Sabia que dirías que si. Caseminos y ya tengamos hijo Te AMOOO <3");
    divModoSor.style.display =  'block';
    const cancion = new Audio('./img/CrowdCheerApplsOut PE944402.mp3');
    cancion.play();
});