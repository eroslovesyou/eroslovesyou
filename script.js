document.addEventListener('mousemove', function(event) {
    const noBtn = document.getElementById('noBtn');
    const bounding = noBtn.getBoundingClientRect();
    const x = event.clientX;
    const y = event.clientY;
    const left = bounding.left;
    const right = bounding.right;
    const top = bounding.top;
    const bottom = bounding.bottom;

    const tolerance = 100; // Adjust this value to set the distance at which the button moves

    if (x > left - tolerance && x < right + tolerance && y > top - tolerance && y < bottom + tolerance) {
        const dx = x - (left + right) / 2;
        const dy = y - (top + bottom) / 2;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < tolerance) {
            const angle = Math.atan2(dy, dx);
            const moveDistance = tolerance - distance + 10; // Move the button further away by 10 pixels

            const translateX = moveDistance * Math.cos(angle);
            const translateY = moveDistance * Math.sin(angle);

            noBtn.style.transform = `translate(${translateX}px, ${translateY}px)`;
        }
    } else {
        noBtn.style.transform = 'translate(0px, 0px)';
    }
});

document.getElementById('yesBtn').addEventListener('click', function() {
    alert("Yay, DM me!");
});
