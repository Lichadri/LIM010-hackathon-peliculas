const btnSearch = document.getElementById('searchbyTitle');
const type = document.getElementById('selector');
const display = document.getElementById('posters');
const slideshow = document.getElementById('slideshow');
let movie = [];

const showDisplay = (arrayToPrint) => {
    slideshow.classList.add('hide');
    arrayToPrint.forEach(element => {
        display.innerHTML += `
          <figure class="wp-caption">
          <input class="wp-caption-image" name="${element.title}" type="image" src="${element.poster}" alt="${element.title}">
          <figcaption class="wp-caption-text" type="text">${element.title}</figcaption>
          </figure>`;
    })
};

const searchTitles = () => {
    const titleName = document.getElementById('byTitle').value;
    const typeOf = type.options[type.selectedIndex].value;
    let url = `http://www.omdbapi.com/?s=${titleName}&type=${typeOf}&r=json&plot=full&apikey=3ab3fdc7`
    fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(json.Search);

            json.Search.forEach(element => {
                movie = [{
                    poster: element.Poster,
                    title: element.Title,
                    type: element.Type,
                    year: element.Year,
                    id: element.imdbID,
                }]
                showDisplay(movie);
            });
        })
    display.innerHTML = null;
    return movie;
};




btnSearch.addEventListener('click', searchTitles);