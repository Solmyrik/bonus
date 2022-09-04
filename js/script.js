function ibg() {
  let ibg = document.querySelectorAll('.ibg');
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}
ibg();

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function app() {
  const buttons = document.querySelectorAll('.triggers__item');
  const cards = document.querySelectorAll('.carts__item');

  function filter(category, items) {
    items.forEach((item) => {
      const isItemFilters = !item.classList.contains(category);
      const isShowAll = category.toLowerCase() == 'all';
      if (isItemFilters && !isShowAll) {
        item.classList.add('anime');
      } else {
        item.classList.remove('hide');
        item.classList.remove('anime');
      }
    });
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const currentCategory = button.dataset.filter;
      filter(currentCategory, cards);
      buttons.forEach((c) => {
        c.classList.remove('active');
      });
      button.classList.add('active');
    });
  });

  cards.forEach((card) => {
    card.ontransitionend = function () {
      if (card.classList.contains('anime')) {
        card.classList.add('hide');
      }
    };
  });
}

app();
