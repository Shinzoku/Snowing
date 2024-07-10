function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    
    const size = Math.random() * 10 + 5; // Taille entre 5px et 15px
    const left = Math.random() * window.innerWidth;
    const duration = Math.random() * 5 + 5; // Durée entre 5s et 10s
    const delay = Math.random() * 5; // Délai entre 0s et 5s
    
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${left}px`;
    snowflake.style.animationDuration = `${duration}s`;
    snowflake.style.animationDelay = `${delay}s`;
    
    document.getElementById('snow-container').appendChild(snowflake);
    
    setTimeout(() => {
        snowflake.remove();
    }, (duration + delay) * 1000);
}

function createSnowflakes() {
    setInterval(createSnowflake, 100); // Crée un flocon de neige toutes les 100ms
}

document.addEventListener('DOMContentLoaded', createSnowflakes);