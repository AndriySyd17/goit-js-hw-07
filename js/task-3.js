const nameInput = document.querySelector('#name-input');
        const nameOutput = document.querySelector('#name-output');

        nameInput.addEventListener('input', () => {
            const trimmedValue = nameInput.value.trim(); // Очищення значення від пробілів по краях
            if (trimmedValue) {
                nameOutput.textContent = trimmedValue; // Підстановка очищеного значення
            } else {
                nameOutput.textContent = 'Anonymous'; // Якщо інпут порожній або містить лише пробіли
            }
        });