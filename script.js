// Переключение темы
const toggleBtn = document.getElementById('theme-toggle');
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
}

// Обработка формы обратной связи
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // предотвращаем перезагрузку страницы

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            alert(`Спасибо, ${name}! Ваше сообщение отправлено.`);
            form.reset(); // очищаем форму
        } else {
            alert("Пожалуйста, заполните все поля формы.");
        }
    });
}
