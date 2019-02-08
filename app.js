const dataset = [5, 10, 5, 20, 25, 30]

const el = d3.select('body')
              .selectAll('p')
              .data(dataset)
              .enter()
              .append('p')
              .text('Hello body')

