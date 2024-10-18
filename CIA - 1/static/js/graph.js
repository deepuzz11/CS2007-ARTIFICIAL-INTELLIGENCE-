// Setup the SVG area for rendering the graph
const width = 800;
const height = 600;

const svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// Function to draw the graph
function drawGraph(graphData, path) {
    svg.selectAll("*").remove();  // Clear the SVG for re-rendering

    // Create a simulation for the force layout (D3 feature)
    const simulation = d3.forceSimulation(graphData.nodes)
        .force("link", d3.forceLink(graphData.edges).id(d => d.id).distance(100))
        .force("charge", d3.forceManyBody().strength(-300))
        .force("center", d3.forceCenter(width / 2, height / 2));

    // Draw edges
    const link = svg.selectAll(".link")
        .data(graphData.edges)
        .enter()
        .append("line")
        .attr("class", "link")
        .style("stroke", function(d) {
            return path.includes(d.source.id) && path.includes(d.target.id) ? "green" : "#999";
        })
        .style("stroke-width", 2);

    // Draw nodes
    const node = svg.selectAll(".node")
        .data(graphData.nodes)
        .enter()
        .append("circle")
        .attr("class", "node")
        .attr("r", 15)
        .style("fill", function(d) {
            return path.includes(d.id) ? "orange" : "lightblue";
        })
        .call(d3.drag()
            .on("start", dragStarted)
            .on("drag", dragged)
            .on("end", dragEnded));

    // Add labels to nodes
    const labels = svg.selectAll(".label")
        .data(graphData.nodes)
        .enter()
        .append("text")
        .attr("class", "label")
        .attr("dx", 12)
        .attr("dy", ".35em")
        .text(function(d) { return d.id; });

    // Update simulation at each tick
    simulation.on("tick", () => {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node
            .attr("cx", d => d.x)
            .attr("cy", d => d.y);

        labels
            .attr("x", d => d.x)
            .attr("y", d => d.y);
    });

    // Drag functions for node movement
    function dragStarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }

    function dragEnded(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }
}

// Example: Dummy data for testing the graph visualization
const graphData = {
    nodes: [
        { id: "A" },
        { id: "B" },
        { id: "C" },
        { id: "D" }
    ],
    edges: [
        { source: "A", target: "B" },
        { source: "B", target: "C" },
        { source: "C", target: "D" },
        { source: "A", target: "C" }
    ]
};

const path = ["A", "B", "C"];

// Draw the initial graph and highlight the path
drawGraph(graphData, path);
