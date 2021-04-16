function pop(array, index){
    let newArray = new Array(array.length-1);
    for(let i = 0, j = 0; i < newArray.length;i++,j++){
        newArray[i] = array[j];
        if(i === index) newArray[i] = array[++j];
    }return newArray;
}