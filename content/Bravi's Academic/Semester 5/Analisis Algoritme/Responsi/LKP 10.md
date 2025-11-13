[[Bravi's Academic/Semester 5/Analisis Algoritme/Responsi/index|Analisis Algoritme]] - R2 <br>Ghiffari Bravia Hisham (G6401231050)

### Soal  1

>Jelaskan apa yang kamu ketahui tentang metode greedy!

Metode Greedy merupakan metode untuk mencari suatu solusi dari suatu permasalahan dengan waktu sesingkat mungkin tanpa melihat apakah jawaban tersebut optimal atau tidak. Metode Greedy sering digunakan untuk masalah-masalah yang menentukan nilai maksimal atau minimum dari suatu masalah. Beberapa contoh masalah yang dapat diselesaikan menggunakan Metode Greedy yaitu:
- Knapsack Problem
- Huffman Code
- Coin Exchange

### Soal 2

>Kapan metode greedy memberikan solusi optimal dan kapan metode greedy menjadi tidak optimal?

Pertama, tidak semua masalah dapat dikerjakan menggunakan Metode Greedy. Permasalahan yang dapat diselesaikan menggunakan Metode Greedy adalah permasalahan yang dapat diselesaikan tanpa melihat kondisi secara keseluruhan. Artinya, pilihan solusi yang sesuai selalu dapat ditentukan pada setiap iterasi / proses tanpa memikirkan konsekuensi berikutnya.

Meskipun kriteria tersebut dipenuhi, tidak semua masalah yang diselesaikan dengan Metode Greedy dapat memberikan solusi yang optimal. Permasalahan yang dapat diselesaikan dengan Metode Greedy memiliki dua properti sebagai berikut:

- Kriteria pemilihan (*Choice Property*) yang baik, yaitu penentuan keputusan yang baik pada setiap subsolusi
- *Optimal Substructure*, yaitu solusi yang optimal pada masalah dapat memberikan solusi yang optimal pada setiap submasalah

Metode Greedy dapat menjadi tidak optimal apabila salah satu atau kedua properti tersebut tidak dipenuhi

### Soal 3

>Seluruh Anak Ilkom sedang melakukan perjalanan menuju acara nonton bareng "The Era's Tour"
>
>Perjalanan mereka membutuhkan waktu 10 menit. Seorang mahasiswa berinisiatif ingin memutar lagu dari awal perjalanan hingga tiba. Jika list lagu memiliki rincian sebagai berikut:


|          Judul          |      Durasi       | Tahun |
| :---------------------: | :---------------: | :---: |
|   You belong with me    |      2 Menit      | 2008  |
|       Blank Space       | 2 Menit, 30 Detik | 2014  |
| I Knew You Were Trouble | 2 Menit, 15 Detik | 2012  |
|      Shake it off       | 2 Menit, 45 Detik | 2014  |
|       Love Story        |     150 Detik     | 2008  |
|    Back To Desember     |      2 Menit      | 2010  |
|        Enchanted        |     90 Detik      | 2010  |
|        Anti-Hero        |      1 Menit      | 2022  |
|      Cruel Summer       |      2 Menit      | 2022  |

>A. Dengan konsep greedy, berapa jumlah lagu maksimal yang dapat diputar selama perjalanan  
>B. Jika ada mahasiswa ingin mendengarkan secara nostalgia dan ingin mendengarkan lagu dari yang paling lawas dulu, berapa lagu yang akan diputar selama perjalanan

#### Jawaban 3A
Dengan menggunakan konsep Greedy, kita dapat menemukan jumlah lagu maksimal dengan memilih *lagu dengan durasi tersingkat* terlebih dahulu (Untuk lagu dengan durasi yang sama, asumsikan diurutkan berdasarkan Tahun dari yang terendah):
- Anti-Hero -> 1 Menit (60 Detik)
- Enchanted -> 90 Detik
- You Belong With Me -> 2 Menit (120 Detik)
- Back To Desember -> 2 Menit (120 Detik)
- Cruel Summer -> 2 Menit (120 detik)

Terlihat bahwa jumlah lagu maksimal yang dapat diputar selama perjalanan 10 menit adalah 5 lagu dengan total waktu 8 Menit 30 Detik

#### Jawaban 3B
Untuk menjawab persoalan ini, kita dapat mengurutkan lagu berdasarkan tahunnya (mulai dari tahun terlama) dan memilih *lagu dengan tahun terlawas* terlebih dahulu (Untuk lagu dengan tahun yang sama, asumsikan diurutkan berdasarkan durasi dari yang terpendek):
- You Belong With Me (2008) -> 2 Menit (120 Detik)
- Love Story (2008) -> 150 Detik
- Enchanted (2010) -> 90 Detik
- Back To Desember (2010) -> 2 Menit (120 Detik)
- Anti-Hero (2022) -> 1 Menit (60 Detik)

Terlihat bahwa jumlah lagu maksimal yang dapat diputar selama perjalanan 10 menit dengan memerhatikan tahun publikasi adalah 5 lagu dengan total waktu 9 Menit
