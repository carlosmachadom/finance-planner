function showError() {
    const errorElement = document.querySelector('.error-format');
    errorElement.classList.remove('hidden');
}

function hideError() {
    const errorElement = document.querySelector('.error-format');
    errorElement.classList.add('hidden');
}

export { showError, hideError };