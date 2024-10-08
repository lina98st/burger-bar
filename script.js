let burgerPics = document.querySelector('.burger-pics');
let lightbox = document.getElementById("lightbox");

burgerPics.addEventListener("click", function(evt) {
    let burgerItem = evt.target.closest(".burger-item");
if (burgerItem) {
    let bild = burgerItem.querySelector("img");
    if (bild) {
        lightbox.innerHTML = `<div class="schliessen">X</div> ${bild.outerHTML}`;
        lightbox.classList.add("zeigen");
    }
}
});

lightbox.addEventListener("click", function(evt) { 
if (!evt.target.hasAttribute("src")) {
    lightbox.classList.remove("zeigen");
}
});



const hiddenSpeisekarte = document.querySelector('.hiddenSpeisekarte');
const tooltip = document.getElementById('tooltip');

hiddenSpeisekarte.addEventListener('mouseover', () => {
    tooltip.style.display = 'block';
});

hiddenSpeisekarte.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
});

