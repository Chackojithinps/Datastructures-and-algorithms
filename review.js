// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null;
//     }
// }
// class LinkdedList{
//     constructor() {
//         this.head=null;
//         this.tail=null;
//     }
//     addNode(data){
//         const newNode=new Node(data)
//         if(this.head==null){
//             this.head=newNode;
//             this.tail=newNode;
//             return;
//         }
//         this.tail.next=newNode;
//         this.tail=newNode;
//     }
//     sumOfData(){
//         var sum=0;
//         var temp=this.head;
//         while(temp){
//             sum=sum+temp.data;
//             temp=temp.next;
//         }
//         console.log(sum)
//     }
// }
// const linkedList=new LinkdedList();
// linkedList.addNode(10)
// linkedList.addNode(20)
// linkedList.addNode(30)
// linkedList.sumOfData()
// -------------------------------------------------------------
// factorial=(num)=>{
//   if(num==1){
//      return num;
//   }
//   return num*factorial(num-1)
// } 
// var res=factorial(5)
// console.log(res)
