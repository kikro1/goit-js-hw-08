const images = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

// Отримайте посилання на елемент ul.gallery
const galleryContainer = document.querySelector('.gallery');

// Додайте розмітку елементів галереї до ul.gallery
const galleryMarkup = createGalleryMarkup(images);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

// Додайте прослуховувач подій до контейнера галереї
galleryContainer.addEventListener('click', onGalleryItemClick);

// Функція створення розмітки елемента галереї
function createGalleryMarkup(images) {
  return images
    .map(
      ({ preview, original, description }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `
    )
    .join('');
}

// Функція-обробник події кліку на елементі галереї
function onGalleryItemClick(event) {
  // Зупиніть стандартну поведінку посилань
  event.preventDefault();

  // Перевірте, чи клікнули саме на елемент зображення
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  // Отримайте посилання на велике зображення з data-атрибуту source
  const largeImageURL = event.target.dataset.source;

  // Виведіть URL великого зображення у консоль
  console.log('Large Image URL:', largeImageURL);

  // Тут ви можете використовувати посилання для відкриття модального вікна або виконати інші дії
}

// gallery.js

// ... (попередній код)

// Отримайте посилання на модальний блок та зображення модального вікна
const modal = document.querySelector('.js-lightbox');
const modalImage = document.querySelector('.lightbox__image');

// Додайте прослуховувач подій для контейнера галереї
galleryContainer.addEventListener('click', onGalleryItemClick);

// Додайте прослуховувач подій для закриття модального вікна
modal.addEventListener('click', onModalCloseClick);

// Функція-обробник події кліку на елементі галереї
function onGalleryItemClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const largeImageURL = event.target.dataset.source;

  // Встановіть новий атрибут src для зображення модального вікна
  modalImage.src = largeImageURL;

  // Відкрийте модальне вікно
  modal.classList.add('is-open');
}

// Функція-обробник події кліку для закриття модального вікна
function onModalCloseClick(event) {
  // Перевірте, чи клікнуто на оверлей або кнопку закриття
  if (event.target === modal || event.target.nodeName === 'BUTTON') {
    // Закрийте модальне вікно
    modal.classList.remove('is-open');

    // Очистіть атрибут src для зображення модального вікна
    modalImage.src = '';
  }
}

// gallery.js

// ... (попередній код)

// Імпорт бібліотеки basicLightbox
import * as basicLightbox from 'basiclightbox';

// ... (попередній код)

// Функція-обробник події кліку на елементі галереї
function onGalleryItemClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const largeImageURL = event.target.dataset.source;

  // Використовуйте бібліотеку basicLightbox для відкриття модального вікна
  const instance = basicLightbox.create(`
    <img src="${largeImageURL}" width="800" height="600">
  `);

  // Відкрийте модальне вікно
  instance.show();
}

// ... (попередній код)


// gallery.js

// ... (попередній код)

// Функція-обробник події кліку на елементі галереї
function onGalleryItemClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const largeImageURL = event.target.dataset.source;

  // Створюємо новий екземпляр basicLightbox
  const instance = basicLightbox.create(`
    <img src="${largeImageURL}" width="800" height="600">
  `);

  // Встановлюємо обробник події перед відкриттям модального вікна
  instance.on('show', () => {
    // Отримуємо посилання на зображення внутрішнього модального вікна
    const modalImage = document.querySelector('.basicLightbox img');
    // Замінюємо значення атрибута src на потрібне нам зображення
    modalImage.src = largeImageURL;
  });

  // Відкриваємо модальне вікно
  instance.show();
}

// ... (попередній код)

// gallery.js

// ... (попередній код)

// Функція закриття модального вікна
function closeModal() {
  const instance = basicLightbox.instance();
  if (instance) {
    instance.close();
  }
}

// Функція-обробник події кліку на елементі галереї
function onGalleryItemClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const largeImageURL = event.target.dataset.source;

  // Створюємо новий екземпляр basicLightbox
  const instance = basicLightbox.create(`
    <img src="${largeImageURL}" width="800" height="600">
  `);

  // Встановлюємо обробник події перед відкриттям модального вікна
  instance.on('show', () => {
    // Отримуємо посилання на зображення внутрішнього модального вікна
    const modalImage = document.querySelector('.basicLightbox img');
    // Замінюємо значення атрибута src на потрібне нам зображення
    modalImage.src = largeImageURL;

    // Прослуховування натискання клавіші Escape
    window.addEventListener('keydown', onKeyPress);
  });

  // Встановлюємо обробник події перед закриттям модального вікна
  instance.on('close', () => {
    // Зупиняємо прослуховування натискання клавіші Escape
    window.removeEventListener('keydown', onKeyPress);
  });

  // Відкриваємо модальне вікно
  instance.show();
}

// Функція-обробник події натискання клавіші
function onKeyPress(event) {
  // Код клавіші Escape
  const ESC_KEY_CODE = 'Escape';

  if (event.code === ESC_KEY_CODE) {
    closeModal();
  }
}

// ... (попередній код)

