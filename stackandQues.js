class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}
class Stack{
    constructor(){
        this.top=null;
    }
    pushValue=(data)=>{
        const newNode=new Node(data)
       if(this.top==null){
          this.top=newNode;
          return;
       }
       newNode.next=this.top;
       this.top=newNode;
    }
    popValue=()=>{
        if(this.top==null){
            console.log("stack underflow");
            return;
        }
        this.top=this.top.next;
    }
    display(){
        var temp=this.top;
        while(temp){
            console.log(temp.data);
            temp=temp.next;
        }
    }
}
const stack=new Stack()
stack.pushValue(1)
stack.pushValue(2)
stack.pushValue(3)
stack.display()
stack.popValue();
stack.display()