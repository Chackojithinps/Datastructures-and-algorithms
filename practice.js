// function generateArray(n){
//    if(n==1){
//      return [1]
//    }
//    const arr=generateArray(n-1);
//    arr.push(n);
//    return arr;
// }
// const res=generateArray(7)
// console.log(res)

// console.log(getarray(9));


// function sumnumbers (n){
//     if(n===1){
//         return 1
//     }
//     let sum = sumnumbers(n-1)
//      sum = sum+n
//     return sum
// }
// console.log(sumnumbers(3));



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


// var str="Hello jithin"
// var str2=str.split(" ").reverse().join(" ");
// console.log(str2)



// var str="Hello jithin"
// var str2=str.split(" ")
// for(var i=0;i<str2.length;i++){
//     str2[i]=str2[i].split("").reverse().join("")
// }
// var str3=str2.join(" ");
// console.log(str3)


// const arr=[4,2,5,6,7,8,5,3,6,7,5,4,6,6,4,2,6]
// for(var i=0;i<arr.length;i++){
//     // var k=0;
//     var j=arr.length-1;
//     if(arr[i]==6){
      
//         while(arr[j]==6){
//             j--;
//         }
      
//         var temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
       
//        j--;
//     }
// }
// for(var i=0;i<arr.length-1;i++){
//     console.log(arr[i])
// }


// const arr=[2,4,6,7,9,12,34,56,78,90,91,94,96,98,99]
// var target=78;
// var start=0;
// var end=arr.length-1;
// while(start<end){
// var mid=Math.floor(start+(end-start)/2);
// if(target==arr[mid]){
//     console.log(`${target} exists at position ${mid}`)
//     return;
// }else if(target<arr[mid]){
//      end=mid-1;
// }else{
//     start=mid+1;
// }
// }
// if(start>end){
//    console.log("no such value present in array")
// }


const arr=[2,4,6,7,9,12,34,56,78,90,91,94,96,98,99]
var target=78;
var start=0;
var end=arr.length-1;
var flat=0;
const binarySearch=(start,end)=>{
    while(start<end){

        var mid=Math.floor(start+(end-start)/2);
        if(arr[mid]==target){
            return mid;
        }else if(target<arr[mid]){
            return binarySearch(start,mid-1)
        }else{
            return binarySearch(mid+1,end)
        }
    }
    if(start>end){
        var flat=1;
        return
    }
}
const val=binarySearch(start,end)
if(flat==1){
    console.log("NO value presetn")
}else{
    console.log(`${target} is present at ${val}`)

}
