document.addEventListener('mousemove', function(e) {
    const highlight = document.getElementById('highlight');
    highlight.style.left = `${e.pageX - highlight.offsetWidth / 2}px`;
    highlight.style.top = `${e.pageY - highlight.offsetHeight / 2}px`;
});