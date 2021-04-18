function inserstionSort(arr){
  for(var i = 1; i < arr.length;i++){
     var crr = arr[i];
     for(var j = i-1; j >= 0 && arr[j] > crr; j-- ){
      arr[j+1] = arr[j];
     }
     arr[j+1] = crr;
  }
  return arr
}

console.log(inserstionSort([6,4,2,1,4,6,-4,7]));
//function insertionSort(array) {
//  const length = array.length;
//	for (let i = 0; i < length; i++) {
//		if (array[i] < array[0]) {
//      //move number to the first position
//      array.unshift(array.splice(i,1)[0]);
//    } else {
//      // only sort number smaller than number on the left of it. This is the part of insertion sort that makes it fast if the array is almost sorted.
//      if (array[i] < array[i-1]) {
//        //find where number should go
//        for (var j = 1; j < i; j++) {
//          if (array[i] >= array[j-1] && array[i] < array[j]) {
//            //move number to the right spot
//            array.splice(j,0,array.splice(i,1)[0]);
//          }
//        }
//      }
//    }
//	}
//}
//