document.addEventListener('DOMContentLoaded', () => {
    // Intro Animation
    const intro = document.querySelector('.intro-animation');
    setTimeout(() => intro.style.display = 'none', 4500);

    // Ticker Animation
    const tickerTrack = document.querySelector('.ticker-track');
    if (tickerTrack) {
        tickerTrack.innerHTML += tickerTrack.innerHTML; // Duplicate for seamless loop
        tickerTrack.style.animation = 'scrollFade 25s linear infinite';
    }

    // Network Visualization (D3.js)
    const networkCanvas = document.getElementById('networkCanvas');
    if (networkCanvas && typeof d3 !== 'undefined') {
        const width = 800, height = 350;
        const svg = d3.select(networkCanvas)
            .append('svg')
            .attr('width', width)
            .attr('height', height);

        const zoom = d3.zoom()
            .scaleExtent([0.5, 2.5])
            .on('zoom', (event) => svg.attr('transform', event.transform));
        svg.call(zoom);

        const simulation = d3.forceSimulation()
            .force('link', d3.forceLink().id(d => d.id).distance(120))
            .force('charge', d3.forceManyBody().strength(-250))
            .force('center', d3.forceCenter(width / 2, height / 2));

        const nodes = [
            { id: 'Mech', group: 1 }, { id: 'EE', group: 2 }, { id: 'CSE', group: 3 },
            { id: 'Researcher1', group: 1 }, { id: 'Researcher2', group: 2 }, { id: 'Researcher3', group: 3 }
        ];
        const links = [
            { source: 'Mech', target: 'Researcher1' }, { source: 'EE', target: 'Researcher2' },
            { source: 'CSE', target: 'Researcher3' }, { source: 'Mech', target: 'Researcher2' }
        ];

        const link = svg.append('g')
            .selectAll('line')
            .data(links)
            .enter().append('line')
            .attr('stroke', '#a3b3c2')
            .attr('stroke-width', 2.5);

        const node = svg.append('g')
            .selectAll('circle')
            .data(nodes)
            .enter().append('circle')
            .attr('r', 12)
            .attr('fill', d => d.group === 1 ? '#3b82f6' : d.group === 2 ? '#34d399' : '#fbbf24')
            .call(d3.drag()
                .on('start', dragstarted)
                .on('drag', dragged)
                .on('end', dragended))
            .on('click', (event, d) => {
                node.style('opacity', n => n.id === d.id ? 1 : 0.2);
                link.style('opacity', l => l.source.id === d.id || l.target.id === d.id ? 1 : 0.2);
            });

        simulation.nodes(nodes).on('tick', ticked);
        simulation.force('link').links(links);

        function ticked() {
            link.attr('x1', d => d.source.x).attr('y1', d => d.source.y)
                .attr('x2', d => d.target.x).attr('y2', d => d.target.y);
            node.attr('cx', d => d.x).attr('cy', d => d.y);
        }

        function dragstarted(event, d) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }
        function dragged(event, d) {
            d.fx = event.x;
            d.fy = event.y;
        }
        function dragended(event, d) {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }
    } else {
        console.log('D3.js or networkCanvas not loaded');
    }
});