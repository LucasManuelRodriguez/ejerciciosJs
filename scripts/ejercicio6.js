// 6. Desarrollar una función que dibuje una 'Card' de una película en el documento usando un objeto javascript como datos.


export function printMovies(boxMovies,film){
    boxMovies.innerHTML += `<section class="movie-card">
                            <img class="movie-img" src="${film.img}" alt="foto movie Terminator">
                            <h5 class="movie-title">${film.title}</h5>
                            <p class="movie-description">${film.description}</p>
                        </section>`;
}