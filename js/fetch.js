const tabla = document.querySelector('#lista-juegos tbody');

function cargarUsuarios() {
    fetch("./json/JuegosWii.json")
        .then(respuesta => respuesta.json())
        .then(juegos => {
            juegos.forEach(juegos => {
                const row = document.createElement('tr');
                row.innerHTML += `
                    <td>${juegos.id}</td>
                    <td>${juegos.nombrejuego}</td>
                    <td>${juegos.Precio}</td>
                `
                tabla.appendChild(row);

            });
        }) 
        
}

cargarUsuarios();