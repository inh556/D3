const body = d3.select('body');
body.append('h1').text('hello, D3')
const h1 = body.select('h1');

h1.attr('id', 'somethingelse')
  .attr('class','myclass')
  .classed('another-class', 'true')
  .classed('myclass', false)