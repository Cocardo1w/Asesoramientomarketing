//BARRA SLIDER
// Crear una nueva instancia de IntersectionObserver y pasarle una función de devolución de llamada
const observer = new IntersectionObserver((entries) =>{
    // La función de devolución de llamada recibe un array de entradas (elementos observados)
    entries.forEach((entry) =>{
        // Para cada entrada, imprime la entrada en la consola
        console.log(entry)
        if (entry.isIntersecting){
            // Si el elemento está intersectando, agrega la clase 'show' al elemento
            entry.target.classList.add('show');
        } else {
            // Si el elemento no está intersectando, elimina la clase 'show' del elemento
            entry.target.classList.remove('show');
        }
    });
  });
  
  // Selecciona todos los elementos con la clase 'hidden' en el documento
  const hiddenElements = document.querySelectorAll('.hidden');
  
  // Para cada elemento oculto, observa cambios de intersección utilizando el objeto IntersectionObserver
  hiddenElements.forEach((el) => observer.observe(el));
  //------------------------------------------------------------------
  