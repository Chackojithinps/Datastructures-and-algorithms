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

   printAllLeaves=(root)=>{
      if(root==null){
        return null;
      }
      if(!root.left && !root.right){
        console.log(root.data)
        return 
      }
      if(root.left){
        this.printAllLeaves(root.left)
      }
      if(root.right){
        this.printAllLeaves(root.right)
      }
    
   }

   printNonLeaves=(root) => {
    if (!root || (!root.left && !root.right)) {
      return;
    }
    if (root.left || root.right) {
      console.log(root.data);
    }
    if (root.left) {
      this.printNonLeaves(root.left);
    }
    if (root.right) {
      this.printNonLeaves(root.right);
    }
  }

   isBst(){
    return this.isBstHelper(this.root,0,Infinity)

}
getHeight(node) {
    if (node === null) {
      return -1; // Height of an empty tree is -1
    }

    const leftHeight = this.getHeight(node.left);
    const rightHeight = this.getHeight(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }
  rootCount=(root)=>{
     if(root==null){
        return 0
     }
     var leftcount=this.rootCount(root.left);
     var rightcount=this.rootCount(root.right)
     return leftcount+rightcount+1;
  }
isBstHelper(node,min,max){
    if(!node){
            return true
    }
    if(node.data<min||node.data>max)
            return false;
    return (
            (this.isBstHelper(node.left, min, node.data)) &&
            (this.isBstHelper(node.right, node.data, max))
        );
                    
} 

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



}
const bst=new binarySearchTree()
const bst2=new binarySearchTree()
bst.insert(8)
bst.insert(5)
bst.insert(4)
bst.insert(1)
bst.insert(2)
bst.insert(3)
bst.insert(5)
bst.insert(12)
bst.insert(9)
bst.insert(16)

// bst2.insert(8)
// bst2.insert(5)
// bst2.insert(4)
// bst2.insert(6)
// // bst2.insert(5)
// bst2.insert(12)
// bst2.insert(9)
// bst2.insert(6)

// console.log(bst.search(bst.root,20))
// console.log('isBinarySearchtree is null ?',bst.isEmpty())

bst.postOrder(bst.root)
console.log("_______________")
// bst2.preOrder(bst2.root)
// bst.printAllLeaves(bst.root)
// bst.printNonLeaves(bst.root)
// console.log(bst.getHeight(bst.root))
console.log(bst.rootCount(bst.root))

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

// console.log("is valid"+bst.isBst())
// console.log("Are BSTs identical? ", bst.areIdentical(bst2));



