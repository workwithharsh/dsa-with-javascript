function selectionSort(arr) {
  const n = arr.length;

  // Iteration 1
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i; // Constant ops - k

    // Iteration 2
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j; // Constant ops - k
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Constant ops - k
    }
  }

  return arr; // Constant ops - k
}

// -----------------------------------------------------------------------

/* 

Time Complexity

1st iteration: from i = 0 to n - 1
We can say that it goes from i = 0 to n (ignoreing -1 because it is small value)
Then time complexity should be O(n)

2nd iteration: from j = i + 1 to n
We can say that it goes from j = i + 1 to n
Then time complexity should be O(n)

Now, in both iteration O(n) AND O(n) = O(n^2)

So, time complexity should be O(n^2) 

*/
