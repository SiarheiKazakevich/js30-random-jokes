/* let quotes = [
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
  {
    author_ru: "Волк Общительный",
    ru: "Если волк молчит то лучше его не перебивай.",
    author_en: "Wolf Communicative",
    en: "If the wolf is silent, then it is better not to interrupt him.",
  },
  {
    author_ru: "Волк Циркач",
    ru: "Каждый в цирке думает, что знает в цирке, но не каждый, что в цирке знает, что в цирке не каждый знает думает",
    author_en: "Wolf Circus Performer",
    en: "Everyone in the circus thinks they know in the circus, but not everyone in the circus knows that in the circus not everyone knows thinks.",
  },
  {
    author_ru: "Волк Отдыхающий",
    ru: "Легко вставать, когда ты не ложился.",
    author_en: "Wolf Vacationer",
    en: "It's easy to get up when you haven't been to bed.",
  },
  {
    author_ru: "Волк Помнящий",
    ru: "Кем бы ты ни был, кем бы ты не стал, помни, где ты был и кем ты стал.",
    author_en: "Wolf Remembering",
    en: "Whoever you are, whatever you become, remember where you have been and who you have become.",
  },
  {
    author_ru: "Волк Жизненный",
    ru: "Иногда жизнь — это жизнь, а ты в ней иногда.",
    author_en: "Wolf Life",
    en: "Sometimes life is life, and sometimes you are in it.",
  },
  {
    author_ru: "Волк Любитель Пенистого",
    ru: "В жизни полно лжи и грязи, она не так красива. Даже твой лучший друг может не поделиться пивом…",
    author_en: "Wolf Foam Lover",
    en: "Life is full of lies and dirt, it is not so beautiful. Even your best friend might not share a beer...",
  },
  {
    author_ru: "Волк Еврей",
    ru: "Бесплатный сыр бывает только бесплатным.",
    author_en: "Wolf Jew",
    en: "Free cheese is only free.",
  },
  {
    author_ru: "Волк с кифозом",
    ru: "Я не боюсь ударов в спину, гораздо страшнее, если это моя спина….",
    author_en: "Wolf with kyphosis",
    en: "I'm not afraid of being stabbed in the back, it's much worse if it's my back....",
  },
  {
    author_ru: "Волк Дедлайн",
    ru: "Сначала потом, затем, снова опять.",
    author_en: "Wolf Deadline",
    en: "First later, then again.",
  },
  {
    author_ru: "Волк Потом",
    ru: "Никогда не поздно, никогда не рано — поменять все поздно, если это рано.",
    author_en: "Wolf Later",
    en: "It's never too late, never too early - it's too late to change everything if it's too early.",
  },
  {
    author_ru: "Волк Гуру",
    ru: "Каждый думает, что знает меня, но не каждый знает, что не знает, кто думает.",
    author_en: "Wolf Guru",
    en: "Everyone thinks they know me, but not everyone knows they don't know who thinks.",
  },
  {
    author_ru: "Волк с кривыми ногами",
    ru: "Лучше один раз упасть, чем сто раз упасть.",
    author_en: "Wolf with crooked legs",
    en: "It is better to fall once than to fall a hundred times.",
  },
  {
    author_ru: "Волк Офтальмолог",
    ru: "Если ты не видишь, значит ты слепой.",
    author_en: "Wolf Ophthalmologist",
    en: "If you can't see, then you're blind.",
  },
  {
    author_ru: "Волк Учитель",
    ru: "Запомните, а то забудете.",
    author_en: "Wolf Teacher",
    en: "Remember, or you will forget.",
  },
  {
    author_ru: "Волк Физрук",
    ru: "Будь сильным, но не сильно будь.",
    author_en: "Wolf Trainer",
    en: "Be strong, but don't be strong.",
  },
  {
    author_ru: "Волк ЗОЖник",
    ru: "Бегать за овцами — удел баранов. Я бегаю только за пивом.",
    author_en: "Wolf Healthy Lifestyle",
    en: "Running after sheep is the lot of sheep. I only run for beer.",
  },
  {
    author_ru: "Волк Терпила",
    ru: "Я такой человек, который терпит терпит, но в какой-то момент терпит терпит.",
    author_en: "Wolf Patience",
    en: "I am the kind of person who suffers, but at some point, suffers.",
  },
  {
    author_ru: "Волк Чистюля",
    ru: "Не нужно менять себя ради кого-то, нужно менять носки каждый день, а то они воняют.",
    author_en: "Clean Wolf",
    en: "You don't need to change yourself for someone else, you need to change your socks every day, otherwise they stink.",
  },
  {
    author_ru: "Волк Сильный Духом",
    ru: "Упал — не значит упал. Провал — это там где не встал.",
    author_en: "Wolf Strong Spirit",
    en: "Fallen doesn\t mean fall. A failure is where you didn't get up.",
  },
  {
    author_ru: "Волк Пивовар",
    ru: "Тебя зовут по имени, но я зову тебя пить пиво.",
    author_en: "Wolf Brewer",
    en: "You are called by name, but I call you to drink beer.",
  },
  {
    author_ru: "Волк Фитнес-Тренер",
    ru: "Если тебе тяжело идти, значит ты жирный.",
    author_en: "Wolf Fitness-Trainer",
    en: "If it's hard for you to walk, then you're fat.",
  },
  {
    author_ru: "Волк Букмекер",
    ru: "Даже если нет шансов, всегда есть шанс.",
    author_en: "Wolf Bookmaker",
    en: "Even if there is no chance, there is always a chance.",
  },
  {
    author_ru: "Волк Кассир KFC",
    ru: "Лучше быть тем кем есть, чем быть тем, кем не будешь.",
    author_en: "Wolf Cashier KFC",
    en: "It's better to be who you are than to be who you won't be.",
  },
  {
    author_ru: "Волк Мотиватор",
    ru: "Хочешь жить — умей жить.",
    author_en: "Wolf Motivator",
    en: "If you want to live - know how to live.",
  },
  {
    author_ru: "Волк Кричащий",
    ru: "Громко — это как тихо, только громче.",
    author_en: "Wolf Screaming",
    en: "Loud is like quiet, only louder.",
  },
  {
    author_ru: "Волк Следящий",
    ru: "Когда волк на тебя смотрит — это значит, что он тебя видит.",
    author_en: "Wolf Tracking",
    en: "When a wolf looks at you, it means that he sees you.",
  },
  {
    author_ru: "Волк Деловой",
    ru: "Сделал дело — дело сделано.",
    author_en: "Wolf Business",
    en: "Did the job - the job is done.",
  },
  {
    author_ru: "Волк Спортсмен",
    ru: "Моя тренировка начинается, когда я выбегаю за пивком. Собственно, на этом она и заканчивается…",
    author_en: "Wolf Athlete",
    en: "My workout starts when I run out for a beer. In fact, this is where it ends...",
  },
  {
    author_ru: "Волк с Сюрпризом",
    ru: "Снаружи я кажусь веселым, но внутри у меня пиво…",
    author_en: "Wolf with Surprise",
    en: "On the outside I look cheerful, but on the inside I have a beer...",
  },
  {
    author_ru: "Волк 'по Факту'",
    ru: "Легкой бывает только легкая дорога. Тяжелая дорога всегда трудна.",
    author_en: "Wolf 'in Fact'",
    en: "Only the easy road is easy. A hard road is always hard.",
  },
  {
    author_ru: "Волк Братанчик",
    ru: "Брат за брата - за основу взято!",
    author_en: "Wolf Bro",
    en: "Brother for brother - taken as a basis!",
  },
  {
    author_ru: "Волк Сладкоежка",
    ru: "Съел красную шапочку - а у неё попка горькая...",
    author_en: "Wolf Sweet-Tooth",
    en: "I ate a little red riding hood - and her ass is bitter...",
  },
  {
    author_ru: "Дефолтный Волк",
    ru: "Ауф!",
    author_en: "Default Wolf",
    en: "Auf!",
  },
  {
    author_ru: "Волк Имеющий",
    ru: "Лучше иметь друга, чем друг друга.",
    author_en: "Wolf Having",
    en: "Better to have a friend than each other.",
  },
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
*/

const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("play-pause");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progressBar = document.getElementById("progress-bar");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const cover = document.getElementById("cover");
const trackTitle = document.getElementById("track-title");
const trackArtist = document.getElementById("track-artist");

const tracks = [
  {
    title: "Track 1",
    artist: "Artist 1",
    src: "assets/audio/beyonce.mp3",
    cover: "assets/img/lemonade.png",
  },
  {
    title: "Track 2",
    artist: "Artist 2",
    src: "assets/audio/dontstartnow.mp3",
    cover: "assets/img/dontstartnow.png",
  },
  {
    title: "Track 3",
    artist: "Artist 3",
    src: "assets/audio/beyonce.mp3",
    cover: "assets/img/lemonade.png",
  },
];

let currentTrackIndex = 0;
let isPlaying = false;

function loadTrack(index) {
  audio.src = tracks[index].src;
  cover.src = tracks[index].cover;
  trackTitle.textContent = tracks[index].title;
  trackArtist.textContent = tracks[index].artist;
}

function playPause() {
  if (isPlaying) {
    audio.pause();
    playPauseBtn.textContent = "▶️";
  } else {
    audio.play();
    playPauseBtn.textContent = "⏸️";
  }
  isPlaying = !isPlaying;
}

function updateProgressBar() {
  progressBar.value = (audio.currentTime / audio.duration) * 100;
  currentTimeEl.textContent = formatTime(audio.currentTime);
  if (!audio.duration) return;
  durationEl.textContent = formatTime(audio.duration);
}

function changeTrack(direction) {
  currentTrackIndex += direction;
  if (currentTrackIndex < 0) {
    currentTrackIndex = tracks.length - 1;
  } else if (currentTrackIndex >= tracks.length) {
    currentTrackIndex = 0;
  }
  loadTrack(currentTrackIndex);
  audio.play();
  playPauseBtn.textContent = "⏸️";
  isPlaying = true;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

audio.addEventListener("timeupdate", updateProgressBar);
progressBar.addEventListener("input", () => {
  audio.currentTime = (progressBar.value / 100) * audio.duration;
});

playPauseBtn.addEventListener("click", playPause);
prevBtn.addEventListener("click", () => changeTrack(-1));
nextBtn.addEventListener("click", () => changeTrack(1));

audio.addEventListener("ended", () => changeTrack(1));

window.addEventListener("load", () => {
  loadTrack(currentTrackIndex);
});
