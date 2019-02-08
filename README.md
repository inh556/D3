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

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <rect x = '25' y='25' width='200' height='200' fill='lime' stroke-width='4' stroke='pink' /> // renctangle
      <cicle cx='125' cy='125' r='75' fill='orange' /> // cicle
      <polyline points=50, 150 50, 200 200, 200 200, 100 stroke='red' stroke-width='4' /> 
      <line x1='50' y1='50' x2='200' y2='200' stroke='blue' stroke-width='4' /> // line
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



