function setup() {
    fetch("movies.json")
     .then(response => response.json())
     .then(data => parse(data));
}

class Movie {
    constructor(image, name, year, director, rating, background) {
        this.image = image;
        this.name = name;
        this.director = director;
        this.year = year;
        this.rating = rating;
        this.background = background;
    }

    html() {
        const sectionMovie = document.getElementById("cards");
        const templateMovie = document.getElementById("template");
        const cloneMovie = templateMovie.content.cloneNode(true);
        const bodyBackground = document.getElementById("body");

        cloneMovie.querySelector(".templateimage").src = this.image;
        cloneMovie.querySelector(".templatename").innerHTML = this.name;
        cloneMovie.querySelector(".templatedirector").innerHTML = this.director;
        cloneMovie.querySelector(".templateyear").innerHTML = this.year;
        cloneMovie.querySelector(".templaterating").innerHTML = this.rating;

        cloneMovie.querySelector(".templateimage").addEventListener("click", () => {
            bodyBackground.style.backgroundImage = `url(${this.background})`;
            bodyBackground.style.transition = "background-image 0.2s ease-in";
        });
        
        sectionMovie.appendChild(cloneMovie);
    }
}

function parse(data) {
    const valueSort = document.getElementById("sort").value;
    const sectionMovie = document.getElementById("cards");
    sectionMovie.innerHTML = "";

    if (valueSort == "name") {
        data.sort((a, b) => a.name.localeCompare(b.name));
    } else if (valueSort == "mostrecent") {
        data.sort((a, b) => new Date(b.year) - new Date(a.year));
    } else if (valueSort == "oldest") {
        data.sort((a, b) => new Date(a.year) - new Date(b.year));
    } else if (valueSort == "rating") {
        data.sort((a, b) => b.rating - a.rating);
    }

    for (const movie of data) {
        let mov = new Movie(movie.image, movie.name, movie.year, movie.director, movie.rating, movie.background);
        mov.html();
    }
}

document.getElementById("sort").addEventListener("change", function() {
    fetch("movies.json")
     .then(response => response.json())
     .then(data => parse(data));
});

setup();
