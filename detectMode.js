const html = document.documentElement

darkmodeStorage = localStorage.getItem("darkmode")
switch (darkmodeStorage) {
    case "dark": setDarkMode(); break;
    case "ligth": setLigthMode(); break;
    default:
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode()
        }
}
/* OPTION 2 */
// if (darkmodeStorage) {
//     if (darkmodeStorage === "dark") setDarkMode()
//     if (darkmodeStorage === "ligth") setLigthMode()
// } else {
//     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//         setDarkMode()
//     }
// }

function setDarkMode() {
    html.classList.add("dark-mode")
}
function setLigthMode() {
    html.classList.remove("dark-mode")
}