document.addEventListener('DOMContentLoaded', () => {
    // Simulate loading completion
    const loading = document.querySelector('.loading');
    if (loading) {
        setTimeout(() => {
            loading.style.display = 'none';
            document.querySelector('header').style.display = 'block';
        }, 2000);
    }

    // Simulate live updates for rankings and metrics
    const updateMetrics = () => {
        const elements = [
            { id: 'qs-ranking', value: 339, change: Math.floor(Math.random() * 20) - 10, target: 220 },
            { id: 'nirf-ranking', value: 7, change: Math.floor(Math.random() * 5) - 2, target: 3 },
            { id: 'india-today-ranking', value: 7, change: Math.floor(Math.random() * 3) - 1, target: 4 },
            { id: 'collaboration-links', value: 127 },
            { id: 'collaboration-depts', value: 23 },
            { id: 'collaboration-connectivity', value: 94 }
        ];

        elements.forEach(el => {
            const valueEl = document.getElementById(el.id);
            if (valueEl) {
                valueEl.textContent = el.value + (el.change !== undefined ? ` ↑ ${el.change}` : '');
            }
        });

        // Simulate achievement
        const achievement = document.querySelector('.achievement');
        if (achievement && Math.random() > 0.7) {
            achievement.style.display = 'block';
            setTimeout(() => achievement.style.display = 'none', 5000);
        }

        // Simulate briefing data
        const briefingMetrics = ['briefing-publications', 'briefing-collaborations', 'briefing-points', 'briefing-progress'];
        briefingMetrics.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.textContent = Math.floor(Math.random() * 30);
            }
        });

        console.log('Dashboard updated at ' + new Date().toLocaleTimeString());
    };

    // Initial update and set interval for daily-like refresh (for demo, every 10 seconds)
    updateMetrics();
    setInterval(updateMetrics, 10000);

    // Toggle briefing
    const briefing = document.querySelector('.briefing');
    const closeBtn = document.querySelector('.briefing .close');
    if (briefing && closeBtn) {
        closeBtn.addEventListener('click', () => {
            briefing.style.display = 'none';
        });
    }

    // Form submission simulation
    const contributionButtons = document.querySelectorAll('.contribution-form button');
    contributionButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert(`Contribution "${button.textContent}" recorded!`);
        });
    });
});