import { Injectable } from '@angular/core';
import { Vertex } from '../models/vertex';
import { Edge } from '../models/edge';

@Injectable({
  providedIn: 'root'
})
export class VerticeJsonService {
  jsonVertices;
  jsonVertex;
  vertices = [];
  constructor() { }

  removeEdgeFromVertex(name: string, weight: number) {
    this.jsonVertex.edges = this.jsonVertex.edges.filter(edge => !(edge.name === name && edge.weight === weight));
  }

  parseVerticeJson() {
    this.jsonVertices.forEach(vert => {
      var aVertex = new Vertex(vert.name);
      vert.edges.forEach(edge => aVertex.addEdge(new Edge(edge.name, edge.weight)));
      this.vertices.push(aVertex);
    });
  }
}
