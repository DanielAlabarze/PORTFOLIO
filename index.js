const bsCollapse = new bootstrap.Collapse("#navbarNav", {
  toggle: false,
});

document.addEventListener("click", (e) => {
  if (!e.target.matches(".navbar a")) return false;

  bsCollapse.hide();
});
