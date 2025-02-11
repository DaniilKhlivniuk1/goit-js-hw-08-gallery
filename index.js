const imagesData = [
  { photo: "./images/himilayan-blue-poppy-4202825_1280.jpg" },
  { photo: "./images/container-4203677_1280.jpg" },
  { photo: "./images/beach-4206785_1280.jpg" },
  { photo: "./images/flowers-1835619_1280.jpg" },
  { photo: "./images/mountains-3674334_1280.jpg" },
  { photo: "./images/landscape-4208571_1280.jpg" },
  { photo: "./images/the-alps-4209272_1280.jpg" },
  { photo: "./images/lighthouse-4208843_1280.jpg" },
  { photo: "./images/landscape-4208255_1280.jpg" }
];

const gallery = document.querySelector(".gallery");
const modal = document.querySelector(".backdrop");
const modalImage = document.querySelector(".modal-image");

gallery.innerHTML = imagesData
  .map(({ photo }) => `<li class="gallery-item">
                          <img class="gallery-image" src="${photo}" alt="Image">
                       </li>`)
  .join("");

gallery.addEventListener("click", event => {
  if (!event.target.classList.contains("gallery-image")) return;
  modalImage.src = event.target.src;
  modal.classList.remove("is-hidden");
});

modal.addEventListener("click", event => {
  if (event.target === modal || event.target.classList.contains("modal-close")) {
      modal.classList.add("is-hidden");
      modalImage.src = "";
  }
});