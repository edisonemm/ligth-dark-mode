const darkmodeBtn = document.querySelector(".darkmodeBtn")

darkmodeBtn.addEventListener("click", e => {
    html.classList.toggle("dark-mode")
    localStorage.setItem("darkmode", e.target.dataset.setmode)
})