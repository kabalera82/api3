const cogePelis = async () => {
    const res = await fetch("https://ghibliapi.vercel.app/films");
    const dataJSON = await res.json();
    const peliculas = dataJSON.map((item) => ({
        englishTitle: item.title,
        japaneseTitle: item.original_title,
        romanTitle: item.original_title_romanised,
        poster: item.image,
        description: item.description,
        director: item.director,
        productor: item.producer,
        releaseDate: item.release_date,
        puntuacion: item.rt_score,
        id: item.id,
        banner:item.movie_banner,

    }));
    imprimePelis(peliculas);
};

const imprimePelis = (movies) => {
    for (const movie of movies) {
        const li = document.createElement("li");
        li.innerHTML = `
        <h2>${movie.englishTitle}</h2>
        <h3>${movie.japaneseTitle}</h3>
        <h4>${movie.romanTitle}</h4>
        <img src="${movie.poster}" alt="${movie.englishTitle} poster"/>
        `;

        const divInfo = document.createElement("div");
        divInfo.classList.add("divInfo");
        divInfo.innerHTML = `
            <h3>${movie.englishTitle}</h3>
            <h4>${movie.japaneseTitle}</h4>
            <p>${movie.romanTitle}</p>
            <p>${movie.description}</p>
            <p>${movie.director}</p>
            <p>${movie.productor}</p>
            <p>${movie.releaseDate}</p>
            <p>People Rate: ${movie.puntuacion}</p>
            <img src="${movie.banner}" alt="${movie.japaneseTitle} banner"/>
            
        `;
        divInfo.style.display = 'none'; // Ocultar por defecto
        
        li.appendChild(divInfo);
        document.querySelector("#movies").appendChild(li);
        
        li.addEventListener('click', () => {
            if (divInfo.style.display === 'none') {
                divInfo.style.display = 'block';
            } else {
                divInfo.style.display = 'none';
            }
        });
    }
};

cogePelis();