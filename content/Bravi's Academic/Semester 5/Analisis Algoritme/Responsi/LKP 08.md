[[Bravi's Academic/Semester 5/Analisis Algoritme/Responsi/index|Analisis Algoritme]] - R2 <br>Ghiffari Bravia Hisham (G6401231050)

### Soal 1

>Jelaskan apa yang dimaksud dengan teknik *Divide, Conquer, and Combine*!

Teknik *Divide and Conquer* (DnC) merupakan sebuah desain algoritma yang memecah suatu masalah menjadi sub-masalah yang lebih kecil, menyelesaikan sub-masalah tersebut secara independen bila ukurannya cukup kecil untuk diselesaikan secara langsung, dan kemudian menggabungkan solusi-solusi tersebut sehingga mendapatkan solusi untuk masalah awalnya. Tiga tahapan utama dalam teknik DnC yaitu:

1. *Divide*, tahap ini merupakan proses untuk memecahkan masalah asli menjadi sejumlah sub-masalah yang lebih kecil. Tahap ini dilakukan secara rekursif hingga ukuran sub-problem menjadi cukup kecil untuk diselesaikan secara langsung (atau memenuhi *base case*)
   
2. *Conquer*, tahap ini merupakan penyelesaian sub-problem yang cukup kecil (*base case*) secara langsung tanpa memerlukan pemecahan sub-problem lebih lanjut.

3. *Combine*, tahap ini merupakan proses untuk menggabungkan solusi dari masing-masing sub-problem sehingga membentuk solusi untuk permasalahan awal

### Soal 2

>Kenapa tahap *combine* kadang diperlukan dan kadang tidak diperlukan?

Tahap *combine* akan diperlukan ketika solusi akhir dari masalah awal tidak dapat diselesaikan hanya dengan mendapatkan solusi dari sub-problem yang ada. Untuk menyelesaikan masalah awal, perlu dilakukan penggabungan dari solusi-solusi sub-problem yang ada sehingga menjadi suatu solusi untuk permasalahan awal. Misalnya pada *Merge Sort*, proses *combine* diperlukan untuk menggabungkan setiap subarray terurut menjadi suatu array yang lebih besar

Tahap *combine* dalam DnC tidak diperlukan apabila solusi akhir dari masalah awal dapat ditemukan hanya dengan menemukan solusi dari sub-problem atau sebagian dari sub-problem yang ada. Misalnya pada *Binary Search*, tahap *combine* tidak diperlukan dalam algoritma karena index elemen key yang dicari langsung didapat ketika menemukan solusi pada sub-problem yang berisi elemen key.

### Soal 3

>Apakah semua masalah pada DnC bisa diselesaikan dengan metode rekursif? Lalu apakah juga berlaku sebaliknya, semua masalah pada rekursif selalu bisa diselesaikan dengan metode DnC?

Secara umum, semua masalah DnC dapat diselesaikan menggunakan metode rekursif dan merupakan metode yang paling optimal dalam menyelesaikan masalah DnC. Hal ini terjadi karena struktur DnC sangat cocok dengan konsep rekursi, yaitu pemanggilan kembali fungsi yang sama dalam dirinya sendiri:

1. Pada tahap *Divide*, konsep rekursi digunakan pada setiap sub-problem yang belum memenuhi *base case* untuk memecah dirinya sendiri menjadi bagian-bagian yang lebih kecil
2. Pada tahap *Conquer*, konsep rekursi digunakan untuk menyelesaikan langsung sub-problem yang cukup kecil. Implementasi dalam konsep rekursinya adalah ketika sub-problem cukup kecil untuk memenuhi *base case*, maka algoritma penyelesaiannya dijalankan khusus untuk menyelesaikan sub-problem tersebut (tidak lagi melakukan rekursi)
3. Pada tahap *Combine*, proses penggabungan solusi dijalankan setelah solusi dari masing-masing sub-problem telah direturn/ditemukan pada setiap problem.

Namun, tidak semua masalah rekursif dapat diselesaikan dengan metode DnC. Terdapat beberapa kriteria yang harus dipenuhi agar suatu problem dapat diselesaikan dengan metode DnC, yaitu:

1. Setiap sub-problem bersifat independen. Solusi dari suatu sub-problem tidak boleh bergantung dari suatu sub-problem yang lain. Misalnya, pembuatan deret fibonacci ${F(n) = F(n-1) + F(n-2)}$ tidak dapat dikerjakan dengan metode DnC karena penentuan nilai ${F(n)}$ memerlukan nilai ${F(n-1)}$ dan ${F(n-2)}$ ditemukan terlebih dahulu.
2. Masalah dapat dipecah menjadi dua sub-problem atau lebih. Misalnya, perhitungan faktorial ${n! = n\times(n-1)!}$ tidak dapat dikerjakan dengan metode DnC. Meskipun masalah ini dapat diselesaikan secara rekursif, namun tidak ada proses *Divide* yang dapat dilakukan pada masalah tersebut

Apabila salah satu atau lebih dari syarat-syarat ini tidak terpenuhi, maka masalah rekursif tidak dapat diselesaikan menggunakan metode DnC

### Soal 4

>Jika ada sebuah kode Quick Sort
```python
def quicksort(arr):
	if len(arr) <= 1:
		return arr
	else:
		pivot = arr[0]
		less = [x for x in arr[1:] if x <= pivot]
		greatert = [x for x in arr[1:] if x > pivot]
		return quicksort(less) + [pivot] + quicksrot(greater)
```
> Buatlah simulasi untuk permasalahan Quick Sort untuk data:
$$
arr[9] = \begin{bmatrix}20, 7, 12, 9, 8, 14\end{bmatrix}
$$
>Dengan ketentuan:  
>a. Pivot pada elemen terakhir  
>b. Pivot pada elemen pertama  
>c. Pivot pada tengah-tengah array  
>d. Carilah relasi rekurensi pada kasus bestcasenya saja (${T(n) = aT(n/b) + f(n)}$)  
>e. Hitung kompleksitas pada kasus bestcasenya saja (Pakai Teorema Master)  
>f. Jelaskan pengaruh pivot terhadap Quicksort  
>g. Pada saat kapan Quicksort lebih baik dari Mergesort  
>h. Apa yang dimaksud dengan istilah "inplace" pada Quicksort  
>i. Apa pengaruh inplace terhadap kompleksitas memori Quicksort yang menyebabkan ia lebih unggul dari Mergesort

Program yang tertera di soal merupakan algoritma *Quick Sort* menggunakan metode *Naive Partition*, yaitu membuat subarray baru yang berisi semua elemen yang lebih yang lebih kecil dari pivot dan semua elemen yang lebih besar dari pivot. Berikut merupakan simulasi terjadi untuk setiap kemungkinan pivot yang ada:

#### A. Pivot pada Elemen Terakhir
Terdapat tiga proses *Divide*, tujuh proses *Conquer*, dan tiga proses *Combine* yang terjadi, yaitu:
##### *Divide*

|  Process   | Pivot |                        From                         |                                To                                 |
| :--------: | :---: | :-------------------------------------------------: | :---------------------------------------------------------------: |
| *Divide 1* |  14   | ${\begin{bmatrix}20, 7, 12, 9, 8, 14\end{bmatrix}}$ | ${\begin{bmatrix}7, 12, 9, 8\end{bmatrix}}$ + ${[14]}$ + ${[20]}$ |
| *Divide 2* |   8   |                  ${[7, 12, 9, 8]}$                  |                  ${[7]}$ + ${[8]}$ + ${[12, 9]}$                  |
| *Divide 3* |   9   |                     ${[12, 9]}$                     |                    ${[]}$ + ${[9]}$ + ${[12]}$                    |

##### *Conquer*

|   Process   | Element  |    From    |
| :---------: | :------: | :--------: |
| *Conquer 1* | ${[14]}$ | *Divide 1* |
| *Conquer 2* | ${[20]}$ | *Divide 1* |
| *Conquer 3* | ${[7]}$  | *Divide 2* |
| *Conquer 4* | ${[8]}$  | *Divide 2* |
| *Conquer 5* |  ${[]}$  | *Divide 3* |
| *Conquer 6* | ${[9]}$  | *Divide 3* |
| *Conquer 7* | ${[12]}$ | *Divide 3* |

##### Combine

|    From    |     Element 1     | Element 2 |  Element 3  |          Result           |
| :--------: | :---------------: | :-------: | :---------: | :-----------------------: |
| *Divide 3* |      ${[]}$       |  ${[9]}$  |  ${[12]}$   |        ${[9, 12]}$        |
| *Divide 2* |      ${[7]}$      |  ${[8]}$  | ${[9, 12]}$ |     ${[7, 8, 9, 12]}$     |
| *Divide 1* | ${[7, 8, 9, 12]}$ | ${[14]}$  |  ${[20]}$   | ${[7, 8, 9, 12, 14, 20]}$ |
|            |                   |           |             |                           |

#### B. Pivot pada Elemen Pertama
Terdapat empat proses *Divide*, sembilan proses *Conquer*, dan empat proses *Combine* yang terjadi, yaitu:
##### *Divide*

|  Process   | Pivot |                        From                         |                                To                                 |
| :--------: | :---: | :-------------------------------------------------: | :---------------------------------------------------------------: |
| *Divide 1* |  20   | ${\begin{bmatrix}20, 7, 12, 9, 8, 14\end{bmatrix}}$ | ${\begin{bmatrix}7, 12, 9, 8, 14\end{bmatrix}}$ + ${[20]}$ + ${[]}$ |
| *Divide 2* |   7   | ${\begin{bmatrix}7, 12, 9, 8, 14\end{bmatrix}}$ | ${[]}$ + ${[7]}$ + ${\begin{bmatrix}12, 9, 8, 14\end{bmatrix}}$ |
| *Divide 3* |  12   | ${\begin{bmatrix}12, 9, 8, 14\end{bmatrix}}$ | ${\begin{bmatrix}9, 8\end{bmatrix}}$ + ${[12]}$ + ${[14]}$ |
| *Divide 4* |   9   |                  ${\begin{bmatrix}9, 8\end{bmatrix}}$                  |                    ${[8]}$ + ${[9]}$ + ${[]}$                    |

##### *Conquer*

|   Process   | Element  |    From    |
| :---------: | :------: | :--------: |
| *Conquer 1* | ${[20]}$ | *Divide 1* |
| *Conquer 2* |  ${[]}$  | *Divide 1* |
| *Conquer 3* |  ${[]}$  | *Divide 2* |
| *Conquer 4* | ${[7]}$  | *Divide 2* |
| *Conquer 5* | ${[12]}$ | *Divide 3* |
| *Conquer 6* | ${[14]}$ | *Divide 3* |
| *Conquer 7* | ${[8]}$  | *Divide 4* |
| *Conquer 8* | ${[9]}$  | *Divide 4* |
| *Conquer 9* |  ${[]}$  | *Divide 4* |

##### *Combine*

|    From    |       Element 1       | Element 2 |     Element 3      |          Result           |
| :--------: | :-------------------: | :-------: | :----------------: | :-----------------------: |
| *Divide 4* |        ${[8]}$        |  ${[9]}$  |       ${[]}$       |        ${[8, 9]}$         |
| *Divide 3* |      ${[8, 9]}$       | ${[12]}$  |      ${[14]}$      |    ${[8, 9, 12, 14]}$     |
| *Divide 2* |        ${[]}$         |  ${[7]}$  | ${[8, 9, 12, 14]}$ |   ${[7, 8, 9, 12, 14]}$   |
| *Divide 1* | ${[7, 8, 9, 12, 14]}$ | ${[20]}$  |       ${[]}$       | ${[7, 8, 9, 12, 14, 20]}$ |

#### C. Pivot pada tengah-tengah array
Terdapat empat proses *Divide*, sembilan proses *Conquer*, dan empat proses *Combine* yang terjadi, yaitu:
##### *Divide*

|  Process   | Pivot |                        From                         |                                To                                 |
| :--------: | :---: | :-------------------------------------------------: | :---------------------------------------------------------------: |
| *Divide 1* |   9   | ${\begin{bmatrix}20, 7, 12, 9, 8, 14\end{bmatrix}}$ | ${\begin{bmatrix}7, 8\end{bmatrix}}$ + ${[9]}$ + ${\begin{bmatrix}20, 12, 14\end{bmatrix}}$ |
| *Divide 2* |   8   |                  ${\begin{bmatrix}7, 8\end{bmatrix}}$                  |                    ${[7]}$ + ${[8]}$ + ${[]}$                    |
| *Divide 3* |  12   | ${\begin{bmatrix}20, 12, 14\end{bmatrix}}$ | ${[]}$ + ${[12]}$ + ${\begin{bmatrix}20, 14\end{bmatrix}}$ |
| *Divide 4* |  14   |                  ${\begin{bmatrix}20, 14\end{bmatrix}}$                  |                    ${[]}$ + ${[14]}$ + ${[20]}$                    |

##### *Conquer*

|   Process   | Element  |    From    |
| :---------: | :------: | :--------: |
| *Conquer 1* | ${[9]}$  | *Divide 1* |
| *Conquer 2* | ${[7]}$  | *Divide 2* |
| *Conquer 3* | ${[8]}$  | *Divide 2* |
| *Conquer 4* |  ${[]}$  | *Divide 2* |
| *Conquer 5* |  ${[]}$  | *Divide 3* |
| *Conquer 6* | ${[12]}$ | *Divide 3* |
| *Conquer 7* |  ${[]}$  | *Divide 4* |
| *Conquer 8* | ${[14]}$ | *Divide 4* |
| *Conquer 9* | ${[20]}$ | *Divide 4* |

##### *Combine*

|    From    |     Element 1     | Element 2 |  Element 3  |          Result           |
| :--------: | :---------------: | :-------: | :---------: | :-----------------------: |
| *Divide 2* |      ${[7]}$      |  ${[8]}$  |    ${[]}$   |        ${[7, 8]}$         |
| *Divide 4* |      ${[]}$       |  ${[14]}$ |   ${[20]}$  |        ${[14, 20]}$       |
| *Divide 3* |      ${[]}$       |  ${[12]}$ | ${[14, 20]}$ |     ${[12, 14, 20]}$      |
| *Divide 1* |      ${[7, 8]}$     |  ${[9]}$  | ${[12, 14, 20]}$ | ${[7, 8, 9, 12, 14, 20]}$ |

#### D. Relasi Rekurensi pada Kasus Bestcase
Pada kasus terbaik, *Quick Sort* membagi array menjadi dua sub-array yang ukurannya sama besar. Hal ini dapat terjadi bila pivot yang dipilih merupakan elemen median dari array tersebut

Relasi rekurensi untuk kasus terbaik *Quick Sort* adalah ${T(n) = 2T(n/2) + O(n)}$

#### E. Kompleksitas Bestcase (Master Theorem)
Dengan menggunakan *Master Theorem*, didapatkan kompleksitas dari Bestcase untuk *Quick Sort* adalah ${\Theta(n\log n)}$

| a   | b   | ${n^{\log_ba}}$ | ${f(n)}$ | Jenis Kasus | ${T(n)}$            |
| --- | --- | --------------- | -------- | ----------- | ------------------- |
| 2   | 2   | ${n}$           | ${n}$    | 2           | ${\Theta(n\log n)}$ |

#### F. Pengaruh Pivot Terhadap Quicksort
Penentuan elemen pivot pada algoritma *Quicksort* sangat berpengaruh pada performa algoritma yang dijalankan. Penentuan elemen pivot berpengaruh pada hal-hal berikut:

1. Keseimbangan Partisi, Pivot yang baik adalah yang dapat membagi array menjadi dua subarray yang ukurannya hampir sama. Semakin seimbang ukuran antara kedua sub-array, maka performa *Quicksort* juga akan semakin baik
2. Jumlah Perbandingan dan Pertukaran, Pivot yang baik akan memengaruhi jumlah perbandingan dan pertukaran saat proses partisi. Semakin baik performa *Quicksort*, maka jumlah perbandingan dan pertukaran yang terjadi juga akan semakin sedikit

#### G. Quicksort vs Mergesort
Algoritma *Quicksort* lebih baik dari *Mergesort* dalam hal efisiensi memori. Hal ini terjadi karena algoritme *Quicksort* melakukan perubahan terhadap array di dalam dirinya sendiri alih-alih membuat salinan / sub-array baru

#### H. Istilah "In-place" pada Quicksort
Istilah "in-place" pada *Quicksort* memiliki arti bahwa algoritma itu melakukan pengurutan elemen-elemennya di dalam array itu sendiri tanpa memerlukan ruang memori tambahan. Tidak seperti *Mergesort* yang memerlukan ruang memori tambahan untuk menyimpan setiap sub-arraynya, *Quicksort* tidak memerlukan memori tambahan selain untuk input / array awalnya

#### I. Pengaruh "In-place" terhadap Kompleksitas Quicksort
Konsep "in-place" pada *Quicksort* sangat memengaruhi efisiensi dari algoritma pengurutannya, terutama dalam hal kompleksitas ruang yang digunakan oleh algoritma tersebut.
