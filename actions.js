const name = document.querySelector(".name");
const welcome = document.querySelector(".welcome-container");
const desc = document.querySelector(".desc");
const prg = document.querySelector(".prg");
const sport = document.querySelector(".sport");
const music = document.querySelector(".music");
const love = document.querySelector(".love");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const pct = (scrollY / maxScroll) * 100;

    if (pct <= 1) {
        welcome.classList.remove("hidden");
        name.classList.remove("hidden");
        desc.classList.remove("show");
        prg.classList.remove("show");
        sport.classList.remove("show");
        music.classList.remove("show");
        love.classList.remove("show");
    }
    else if (pct > 1 && pct <= 30) {
        welcome.classList.add("hidden");
        name.classList.add("hidden");
        desc.classList.add("show");
        prg.classList.remove("show");
        sport.classList.remove("show");
        music.classList.remove("show");
        love.classList.remove("show");
    }
    else if (pct > 30 && pct <= 55) {
        desc.classList.remove("show");
        prg.classList.add("show");
        sport.classList.remove("show");
        music.classList.remove("show");
        love.classList.remove("show");
    }
    else if (pct > 55 && pct <= 78) {
        prg.classList.remove("show");
        sport.classList.add("show");
        music.classList.remove("show");
        love.classList.remove("show");
    }
    else if (pct > 78 && pct <= 95) {
        sport.classList.remove("show");
        music.classList.add("show");
        love.classList.remove("show");
    }
    else if (pct > 95) {
        music.classList.remove("show");
        love.classList.add("show");
    }
});