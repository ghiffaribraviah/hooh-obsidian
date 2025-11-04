[[Bravi's Academic/Semester 5/Analisis Algoritme/Responsi/index|Analisis Algoritme]] - R2 <br>Ghiffari Bravia Hisham (G6401231050)

### Soal 1

>Sebutkan perbedaan metode DnC dan DP!

Perbedaan antara metode *Divide and Conquer* (DnC) dan *Dynamic Programming* (DP) terletak pada beberapa hal, yaitu:

|    Fitur    |                                     *Divide and Conquer* (DnC)                                     |                                             *Dynamic Programming* (DP)                                             |
| :---------: | :------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------: |
| Sub-masalah |                       Memecahkan masalah menjadi sub-masalah yang independen                       |                               Memecah masalah menjadi sub-masalah yang tumpah tindih                               |
| Penyimpanan |                              Tidak menyimpan solusi dari sub-masalah                               |                          Menyimpan solusi dari sub-masalah dalam sebuah tabel atau larik                           |
|  Efisiensi  | Kurang efisien jika sub-masalah yang sama muncul berulang kali karena akan dihitung berulang-ulang | Sangat efisien untuk masalah dengan sub-masalah yang tumpah tindih karena setiap sub-masalah hanya dihitung sekali |
|   Contoh    |                               Merge Sort, Quick Sort, Binary Search                                |                              Deret Fibonacci, 0/1 Knapsack, Perkalian Rantai Matriks                               |

### Soal 2

>Tentukan jumlah perkalian minimal pada perkalian matriks ${A(4\times10)}$, ${B(10\times3)}$, ${C(3\times12)}$, ${D(12\times20)}$, ${E(20\times7)}$ dan urutannya, kerjakan dengan menggunakan metode *dynamic programming*!

#### Pendahuluan
Sebelum mengerjakan soal ini, data ukuran masing-masing matriks dapat diubah menjadi array satu dimensi, yaitu ${p}$ dengan format sebagai berikut:
$$
p = [p_0, p_1, p_2, \dots, p_n]
$$
dengan suatu matriks ${A_i}$ berukuran ${p_{i - 1} \times p_{i}}$

Untuk mengerjakan soal ini, diperlukan dua tabel yaitu:
- ${m[i,j]}$ = Menyimpan jumlah perkalian skalar minimal untuk menghitung produk matriks dari ${M_i}$ sampai ${M_j}$
- ${s[i,j]}$ = Menyimpan indeks k (titik pemisahan) yang memberikan hasil minimal untuk ${m[i,j]}$
- ${i}$ dan ${j}$ adalah penunjuk matriks kiri dan kanan (dimulai dari 1)

Algoritme yang digunakan pada soal ini adalah:
- Inisiasi nilai awal ${m[i, j] = 0}$ untuk ${i = j}$
- Mencari nilai ${m[i, j] = min(m[i, k] + m[k+1, j] + p_{i-1} \times p_k \times p_j)}$ dimulai dari ${L = 1}$ hingga ${L = 5}$ dengan ${k}$ adalah indeks pemisah (${i \le k \lt j}$) dan di simpan ke ${s[i, j]}$
- ${L = j - i + 1}$

#### Inisiasi Awal
Berikut adalah inisiasi awal untuk array ${p}$ :
$$
p = [4, 10, 3, 12, 20, 7]
$$
Berikut adalah inisiasi awal untuk ${m[i, j]}$ dengan ${i = j}$ (L = 1):
- ${m[1, 1] = 0}$
- ${m[2, 2] = 0}$
- ${m[3, 3] = 0}$
- ${m[4, 4] = 0}$
- ${m[5, 5] = 0}$

#### Mencari ${m[i, j]}$ untuk L = 2
Tidak ada variasi nilai k untuk pencarian nilai ini. Nilai k yang memenuhi adalah ${k = i}$

##### ${m[1, 2]}$ dengan ${k = 1}$
- ${m[1, 2] = m[1, 1] + m[2, 2] + p_0 \times p_1 \times p_2}$
- ${m[1, 2] = 0 + 0 + (4 \times 10 \times 3)}$
- ${m[1, 2] = 120}$
- ${s[1, 2] = 1}$

##### ${m[2, 3]}$ dengan ${k = 2}$
- ${m[2, 3] = m[2, 2] + m[3, 3] + p_1 \times p_2 \times p_3}$
- ${m[2, 3] = 0 + 0 + (10 \times 3 \times 12)}$
- ${m[2, 3] = 360}$
- ${s[2, 3] = 2}$

##### ${m[3, 4]}$ dengan ${k = 3}$
- ${m[3, 4] = m[3, 3] + m[4, 4] + p_2 \times p_3 \times p_4}$
- ${m[3, 4] = 0 + 0 + (3 \times 12 \times 20)}$
- ${m[3, 4] = 720}$
- ${s[3, 4] = 3}$

##### ${m[4, 5]}$ dengan ${k = 4}$
- ${m[4, 5] = m[4, 4] + m[5, 5] + p_3 \times p_4 \times p_5}$
- ${m[4, 5] = 0 + 0 + (12 \times 20 \times 7)}$
- ${m[4, 5] = 1680}$
- ${s[4, 5] = 4}$

#### Mencari ${m[i, j]}$ untuk L = 3
Terdapat tiga nilai yang perlu dicari untuk L = 3, yaitu ${m[1, 3]}$, ${m[2, 4]}$, dan ${m[3, 5]}$

##### ${m[1, 3]}$
Nilai k yang memenuhi adalah ${k = 1, 2}$
###### Untuk ${k = 1}$
- ${m[1, 3] = m[1, 1] + m[2, 3] + p_0 \times p_1 \times p_3}$
- ${m[1, 3] = 0 + 360 + (4 \times 10 \times 12)}$
- ${m[1, 3] = 840}$
###### Untuk ${k = 2}$
- ${m[1, 3] = m[1, 2] + m[3, 3] + p_0 \times p_2 \times p_3}$
- ${m[1, 3] = 120 + 0 + (4 \times 3 \times 12)}$
- ${m[1, 3] = 264}$
###### Kesimpulan
Nilai terkecil untuk ${m[1, 3]}$ didapatkan ketika ${k = 2}$
- ${m[1, 3] = 264}$
- ${s[1, 3] = 2}$

##### ${m[2, 4]}$
Nilai k yang memenuhi adalah ${k = 2, 3}$
###### Untuk ${k = 2}$
- ${m[2, 4] = m[2, 2] + m[3, 4] + p_1 \times p_2 \times p_4}$
- ${m[2, 4] = 0 + 720 + (10 \times 3 \times 20)}$
- ${m[2, 4] = 1320}$
###### Untuk ${k = 3}$
- ${m[2, 4] = m[2, 3] + m[4, 4] + p_1 \times p_3 \times p_4}$
- ${m[2, 4] = 360 + 0 + (10 \times 12 \times 20)}$
- ${m[2, 4] = 2760}$
###### Kesimpulan
Nilai terkecil untuk ${m[2, 4]}$ didapatkan ketika ${k = 2}$
- ${m[2, 4] = 1320}$
- ${s[2, 4] = 2}$

##### ${m[3, 5]}$
Nilai k yang memenuhi adalah ${k = 3, 4}$
###### Untuk ${k = 3}$
- ${m[3, 5] = m[3, 3] + m[4, 5] + p_2 \times p_3 \times p_5}$
- ${m[3, 5] = 0 + 1680 + (3 \times 12 \times 7)}$
- ${m[3, 5] = 1932}$
###### Untuk ${k = 4}$
- ${m[3, 5] = m[3, 4] + m[5, 5] + p_2 \times p_4 \times p_5}$
- ${m[3, 5] = 720 + 0 + (3 \times 20 \times 7)}$
- ${m[3, 5] = 1140}$
###### Kesimpulan
Nilai terkecil untuk ${m[3, 5]}$ didapatkan ketika ${k = 4}$
- ${m[3, 5] = 1140}$
- ${s[3, 5] = 4}$

#### Mencari ${m[i, j]}$ untuk L = 4
Terdapat dua nilai yang perlu dicari untuk L = 4, yaitu ${m[1, 4]}$ dan ${m[2, 5]}$.

##### ${m[1, 4]}$
Nilai k yang memenuhi adalah ${k = 1, 2, 3}$
###### Untuk ${k = 1}$
- ${m[1, 4] = m[1, 1] + m[2, 4] + p_0 \times p_1 \times p_4}$
- ${m[1, 4] = 0 + 1320 + (4 \times 10 \times 20)}$
- ${m[1, 4] = 2120}$
###### Untuk ${k = 2}$
- ${m[1, 4] = m[1, 2] + m[3, 4] + p_0 \times p_2 \times p_4}$
- ${m[1, 4] = 120 + 720 + (4 \times 3 \times 20)}$
- ${m[1, 4] = 1080}$
###### Untuk ${k = 3}$
- ${m[1, 4] = m[1, 3] + m[4, 4] + p_0 \times p_3 \times p_4}$
- ${m[1, 4] = 264 + 0 + (4 \times 12 \times 20)}$
- ${m[1, 4] = 1224}$
###### Kesimpulan
Nilai terkecil untuk ${m[1, 4]}$ didapatkan ketika ${k = 2}$
- ${m[1, 4] = 1080}$
- ${s[1, 4] = 2}$

##### ${m[2, 5]}$
Nilai k yang memenuhi adalah ${k = 2, 3, 4}$
###### Untuk ${k = 2}$
- ${m[2, 5] = m[2, 2] + m[3, 5] + p_1 \times p_2 \times p_5}$
- ${m[2, 5] = 0 + 1140 + (10 \times 3 \times 7)}$
- ${m[2, 5] = 1350}$
###### Untuk ${k = 3}$
- ${m[2, 5] = m[2, 3] + m[4, 5] + p_1 \times p_3 \times p_5}$
- ${m[2, 5] = 360 + 1680 + (10 \times 12 \times 7)}$
- ${m[2, 5] = 2880}$
###### Untuk ${k = 4}$
- ${m[2, 5] = m[2, 4] + m[5, 5] + p_1 \times p_4 \times p_5}$
- ${m[2, 5] = 1320 + 0 + (10 \times 20 \times 7)}$
- ${m[2, 5] = 2720}$
###### Kesimpulan
Nilai terkecil untuk ${m[2, 5]}$ didapatkan ketika ${k = 2}$
- ${m[2, 5] = 1350}$
- ${s[2, 5] = 2}$

#### Mencari ${m[i, j]}$ untuk L = 5
Terdapat satu nilai yang perlu dicari untuk L = 5, yaitu ${m[1, 5]}$.

##### ${m[1, 5]}$
Nilai k yang memenuhi adalah ${k = 1, 2, 3, 4}$
###### Untuk ${k = 1}$
- ${m[1, 5] = m[1, 1] + m[2, 5] + p_0 \times p_1 \times p_5}$
- ${m[1, 5] = 0 + 1350 + (4 \times 10 \times 7)}$
- ${m[1, 5] = 1630}$
###### Untuk ${k = 2}$
- ${m[1, 5] = m[1, 2] + m[3, 5] + p_0 \times p_2 \times p_5}$
- ${m[1, 5] = 120 + 1140 + (4 \times 3 \times 7)}$
- ${m[1, 5] = 1344}$
###### Untuk ${k = 3}$
- ${m[1, 5] = m[1, 3] + m[4, 5] + p_0 \times p_3 \times p_5}$
- ${m[1, 5] = 264 + 1680 + (4 \times 12 \times 7)}$
- ${m[1, 5] = 2280}$
###### Untuk ${k = 4}$
- ${m[1, 5] = m[1, 4] + m[5, 5] + p_0 \times p_4 \times p_5}$
- ${m[1, 5] = 1080 + 0 + (4 \times 20 \times 7)}$
- ${m[1, 5] = 1640}$
###### Kesimpulan
Nilai terkecil untuk ${m[1, 5]}$ didapatkan ketika ${k = 2}$
- ${m[1, 5] = 1344}$
- ${s[1, 5] = 2}$

#### Kesimpulan
Berikut adalah tabel ${m[i, j]}$ dan ${s[i, j]}$ dari hasil pencarian:
##### Tabel ${m[i, j]}$

| i \ j |  1  |  2  |  3  |  4   |     5      |
| :---: | :-: | :-: | :-: | :--: | :--------: |
| **1** |  0  | 120 | 264 | 1080 | ***1344*** |
| **2** |     |  0  | 360 | 1320 |    1350    |
| **3** |     |     |  0  | 720  |    1140    |
| **4** |     |     |     |  0   |    1680    |
| **5** |     |     |     |      |     0      |

##### Tabel ${s[i, j]}$ 

| i \ j |  1  |  2  |  3  |  4  |    5    |
| :---: | :-: | :-: | :-: | :-: | :-----: |
| **1** |     |  1  |  2  |  2  | ***2*** |
| **2** |     |     |  2  |  2  |    2    |
| **3** |     |     |     |  3  |    4    |
| **4** |     |     |     |     |    4    |
| **5** |     |     |     |     |         |

##### Penjelasan

###### Jumlah Perkalian Minimal:  
Dari tabel ${m}$, nilai ${m[1, 5]}$ menunjukkan jumlah perkalian skalar minimal yang diperlukan untuk mengalikan kelima matriks tersebut, yaitu 1344.

###### Urutan Perkalian Optimal:  
Urutan perkalian optimal dapat ditentukan dengan menelusuri tabel ${s}$ secara rekursif.

Pertama, ${s[1, 5] = 2}$ menunjukkan pemisahan terjadi antara matriks kedua (B) dan matriks ketiga (C) sehingga persamaan menjadi 
$$
{(A \times B)\times (C \times D \times E)}  
$$

Selanjutnya, untuk operasi ${(C \times D \times E)}$, nilai ${s[3, 5] = 4}$ menunjukkan pemisahan terjadi antara matriks keempat (D) dan matriks kelima (E) sehingga persamaan menjadi
$$
(C \times D) \times E
$$

Dengan menggabungkan kedua hasil di atas, urutan perkalian optimal adalah: 
$$
((A \times B) \times ((C \times D) \times E))
$$

### Soal 3

>Sebutkan permasalahan lain yang bisa diselesaikan dengan metode *dynamic programming*!

Masalah-masalah lain yang dapat diselesaikan dengan metode *Dynamic Programming* (DP) adalah

| Problem                          | Referensi                                                     |
| :------------------------------- | :------------------------------------------------------------ |
| *Shortest Path (Floyd-Warshall)* | https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/ |
| *Coin Change Problem*            | https://www.geeksforgeeks.org/coin-change-dp-7/               |
| *Edit Distance*                  | https://www.geeksforgeeks.org/edit-distance-dp-5/             |
| *Rod Cutting Problem*            | https://www.geeksforgeeks.org/cutting-a-rod-dp-13/            |
