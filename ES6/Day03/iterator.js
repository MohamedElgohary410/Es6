let data={
    fname:'choclate',
    color:'black',
    price:250
}

data[Symbol.iterator]=toIter;

function toIter(){
    let entry=Object.entries(this)
    let i=0
    return{
        next: ()=>{
                if(i<entry.length){
                    return{
                value:entry[i++],
                done:false
            }
            }else{
                return{
                value:undefined,
                done:true
            }
            }
        }
    }
}

for(let [key,value] of data){
   console.log(value);
}