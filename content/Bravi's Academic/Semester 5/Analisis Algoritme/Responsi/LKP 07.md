[[Bravi's Academic/Semester 5/Analisis Algoritme/Responsi/index|Analisis Algoritme]]- R2 <br>Ghiffari Bravia Hisham (G6401231050)

### A. Insertion vs Merge vs Quick

>Diberikan array ${A = [9, 5, 6, 3, 3, 8, 1]}$
>(a) Jalankan 2 iterasi pertama Insertion Sort (tunjukkan posisi elemen kunci & array setelah tiap iterasi).
>	- Sebutkan kapan Insertion bisa mencapai O(n) 
>	
>(b) Tulis pseudocode ringkas MERGE (bagian dari Merge Sort) dan jelaskan mengapa stabil
>	- Lakukan proses merge terakhir pada array A jika dilakukan Merge Sort dari awal 
>	
>(c) Gunakan Quick Sort dengan pivot = elemen tengah dari indeks \[ℓ...r].
>	- Tunjukkan hasil satu langkah partisi pada array A (posisi batas kiri/kanan setelah partisi).

#### Jawaban (a)
##### Penjelasan Algoritme
Insertion Sort berjalan dengan melakukan dua kali perulangan bertingkat, yaitu:
- Perulangan pertama untuk melakukan iterasi setiap elemen pada array, mulai dari elemen kedua hingga elemen terakhir (untuk memudahkan penjelasan, disebut key)
	- ${key = arr[i]\;;\; i = 1, 2, \dots, n-1}$
- Perulangan kedua pada setiap iterasi di perulangan pertama untuk melakukan iterasi pada setiap elemen sebelum key sampai elemen pertama pada array (untuk memudahkan penjelasan, disebut ${arr[j]}$)
	- ${arr[j] \;;\; j = i-1, \dots, 0}$

Proses sorting dilakukan dengan cara menukar elemen pada posisi key dengan ${arr[j]}$ (${arr[j + 1] = arr[j]}$) ketika kondisi ${arr[j] > key}$ terpenuhi. Karena seluruh elemen sebelum suatu key telah terurut dari iterasi sebelumnya, maka perulangan kedua dapat berhenti lebih awal ketika kondisi ${key \gt arr[j]}$ tidak terpenuhi karena dipastikan tidak ada lagi nilai ${arr[j]}$ setelahnya yang lebih besar dari key. Pada akhir perulangan kedua, elemen key akan dimasukkan pada ${arr[j + 1]}$ untuk nilai j terakhir.

##### Proses Insertion Sort untuk ${A = [9, 5, 6, 3, 3, 8, 1]}$
Berikut proses insertion sort untuk dua iterasi pertama pada ${A = [9, 5, 6, 3, 3, 8, 1]}$: 
1. Iterasi pertama ke-1: ${key = A[1] = 5}$
	1. Iterasi kedua ke-1: ${A[j] = A[i-1] = A[0] = 9}$
		- ${A[j] \gt key}$ bernilai benar (${9 \gt 5}$) 
		- ${A[j+1] = A[1] = 9}$
		- ${j = j-1 = -1}$
	2. iterasi kedua berhenti (${j < 0}$)
		- ${A[j+1] = A[0] = 5}$ (memasukkan nilai key)
		- Hasil akhir: ${A = [5, 9, 6, 3, 3, 8, 1]}$

2. Iterasi pertama ke- 2: ${key = A[2] = 6}$
	1. Iterasi kedua ke-1: ${A[j] = A[i-1] = A[1] = 9}$
		- ${A[j] > key}$ bernilai benar (${9 \gt 6}$)
		- ${A[j+1] = A[2] = 9}$
		- ${j = j-1 = 0}$
	2. Iterasi kedua ke-2: ${A[j] = A[0] = 5}$
		- ${A[j] > key}$ bernilai salah (${5 \lt 6}$)
		- Iterasi kedua berhenti 
	3. Iterasi kedua berhenti (${A[j] \le key}$)
		- ${A[j+1] = A[1] = 6}$ (memasukkan nilai key)
		- Hasil akhir: ${A = [5, 6, 9, 3, 3, 8, 1]}$

##### Kompleksitas Insertion Sort
1. Average dan worst case -> ${O(n^2)}$
	- Hal ini terjadi karena algoritme melakukan iterasi dua tingkat yang masing-masing berjalan dengan kompleksitas ${O(n)}$ (${O(n) * O(n) = O(n*n) = O(n^2)}$)
2. Best case -> ${O(n)}$
	- Best case terjadi ketika array yang diberikan dalam kondisi telah terurut
	- Karena array telah terurut, maka iterasi kedua pada proses insertion sort tidak akan terjadi (${A[j] \le key}$ selalu terjadi) sehingga hanya terjadi satu kali iterasi dengan kompleksitas ${O(n)}$
#### Jawaban (b)
##### Penjelasan Algoritme
Merge Sort berjalan dengan dengan metode *divide and conquer* yang melibat dua proses utama:
- Proses pertama yaitu memecah array menjadi dua subarray yang seimbang. Proses ini akan terjadi berulang-ulang untuk setiap subarray yang dibuat hingga didapatkan kumpulan subarray dengan jumlah elemen = 1
- Proses kedua yaitu menggabungkan setiap subarray menjadi sebuah array/subarray baru dengan metode yang sama seperti menggabungkan dua subarray terurut. Proses ini akan terjadi berulang-ulang untuk setiap subarray sehingga menjadi suatu array dengan jumlah elemen yang sama seperti array awal.

Kedua proses pada Merge Sort dapat dikerjakan secara rekursif menggunakan dua fungsi, yaitu:
1. MergeSort(${arr, l, r}$)
	- Fungsi ini merupakan fungsi utama dalam melakukan merge sort untuk suatu array
	- Fungsi ini memerlukan tiga parameter, yaitu:
		- Array ${arr[n]}$, yaitu suatu array dengan n jumlah elemen yang ingin diurutkan
		- Integer ${l}$, yaitu index nilai paling kiri dari ${arr[n]}$
		- Integer ${r}$, yaitu index nilai paling kanan dari ${arr[n]}$
	- Fungsi ini bekerja secara rekursif selama ${l < r}$ dengan empat proses pada setiap rekursi:
		- Mencari ${m = l + (r - l) / 2}$, yaitu index tengah dari ${arr[n]}$
		- Jalankan MergeSort(${}$${arr, l, m}$) untuk melakukan Merge Sort pada subarray bagian kiri (output berupa subarray bagian kiri yang telah terurut)
		- Jalankan MergeSort(${}$${arr, m+1, r}$) untuk melakukan Merge Sort pada subarray bagian kanan (output berupa subarray bagian kanan yang telah terurut)
		- Jalankan Merge(${arr, l, m, r}$) untuk menggabungkan subarray bagian kiri dan kanan (output adalah array yang telah terurut)
	- Proses rekursif akan berhenti ketika ${l < r}$ tidak lagi terpenuhi, atau ketika subarray hanya memiliki 1 elemen

2. Merge(${arr, l, m, r}$)
	- Fungsi ini bertujuan untuk menggabungkan dua subarray yang telah terurut menjadi satu array terurut
	- Fungsi ini memerlukan empat parameter, yaitu:
		- Array ${arr[n]}$, yaitu suatu array dengan n jumlah elemen yang ingin diurutkan
		- Integer ${l}$, yaitu index nilai paling kiri dari ${arr[n]}$
		- Integer ${m}$, yaitu nilai index tengah dari ${arr[n]}$
		- Integer ${r}$, yaitu index nilai paling kanan dari ${arr[n]}$
	- Fungsi ini bekerja dengan dua proses utama, yaitu pembuatan subarray dan penggabungan subarray
	- Pada proses pembuatan subarray:
		- Mencari ${n1 = m - l + 1}$, jumlah elemen pada subarray kiri
		- Mencari ${n2 = r - m}$, jumlah elemen pada subarray kanan
		- Deklarasi subarray kiri ${L[n1]}$ dan subarray kanan ${R[n2]}$
		- Mengisi ${L[n1]}$ dengan elemen pada ${arr[n]}$ dari elemen ke-l hingga elemen ke-m
		- Mengisi ${R[n2]}$ dengan elemen <pada ${arr[n]}$ dari elemen ke-(m+1) hingga elemen ke-r
	- Pada proses penggabungan subarray, variabel penunjuk index untuk setiap array dan subarray harus dibuat terlebih dahulu
		- Deklarasi ${i = 0}$, yaitu variabel penunjuk index untu<k subarray ${L[n1]}$
		- Deklarasi ${j = 0}$, yaitu variabel penunjuk index untuk subarray ${R[n2]}$
		- Deklarasi ${k = l}$, yaitu variabel penunjuk index untuk array ${arr[n]}$
	- Setelah itu, lakukan iterasi untuk membuat ${arr[n]}$ terurut. Terdapat tiga iterasi terpisah yang perlu dilakukan secara berurutan, yaitu:
		- Iterasi pertama bertujuan untuk memasukkan nilai ${L[n1]}$ dan ${R[n2]}$ ke ${arr[n]}$ secara berurutan dimulai dari elemen terkecil hingga elemen terbesar
		- Iterasi kedua bertujuan untuk memasukkan semua elemen tersisa dari ${L[n1]}$ ke ${arr[n]}$ bila semua elemen ${R[n2]}$ telah dimasukkan
		- Iterasi kedua bertujuan untuk memasukkan semua elemen tersisa dari ${R[n2]}$ ke ${arr[n]}$ bila semua elemen ${L[n1]}$ telah dimasukkan
	- Algoritme untuk iterasi pertama pada penggabungan subarray yaitu:
		- Iterasi terjadi selama ${i \lt n1}$ dan ${j \lt n2}$ (masih ada elemen pada ${L[n1]}$ dan ${R[n2]}$ untuk dimasukkan ke dalam ${arr[n]}$)
		- Jika ${L[i] \le R[j]}$, masukkan ${L[i]}$ pada ${arr[k]}$ dan lakukan increment pada i
		- Jika sebaliknya, masukkan ${R[j]}$ pada ${arr[k]}$ dan lakukan increment pada j
		- Pada setiap iterasi, lakukan increment pada k
	- Algoritme untuk iterasi kedua pada penggabungan subarray yaitu:
		- Iterasi terjadi selama ${i < n1}$ (masih ada elemen tersisa pada ${L[n1]}$ untuk dimasukkan ke dalam ${arr[n]}$)
		- Masukkan ${L[i]}$ pada ${arr[k]}$ dan lakukan increment pada i dan k
	- Algoritme untuk iterasi ketiga pada penggabungan subarray yaitu:
		- Iterasi terjadi selama ${j < n2}$ (masih ada elemen tersisa pada ${R[n2]}$ untuk dimasukkan ke dalam ${arr[n]}$)
		- Masukkan ${R[j]}$ pada ${arr[k]}$ dan lakukan increment pada j dan k
	- Output dari fungsi ini adalah ${arr[n]}$ yang telah terurut dari elemen ke-l hingga elemen ke-r

##### Pseudocode Fungsi ${Merge(arr, l, m, r)}$

```c
void Merge(int arr[], int l, int m, int r){
	int i, j, k;
	int n1 = m - l + 1;
	int n2 = r - m;
	
	int L[n1], R[n2];
	
	for(i = 0; i < n1; i++) L[i] = arr[l+i];
	for(j = 0; j < n2; j++) R[j] = arr[m+j+1];
	
	i = 0; j = 0; k = l;
	while(i < n1 && j < n2){
		if(L[i] <= R[j]) arr[k] = L[i++];
		else arr[k] = R[j++];
		k++;
	}
	
	while(i < n1) arr[k++] = L[i++];
	while(j < n2) arr[k++] = R[j++];	
}
```

##### Penjelasan Kestabilan Algoritme Merge Sort
Algoritme Merge Sort merupakan algoritme sorting yang stabil karena proses sorting tidak mengubah urutan dari elemen yang bernilai sama pada array. Hal ini berguna dalam pengurutan multidimensi (misalnya pengurutan pertama berdasarkan nilai integer menaik dan pengurutan kedua berdasarkan urutan alfabetik) sehingga hasil akhir tetap konsisten.
- Misalnya terdapat array 2 dimensi ${arr[4, 2] = \begin{bmatrix}[1,A], [3,E], [2,E], [2,C] \end{bmatrix}}$ 
- Setelah melakukan sorting pertama, hasilnya akan menjadi ${arr[4, 2] = \begin{bmatrix}[1,A], [2,E], [2,C], [3,E] \end{bmatrix}}$ 
- Apabila sorting kedua dilakukan dengan algoritme tidak stabil, hasilnya dapat berubah menjadi ${arr[4, 2] = \begin{bmatrix}[1,A], [2,C], [3,E], [2,E] \end{bmatrix}}$. Hasil ini tidak lagi terurut secara numerik karena elemen ${[3,E]}$ dan ${[2,E]}$ tertukar
- Algoritme sorting yang stabil memastikan elemen ${[2,E]}$ dan ${[3,E]}$ tidak tertukar saat dilakukan sorting secara alfabetik karena nilainya sama.

Algoritme Merge Sort termasuk algoritme sorting yang stabil karena pada saat dilakukan proses merge pada fungsi ${Merge()}$, nilai subarray kiri akan dimasukkan terlebih dahulu dari subarray kanan pada kasus ${L[i] == R[j]}$, sehingga tidak mengubah urutan untuk elemen dengan nilai yang sama.

##### Ilustrasi Proses Merge() terakhir pada ${A = [9, 5, 6, 3, 3, 8, 1]}$
Berikut merupakan proses Merge() yang terjadi pada rekursif terakhir dari fungsi MergeSort() untuk array ${A = [9, 5, 6, 3, 3, 8, 1]}$:

1. Nilai masing-masing variabel pada proses Merge() yaitu:
	- ${A[n] = [3, 5, 6, 9, 1, 3, 8]}$
	- ${l = 0}$ (index pertama)
	- ${r = 6}$ (index terakhir)
	- ${m = 3}$ (index tengah)
	- ${n1 = 4}$ (jumlah elemen pada subarray kiri)
	- ${n2 = 3}$ (jumlah elemen pada subarray kanan)
	- ${k = 0}$
	- ${L[n1] = [3, 5, 6, 9]}$ (subarray kiri)
	- ${R[n2] = [1, 3, 8]}$ (subarray kanan)
2. Proses penggabungan ${L[n1]}$ dan ${R[n2]}$:
	1. Pengulangan pertama (${i < n1}$ dan ${j < n2}$):
		- Iterasi ${k = 0}$, ${i = 0}$, ${j = 0}$
			- ${L[0] = 3}$, ${R[0] = 1}$
			- ${L[0] > R[0]}$, ${A[0] = R[0] = 1}$
			- Increment j dan k, ${j = 1}$ dan ${k = 1}$
			- ${A[n] = [1, 5, 6, 9, 1, 3, 8]}$
		- Iterasi ${k = 1}$, ${i = 0}$, ${j = 1}$
			- ${L[0] = 3}$, ${R[1] = 3}$
			- ${L[0] = R[1]}$, ${A[1] = L[0] = 3}$
			- Increment i dan k, ${i = 1}$ dan ${k = 2}$
			- ${A[n] = [1, 3, 6, 9, 1, 3, 8]}$
		- Iterasi ${k = 2}$, ${i = 1}$, ${j = 1}$
			- ${L[1] = 5}$, ${R[1] = 3}$
			- ${L[1] > R[1]}$, ${A[2] = R[1] = 3}$
			- Increment j dan k, ${j = 2}$ dan ${k = 3}$
			- ${A[n] = [1, 3, 3, 9, 1, 3, 8]}$
		- Iterasi ${k = 3}$, ${i = 1}$, ${j = 2}$
			- ${L[1] = 5}$, ${R[2] = 8}$
			- ${L[1] < R[2]}$, ${A[3] = L[1] = 5}$
			- Increment i dan k, ${i = 2}$ dan ${k = 4}$
			- ${A[n] = [1, 3, 3, 5, 1, 3, 8]}$
		- Iterasi ${k = 4}$, ${i = 2}$, ${j = 2}$
			- ${L[2] = 6}$, ${R[2] = 8}$
			- ${L[2] < R[2]}$, ${A[4] = L[2] = 6}$
			- Increment i dan k, ${i = 3}$ dan ${k = 5}$
			- ${A[n] = [1, 3, 3, 5, 6, 3, 8]}$
		- Iterasi ${k = 5}$, ${i = 3}$, ${j = 2}$
			- ${L[3] = 9}$, ${R[2] = 8}$
			- ${L[3] > R[2]}$, ${A[5] = R[2] = 8}$
			- Increment j dan k, ${j = 3}$ dan ${k = 6}$
			- ${A[n] = [1, 3, 3, 5, 6, 8, 8]}$
		- Iterasi berhenti (${j == n2}$)
	2. Pengulangan kedua (${i < n1}$)
		- Iterasi ${k = 6}$, ${i = 3}$
			- ${A[6] = L[3] = 9}$
			- Increment i dan k, ${i = 4}$ dan ${k = 7}$
			- ${A[n] = [1, 3, 3, 5, 6, 8, 9]}$
		- Iterasi berhenti (${i == n1}$)
	3. Pengulangan ketiga (${j < n2}$)
		- Pengulangan ini tidak terjadi karena ${j == n2}$
3. Hasil akhir yaitu ${A[n] = [1, 3, 3, 5, 6, 8, 9]}$
#### Jawaban (c)
##### Penjelasan Algoritme
Quick Sort berjalan menggunakan metode *divide and conquer* yang melibatkan tiga proses utama, yaitu:
- Pemilihan pivot, yaitu suatu elemen yang menjadi suatu titik pembagian/partisi pada array
- Proses partisi, yaitu proses mengubah susunan array sehingga semua elemen yang lebih kecil berada pada sisi kiri pivot dan semua elemen yang lebih besar berada pada sisi kanan pivot. Terdapat tiga algoritme partisi yang umum, yaitu:
	- *Naive Partition*, yaitu membuat subarray baru dengan semua elemen lebih kecil dari pivot di subarrray pertama dan semua elemen lebih besar dari pivot di subarray kedua. Kedua subarray ini kemudian dipindahkan ke array awal
	- *Lomuto Partition*, yaitu melakukan pertukaran antara elemen yang lebih kecil dari pivot dengan elemen yang lebih besar dari pivot. Index elemen terakhir yang lebih kecil disimpan dan kemudian menukar elemen berikutnya dengan elemen pivot.
	- *Hoare's Partition*, menggunakan dua pointer dari kedua ujung array yang bergerak mendekati satu sama lain. Elemen yang lebih besar dari pivot di sebelah kiri akan ditukar dengan elemen yang lebih kecil dari pivot di sebelah kanan. Partisi berakhir saat kedua pointer bertemu.
- Pemecahan array menjadi dua subarray, yaitu subarray kiri dari elemen pertama hingga elemen sebelum pivot dan subarray kanan dari elemen setelah pivot hingga elemen terakhir

Kedua proses di atas dilakukan secara rekursif hingga tersisa subarray dengan 1 elemen pada setiap bagian. Untuk menjawab soal (c), algoritme *Lomuto Partition* yang dipilih karena implementasinya yang mudah dipahami.

##### Hasil Partisi Pertama pada ${A = [9, 5, 6, 3, 3, 8, 1]}$
Dengan menggunakan pivot = elemen tengah dari indeks \[ℓ...r] dan algoritme partisi Lomuto, berikut adalah proses partisi pertama yang terjadi (${partition(arr[n], 0, 6)}$)
1. Inisiasi nilai variabel
	- ${A[n] = [9, 5, 6, 3, 3, 8, 1]}$
	- ${lo = 0}$, elemen paling kiri pada partisi
	- ${hi = 6}$, elemen paling kanan pada partisi
	- ${pivot = A[3] = 3}$, elemen pivot pada partisi
	- ${pi\_index = 3}$, index tipivot
	- ${i = -1}$, index elemen terkecil terakhir pada partisi (${i = hi - 1}$)
	- ${j = 0}$, index iterasi untuk setiap elemen pada ${A[n]}$ (${j = lo}$)
2. Iterasi setiap elemen pada ${A[n]}$, (${j < hi}$):
	1. Iterasi ke-1, ${j = 0}$
		- ${A[j] = A[0] = 9}$
		- ${A[j] > pivot}$, tidak terjadi pertukaran elemen
		- increment j, ${j = 1}$
	2. Iterasi ke-2, ${j = 1}$
		- ${A[j] = A[1] = 5}$
		- ${A[j] > pivot}$, tidak terjadi pertukaran elemen
		- increment j, ${j = 2}$
	3. Iterasi ke-3, ${j = 2}$
		- ${A[j] = A[2] = 6}$
		- ${A[j] > pivot}$, tidak terjadi pertukaran elemen
		- increment j, ${j = 3}$
	4. Iterasi ke-4, ${j = 3}$
		- ${A[j] = A[3] = 3}$
		- ${A[j] == pivot}$, tidak terjadi pertukaran elemen
		- increment j, ${j = 4}$
	5. Iterasi ke-5, ${j = 4}$
		- ${A[j] = A[4] = 3}$
		- ${A[j] == pivot}$, tidak terjadi pertukaran elemen
		- increment j, ${j = 5}$
	6. Iterasi ke-6, ${j = 5}$
		- ${A[j] = A[5] = 8}$
		- ${A[j] > pivot}$, tidak terjadi pertukaran elemen
		- increment j, ${j = 6}$
	7. Iterasi ke-7, ${j = 6}$
		- ${A[j] = A[6] = 1}$
		- ${A[j] < pivot}$, terjadi pertukaran elemen
		- increment i, ${i = 0}$
		- ${swap(A[i], A[j]) = swap(A[0], A[6])}$
		- Setelah proses pertukaran, ${A[0] = 1}$ dan ${A[6] = 9}$
		- increment j, ${j = 7}$
		- ${A[n] = [1, 5, 6, 3, 3, 8, 9]}$
	8. Iterasi berhenti (${j == hi}$)
3. Menukar elemen pivot
	- ${A[i+1] = A[1] = 5}$
	- ${pivot = A[p\_index] = A[3] = 3}$
	- ${swap(A[i+1], A[p\_index])}$
	- Setelah proses pertukaran, ${A[1] = 3}$ dan ${A[3] = 5}$
	- ${p\_index = i+1 = 1}$
	- ${A[n] = [1, 3, 6, 5, 3, 8, 9]}$
	- Fungsi partisi mereturn nilai ${p\_index = 1}$

Partisi pertama selesai dan semua elemen yang lebih kecil dari pivot, yaitu ${[1]}$ berada di sebelah kiri ${A[1] = 3}$ dan semua elemen yang lebih besar dari pivot, yaitu ${[6, 5, 3, 8, 9]}$ berada di sebelah kanan ${A[1] = 3}$. Langkah berikutnya dari algoritme ini adalah melakukan partisi lagi untuk masing-masing subarray. (${partition(A[n], lo, p\_index - 1)}$ dan ${partition(A[n], p\_index + 1, hi)}$)

### B. Algoritme Pengurutan Parsial
#### Jawaban (a)

>Anda memiliki 3 juta record transaksi berisi (timestamp, userId, amount). Urutkan utama: timestamp naik, sekunder: userId naik.
>	- Pilih algoritme yang stabil dan jelaskan alasannya. 
>	- Tulis orde waktu & kebutuhan ruang ekstra.

Pertama, untuk menentukan algoritme yang diperlukan untuk melakukan sorting sesuai pada soal (a), beberapa kriteria yang harus dipenuhi adalah:
- Algoritme sorting yang efisien untuk data besar (${n = 3\;juta}$) 
- Algoritme sorting yang dapat melakukan sorting multi dimensi (timestamp dan UserId)

Untuk memenuhi kriteria kedua, algoritme sorting yang stabil diperlukan agar proses pengurutan sekunder (UserId) tidak mengubah urutan yang telah dilakukan pada pengurutan utama (timestamp). Algoritme sorting dapat dikatakan stabil bila tidak mengubah urutan dari kedua elemen dengan nilai key yang sama pada array saat proses pengurutan.

Beberapa pilihan algoritme yang memenuhi kriteria untuk persoalan ini adalah algoritme sorting yang stabil, yaitu *Insertion Sort* dan *Merge Sort*. Berikut penjelasan untuk masing-masing algoritme beserta alasan dan kompleksitasnya:
1. Insertion Sort
	- Kelebihan algoritme ini adalah efisiensi memori yang cocok bila perusahaan memiliki kapasitas memory yang terbatas
	- Kekurangan algoritme ini adalah kompleksitas waktunya yang jauh dibawah Merge Sort sehingga berjalan lebih lambat
	- Kompleksitas Waktu: ${O(n^2)}$ karena diperlukan looping dua tingkat
	- Kompleksitas Ruang: ${O(1)}$ karena sorting dilakukan *in-place* di array tersebut
2. Merge Sort
	- Kelebihan algoritme ini adalah efisiensi waktu yang cocok bila perusahaan memerlukan proses sorting dilakukan dengan cepat
	- Kekurangan algoritme ini adalah kompleksitas ruangnya yang lebih tinggi dari Insertion Sort, sehingga perlu memerhatikan kapasitas memori
	- Kompleksitas Waktu: ${O(n\log n)}$, terdiri dari proses *divide* dan *merge*
	- Kompleksitas Ruang: ${O(n)}$ karena diperlukan ruang tambahan untuk menyimpan subarray

#### Jawaban (b)

>Anda perlu menyortir Top-K (=1000) skor terbesar dari n = 20 juta angka, lalu menampilkannya urut menurun.
>	- Rancang strategi yang lebih murah daripada full sort: sebutkan struktur/algoritme yang dipakai dan total kompleksitasnya (dalam n dan K).
>	- Kapan full sort justru masuk akal?

##### Strategi Yang Lebih Baik dari Full Sort
Bila menggunakan full sort, maka kompleksitas waktu tercepat yang diperlukan adalah ${O(n\log n)}$ untuk worst case dan kurang efisien untuk n yang bernilai sangat besar. Karena soal ini hanya mencari K nilai terbesar, maka penggunaan *min-heap* sangat efisien. *Min-heap* adalah sebuah struktur data *complete binary tree* dengan aturan khusus untuk setiap nodenya, yaitu elemen parent harus lebih kecil dari elemen childnya. Alasan mengapa penggunaan *min-heap* lebih efisien dari full sort, yaitu:
- Kompleksitas ruang yang lebih efisien karena *min-heap* hanya perlu menyimpan K elemen dengan nilai terbesar sehingga kompleksitas ruangnya adalah ${O(K)}$
- Kompleksitas waktu yang lebih efisien karena melakukan *heapify* pada *min-heap* jauh lebih efisien daripada melakukan full sort:
	- Karena perlu mengecek setiap elemen, maka diperlukan iterasi sebanyak ${O(n)}$
	- Karena elemen root pada *min-heap* selalu merupakan nilai terkecil dari array, maka cukup perlu melakukan pengecekan antara setiap elemen dengan root
	- Bila ${x_i > root}$, maka tukar root dengan ${x_i}$ dan lakukan heapify pada *min-heap*
	- Setiap operasi *heapify* memerlukan waktu sebanyak ${O(\log K)}$
	- Bila setiap iterasi elemen memerlukan heapify, maka kompleksitas waktu secara keseluruhan adalah ${O(n)*O(\log K) = O(n \log K)}$, lebih efisien dari ${O(n\log n)}$ pada full sort

Karena diperlukan sorting menurun untuk K data pada *min-heap*, maka diperlukan waktu tambahan sebesar ${O(K \log K)}$ untuk melakukan sorting menurun (dapat menggunakan merge sort atau heap sort)

Kesimpulan dari algoritme di atas adalah:
- Kompleksitas Waktu: ${O(n\log K)}$
- Komplektitas Ruang: ${O(K)}$

##### Kapan Full Sort Lebih Masuk Akal
Full Sort akan lebih masuk akal dari menggunakan *min-heap* pada beberapa skenario, yaitu:
- Ketika nilai K mendekati n, sehingga ${O(n \log K) \approx O(n \log n)}$
- Ketika memerlukan semua n data yang terurut (misalnya mencari median atau urutan lengkap)


