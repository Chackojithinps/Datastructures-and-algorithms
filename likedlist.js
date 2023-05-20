// class Node{
//     constructor(data){
//         this.data=data;
//         this.next = null;
//     }

// }
// class LinkedList{
//     // constructor() {
//     //     this.head = null;
//     //     this.tail = null;
//     //   }
//     head=null;
//     tail=null
    
//     // -------------addElement-------------------

//     addElement=(data)=>{
//        const newNode=new Node(data)
//        if(!this.head){
//          this.head=newNode;
//        }else{
//          this.tail.next=newNode;
//        }
//        this.tail=newNode
//     }
    
//     //--------------deleteElement--------------

//     deleteElement=(data)=>{
//         var temp=this.head;
//         if(temp==null){
//             return;
//         }
//         if(temp.data==data){
//             this.head=temp.next;
//             return;
//         }
//         while (temp.next) {
//             if (temp.next.data === data) {
//               if (temp.next === this.tail) {
//                 this.tail = temp;
//               }
//               temp.next = temp.next.next;
//             //   if (!temp.next) {
//             //     this.tail = temp;
//             //   }
//               return;
//             }
//             temp = temp.next;
//     }
// }

// // ------------------insertAfter----------------------
    
//    insertAfter=(nextTo,data)=>{
//     const newNode=new Node(data);
//      var temp=this.head;
//      while(temp.data!=nextTo){
//         temp=temp.next;
//      }
//      if(temp==this.tail){
//         this.tail.next=newNode;
//         this.tail=newNode;
//         return
//      }
//      newNode.next=temp.next;
//      temp.next=newNode;
//      return;
//    }
   
// //----------------insert by index-------------------

// insertByindex=(data,index)=>{
//     const newNode=new Node(data);
//     var temp=this.head
//     var currentNode=0;
//     if(index==0){
//         newNode.next=this.head;
//         this.head=newNode;
//         return;
//     }
//     while(temp){
//         if(currentNode==index-1){
//             newNode.next=temp.next;
//             temp.next=newNode;
//             if(temp==this.tail){
//                 tail=newNode;
//             }
//             return
//         }
//         temp=temp.next;
//         currentNode++;
//         console.log("crrentNode",currentNode)
//     }
   
    
// }
// // -------------------deleteByIndex--------------------
// deleteElementByIndex=(index)=>{
//      if(index==0){
//         this.head=this.head.next;
//      }
//      var currentNode=0;
//      var temp=this.head;
//      while(temp){
//         if(temp.next==this.tail){
//             this.tail=temp;
//             temp.next=temp.next.next;
//             return;
//         }

//         if(currentNode==index-1){
//             temp.next=temp.next.next;
//             return;

//         }
//         temp=temp.next;
//         currentNode++;
//      }
// }
// -----------------------sum-----------------------
// findSum=()=>{
//     var sum=0;
//     var temp=this.head;
//     while(temp!=null){
//         sum=sum+temp.data;
//         temp=temp.next;
//     }
//     return sum;
// }

//---------------------Display ----------------------
//     display=()=>{
//         var temp=this.head;
//         while(temp){
//             console.log(temp.data);
//             temp=temp.next;
//         }
//     }
   
// }
// const linkedList = new LinkedList();
// linkedList.addElement(10)
// linkedList.addElement(20)
// linkedList.addElement(40)
// linkedList.addElement(60)
// linkedList.addElement(60)
// linkedList.addElement(70)
// linkedList.deleteElement(40)
// linkedList.insertByindex(200,3)
// linkedList.insertAfter(40,100)
// linkedList.deleteElementByIndex(2)


// linkedList.display()
// const result=linkedList.findSum()
// console.log("result:",result)



// Linkded list duplicates remove,middle of the linkedlist--------------------------------->


class Node{
    
    constructor(data){
        this.data=data;
        this.next=null
    }
}

class LinkdedList{
    head=null;
    tail=null;
    addNumber(data){
        const newNode=new Node(data)
        if(!this.head){
            this.head=newNode;
            this.tail=newNode
            return;
        }else{
            this.tail.next=newNode;
            this.tail=newNode;
            return;
        }
    }
// ------------------middle of linkedlist----------------------------
middleNode = ()=>{
    var slow=this.head;
    var fast=this.head;
    while(fast!=null && fast.next.next!=null){
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow.data
    };

// ------------------remove duplicates----------------------------

    removeDuplicate=()=>{
        var temp=this.head;
        while(temp && temp.next){
            if(temp.data==temp.next.data){
                if(temp.next==this.tail){
                    this.tail=temp;
                }
                temp.next=temp.next.next;
            }else{
                temp=temp.next;

            }
        }
       

        }


    
    display=()=>{
                var temp=this.head;
                while(temp){
                    console.log(temp.data+"-->");
                    temp=temp.next;
                }
            }
           
}
const linkedList=new LinkdedList()
linkedList.addNumber(1)
linkedList.addNumber(5)
linkedList.addNumber(4)
linkedList.addNumber(2)
linkedList.addNumber(7)
linkedList.addNumber(6)
// linkedList.addNumber(3)
// linkedList.removeDuplicate()
const middle=linkedList.middleNode()
console.log(middle)
linkedList.display()