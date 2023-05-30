class Hashtable{
    constructor(size){
        this.table=new Array(size)
        this.size=size;
    }
    hash(key){
        let total=0;
        for(var i=0; i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size;
    }

    set(key,value){
        const index=this.hash(key)
        this.table[index]=value;
    }
    get(key){
        const index=this.hash(key)
        return this.table[index]
    }
    remove(key){
        const index=this.hash(key)
        this.table[index]=undefined;
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i, this.table[i])
            }
        }
    }
}
const table=new Hashtable(50)
table.set("name","Bruce")
table.set("age",25)
table.display()

console.log(table.get("name"))
table.remove("name")
table.display()