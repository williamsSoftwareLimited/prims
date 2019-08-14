import { Injectable } from '@angular/core';
import { Vertex } from '../models/vertex';
import { Edge } from '../models/edge';

@Injectable({
  providedIn: 'root'
})
export class VerticeJsonService {
  jsonVertices = [];
  vertices = [];
  constructor() { }

  checkVerticeJsonIntegrity(){
    var index = 0;
    var randomVertex = this.jsonVertices[index];
    console.log("randomVertex name is " + randomVertex.vertex);

    randomVertex.edges.forEach(edge => {
      console.log("edge name " + edge.name + " with weight "+edge.weight);

      for (var i = index + 1; i < this.jsonVertices.length; i++){
        if (this.jsonVertices[i].vertex === edge.name){
          console.log("found edge name " + edge.name + " with weight "+edge.weight);
        }
      }
    });
  }
  parseVerticeJson() {
    this.jsonVertices.forEach(vert => {
      var aVertex = new Vertex(vert.vertex);
      vert.edges.forEach(edge => aVertex.addEdge(new Edge(edge.name, edge.weight)));
      this.vertices.push(aVertex);
    });
  }
}
