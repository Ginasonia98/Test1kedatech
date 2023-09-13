// 1. Buatlah fungsi dengan input array of number untuk mengurutkan angka dari terbesar ke terkecil dengan manual tanpa fungsi bawaan javascript
// Input : [1, 2, 4, 3, 5, 3, 2, 1]			
// Expected Output : [5, 4, 3, 3, 2, 2, 1, 1]

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        // Tukar elemen jika elemen saat ini lebih kecil dari elemen berikutnya
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

// Contoh penggunaan
const inputArray = [1, 2, 4, 3, 5, 3, 2, 1];
const sortedArray = bubbleSort(inputArray);
console.log(sortedArray); // Output: [5, 4, 3, 3, 2, 2, 1, 1]
