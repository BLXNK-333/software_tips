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

        if (!copyButton || !codeBlock) return; // Проверяем, есть ли элементы

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
document.addEventListener("DOMContentLoaded", function () {
    const openModalButton = document.getElementById('openModalButton');
    const modalImage = document.getElementById('modalImage');

    if (openModalButton) {
        openModalButton.addEventListener('click', function () {
            $('#imageModal').modal('show');
        });
    }

    if (modalImage) {
        modalImage.addEventListener('click', function() {
            $('#imageModal').modal('hide');
        });
    }
});


// Функция для добавления уникальных контейнеров
function addCodeBlock(containerId, title, codeContent, language) {
    // Находим основной контейнер
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with id "${containerId}" not found.`);
        return;
    }

    // Создаем новый блок
    const block = document.createElement('div');
    block.className = 'indentation';

    // Добавляем заголовок
    const header = document.createElement('h5');
    header.textContent = title;
    block.appendChild(header);

    // Создаем контейнер для кода
    const codeContainer = document.createElement('div');
    codeContainer.className = 'code-container';

    // Добавляем блок <pre> с <code>
    const pre = document.createElement('pre');
    pre.className = 'code-block';

    const code = document.createElement('code');
    code.className = `language-${language}`;
    code.textContent = codeContent;

    pre.appendChild(code);
    codeContainer.appendChild(pre);

    // Добавляем кнопку копирования
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.innerHTML = '<i class="fas fa-copy"></i>';
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(codeContent).then(() => {
            alert('Code copied to clipboard!');
        });
    });

    codeContainer.appendChild(copyButton);
    block.appendChild(codeContainer);

    // Добавляем готовый блок в контейнер
    container.appendChild(block);

    // Обновляем подсветку синтаксиса с помощью Prism.js
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
}

