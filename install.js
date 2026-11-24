let deferredInstallPrompt = null;
const installButton = document.getElementById("installAppButton");

function isAppInstalled() {
  return window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true;
}

if (isAppInstalled()) {
  installButton.hidden = true;
}

window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  deferredInstallPrompt = event;
  installButton.hidden = false;
});

installButton.addEventListener("click", async () => {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    installButton.hidden = true;
    return;
  }

  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  if (isIOS) {
    alert('Para instalar Jersey Universe: toca el botón Compartir de Safari y selecciona “Agregar a pantalla de inicio”.');
  } else {
    alert('Abre Jersey Universe en Chrome, toca el menú ⋮ y selecciona “Instalar aplicación” o “Agregar a pantalla principal”.');
  }
});

window.addEventListener("appinstalled", () => {
  installButton.hidden = true;
});
