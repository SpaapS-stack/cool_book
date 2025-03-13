// showNotification.js
function showNotification(message, isError = false) {
    const modal = document.getElementById('notificationModal');
    if (!modal) {
        console.warn('Модальное окно не найдено');
        return;
    }

    // Обработчик закрытия
    const closeHandler = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    // Привязка обработчиков
    const closeBtn = modal.querySelector('.close');
    const okBtn = modal.querySelector('.modal-ok-btn');
    if (closeBtn) closeBtn.onclick = closeHandler;
    if (okBtn) okBtn.onclick = closeHandler;
    modal.onclick = (e) => e.target === modal && closeHandler();

    // Отображение
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    modal.classList.toggle('error', isError);

    const messageElement = document.getElementById('notificationMessage');
    if (messageElement) {
        messageElement.textContent = message;
        messageElement.style.overflow = 'hidden';
    }
    modal.style.alignItems = 'center';
}

// Инициализация: скрываем модальное окно при загрузке
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('notificationModal');
    if (modal) {
        modal.style.display = 'none';
    }
});