//IN PROGRESS
//IN PROGRESS
//IN PROGRESS
//IN PROGRESS
//IN PROGRESS
function quickSort(array,start=0, end=array.length-1){
  if (start < end){
    let pivotIndex = pivotHelper(array, start, end);
    quickSort(array, start, pivotIndex-1);
    quickSort(array, pivotIndex+1, end);
  }
  return array;
}

function pivotHelper(array, start=0, end=array.length+1){
  let pivot = array[start];
  let ctr = start;  
  for(var i = start+1; i < end; i++ )
    if(pivot > array[i]){
      ctr++;
      swap(array, start, i);
    }
  swap(array, start, i);
  return ctr;
}

function swap(array, start, i){
  let temp = array[start];
  array[start] = array[i];
  array[i] = temp;
}

let array = [9,7,4,3,6,7,8];

console.log(quickSort(array));
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