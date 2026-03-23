function mostrarTab(index) {
  const tabs = document.querySelectorAll(".tab");
  const contenidos = document.querySelectorAll(".tab-content");

  tabs.forEach((tab, i) => {
    tab.classList.remove("active");
    contenidos[i].classList.remove("active");
  });

  tabs[index].classList.add("active");
  contenidos[index].classList.add("active");
}