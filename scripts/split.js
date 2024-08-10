// Функция для разделения элементов на три секции с приоритетами
function splitFooterSections() {
  var screenWidth = window.innerWidth;

  var footerLogo = document.querySelector(".footer-logo");
  var footerInfo = document.querySelector(".footer-info");
  var footerPublicInfo = document.querySelector(".footer-public-info");
  var footerPay = document.querySelector(".footer-pay");
  var footerAddress = document.querySelector(".footer-address");
  var footerContacts = document.querySelector(".footer-contacts");

  // Разделяем элементы на три группы при ширине экрана 1920px и 1660px
  if (screenWidth === 1920 || screenWidth === 1660) {
    // Создаем первый объединенный контейнер
    var combinedSection1 = document.querySelector(".combined-footer-section-1");
    if (!combinedSection1) {
      combinedSection1 = document.createElement("div");
      combinedSection1.classList.add(
        "footer-section",
        "combined-footer-section-1"
      );
      combinedSection1.style.order = 1; // Приоритет 1
      document.querySelector(".footer-container").appendChild(combinedSection1);
    }

    // Создаем второй объединенный контейнер
    var combinedSection2 = document.querySelector(".combined-footer-section-2");
    if (!combinedSection2) {
      combinedSection2 = document.createElement("div");
      combinedSection2.classList.add(
        "footer-section",
        "combined-footer-section-2"
      );
      combinedSection2.style.order = 3; // Приоритет 3
      document.querySelector(".footer-container").appendChild(combinedSection2);
    }

    // Создаем третий объединенный контейнер
    var combinedSection3 = document.querySelector(".combined-footer-section-3");
    if (!combinedSection3) {
      combinedSection3 = document.createElement("div");
      combinedSection3.classList.add(
        "footer-section",
        "combined-footer-section-3"
      );
      combinedSection3.style.order = 2; // Приоритет 2
      document.querySelector(".footer-container").appendChild(combinedSection3);
    }

    // Перемещаем элементы в первый контейнер
    combinedSection1.appendChild(footerLogo);
    combinedSection1.appendChild(footerInfo);

    // Перемещаем элементы во второй контейнер
    combinedSection2.appendChild(footerPublicInfo);
    combinedSection2.appendChild(footerPay);

    // Перемещаем элементы в третий контейнер
    combinedSection3.appendChild(footerAddress);
    combinedSection3.appendChild(footerContacts);
  } else {
    // Возвращаем элементы в исходные секции, если ширина экрана не 1920px или 1660px
    document
      .querySelector(".footer-container")
      .insertBefore(footerLogo, document.querySelector(".footer-info"));
    document
      .querySelector(".footer-container")
      .insertBefore(footerInfo, document.querySelector(".footer-public-info"));
    document
      .querySelector(".footer-container")
      .insertBefore(footerPublicInfo, footerPay);
    document
      .querySelector(".footer-container")
      .insertBefore(footerAddress, footerContacts);
    document.querySelector(".footer-container").appendChild(footerPay);
    document.querySelector(".footer-container").appendChild(footerContacts);

    // Удаляем объединенные секции, если они существуют
    var combinedSection1 = document.querySelector(".combined-footer-section-1");
    var combinedSection2 = document.querySelector(".combined-footer-section-2");
    var combinedSection3 = document.querySelector(".combined-footer-section-3");
    if (combinedSection1) combinedSection1.remove();
    if (combinedSection2) combinedSection2.remove();
    if (combinedSection3) combinedSection3.remove();
  }
}

// Вызываем функцию при загрузке страницы
window.addEventListener("load", splitFooterSections);

// Вызываем функцию при изменении размера окна
window.addEventListener("resize", splitFooterSections);
