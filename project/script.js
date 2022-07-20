const button = document.querySelector(".buttons");

button.addEventListener("click", changeClass);
    
function changeClass () {
        const pagetext = document.querySelector(".pagetext");
        pagetext.className = "pagetextclick";
        pagetext.innerHTML = "Осваиваем мир!";
    }