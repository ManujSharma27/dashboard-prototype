document.addEventListener('DOMContentLoaded', () => {
    const loading = document.querySelector('.loading');
    const dashboard = document.querySelector('.dashboard-container');
    if (loading && dashboard) {
        setTimeout(() => {
            loading.style.opacity = '0';
            setTimeout(() => {
                loading.style.display = 'none';
                dashboard.classList.add('active');
            }, 500);
        }, 1500); // Reduced from 2000 to 1500ms
    }

    const sidebar = document.querySelector('.sidebar');
    const contentSections = document.querySelectorAll('.content-section');
    document.querySelectorAll('.sidebar nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            contentSections.forEach(section => {
                section.style.display = 'none';
                if (section.id === targetId) {
                    section.style.display = 'block';
                }
            });
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });

    if (window.innerWidth <= 768) {
        sidebar.classList.add('mobile-menu');
        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = '☰';
        toggleBtn.className = 'menu-toggle';
        document.body.prepend(toggleBtn);
        toggleBtn.addEventListener('click', () => sidebar.classList.toggle('active'));
    }

    const qsChart = new Chart(document.getElementById('qs-chart'), {
        type: 'line',
        data: {
            labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
            datasets: [{
                label: 'QS Rank',
                data: [405, 400, 383, 369, 357, 347, 342, 339],
                borderColor: '#ff2d55',
                fill: false,
                tension: 0.2,
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: false, reverse: true, ticks: { color: '#ffffff', stepSize: 10, min: 300, max: 410 } } },
            plugins: { legend: { labels: { color: '#ffffff' } } }
        }
    });

    const nirfChart = new Chart(document.getElementById('nirf-chart'), {
        type: 'line',
        data: {
            labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
            datasets: [{
                label: 'NIRF Rank',
                data: [9, 8, 8, 7, 7, 7, 7, 7],
                borderColor: '#ff2d55',
                fill: false,
                tension: 0.2,
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: false, reverse: true, ticks: { color: '#ffffff', stepSize: 1, min: 6, max: 10 } } },
            plugins: { legend: { labels: { color: '#ffffff' } } }
        }
    });

    const indiaChart = new Chart(document.getElementById('india-chart'), {
        type: 'line',
        data: {
            labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
            datasets: [{
                label: 'India Today Rank',
                data: [8, 8, 7, 7, 7, 7, 7, 7],
                borderColor: '#ff2d55',
                fill: false,
                tension: 0.2,
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: false, reverse: true, ticks: { color: '#ffffff', stepSize: 1, min: 6, max: 10 } } },
            plugins: { legend: { labels: { color: '#ffffff' } } }
        }
    });

    const updateMetrics = () => {
        const ranks = [
            { id: 'qs-rank', value: 339, trend: Math.floor(Math.random() * 5) + 1 },
            { id: 'nirf-rank', value: 7, trend: Math.floor(Math.random() * 2) },
            { id: 'india-rank', value: 7, trend: Math.floor(Math.random() * 1) }
        ];
        const collabs = ['links', 'depts', 'connect'].map(id => ({ id, value: id === 'connect' ? 94 : id === 'depts' ? 23 : 127 }));
        const insights = [
            { id: 'next-rank', value: 285 },
            { id: 'time-left', value: '18 months' },
            { id: 'growth', value: '+42%' },
            { id: 'score', value: '8.7/10' }
        ];
        const brief = ['pubs', 'colls', 'points', 'prog'];

        ranks.forEach(r => {
            document.getElementById(r.id).textContent = r.value;
            document.getElementById(r.id + '-trend').textContent = `↑ ${r.trend > 0 ? r.trend : 0}`;
            qsChart.data.datasets[0].data = [405, 400, 383, 369, 357, 347, 342, r.value];
            nirfChart.data.datasets[0].data = [9, 8, 8, 7, 7, 7, 7, r.value];
            indiaChart.data.datasets[0].data = [8, 8, 7, 7, 7, 7, 7, r.value];
            qsChart.update();
            nirfChart.update();
            indiaChart.update();
        });
        collabs.forEach(c => document.getElementById(c.id).textContent = c.value);
        insights.forEach(i => document.getElementById(i.id).textContent = i.value);
        brief.forEach(id => document.getElementById(id).textContent = Math.floor(Math.random() * 30));
    };

    updateMetrics();
    setInterval(updateMetrics, 10000);

    const briefToggle = document.querySelector('.brief-toggle');
    const briefBox = document.querySelector('.brief-box');
    const closeBtn = document.querySelector('.close-btn');
    if (briefToggle) {
        briefToggle.addEventListener('click', () => {
            if (briefBox.style.display === 'none' || !briefBox.style.display) {
                briefBox.style.display = 'flex';
                briefBox.style.opacity = '0';
                setTimeout(() => briefBox.style.opacity = '1', 10);
            } else {
                briefBox.style.opacity = '0';
                setTimeout(() => briefBox.style.display = 'none', 300);
            }
        });
    }
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            briefBox.style.opacity = '0';
            setTimeout(() => briefBox.style.display = 'none', 300);
        });
    }

    const buttons = document.querySelectorAll('.action-buttons button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => button.style.transform = 'scale(1)', 100);
            alert(`Action "${button.textContent}" logged!`);
        });
    });
});