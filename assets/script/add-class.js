// let scroll =document.scrollingElement.addEventListener('scroll', scrollX);
// let scrollX = document.scrollingElement.scrollLeft;
// console.log(scrollX);

function positionX() {
  addClass();
}

let image = document.querySelector(".header__container-image")
function addClass() {
  let scrollX = document.scrollingElement.scrollTop;
  console.log(scrollX);
  let header = document.querySelector('.header');
  if(scrollX > 1) {
  header.classList.add('header-fixed');
  image.classList.add('header__img-fixed');
  } else if(scrollX < 1) {
  header.classList.remove('header-fixed');
  image.classList.remove('header__img-fixed');
  }
 
}