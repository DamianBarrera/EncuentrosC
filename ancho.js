const boton = document.querySelector('button');
const ancho = document.querySelector('.ancho');



boton.addEventListener('click',(e)=>{
    let viewport = window.innerWidth;
    ancho.textContent = viewport ;
     
})
