var svg = d3.select("#svgStore")

// Label the X-axis
svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width*.45)
    .attr("y", height-20)
    .attr("dy", ".75em")
    .text("Store");

// Label the Y-axis
svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("x", -height*.25)
    .attr("y", 0)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("Revenue (in Thousands of USD)");

// Create the X-axis
var xStoreDomain = storeData.map(d => d.Store)
var xStoreScale = d3.scaleBand()
    .domain( xStoreDomain )
    .range([ margin.left, width - margin.right - margin.left ])
    .padding(0.5)
var xStoreAxis = d3.axisBottom(xStoreScale)
    .tickSizeOuter(0)

// render the x axis
svg.append('g')
    .attr('class', 'x-axis-stores')
    .attr('transform', `translate(0,${ height - margin.bottom })`)
    .call(xStoreAxis)

// Create the Y-axis
var yMax = d3.max(storeData, d => d.Revenue)
var yScale = d3.scaleLinear()
    .domain([ 0, yMax ])
    .range([ height - margin.bottom, margin.top ])
var yAxis = d3.axisLeft(yScale)
    .tickSizeOuter(0)

// render the Y axis
svg.append('g')
    .attr('class', 'y-axis')
    .attr('transform', `translate(${ margin.left },0)`)
    .call(yAxis)

// Create bars
// FIXME your code here. Be sure to class the bar as "storeBar"
    
// Mouseover/out events for store bars
d3.selectAll(".storeBar").on("mouseover", function(event)
{
    // FIXME your code here
    console.log("mousing over a store bar")
})
.on("mouseout",function(event)
{
    // FIXME your code here
    console.log("mouse leaving a store bar")
});

// Helper function to keep the click handler shorter
function updateStoreAxis() {
    // FIXME your code here
}

// click event for the Store chart
var sortStoreDescending = true
var sortStoreChartByRevenueDescending = true
d3.select("#svgStore").on("mousedown", function(event)
{
    // FIXME your code here
    console.log("click on store chart" + mouseCoords)
});
