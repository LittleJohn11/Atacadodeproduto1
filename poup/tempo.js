let isDay = true;

function toggleDayNight() {
    const sky = document.getElementById('sky');
    const sunMoon = document.getElementById('sunMoon');

    if (isDay) {
        sky.style.backgroundColor = '#000'; // Noite
        sunMoon.style.backgroundColor = '#ffdb58'; // Sol
        isDay = false;
    } else {
        sky.style.backgroundColor = '#87ceeb'; // Dia
        sunMoon.style.backgroundColor = '#000'; // Lua
        isDay = true;
    }
}
