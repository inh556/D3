# D3

### What's SVG?
SVG = Scalable Vector Graphics

An XML-based vector image fromat for 2d graphics with support for interactivity and animation

SVG images can be created and edited with any text editor, as well as with drawing software

All major modern web browsers has SVB rendering support

### function areas

1. Paths *
2. Basic shapes * 
3. Text * 
4. Paiting
5. Color * 
6. Gradients and patterns
7. Clipping, masking and compositing
8. Filter effects
9. Interactivity * 
10. Linking *
11. Scripting
12. Animation *
13. Fonts
14. Metadata

### Scalable Vector Graphics
- An image generated through math quations and commands
- Vectors can be scaled and will never get pixelated
- SVG images requires a load of resources

> this order goes from back to front

    <svg  width="500" height="500">
      <rect x = '25' y='25' width='200' height='200' fill='lime' stroke-width='4' stroke='pink' /> // renctangle
      <cicle cx='125' cy='125' r='75' fill='orange' /> // cicle
      <polyline points=50, 150 50, 200 200, 200 200, 100 stroke='red' stroke-width='4' /> 
      <line x1='50' y1='50' x2='200' y2='200' stroke='blue' stroke-width='4' /> // line
      <text x='250' y = '250' style="text-anchor:middle"></text>
      <ellipse cx="200" cy="300" rx="50" ry="10"/>
      <path d="m 100 100 L 100 200 L 200 100 z" fill"rgba(100, 100, 100, 0.5) />
    </svg>

### data binding

- binding means to associate elements with data
- it allows to bridge the gap between the data and the elemtns on  the page

### select 


Just like JQuery

> select the first element of this tag
    d3.select('element') 
> select all the elments of tag of('element')
    d3.selectAll('element')


select body 
const body = d3.select('body')
select all p inside body 
body.selectAll('p')

### classed

with classed method, we can add and remove class name

    h1.attr('id', 'somethingelse')
      .attr('class','myclass')
      .classed('another-class', 'true')
      .classed('myclass', false)
    
if we use attr method, it will override the whole class name

    h1.attr('class', new-classname)
 
### append

    body.append('h1').text('at the end');

this method can let you appen a new h1 element at the end of body

    body.insert('p', 'some-element');
this can let you insert a 'p' before 'some-element'

### remove
> remove the h1 element 
    h1.remove()
  

### data binding 

> working on more data
    svg.selectAll('rect')
      .data(d3.range(5))
      .enter()
      .append('rect')
      .attr('width', 100)
      .attr('height', 100)
      .attr('y', 100)
      .attr('x', (d, i) => {return i * 101})
      .attr('fill', 'orange')

    const moreData = d3.range(10)

    var rects = svg.selectAll('rect').data(moreData)
    rects.attr('fill', 'grey')
    rects.enter()
          .append('rect')
          .attr('width', 100)
          .attr('height', 100)
          .attr('y', 100)
          .attr('x', (d, i) => {return i * 101})
          .attr('fill', 'lightblue')

> working on less data
    var rects = svg.selectAll('rect').data(moreData)
    rects.attr('fill', 'grey')   
    
> remove the rest
    rects.attr('fill', 'grey')
    rects.exit().remove();