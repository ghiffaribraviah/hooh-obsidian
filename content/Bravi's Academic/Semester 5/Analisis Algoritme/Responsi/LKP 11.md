[[Bravi's Academic/Semester 5/Analisis Algoritme/Responsi/index|Analisis Algoritme]] - R2 <br>Ghiffari Bravia Hisham (G6401231050)

### Soal

>Tentukan nilai (V) maksimal yang bisa diambil dan item terpilih pada Knapsack 0-1 menggunakan Branch and Bounding dengan:

| ${Item(i)}$ |  A  |  B  |  C  |  D  |  E  |
| :---------: | :-: | :-: | :-: | :-: | :-: |
|  ${W(i)}$   |  4  |  3  |  7  |  3  |  5  |
|  ${V(i)}$   |  6  | 12  |  8  |  5  | 10  |
>Dengan berat (W) maksimal yang bisa ditampung tas adalah 11

### Jawaban
Algoritma umum dalam mengerjakan soal di atas menggunakan *Branch and Bounding* adalah sebagai berikut:

#### Konsep

![[Pasted image 20251117133851.png]]

Algoritma *Branch and Bounding* untuk persoalan knapsack dilakukan dengan melakukan ekspansi pada setiap node. Node akar dimulai dari item dengan rasio tertinggi dan membuat dua cabang, yaitu:
- Keputusan jika item tersebut dipilih
- Keputusan jika item tersebut tidak dipilih

Cabang yang akan dikunjungi berikutnya ditentukan dengan menggunakan *bounding*. Pada persoalan Knapsack, penentuan cabang dilakukan menggunakan *upper bound*, yaitu potensi value maksimal yang didapat dari mengekspansi node tersebut. *Upper bound* dihitung dengan menjumlahkan value dari node tersebut ditambah semua sisa item hingga kapasitas penuh:
$$
UB_i = current\_value(i) + \sum_{x = i + 1}^{y}{V(x)}
$$
Nilai y dapat berubah selama penjumlahan semua berat item tidak melebihi kapasitas maksimal:
$$
(current\_weight(i) + \sum_{x = i + 1}^{y}{W(x)}) < max\_weight
$$
Apabila UB suatu node melebihi *max_value*, yaitu value maksimal yang didapatkan (solusi dari soal), maka update *max_value* = UB

Sebelum menghitung UB, nilai *current_value* dan *current_weight* dari node dapat dihitung menggunakan nilai *current_value* dan *current_weight* dari node sebelumnya ditambah dengan value dan weight dari item di node tersebut
$$
current\_value(i) = current\_value(i-1) + V(i)
$$
$$
current\_weight(i) = current\_weight(i-1) + W(i)
$$

Proses *pruning*, yaitu memotong cabang / jalur dari ekspansi, dilakukan dengan membandingkan nilai UB dari node tersebut dengan *max_value* nya:
- Apabila ${UB = max\_value}$, cabang akan diekspansi
- Apabila ${UB < max\_value}$, cabang akan diprune / tidak diekspansi
- Apabila ${UB > max\_value}$, update *max_value* (skenario akan menjadi opsi pertama)

Algoritma *Branch and Bounding* dapat diringkas menjadi berikut:
1. Inisiasi *max_weight* dan *max_value* = 0
2. Inisiasi *current_weight* = 0 dan *current_value* = 0 untuk Node Akar
3. Hitung nilai UB untuk Node Akar
4. Inisiasi Node Akar dalam *priority queue*
5. Ekspansi setiap node dalam *priority queue* (kita sebut Node X)
6. Jika ${UB_X \lt max\_value}$, maka abaikan Node X dan lanjut ke node berikutnya dalam *priority queue* (kembali ke langkah 4)
7. Jika Node X adalah item terakhir, maka lanjut ke node berikutnya dalam *priority queue* (kembali ke langkah 4)
8. Lakukan perhitungan *current_value*, *current_weight*, dan UB untuk setiap keputusan pada node tersebut
	- Jika item pada node dipilih, Node ${X_1}$ dan ${UB_{X1}}$
	- Jika item pada node tidak dipilih, Node ${X_0}$ dan ${UB_{X0}}$
9. Apabila *current_weight* dari node melebihi *max_weight*, maka abaikan node tersebut (tidak dimasukkan dalam *priority queue*)
10. Pada perhitungan Node ${X_1}$ dan ${X_0}$, lakukan update *max_value* apabila skenario di bawah terjadi:
	- Jika ${UB_{X1} > max\_value}$, update ${max\_value = UB_{X1}}$
	- Jika ${UB_{X0} > max\_value}$, update ${max\_value = UB_{X0}}$
11. Masukkan Node ${X_1}$ dan ${X_0}$ ke dalam *priority queue* sesuai urutan nilai UB (dimulai dari yang terbesar). Node tidak dimasukkan jika ${current\_value(X_i) = UB_{Xi}}$
12. Ulangi dari langkah 4 untuk node berikutnya hingga *priority queue* kosong
13. Solusi = *max_value*

#### Inisiasi awal
Langkah pertama ini dilakukan untuk membuat inisiasi semua variabel sekaligus menentukan urutan item yang akan diambil terlebih dahulu:

##### Mengurutkan Item
Pengurutan item dilakukan dengan melihat rasio setiap item:
$$
R(i) = \frac {V(i)}{W(i)}
$$
- ${R(i)}$ = Rasio item
- ${V(i)}$ = Value item
- ${W(i)}$ = Weight / Berat item

Pengurutan dilakukan dengan memiliki item dengan rasio terbesar dan terurut hingga item dengan rasio terkecil. Berikut nilai rasio dari setiap item pada soal:
- ${A = \frac 6 4 = 1.5}$
- ${B = \frac {12} 3 = 4}$
- ${C = \frac 8 7 \approx 1.143 }$
- ${D = \frac 5 3 \approx 1.667}$
- ${E = \frac 10 5 = 2}$

Berdasarkan rasionya, urutan item yang akan dikunjungi adalah B, E, D, A, C

##### Inisiasi Variabel Awal
Terdapat variabel awal yang diperlukan dalam mengerjakan soal, yaitu:
- *max_weight* = berat maksimal yang dapat diambil
- *max_value* = value maksimal yang didapat (solusi dari soal)
- UB = *upper bound*, yaitu potensi value maksimal yang didapatkan dari sisa item
- *prio_queue* = *priority queue* untuk item / node yang dikunjungi. Penentuan urutan berdasarkan nilai UB tertinggi dari node
- *current_value* = nilai value dari node tersebut
- *current_weight* = nilai weight dari node tersebut

Nilai awal untuk masing-masing variabel sebagai berikut:
- *max_weight* = 11 (dari soal)
- *max_value* = 0
- *prio_queue* = [] (queue kosong)

#### Proses *Branch and Bounding*
##### Perhitungan Node Akar (Node 0)
Node akar dihitung dengan item B:
- ${current\_value = 0}$
- ${current\_weight = 0}$
- ${UB_0 = current\_value + V(B) + V(E) + V(D) = 27}$

Masukkan Node 0 ke dalam *priority queue*. Berikut update variabel setelah memasukkan Node 0:
- ${max\_value = 27}$ (update dari ${UB_0}$)
- ${prio\_queue = [Node\;0\;(UB = 27)]}$

##### Ekspansi Node 0
Karena ${UB_0 = max\_value}$ dan Node 0 menentukan pilihan untuk Item B, maka ekspansi dilanjutkan (Node 1 dan Node 2).

###### Node 1 (Dengan B)
Perhitungan data Node 1:
- ${current\_value = 0 + V(B) = 12}$
- ${current\_weight = 0 + W(B) = 3}$
- ${UB_1 = current\_value + V(E) + V(D) = 27}$

###### Node 2 (Tanpa B)
Perhitungan data Node 2:
- ${current\_value = 0}$
- ${current\_weight = 0}$
- ${UB_2 = current\_value + V(E) + V(D) = 15}$

###### Hasil Akhir
Masukkan Node 1 dan 2 ke dalam *priority queue*. Berikut update variabel setelah memasukkan kedua Node:
- ${max\_value = 27}$
- ${prio\_queue = [Node\;1\;(UB = 27),\;Node\;2\;(UB = 15)]}$

##### Ekspansi Node 1 (Dengan B)
Karena ${UB_1 = max\_value}$ dan Node 1 menentukan pilihan untuk Item E, maka ekspansi dilanjutkan (Node 3 dan Node 4).

###### Node 3 (Dengan E)
Perhitungan data Node 3:
- ${current\_value = 12 + V(E) = 22}$
- ${current\_weight = 3 + W(E) = 8}$
- ${UB_3 = current\_value + V(D) = 27}$

###### Node 4 (Tanpa E)
Perhitungan data Node 4:
- ${current\_value = 12}$
- ${current\_weight = 3}$
- ${UB_4 = current\_value + V(D) = 15}$

###### Hasil Akhir
Masukkan Node 3 dan 4 ke dalam *priority queue*. Berikut update variabel setelah memasukkan kedua Node:
- ${max\_value = 27}$
- ${prio\_queue = [Node\;3\;(UB = 27),\;Node\;2\;(UB = 15),\;Node\;4\;(UB = 15)]}$

##### Ekspansi Node 3 (Dengan B dan E)
Karena ${UB_3 = max\_value}$ dan Node 3 menentukan pilihan untuk Item D, maka ekspansi dilanjutkan (Node 5 dan Node 6).

###### Node 5 (Dengan D)
Perhitungan data Node 5:
- ${current\_value = 22 + V(D) = 27}$
- ${current\_weight = 8 + W(D) = 11}$
- ${UB_5 = current\_value = 27}$

###### Node 6 (Tanpa D)
Perhitungan data Node 6:
- ${current\_value = 22}$
- ${current\_weight = 8}$
- ${UB_6 = current\_value = 22}$

###### Hasil Akhir
Masukkan Node 6 ke dalam *priority queue* (Node 5 tidak dimasukkan karena *current_value(5)* = ${UB_5}$) . Berikut update variabel setelah memasukkan Node 6:
- ${max\_value = 27}$
- ${prio\_queue = [Node\;6\;(UB = 22),\;Node\;2\;(UB = 15),\;Node\;4\;(UB = 15)]}$

##### Ekspansi Node 6 (Dengan B dan E, tanpa D)
Karena ${UB_6 < max\_value}$, maka Node 6 diabaikan *(pruned)*. Berikut update variabel setelah melakukan ekspansi:
- ${max\_value = 27}$
- ${prio\_queue = [Node\;2\;(UB = 15),\;Node\;4\;(UB = 15)]}$

##### Ekspansi Node 2 (Tanpa B)
Karena ${UB_2 < max\_value}$, maka Node 2 diabaikan (*pruned*). Berikut update variabel setelah melakukan ekspansi:
- ${max\_value = 27}$
- ${prio\_queue = [Node\;4\;(UB = 15)]}$

##### Ekspansi Node 4 (Dengan B, Tanpa E)
Karena ${UB_4 < max\_value}$, maka Node 4 diabaikan (*pruned*). Berikut update variabel setelah melakukan ekspansi:
- ${max\_value = 27}$
- ${prio\_queue = []}$

#### Kesimpulan
Berdasarkan proses *Branch and Bounding* yang telah terjadi, didapatkan solusi optimal yaitu:
- ${max\_value = 27}$
- item terpilih = B, E, D

Verifikasi jawaban:
- ${Weight = W(B) + W(E) + W(D) = 3 + 5 + 3 = 11}$
- ${Value = V(B) + V(E) + V(D) = 12 + 10 + 5 = 27}$
