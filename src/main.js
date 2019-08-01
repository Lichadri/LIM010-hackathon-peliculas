const btnSearch = document.getElementById('searchbyTitle');
const type = document.getElementById('selector');
const display = document.getElementById('posters');
let movie = [];

const showDisplay = (arrayToPrint) => {
    arrayToPrint.forEach(element => {
        display.innerHTML += `
          <figure class="wp-caption">
          <input class="poster" name="${element.title}" type="image" src="${element.poster}" alt="${element.title}">
          <figcaption class="wp-caption-text" type="button">${element.poster}</figcaption>
          </figure>`;
    })
};

const searchTitles = () => {
    const titleName = document.getElementById('byTitle').value;
    const typeOf = type.options[type.selectedIndex].value;
    const year = document.getElementById('byYear').value;
    let url = `http://www.omdbapi.com/?s=${titleName}&type=${typeOf}&y=${year}&r=json&apikey=3ab3fdc7`
    fetch(url)
        .then(res => res.json())
        .then(json => {
            json.Search.forEach(element => {
                movie = [{
                    poster: element.Poster,
                    title: element.Title,
                    type: element.Type,
                    year: element.Year,
                }]
                showDisplay(movie);
            });

        })


    display.innerHTML = null;
    return movie;
};




btnSearch.addEventListener('click', searchTitles);