// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null
//     }
// }
// class Stack{
//     constructor(){
//         this.top=null;
//     }
//     pushValue=(data)=>{
//         const newNode=new Node(data)
//        if(this.top==null){
//           this.top=newNode;
//           return;
//        }
//        newNode.next=this.top;
//        this.top=newNode;
//     }
//     popValue=()=>{
//         if(this.top==null){
//             console.log("stack underflow");
//             return;
//         }
//         this.top=this.top.next;
//     }
//     display(){
//         var temp=this.top;
//         while(temp){
//             console.log(temp.data);
//             temp=temp.next;
//         }
//     }
// }
// const stack=new Stack()
// stack.pushValue(1)
// stack.pushValue(2)
// stack.pushValue(3)
// stack.display()
// stack.popValue();
// stack.display()



// // class Node{
// //     constructor(data){
// //         this.data=data;
// //         this.next=null
// //     }
// // }
// // class Stack{
// //     constructor(){
// //         this.first=null;
// //         this.rear=null;
// //     }
// //     enqueue=(data)=>{
// //        const newNode=new Node(data)
// //        if(this.first==null){
// //           this.first=this.rear=newNode;
// //           return;
// //        }
// //        this.rear.next=newNode;
// //        this.rear=newNode;
// //     }
// //     dequeue=()=>{
// //         if(this.first==null){
// //             console.log("empty");
// //             return;
// //         }
// //         this.first=this.first.next;
// //         if(this.first==null){
// //             this.rear=null;
// //         }
// //     }
// //     display(){
// //         var temp=this.first;
// //         while(temp){
// //             console.log(temp.data);
// //             temp=temp.next;
// //         }
// //     }
// // }
// // const stack=new Stack()
// // stack.enqueue(1)
// // stack.enqueue(2)
// // stack.enqueue(3)
// // stack.enqueue(4)
// // stack.dequeue()
// // stack.display();

// ---------------------------------------undo redo---------------------------------


// class Stack{
//         constructor(data) {
//                 this.array1=[]
//                 this.array2=[]
//         }

//         push(data){
//                 this.array1.push(data)
//         }
        
//         undo(){
//                 this.array2.push(this.array1.pop())
//         }
//         redo(){
//                 if (this.array2.length > 0) {
//                         this.array1.push(this.array2.pop());
//                 }  
//         }

//         display(){
//                 for(let i=0;i<this.array1.length;i++){
//                         console.log(this.array1[i]);
//                 }
//         }
// }

// const myStack=new Stack()

// myStack.push(10)
// myStack.push(20)
// myStack.push(30)
// myStack.push(40)
// myStack.push(50)

// myStack.display()
// console.log("==================");
// // myStack.undo()
// myStack.redo()
// myStack.display()


//=======================================stack string=============================

// class Node{
//         constructor(data) {
//                 this.data=data
//                 this.next=null
//         }
// }

// class Stack{
//         constructor() {
//                 this.top=null
//         }

//         push(data){
//                 const newNode=new Node(data)
//                 if(!this.top){
//                         this.top=newNode
                        
//                 }
//                 else{
//                         newNode.next=this.top
//                         this.top=newNode
//                 }
//         }

//         pop(){
//                 if(!this.top){
//                         console.log("underflow");
//                 }
//                 else{
//                       let  poped=this.top.data
//                         this.top=this.top.next
//                         return poped
                        
//                 }
//         }
//         display(){
//                 let currentNode=this.top
//                 while(currentNode){
//                         console.log(currentNode.data);
//                         currentNode=currentNode.next
//                 }
//         }
// }

// const myStack=new Stack()

// let str="KERALA"



// for(let i=0;i<str.length;i++)
// {
//         myStack.push(str[i])
// }

// myStack.display()

// console.log("===============================");

// let reversed=""
// for(i=0;i<str.length;i++){
//         reversed+=myStack.pop()
// }



// console.log(reversed,"reversed name");




// reverse the array in stack----------------------------------


// class Stack{
//     constructor() {
//         this.array=[]
//      }

//     push(data){
//             this.array.push(data)
//     }

//     pop(){
            
//        var k= this.array.pop()  
//        return k;  
//     }
//     display(){
//         for(var i=0;i<this.array.length;i++){
//             console.log(array[i])
//         }
//     }
 
// }

// const myStack=new Stack();

// let str="KERALA"



// for(let i=0;i<str.length;i++)
// {
//     myStack.push(str[i])
// }

// myStack.display()

// console.log("===============================");

// let reversed=""
// for(i=0;i<str.length;i++){
//     reversed+=myStack.pop()
// }



// console.log(reversed,"reversed name");


// --------------------delete middle in stack------------------------


// class Node{
//         constructor(data) {
//                 this.data=data
//                 this.next=null
//         }
// }

// class Stack{
//         constructor() {
//                 this.top=null
//                 this.size=0
//         }

//         push(data){
//                 const newNode=new Node(data)

//                 if(!this.top){
//                         this.top=newNode
//                 }
//                 else{
//                         newNode.next=this.top
//                         this.top=newNode
//                 }
//                 this.size++
                
//         }
//         deletemiddle(){
//                 let currentNode=this.top
//                 let cout=0
//                 let mid=Math.floor(this.size/2)
//                 console.log(mid,"mid");
//                 while(currentNode){
//                         cout++
//                         if(mid==cout){
//                                 currentNode.next=currentNode.next.next
//                         }
//                         currentNode=currentNode.next

//                 }
//         }

//         display(){
//                 let currentNode=this.top
//                 while(currentNode){
//                         console.log(currentNode.data);

//                         currentNode=currentNode.next
//                 }
//         }
// }


// const myStack=new Stack()

// myStack.push(8)
// myStack.push(10)
// myStack.push(30)
// myStack.push(40)
// myStack.push(50)
// // myStack.push(60)


// myStack.display()
// console.log("-------------------");
// myStack.deletemiddle()
// myStack.findLargest()
// myStack.display()


// ------------------------Largest,smallest,secLargest,secSmallest------------------------------

// class Node{
//     constructor(data) {
//             this.data=data
//             this.next=null
//     }
// }

// class Stack{
//     constructor() {
//             this.top=null
//             this.size=0
//     }

//     push(data){
//             const newNode=new Node(data)

//             if(!this.top){
//                     this.top=newNode
//             }
//             else{
//                     newNode.next=this.top
//                     this.top=newNode
//             }
//             this.size++
            
//     }
//     findLargest=()=>{
//         var temp=this.top;
//         var max=0;
//         while(temp){
//             if(temp.data>max){
//                 max=temp.data
//             }
//             temp=temp.next;
//         }
//         console.log(max+" max value")
//     }
//     findSec=()=>{
//         var temp=this.top;
//         var max=0;
//         var sec=0;
//         while(temp){
//             if(temp.data>max){
//                 sec=max;
//                 max=temp.data;
//             }
//             if(temp.data>sec && temp.data <max){
//                 sec=temp.data;
//             }
//             temp=temp.next;
//         }
//         console.log(sec+" sec largest")
//     }

//     findsecSmallest=()=>{
//         var temp=this.top;
//         var small=Number.MAX_VALUE;
//         var secSmall=Number.MAX_VALUE;
//         while(temp){
//             if(temp.data<small){
//                 secSmall=small;
//                 small=temp.data
//             }
//             if(temp.data<secSmall && temp.data>small){
//                 secSmall=temp.data
//             }
//             temp=temp.next
//         }
//         console.log(secSmall+" secSmall")
//     }

//     findsmaller=()=>{
//         var temp=this.top;
//         var sm=temp.data;
//         while(temp){
//             if(temp.data<sm){
//                 sm=temp.data
//             }
//             temp=temp.next;
//         }
//         console.log(sm+" min value")
//     }

//     display(){
//             let currentNode=this.top
//             while(currentNode){
//                     console.log(currentNode.data);

//                     currentNode=currentNode.next
//             }
//     }
// }


// const myStack=new Stack()

// myStack.push(8)
// myStack.push(10)
// myStack.push(50)
// myStack.push(40)
// myStack.push(5)
// // myStack.push(60)


// // myStack.display()
// console.log("-------------------");
// // myStack.deletemiddle()
// myStack.findLargest()
// myStack.findsmaller()
// myStack.findSec()
// myStack.findsecSmallest()
// myStack.display()


// ------------------------------------------------------------------------------------------------
// --------------------------------------reverese string in stack----------------------------------

// class Node{
//             constructor(data) {
//                     this.data=data
//                     this.next=null
//             }
//     }
    
//     class Stack{
//             constructor() {
//                     this.top=null
//             }
    
//             push(data){
//                     const newNode=new Node(data)
//                     if(!this.top){
//                             this.top=newNode
                            
//                     }
//                     else{
//                             newNode.next=this.top
//                             this.top=newNode
//                     }
//             }
    
//             pop(){
//                     if(!this.top){
//                             console.log("underflow");
//                     }
//                     else{
//                           let  poped=this.top.data
//                             this.top=this.top.next
//                             return poped
                            
//                     }
//             }
//             display(){
//                     let currentNode=this.top
//                     while(currentNode){
//                             console.log(currentNode.data);
//                             currentNode=currentNode.next
//                     }
//             }
//     }
    
//     const myStack=new Stack()
//     const stack=new Stack()
//     let str="KERALA"
    
    
    
//     for(let i=0;i<str.length;i++)
//     {
//             myStack.push(str[i])
//     }
    
//     myStack.display()
    
//     console.log("===============================");
    
//     // let reversed=""
//     for(i=0;i<str.length;i++){
//            var reversed=myStack.pop();
//             stack.push(reversed)
//     }
//     stack.display()



// class Node{
//         constructor(data) {
//                 this.data=data
//                 this.next=null
//         }
// }

// class Stack{
//         constructor() {
//                 this.top=null
//                 this.size=0;
//         }

//         push(data){
//                 const newNode=new Node(data)
//                 if(!this.top){
//                         this.top=newNode
//                         this.size++;
//                 }
//                 else{
//                         newNode.next=this.top
//                         this.top=newNode
//                         this.size++;
//                 }
//         }

//         pop(){
//                 if(!this.top){
//                         console.log("underflow");
//                 }
//                 else{
//                       let poped=this.top.data
//                         this.top=this.top.next
//                         this.size--;
                         
//                         return poped
                        
//                 }
//         }
//         deleteMiddle(){
               
//                 var mid=Math.floor(this.size/2)

//                 const stack2=new Stack()

//                 for(var i=0;i<mid;i++){
//                    stack2.push(myStack.pop())
//                 }
//                 var midVal=myStack.pop();
//                 console.log(midVal,"middle value")
//                 for(var i=0;i<mid;i++){
//                         myStack.push(stack2.pop())
//                 }
//         }
//         display(){
//                 let currentNode=this.top
//                 while(currentNode){
//                         console.log(currentNode.data);
//                         currentNode=currentNode.next
//                 }
//         }
// }

// const myStack=new Stack()
// const stack=new Stack()
// // const stack2=new Stack()
// let str="KERALA"



// for(let i=0;i<str.length;i++)
// {
//         myStack.push(str[i])
// }

// myStack.display()

// console.log("===============================");

// // for(i=0;i<str.length;i++){
// //        var reversed=myStack.pop();
// //         stack.push(reversed)
// // }
// myStack.deleteMiddle();
// myStack.display()


class Node{
        constructor(data){
                this.data=data;
                this.next=null;
                
        }
}
class Queue{
        constructor(){
                this.front=null;
                this.rear=null;
        }
        pushData=(data)=>{
           const newNode=new Node(data)
             if(this.front==null){
                this.front=this.rear=newNode;
                return
             }
             this.rear.next=newNode;
             this.rear=newNode
        }
        popData=()=>{
             if(this.front==null){
                console.log("queue is empty");
                return;
             }
             var poppedData=this.front.data;
             this.front=this.front.next;
             console.log(poppedData,"poppedData")
        }
        display=()=>{
            var temp=this.front;
            while(temp){
                console.log(temp.data);
                temp=temp.next
            }
        }
}
const queue=new Queue()
queue.pushData(10)
queue.pushData(20)
queue.pushData(30)
queue.pushData(40)
queue.pushData(50)

queue.display()
console.log("------------------------")
queue.popData()
queue.display()