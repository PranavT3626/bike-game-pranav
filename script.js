document.addEventListener('DOMContentLoaded', () => {
    const forwardButton = document.getElementById('forward');
    const backwardButton = document.getElementById('backward');
    const stopButton = document.getElementById('stop');
    
    let position = 0;
    let interval;

    const moveBike = (direction) => {
        clearInterval(interval);
        interval = setInterval(() => {
            if (direction === 'forward') {
                position += 5;
            } else if (direction === 'backward') {
                position -= 5;
            }
            const bike = document.getElementById('bike');
            bike.style.left = position + 'px';
        }, 100);
    };

    forwardButton.addEventListener('click', () => {
        moveBike('forward');
    });

    backwardButton.addEventListener('click', () => {
        moveBike('backward');
    });

    stopButton.addEventListener('click', () => {
        clearInterval(interval);
    });
});
