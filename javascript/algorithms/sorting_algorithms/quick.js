//IN PROGRESS
function pivotHelper(array){
  let start = 0;
  let end = array.length-1;
  let pivotCounter = 0;  
  for(let i = 0; i < end; i++ )
    if(array[i] < array[start])
      ++pivotCounter;
  array = swap(array, start ,pivotCounter)

  return array;
}

function swap(array, start, pivotCounter){
  let temp = array[start];
  array[start] = array[pivotCounter];
  array[pivotCounter] = temp;

  return array;
}

let array = [7,4,3,6,7,8];
console.log(pivotHelper(array))


//function quickSort(array, left, right){
//  const len = array.length; 
//  let pivot;
//  let partitionIndex;
//
//  if(left < right) {
//    pivot = right;
//    partitionIndex = partition(array, pivot, left, right);
//    
//    //sort left and right
//    quickSort(array, left, partitionIndex - 1);
//    quickSort(array, partitionIndex + 1, right);
//  }
//  return array;
//}
//   
//function partition(array, pivot, left, right){
//  let pivotValue = array[pivot];
//  let partitionIndex = left;
//
//  for(let i = left; i < right; i++) {
//    if(array[i] < pivotValue){
//      swap(array, i, partitionIndex);
//      partitionIndex++;
//    }
//  }
//  swap(array, right, partitionIndex);
//  return partitionIndex;
//}
//
//function swap(array, firstIndex, secondIndex){
//    var temp = array[firstIndex];
//    array[firstIndex] = array[secondIndex];
//    array[secondIndex] = temp;
//}
//