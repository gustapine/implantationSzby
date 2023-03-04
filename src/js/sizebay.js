function findEven (){
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const even = []

    for(i=0; array.length > i; i++){
        if(array[i] % 2==0)
       even.push(array[i])
    }
    alert(even);
  
}

function findOdd (){
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const odd = [];

    for(i=0; array.length > i; i++){
        if(array[i] % 2==1)
       odd.push(array[i])
    }
    alert(odd);
}
