document.addEventListener('DOMContentLoaded', () => {
    const intro = document.querySelector('.intro-animation');
    setTimeout(() => intro.style.display = 'none', 3000);

    const tickerTrack = document.querySelector('.ticker-track');
    if (tickerTrack) {
        tickerTrack.innerHTML += tickerTrack.innerHTML;
    }

    const networkCanvas = document.getElementById('networkCanvas');
    if (networkCanvas && typeof d3 !== 'undefined') {
        const svg = d3.select(networkCanvas)
            .append('svg')
            .attr('width', 800)
            .attr('height', 300);

        const nodes = [{ id: 'Mech' }, { id: 'EE' }];
        const links = [{ source: 'Mech', target: 'EE' }];

        const link = svg.selectAll('line')
            .data(links)
            .enter().append('line')
            .attr('stroke', '#a3b3c2')
            .attr('stroke-width', 2);

        const node = svg.selectAll('circle')
            .data(nodes)
            .enter().append('circle')
            .attr('r', 10)
            .attr('fill', '#60a5fa')
            .attr('cx', d => Math.random() * 800)
            .attr('cy', d => Math.random() * 300);
    }
});