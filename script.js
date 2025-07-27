// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 10) {
    navbar.classList.add('bg-white', 'text-black', 'shadow-md');
    navbar.classList.remove('text-white', 'bg-transparent');
  } else {
    navbar.classList.remove('bg-white', 'text-black', 'shadow-md');
    navbar.classList.add('text-white', 'bg-transparent');
  }
}); 