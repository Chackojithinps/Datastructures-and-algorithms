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

class Node{
        constructor(data) {
                this.data=data
                this.next=null
        }
}

class Stack{
        constructor() {
                this.top=null
        }

        push(data){
                const newNode=new Node(data)
                if(!this.top){
                        this.top=newNode
                        
                }
                else{
                        newNode.next=this.top
                        this.top=newNode
                }
        }

        pop(){
                if(!this.top){
                        console.log("underflow");
                }
                else{
                      let  poped=this.top.data
                        this.top=this.top.next
                        return poped
                        
                }
        }
        display(){
                let currentNode=this.top
                while(currentNode){
                        console.log(currentNode.data);
                        currentNode=currentNode.next
                }
        }
}

const myStack=new Stack()

let str="KERALA"



for(let i=0;i<str.length;i++)
{
        myStack.push(str[i])
}

myStack.display()

console.log("===============================");

let reversed=""
for(i=0;i<str.length;i++){
        reversed+=myStack.pop()
}



console.log(reversed,"reversed name");