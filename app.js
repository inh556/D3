// svg = d3.select('body')
//     .append('svg')
//     .attr('width', 1600)
//     .attr('height', 400)

// // const dataset = [8, 48, 13, 23,30];
// // svg.selectAll('rect') // select elements
// //     .data(dataset) // binding data to elements
// //     .enter() // created placeholders for the missing elements
// //     .append('rect') 
// //     .attr('x', (d, i) => {return i * 101})
// //     .attr('y', (d, i) => {return 400 - d * 10})
// //     .attr('width', 100)
// //     .attr('height', (d) => {return d * 10})
// //     .attr('fill', 'orange')

// svg.selectAll('rect')
//   .data(d3.range(5))
//   .enter()
//   .append('rect')
//   .attr('width', 100)
//   .attr('height', 100)
//   .attr('y', 100)
//   .attr('x', (d, i) => {return i * 101})
//   .attr('fill', 'orange')

// const moreData = d3.range(3)

// var rects = svg.selectAll('rect').data(moreData)
// rects.attr('fill', 'grey')
// rects.exit().remove();
// rects.enter()
//       .append('rect')
//       .attr('width', 100)
//       .attr('height', 100)
//       .attr('y', 100)
//       .attr('x', (d, i) => {return i * 101})
//       .attr('fill', 'lightblue')


const svg = d3.select('body')
            .append('svg')
            .attr('width', window.innerWidth)
            .attr('height', window.innerHeight)

const data = [1,5,2,4,3, 10]


var myScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([0, window.innerHeight - 40]);

var colorScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range(['blue', 'red']); 

svg.selectAll('rect')
    .data(data) 
    .enter() 
    .append('rect')
          .attr('width', 100)
          .attr('height', myScale)
          .attr('y',  window.innerHeight - myScale )
          .attr('x', (d, i) => {return i * 101})
          .attr('fill', colorScale)