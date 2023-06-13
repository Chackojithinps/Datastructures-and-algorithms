// // class Node{
// //     constructor(data){
// //         this.data=data;
// //         this.next=null;
// //     }
// // }
// // class LinkdedList{
// //     constructor() {
// //         this.head=null;
// //         this.tail=null;
// //     }
// //     addNode(data){
// //         const newNode=new Node(data)
// //         if(this.head==null){
// //             this.head=newNode;
// //             this.tail=newNode;
// //             return;
// //         }
// //         this.tail.next=newNode;
// //         this.tail=newNode;
// //     }
// //     sumOfData(){
// //         var sum=0;
// //         var temp=this.head;
// //         while(temp){
// //             sum=sum+temp.data;
// //             temp=temp.next;
// //         }
// //         console.log(sum)
// //     }
// // }
// // const linkedList=new LinkdedList();
// // linkedList.addNode(10)
// // linkedList.addNode(20)
// // linkedList.addNode(30)
// // linkedList.sumOfData()
// // -------------------------------------------------------------
// // factorial=(num)=>{
// //   if(num==1){
// //      return num;
// //   }
// //   return num*factorial(num-1)
// // } 
// // var res=factorial(5)
// // console.log(res)


// //middle 

// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null
//     }
// }
// class Stack{
//     constructor(){
//         this.top=null;
//         this.size=0;
//     }
//     push(data){
//         const newNode=new Node(data);
//         if(this.top==null){
//             this.top=newNode;
//             this.size++;
//             return;
//         }
//         this.top.next=newNode;
//         this.top=newNode;
//         this.size++;
//     }
//     pop(){
//         if(this.top==null){
//             console.log("empty")
//             return
//         }
//         const poppedData=this.top.data;
//         this.top=this.top.next;
//         return poppedData;
//     }
//     deleteMiddle(){
//         const mid=this.size/2;
//         for(var i=0;i<mid;i++){
//             stack1.push(stack.pop())
//         }
//         stack1.pop();
//         for(var i=0;i<mid;i++){
//             stack.push(stack1.pop())
//         }
//     }
//     display(){
//         var temp=this.top;
//         while(temp){
//             console.log(temp.data)
//             temp=temp.next;
//         }
//     }
// }
// const stack=new Stack();
// const stack1=new Stack();
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.push(50)
// // stack.deleteMiddle()
// stack.display()

heapifyDown(index){
   largeIndex=index;
   leftIndex=Math.floor(2*i)+1;
   rightIndex=Math.floor(2*i)+2;

   if(leftIndex<this.heap.length && this.heap[leftIndex]>this.heap[largeIndex]){
    largeIndex=leftIndex
   }
   if(rightIndex<this.heap.length && this.heap[rightIndex]>this.heap[largeIndex]){
    largeIndex=rightIndex
   }
   if(largeIndex!=index){
     [this.heap[largeIndex],this.heap[index]]=[this.heap[index],this.heap[largeIndex]]
     this.heapifyDown(largeIndex)
   }
   
}