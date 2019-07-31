const url = 'http://www.omdbapi.com/?t=titanic&apikey=ebdf5d60'
console.log(url)

fetch(url)
  .then(response => response.json())
  .then(data => {
    document.getElementById('ppp').innerHTML = `${data.Title}`;
    console.log(data);
  })
  .catch(err => console.log(err))