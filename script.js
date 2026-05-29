window.addEventListener('load', function() {
    document.querySelectorAll('.carousel').forEach(function(carousel) {
        const track = carousel.querySelector('.carousel-track');
        if (!track) return;

        const imgs = track.querySelectorAll('img');
        const dots = carousel.querySelector('.carousel-dots');
        if (!dots || imgs.length === 0) return;

        let current = 0;

        imgs.forEach(function(_, i) {
            const dot = document.createElement('span');
            if (i === 0) dot.classList.add('active');
            dots.appendChild(dot);
            dot.addEventListener('click', function() { goTo(i); });
        });

        function goTo(index) {
            current = (index + imgs.length) % imgs.length;
            track.style.transform = 'translateX(-' + (current * 100) + '%)';
            dots.querySelectorAll('span').forEach(function(d, i) {
                d.classList.toggle('active', i === current);
            });
        }

        carousel.querySelector('.prev')?.addEventListener('click', function() { goTo(current - 1); });
        carousel.querySelector('.next')?.addEventListener('click', function() { goTo(current + 1); });

        goTo(0);
        setInterval(function() { goTo(current + 1); }, 3000);
    });
});