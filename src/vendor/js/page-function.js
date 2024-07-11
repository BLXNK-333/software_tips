// Функция для подсветки активной страницы
document.addEventListener("DOMContentLoaded", function() {
    var currentPageUrl = window.location.pathname.split("/").pop(); // Получаем имя текущей страницы
    var navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(function(link) {
        var linkUrl = link.getAttribute("href").split("/").pop(); // Получаем имя страницы из атрибута href
        if (linkUrl === currentPageUrl) {
            link.classList.add("active"); // Добавляем класс active к ссылке, если она соответствует текущей странице
            link.parentElement.classList.add("active"); // Добавляем класс active родительскому элементу .nav-item
        }
    });
});


// Функция для копирования кода в буфер обмена
document.addEventListener("DOMContentLoaded", function () {
    const codeContainers = document.querySelectorAll('.code-container');

    codeContainers.forEach(codeContainer => {
        const codeBlock = codeContainer.querySelector('.code-block');
        const copyButton = codeContainer.querySelector('.copy-button');

        codeContainer.addEventListener('mouseenter', () => {
            copyButton.style.display = 'block';
        });

        codeContainer.addEventListener('mouseleave', () => {
            copyButton.style.display = 'none';
        });

        copyButton.addEventListener('click', () => {
            const codeToCopy = codeBlock.querySelector('code').innerText;
            navigator.clipboard.writeText(codeToCopy);
        });
    });
});


// Добавляем обработчик события для открытия модального окна при клике на кнопку
document.getElementById('openModalButton').addEventListener('click', function () {
    $('#imageModal').modal('show');
});


// Добавляем обработчик события для закрытия модального окна при клике на изображение
document.getElementById('modalImage').addEventListener('click', function() {
    $('#imageModal').modal('hide');
});


// Функция поиска по странице ...