addNumber=(data)=>{
    if(data==5){
       console.log(data)

        return;
    }
   console.log(data)
   addNumber(data+1)
}
const sum=addNumber(1)
