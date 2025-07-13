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
        }, 2000);
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

    if (window.innerWidth <= 768