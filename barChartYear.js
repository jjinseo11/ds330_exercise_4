var svg = d3.selectAll("#svgYear")

// Label the X-axis
svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width*.45)
    .attr("y", height-20)
    .attr("dy", ".75em")
    .text("Year");

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
var xYearDomain = yearData.map(d => d.Year)
var xYearScale = d3.scaleBand()
    .domain( xYearDomain )
    .range([ margin.left, width - margin.right - margin.left ])
    .padding(0.5)
var xYearAxis = d3.axisBottom(xYearScale)
    .tickSizeOuter(0)

// render the x axis
svg.append('g')
    .attr('class', 'x-axis-years')
    .attr('transform', `translate(0,${ height - margin.bottom })`)
    .call(xYearAxis)

// Create the Y-axis
var yMax = d3.max(yearData, d => d.Revenue)
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
//FIXME your code here. Be sure to class each bar as "yearBar"
//  Consult your Day 5 from Exercise 3 for inspiration
// Also be aware of the datum() function for the tooltip on mouseover

// Mouseover events for year bars
d3.selectAll(".yearBar")
    .on("mouseover", function(event)
    {
        // FIXME your code here
        console.log("mousing over a year bar")
    })
    .on("mouseout",function()
    {
        // FIXME your code here
        console.log("mouse leaving a year bar")
    });

// Helper function to keep the click handler shorter
function updateYearAxis() {
    // rebuild the scale
    var x0 = xYearScale.domain(yearData.map(function (d) {return d.Year;}));
    // move the bars around based on new scale
    d3.selectAll(".yearBar")
        .attr("x", function(d) {return x0(d.Year);});
    // render axis using new scale
    d3.select(".x-axis-years").call(xYearAxis);
}

// click event for the year chart
var sortYearDescending = true
var sortYearChartByRevenueDescending = true
d3.select("#svgYear")
    .on("mousedown", function(event)
    {
        // FIXME your code here
        console.log("click on year chart" + mouseCoords)
    });
