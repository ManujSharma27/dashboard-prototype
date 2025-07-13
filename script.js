document.addEventListener('DOMContentLoaded', () => {
    // Simulate loading completion
    const loading = document.querySelector('.loading');
    if (loading) {
        setTimeout(() => {
            loading.style.display = 'none';
            document.querySelector('header').style.display = 'block';
            document.querySelector('nav').style.display = 'block';
            document.querySelector('main').style.display = 'block';
        }, 2000);
    }

    // Initialize Charts
    const qsChart = new Chart(document.getElementById('qs-trend-chart'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Mar', 'May', 'Jul', 'Sep'],
            datasets: [{
                label: 'QS Ranking',
                data: [360, 350, 340, 339, 335],
                borderColor: '#e74c3c',
                fill: false,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: false } },
            plugins: { legend: { labels: { color: '#ecf0f1' } } }
        }
    });

    const nirfChart = new Chart(document.getElementById('nirf-trend-chart'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Mar', 'May', 'Jul', 'Sep'],
            datasets: [{
                label: 'NIRF Ranking',
                data: [9, 8, 7, 7, 6],
                borderColor: '#e74c3c',
                fill: false,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: false } },
            plugins: { legend: { labels: { color: '#ecf0f1' } } }
        }
    });

    const indiaChart = new Chart(document.getElementById('india-trend-chart'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Mar', 'May', 'Jul', 'Sep'],
            datasets: [{
                label: 'India Today',
                data: [8, 7, 7, 7, 6],
                borderColor: '#e74c3c',
                fill: false,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: false } },
            plugins: { legend: { labels: { color: '#ecf0f1' } } }
        }
    });

    const comparisonChart = new Chart(document.getElementById('comparison-bar-chart'), {
        type: 'bar',
        data: {
            labels: ['QS', 'NIRF', 'India Today'],
            datasets: [{
                label: 'Current Rank',
                data: [339, 7, 7],
                backgroundColor: '#e74c3c'
            }, {
                label: 'Target Rank',
                data: [220, 3, 4],
                backgroundColor: '#2ecc71'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: false } },
            plugins: { legend: { labels: { color: '#ecf0f1' } } }
        }
    });

    // Simulate live updates for rankings and metrics
    const updateMetrics = () => {
        const rankings = [
            { id: 'qs-ranking', value: 339, change: Math.floor(Math.random() * 20) - 10, target: 220 },
            { id: 'nirf-ranking', value: 7, change: Math.floor(Math.random() * 5) - 2, target: 3 },
            { id: 'india-today-ranking', value: 7, change: Math.floor(Math.random() * 3) - 1, target: 4 }
        ];
        const collaborations = [
            { id: 'collaboration-links', value: 127 },
            { id: 'collaboration-depts', value: 23 },
            { id: 'collaboration-connectivity', value: 94 }
        ];
        const predictions = [
            { id: 'prediction-ranking', value: 285 },
            { id: 'prediction-time', value: '18 months' },
            { id: 'prediction-growth', value: '+42%' },
            { id: 'prediction-index', value: '8.7/10' }
        ];
        const briefingMetrics = ['briefing-publications', 'briefing-collaborations', 'briefing-points', 'briefing-progress'];

        rankings.forEach(r => {
            document.getElementById(r.id).textContent = r.value;
            document.getElementById(r.id + '-change').textContent = `↑ ${r.change}`;
            qsChart.data.datasets[0].data = [360, 350, 340, r.value, 335];
            nirfChart.data.datasets[0].data = [9, 8, 7, r.value, 6];
            indiaChart.data.datasets[0].data = [8, 7, 7, r.value, 6];
            comparisonChart.data.datasets[0].data = [r.value, rankings[1].value, rankings[2].value];
            qsChart.update();
            nirfChart.update();
            indiaChart.update();
            comparisonChart.update();
        });
        collaborations.forEach(c => {
            document.getElementById(c.id).textContent = c.value;
        });
        predictions.forEach(p => {
            document.getElementById(p.id).textContent = p.value;
        });
        briefingMetrics.forEach(id => {
            document.getElementById(id).textContent = Math.floor(Math.random() * 30);
        });

        // Simulate achievement
        const achievement = document.querySelector('.achievement');
        if (achievement && Math.random() > 0.7) {
            achievement.style.display = 'block';
            setTimeout(() => achievement.style.display = 'none', 5000);
        }

        // Toggle briefing
        const briefing = document.querySelector('.briefing');
        if (briefing && !briefing.style.display) {
            briefing.style.display = 'flex';
        }
        const closeBtn = document.querySelector('.briefing .close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                briefing.style.display = 'none';
            });
        }

        console.log('Dashboard updated at ' + new Date().toLocaleTimeString());
    };

    // Initial update and set interval (10 seconds for demo, adjust to 24h later)
    updateMetrics();
    setInterval(updateMetrics, 10000);

    // Contribution button interactions
    const contributionButtons = document.querySelectorAll('.contribution-buttons button, .contribution-form button');
    contributionButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert(`Contribution "${button.textContent}" recorded!`);
        });
    });
});