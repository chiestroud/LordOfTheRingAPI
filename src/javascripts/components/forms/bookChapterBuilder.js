/* eslint-disable no-underscore-dangle */
const bookChapterBuilder = (array) => {
  document.querySelector('#main').innerHTML = '';
  array.forEach((item) => {
    document.querySelector('#main').innerHTML += `
      <div class="card m-3 middle module-btn button-card-book" id="bookTitle" style="width: 18rem;">
        <div class="card-body" id="view-chapter--${item._id}">
          <h5 class="card-title" id="view-chapter--${item._id}">${item.chapterName}</h5>
        </div>
      </div>`;
  });
};

export default bookChapterBuilder;
