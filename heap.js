class MaxHeap{
    constructor(){
       this.heap=[]
    }
    findParentIndex=(index)=>{
        var parentIndex=Math.floor((index-1)/2)
        return parentIndex
    }
    swap=(index1,index2)=>{
       [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
    }
    heapifyUp=(index)=>{
       var parentIndex=this.findParentIndex(index)
       if(parentIndex>=0 && this.heap[parentIndex]<this.heap[index]){
         this.swap(parentIndex,index)
         this.heapifyUp(parentIndex)
       }
    }
    insert(value){
        this.heap.push(value);
        var index=this.heap.length-1;
        this.heapifyUp(index)
    }
    heapifyDown=(index)=>{
        var largestIndex=index;
        var leftIndex=this.findLeftIndex(index)
        var rightIndex=this.findRigthIndex(index)
        
        if(leftIndex<this.heap.length && this.heap[leftIndex]>this.heap[largestIndex]){
            largestIndex=leftIndex;
        }
        if(rightIndex<this.heap.length && this.heap[rightIndex]>this.heap[largestIndex]){
            largestIndex=rightIndex;
        }
        if(largestIndex!=index){
            this.swap(largestIndex,index)
            this.heapifyDown(largestIndex)
        }
    }
    removeMax(){
        if(this.heap.length==null){
           return null;
        } 
        if(this.heap.length===1){
            return this.heap.pop()
        }
        var maxValue=this.heap[0];
        this.heap[0]=this.heap.pop()
        this.heapifyDown(0)
    }
    printHeap() {
		var heap =` ${this.heap[0]} `
		for(var i = 1; i<this.heap.length;i++) {
			heap += ` ${this.heap[i]} `;
		}
		console.log(heap);
	}
}
const heap=new MaxHeap()
heap.insert(10)
heap.insert(5)
heap.insert(15)
heap.insert(2)
heap.insert(20)

// heap.removeMax()
heap.printHeap()