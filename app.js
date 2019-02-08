const dataset = [5, 10, 15, 20, 25, 30]

// const el = d3.select('body')
//               .selectAll('p')
//               .data(dataset)
//               .enter()
//               .append('p')
//               .text('Hello body')

const el = d3.select('#barchart')
              .selectAll('div')
              .data(dataset)
              .enter()
              .append('div')
              .attr('class', 'bar')
              .style('height', function(x) {
                return x + 'px';
              })