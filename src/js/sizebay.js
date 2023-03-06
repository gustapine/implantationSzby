function findEven (even){
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const even = []
    const odd = [];

    for(i=0; array.length > i; i++){
        if(array[i] % 2==0){
       even.push(array[i])
        }else{
            odd.push(array[i])
        }
       }
    
    if(even){
    alert("Os números pares são: "+even);
    }else{
    alert("Os números ímpares são: "+odd);
    }
}
