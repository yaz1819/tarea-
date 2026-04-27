const boton = document.getElementById('btnAnimar');
const caja = document.getElementById('caja');

boton.addEventListener('click', function() {
    caja.style.backgroundColor = 'tomato';
    caja.style.transform = 'scale(1.2)';
});
