
    // Arreglo de objetos con información de favoritos
    const favoritos = [
      { nombre: "Leonardo DiCaprio", profesion: "Actor", pelicula: "El lobo de Wall Street" },
      { nombre: "Lionel Messi", deporte: "Fútbol", equipo: "Inter miami" },
      { nombre: "mora", profesion: "Cantante", genero: "Hip-hop/rap" },
      { nombre: "Elon Musk", profesion: "Empresario", empresa: "SpaceX" },
      { nombre: "Myke Towers", profesion: "Cantante", genero: "Dance/Electrónica" },
      { nombre: "Eladio Carrión", profesion: "Cantante", pelicula: "rapero" },
      { nombre: "Michael Jordan", deporte: "Baloncesto", equipo: "Chicago Bulls" },
      { nombre: "ozuna", profesion: "Cantante", genero: "trap" },
      { nombre: "Albert Einstein", profesion: "Científico", campo: "Física" },
      { nombre: "Rels b", profesion: "Cantante", genero: "rhythm and blues" }
    ];

    // Función para mostrar la información en la página
    function mostrarInformacion() {
      const contenedor = document.getElementById("favoritos");

      favoritos.forEach(favorito => {
        const div = document.createElement("div");
        div.classList.add("col-md-4", "mb-4");
        div.innerHTML = `
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${favorito.nombre}</h5>
              <p class="card-text">Profesión: ${favorito.profesion || favorito.deporte}</p>
              <p class="card-text">Detalles: ${favorito.pelicula || favorito.equipo || favorito.genero || favorito.empresa || favorito.ranking || favorito.campo}</p>
            </div>
          </div>
        `;
        contenedor.appendChild(div);
      });
    }

    // Llamar a la función para mostrar la información al cargar la página
    window.onload = mostrarInformacion;
