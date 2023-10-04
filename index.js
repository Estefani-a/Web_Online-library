const librosDisponibles = [{
    urlPortada: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/07/20201800/mejores-libros-Don-Quijote-sf.jpg",
    titulo: 'Don Quijote'
},

{
    urlPortada: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/07/20201756/mejores-libros-La-Iliada-SF.jpg",
    titulo: 'La Iliada'
},

{
    urlPortada: "https://www.infobae.com/new-resizer/dhr2UyjseaAtZMBcPSG7tg5ciTo=/992x1488/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/07/20201754/mejores-libros-hamlet-sf.jpg",
    titulo: 'Hamlet'
},
{
    urlPortada: "https://www.infobae.com/new-resizer/7VsZLFo55ikFc8IDJjFw4HrGREY=/992x1488/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/07/20201751/mejores-libros-La-divina-comedia.jpg",
    titulo: 'La divina comedia'
},

{
    urlPortada: "https://www.infobae.com/new-resizer/p9LFNV8Agn7GvMibhLtjYcWx2Ng=/992x1488/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/07/20201742/mejores-libros-el-aleph-sf.jpg",
    titulo: 'El Aleph'
},

{
    urlPortada: "https://www.prensalibre.com/wp-content/uploads/2019/06/El-principito-Antoine-de-Saint-Exup%C3%A9ry.jpg?quality=82&w=709",
    titulo: 'El principito'
},

{
    urlPortada: "images/Un mundo feliz-Portada.jpg",
    titulo: 'Un Mundo Feliz'
},

{
    urlPortada: "images/La piel de zapa-portada.jpg",
    titulo: 'La Piel de Zapa'
},

{
    urlPortada: "images/Clean code-Portada.jpg",
    titulo: 'Clean Code'
},

{
    urlPortada: "images/The pragmatic programmer-portada.jpg",
    titulo: 'The pragmatic programmer'
},

{
    urlPortada: "images/El alquimista-portada.jpg",
    titulo: 'El Alquimista'
},

{
    urlPortada: "images/El retrato de dorian gray-portada.jpg",
    titulo: 'El Retrato de Dorian Gray'
}
]

const librosReservados = []

/* funciones que vamos a utilizar */
function cargarLibrosDisponibles(librosDisponibles) {
    document.getElementById("listaLibrosDisponibles").innerHTML = ""
    for (let index = 0; index < librosDisponibles.length; index++) {
        const libroDisponible = librosDisponibles[index];
        document.getElementById("listaLibrosDisponibles").innerHTML +=
            `<li><img src="${libroDisponible.urlPortada}"><h3 id="title">${libroDisponible.titulo}</h3><button class="btn btn-outline-primary" onclick="reservarLibro(${index},'${libroDisponible.urlPortada}','${libroDisponible.titulo}')">Reservar</button></li>`
    }
}

function reservarLibro(index, urlPortada, titulo) {
    librosDisponibles.splice(index, 1) /* para borrar un elemento (segundo parametro que pasamos) a partir del valor de index */
    librosReservados.push({ titulo: titulo, urlPortada: urlPortada })
    cargarLibrosReservados(librosReservados)
    cargarLibrosDisponibles(librosDisponibles)
}

function cargarLibrosReservados(librosReservados) {
    document.getElementById("listaLibrosReservados").innerHTML = "" /* lo vaciamos antes de empezar a cargar */
    for (let index = 0; index < librosReservados.length; index++) {
        const libroReservado = librosReservados[index];
        document.getElementById("listaLibrosReservados").innerHTML +=
            `<li><img src="${libroReservado.urlPortada}"><h3 id="title">${libroReservado.titulo}</h3><button class="btn btn-outline-danger" onclick="devolverLibro(${index},'${libroReservado.urlPortada}','${libroReservado.titulo}')">Devolver</button></li>`
    }
}

function devolverLibro(index, urlPortada, titulo) {
    librosReservados.splice(index, 1) /* para borrar un elemento (segundo parametro que pasamos) a partir del valor de index */
    librosDisponibles.push({ titulo: titulo, urlPortada: urlPortada })
    cargarLibrosReservados(librosReservados)
    cargarLibrosDisponibles(librosDisponibles)

}

cargarLibrosDisponibles(librosDisponibles);


/* $(":listaLibrosDisponibles").flur(function(){
    $(this).css("color", "green");
    });
 */

/* $(function(){
    $('ul').css('color', 'blue');
    }) */


/* Uso jquary para cambiar el color al titulo de la página */
$(function () {
    $('h1').css('color', 'white');
    $('.funcionamiento').css('color', 'orange');
})




