const navLinks = document.querySelectorAll('.sidebar li a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    window.location.href = link.getAttribute('href');
  });
});