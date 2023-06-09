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
    deleteVertex(target) {
        this.map.delete(target)
        for (let [vertex, edges] of this.map) {
            this.map.set(vertex, edges.filter(edge => edge !== target))
        }
    }
    hasEdge(vertex1, vertex2) {
        if (this.map.has(vertex1)) {
          const edges = this.map.get(vertex1);
          return edges.includes(vertex2);
        }
        return false;
      }
    // Disconnected dont get in this method-----------------------------------

    // bfs(startVertex) {
    //     const visited = new Set();
    //     const queue = [];
    
    //     visited.add(startVertex);
    //     queue.push(startVertex);
    
    //     while (queue.length !== 0) {
    //       const vertex = queue.shift();
    //       console.log(vertex);
    
    //       const edges = this.map.get(vertex);
    //       for (let edge of edges) {
    //         if (!visited.has(edge)) {
    //           visited.add(edge);
    //           queue.push(edge);
    //         }
    //       }
    //     }
    //   }

    bfs() {
        const visited = new Set();
      
        for (let vertex of this.map.keys()) {
          if (!visited.has(vertex)) {
            visited.add(vertex);
            const queue = [vertex];
      
            while (queue.length !== 0) {
              const currentVertex = queue.shift();
              console.log(currentVertex);
      
              const edges = this.map.get(currentVertex);
              for (let edge of edges) {
                if (!visited.has(edge)) {
                  visited.add(edge);
                  queue.push(edge);
                }
              }
            }
          }
        }
      }
      
    display() {
        for (let vertex of this.map.keys()) {
            let temp = this.map.get(vertex);
            console.log(vertex, temp);
        }
    }
}
const graph=new Graph();
graph.insert("A",1);
graph.insert("B",2);
graph.insert("c",1,true)
// graph.display()
console.log("__________________")
// graph.deleteVertex(1)
// graph.display()

// graph.removeEdge("A",1)
// graph.display()
// graph.deleteVertex(1)
// const res=graph.hasEdge(1,"2")
// graph.bfsTraversal("A")
// console.log(res)
graph.bfs()
// graph.display()
// console.log(res)
