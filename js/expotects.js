const slides = document.querySelectorAll(".carrusel figure");

let inicio = 0;
let final = 3

const Boton_a = document.getElementById("boton_anterior").addEventListener("click", () => {
  inicio -= 3
  final -= 3

   if (inicio <=0) {
  final = slides.length
  inicio = slides.length - 3
   }
  actualizar()
})


const boton_s = document.getElementById("boton_siguiente").addEventListener("click", ()=> {
  final  += 3
  inicio += 3

  if (final>= slides.length){
  final  = 3 
  inicio = 0  
} 
  
  actualizar()
})
function actualizar() {
	

 const division = Array.from(slides).slice(inicio, final);

 slides.forEach(slide => {
    slide.style.display = "none";
});

 division.forEach(slide => {
    slide.style.display = "block";
});
}

actualizar()
