            const search = document.querySelector('button.search');
            
            search.addEventListener('click',  (e) => {
              
                e.preventDefault()
                const search_term = document.getElementById('searchbar');
                const search_val = search_term.value
                const endpoint = `https://www.googleapis.com/books/v1/volumes?q=${search_val}&key=AIzaSyBos_S8p55NisvV-nVsecTnecC_yoRMVrc`;
                
                fetch(endpoint, {
                method: 'GET',})
                .then(async response =>  {
                    const data = await response.json()
                    return data;
                })
                .then(data => (displayResults(data, search_val)))
                .catch(err => console.log(err));
                });

                function displayResults(data, search_val) {
                    const resultsDiv = document.getElementById('results');
                    resultsDiv.innerHTML = '';
                    const numResults = data.items.length;

                    const queryDiv = document.getElementById('query');
                    queryDiv.innerHTML = `<h2 style="color:#0F2C59;> ${numResults} results found for query '${search_val}' </h2>`;



                    if(data.items){

                        data.items.forEach(item => {

                            const bookInfo = item.volumeInfo;
                            const title = bookInfo.title;
                            const authors = bookInfo.authors ? bookInfo.authors.join(', ') : 'Unknown Author';
                            const description = bookInfo.description ? bookInfo.description : 'Description not Given';
                            const pageCount = bookInfo.pageCount;
                            const bookElement = document.createElement('div');
                            bookElement.innerHTML =
                        `<div class="row">
                            <div class ='card' style="width:30rem; margin: 0 auto; float:none; margin-bottom: 10px;">
                                <div class="card text-center">
                                <div class="card-header" style="padding-left:4.5rem;">
                            <ul class="nav nav-pills card-header-pills">
                                <li class="nav-item">
                                    <div class="nav-link currentPage"> Number Pages: ${pageCount}</a>
                                </li>
                            </ul>
                            </div>
                                <div class="card-body">
                                    <h5 class="card-title">${title}</h5>
                                    <p class="card-text">Authors: ${authors}</p>
                                    <a onClick="addBook('${title}',' ${authors}', '${pageCount}')" class="btn black-background" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Book</a>
                                </div>
                            </div>
                        </div>
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                 <div class="modal-content">
                                    <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                    </div>
                                    <div class="modal-body">
                                    <strong> Item  Added to your Reading List! </strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
                        resultsDiv.appendChild(bookElement);
                        })
                    }else {
                resultsDiv.innerHTML = '<p>No results found.</p>';
                }
                }
                
                function addBookone(title, authors, pageCount){
                    console.log(authors);
                    console.log(pageCount);
                    console.log(title);
        
                }
                
                
                function addBook(title, authors, pageCount){
                    const data = {title: title, author: authors, currentPage: 0, numberPages:pageCount, thoughts: "Nothing Here Yet! :)" };
                    const endPoint = `/books`;
                    fetch(endPoint, {
                        method:'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(data)
                    })
                    .catch(err => console.log(err));
                }
                