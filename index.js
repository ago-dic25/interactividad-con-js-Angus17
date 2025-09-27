let botonModo = document.getElementById("n0");
let likeBtn = document.getElementById("like-btn");
let likeCount = document.getElementById("like-count");
let contador = 0;

let inputBuscar = document.getElementById("s0");
let botonBuscar = document.getElementById("s1");

let seeAll = document.getElementById("seeAll");
let galleryImg = document.getElementById("gallery-img");
let imagenes = [
    "./imagenes/arnel-hasanovic-MNd-Rka1o0Q-unsplash.jpg",
    "./imagenes/jukka-aalho-OaPksPcVp50-unsplash.jpg",
    "./imagenes/rachel-coyne-mTsotT-gMrY-unsplash.jpg",
    "./imagenes/soundtrap-n30_i7mx62o-unsplash.jpg"
];
let idx = 0;
let intervalo = null;

seeAll.addEventListener("mouseover", function() {
    galleryImg.style.display = "block";
    intervalo = setInterval(function() {
        idx = (idx + 1) % imagenes.length;
        galleryImg.src = imagenes[idx];
    }, 2000);
});

seeAll.addEventListener("mouseout", function() {
    clearInterval(intervalo);
});

botonBuscar.addEventListener("click", function() {
    galleryImg.style.display = "none";
    let palabra = prompt("Escribe tu búsqueda");
    let tarjetas = document.querySelectorAll(".tarjeta");
    tarjetas.forEach(function(tarjeta) {
        if (tarjeta.textContent.toLowerCase().includes(palabra.toLowerCase())) {
            tarjeta.classList.remove("ocultar");
            tarjeta.querySelector("img").style.display = "block";
        } else {
            tarjeta.classList.add("ocultar");
            tarjeta.querySelector("img").style.display = "none";
        }
    });
});

botonModo.addEventListener("click", function() {
    document.body.classList.toggle("dark");
    botonModo.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

likeBtn.addEventListener("click", function() {
    contador++;
    likeCount.textContent = contador;
});