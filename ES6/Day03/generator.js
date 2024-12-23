let arr =["Ahmed",'Zeka',"mona",22]
arr[Symbol.iterator]=arrFn;
function* arrFn(){
    for(let key in arr){

        yield arr[key];
    }

}
for (let value of arr) {
    console.log(value)
}