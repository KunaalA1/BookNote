const trashcan = document.querySelector('button.delete');
const markfinished = document.querySelector('button.finished');
const book_update = document.querySelector('button.update');

book_update.addEventListener('click', (e) => {
  const endpoint = `/update/${trashcan.dataset.doc}`;
  const input = document.getElementById('currentPage');
  const inputValue = input.value;
  console.log(inputValue)
  fetch(endpoint, {
    method:'PUT',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({currentPage:inputValue})

  })
  .then(response=>response.json())
  .then(data=> window.location.href = data.redirect)
  .catch(err => console.log(err))
});

trashcan.addEventListener('click', (e) => {
  const endpoint = `/books/${trashcan.dataset.doc}`;

  fetch(endpoint, {
    method: 'DELETE',
  })
  .then(response => response.json())
  .then(data => window.location.href = data.redirect)
  .catch(err => console.log(err));
});
//this markfinished button will set the book item to finished = true
markfinished.addEventListener('click', (e) => {
    const endpoint = `/books/${markfinished.dataset.doc}`

    fetch(endpoint, {
        method: 'PUT',
    })
    .then(response=>response.json())
    .then(data=> window.location.href = data.redirect)
    .catch(err => console.log(err))
});