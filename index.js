let carrito = [];

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-primary');
    const carritoIcono = document.querySelector('.nav-link');
    const listaCarrito = document.getElementById('listaCarrito'); /*lista del modal*/
    const vaciarCarritoBtn = document.getElementById('vaciarCarrito');

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            const libro = event.target.parentElement.querySelector('p').textContent;
            carrito.push(libro);
            console.log(carrito);
            actualizarCarrito();
            actualizarEstadoBoton(event.target);
        });
    });

    function actualizarCarrito() {
        const badge = document.querySelector('.badge');
        badge.textContent = carrito.length;
        mostrarCarrito();
    }

    function mostrarCarrito() {
        listaCarrito.innerHTML = ''; //Limpia la lista

        carrito.forEach(libro => {
            console.log(libro);
            const li = document.createElement('li');
            li.textContent = libro;
            li.classList.add('list-group-item');
            listaCarrito.appendChild(li);
        });
    }

    function actualizarEstadoBoton(boton) {
        boton.textContent = 'Agregado al carrito';
        boton.classList.remove('btn-primary');
        boton.classList.add('btn-success'); //Cambia el color del boton
        boton.disabled = true; //Deshabilitar botón
    }

    carritoIcono.addEventListener('click', function() {
        mostrarCarrito();
        const carritoModal = new bootstrap.Modal(document.getElementById('carritoModal'));
        carritoModal.show(); //Muestra el modal
    });

    vaciarCarritoBtn.addEventListener('click', function() {
        carrito = []; //Vaciamos el carrito
        listaCarrito.innerHTML = ''; //Limpia la lista de productos en el modal
        actualizarCarrito(); //Actualiza el contador del icono de carrito
    });

    const formBusqueda = document.querySelector('form.d-flex');
    formBusqueda.addEventListener('submit', function(event) {
        event.preventDefault();

        const inputBusqueda = document.querySelector('.form-control');
        const textoBusqueda = inputBusqueda.value.toLowerCase();
        const libros = document.querySelectorAll('#listaLibrosDisponibles li');

        let libroEncontrado = null; // Variable para almacenar el elemento encontrado

        libros.forEach(libro => {
            const titulo = libro.querySelector('p').textContent.toLowerCase();

            // Mostrar u ocultar libros según la búsqueda
            if (titulo.includes(textoBusqueda)) {
                libro.style.display = 'block'; // Mostrar el libro que coincide con la búsqueda
                libroEncontrado = libro;
            } else {
                libro.style.display = 'none'; // Ocultar los libros que no coinciden con la búsqueda
            }
        });

        if (libroEncontrado) {
            libroEncontrado.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Botón Back to Top 
window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("backToTopBtn").style.display = "block";
    } else {
      document.getElementById("backToTopBtn").style.display = "none";
    }
  }
  
  function topFunction() {
    document.body.scrollTop = 0; //Safari
    document.documentElement.scrollTop = 0; //Chrome, Firefox, IE y Opera
  }
  