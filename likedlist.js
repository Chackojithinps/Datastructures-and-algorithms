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


// class Node{
    
//     constructor(data){
//         this.data=data;
//         this.next=null
//     }
// }

// class LinkdedList{
//     head=null;
//     tail=null;
//     addNumber(data){
//         const newNode=new Node(data)
//         if(!this.head){
//             this.head=newNode;
//             this.tail=newNode
//             return;
//         }else{
//             this.tail.next=newNode;
//             this.tail=newNode;
//             return;
//         }
//     }
// // ------------------middle of linkedlist----------------------------
// middleNode = ()=>{
//     var slow=this.head;
//     var fast=this.head;
//     while(fast!=null && fast.next.next!=null){
//         slow=slow.next;
//         fast=fast.next.next;
//     }
//     return slow.data
//     };

// // ------------------remove duplicates----------------------------

//     removeDuplicate=()=>{
//         var temp=this.head;
//         while(temp && temp.next){
//             if(temp.data==temp.next.data){
//                 if(temp.next==this.tail){
//                     this.tail=temp;
//                 }
//                 temp.next=temp.next.next;
//             }else{
//                 temp=temp.next;

//             }
//         }
       

//         }


    
//     display=()=>{
//                 var temp=this.head;
//                 while(temp){
//                     console.log(temp.data+"-->");
//                     temp=temp.next;
//                 }
//             }
           
// }
// const linkedList=new LinkdedList()
// linkedList.addNumber(1)
// linkedList.addNumber(5)
// linkedList.addNumber(4)
// linkedList.addNumber(2)
// linkedList.addNumber(7)
// linkedList.addNumber(6)
// // linkedList.addNumber(3)
// // linkedList.removeDuplicate()
// const middle=linkedList.middleNode()
// console.log(middle)
// linkedList.display()









// ---------------------------------------------Doubly LinkedList-----------------------------------------------

// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//         this.prev=null
//     }
// }
// class LinkedList{
//     head=null;
//     tail=null;
//     prev=null;
//     // -------------------------  addValue   ----------------------------------

//     addValue=(data)=>{
//         const newNode=new Node(data);
//         if(this.head==null){
//             this.head=newNode;
//             this.tail=newNode;
//             return;
//         }
//         this.tail.next=newNode;
//         newNode.prev=this.tail;
//         this.tail=newNode;
//     }
//     // --------------------addBefore the given value-----------------------
//     addBeforeValue=(data,val)=>{
//          var temp=this.head;
//          const newNode=new Node(data)
//          if(this.head==null){
//             this.head=newNode;
//             this.tail=newNode;
//             return
//          }
//          while(temp!=null){
//             if(temp.next.data==val){
//                 newNode.next=temp.next;
//                 newNode.prev=temp;
//                 temp.next=newNode;
//                 newNode.next.prev=newNode;
//                 return
                
//             }
//          temp=temp.next;


//          }

//     }

//     display(){
//         var temp=this.head;
//         while(temp){
//            console.log(temp.data);
//            temp=temp.next;
//         }
//     }
// }
// const linkedList=new LinkedList()
// linkedList.addValue(10);
// linkedList.addValue(20);
// linkedList.addValue(30);
// linkedList.addValue(40);
// linkedList.addValue(50);
// linkedList.addBeforeValue(100,30)
// linkedList.display()



//reverse singly LinkedList


// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//         this.prev=null;
//     }
// }
// class LinkedList{
//     constructor(){
//         var head=null;
//         var tail=null;
//         this.prev=null;
//     }
//     addNode(data){
//         const newNode=new Node(data);
        
//         if(this.head==null){
//             this.head=newNode;
//             this.tail=newNode;
//         }
//         this.tail.next=newNode;
//         this.tail=newNode;
//     }
//     getDecimalValue() {
//         var temp = this.head;
//         var length = 0;
        
//         while (temp) {
//             length++;
//             temp = temp.next;
//         }
//         // console.log(length)
//         var ans = 0;
//         for (var i = length - 1; i >= 0; i--) {
//             ans += this.head.data * Math.pow(2, i);
//             // console.log(ans)
//             this.head = this.head.next;
//         }
        
//         return ans;
//     };
//     display(){
//         var temp=this.head;
//         while(temp!=null){
//             console.log(temp.data+" ");
//             temp=temp.next;
//         }
//     }
    // display(res){
    //     var temp=res;
    //     while(temp!=null){
    //         console.log(temp.data);
    //         temp=temp.next;
    //     }
    // }
    // reverseNode(){
    //     var curr=this.head;
    //     while(curr!=null){
    //        var temp=curr.next;
    //        curr.next=this.prev;
    //        this.prev=curr;
    //        curr=temp;
    //     }
    //     return this.prev;
    // }

    // updateAnyElement=(data,value)=>{
    //     var temp=this.head;
    //     while(temp){
    //         if(temp.data==data){
    //             temp.data=value;
               
    //         }
    //         temp=temp.next
    //     }
    // }
  

    // deleteDuplicates(){
    //     var temp=this.head;
    //     while(temp){
    //         var curr=temp;
    //         while(curr.next!=null){
    //             if(temp.data==curr.next.data){
    //                 curr.next=curr.next.next;
    //             }else{
    //                 curr=curr.next;
    //             }
    //         }
    //         temp=temp.next;
    //     }
    // }
    
// }

// const linkedList=new LinkedList()
// linkedList.addNode(1)
// linkedList.addNode(0)
// linkedList.addNode(1)
// linkedList.addNode(1)
// linkedList.addNode(1)
// const res=linkedList.getDecimalValue();
// console.log(res)
// linkedList.addNode(70)
// linkedList.addNode(10)
// linkedList.addNode(20)
// linkedList.addNode(10)
// linkedList.addNode(10)
// linkedList.addNode(40)
// linkedList.display();

// linkedList.updateAnyElement(10,100)
// const res=linkedList.reverseNode();
// linkedList.display(res);

// linkedList.deleteDuplicates();
// linkedList.display();

// ----------------------------------mergelinkedlist

// var mergeTwoLists = function(list1, list2) {
//     if (!list1) {
//       return list2;
//     }
//     if (!list2) {
//       return list1;
//     }
  
//     var result;
  
//     if (list1.val <= list2.val) {
//       result = list1;
//       list1 = list1.next;
//     } else {
//       result = list2;
//       list2 = list2.next;
//     }
  
//     var current = result;
  
//     while (list1 && list2) {
//       if (list1.val <= list2.val) {
//         current.next = list1;
//         list1 = list1.next;
//       } else {
//         current.next = list2;
//         list2 = list2.next;
//       }
//       current = current.next;
//     }
  
//     if (list1) {
//       current.next = list1;
//     }
  
//     if (list2) {
//       current.next = list2;
//     }
  
//     return result;
//   };




// All linkedlist functions-------------------->


// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//         this.prev=null;
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head=null;
//         this.prev=null;
//         this.tail=null
//     }

//     addNode=(data)=>{
//         const newNode=new Node(data)
//         if(this.head==null){
//            this.head=newNode;
//            this.tail=newNode;
//         }
//         this.tail.next=newNode;
//         this.tail=newNode;
//     }
//     insertFirst(data){
//         const newNode=new Node(data);
//         if(this.head==null){
//            this.head=newNode;
//            this.tail=newNode;
//         }
//         newNode.next=this.head;
//         this.head=newNode;
//     }
//     insertLast(data){
//         const newwNode=new Node(data)
//         if(this.head==null){
//             this.head=newwNode;
//             this.tail=newwNode;
//          }
//          this.tail.next=newwNode;
//          this.tail=newwNode;
//     }
//     insertAfter(data,val){
//         const newNode=new Node(data);
//         var temp=this.head;
//         if(this.tail.data==val){
//             this.tail.next=newNode;
//             this.tail=newNode;
//             return;
//         }
//         while(temp){
//             if(temp.data==val){
//                 newNode.next=temp.next;
//                 temp.next=newNode;
//             }
//             temp=temp.next;
//         }
//     }
//     insertBefore(data,val){
//         const newNode=new Node(data);
//         var temp=this.head;
//         if(this.head.data==val){
//             newNode.next=this.head;
//             this.head=newNode
//             return;
//         }
//         while(temp){
//             if(temp.data==val){
//                 this.prev.next=newNode;
//                 newNode.next=temp;
//             }
//             this.prev=temp;
//             temp=temp.next;
//         }
//     }
//     insertByIndex=(index,data)=>{
//         const newNode=new Node(data);
//         var temp=this.head;
//         var count=0;
//         if(index==0){
//            newNode.next=this.head;
//            this.head=newNode;
//            return
//         }
//         while(temp){
//             if(index==count){
//                this.prev.next=newNode;
//                newNode.next=temp;
//             }
//             this.prev=temp;
//             temp=temp.next;
//             count++;
//         }


//     }
//     // findMiddle(){
//     //     var slow=this.head;
//     //     var fast=this.head;
//     //     while(fast!=null && fast.next.next!=null){
//     //         slow=slow.next;
//     //         fast=fast.next.next;
//     //     }
//     //     console.log("the middle is "+slow.data)
//     // }

//     // changeMiddle(data){
//     //     var slow=this.head;
//     //     var fast=this.head;
//     //     while(fast!=null && fast.next.next!=null){
//     //         slow=slow.next;
//     //         fast=fast.next.next;
//     //     }
//     //     slow.data=data;
//     // }
//     deleteFirst(){
//        var temp=this.head;
//        this.head=temp.next;
//        return;
//     }
//     deleteLast(){
//         var temp=this.head;
//         while(temp && temp.next){
//             if(temp.next==this.tail){
//                 this.tail=temp;
//                 temp.next=null;
//             }
//             temp=temp.next;
//         }
//     }
//     deleteByValue=(data)=>{
//         var temp=this.head;
//         while(temp){
//             if(temp.data==data){
//                this.prev.next=temp.next;
//             }
//             this.prev=temp;
//             temp=temp.next;
//         }
//     }
//     deleteDuplicates(){
//         var temp=this.head;
//         while(temp){
//             var curr=temp;
//             while(curr.next!=null){
//                 if(curr.next.data==temp.data){
//                     curr.next=curr.next.next;

//                 } else{
//                     curr=curr.next;
//                 }
//             }
//             temp=temp.next;
//         }
//     }
//     LargestNum=()=>{
//         var max=0;
//         var temp=this.head;
//         while(temp){
//             if(temp.data>max){
//                 max=temp.data;
//             }
//             temp=temp.next;
//         }
//         console.log("the largetst num is "+max)
//     }
//     secLargestNum=()=>{
//         var max=0;
//         var sec=0;
//         var temp=this.head;
//         while(temp){
//             if(temp.data>max){
//                 sec=max;
//                 max=temp.data;
                
//             }
//             if(temp.data>sec && temp.data<max){
//                 sec=temp.data;
//             }
//             temp=temp.next;
//         }
//         console.log("the second Largest num is "+sec)
//     }
//     display=()=>{
//         var temp=this.head;
//         while(temp){
//             console.log(temp.data);
//             temp=temp.next;
//         }
//     }
// }
// const linkedList=new LinkedList();
// linkedList.addNode(10)
// linkedList.addNode(10)
// linkedList.addNode(20)
// linkedList.addNode(30)
// linkedList.addNode(40)
// linkedList.addNode(50)
// linkedList.addNode(50)
// linkedList.addNode(60)
// linkedList.addNode(70)
// linkedList.addNode(70)
// linkedList.insertFirst(100)
// linkedList.insertLast(100)
// linkedList.insertAfter(200,40)
// linkedList.insertBefore(155,60)
// linkedList.insertByIndex(10,300)
// linkedList.LargestNum()
// linkedList.secLargestNum()

// // linkedList.findMiddle()
// linkedList.deleteDuplicates()
// // linkedList.changeMiddle(500)
// linkedList.deleteFirst()
// linkedList.deleteLast()
// linkedList.deleteByValue(500)
// linkedList.display();


// ------------------------circular linkedlist

// class Node{
//     constructor(data){
//            this.data=data;
//            this.prev=null;
//            this.next=null;
//     }
// }
// class LinkdedList{
//     constructor(){
//         this.head=null;
//         this.tail=null;
        
//     }
//     addNode=(data)=>{
//          const newNode=new Node(data) 
//          if(this.head==null){
//             this.head=newNode;
//             this.tail=newNode;
//             this.tail.next=this.head;
          
//          }else{
//             // newNode.prev = this.tail;
//       this.tail.next = newNode;
//       this.tail = newNode;
//     //   this.tail.next = this.head;
//          }
        
//     }
//     isCircular(){
//         if(this.tail.next==this.head){
//             console.log("This is a circular linkedlist")
//         }else{
//             console.log("this is not a circular linkedlist");
//         }
//     }
//     display(){
       
//         var temp=this.head;

//        do{
//         console.log(temp.data)
//         temp=temp.next;
//        }while(temp!=this.head && temp!=null)
    
//     }

// }
// const linkedList=new LinkdedList()
// linkedList.addNode(10)
// linkedList.addNode(20)
// linkedList.addNode(30)
// linkedList.addNode(40)

// linkedList.display()
// linkedList.isCircular()



