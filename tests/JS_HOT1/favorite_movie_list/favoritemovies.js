const favoriteMovies = ["Inception", "The Matrix", "Interstellar"];

function displayMovies() {
    const movieList = document.getElementById("movieList");
    movieList.innerHTML = "";

    for (let i = 0; i < favoriteMovies.length; i++) {
        const li = document.createElement("li");
        li.textContent = favoriteMovies[i];
        movieList.appendChild(li);
    }
}

function addMovie() {
    const movieInput = document.getElementById("movieInput");
    const movieName = movieInput.value.trim();

    if (movieName) {
        favoriteMovies.push(movieName);
        movieInput.value = "";
        displayMovies();
    } else {
        alert("Please enter a movie name!");
    }
}

displayMovies();