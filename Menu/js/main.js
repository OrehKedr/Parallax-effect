function parallax(event) {
    document.querySelectorAll('.scene__layer').forEach(layer => {
        let speed = layer.getAttribute('data-speed');
        let tx = event.clientX * speed / 1000;
        let ty = event.clientY * speed / 1200;
        layer.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
    });
}

document.addEventListener('mousemove', parallax);