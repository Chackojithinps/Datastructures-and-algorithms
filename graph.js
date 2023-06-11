class Graph{
    constructor(){
        this.map=new Map();
        this.size=0;
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
      
    //   depthFirstSearch(node1) {
    //     const visited = new Set()
    //     let res = []

    //     const dfs = node => {
    //         if (!node || visited.has(node)) return
    //         res.push(node)
    //         visited.add(node)
    //         for (let neighbor of this.map.get(node))
    //             dfs(neighbor)
    //     }
    //     dfs(node1)
    //     return res
    // }

    dfs() {
        const visited = new Set();
      
        for (let vertex of this.map.keys()) {
          if (!visited.has(vertex)) {
            this.dfsTraversal(vertex, visited);
          }
        }
      }
      
      dfsTraversal(vertex, visited) {
        visited.add(vertex);
        console.log(vertex);
        this.size++;
        const edges = this.map.get(vertex);
        for (let edge of edges) {
          if (!visited.has(edge)) {
            this.dfsTraversal(edge, visited);
          }
        }
      }
      getSize(){
        console.log(this.size);
      }

    display() {
        for (let vertex of this.map.keys()) {
          let temp = this.map.get(vertex);

            if(temp.length!=0){

              console.log(vertex, temp);
            }
        }
    }
    // display() {
    //     for (let vertex of this.map.keys()) {
    //         if(this.map.get(vertex).length!=0){
    //             let temp = this.map.get(vertex);
    //             console.log(vertex,temp)
    //         }
    //     }
    // }
}
const graph=new Graph();
graph.insert("A",1);
graph.insert("A","B");
graph.insert("A","C");
graph.insert("B","D");
graph.insert("C","D")
graph.insert("C","B")
graph.insert("C",1,true)
graph.insert("K","L",true)

graph.display()
console.log("__________________");
// graph.deleteVertex(1)
// graph.display()

// graph.removeEdge("A",1)
// graph.display()
// graph.deleteVertex(1)
// const res=graph.hasEdge(1,"2")
// graph.bfsTraversal("A")
// console.log(res)
// graph.bfs()
// graph.dfs();
// graph.display()
// console.log(res)
