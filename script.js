document.addEventListener('DOMContentLoaded', () => {
    const metrics = document.querySelectorAll('.metric');
    if (metrics.length > 0) {
        setInterval(() => {
            metrics[0].textContent = `Altitude: ${Math.floor(Math.random() * 1000)}m`;
            metrics[1].textContent = `Speed: ${Math.floor(Math.random() * 500)}km/h`;
            console.log('Dashboard updated');
        }, 2000);
    } else {
        console.log('Metrics not found');
    }
});