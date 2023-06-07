// class MaxHeap{
//     constructor(){
//        this.heap=[]
//     }
//     findParentIndex=(index)=>{
//         var parentIndex=Math.floor((index-1)/2)
//         return parentIndex
//     }
//     swap=(index1,index2)=>{
//        [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
//     }
//     heapifyUp=(index)=>{
//        var parentIndex=this.findParentIndex(index)
//        if(parentIndex>=0 && this.heap[parentIndex]<this.heap[index]){
//          this.swap(parentIndex,index)
//          this.heapifyUp(parentIndex)
//        }
//     }
//     insert(value){
//         this.heap.push(value);
//         var index=this.heap.length-1;
//         this.heapifyUp(index)
//     }
//     findLeftIndex=(index)=>{
//        return 2*index+1
//     }
//     findRigthIndex=(index)=>{
//        return 2*index+2
//     }
//     heapifyDown=(index)=>{
//         var largestIndex=index;
//         var leftIndex=this.findLeftIndex(index)
//         var rightIndex=this.findRigthIndex(index)
        
//         if(leftIndex<this.heap.length && this.heap[leftIndex]>this.heap[largestIndex]){
//             largestIndex=leftIndex;
//         }
//         if(rightIndex<this.heap.length && this.heap[rightIndex]>this.heap[largestIndex]){
//             largestIndex=rightIndex;
//         }
//         if(largestIndex!=index){
//             this.swap(largestIndex,index)
//             this.heapifyDown(largestIndex)
//         }
//     }
//     removeMax(){
//         if(this.heap.length==null){
//            return null;
//         } 
//         if(this.heap.length===1){
//             return this.heap.pop()
//         }
//         var maxValue=this.heap[0];
//         this.heap[0]=this.heap.pop()
//         this.heapifyDown(0)
//         return maxValue
//     }
//     printHeap() {
// 		var heap =` ${this.heap[0]} `
// 		for(var i = 1; i<this.heap.length;i++) {
// 			heap += ` ${this.heap[i]} `;
// 		}
// 		console.log(heap);
// 	}
// }
// const heap=new MaxHeap()
// heap.insert(10)
// heap.insert(5)
// heap.insert(15)
// heap.insert(2)
// heap.insert(20)

// // const res=heap.removeMax()
// // console.log("The removed value is "+res)
// heap.printHeap()



// ---------------------------------------------------Heapify--------------------------

// class MaxHeap {
//     constructor() {
//       this.heap = [];
//     }
  
//     getParentIndex(index) {
//       return Math.floor((index - 1) / 2);
//     }
  
//     getLeftChildIndex(index) {
//       return 2 * index + 1;
//     }
  
//     getRightChildIndex(index) { 
//       return 2 * index + 2;
//     }
  
//     swap(index1, index2) {
//       [this.heap[index1], this.heap[index2]] = [
//         this.heap[index2],
//         this.heap[index1],
//       ];
//     }
//     heapifyDown(index) {
//       const leftChildIndex = this.getLeftChildIndex(index);
//       const rightChildIndex = this.getRightChildIndex(index);
//       let largestIndex = index;
  
//       if (
//         leftChildIndex < this.heap.length &&
//         this.heap[leftChildIndex] > this.heap[largestIndex]
//       ) {
//         largestIndex = leftChildIndex;
//       }
  
//       if (
//         rightChildIndex < this.heap.length &&
//         this.heap[rightChildIndex] > this.heap[largestIndex]
//       ) {
//         largestIndex = rightChildIndex;
//       }
  
//       if (largestIndex !== index) {
//         this.swap(index, largestIndex);
//         this.heapifyDown(largestIndex);
//       }
//     }

//     heapify(arr){
//       this.heap=arr;
//       const startIdx = Math.floor((arr.length/2) -1);
//       for(var i=startIdx;i>=0;i--){
//           this.heapifyDown(i)
//       }
//       return this.heap
//     }
   
//   }
//   const heap=new MaxHeap();
//   const arr=[33,24,8,7,9,1,2]
//   const res=heap.heapify(arr)
//   console.log(res);



// ----------------------------------------------------Heap sort--------------




// class MaxHeap {
//     constructor() {
//       this.heap = [];
//     }
  
//     getParentIndex(index) {
//       return Math.floor((index - 1) / 2);
//     }
  
//     getLeftChildIndex(index) {
//       return 2 * index + 1;
//     }
  
//     getRightChildIndex(index) { 
//       return 2 * index + 2;
//     }
  
//     swap(index1, index2) {
//       [this.heap[index1], this.heap[index2]] = [
//         this.heap[index2],
//         this.heap[index1],
//       ];
//     }
//     heapifyDown(index) {
//       const leftChildIndex = this.getLeftChildIndex(index);
//       const rightChildIndex = this.getRightChildIndex(index);
//       let largestIndex = index;
//       if (
//         leftChildIndex < this.heap.length &&
//         this.heap[leftChildIndex] > this.heap[largestIndex]
//       ) {
//         largestIndex = leftChildIndex;
//       }
  
//       if (
//         rightChildIndex < this.heap.length &&
//         this.heap[rightChildIndex] > this.heap[largestIndex]
//       ) {
//         largestIndex = rightChildIndex;
//       }
  
//       if (largestIndex !== index) {
//         this.swap(index, largestIndex);
//         this.heapifyDown(largestIndex);
//       }
//     }

//     heapSort(arr){
        
//         this.heap=arr;
//         const startIdx=Math.floor((arr.length/2)-1);
//         for(var i=startIdx;i>=0;i--){
//             this.heapifyDown(i);
//         }
// // Extract elements one by one
//       for (let i = arr.length- 1; i > 0; i--) {
//           this.swap(0,i)
//           this.heapifyDown(i);
//       }
//         return this.heap;
//     }
   
//   }
//   const heap=new MaxHeap();
//   const arr=[33,24,8,7,9,1,2]
//   const res=heap.heapSort(arr)
//   console.log(res);

// ---------------------------------------Heap sort-----------------
function heapify(arr, n, i) {
    let largest = i;
    let leftChild = 2 * i + 1;
    let rightChild = 2 * i + 2;
  
    if (leftChild < n && arr[i] < arr[leftChild]) {
      largest = leftChild;
    }
  
    if (rightChild < n && arr[largest] < arr[rightChild]) {
      largest = rightChild;
    }
  
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, n, largest);
    }
  }

  function heapSort(arr) {
    const n = arr.length;
  
    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  
    // Extract elements one by one
    for (let i = n - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapify(arr, i, 0);
    }
    return arr;
  }
  
  // Example usage
  const arr = [12, 11, 13, 5, 6, 7];
  const sortedArr = heapSort(arr);
  console.log("Sorted array:");
  console.log(sortedArr);
  