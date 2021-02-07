  document.addEventListener("DOMContentLoaded", () => {

      (() => {
          const carouselLeft = document.querySelector(".movie-info1 #carousel-left");
          const carouselRight = document.querySelector(".movie-info1 #carousel-right");


          const cardContainer = document.querySelector('.movie-info1 .card-container')

          const offset = 231

          carouselLeft.addEventListener('click', () => {
              cardContainer.scrollLeft -= offset;
          });

          carouselRight.addEventListener('click', () => {
              cardContainer.scrollLeft += offset;
          });
      })();

      (() => {
          const carouselLeft = document.querySelector(".movie-info2 #carousel-left");
          const carouselRight = document.querySelector(".movie-info2 #carousel-right");


          const cardContainer = document.querySelector('.movie-info2 .card-container')

          const offset = 231

          carouselLeft.addEventListener('click', () => {
              cardContainer.scrollLeft -= offset;
          });

          carouselRight.addEventListener('click', () => {
              cardContainer.scrollLeft += offset;
          });
      })();

  });
