//check wheatheer the binary search tree is empty or not 


// class Node{
//     constructor(data) {
//         this.data=data;
//         this.left=null;
//         this.right=null;
//     }
// }
// class binarySearchTree{
//     constructor(){
//         this.root=null;
//     }
//     isEmpty(){
//         return this.root===null;
//     }
// }
// const bst=new binarySearchTree()

// console.log('isBinarySearchtree is null ?',bst.isEmpty())






// insert----------------------------------------------------->


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
    isEmpty(){
        return this.root===null;
    }
    insert(value){
        const newNode=new Node(value)
       if(this.isEmpty()){
          this.root=newNode;
       }else{
         this.insertNode(this.root,newNode)
       }
    }
    insertNode(root,newNode){
        if(newNode.data<root.data){
            if(root.left===null){
                root.left=newNode;
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right==null){
                root.right=newNode;

            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
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
    preOrder(root){
        // if(this.isEmpty()){
        //     return false;
        // }
        if(root){
            console.log(root.data)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
   }
   inOrder(root){
    if(root){

        this.inOrder(root.left)
        console.log(root.data)
        this.inOrder(root.right)
    }
   }
   postOrder(root){
    if(root){
        this.postOrder(root.left)
        this.postOrder(root.right);
        console.log(root.data)
    }
   }
   Bfs(root){
      const queue=[];
      queue.push(root)
      while(queue.length){
        var curr=queue.shift()
        console.log(curr.data)
        if(curr.left){
            queue.push(curr.left)
        }
        if(curr.right){
            queue.push(curr.right)
        }
      }
   }
   min(root){
     if(!root.left){
        return root.data
     }
     return this.min(root.left)

   }
   max(root){
    if(!root.right){
        return root.data
    }
    return this.max(root.right)
   }


   delete(value){
    this.root=this.deleteNode(this.root,value)
   }


   deleteNode(root,value){
    if(root==null){
        return root;
    }
    if(value<root.data){
        root.left=this.deleteNode(root.left,value)
    }else if(value>root.data){
        root.right=this.deleteNode(root.right,value)
    }
    else{
        if(!root.left && !root.right){
            return null;
        }
        if(!root.left){
            return root.right;
        }else if(!root.right){
            return root.left
        }
        var k=this.min(root.right)
        root.data=k;
        root.right=this.deleteNode(root.right,root.data)
        console.log(k+" vaue ")
    }
    return root;
   }

   isBst(){
    return this.isBstHelper(this.root,0,Infinity)

}
isBstHelper(node,min,max){
    if(!node){
            return true
    }
    if(node.data<min||node.data>max)
            return false
    return (
            (this.isBstHelper(node.left, min, node.data)) &&
            (this.isBstHelper(node.right, node.data, max))
        );
                    
} 

// identical=(root1,root2)=>{
//    if(!root1 && !root2){
//       return true
//    }
//    if(!root1 || !root2){
//      return false
//    }
//    if(root1.data!=root2.data){
//     return false;
//    }
//    return this.identical(root1.left,root2.left) && this.identical(root1.right,root2.right)
// }

areIdentical(bst2) {
    return this.areIdenticalHelper(this.root, bst2.root);
  }
areIdenticalHelper(node1, node2) {
    if (!node1 && !node2) {
      return true;
    }
    if (!node1 || !node2) {
      return false;
    }
    if (node1.data !== node2.data) {
      return false;
    }
    return (
      this.areIdenticalHelper(node1.left, node2.left) &&
      this.areIdenticalHelper(node1.right, node2.right)
    );
  }

//    delete(value){
//      this.root=this.deleteNode(this.root,value)
//    }
//    deleteNode(root,value){
//      if(root==null){
//         return root
//      }
//      if(value<root.data){
//         root.left=this.deleteNode(root.left,value)
//      }else if(value>root.data){
//         root.right=this.deleteNode(root.right,value)
//      }else{
//         if(!root.right && !root.left){
//             return null;
//         }
//         if(!root.right){
//             return root.left
//         }
//         else if(!root.left){
//             return root.right
//         }
//         root.value=this.min(root.right)
//         root.right=this.deleteNode(root.right,root.value);
//      }
//      return root;
//    }


}
const bst=new binarySearchTree()
const bst2=new binarySearchTree()
bst.insert(8)
bst.insert(5)
bst.insert(4)
bst.insert(6)
// bst.insert(5)
bst.insert(12)
bst.insert(9)
bst.insert(16)

bst2.insert(8)
bst2.insert(5)
bst2.insert(4)
bst2.insert(6)
// bst2.insert(5)
bst2.insert(12)
bst2.insert(9)
bst2.insert(6)

// console.log(bst.search(bst.root,20))
// console.log('isBinarySearchtree is null ?',bst.isEmpty())

bst.preOrder(bst.root)
console.log("_______________")
bst2.preOrder(bst2.root)


// console.log("_____________")
// bst.inOrder(bst.root)
// console.log("_____________")
// bst.postOrder(bst.root)
// console.log("_____________")
// bst.Bfs(bst.root)
// console.log("_____________")
// console.log("min value is "+bst.min(bst.root))
// console.log("max value is "+bst.max(bst.root))
// bst.delete(7)
// bst.postOrder(bst.root)

console.log("is valid"+bst.isBst())
console.log("Are BSTs identical? ", bst.areIdentical(bst2));



