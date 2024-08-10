const products = [
  {
    title: "Встраиваемый светильник Markt",
    currentPrice: "3 490 ₽",
    oldPrice: "5 060 ₽",
    imageUrl: "./images/product-image/recessed-light.png",
    badge: "Акция",
  },
  {
    title: "Линейный светильник ARG",
    currentPrice: "6 700 ₽",
    imageUrl: "./images/product-image/Linear-luminaire-ARG.png",
    badge: undefined,
  },
  {
    title: "Сведодиодный светильник ",
    currentPrice: "5 060 ₽",
    oldPrice: "6 060 ₽",
    imageUrl: "./images/product-image/LED-light.png",
    badge: "Акция",
  },
  {
    title: "Встраиваемый светильник Markt",
    currentPrice: "3 490 ₽",
    imageUrl: "./images/product-image/recessed-light.png",
    badge: undefined,
  },
  {
    title: "Линейный светильник ARG",
    currentPrice: "6 700 ₽",
    oldPrice: "6 060 ₽",
    imageUrl: "./images/product-image/Linear-luminaire-ARG.png",
    badge: "Акция",
  },
  {
    title: "Сведодиодный светильник",
    currentPrice: "5 060 ₽",
    imageUrl: "./images/product-image/LED-light.png",
    badge: undefined,
  },
  {
    title: "Встраиваемый светильник Markt",
    currentPrice: "3 490 ₽",
    oldPrice: "5 060 ₽",
    imageUrl: "./images/product-image/recessed-light.png",
    badge: "Акция",
  },
  {
    title: "Линейный светильник ARG",
    currentPrice: "6 700 ₽",
    imageUrl: "./images/product-image/Linear-luminaire-ARG.png",
    badge: undefined,
  },
];

// Функция для создания карточки товара
function createProductCard(product, isFirstCard) {
  const productCard = document.createElement("div");
  productCard.className = "product-card";
  if (isFirstCard) productCard.classList.add("first-card");
  if (!product.oldPrice) productCard.classList.add("no-discount");

  if (product.badge) {
    const badge = document.createElement("div");
    badge.className = "badge";
    badge.textContent = product.badge;
    productCard.appendChild(badge);
  }

  const imageContainer = document.createElement("div");
  imageContainer.className = "image-container";

  const image = document.createElement("img");
  image.className = "product-image";
  image.src = product.imageUrl;
  image.alt = product.title;
  imageContainer.appendChild(image);
  productCard.appendChild(imageContainer);

  const detailsContainer = document.createElement("div");
  detailsContainer.className = "details-container";

  const detailsButton = document.createElement("button");
  detailsButton.className = "details-button";
  detailsButton.textContent = "Подробнее";
  detailsContainer.appendChild(detailsButton);
  productCard.appendChild(detailsContainer);

  const title = document.createElement("h3");
  title.className = "product-title";
  title.textContent = product.title;
  productCard.appendChild(title);

  const priceContainer = document.createElement("div");
  priceContainer.className = "product-price";

  const currentPrice = document.createElement("span");
  currentPrice.className = "current-price";
  currentPrice.textContent = product.currentPrice;
  priceContainer.appendChild(currentPrice);

  if (product.oldPrice) {
    const oldPrice = document.createElement("span");
    oldPrice.className = "old-price";
    oldPrice.textContent = product.oldPrice;
    priceContainer.appendChild(oldPrice);
  }

  productCard.appendChild(priceContainer);

  return productCard;
}
// Гамбургер меню
document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    document.querySelector(".mobile-menu").classList.toggle("active");
  });

// Функция для добавления всех карточек товаров на страницу
function renderProductCards(products) {
  const productList = document.getElementById("product-list");
  products.forEach((product, index) => {
    const isFirstCard = index === 0;
    const productCard = createProductCard(product, isFirstCard);
    productList.appendChild(productCard);
  });
}

// Вызов функции для рендеринга карточек товаров
renderProductCards(products);
