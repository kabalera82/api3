const cogePelis = async () => {
    const res = await fetch("https://ghibliapi.vercel.app/films");
    const dataJSON = await res.json();
    const peliculas = dataJSON.map((item) => ({
        englishTitle: item.title,
        japaneseTitle: item.original_title,
        romanTitle: item.original_title_romanised,
        poster: item.image,
        id: item.id,
    }));
    imprimePelis(peliculas);
};

const imprimePelis = (movies) => {
    for (const movie of movies) {
        const li = document.createElement("li");
        li.innerHTML = `
        <h2>${movie.englishTitle}</h2>
        <h3>${movie.japaneseTitle}</h3>
        <h4>${movie.romanTitle}
        <img src="${movie.poster}" alt="${movie.englishTitle} poster"/>
        `;
        document.querySelector("#movies").appendChild(li);
    }
};

cogePelis();