let quotes = [
  {
    author_ru: "Волк Бегун",
    ru: "Лучше быть последним — первым, чем первым — последним.",
    author_en: "Wolf Runner",
    en: "It is better to be the last - the first, than the first - the last.",
  },
  {
    author_ru: "Волк Помогатор",
    ru: "На случай, если буду нужен, то я там же, где и был, когда был не нужен.",
    author_en: "Wolf Helper",
    en: "In case I'm needed, I'm right where I was when I wasn't needed.",
  },
  // Добавь больше цитат...
];

// Получаем элементы
const quoteText = document.querySelector(".funchuck2");
const btn = document.querySelector(".funchuck");
const image = document.querySelector(".image");

// Массив анимаций
const animations = ["shake", "rotate", "zoom"];

// Генерация случайного числа
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

// Смена цитаты
function changeQuote() {
  let randomNum = getRandomNumber(quotes.length);
  quoteText.innerHTML = '"' + quotes[randomNum].ru + '"';
}

// Применение случайной анимации
function applyRandomAnimation() {
  // Удаляем все предыдущие анимации
  image.classList.remove(...animations);

  // Применяем новую случайную анимацию
  let randomAnimation = animations[getRandomNumber(animations.length)];
  image.classList.add(randomAnimation);
}

// При загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
  changeQuote();
  applyRandomAnimation();
});

// При нажатии на кнопку
btn.addEventListener("click", () => {
  changeQuote();
  applyRandomAnimation();
});
