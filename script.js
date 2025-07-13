document.addEventListener('DOMContentLoaded', () => {
    const loading = document.querySelector('.loading');
    if (loading) {
        setTimeout(() => {
            loading.style.opacity = '0';
            setTimeout(() => {
                loading.style.display = 'none';
                document.querySelector('header').style.display = 'block';
                document.querySelector('nav').style.display = 'block';
                document.querySelector('main').style.display = 'block';
                document.querySelector('footer').style.display = 'block';
                ['header', 'nav', 'main', 'footer'].forEach(id => {
                    const el = document.querySelector(id);
                    el.style.opacity = '0';
                    setTimeout(() => el.style.transition = 'opacity 0.5s', 10);
                    setTimeout(() => el.style.opacity = '1', 20);
                });
            }, 500);
        }, 2000);
    }

    const qsChart = new Chart(document.getElementById('qs-chart'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Mar', 'May', 'Jul', 'Sep'],
            datasets: [{
                label: 'QS Rank',
                data: [360, 350, 340, 339, 335],
                borderColor: '#e57373',
                fill: false,
                tension: 0.2,
                pointStyle: 'circle',
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: false, ticks: { color: '#b3cde0' } } },
            plugins: { legend: { labels: { color: '#b3cde0' } } }
        }
    });

    const nirfChart = new Chart(document.getElementById('nirf-chart'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Mar', 'May', 'Jul', 'Sep'],
            datasets: [{
                label: 'NIRF Rank',
                data: [9, 8, 7, 7, 6],
                borderColor: '#e57373',
                fill: false,
                tension: 0.2,
                pointStyle: 'circle',
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: false, ticks: { color: '#b3cde0' } } },
            plugins: { legend: { labels: { color: '#b3cde0' } } }
        }
    });

    const indiaChart = new Chart(document.getElementById('india-chart'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Mar', 'May', 'Jul', 'Sep'],
            datasets: [{
                label: 'India Rank',
                data: [8, 7, 7, 7, 6],
                borderColor: '#e57373',
                fill: false,
                tension: 0.2,
                pointStyle: 'circle',
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: false, ticks: { color: '#b3cde0' } } },
            plugins: { legend: { labels: { color: '#b3cde0' } } }
        }
    });

    const compareChart = new Chart(document.getElementById('compare-chart'), {
        type: 'bar',
        data: {
            labels: ['QS', 'NIRF', 'India'],
            datasets: [{
                label: 'Current',
                data: [339, 7, 7],
                backgroundColor: '#e57373',
                borderColor: '#fff',
                borderWidth: 1
            }, {
                label: 'Target',
                data: [220, 3, 4],
                backgroundColor: '#81c784',
                borderColor: '#fff',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: false, ticks: { color: '#b3cde0' } } },
            plugins: { legend: { labels: { color: '#b3cde0' } } }
        }
    });

    const updateMetrics = () => {
        const ranks = [
            { id: 'qs-rank', value: 339, trend: Math.floor(Math.random() * 20) - 10 },
            { id: 'nirf-rank', value: 7, trend: Math.floor(Math.random() * 5) - 2 },
            { id: 'india-rank', value: 7, trend: Math.floor(Math.random() * 3) - 1 }
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
            document.getElementById(r.id + '-trend').textContent = `↑ ${r.trend}`;
            qsChart.data.datasets[0].data = [360, 350, 340, r.value, 335];
            nirfChart.data.datasets[0].data = [9, 8, 7, r.value, 6];
            indiaChart.data.datasets[0].data = [8, 7, 7, r.value, 6];
            compareChart.data.datasets[0].data = [r.value, ranks[1].value, ranks[2].value];
            qsChart.update();
            nirfChart.update();
            indiaChart.update();
            compareChart.update();
        });
        collabs.forEach(c => document.getElementById(c.id).textContent = c.value);
        insights.forEach(i => document.getElementById(i.id).textContent = i.value);
        brief.forEach(id => document.getElementById(id).textContent = Math.floor(Math.random() * 30));

        const alert = document.querySelector('.alert-box');
        if (alert && Math.random() > 0.7) {
            alert.style.display = 'block';
            setTimeout(() => alert.style.display = 'none', 5000);
        }

        const briefBox = document.querySelector('.brief-box');
        if (briefBox && !briefBox.style.display) {
            briefBox.style.display = 'flex';
        }
        const closeBtn = document.querySelector('.close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                briefBox.style.opacity = '0';
                setTimeout(() => briefBox.style.display = 'none', 300);
            });
        }
    };

    updateMetrics();
    setInterval(updateMetrics, 10000);

    const buttons = document.querySelectorAll('.action-buttons button, .form-buttons button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => button.style.transform = 'scale(1)', 100);
            alert(`Action "${button.textContent}" logged!`);
        });
    });
});