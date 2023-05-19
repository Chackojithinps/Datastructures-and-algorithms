class Node{
    constructor(data){
        this.data=data;
        this.next = null;
    }

}
class LinkedList{
    // constructor() {
    //     this.head = null;
    //     this.tail = null;
    //   }
    head=null;
    tail=null
    
    // -------------addElement-------------------

    addElement=(data)=>{
       const newNode=new Node(data)
       if(!this.head){
         this.head=newNode;
       }else{
         this.tail.next=newNode;
       }
       this.tail=newNode
    }
    
    //--------------deleteElement--------------

    deleteElement=(data)=>{
        var temp=this.head;
        if(temp==null){
            return;
        }
        if(temp.data==data){
            this.head=temp.next;
            return;
        }
        while (temp.next) {
            if (temp.next.data === data) {
              if (temp.next === this.tail) {
                this.tail = temp;
              }
              temp.next = temp.next.next;
            //   if (!temp.next) {
            //     this.tail = temp;
            //   }
              return;
            }
            temp = temp.next;
    }
}

// ------------------insertAfter----------------------
    
   insertAfter=(nextTo,data)=>{
    const newNode=new Node(data);
     var temp=this.head;
     while(temp.data!=nextTo){
        temp=temp.next;
     }
     if(temp==this.tail){
        this.tail.next=newNode;
        this.tail=newNode;
        return
     }
     newNode.next=temp.next;
     temp.next=newNode;
     return;
   }

//---------------------Display ----------------------
    display=()=>{
        var temp=this.head;
        while(temp){
            console.log(temp.data);
            temp=temp.next;
        }
    }
   
}
const linkedList = new LinkedList();
linkedList.addElement(10)
linkedList.addElement(20)
linkedList.addElement(40)
linkedList.addElement(60)
// linkedList.deleteElement(40)

linkedList.insertAfter(40,100)
linkedList.display()
