// Buatlah fungsi untuk mendapatkan jumlah semua bilangan genap dalam nested objek
// Input :
// {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// }
// Output: 6
 
// Input:
// {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 4}, ee: 'car'}
// };
// Output: 12

function sumEvenNumbers(obj) {
  let sum = 0;

  for (const key in obj) {
    if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      // Jika nilai adalah bilangan genap, tambahkan ke jumlah
      sum += obj[key];
    } else if (typeof obj[key] === 'object') {
      // Jika nilai adalah objek, rekursif panggil fungsi pada objek tersebut
      sum += sumEvenNumbers(obj[key]);
    }
  }

  return sum;
}

// Contoh penggunaan
const input1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
};
console.log(sumEvenNumbers(input1)); // Output: 6

const input2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 4 }, ee: 'car' }
};
console.log(sumEvenNumbers(input2)); // Output: 12
