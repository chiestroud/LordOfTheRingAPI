/* eslint-disable no-underscore-dangle */
const bookBuilder = (array) => {
  document.querySelector('#main').innerHTML = '';
  array.forEach((item) => {
    document.querySelector('#main').innerHTML += `
      <div class="card m-3 middle module-btn button-card-book" id="bookTitle" style="width: 18rem;">
        <div class="card-body" id="view-book--${item._id}">
          <h5 class="card-title" id="view-book--${item._id}">${item.name}</h5>
          <div class="chapterList"></div>
        </div>
      </div>`;
  });
};

export default bookBuilder;
