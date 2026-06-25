const name = document.querySelector(".name");
const welcome = document.querySelector(".welcome-container");
const desc = document.querySelector(".desc");
const prg = document.querySelector(".prg");
const sport = document.querySelector(".sport");
const music = document.querySelector(".music");
const tv = document.querySelector(".tv");
const future = document.querySelector(".future");
const love = document.querySelector(".love");
const end = document.querySelector(".end");
 
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
        tv.classList.remove("show");
        future.classList.remove("show");
        love.classList.remove("show");
        end.classList.remove("show");
    }
    else if (pct > 1 && pct <= 13) {
        welcome.classList.add("hidden");
        name.classList.add("hidden");
        desc.classList.add("show");
        prg.classList.remove("show");
        sport.classList.remove("show");
        music.classList.remove("show");
        tv.classList.remove("show");
        future.classList.remove("show");
        love.classList.remove("show");
        end.classList.remove("show");
    }
    else if (pct > 13 && pct <= 26) {
        desc.classList.remove("show");
        prg.classList.add("show");
        sport.classList.remove("show");
        music.classList.remove("show");
        tv.classList.remove("show");
        future.classList.remove("show");
        love.classList.remove("show");
        end.classList.remove("show");
    }
    else if (pct > 26 && pct <= 38) {
        prg.classList.remove("show");
        sport.classList.add("show");
        music.classList.remove("show");
        tv.classList.remove("show");
        future.classList.remove("show");
        love.classList.remove("show");
        end.classList.remove("show");
    }
    else if (pct > 38 && pct <= 51) {
        sport.classList.remove("show");
        music.classList.add("show");
        tv.classList.remove("show");
        future.classList.remove("show");
        love.classList.remove("show");
        end.classList.remove("show");
    }
    else if (pct > 51 && pct <= 63) {
        music.classList.remove("show");
        tv.classList.add("show");
        future.classList.remove("show");
        love.classList.remove("show");
        end.classList.remove("show");
    }
    else if (pct > 63 && pct <= 75) {
        tv.classList.remove("show");
        future.classList.add("show");
        love.classList.remove("show");
        end.classList.remove("show");
    }
    else if (pct > 75 && pct <= 88) {
        future.classList.remove("show");
        love.classList.add("show");
        end.classList.remove("show");
    }
    else if (pct > 88) {
        love.classList.remove("show");
        end.classList.add("show");
    }
});

//api call

async function getTopStats(username) {
  try {
    const response = await fetch(`https://project-gt3cb.vercel.app/api/top-stats.js?user=${username}`);
    if (!response.ok) throw new Error('Errore nella risposta del backend');
    return await response.json();
  } catch (error) {
    console.error('Errore nel recupero top stats Last.fm:', error);
    return null;
  }
}

function fillMusicLists(stats) {
  const artistsList = document.querySelector('.favSi');
  const albumsList = document.querySelector('.favAl');
  const songsList = document.querySelector('.favSo');

  artistsList.innerHTML = stats.artists.map((a) => `
    <li><a href="${a.url}" target="_blank" rel="noopener">${a.name}</a></li>
  `).join('');

  albumsList.innerHTML = stats.albums.map((a) => `
    <li><a href="${a.url}" target="_blank" rel="noopener">${a.name}</a></li>
  `).join('');

  songsList.innerHTML = stats.tracks.map((t) => `
    <li><a href="${t.url}" target="_blank" rel="noopener">${t.name}</a></li>
  `).join('');
}

async function initMusicSection() {
  const stats = await getTopStats('sp1gola');

  if (!stats) {
    // Se la chiamata fallisce, lascia il contenuto statico già scritto nell'HTML
    console.warn('Mantengo i dati statici: impossibile caricare quelli da Last.fm');
    return;
  }

  fillMusicLists(stats);
}

document.addEventListener('DOMContentLoaded', initMusicSection);