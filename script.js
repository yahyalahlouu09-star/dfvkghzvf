document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.form-group button');

  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const input = button.previousElementSibling;
      const value = input.value.trim();

      if (!value) {
        alert('Veuillez remplir votre nom et votre email.');
        return;
      }

      alert(`Le nom saisie : ${value}`);
      alert(`L'email saisie : ${value}`);
      input.value = '';
    });
  });
});
