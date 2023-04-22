import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);

// Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного зображення у модальному вікні.Подивися демо відео роботи галереї.
// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на ul.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані(.min)
// файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента < img > в модальному вікні перед відкриттям.Використовуй готову розмітку модального вікна із зображенням з прикладів
// бібліотеки basicLightbox.

const refs = {
  gallery: document.querySelector(".gallery"),
};

refs.gallery.insertAdjacentHTML("beforeend", onGallery(galleryItems));
refs.gallery.addEventListener("click", onModalGalerry);

window.addEventListener("keydown", onKeyPress);

let curentModal;

function onGallery(el) {
  return el
    .map(({ preview, original, description }) => {
      return `
        <li>
      <a class="gallery__link" href="${original}">
        <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
    </li>`;
    })
    .join("");
}

function onModalGalerry(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();
  curentModal = basicLightbox.create(`<img src="${e.target.dataset.source}">`);
  curentModal.show();
}

function onKeyPress(e) {
  if (e.code === "Escape") {
    curentModal.close();
  }
}
