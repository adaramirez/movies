let data = "{}";

let xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        data = this.response;
        var list = JSON.parse(data);
        console.log(list);

        function moviesTemplate(movie){
            return `
            <div class="movie container">
                <div class="row">
                    <div id="first-half" class="col-sm-6">
                        <img class="movie-photo" src="https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}">
                    </div>
                    <div class="col-sm-6">
                        <h2 class="movie-title">${movie.title}<span class="year">(${movie.release_date.substring(0,4)})</span></h2>
                        <br>
                        <p class="vote">Vote Average: ${movie.vote_average}</p>
                        <p class="count">Vote Count: ${movie.vote_count}</p>
                        <p class="popularity">Popularity:${movie.popularity}</p>
                    </div>
                </div>
            </div>
            <br>
            `
        }

        document.getElementById("movies").innerHTML = `
            <h1 class="app-title">${list.item_count} Chick Flick Movies</h1>
            ${list.items.map(moviesTemplate).join('')}
            <footer>These ${list.item_count} movies were added recently. Check back soon for updates</footer>
        `
    }
   
});

xhr.open("GET", "https://api.themoviedb.org/3/list/86708?api_key=a935460147ecfd17f1862af26aaed743&language=en-US");

xhr.send();


  

  










