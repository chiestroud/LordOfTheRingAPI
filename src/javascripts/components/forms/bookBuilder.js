const bookBuilder = (array) => {
  document.querySelector('#main').innerHTML = '';
  array.forEach((item) => {
    document.querySelector('#main').innerHTML += `
      <div class="card m-3 middle module-btn button-card" style="width: 18rem;">
        <div class="card-body" id="view-movie">
          <h5 class="card-title" id="view-movie">${item.name}</h5>
        </div>
      </div>`;
  });
};

export default bookBuilder;
