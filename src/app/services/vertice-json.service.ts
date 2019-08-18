import { Injectable } from '@angular/core';
import { Vertex } from '../models/vertex';
import { Edge } from '../models/edge';

@Injectable({
  providedIn: 'root'
})

export class VerticeJsonService {
  MORE_THAN_ONE_MATCHING_VERTEX = "More than one match edge in vertex ";
  RETURN_WEIGHT_NOT_MATCHING = "The matching edge doesn't have the correct weight";
  MATCHING_VERTEX_FOUND = "There are two or more vertices of the same name";
  ONE_EXTRA_EDGE_IN_VERTICES = "There is an extra edge in the vertices";
  jsonVertices;
  jsonVertex;
  vertices = [];
  errorMessages = [];
  constructor() { }

  checkIntegrity() {
    this.errorMessages = [];
    this.jsonVertices.forEach(vertex => {
        vertex.edges.forEach(edge => {
          const shouldOnlyBeOneJsonVertex = this.jsonVertices.filter(v => v.name === edge.name);
          if (shouldOnlyBeOneJsonVertex.length === 0) { // no match found
          } else if (shouldOnlyBeOneJsonVertex.length > 1) {
            this.errorMessages.push(this.MATCHING_VERTEX_FOUND);
          }
        });
    });
  }
  testVertexEdges(name: string, weight: number) {
    const edgesFound = this.jsonVertex.edges.filter(edge => edge.name === name);
    if (edgesFound.length === 0) {
      return;
    }
    if (edgesFound.length > 1) {
      this.errorMessages.push(this.MORE_THAN_ONE_MATCHING_VERTEX + name);
    }
    if (edgesFound[0].weight !== weight) {
      this.errorMessages.push(this.RETURN_WEIGHT_NOT_MATCHING);
    }
  }
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
