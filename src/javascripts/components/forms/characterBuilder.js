const characterBuilder = (array) => {
  document.querySelector('#main').innerHTML = '';
  document.querySelector('#main').innerHTML = `
  <div class="container d-flex justify-content-center">
      <nav aria-label="Page navigation example" class="pagination pagination-centered">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" href="#" id="previous">Previous</a></li>
          <li class="page-item"><a class="page-link" href="#" id="first">1</a></li>
          <li class="page-item"><a class="page-link" href="#" id="second">2</a></li>
          <li class="page-item"><a class="page-link" href="#" id="third">3</a></li>
          <li class="page-item"><a class="page-link" href="#" id="four">4</a></li>
          <li class="page-item"><a class="page-link" href="#" id="five">5</a></li>
          <li class="page-item"><a class="page-link" href="#" id="six">6</a></li>
          <li class="page-item"><a class="page-link" href="#" id="seven">7</a></li>
          <li class="page-item"><a class="page-link" href="#" id="eight">8</a></li>
          <li class="page-item"><a class="page-link" href="#" id="nine">9</a></li>
          <li class="page-item"><a class="page-link" href="#" id="ten">10</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    </div>`;
  array.forEach((item) => {
    document.querySelector('#main').innerHTML += `
      <div class="card m-3 middle module-btn button-card front" style="width: 18rem;">
        <div class="card-body" id="view-movie">
          <h5 class="card-title" id="view-movie">${item.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted" id="view-movie">${item.race}</h6>
          <a href="${item.wikiUrl}" class="card-link">${item.name}'s wikiUrl</a>
        </div>
      </div>
  `;
  });
};

export default characterBuilder;

// <div class="card m-3 middle module-btn button-card back" style="width: 18rem;">
// <div class="card-body" id="view-movie">
//   <h5 class="card-title" id="view-movie">${item.name}</h5>
//   <h6 class="card-subtitle mb-2 text-muted" id="view-movie">${item.race}</h6>
//   <a href="${item.wikiUrl}" target="_blank" class="card-link">${item.name}'s wikiUrl</a>
// </div>
// </div>
