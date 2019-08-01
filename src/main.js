const btnSearch = document.getElementById('searchbyTitle');
const type = document.getElementById('selector');

const searchTitles = () => {
    const titleName = document.getElementById('byTitle').value;
    const typeOf = type.options[type.selectedIndex].value;
    const year = document.getElementById('byYear').value;
    let url = `http://www.omdbapi.com/?s=${titleName}&type=${typeOf}&y=${year}&r=json&apikey=3ab3fdc7`
    fetch(url)
        .then(res => res.json())
        .then(json => console.log(json))
};

btnSearch.addEventListener('click', searchTitles);