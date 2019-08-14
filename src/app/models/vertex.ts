import { Edge } from './edge';

export class Vertex {
    name: string;
    edges: Edge[] = [];
    
    constructor(name:string){
        this.name=name;
    }
    addEdge(edge:Edge){
        this.edges.push(edge);
        return this;
    }
    removeEdge(name: string){
        this.edges = this.edges.filter(e=>e.name!==name);
        return this;
    }
    clone(){
        var cloneVertex = new Vertex(this.name);
        this.edges.forEach(edge=>{
            cloneVertex.addEdge(edge.clone());
        });
        return cloneVertex;
    }

    write(message) {
        if (message) console.log(message);
        console.log("Vertex name: "+this.name);
        console.log("Has "+this.edges.length+" edges");
        this.edges.forEach(edge=>{
            edge.write();
        });
        return this;
    }
}
