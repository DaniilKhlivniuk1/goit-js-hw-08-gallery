import galleryItems from './gallery-items.js'; // Якщо використовуєш окремий файл для масиву

const galleryContainer = document.querySelector('.js-gallery');
const lightbox = document.querySelector('.js-lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const closeButton = document.querySelector('[data-action="close-lightbox"]');
const overlay = document.querySelector('.lightbox__overlay');

// 1. Додаємо розмітку галереї
const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  })
  .join('');

galleryContainer.innerHTML = galleryMarkup;

// 2. Додаємо функціонал відкриття модального вікна
galleryContainer.addEventListener('click', event => {
  event.preventDefault(); // Забороняємо стандартну дію <a>

  if (event.target.nodeName !== 'IMG') return; // Перевірка, що клік саме по зображенню

  const largeImageURL = event.target.dataset.source;
  openModal(largeImageURL);
});

function openModal(url) {
  lightbox.classList.add('is-open');
  lightboxImage.src = url;
}

// 3. Закриття модального вікна
function closeModal() {
  lightbox.classList.remove('is-open');
  lightboxImage.src = ''; // Очищуємо шлях зображення
}

closeButton.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Закриття модального вікна при натисканні Esc
window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});