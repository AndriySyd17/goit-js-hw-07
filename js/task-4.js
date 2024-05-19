const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняємо стандартну поведінку форми

    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (!emailValue || !passwordValue) {
      alert('All form fields must be filled in');
      return; // Припиняємо подальше виконання, якщо є незаповнені поля
    }

    const formData = {
      email: emailValue,
      password: passwordValue
    };

    console.log(formData); // Виводимо об'єкт із введеними даними в консоль
    loginForm.reset(); // Очищаємо значення полів форми
  });
