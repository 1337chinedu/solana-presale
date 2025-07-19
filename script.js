function copyPresaleAddress() {
  navigator.clipboard.writeText("GKpzhg6D9kCBm2bJuyQkWgrEMztcriD2nh5fDV7kXs81");
  const btnText = document.getElementById("copyBtnText");
  btnText.textContent = "Copied!";
  setTimeout(() => {
    btnText.textContent = "Copy";
  }, 2000);
}

// Shrink animation for sonke-img-lg
document.addEventListener("DOMContentLoaded", function () {
  const sonkeImg = document.querySelector(".sonke-img-lg");

  function triggerZoom(el) {
    el.classList.add("zoom-anim");
    setTimeout(() => el.classList.remove("zoom-anim"), 400);
  }

  if (sonkeImg) {
    sonkeImg.addEventListener("mousemove", () => triggerZoom(sonkeImg));
  }
});
