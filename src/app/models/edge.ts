export class Edge {
    
    name: string;
    weight: number;

    constructor(name:string, weight: number){
        this.name=name;
        this.weight=weight;
    }
    clone(){
        return new Edge(this.name, this.weight);
    }
    write() {
        console.log("edge: "+this.name+" with weight "+this.weight);
        return this;
    }
}
