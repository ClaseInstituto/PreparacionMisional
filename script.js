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

let deferredPrompt;

const instalarBtn = document.getElementById("instalarBtn");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  instalarBtn.style.display = "block";
});

instalarBtn.addEventListener("click", async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("App instalada");
    } else {
      console.log("Instalación cancelada");
    }

    deferredPrompt = null;
    instalarBtn.style.display = "none";
  }
});