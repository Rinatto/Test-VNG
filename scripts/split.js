// Функция для разделения элементов на три секции с приоритетами
function splitFooterSections() {
    var screenWidth = window.innerWidth;

    // Сначала сбрасываем структуру футера
    resetFooterSections();

    // После сброса, проверяем ширину экрана и разделяем элементы на группы
    if (screenWidth >= 1660) {
        // Код для экранов 1660px и больше

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
        combinedSection1.appendChild(document.querySelector(".footer-logo"));
        combinedSection1.appendChild(document.querySelector(".footer-info"));

        // Перемещаем элементы во второй контейнер
        combinedSection2.appendChild(document.querySelector(".footer-public-info"));
        combinedSection2.appendChild(document.querySelector(".footer-pay"));

        // Перемещаем элементы в третий контейнер
        combinedSection3.appendChild(document.querySelector(".footer-address"));
        combinedSection3.appendChild(document.querySelector(".footer-contacts"));
    } 
}

// Функция для восстановления изначальной структуры футера
function resetFooterSections() {
    var footerContainer = document.querySelector(".footer-container");
    var footerLogo = document.querySelector(".footer-logo");
    var footerInfo = document.querySelector(".footer-info");
    var footerPublicInfo = document.querySelector(".footer-public-info");
    var footerPay = document.querySelector(".footer-pay");
    var footerAddress = document.querySelector(".footer-address");
    var footerContacts = document.querySelector(".footer-contacts");

    // Возвращаем элементы в исходные секции
    if (footerContainer && footerInfo && footerPublicInfo && footerPay && footerContacts) {
        footerContainer.appendChild(footerLogo);
        footerContainer.appendChild(footerInfo);
        footerContainer.appendChild(footerPublicInfo);
        footerContainer.appendChild(footerAddress);
        footerContainer.appendChild(footerContacts);
        footerContainer.appendChild(footerPay);
    }

    // Удаляем объединенные секции, если они существуют
    var combinedSection1 = document.querySelector(".combined-footer-section-1");
    var combinedSection2 = document.querySelector(".combined-footer-section-2");
    var combinedSection3 = document.querySelector(".combined-footer-section-3");
    if (combinedSection1) combinedSection1.remove();
    if (combinedSection2) combinedSection2.remove();
    if (combinedSection3) combinedSection3.remove();
}

// Вызываем функцию для первичной настройки футера при загрузке страницы
window.addEventListener("load", splitFooterSections);

// Вызываем функцию при изменении размера окна
window.addEventListener("resize", splitFooterSections);
