$('a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href');
  var pos = $(elmHash).offset().top - 80;
  $('body,html').animate({scrollTop: pos}, 500);
  return false;
});
$('#nav_burger nav ul li a[href]').on('click', function(event) {
  $('.burger_box').trigger('click');
});
function scrollAddClass() {
  const scrollEffect = document.querySelectorAll('.inactive');
  let windowHeight = window.innerHeight;
  for (let i = 0; i < scrollEffect.length; i++) {
    target = scrollEffect[i].getBoundingClientRect().top;
    if (target < windowHeight) {
      scrollEffect[i].classList.add('active');
    }
  }
}
document.addEventListener('DOMContentLoaded', scrollAddClass);
document.addEventListener('scroll', scrollAddClass);

const slide = document.getElementById('slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const lists = document.querySelectorAll('.list');
const totalSlides = lists.length;
let count = 0;

// ↓関数を定義

function nextClick() {
  slide.classList.remove( `slide${count % totalSlides + 1}` );
  count++;
  slide.classList.add( `slide${count % totalSlides + 1}` );
}
function prevClick() {
  slide.classList.remove( `slide${count % totalSlides + 1}` );
  count--;
  if (count < 0) count = totalSlides - 1;
  slide.classList.add( `slide${count % totalSlides + 1}` );
}

// ↓クリックイベントのリスナーを登録

next.addEventListener('click', () => {
  nextClick();
});
prev.addEventListener('click', () => {
  prevClick();
});