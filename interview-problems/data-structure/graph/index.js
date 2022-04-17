class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    var {adjacencyList} = this;

    if (!adjacencyList[vertex]) adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    var vertex1List = this.adjacencyList[vertex1];
    var vertex2List = this.adjacencyList[vertex2];

    if (!vertex1List.includes(vertex2)) vertex1List.push(vertex2);
    if (!vertex2List.includes(vertex1)) vertex2List.push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    var vertex1List = this.adjacencyList[vertex1];
    var vertex2List = this.adjacencyList[vertex2];

    this.adjacencyList[vertex1] = vertex1List.filter(vertex => vertex !== vertex2);
    this.adjacencyList[vertex2] = vertex2List.filter(vertex => vertex !== vertex1);
  }

  removeVertex(vertex) {    
    while(this.adjacencyList[vertex].length > 0) {
      var adjacntVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacntVertex);
    }

    delete this.adjacencyList[vertex];
  }
}

var graph = new Graph();
graph.addVertex("tokyo");
graph.addVertex("tehran");
graph.addVertex("seattle");
graph.addEdge("tehran", "tokyo");
graph.addEdge("tehran", "seattle");
// graph.removeEdge("seattle", "tehran");
graph.removeVertex("seattle");

console.log(graph)