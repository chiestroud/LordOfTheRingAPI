const movieBuilder = (array) => {
  document.querySelector('#main').innerHTML = '';
  array.forEach((item) => {
    document.querySelector('#main').innerHTML += `
      <div class="card m-3 middle module-btn button-card" style="width: 18rem;">
        <div class="card-body" id="view-movie">
          <h5 class="card-title" id="view-movie">${item.name}</h5>
          <ul class="movieList container">
            <li><i class="fas fa-star"></i> Budget: ${item.budgetInMillions} Million</li>
            <li><i class="fas fa-star"></i> Box Office Revenue: ${item.boxOfficeRevenueInMillions} Million</li>
            <li><i class="fas fa-star"></i> Academy Award Nominations: ${item.academyAwardNominations} Times</li>
            <li><i class="fas fa-star"></i> Academy Award Win ${item.academyAwardWins} Times</li>
            <li><i class="fas fa-star"></i> Rotten Tomatoes Score: ${item.rottenTomatesScore}</li>
          </ul>
        </div>
      </div>`;
  });
};

export default movieBuilder;
