class Graph{
    constructor(){
        this.map=new Map();
    }
    addVertex(vertex){
        this.map.set(vertex,[]);
    }
    removeEdge=(vertex1,vertex2)=>{
       if(this.map.has(vertex1)){
          this.map.get(vertex1).splice(this.map.get(vertex1).indexOf(vertex2,1))
       }
    }
    insert(vertex,edge,isBoolean=false){
        if(!this.map.has(vertex)){
            this.addVertex(vertex)
        }
        if(!this.map.has(edge)){
            this.addVertex(edge)
        }
        this.map.get(vertex).push(edge);
        if(isBoolean){
            this.map.get(edge).push(vertex);
        }
    }
    // deleteVertex(vertex){
    //     if(this.map.has(vertex)){
    //         for(let [key,value] of this.map){
    //             let index=value.indexOf(vertex)
    //             if(index>0){
    //                 value.splice(index,1)
    //             }
    //         }
    //     }
    //     this.map.delete(vertex)
    // }
    deleteVertex(target) {
        this.map.delete(target)
        for (let [node, edges] of this.map) {
            this.map.set(node, edges.filter(edge => edge !== target))
        }
    }
    // hasEdge(vertex1, vertex2) {
    //     return this.map.get(vertex1).includes(vertex2) && this.map.get(vertex2).includes(vertex1);
    // }
      
      
    display() {
        for (let vertex of this.map.keys()) {
            let temp = this.map.get(vertex);
            console.log(vertex, temp);
        }
    }
}
const graph=new Graph()
graph.insert("A",1)
graph.insert("B",2)
graph.insert("c",1,true)
graph.display()
console.log("__________________")
graph.deleteVertex(1)
graph.display()

// graph.removeEdge("A",1)
// graph.display()
// graph.deleteVertex(1)
// const res=graph.hasEdge("A",1)
// console.log(res)