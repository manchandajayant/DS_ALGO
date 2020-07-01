console.log("bubble");

//bubble sort
//bubble sort works on comparing and swapping elements
//the largest value bubbles to the top

//less optimised way
function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      //swap
      //console.log(arr);
      if (arr[j] > arr[j + 1]) {
        //console.log("arr[j]", arr[j], arr[j + 1]);
        var temp = arr[j];
        arr[j] = arr[j + 1];
        //console.log("arr[j]=arr[j+1]", arr[j + 1], temp);
        arr[j + 1] = temp;
        //console.log("temp", temp, arr[j]);
      }
    }
  }
  return arr;
}
console.log(bubbleSort([13, 4, 29, 90, 1, 3, 10, 0]));

//optimised way
function bubbleSortOptimised(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      //swap
      //console.log(arr);
      if (arr[j] > arr[j + 1]) {
        //console.log("arr[j]", arr[j], arr[j + 1]);
        var temp = arr[j];
        arr[j] = arr[j + 1];
        //console.log("arr[j]=arr[j+1]", arr[j + 1], temp);
        arr[j + 1] = temp;
        //console.log("temp", temp, arr[j]);
      }
    }
  }
  return arr;
}

console.log(bubbleSortOptimised([13, 4, 29, 90, 1, 3, 10, 0]));
