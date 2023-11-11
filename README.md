# Basic Challange (Two-Knights)

`Weekly Coding Challenge #10829`

# TWO KNIGHTS

## Permasalahan

Tugas kamu adalah menghitung dengan `k=1,2,...,n` dari banyaknya cara dua kuda dapat ditempatkan pada `k x k` papan catur sehingga mereka tidak saling menyerang. Sebagai gambaran, kuda hanya dapat berjalan dengan mengikuti pola `L`.

## Input

Input yang diberikan hanya memiliki tipe data integer untuk `n`

## Output yang diharapkan akan seperti berikut:

`Input:`
8

`Output:`
0
6
28
96
252
550
1056
1848

## Fungsionalitas

1. countWaysToPlaceKnights(n):

- Fungsi ini mengambil bilangan bulat n sebagai masukan, mewakili ukuran papan catur (n x n).
- Ini menginisialisasi hasil array kosong untuk menyimpan jumlah cara untuk setiap ukuran papan.

2. hitunganCara(k):

- Fungsi ini mengambil bilangan bulat k sebagai masukan, yang mewakili ukuran papan catur (k x k).
- Pertama-tama ia memeriksa apakah ukuran papannya adalah 1. Jika demikian, tidak ada cara untuk menempatkan dua ksatria, sehingga mengembalikan 0.
- Ini menghitung jumlah kotak di papan catur menggunakan totalSquares = k \* k.
- Ini menghitung jumlah total cara untuk menempatkan dua ksatria tanpa mempertimbangkan serangan menggunakan rumus (totalSquares \* (totalSquares - 1)) / 2.
- Kemudian menghitung jumlah posisi menyerang (posisi di mana ksatria dapat menyerang satu sama lain) dan menguranginya dari total cara.

3. Contoh Penggunaan:

- Kode menyetel n ke 8 (ukuran papan catur) dan memanggil countWaysToPlaceKnights(n).
- Ini mencetak hasilnya, yaitu larik yang berisi jumlah cara menempatkan dua ksatria untuk setiap ukuran papan dari 1 hingga 8.

## Output

![image](/img/output.png)
