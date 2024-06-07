document.addEventListener('DOMContentLoaded', () => {
    const bike = document.getElementById('bike');
    const road = document.querySelector('.road');
    const background = document.querySelector('.background');
    let bikePosition = 50; // Start in the middle of the screen (50%)

    // Move bike based on key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            bikePosition += 5; // Move bike right
            if (bikePosition > 95) bikePosition = 95; // Prevent moving off screen
        } else if (e.key === 'ArrowLeft') {
            bikePosition -= 5; // Move bike left
            if (bikePosition < 5) bikePosition = 5; // Prevent moving off screen
        }
        bike.style.left = bikePosition + '%';
    });

    // Pause background and road animation when bike is not moving
    let isMoving = false;

    const toggleAnimation = (state) => {
        if (state && !isMoving) {
            road.style.animationPlayState = 'running';
            background.style.animationPlayState = 'running';
            isMoving = true;
        } else if (!state && isMoving) {
            road.style.animationPlayState = 'paused';
            background.style.animationPlayState = 'paused';
            isMoving = false;
        }
    };

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            toggleAnimation(true);
        }
    });

    document.addEventListener('keyup', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            toggleAnimation(false);
        }
    });
});