const button = document.getElementById('themetoggle');
    button.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      document.p.classList.toggle('dark');
      button.textContent = document.body.classList.contains('dark') ? "☀️" : "🌙";
    });