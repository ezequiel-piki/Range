const inputRango = document.getElementById('inputRango');
const visitas = document.getElementById('visitas');
const precio = document.getElementById ('precio');
const arrayVisitas = ['10K','50K','100K','500K','1M']

inputRango.addEventListener('input',() =>{
    console.log('me diste click 🙌')
    console.log(inputRango.value )  
    precio.textContent = inputRango.value 
    visitas.textContent = arrayVisitas[(inputRango.value/8-1)]
})