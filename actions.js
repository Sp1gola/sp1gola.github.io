const name = document.querySelector(".name");
const welcome = document.querySelector(".welcome-container");
const desc = document.querySelector(".desc");
const prg = document.querySelector(".prg");
const sport = document.querySelector(".sport");
const music = document.querySelector(".music"); 

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (scrollY <= 50) {
        welcome.classList.remove("hidden");
        name.classList.remove("hidden");
        desc.classList.remove("show");
        prg.classList.remove("show");
        sport.classList.remove("show");
        music.classList.remove("show");
    } 
    else if (scrollY > 50 && scrollY <= 150) {
        welcome.classList.add("hidden");
        name.classList.add("hidden");
        desc.classList.add("show"); 
        prg.classList.remove("show"); 
        sport.classList.remove("show");
        music.classList.remove("show");
    } 
    else if (scrollY > 150 && scrollY <= 200) {
        desc.classList.remove("show"); 
        prg.classList.add("show"); 
        sport.classList.remove("show");
        music.classList.remove("show");
    }
    else if (scrollY > 200 && scrollY <= 300) {
        prg.classList.remove("show"); 
        sport.classList.add("show");
        music.classList.remove("show");
    }
    else if (scrollY > 300) {
        sport.classList.remove("show");
        music.classList.add("show");
    }
});