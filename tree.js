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
}
const bst=new binarySearchTree()
bst.insert(10)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.insert(5)

console.log(bst.search(bst.root,20))
console.log('isBinarySearchtree is null ?',bst.isEmpty())

bst.preOrder(bst.root)
console.log("_____________")
bst.inOrder(bst.root)

