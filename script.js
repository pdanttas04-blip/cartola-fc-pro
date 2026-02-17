function mostrar(id) {
  const paginas = document.querySelectorAll(".pagina");
  paginas.forEach(p => p.classList.remove("ativa"));
  document.getElementById(id).classList.add("ativa");
}