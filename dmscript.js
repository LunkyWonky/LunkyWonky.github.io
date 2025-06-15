const label = document.getElementById('themelabel');
const button = document.getElementById('themetoggle');

    button.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      label.textContent = document.body.classList.contains('dark') ? "☀️" : "🌙 " ;
    });