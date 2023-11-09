// Fungsi untuk menghitung banyaknya cara menempatkan dua kuda pada papan k x k
function countWaysToPlaceKnights(n) {
  let result = [];

  for (let k = 1; k <= n; k++) {
    let ways = countWays(k);
    result.push(ways);
  }

  return result;
}

// Fungsi untuk menghitung banyaknya cara menempatkan dua kuda pada papan k x k
function countWays(k) {
  // Jika ukuran papan adalah 1, tidak ada cara
  if (k === 1) {
    return 0;
  }

  // Hitung total sel pada papan
  let totalSquares = k * k;

  // Hitung banyaknya cara tanpa memperhitungkan serangan
  let waysWithoutAttack = (totalSquares * (totalSquares - 1)) / 2;

  // Kurangi posisi yang saling menyerang (diagonal dan L)
  let attackingPositions = 2 * (k - 1) * (k - 2) * 2;
  let ways = waysWithoutAttack - attackingPositions;

  return ways;
}

// Contoh penggunaan dengan input 8
let n = 8;
let result = countWaysToPlaceKnights(n);
console.log(result);
