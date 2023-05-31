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


// const arr=[2,4,6,7,9,12,34,56,78,90,91,94,96,98,99]
// var target=78;
// var start=0;
// var end=arr.length-1;
// var flat=0;
// const binarySearch=(start,end)=>{
//     while(start<end){

//         var mid=Math.floor(start+(end-start)/2);
//         if(arr[mid]==target){
//             return mid;
//         }else if(target<arr[mid]){
//             return binarySearch(start,mid-1)
//         }else{
//             return binarySearch(mid+1,end)
//         }
//     }
//     if(start>end){
//         var flat=1;
//         return
//     }
// }
// const val=binarySearch(start,end)
// if(flat==1){
//     console.log("NO value presetn")
// }else{
//     console.log(`${target} is present at ${val}`)

// }

// Bubble sort

// const arr=[13,14,5,6,7,4,3];
// const sortBubble=(arr)=>{
//     var n=arr.length;
//    for(var i=0;i<n;i++){
//      for(var j=0;j<n-i;j++){
//         if(arr[j]>arr[j+1]){
//             var temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//         }
//      }
//    }
//    return arr;
// }
// var res=sortBubble(arr)
// for(var i=0;i<arr.length;i++){
//     console.log(res[i])
// }


// Decending bubble sort

// const arr=[16,15,6,4,3];
// const sortBubble=(arr)=>{
//     var n=arr.length;
//    for(var i=0;i<n;i++){
//     var sorted=false;
//      for(var j=0;j<n;j++){
//         if(arr[j]<arr[j+1]){
//             var temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//             var sorted=true;
//         }
//      }
//      if(!sorted){
//         break;
//      }
//    }
//    return arr;
// }
// var res=sortBubble(arr)
// for(var i=0;i<arr.length;i++){
//     console.log(res[i])
// }

//merge sorting

// const mergeSort=(arr,lb,ub)=>{
//      if(lb<ub){
//         var mid=Math.floor((lb+ub)/2)
//         mergeSort(arr,lb,mid)
//         mergeSort(arr,mid+1,ub)
//         merge(arr,lb,mid,ub)
//      }
// }
// const merge=(arr,lb,mid,ub)=>{
//      let i=lb;
//      let j=mid+1;
//      let k=lb;
//      let b=[];
//      while(i<=mid && j<=ub){
//         if(arr[i]<arr[j]){
//             b[k]=arr[i];
//             i++;
//         }else{
//             b[k]=arr[j];
//             j++;   
//         }
//         k++;

//      }
//      while(i<=mid){
//         b[k]=arr[i];
//         i++;
//         k++;
//      }
//      while(j<=ub){
//         b[k]=arr[j];
//         j++;
//         k++;
        
//      }
//      for(var x=lb;x<=ub;x++){
//         arr[x]=b[x]
//      }
// }
// const arr=[8,4,7,2,5,9,1,3,6]
// let lb=0;
// let ub=arr.length-1;
// mergeSort(arr,lb,ub)

// console.log(arr)


//string reverse in stack

// class Node{
//    constructor(data){
//       this.data=data;
//       this.next=null
//    }
// }
// class Stack{
//    constructor(){
//       this.top=null;
//    }
//    push(data){
//       const newNode=new Node(data)
//       if(this.top==null){
//          this.top=newNode;
//          return;
//       }
//       newNode.next=this.top;
//       this.top=newNode;
//    }
//    pop=()=>{
//       if(this.top==null){
//          console.log("empty stack")
//          return;
//       }
//       var popData=this.top.data;
//       this.top=this.top.next;
//       return popData;
//    }
//    display(){
//       var temp=this.top;
//       while(temp){
//          console.log(temp.data);
//          temp=temp.next;
//       }
//    }
// }
// const str="jithin"
// const stack=new Stack()
// for(var i=0;i<str.length;i++){
//    stack.push(str[i])
// }
// stack.display()

// let reversed=""
// for(var i=0;i<str.length;i++){
//    reversed=reversed+stack.pop()
// }
// console.log(reversed)

// class Node{
//    constructor(data) {
//            this.data=data
//            this.next=null
//    }
// }



//deleteMiddle---------------------------------->


// class Stack{
//    constructor() {
//            this.top=null
//            this.size=0
//    }

//    push(data){
//            const newNode=new Node(data)

//            if(!this.top){
//                    this.top=newNode
//            }
//            else{
//                    newNode.next=this.top
//                    this.top=newNode
//            }
//            this.size++
           
//    }
   // deletemiddle(){
   //         let currentNode=this.top
   //         let cout=0
   //         let mid=Math.floor(this.size/2)
   //         console.log(mid,"mid");
   //         while(currentNode){
   //                 cout++
   //                 if(mid==cout){
   //                         currentNode.next=currentNode.next.next
   //                 }
   //                 currentNode=currentNode.next

   //         }
   // }


//    deletemiddle=()=>{
//       let curr=this.top;
//       let count=0;
//       let mid=Math.floor(this.size/2)
//       while(curr){
//          count++;
//             if(count==mid){
//                curr.next=curr.next.next;
//                return
//              }
//          curr=curr.next;
         
//       }
   
//    }
//    display(){
//            let currentNode=this.top
//            while(currentNode){
//                    console.log(currentNode.data);

//                    currentNode=currentNode.next
//            }
//    }
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
// myStack.display()


// const items = {};
// items[0] = 10;
// items[1] = 20;
// console.log(items);


//HashTable


// class HashTable{
//    constructor(size){
//       this.table=new Array(size)
//       this.size=size
//    }
//    hash(key){
//       var total=0;
//       for(var i=0;i<key.length;i++){
//          total+=key.charCodeAt(i)
//       }
//       // console.log(total)
//       var k=total%this.size;
//       // console.log(k)
//       return k
//    }
//    set(key,value){
//       let index=this.hash(key)
//       this.table[index]=value;
//    }
//    get(key){
//       let index=this.hash(key);
//       return this.table[index]
//    }
//    display(){
//       for(var i=0;i<this.table.length;i++){
//          if(this.table[i]){
//             console.log(i, this.table[i]);
//          }
//       }
//    }

// }
// const table=new HashTable(50)
// table.set("name","jithin")
// table.set("age",24)
// var res=table.get("age")
// console.log(res)
// console.log("-__________________")
// table.display()


//HashTable with collision handling

// class HashTable{
//     constructor(size) {
//        this.table=new Array(size)
//        this.size=size;
//     }

//     hash(key){
//        var total=0;
//        for(var i=0;i<key.length;i++){
//           total+=key.charCodeAt(i)
//        }
//        return total%this.size;
//     }
//     set(key,value){
//       var index=this.hash(key)
//       const bucket=this.table[index]
//       if(!bucket){
//          this.table[index]=[[key,value]]
//       }else{
//          const sameKeyItem=bucket.find(item=>item[0]===key)
//          if(sameKeyItem){
//             sameKeyItem[1]=value;
//          }else{
//             bucket.push([key,value])
//          }
//       }
//     }
//     get(key){
//       var index=this.hash(key)
//       const bucket=this.table[index];
//       if(bucket){
//          const sameKeyItem=bucket.find(item=>item[0]===key)
//          if(sameKeyItem){
//              return sameKeyItem[1]
//          }
//       }
//       return undefined;
//     }
//     remove(key){
//       var index=this.hash(key);
//       const bucket=this.table[index]
//       if(bucket){
//          const sameKeyItem=bucket.find(item=>item[0]==key)
//          if(sameKeyItem){
//             bucket.splice(bucket.indexOf(sameKeyItem),1)
//          }
//       }
//     }
//     display(){
//       for(let i=0;i<this.table.length;i++){
//          if(this.table[i]){
//              console.log(i, this.table[i])
//          }
//      }
//     }
// }
// const table=new HashTable(50)
// table.set("name","jithin")
// table.set("age",24)
// table.set("place","kannur")
// table.set("kiran",55)
// table.display()
// console.log("_________________")
// var res=table.get("kiran")
// console.log(res)
// console.log("__________________")
// table.remove("kiran");
// table.display()


//bubble sort


// const arr=[5,6,9,3,1,4,5,9,10]
// const arr=[5,7,9,52,48,65,78,1,68,59,24,25,35,78]

// const bubbleSort=(arr)=>{
//    var n=arr.length
//    var sorted=false;
//     for(var i=0;i<n-1;i++){
//       for(var j=0;j<n-1-i;j++){
//          if(arr[j]>arr[j+1]){
//             var temp=arr[j];
//             arr[j]=arr[j+1];
//             arr[j+1]=temp;
//             sorted=true;
//          }
//       }
//       if(sorted==false){
//          break;
//       }
//     }
//     for(var i=0;i<arr.length;i++){
//       console.log(arr[i])
//     }
// }
// bubbleSort(arr)


// const arr=[5,7,9,52,48,65,78,1,68,59,24,25,35,78]

// var n=arr.length;
// var sorted=false;
// for(var i=0;i<arr.length;i++){
//    for(var j=0;j<n-1-i;j++){
//        if(arr[j]>arr[j+1]){
//          var temp=arr[j];
//                      arr[j]=arr[j+1];
//                      arr[j+1]=temp;
//                      sorted=true;
//        }
//    }
//    if(!sorted){
//       break;
//    }
// }
// console.log(arr)

// ------------------------selection sort
// const arr=[5,7,9,52,48,65,78,1,68,59,24,25,35,78]

// for(var i=0;i<arr.length-1;i++){
//    for(var j=i+1;j<arr.length;j++){
//        if(arr[i]>arr[j]){
//          var temp=arr[i];
//          arr[i]=arr[j];
//          arr[j]=temp;
//        }
//    }
// }
// console.log(arr)

// const arr=[5,7,9,52,48,65,78,1,68,59,24,25,35,78]
// const selectionSort=(arr)=>{
//    for(var i=0;i<arr.length-1;i++){
//       for(var j=i+1;j<arr.length;j++){
//          if(arr[i]>arr[j]){
//             var temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//          }
//       }
//    }
//    return arr
// }
// var res=selectionSort(arr)
// console.log(arr)


// insertion sort------------------------------>