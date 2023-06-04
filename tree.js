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
bst.insert(10)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.insert(5)
bst.insert(13)
bst.insert(18)

console.log(bst.search(bst.root,20))
console.log('isBinarySearchtree is null ?',bst.isEmpty())

bst.preOrder(bst.root)
console.log("_____________")
bst.inOrder(bst.root)
console.log("_____________")
bst.postOrder(bst.root)
console.log("_____________")
bst.Bfs(bst.root)
console.log("_____________")
console.log("min value is "+bst.min(bst.root))
console.log("max value is "+bst.max(bst.root))
bst.delete(15)
bst.preOrder(bst.root)



