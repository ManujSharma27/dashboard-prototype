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
                    setTimeout(() => el.style.transition = 'opacity 0.6s ease', 10);
                    setTimeout(() => el.style.opacity = '1', 20);
                });
            }, 600);
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
                tension: 0.3,
                pointStyle: 'circle',
                pointRadius: 6,
                pointHoverRadius: 8,
                borderWidth: 3,
                pointBackgroundColor: '#fff',
                pointBorderColor: '#e57373'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: false, ticks: { color: '#b3cde0', font: { size: 12 } } } },
            plugins: { legend: { labels: { color: '#b3cde0', font: { size: 14 } } } }
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
                tension: 0.3,
                pointStyle: 'circle',
                pointRadius: 6,
                pointHoverRadius: 8,
                borderWidth: 3,
                pointBackgroundColor: '#fff',
                pointBorderColor: '#e57373'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: false, ticks: { color: '#b3cde0', font: { size: 12 } } } },
            plugins: { legend: { labels: { color: '#b3cde0', font: { size: 14 } } } }
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
                tension: 0.3,
                pointStyle: 'circle',
                pointRadius: 6,
                pointHoverRadius: 8,
                borderWidth: 3,
                pointBackgroundColor: '#fff',
                pointBorderColor: '#e57373'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: false, ticks: { color: '#b3cde0', font: { size: 12 } } } },
            plugins: { legend: { labels: { color: '#b3cde0', font: { size: 14 } } } }
        }
    });

    const compareChart = new Chart(document.getElementById('compare-chart'), {
        type: 'bar',
        data: {
            labels: ['QS', 'NIRF', 'India'],
            datasets: [{
                label: 'Current',
                data: [339, 7, 7],
                backgroundColor: 'rgba(229, 115, 115, 0.9)',
                borderColor: '#fff',
                borderWidth: 2,
                borderRadius: 10,
                barThickness: 20
            }, {
                label: 'Target',
                data: [220, 3, 4],
                backgroundColor: 'rgba(129, 199, 132, 0.9)',
                borderColor: '#fff',
                borderWidth: 2,
                borderRadius: 10,
                barThickness: 20
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: { y: { beginAtZero: false, ticks: { color: '#b3cde0', font: { size: 12 } } } },
            plugins: { legend: { labels: { color: '#b3cde0', font: { size: 14 } } } }
        }
    });

    const updateMetrics = () => {
        const ranks = [
            { id: 'qs-rank', value: 339, trend: Math.floor(Math.random() * 20) - 10 },
            { id: 'nirf-rank', value: 7, trend: Math.floor(Math.random() * 5) - 2 },
            { id: 'india-rank', value: 7, trend: Math.floor(Math.random() * 3) - 1 }
        ];
        const collabs = ['links', 'depts', 'connect'].map(id => ({ id, value: id === 'connect' ?