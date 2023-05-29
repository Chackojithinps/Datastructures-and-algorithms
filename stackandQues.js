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



class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}
class Stack{
    constructor(){
        this.first=null;
        this.rear=null;
    }
    enqueue=(data)=>{
       const newNode=new Node(data)
       if(this.first==null){
          this.first=this.rear=newNode;
          return;
       }
       this.rear.next=newNode;
       this.rear=newNode;
    }
    dequeue=()=>{
        if(this.first==null){
            console.log("empty");
            return;
        }
        this.first=this.first.next;
        if(this.first==null){
            this.rear=null;
        }
    }
    display(){
        var temp=this.first;
        while(temp){
            console.log(temp.data);
            temp=temp.next;
        }
    }
}
const stack=new Stack()
stack.enqueue(1)
stack.enqueue(2)
stack.enqueue(3)
stack.enqueue(4)
stack.dequeue()
stack.display();
