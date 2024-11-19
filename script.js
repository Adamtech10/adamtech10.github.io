function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);

  // Vérifie si le dropdown est actuellement ouvert
  if (dropdown.classList.contains('show')) {
    dropdown.classList.remove('show');
    dropdown.style.maxHeight = 0;
  } else {
    dropdown.classList.add('show');
    dropdown.style.maxHeight = dropdown.scrollHeight + "px";
  }
}

// Ferme les dropdowns si l'utilisateur clique en dehors
window.addEventListener('click', (event) => {
  const dropdowns = document.querySelectorAll('.dropdown-content');
  dropdowns.forEach((dropdown) => {
    if (!event.target.closest('.dropdown')) {
      dropdown.classList.remove('show');
      dropdown.style.maxHeight = 0;
    }
  });
});
