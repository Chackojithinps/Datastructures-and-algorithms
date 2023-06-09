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

// const arr=[2,7,3,6,10,8,9]
// const arr=[5,7,9,52,48,65,78,1,68,59,24,25,35,78]

// const insertionSort=(arr)=>{
//     var n=arr.length;
//      for(var i=1;i<arr.length;i++){
//         var j=i-1;
//         var key=arr[i];
//         while(j>=0 && arr[j]>key){
//             arr[j+1]=arr[j]
//             j=j-1;
//         }
//         arr[j+1]=key;
//      }
//      return arr
// }
// var res=insertionSort(arr)
// for(var i=0;i<res.length;i++){
//     console.log(res[i])
// }


// const arr=[2,7,113,6,10,8,9,10]

// const insertionSort=(arr)=>{
//      var n=arr.length;
//      for(var i=1;i<n;i++){
//        var key=arr[i];
//        var j=i-1;
//        while(j>=0 && arr[j]>key){
//          arr[j+1]=arr[j];
//           j=j-1;
//        }
//        arr[j+1]=key;
//      }
//      return arr;
// }

// const insertionSort=(arr)=>{
//     for(var i=1;i<arr.length;i++){
//        const key=arr[i];
//        var j=i-1;
//        while(j>=0 && arr[j]>key){
//          arr[j+1]=arr[j];
//        }
//        arr[j+1]=key;
//     }
//     return arr
// }


// var res=insertionSort(arr)
// console.log(res)


//quick sort

// const arr=[5,7,9,52,48,65,78,1,68,59,24,25,35,78]
// const arr=[5,4]
// const partition=(arr,l,r)=>{
//    var pivot=arr[l]
//    var i=l+1;
//    var j=r;
//    while(i<=j){
//       while(arr[i]<pivot){
//          i++;
//       }
//       while(arr[j]>pivot){
//          j--;
//       }
//       if(i<=j){
//          [arr[i],arr[j]]=[arr[j],arr[i]]
//          i++;
//          j--;
//       }
//    }
//    [arr[j],arr[l]]=[arr[l],arr[j]]
//    return j;
// }
// const quicksort=(arr,l,r)=>{
//    if(l<r){
//       let p=partition(arr,l,r)
//       quicksort(arr,l,p-1);
//       quicksort(arr,p+1,r)
//    }
// }
// let l=0;
// let r=arr.length-1;

// quicksort(arr,l,r)
// console.log(arr)


// const arr=[5,7,9,52,48,65,78,1,68,59,24,25,35,78]

// const partition=(arr,lb,ub)=>{
//     var pivot=arr[lb];
//     i=lb+1;
//     j=ub;
//     while(i<=j){
//       while(arr[i]<pivot){
//          i++;
//       }
//       while(arr[j]>pivot){
//          j--;
//       }
//       if(i<=j){
//          [arr[i],arr[j]]=[arr[j],arr[i]];
//          i++;
//          j--;
//       }
//     }
//     [arr[j],arr[lb]]=[arr[lb],arr[j]]
//     return j;
// }

// const quicksort=(arr,lb,ub)=>{
//     if(lb<ub){
//       var p=partition(arr,lb,ub)
//       quicksort(arr,lb,p-1)
//       quicksort(arr,p+1,ub)
//     }
// }

// const lb=0;
// const ub=arr.length-1;

// quicksort(arr,lb,ub);
// console.log(arr)


// const mergeSort=(arr,lb,ub)=>{
//    if(lb<ub){
//       var mid=Math.floor((ub+lb)/2);
//       mergeSort(arr,lb,mid)
//       mergeSort(arr,mid+1,ub)
//       merge(arr,lb,mid,ub)
//    }
// }
// merge=(arr,lb,mid,ub)=>{
//    var i=lb;
//    var k=lb;
//    var b=[];
//    var j=mid+1;
//    while(i<=mid && j<=ub){
//       if(arr[i]<arr[j]){
//          b[k]=arr[i];
//          i++
//       }else{
//          b[k]=arr[j]
//          j++
//       }
//       k++
//    }
//    while(i<=mid){
//       b[k]=arr[i]
//       i++;
//       k++;
//    }
//    while(j<=ub){
//       b[k]=arr[j]
//       j++;
//       k++;
//    }
//    for(var x=lb;x<=ub;x++){
//       arr[x]=b[x]
//    }
// }


// const arr=[5,7,9,52,48,65,78,1,68,59,24,25,35,78]
// let lb=0;
// let ub=arr.length-1;
// console.log(arr)
// const partition=(arr,lb,ub)=>{
//    var pivot=arr[lb];
//    i=lb+1;
//    j=ub;
//    while(i<=j){
//       while(arr[i]<pivot){
//           i++;
//       }
//       while(arr[j]>pivot){
//          j--;
//       }
//       if(i<=j){
//          [arr[j],arr[i]]=[arr[i],arr[j]]
//          i++;
//          j--;
//       }
//    }
//    [arr[j],arr[lb]]=[arr[lb],arr[j]]
//    return j
// }
// const quickSort=(arr,lb,ub)=>{
//    if(lb<ub){

//       var p=partition(arr,lb,ub)
//       quickSort(arr,lb,p-1)
//       quickSort(arr,p+1,ub)
//    }
    
// }
// const arr=[5,7,9,52,48,65,78,1,68,59,24,25,35,78]
// let lb=0;
// let ub=arr.length-1;
// quickSort(arr,lb,ub)
// console.log(arr)

// const partition=(arr,lb,ub)=>{
//    var pivot=arr[lb];
//    var i=lb+1;
//    var j=ub;
//    while(i<=j){
//        while(arr[i]<pivot){
//          i++;
//        }
//        while(arr[j]>pivot){
//          j--;
//        }
//        if(i<=j){
//          [arr[i],arr[j]] = [arr[j],arr[i]]
//          i++;
//          j--;
//        }
//    }
//    [arr[lb],arr[j]]=[arr[j],arr[lb]]
//    return j;
// }
// const quickSort=(arr,lb,ub)=>{

//       if(lb<ub){
//          var p=partition(arr,lb,ub);
//          quickSort(arr,lb,p-1)
//          quickSort(arr,p+1,ub)
//       }
   
// }


// const arr=[5,7,9,52,48,65,78,1,68,59,24,25,35,78]
// let lb=0;
// let ub=arr.length-1;
// quickSort(arr,lb,ub)
// console.log(arr)


// mergesort--------------------------------------->

// const merge=(arr,lb,mid,ub)=>{
   
//    var i=lb;
//    var k=lb;
//    const b=[];
//    var j=mid+1;

//    while(i<=mid && j<=ub){
//       if(arr[i]<arr[j]){
//          b[k]=arr[i]
//          i++;
//       }else{
//          b[k]=arr[j]
//          j++;
//       }
//       k++;
    
//    }
//    while(i<=mid){
//       b[k]=arr[i];
//       i++;
//       k++;
//    }
//    while(j<=ub){
//       b[k]=arr[j];
//       j++;
//       k++;
//    }

//    for(var x=lb;x<=ub;x++){
//       arr[x]=b[x]
//    }

// }
// const mergeSort=(arr,lb,ub)=>{
//     if(lb<ub){
//       var mid=Math.floor((lb+ub)/2);
//       mergeSort(arr,lb,mid);
//       mergeSort(arr,mid+1,ub);
//       merge(arr,lb,mid,ub)
//     }
// }
// const arr=[5,7,9,52,48,65,78,1,68,59,24,25,35,78]
// let lb=0;
// let ub=arr.length-1;
// mergeSort(arr,lb,ub);
// console.log(arr)




// const insertionSort=(arr)=>{
//      var n=arr.length;
//      for(var i=1;i<n;i++){
//        var j=i-1;
//        var key=arr[i];
//        while(j>=0 && arr[j]>key){
//            arr[j+1]=arr[j];
//            j=j-1;
//        }
//        arr[j+1]=key;
//      }
// }
// const arr=[5,7,9,52,48,65,78,1,68,59,24,25,35,78]
// insertionSort(arr);
// console.log(arr)


// class Node{
//    constructor(data){
//       this.data=data;
//       this.next=null;
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
//    pop(){
//       if(this.top==null){
//          console.log("empty");
//          return;
//       }
//       var poppedData=this.top.data;
//       this.top=this.top.next;
      
//    }
//    display(){
//       var temp=this.top;
//       while(temp){
//          console.log(temp.data);
//          temp=temp.next;
//       }
//    }
// }
// const stack=new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.push(50)
// stack.display()
// console.log("_____________")
// stack.pop();
// stack.display()



// class Stack{
//    constructor(){
//       this.arr=[];
//    }
//    pushData=(data)=>{
//       this.arr.push(data)
//    }
//    popData=()=>{
//       this.arr.pop()
//    }
//    display(){
//      for(var i=this.arr.length-1;i>=0;i--){
//       console.log(this.arr[i])
//      }
//    }
// }
// const stack=new Stack();
// stack.pushData(10)
// stack.pushData(20)
// stack.pushData(30)
// stack.pushData(40)
// stack.pushData(50)
// stack.pushData(60)
// stack.display();
// stack.popData();
// console.log("____________________");
// stack.display()

// class Node{
//    constructor(data){
//       this.data=data;
//       this.next=null;
//    }
// }
// class Queue{
//    constructor(){
//       this.first=null;
//       this.rear=null;
//    }
//    push(data){
//       const newNode=new Node(data)
//       if(this.first==null){
//            this.first=this.rear=newNode;
//            return;
//       }
//       this.rear.next=newNode;
//       this.rear=newNode;
//    }
//    pop(){
//       if(this.first==null){
//          console.log("empty queue")
//          return;
//       }
//       this.first=this.first.next;


//    }
//    display(){
//       var temp=this.first;
//       while(temp){
//          console.log(temp.data);
//          temp=temp.next;
//       }
//    }
   
// }
// const queue=new Queue();
// queue.push(10)
// queue.push(20)
// queue.push(30)
// queue.push(40)
// queue.push(50)
// queue.push(60)
// queue.display()
// console.log("______________")
// queue.pop();
// queue.display()


// class Queue{
//    constructor(){
//       this.arr=[];
//    }
//    enqueue=(data)=>{
//       this.arr.push(data)
//    }
//    dequeue=()=>{
//       this.arr.shift()
//    }
//    display(){
//       console.log(this.arr)
//    }
// }
// const queue=new Queue();
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.dequeue()
// queue.display()

// class Node{
//    constructor(data){
//       this.data=data;
//       this.next=null;
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
//    pop(){
//       if(this.top==null){
//          console.log("empty");
//          return;
//       }
//       var poppedData=this.top.data;
//       this.top=this.top.next;
//       return poppedData;
//    }
//    undo(){
//       stack1.push(stack.pop());
//    }
//    redo(){
//       stack.push(stack1.pop())
//    }
//    display(){
//       var temp=this.top;
//       while(temp){
//          console.log(temp.data);
//          temp=temp.next;
//       }
//    }
// }
// const stack=new Stack()
// const stack1=new Stack();

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.push(50)
// // stack.display()
// // console.log("_____________")
// stack.undo();
// stack.undo();
// stack.undo();
// // stack.display()
// stack.redo();
// stack.redo();
// stack.display()


// class Stack{
//   constructor(){
//    this.arr=[];
//    this.arr2=[];
//   }
//   push(data){
//      this.arr.push(data)
//   }
  
//   undo(){
    
//      this.arr2.push(this.arr.pop())
//   }
//   redo(){
//     this.arr.push(this.arr2.pop())
//   }
//   display(){
//    console.log(this.arr)
//   }
// }
// const stack=new Stack();
// // const stack1=new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.push(50)
// stack.undo()
// stack.undo()
// stack.redo()
// stack.redo()
// stack.display();



// class Node{
//    constructor(data){
//       this.data=data;
//       this.next=null;
//    }
// }
// class Stack{
//    constructor(){
//       this.top=null;
//       this.size=0;
//    }
//    push(data){
//       const newNode=new Node(data)
//       if(this.top==null){
//          this.top=newNode;
//          this.size++;
//          return;
//       }
//       newNode.next=this.top;
//       this.top=newNode;
//       this.size++;
//    }
//    pop(){
//       if(this.top==null){
//          console.log("empty");
//          return;
//       }
//       var poppedData=this.top.data;
//       this.top=this.top.next;
//       return poppedData;
//    }
//    deleteMiddle(){
//       var mid=Math.floor(this.size/2)
//       var count=0;
//       for(var i=0;i<mid;i++){
//          stack1.push(stack.pop())
//       }
//       stack.pop();
//       for(var i=0;i<mid;i++){
//          stack.push(stack1.pop())
//       }
//    }

//    // reverse(){
//    //    for(var i=0;i<this.size;i++){
//    //          var k=stack.pop()
//    //          stack1.push(k)
//    //    }
      
//    // }

//    display(){
//       var temp=this.top;
//       while(temp){
//          console.log(temp.data);
//          temp=temp.next;
//       }
//    }
// }
// const stack=new Stack()
// const stack1=new Stack();

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.push(50)
// var str="Kerala"

// for(var i=0;i<str.length;i++){
//    stack.push(str[i]);
// }
// stack.reverse()

// for(var i=0;i<str.length;i++){
//    stack1.push(stack.pop())
// }
// var k=""
// for(var i=0;i<str.length;i++){
//    k+=stack1.pop()
// }

// stack.display()
// console.log("________________")
// stack.deleteMiddle()
// stack.display()

// console.log(k)
//  stack.display()


// var str = "Hello world";
// var newStr = "";

// for (var i = 0; i < str.length; i++) {
//   if (str[i] === " ") {
//     newStr += "_";
//   } else {
//     newStr += str[i];
//   }
// }

// console.log(newStr);
// const partition=(arr,lb,ub)=>{
//    var s=lb;
//    var e=ub;
//    var pivot=arr[3];
//    while(s<=e){
//       while(arr[s]<pivot){
//          s++;
//       }
//       while(arr[e]>pivot){
//          e--;
//       }
//       if(s<=e){
//          var temp=arr[s];
//          arr[s]=arr[e];
//          arr[e]=temp
//          s++;
//          e--;
//       }
//    }
//    [pivot,arr[e]]=[arr[e],pivot]
//    return e;
// }
// const quickSort=(arr,lb,ub)=>{
//   if(lb<ub){
//      var p=partition(arr,lb,ub)
//      quickSort(arr,lb,p-1);
//      quickSort(arr,p+1,ub)
//   }
// }
// const arr=[5,6,2,6,2,7,82,34,67]
// const lb=0;
// const ub=arr.length-1;
// quickSort(arr,lb,ub);
// console.log(arr)


// function partition(a,l,r){
//     let pivot=a[l]
//     let i=l+1
//     let j=r

//     while(i<=j){

//         while(a[i]<pivot){
//             i++
//         }
//         while(a[j]>pivot){
//             j--
//         }

//         if(i<=j){
//         [a[j],a[i]]=[a[i],a[j]]
            
//             i++
//             j--
//         }
//     }

//     // temp=a[j]
//     // a[j]=a[l]
//     // a[l]=temp
//     [a[j],a[l]]=[a[l],a[j]]
// return j
// }

// function quicksort(a,l,r){
//     if(l<r){
//         let p=partition(a,l,r)

//         quicksort(a,l,p-1)
//         quicksort(a,p+1,r)
//     }
// }

// const array=[10,3,27,5,12,19,2,11,200]

// let l=0
// let r=array.length-1

// quicksort(array,l,r)
// console.log(array);


// class Node{
//    constructor(data){
//       this.data=data;
//       this.next=null;
//    }
// }
// class Queue{
//     constructor() {
//       this.first=null;
//       this.rear=null;
//       this.size=0;
//     }
//     enqueue(data){
//       const newNode=new Node(data)
//         if(this.first==null){
//           this.first=this.rear=newNode
//           this.size++;
//           return;
//         }
//         this.rear.next=newNode;
//         this.rear=newNode;
//         this.size++;

//     }
//     dequeue(){
//       if(this.first==null){
//          this.rear=null;
//          console.log("empty");
//          return;
//       }
//       this.first=this.first.next;
//     }
//     display(){
//       var temp=this.first;
//       while(temp){
//          console.log(temp.data);
//          temp=temp.next;
//       }
//     }
// }
// const queue=new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)
// // queue.dequeue()
// queue.display()
// const partition=(arr,lb,ub)=>{
//    var s=lb;
//    var e=ub;
//    var pivot=arr[3]
//    [arr[lb],arr[3]]=[arr[3],arr[lb]]
//    var pivot=arr[lb];
//    while(s<=e){
//       while(arr[s]<pivot){
//          s++;
//       }
//       while(arr[e]>pivot){
//          e--;
//       }
//       if(s<=e){
//          [arr[s],arr[e]]=[arr[e],arr[s]]
//          s++;
//          e--;
//       }
//    }
//    [arr[lb],arr[e]]=[arr[e],arr[lb]]
//    return e;
// }
// const quicSort=(arr,lb,ub)=>{
//    if(lb<ub){
//      var p= partition(arr,lb,ub)
//      quicSort(arr,lb,p);
//      quicSort(arr,p+1,ub)
//    }
// }
//  const arr=[5,3,6,8,9,2,10,7]
//  var lb=0;
//  var ub=arr.length-1;
//  quicSort(arr,lb,ub);
//  console.log(arr)
// const merge=(arr,lb,mid,ub)=>{
//      var i=lb;
//      var j=mid+1;
//      var b=[];
//      var k=lb;
//      while(i<=mid && j<=ub){
//        if(arr[i]<arr[j]){
//          b[k]=arr[i];
//          i++;
//        }else{
//          b[k]=arr[j];
//          j++
//        }
//        k++;
//      }
//      while(i<=mid){
//       b[k]=arr[i];
//       i++;
//       k++;
//      }
//      while(j<=ub){
//       b[k]=arr[j];
//       j++;
//       k++
//      }
//      for(var x=lb;x<=ub;x++){
//         arr[x]=b[x]
//      }
// }
// const mergeSort=(arr,lb,ub)=>{
//    if(lb<ub){
//       var mid=Math.floor((lb+ub)/2);
//       mergeSort(arr,lb,mid)
//       mergeSort(arr,mid+1,ub);
//       merge(arr,lb,mid,ub)
//    }
// }
//  const arr=[5,3,6,8,9,2,10,7]

//  var lb=0;
//  var ub=arr.length-1;
//  mergeSort(arr,lb,ub);
//  console.log(arr)

// const insertionSort=(arr)=>{
//     for(var i=1;i<arr.length;i++){
//       var j=i-1;
//       var key=arr[i];
//       while(j>=0 && arr[j]>key){
//          arr[j+1]=arr[j];
//          j=j-1;
//       }
//       arr[j+1]=key;
//     }
// }
// const arr=[5,3,6,8,9,2,10,7]
// insertionSort(arr)
// console.log(arr)



// function bubbleSort(arr){
//    for(var i=0;i<arr.length;i++){
//       for(var j=0;j<arr.length-1-i;j++){
//          if(arr[j]>arr[j+1]){
//             [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//          }
//       }
//    }
// }


// const arr=[5,3,6,8,9,2,10,7]
// bubbleSort(arr)
// console.log(arr)


// class HashTable{
//     constructor(size){
//        this.table=new Array(size)
//        this.size=size;
//     }
//     hash(key){
//       var total=0;
//       for(var i=0;i<key.length;i++){
//          total+=key.charCodeAt(i);
//       }
//       return total%this.size;
//     }
//     set(key,value){
//        var index=this.hash(key)
//        this.table[index]=value;
//     }
//     remove(key){
//       var index=this.hash(key);
//       this.table[index]=undefined;
//     }
//     get(key){
//       var index=this.hash(key);
//       var k=this.table[index]
//       console.log(k)
//     }
//     display(){
//       for(var i=0;i<this.table.length;i++){
//          if(this.table[i]){
//             console.log(i, this.table[i])
//          }
//       }
//     }
// }
// const table=new HashTable(50);
// table.set("name","jithin")
// table.set("age",66)
// // table.get("name")
// table.remove("age")
// table.display()




// class HashTable{
//    constructor(size){
//       this.table=new Array(size)
//       this.size=size;
//    }
//    hash(key){
//      var total=0;
//      for(var i=0;i<key.length;i++){
//         total+=key.charCodeAt(i);
//      }
//      return total%this.size;
//    }
//    set(key,value){
//       var index=this.hash(key)
//       let bucket=this.table[index]
//       if(!bucket){
//          this.table[index]=[[key,value]]
//       }else{
//          var sameKeyItem=bucket.find(item=>item[0]==key)
//          if(sameKeyItem){
//             sameKeyItem[1]=value;
//          }else{
//             bucket.push([key,value])
//          }
//       }
//    }
//    remove(key){
//      var index=this.hash(key);
//      const bucket=this.table[index]

//      var sameKeyItem=bucket.find(item=>item[0]==key)
//      if(sameKeyItem){
//        sameKeyItem[1]=undefined
//      }
//    }
//    get(key){
//      var index=this.hash(key);
//      const bucket=this.table[index]

//      var sameKeyItem=bucket.find(item=>item[0]==key)
//      if(sameKeyItem){
//        console.log(sameKeyItem[1])
//      }
//    }
//    display(){
//      for(var i=0;i<this.table.length;i++){
//         if(this.table[i]){
//            console.log(i, this.table[i])
//         }
//      }
//    }
// }
// const table=new HashTable(50);
// table.set("name","jithin")
// table.set("place","jithKanin")
// table.set("age",66)
// table.get("place")
// // table.get("name")
// table.remove("place")
// table.display()


// function merge(arr,lb,mid,ub){
//    var i=lb;
//    var j=mid+1;
//    var b=[];
//    var k=lb
//    while(i<=mid && j<=ub){
//      if(arr[i]<arr[j]){
//         b[k]=arr[i];
//         i++;
//      }else{
//         b[k]=arr[j];
//         j++;
//      }
//      k++
//    }
//    while(i<=mid){
//     b[k]=arr[i]
//     i++;
//     k++;
//    }
//    while(j<=ub){
//     b[k]=arr[j]
//     j++;
//     k++;
//    }
//    for(var x=lb;x<=ub;x++){
//      arr[x]=b[x]
//    }
// }
// function mergeSort(arr,lb,ub){
//     if(lb<ub){
//         var mid=Math.floor((lb+ub)/2);
//         mergeSort(arr,lb,mid)
//         mergeSort(arr,mid+1,ub)
//         merge(arr,lb,mid,ub)
//     }
// }


// const merge=(arr,lb,mid,ub)=>{
//      var i=lb;
//      var j=mid+1;
//      var b=[];
//      while(i<=mid && j<=ub){
//       if(arr[i]<arr[j]){
//        b[i](arr[i]);
//        i++;
//      }else{
//       b.push(arr[j]);
//       j++;
//      }


//      }
//      while(i<=mid){
//       b.push(arr[i]);
//       i++;
//      }
//      while(j<=ub){
//       b.push(arr[j])
//       j++;
//      }
// }
// function mergeSort(arr,lb,ub){
//    if(lb<ub){
//       var mid=Math.floor((lb+ub)/2)
//       mergeSort(arr,lb,mid);
//       mergeSort(arr,mid+1,ub);
//       mergeSort(arr,lb,mid,ub);
//    }
// }
// const partition=(arr,lb,ub)=>{
//     var pivot=arr[lb];
//     var i=lb+1;
//     var j=ub;
//     while(i<=j){
//       while(arr[i]<pivot){
//          i++;

//       }
//       while(arr[j]>pivot){
//          j--;
//       }
//       if(i<=j){
//          [arr[i],arr[j]]=[arr[j],arr[i]]
//          i++;
//          j--;
//       }
//    }
//    [arr[j],arr[lb]]=[arr[lb],arr[j]]
//    return j;
// }
// const quickSort=(arr,lb,ub)=>{
//    if(lb<ub){

//       const p=partition(arr,lb,ub);
//       quickSort(arr,lb,p-1)
//       quickSort(arr,p+1,ub)
//    }

// }

// const arr=[4,5,2,7,3,9,5,10,6,]

// var lb=0;
// var ub=arr.length-1;

// quickSort(arr,lb,ub)
// console.log(arr)

// const insertionSort=(arr)=>{
//    for(var i=1;i<arr.length;i++){
//       var key=arr[i];
//       var j=i-1;
      
//       while(j>=0 && arr[j]>key){
//          arr[j+1]=arr[j]
//          j=j-1;
//       }
//       arr[j+1]=key;
//    }
// }
// const arr=[3,7,2,1,6,9,80];
// insertionSort(arr)
// console.log(arr)


// Binary search Tree

// class Node{
//    constructor(data){
//       this.data=data;
//       this.left=null;
//       this.right=null;
//    }
// }
// class Binarytree{
//    constructor(){
//       this.root=null;
//    }
//    isEmpty(){
//       return this.root===null;
//   }
//    insert(data){
//       const newNode=new Node(data)
//        if(this.isEmpty()){
//          this.root=newNode;
         
//        }else{
//          this.insertNode(this.root,newNode)

//        }
//    }

//    insertNode = (root,newNode) => {
//       if (newNode.data < root.data) {
//         if (root.left == null) {
//           root.left = newNode;
//         } else {
//           this.insertNode(root.left, newNode);
//         }
//       } else {
//         if (root.right == null) {
//           root.right = newNode;
//         } else {
//           this.insertNode(root.right, newNode);
//         }
//       }
//     };

//     search(root,data){
//       if(!root){
//          return false;
//       }
//       if(root.data===data){
//          return true;
//       }else if(data<root.data){
//          return this.search(root.left,data)
//       }else{
//         return this.search(root.right,data)
//       }
//     }
//     min(root){
//       if(!root){
//          return null;
//       }
//       if(!root.left && !root.right){
//         return root.data;
//       }else{
//          this.min(root.left)
//       }
      
//     }
//     max(root){
//       if(!root){
//          return null;
//       }
//       if(!root.right){
//          console.log("max number is:"+root.data)
//       }else{
//          this.max(root.right)
//       }
//     }
//    preOrder(root){
//       // if(this.isEmpty()){
//       //     return false;
//       // }
//       if(root){
//           console.log(root.data)
//           this.preOrder(root.left)
//           this.preOrder(root.right)
//       }
//  }
//  postOrder(root){
//    if(root){
//        this.postOrder(root.left)
//        this.postOrder(root.right);
//        console.log(root.data)
//    }
//   }
//  delete(value){
//    this.root=this.deleteNode(this.root,value)
//  }

//  deleteNode(root, value) {
//    if (root == null) {
//      return root;
//    }
//    if (value < root.data) {
//      root.left = this.deleteNode(root.left, value);
//    } else if (value > root.data) {
//      root.right = this.deleteNode(root.right, value);
//    } else {
//      if (!root.right && !root.left) {
//        return null;
//      } else if (!root.right) {
//        return root.left;
//      } else if (!root.left) {
//        return root.right;
//      }
//      var k = this.min(root.right);
//      console.log(k)
//      root.data=k;
//      root.right = this.deleteNode(root.right, root.data);
//    }
//    return root;
//  }
//  isBst(){
//    return this.isBstHelper(this.root,0,Infinity)

// }
// isBstHelper(node,min,max){
//    if(!node){
//            return true
//    }
//    if(node.data<min||node.data>max)
//            return false
//    return (
//            (this.isBstHelper(node.left, min, node.data - 1)) &&
//            (this.isBstHelper(node.right, node.data + 1, max))
//        );
                   
// }
 
// }
// const Bst=new Binarytree()
// Bst.insert(3)
// Bst.insert(7)
// Bst.insert(3)
// Bst.insert(15)
// Bst.insert(11)
// Bst.insert(8)
// Bst.postOrder(Bst.root)
// console.log("________________")
// // var k=search(Bst.root,15)
// // console.log(k)
// // Bst.min(Bst.root)
// // Bst.max(Bst.root)
// Bst.delete(7)
// Bst.postOrder(Bst.root)
// var res=Bst.isBst()
// console.log(res)
// console.log("value present in the tree?"+Bst.search(Bst.root,111))


// class MaxHeap{
//   constructor(){
//      this.heap=[]
//   }
//   findParentIndex(index){
//       var parentIndex=Math.floor((index-1)/2)
//       return parentIndex
//   }
//   swap(index1,index2){
//     [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
//   }
//   heapifyUp=(index)=>{
//     var parentIndex=this.findParentIndex(index)
//     if(parentIndex>=0 && this.heap[parentIndex]<this.heap[index]){
//       this.swap(parentIndex,index)
//       this.heapifyUp(parentIndex)
//     }
//   }
  
//   insert(value){
//     this.heap.push(value)
//     var index=this.heap.length-1
//     this.heapifyUp(index)
//   }
  
//   heapifyDown(index){
//      var leftIndex=2*index+1;
//      var rightIndex=2*index+2;
//      var largeIndex=index;
     
//      if(leftIndex < this.heap.length && this.heap[leftIndex]>this.heap[largeIndex]){
//        largeIndex=leftIndex
//      }
//      if(rightIndex < this.heap.length && this.heap[rightIndex]>this.heap[rightIndex]){
//         largeIndex=rightIndex
//      }
//      if(largeIndex!=index){
//        this.swap(largeIndex,index)
//        this.heapifyDown(largeIndex)
//      }
//   }
  
//   removeMax=()=>{
//      if(this.heap.length===0){
//       return null
//      }
//      if(this.heap.length==1){
//         return this.heap.pop()
//      }
//      this.heap[0]=this.heap.pop();
//      this.heapifyDown(0)
//   }

//   printHeap() {
//   var heap =` ${this.heap[0]} `
//   for(var i = 1; i<this.heap.length;i++) {
//     heap += ` ${this.heap[i]} `;
//   }
//   console.log(heap);
// }
// }
// const heap=new MaxHeap()
// heap.insert(10);
// heap.insert(5);
// heap.insert(15)
// heap.insert(2)
// heap.insert(20)

// heap.removeMax()
// // console.log("The removed value is "+res)
// heap.printHeap()


// class MaxHeap{
//   constructor(){
//      this.heap=[]
//   }
//   findParentIndex(index){
//       var parentIndex=Math.floor((index-1)/2)
//       return parentIndex
//   }
//   swap(index1,index2){
//     [this.heap[index1],this.heap[index2]]=[this.heap[index2],this.heap[index1]]
//   }

  
//   insert(value){
//     this.heap.push(value)
 
//   }
  
//   heapifyDown(index){
//      var leftIndex=2*index+1;
//      var rightIndex=2*index+2;
//      var largeIndex=index;
     
//      if(leftIndex < this.heap.length && this.heap[leftIndex]>this.heap[largeIndex]){
//        largeIndex=leftIndex
//      }
//      if(rightIndex < this.heap.length && this.heap[rightIndex]>this.heap[rightIndex]){
//         largeIndex=rightIndex
//      }
//      if(largeIndex!=index){
//        this.swap(largeIndex,index)
//        this.heapifyDown(largeIndex)
//      }
//   }
  
//   removeMax=()=>{
//      if(this.heap.length===0){
//       return null
//      }
//      if(this.heap.length==1){
//         return this.heap.pop()
//      }
//      this.heap[0]=this.heap.pop();
//      this.heapifyDown(0)
//   }

//   printHeap() {
//   var heap =` ${this.heap[0]} `
//   for(var i = 1; i<this.heap.length;i++) {
//     heap += ` ${this.heap[i]} `;
//   }
//   console.log(heap);
//  }
// }
// const heap=new MaxHeap();
// heap.insert(10);
// heap.insert(5);
// heap.insert(15);
// heap.insert(2);
// heap.insert(20)
// heap.printHeap();


// class MaxHeap {
//   constructor() {
//     this.heap = [];
//   }

//   getParentIndex(index) {
//     return Math.floor((index - 1) / 2);
//   }

//   getLeftChildIndex(index) {
//     return 2 * index + 1;
//   }

//   getRightChildIndex(index) { 
//     return 2 * index + 2;
//   }

//   swap(index1, index2) {
//     [this.heap[index1], this.heap[index2]] = [
//       this.heap[index2],
//       this.heap[index1],
//     ];
//   }
//   heapifyDown(index) {
//     const leftChildIndex = this.getLeftChildIndex(index);
//     const rightChildIndex = this.getRightChildIndex(index);
//     let largestIndex = index;

//     if (
//       leftChildIndex < this.heap.length &&
//       this.heap[leftChildIndex] > this.heap[largestIndex]
//     ) {
//       largestIndex = leftChildIndex;
//     }

//     if (
//       rightChildIndex < this.heap.length &&
//       this.heap[rightChildIndex] > this.heap[largestIndex]
//     ) {
//       largestIndex = rightChildIndex;
//     }

//     if (largestIndex !== index) {
//       this.swap(index, largestIndex);
//       this.heapifyDown(largestIndex);
//     }
//   }
//    heapSort(arr) {
//     const n = arr.length;
//     this.heap=arr;
//     // Build max heap
//     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//       this.heapifyDown(i);
//     }
  
//     // Extract elements one by one
//     for (let i = n - 1; i > 0; i--) {
//       [arr[0], arr[i]] = [arr[i], arr[0]];
//       this.heapifyDown(i);
//     }
  
//     return this.heap;
//   }
  
  
//   // heapify(arr){
//   //   this.heap=arr;
//   //   const startIdx = Math.floor((arr.length/2) -1);
//   //   for(var i=startIdx;i>=0;i--){
//   //       this.heapifyDown(i)
//   //   }
//   //   return this.heap
//   // }
 
// }
// const heap=new MaxHeap();
// const arr=[33,24,8,7,9,1,2]
// const res=heap.heapSort(arr)
// console.log(res);


// --------------------------------------
// class TrieNode{
//   constructor(){
//     this.children=new Map();
//     this.isEndofWord=false;
//   }
// }
// class Trie{
//   constructor(){
//      this.root=new TrieNode()
//   }
//   insert(word){
//     var curr=this.root;
//     for(var i=0;i<word.length;i++){
//       var char=word[i];
//       if(!curr.children.has(char)){
//         curr.children.set(char,new TrieNode())
//       }
//       curr=curr.children.get(char)
//     }
//     curr.isEndOfWord = true;
//   }
// }
// const trie=new Trie()
// trie.insert("jithin")
// trie.insert("kiran")


// class TrieNode {
//   constructor() {
//     this.childNode = new Map();
//     this.isEndOfWord = false;
//   }
// }

// class Trie {
//   constructor() {
//      this.root = new TrieNode();
//   }
  
//   insert(word) {
//     var current = this.root;
//     for (var i = 0; i < word.length; i++) {
//       var char = word[i];
//       if (!current.childNode.has(char)) {
//         current.childNode.set(char, new TrieNode());
//       }
//       current = current.childNode.get(char);
//     }
//     current.isEndOfWord = true;
//   }
// }

// const trie = new Trie();
// trie.insert("jithin");
// trie.insert("kiran");

// class TrieNode{
//   constructor() {
//     this.children=new Map()
//     this.isEndofWord=false;
//   }
// }
// class Trie{
//   constructor(){
//     this.root=new TrieNode()
//   }
//   insert(word){
//     var curr=this.root;
//     for(var i=0;i<word.length;i++){
//       var char=word[i];
//       if(!curr.children.has(char)){
//         curr.children.set(char,new TrieNode())
//       }
//       curr=curr.children.get(char)
//     }
//     curr.isEndOfWord=true;
//   }
//   search(word) {
//     let current = this.root;
//     for (let i = 0; i < word.length; i++) {
//       const char = word[i];
//       if (!current.children.has(char)) {
//         return false;
//       }
//       current = current.children.get(char);
//     }
//     return current.isEndOfWord;
//   }
//   startsWith(word) {
//     let current = this.root;
//     for (let i = 0; i < word.length; i++) {
//       const char = word[i];
//       if (!current.children.has(char)) {
//         return false;
//       }
//       current = current.children.get(char);
//     }
//     return true;
//   }
// }
// const trie=new Trie();
// trie.insert("helo");
// // console.log(trie.search("hel"))
// console.log(trie.startsWith("hel"));


// Binary SEarch tree-------------------------------------->
class Node{
  constructor(data) {
      this.data=data;
      this.left=null;
      this.right=null;
  }
}
class binarySearchTree{
  constructor(){
    this.root=null;
  }
  insert(data){
    const newNode=new Node(data)
    if(this.root==null){
      this.root=newNode
      return;
    }
    this.insertNode(this.root,newNode)
  }
  insertNode(root,newNode){
    if(newNode.data<root.data){
      if(root.left==null){
        root.left=newNode;
      }else{
        this.insertNode(root.left,newNode)
      }
    }
    else{
      if(root.right==null){
        root.right=newNode
      }else{
        this.insertNode(root.right,newNode);
      }
    }
  }

  // search(root,data){
  //   if(!root){
  //     return false;
  //   }
  //   if(root.data==data){
  //     return true;
  //   }
  //   else if(data<root.data){
  //     return this.search(root.left,data)
  //   }else{
  //    return this.search(root.right,data)
  //   }
  // }
  search(root,value){
    if(!root){
        return false;
    }
    if(value==root.data){
       return true;
    }
    else if(value<root.data){
       return this.search(root.left,value)
    }
    else {
       
       return this.search(root.right,value)
    }
  }
  min(root){
    if(!root.left){
       return root.data;
    }
    return this.min(root.left)
  }
  max(root){
    if(!root.right){
      return root.data
    }
    return this.max(root.right)
  }
  // deleteNode(data){
  //   this.root =this.delete(this.root,data)
  // }
  // delete(root,data){
  //   if(!root){
  //     return null
  //   } 
  //   if(data<root.data){
  //     root.left=this.delete(root.left,data)
  //   }
  //   else if(data>root.data){
  //     root.right=this.delete(root.right,data)
  //   }else{
  //     if(!root.right && !root.left){
  //       return null;
  //     }
  //     else if(!root.right){
  //       return root.left
  //     }else if(!root.left){
  //       return root.right;
  //     }
  //     var minValue=this.min(root.right);
  //     root.data=minValue;
  //     root.right=this.delete(root.right,root.data);
  //   }
  //   return root
  // }
  deleteNode(data){
    this.root=this.delete(this.root,data);
  }
  delete(root,data){
    if(!root){
      return null;
    }
    if(data<root.data){
      root.left=this.delete(root.left,data)
    }
    else if(data>root.data){
      root.right=this.delete(root.right,data)
    }else{
      if(!root.right && root.left){
        return null;
      }else if(!root.left){
        return root.right
      }else if(!root.right){
        return root.left
      }
      var minValue=this.min(root.right);
      root.data=minValue;
      root.right=this.delete(root.right);

    }
    return root;

  }
  isBst(){
    return this.checkBst(this.root,0,1)
  }
   checkBst=(root,min,max)=>{
       if(!root){
        return true;
       }
       if(root.data<min || root.data >max){
         return false;
       }
       return (
             (this.checkBst(root.left,min,root.data)) &&
              (this.checkBst(root.right,root.data,max))
            );
   }
   identical=(root1,root2)=>{
      if(!root1 && !root2){
        return true;
      }
      if(!root1|| !root2){
          return false;
      }
      if(root1.data!=root2.data){
        return false;
      }
      return this.identical(root1.left,root2.left) && this.identical(root1.right,root2.right);
   }
//    isBstHelper(node,min,max){
//     if(!node){
//             return true
//     }
//     if(node.data<min||node.data>max)
//             return false;
//     return (
//             (this.isBstHelper(node.left, min, node.data)) &&
//             (this.isBstHelper(node.right, node.data, max))
//         );
                    
// } 
  postOrder=(root)=>{
      if(root){
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.data)
      }
  }

}
const bst=new binarySearchTree();
const bst2=new binarySearchTree()
bst.insert(1);
bst.insert(5);
bst.insert(20);
bst.insert(30);
bst.insert(12);
bst.insert(1);
bst.insert(7);


bst2.insert(1);
bst2.insert(5);
bst2.insert(20);
bst2.insert(30);
bst2.insert(12);
bst2.insert(1);
// bst2.insert(17);
// bst.postOrder(bst.root)
// console.log(bst.search(bst.root,78))
// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))
// bst.deleteNode(20);
// var res=bst.isBst();
// console.log(res)
console.log(bst.identical(bst.root,bst2.root))
// bst.postOrder(bst.root)
