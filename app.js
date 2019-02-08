const dataset = [8, 48, 13, 23,30];

svg = d3.select('body')
    .append('svg')
    .attr('width', 600)
    .attr('height', 400)

svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', (d, i) => {return i * 101})
    .attr('y', (d, i) => {return 400 - d * 10})
    .attr('width', 100)
    .attr('height', (d) => {return d * 10})
    .attr('fill', 'orange')
