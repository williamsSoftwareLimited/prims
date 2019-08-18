import { Injectable } from '@angular/core';
import { Vertex } from '../models/vertex';
import { Edge } from '../models/edge';
import { VerticeJsonService } from './vertice-json.service';

@Injectable({
  providedIn: 'root'
})
export class PrimsService {
  vertex: Vertex;
  minSpanTree: Vertex[] = [];
  processTree: Vertex[] = [];
  minEdge: Edge;
  jsonVertices;

  constructor(
    private verticeJsonService: VerticeJsonService
  ) { }

  primsTest() {
    console.log("same again");

    this.jsonVertices = [
      { "name": "A",
        "edges": [
        { "name": "B", "weight": 10 },
        { "name": "C", "weight": 5 },
        { "name": "D", "weight": 6 }
      ]},
      { "name": "B",
        "edges": [
        { "name": "A", "weight": 10 },
        { "name": "C", "weight": 8 },
        { "name": "D", "weight": 3 },
        { "name": "E", "weight": 9 }
      ]},
      { "name": "C",
        "edges": [
        { "name": "A", "weight": 5 },
        { "name": "B", "weight": 8 },
        { "name": "E", "weight": 7 }
      ]},
      { "name": "D",
        "edges": [
        { "name": "A", "weight": 6 },
        { "name": "B", "weight": 3 },
        { "name": "E", "weight": 4 }
      ]},
      { "name": "E",
        "edges": [
        { "name": "D", "weight": 4 },
        { "name": "B", "weight": 9 },
        { "name": "C", "weight": 7 }
      ]},
    ];

    this.verticeJsonService.jsonVertices = this.jsonVertices;
    this.verticeJsonService.checkIntegrity();
    this.verticeJsonService.parseVerticeJson();

    this.calcMinSpan();

    console.log("The MST is ");
    this.minSpanTree.forEach(vertex => {
      console.log(`${vertex.name}, ${vertex.edges[0].weight}, ${vertex.edges[0].name}`);
    });
  }
  calcMinSpan() {
    this.vertex = this.verticeJsonService.vertices[0].clone();
    this.findMinEdgeInVertex();

    this.vertex.removeEdge(this.minEdge.name);
    this.processTree.push(this.vertex.write("Being pushed to processTree:"));

    while(this.processTree.length < this.verticeJsonService.vertices.length){

      this.minSpanTree.push(this.makeMinSpanVertexWithOneEdge(this.vertex.name, this.minEdge.weight, this.minEdge.name));
      
      const connectedVertex = this.verticeJsonService.vertices
      .find(vertex => vertex.name === this.minEdge.name)
      .clone()
      .removeEdge(this.vertex.name);
      this.processTree.push(connectedVertex);
      connectedVertex.write("Being pushed to processTree:");

      this.findMinEdgeInProcessTree();
      
      this.processTree.find(vertex => vertex.name===this.vertex.name)
                      .removeEdge(this.minEdge.name);
    }
  }
  findMinEdgeInProcessTree() {
    var minProcessEdge: Edge = new Edge("", 99999);
    var minProcessVertex: Vertex = new Vertex("");
    this.processTree.forEach(vertex => {
      this.vertex = vertex;
      this.findMinEdgeInVertex();
      if (minProcessEdge.weight > this.minEdge.weight){
        minProcessEdge = this.minEdge;
        minProcessVertex = this.vertex;
      }
    });
    this.minEdge = minProcessEdge;
    this.vertex = minProcessVertex.clone().write("minProcessVertex");
    console.log("The edge is "); this.minEdge.write();
  }
  findMinEdgeInVertex() {
    this.minEdge = new Edge("", 99999);
    this.vertex.edges.forEach (edge => {
      if (this.minEdge.weight > edge.weight) {
        this.minEdge = edge.clone();
      }
    });
  }
  makeMinSpanVertexWithOneEdge(vertexName: string, weight: number, nextVertexName: string){
    var edge: Edge = new Edge(nextVertexName, weight);
    var vertex=new Vertex(vertexName);
    vertex.edges.push(edge);
    return vertex;
  }
}
