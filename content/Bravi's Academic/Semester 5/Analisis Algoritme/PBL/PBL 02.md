[[Bravi's Academic/Semester 5/Analisis Algoritme/PBL/index|Analisis Algoritme]] - R2 <br>Ghiffari Bravia Hisham (G6401231050)<br>Adam Naufal (G6401231082)<br>Mochamad Chairulridjal Nurvikri (G6401231083)

### Soal

>Dukungan terhadap UMKM terkait penggunaan *vending machine* secara otomatis dapat melakukan proses pengembalian uang konsumer dengan efisien. Hal ini penting, karena pengadaan uang receh untuk kembalian tidak mudah. Selain itu ketika jumlah uang kembalian dari mesin, jumlahnya minimal maka kenyamanan pengguna akan terdukung karena akan mencegah pengguna yang direpotkan harus menerima uang receh yang banyak.

### Deskripsi Permasalahan

Permasalahan yang terjadi adalah untuk suatu C nilai kembalian yang harus dibayarkan oleh *vending machine* menggunakan kombinasi dari set denominasi uang sebanyak K elemen ${D = [d_1, d_2, \dots, d_k]}$, di mana setiap ${d_i}$ adalah nilai dari satu jenis koin/uang kertas.

Kombinasi yang optimal untuk menjawab permasalahan ini harus memenuhi kriteria seperti berikut:
- Jumlah semua koin / uang kertas, ${\sum_{i=1}^{k}n_i}$ seminimal mungkin untuk mendapatkan solusi optimal
- Total uang yang dibayarkan sesuai dengan nilai kembalian, ${\sum_{i=1}^{k}{d_i\times n_i} = C}$

Input dari permasalahan adalah sebagai berikut:
- Jumlah total uang kembalian, ${C}$
- Set denominasi uang yang tersedia, ${D = [d_1, d_2, \dots, d_k]}$

Output dari permasalahan adalah sebagai berikut:
- Kombinasi dari denominasi yang ada, ${N = [n_1, n_2, \dots, n_k]}$

### Formulasi Problem

Permasalahan ini dikenal juga sebagai *Change-Making Problem*, tujuannya untuk menemukan kombinasi jumlah koin/uang kertas yang memenuhi total nilai kembalian dengan jumlah koin/uang kertas yang paling sedikit. Secara matematis, permasalahan dapat dirumuskan sebagai berikut:

#### Input
1. Nilai total kembalian yang harus dibayarkan, ${C}$
2. Set denominasi uang yang tersedia, ${D = [d_1, d_2, \dots, d_k]}$
3. Jumlah setiap denominasi uang yang tersedia, ${N0 = [N_1, N_2, \dots, N_k]}$

#### Output
1. Jumlah setiap koin/uang kertas yang diperlukan, ${N = [n_1, n_2, \dots, n_k]}$

#### Fungsi Tujuan (*Objective Function*)
Tujuan dari optimasi untuk solusi adalah meminimalkan jumlah total koin/uang kertas yang digunakan:
$$
minimize \;\; \sum_{i=1}^{k} n_i
$$

#### Batasan (*Constraints*)
Kombinasi yang dipilih untuk solusi harus memenuhi batasan berikut:
1. Total nilai dari semua koin/uang kertas yang dipilih harus sama dengan jumlah kembalian, ${\sum_{i=1}^{k} d_i \times n_i = C}$
2. Jumlah koin/uang kertas untuk setiap denominasi merupakan bilangan bulat non-negatif, ${n_i \ge 0}$ dan ${n_i \in \Bbb Z}$ (bilangan bulat) untuk ${i = 1, 2, \dots, k}$

Solusi yang optimal merupakan kombinasi yang memenuhi batasan (*constraints*) sembari memenuhi *Objective Function* yang ada.

### Algoritma yang Digunakan

#### Pendahuluan
Untuk menyelesaikan permasalahan pada soal (*Change-Making Problem*), terdapat dua pendekatan umum yang dapat digunakan, yaitu algoritma *Greedy* dan algoritma *Dynamic Programming* (DP):

##### Algoritma *Greedy*
Ide dari algoritma ini adalah selalu memilih langkah terbaik pada setiap sub-problem. Dalam konteks *Change-Making Problem*, langkah terbaik berarti memilih koin/uang dengan denominasi terurut dari terbesar ke terkecil, lalu mengurangkan kembalian dengan koin/uang tersebut hingga sisa kembaliannya nol (Nilai mata uang tidak melebihi sisa kembalian)

Kelebihan algoritma *Greedy* dibandingkan algoritma DP adalah kompleksitas waktu dan ruangnya yang lebih kecil. Selain itu, algoritma *Greedy* lebih sederhana untuk diimplementasikan.

Kelemahan dari algoritma *Greedy* dibandingkan algoritma DP adalah solusi yang diberikan tidak selalu optimal untuk semua set denominasi mata uang. Hanya *Canonical Coin System* yang akan memberikan solusi optimal bila diselesaikan dengan algoritma *Greedy*.

##### Algoritma *Dynamic Programming* (DP)
Ide dari algoritma ini adalah dengan memecah permasalahan menjadi sub-problem yang lebih kecil, menyelesaikannya, lalu menyimpan hasilnya untuk digunakan kembali. Pendekatan algoritma DP yang digunakan adalah *bottom-up approach* atau *tabulation*, yaitu menghitung jumlah koin minimum untuk setiap nilai kembalian dari 1 hingga ${C}$

Kelebihan dari algoritma *DP* dibandingkan algoritma *Greedy* adalah solusi yang diberikan selalu optimal untuk setiap set denominasi mata uang.

Kelemahan dari algoritma *DP* dibandingkan algoritma *Greedy* adalah kompleksitas waktu dan memorinya yang lebih besar. Selain itu, algoritma ini juga lebih kompleks untuk dipelajari ataupun diimplementasikan

#### Algoritma yang Dipilih
Kami memilih algoritma *Greedy* karena algoritma ini adalah fokus utama dari penugasan PBL 02 ini. Selain itu, algoritma ini lebih efisien dari algoritma DP dan lebih mudah untuk diimplementasikan.

Untuk memastikan algoritma yang kami gunakan memberikan jawaban yang optimal, ada beberapa asumsi yang kami lakukan untuk permasalahan pada soal:
1. Input untuk set denominasi yang diberikan sudah terurut menaik (*ascending*). Artinya, tidak diperlukan proses sorting tambahan untuk mengurutkan set denominasi
2. *Vending Machine* tidak memiliki batasan jumlah koin/uang kertas untuk setiap denominasi mata uang. Artinya, mesin selalu memberikan kombinasi yang sama untuk suatu ${C}$ nilai kembalian (mengasumsikan mesin memiliki jumlah uang/kertas yang cukup untuk semua denominasi)
3. Sistem mata uang yang digunakan adalah *Canonical Coin System*, yaitu set denominasi mata uang di mana algoritma *Greedy* selalu memberikan solusi yang optimal untuk *Change-Making Problem*

#### Implementasi Algoritma
Algoritma *Greedy* untuk menyelesaikan permasalahan pada soal memiliki langkah-langkah sebagai berikut:
1. Memasukkan input/parameter sebuah *integer* ${C}$ sebagai nilai kembalian
2. Memasukkan input/parameter sebuah *integer* ${k}$ sebagai jumlah elemen pada set denominasi mata uang ${D}$
3. Memasukkan input sebanyak ${k}$ *integer* ${d_1, d_2, \dots, d_k}$ sebagai nilai mata uang pada set denominasi mata uang. Asumsikan set denominasi mata uang memenuhi *Canonical Coin System* dan telah terurut menaik (*ascending*)
4. Inisialisasi array ${N = [n_1, n_2, \dots, n_k]}$ untuk menyimpan jumlah setiap koin/uang yang diperlukan untuk uang kembalian.
5. Jika ingin menghitung total koin yang diperlukan, inisialisasi ${total = 0}$
6. Melakukan pengulangan mundur sebanyak ${k}$ kali. Dalam setiap iterasi:
	- Apabila ${d_i > C}$, maka lompat ke iterasi berikutnya (nilai mata uang lebih besar dari kembalian)
	- Hitung ${n_i = \lfloor C / d_i \rfloor}$ dan masukkan dalam array ${N}$
	- Update nilai ${C}$ menjadi ${C = C - n_i \times d_i}$
	- Jika ingin menghitung ${total}$, maka update ${total = total + n_i}$
7. Jika ${C = 0}$ setelah pengulangan, print/return array ${N}$ dan ${total}$
8. Jika tidak, maka solusi tidak ditemukan

Berikut implementasi dari algoritma tersebut dalam bahasa pemrograman ${C}$:

```c
#include <stdio.h>
#include <stdlib.h>

// Program Utama

// Fungsi utama untuk mencari solusi dari soal
int uangKembalian(int C, int D[], int k, int N[]){
	// 1. Inisialisasi array N dengan nilai 0
	for (int i = 0; i < k; i++) N[i] = 0;

	// 2. Inisialisasi variabel total (menghitung total koin / lembaran)
	int total = 0;
	
	// 3. Melakukan pengulangan mundur untuk setiap denominasi
	for (int i = k-1; i >= 0; i--){
		// 3.1. Jika d_i > C, lanjut ke iterasi berikutnya
		if(C < D[i]) continue;
		
		// 3.2. Jika selainnya, lanjutkan perhitungan
		N[i] = C / D[i]; // Jumlah uang yang diperlukan
		C = C - N[i] * D[i]; // Update sisa kembalian
		total += N[i]; // Update total koin / lembaran
	}
	
	// 4. Jika C bukan 0, berarti tidak ada solusi
	if (C != 0){
		// Cetak error log
		printf("Error: Solusi tidak ditemukan\n");
		
		// Ubah nilai N[i] = -1
		for (int i = 0; i < k; i++) N[i] = -1;

		// Mengembalikan nilai -1 (tidak ada solusi)
		return -1;
	}

	// 5. Jika ada solusi
	else {
		// Mengembalikan total koin / lembaran yang digunakan
		return total;
	}
}


int main(){
	int C, k; // Inisiasi variabel C dan k
	scanf("%d %d", &C, &k); // Input nilai C dan k
	
	int D[k], N[k]; // Inisiasi array D dan N
	
	// Input nilai D
	for (int i = 0; i < k; i++) scanf("%d", &D[i]);
	
	printf("Kombinasi kembalian untuk C = %d\n\n", C);
	
	// Memanggil fungsi uangKembalian() (simpan ke variabel ans)
	int ans = uangKembalian(C, D, k, N);
	
	// Jika solusi tidak ditemukan, program berhenti
	if (ans == -1) return 0;
	
	// Cetak hasil (pengulangan mundur)
	for (int i = k-1; i >= 0; i--){
		// Jika uang tidak digunakan, lanjut ke iterasi berikutnya
		if(N[i] == 0) continue;
		
		// Cetak nilai
		printf("Denominasi %d: %d lembar\n", D[i], N[i]);
	} 
	
	// Cetak total koin / lembaran yang diperlukan
	printf("\nTotal Lembar / Koin: %d\n", ans);
	
	return 0;
}
```

Berikut input untuk contoh *test case* yang diberikan pada program tersebut:
```
58000 7
1000 2000 5000 10000 20000 50000 100000
```

Berikut output untuk *test case* tersebut:
```
Kombinasi kembalian untuk C = 58000

Denominasi 50000: 1 lembar
Denominasi 5000: 1 lembar
Denominasi 2000: 1 lembar
Denominasi 1000: 1 lembar

Total Lembar / Koin: 4
```

#### Variasi Algoritma
Bila asumsi pada permasalahan tidak dipenuhi pada kasus dunia nyata, maka algoritma *Greedy* untuk solusi dapat dimodifikasi sehingga memenuhi permasalahan tersebut.

##### Input Set Denominasi Tidak Terurut Menaik (*Ascending*)
Apabila input untuk nilai mata uang yang diberikan tidak terurut menaik, maka solusi *greedy* yang dihasilkan tidak akan optimal. Hal ini terjadi karena algoritma *greedy* untuk *Change-Making Problem* selalu memulai pengecekan dari ${d_k}$ hingga ${d_1}$ dengan mengasumsikan set denominasi terurut menaik (${d_k \gt d_{k-1} \gt \dots \gt d_2 \gt d_1}$). Bila asumsi ini dilanggar, maka algoritma akan mengecek dari uang yang lebih kecil terlebih dahulu sehingga memerlukan lebih banyak koin / lembaran daripada solusi optimalnya.

Untuk menyelesaikan masalah ini, ada dua skenario yang dilakukan:
- Melakukan pengecekan saat melakukan input apabila nilai mata uang tidak terurut menaik (${d_{i+i} \le d_i}$). Metode ini tidak meningkatkan kompleksitas dari program utama, namun program tidak dapat berjalan (hanya berhenti saat kondisi tidak terurut ditemukan)
- Melakukan proses *sorting* untuk mengurutkan set denominasi agar terurut menaik (*Ascending*). Metode ini memerlukan algoritma tambahan dengan kompleksitas waktu terkecil ${O(n\log n)}$. Program dapat berjalan dengan optimal setelah *sorting* dilakukan

Implementasi dari algoritma ini dapat dilakukan dengan menggunakan fungsi ${qsort()}$ yang terdapat pada library stdlib.h di bahasa pemrograman C. Fungsi ${comp()}$ juga perlu dibuat agar fungsi ${qsort()}$ mengurutkan elemen secara menaik (*ascending*)

Berikut implementasi dengan menambahkan fitur tersebut dari algoritma utama:

```c
#include <stdio.h>
#include <stdlib.h>

// Program Utama + Sorting

// Fungsi komparasi ascending untuk qsort()
int comp(const void *a, const void *b) {
    return (*(int *)a - *(int *)b);
}

// Fungsi utama untuk mencari solusi dari soal
int uangKembalian(int C, int D[], int k, int N[]){
	// 1. Mengurutkan array D
	qsort(D, k, sizeof(D[0]), comp);
	
	// 2. Inisialisasi array N dengan nilai 0
	for (int i = 0; i < k; i++) N[i] = 0;

	// 3. Inisialisasi variabel total (menghitung total koin / lembaran)
	int total = 0;
	
	// 4. Melakukan pengulangan mundur untuk setiap denominasi
	for (int i = k-1; i >= 0; i--){
		// 4.1. Jika d_i > C, lanjut ke iterasi berikutnya
		if(C < D[i]) continue;
		
		// 4.2. Jika selainnya, lanjutkan perhitungan
		N[i] = C / D[i]; // Jumlah uang yang diperlukan
		C = C - N[i] * D[i]; // Update sisa kembalian
		total += N[i]; // Update total koin / lembaran
	}
	
	// 5. Jika C bukan 0, berarti tidak ada solusi
	if (C != 0){
		// Cetak error log
		printf("Error: Solusi tidak ditemukan\n");
		
		// Ubah nilai N[i] = -1
		for (int i = 0; i < k; i++) N[i] = -1;

		// Mengembalikan nilai -1 (tidak ada solusi)
		return -1;
	}

	// 6. Jika ada solusi
	else {
		// Mengembalikan total koin / lembaran yang digunakan
		return total;
	}
}

int main(){
	int C, k; // Inisiasi variabel C dan k
	scanf("%d %d", &C, &k); // Input nilai C dan k
	
	int D[k], N[k]; // Inisiasi array D dan N
	
	// Input nilai D
	for (int i = 0; i < k; i++) scanf("%d", &D[i]);
	
	printf("Kombinasi kembalian untuk C = %d\n\n", C);
	
	// Memanggil fungsi uangKembalian() (simpan ke variabel ans)
	int ans = uangKembalian(C, D, k, N);
	
	// Jika solusi tidak ditemukan, program berhenti
	if (ans == -1) return 0;
	
	// Cetak hasil (pengulangan mundur)
	for (int i = k-1; i >= 0; i--){
		// Jika uang tidak digunakan, lanjut ke iterasi berikutnya
		if(N[i] == 0) continue;
		
		// Cetak nilai
		printf("Denominasi %d: %d lembar\n", D[i], N[i]);
	} 
	
	// Cetak total koin / lembaran yang diperlukan
	printf("\nTotal Lembar / Koin: %d\n", ans);
	
	return 0;
}
```

Perbedaan antara program ini dengan program awal adalah adanya proses *sorting* menggunakan fungsi ${comp()}$ dan ${qsort()}$ untuk mengurutkan set denominasi pada soal.

Berikut input untuk contoh *test case* yang diberikan pada program tersebut:
```
79000 7
100000 1000 50000 2000 20000 5000 10000
```

Berikut output untuk *test case* tersebut:
```
Kombinasi kembalian untuk C = 79000

Denominasi 50000: 1 lembar
Denominasi 20000: 1 lembar
Denominasi 5000: 1 lembar
Denominasi 2000: 2 lembar

Total Lembar / Koin: 5
```

##### Denominasi Memiliki Jumlah Terbatas
###### Pendahuluan
Apabila setiap nilai/mata uang dalam *vending machine* memiliki jumlah yang terbatas, ${M = [m_1, m_2, \dots, m_k]}$, dengan ${m_i}$ adalah jumlah koin/lembaran mata uang untuk ${d_i}$ yang tersedia di *vending machine*, maka terdapat dua skenario yang dapat terjadi:
- Jika ${n_i}$, jumlah koin / lembar optimal yang diperlukan untuk ${d_i}$ lebih kecil atau sama dengan ${m_i}$ (${n_i \le m_i}$), artinya *vending machine* memiliki jumlah koin / lembaran yang cukup untuk diberikan (berikan uang ${d_i}$ sebanyak ${n_i}$)
- Jika ${n_i}$, jumlah koin / lembar optimal yang diperlukan untuk ${d_i}$ lebih besar dari ${m_i}$ (${n_i \gt m_i}$), artinya  *vending machine* tidak memiliki jumlah koin / lembaran yang cukup untuk diberikan. Untuk skenario ini, berikan uang ${d_i}$ sebanyak ${m_i}$ (jumlah yang ada di *vending machine*)

Untuk skenario kedua, sisa kembalian yang berlebih akan dibayar menggunakan uang lainnya (${d_{i-1}, d_{i-2}, \dots}$). Hasil yang diberikan akan relatif optimal terhadap kendala yang ada selama set denominasi adalah *Canonical Coin System*

###### Implementasi
Apabila setiap nilai/mata uang dalam *vending machine* memiliki jumlah yang terbatas, ${M = [m_1, m_2, \dots, m_k]}$, dengan ${m_i}$ adalah jumlah koin/lembaran mata uang untuk ${d_i}$ yang tersedia di *vending machine*, maka algoritma untuk solusi dapat ditambahkan fitur untuk mengecek jumlah uang terlebih dahulu. Langkah tambahan yang diperlukan adalah:
1. Memasukkan input sebanyak ${k}$ *integer* ${m_1, m_2, \dots, m_k}$ yang merupakan jumlah koin/lembaran dari setiap denominasi mata uang yang ada
2. Memodifikasi ${D}$ menjadi array dua dimensi, ${D = [[d_1, m_1], [d_2, m_2], \dots, [d_k, m_k]]}$
3. Dalam melakukan perhitungan ${n_i}$ dan sisa kembalian ${C}$, cek kondisi berikut:
	- Jika ${n_i \gt m_i}$, maka ubah ${n_i = m_i}$ (jumlah koin/lembaran yang digunakan tidak boleh melebihi yang tersedia di *vending machine*)
4. Memodifikasi keseluruhan program agar sesuai dengan array ${D}$ yang berubah menjadi array dua dimensi, ${nominal = D[i][0]}$, ${stock = D[i][1]}$

Alasan menggabungkan ${M}$ dalam array ${D}$ alih-alih membuat array terpisah adalah agar saat array ${D}$ diurutkan, nilai jumlah mata uang untuk setiap ${d_i}$ sesuai dengan ${m_i}$

Berikut implementasi untuk menambahkan fitur tersebut dari algoritma utama:

```c
#include <stdio.h>
#include <stdlib.h>

// Program Utama + Nominal Terbatas

// Fungsi utama untuk mencari solusi dari soal
int uangKembalian(int C, int D[][2], int k, int N[]){
	// 1. Inisialisasi array N dengan nilai 0
	for (int i = 0; i < k; i++) N[i] = 0;
	
	// 2. Inisialisasi variabel total (menghitung total koin / lembaran)
	int total = 0;
	
	// 3. Melakukan pengulangan mundur untuk setiap denominasi
	for (int i = k-1; i >= 0; i--){
		int nominal = D[i][0]; // Nominal mata uang
		int stock = D[i][1]; // Jumlah lembaran uang
		
		// 3.1. Jika d_i > C, lanjut ke iterasi berikutnya
		if(C < nominal) continue;

		// 3.2. Jika selainnya, lanjutkan perhitungan
		N[i] = C / nominal; // Jumlah uang yang diperlukan
		if(N[i] > stock) N[i] = stock; // Jika stok uang tidak cukup
		C = C - N[i] * nominal; // Update sisa kembalian
		total += N[i]; // Update total koin / lembaran
	}

	// 4. Jika C bukan 0, berarti tidak ada solusi
	if (C != 0){
		// Cetak error log
		printf("Error: Solusi tidak ditemukan\n");
		
		// Ubah nilai N[i] = -1
		for (int i = 0; i < k; i++) N[i] = -1;
		
		// Mengembalikan nilai -1 (tidak ada solusi)
		return -1;
	}

	// 5. Jika ada solusi
	else {
		return total; // Mengembalikan total koin / lembaran yang digunakan
	}
}

int main(){
	int C, k; // Inisiasi variabel C dan k
	scanf("%d %d", &C, &k); // Input nilai C dan k
	
	int D[k][2], N[k]; // Inisiasi array D dan N
	
	// Input nilai D
	for (int i = 0; i < k; i++) scanf("%d", &D[i][0]);
	
	// Input nilai M
	for (int i = 0; i < k; i++) scanf("%d", &D[i][1]);
	
	printf("Kombinasi kembalian untuk C = %d\n\n", C);
	
	// Memanggil fungsi uangKembalian() (simpan ke variabel ans)
	int ans = uangKembalian(C, D, k, N);

	// Jika solusi tidak ditemukan, program berhenti
	if (N[0] == -1) return 0;

	// Cetak hasil (pengulangan mundur)
	for (int i = k-1; i >= 0; i--){
		// Jika uang tidak digunakan, lanjut ke iterasi berikutnya
		if(N[i] == 0) continue;
		
		// Cetak nilai
		printf("Denominasi %d: %d lembar\n", D[i][0], N[i]);
	} 
	
	// Cetak total koin / lembaran yang digunakan
	printf("\nTotal Lembar / Koin: %d\n", ans);
	
	return 0;
}
```

Perbedaan antara program ini dengan program awal adalah adanya sistem untuk mengecek uang kembalian yang tersedia di *vending maching* dan adanya jaminan bahwa uang kembalian yang diberikan merupakan kombinasi yang dapat diberikan oleh *vending machine*

Berikut input untuk contoh *test case* yang diberikan pada program tersebut:
```
84000 7
1000 2000 5000 10000 20000 50000 100000
2 1 10 10 1 0 0
```

Berikut output untuk *test case* tersebut:
```
Kombinasi kembalian untuk C = 84000

Denominasi 20000: 1 lembar
Denominasi 10000: 6 lembar
Denominasi 2000: 1 lembar
Denominasi 1000: 2 lembar

Total Lembar / Koin: 10
```

###### Modifikasi ${qsort()}$ Untuk *Sorting*
Apabila ingin menambahkan fitur *sorting* untuk program di atas, maka fungsi ${comp()}$ perlu dimodifikasi agar sesuai dengan array ${D}$ yang berubah menjadi dua dimensi (diurutkan menaik berdasarkan ${D[i][0]}$):

```c
// Modifikasi fungsi comp() untuk array dua dimensi
int comp(const void *a, const void *b) {
	const int (*x)[2] = a;
	const int (*y)[2] = b;

// Sorting ascending berdasarkan elemen pertama
	return (*x)[0] - (*y)[0];
}
```

###### Kekurangan Algoritma
Kekurangan dari variasi ini adalah algoritma tidak dapat menemukan solusi apabila kekurangan jumlah mata uang terjadi untuk mata uang yang kecil.

Misalnya untuk *test case* berikut:
```
6000 3
1000 2000 5000
0 3 1
```

Program akan memberikan jawaban "Solusi tidak ditemukan" alih-alih menemukan solusi untuk *test case* tersebut, yaitu 3 lembar uang 2000. 

Penyelesaian dari masalah ini dapat dilakukan dengan memodifikasi program untuk melakukan *backtracking* apabila ada nilai mata uang yang belum digunakan, namun algoritma tersebut tidak dijelaskan di sini karena terlalu kompleks dan bukan fokus utama dari PBL. Selain itu, pendekatan *Dynamic Programming* akan lebih baik untuk diimplementasikan bila tingkat kompleksitas dari kasus / *test case* mencapai titik tersebut.

##### Set Denominasi Tidak Dijamin Merupakan *Canonical Coin System*
###### Introduksi
Suatu sistem mata uang dikatakan memenuhi *Canonical Coin System* jika solusi *greedy* yang dihasilkan untuk persoalan *Change-Making Problem* menggunakan sistem mata uang tersebut merupakan solusi optimal.

Contoh sistem mata uang yang tidak *Canonical* adalah ${D = [1, 3, 4]}$. Jika kita ingin mencari uang kembalian untuk ${C = 6}$, algoritma *Greedy* akan memberikan total 3 lembar, yaitu 1 lembar uang nilai 4 dan 2 lembar uang nilai 1. Solusi ini bukanlah solusi optimal karena kita bisa memberikan 2 lembar uang nilai 3, yang merupakan solusi optimal. Kesalahan ini dapat terjadi karena prinsip algoritma *Greedy* yang selalu mengecek dari nilai mata uang tertinggi terlebih dahulu.

Untuk mengecek suatu sistem mata uang ${D}$ bersifat *canonical* atau tidak, dapat dilakukan menggunakan induksi matematika.

Basisnya, untuk suatu sistem mata uang dengan 2 elemen, sistem tersebut dikatakan *canonical* jika terpenuhi:
- ${len(D) \le 2}$
- ${d_1 = 1}$, (dalam konteks sistem mata uang rupiah, ${d_1 = 1000}$)
- ${d_1 \lt d_2}$

Untuk suatu sistem mata uang *canonical* dengan ${k-1}$ elemen, ${D = [d_1, d_2, \dots, d_{k-1}]}$, kita ingin menambahkan mata uang baru ${d_k}$ dan mengecek apakah sistem mata uang akan tetap *canonical* atau tidak. 

Untuk membuktikannya, kita harus mengecek apakah menggunakan mata uang ${d_k}$ dengan algoritma *Greedy* memberikan solusi yang lebih optimal dibandingkan tidak. Untuk suatu nilai kembalian ${C}$, ada dua skenario yang dapat diambil:
- Menggunakan ${d_k}$
- Menggunakan ${n \times d_{k-1}}$, di mana ${n = \lceil \frac {d_k} {d_{k-1}} \rceil}$

Intuisi dari skenario kedua adalah bisa jadi menggunakan ${d_k}$ justru tidak memberikan solusi optimal dibandingkan langsung menggunakan ${d_{k-1}}$. Nilai ${n}$ pada skenario kedua adalah jumlah minimal koin ${d_{k-1}}$ yang diperlukan agar nilainya sama atau lebih besar dari ${d_k}$. Nilai ${n}$ harus memenuhi kriteria berikut:
$$
n \times d_{k-1} - d_k < d_{k-1}
$$
Asumsikan ${C = n \times d_{k-1}}$, pertidaksamaan di atas memiliki arti jika uang kembalian ${C}$ dikurang dengan satu lembar ${d_k}$, maka sisa kembaliannya harus dihitung menggunakan mata uang yang lebih kecil dari ${d_{k-1}}$

Berdasarkan penjelasan di atas, untuk ${C = n \times d_{k-1}}$, terdapat dua opsi yang dapat dilakukan:
- Menggunakan 1 koin ${d_k}$ dan koin lainnya, artinya ${total\_coin = 1 + greedy(C - d_k)}$ 
- Menggunakan n koin ${d_{k-1}}$, atrinya ${total\_coin = n}$ 

Fungsi ${greedy(C - d_k)}$ pada opsi satu perlu dihitung karena adanya sisa kembalian yang perlu dihitung menggunakan nilai mata uang lainnya, sementara pada opsi kedua, nilai kembalian ${C}$ dapat dibayar hanya dengan uang ${d_{k-1}}$

Sistem mata uang dengan menambahkan ${d_k}$ akan disebut *Canonical* apabila dipenuhi:
$$
1 + greedy(n \times d_{k-1} - d_k) < n
$$
Artinya, menggunakan 1 koin ${d_k}$ memberikan solusi yang lebih optimal daripada menggunakan ${n \times d_{k-1}}$

###### Implementasi
Untuk mengimplementasikan algoritma pengecekan *Canonical*, kita perlu membuat fungsi ${canonicalCheck(D, k)}$ yang memerlukan dua parameter, yaitu set denominasi mata uang ${D [d_1, d_2, \dots, d_k]}$ dan ${k}$, jumlah jenis mata uang. Berikut algoritma untuk fungsi tersebut (asumsikan ${D}$ sudah terurut dari terkecil ke yang terbesar):
1. Jika ${d_1 \neq 1000}$, maka return *false* (set tidak *Canonical*)
2. Jika ${k \le 2}$, maka return *true* (trivial case)
3. Lakukan iterasi mulai dari ${d_3}$ hingga ${d_k}$:
	- Hitung ${n = \lceil \frac {d_i} {d_{i-1}} \rceil}$
	- Hitung ${m = n \times d_{i-1} - d_i}$
	- Jika ${greedy(D, C, i - 2) + 1 \ge n}$, maka return *false*
4. Jika iterasi selesai, maka return *true* (set bersifat *Canonical*)

Adapun langkah-langkah yang dikerjakan oleh fungsi *greedy(D, C, k)* adalah sebagai berikut:
1. Inisialisasi ${total = 0}$
2. Lakukan iterasi mundur sebanyak ${k}$ kali:
	- Jika ${C == 0}$, return ${total}$ (sisa kembalian nol)
	- Hitung ${n = \lfloor \frac C {d_i} \rfloor}$
	- Hitung ${C = C - n \times d_i}$
	- Hitung ${total = total + n}$

Berikut implementasi untuk menambahkan fitur tersebut dari algoritma utama:

```c
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

// Program Utama + Pengecekan Canonical

// Fungsi untuk menghitung banyaknya koin / lembaran yang digunakan
int greedy(int C, int D[], int k) {

	// 1. Inisialisasi variabel total
    int total = 0;

	// 2. Melakukan pengulangan mundur untuk setiap denominasi
    for (int i = k; i >= 0; i--) {
        if (C == 0) break;
        int n = C / D[i];
        C -= n * D[i];
        total += n;
    }

	// 3. Mengembalikan total koin / lembaran yang digunakan
    return total;
}

// Fungsi untuk memeriksa apakah sistem koin adalah canonical
int canonicalCheck(int D[], int k) {
	// 1. Pemeriksaan basis kasus
    if (D[0] != 1000) return 0; // Denominasi pertama harus 1000
    if (k <= 2 && D[1] > D[0]) return 1; // Jika hanya ada 2 denominasi, pasti canonical

	// 2. Pemeriksaan rekursif untuk denominasi selanjutnya
    for (int i = 2; i < k; i++) {
		// 2.1. Hitung n dan m
        int n = (int)ceil((double)D[i] / D[i-1]);
        int m = n * D[i-1] - D[i];

		// 2.2. Jika greedy(m) >= n, maka bukan canonical
        if (1 + greedy(m, D, i - 2) >= n) {
            return 0;
        }
    }

	// 3. Jika semua pemeriksaan lolos, maka canonical
    return 1;
}

// Fungsi utama untuk mencari solusi dari soal
int uangKembalian(int C, int D[], int k, int N[]){
	// 1. Memeriksa apakah sistem koin adalah canonical
	if(canonicalCheck(D, k) == 0) printf("Peringatan: Sistem koin bukan canonical\n");
	else printf("Sistem koin adalah canonical (solusi dijamin optimal)\n");

	// 2. Inisialisasi array N dengan nilai 0
	for (int i = 0; i < k; i++) N[i] = 0;

	// 3. Inisialisasi variabel total (menghitung total koin / lembaran)
	int total = 0;

	// 4. Melakukan pengulangan mundur untuk setiap denominasi
	for (int i = k-1; i >= 0; i--){
		// 4.1. Jika d_i > C, lanjut ke iterasi berikutnya
		if(C < D[i]) continue;

		// 4.2. Jika selainnya, lanjutkan perhitungan
		N[i] = C / D[i]; // Jumlah uang yang diperlukan
		C = C - N[i] * D[i]; // Update sisa kembalian
		total += N[i]; // Update total koin / lembaran
	}
	
	// 5. Jika C bukan 0, berarti tidak ada solusi
	if (C != 0){
		// Cetak error log
		printf("Error: Solusi tidak ditemukan\n");
		
		// Ubah nilai N[i] = -1
		for (int i = 0; i < k; i++) N[i] = -1;
		
		// Mengembalikan nilai -1 (tidak ada solusi)
		return -1;
	}

	// 6. Jika ada solusi
	else {
		// Mengembalikan total koin / lembaran yang digunakan
		return total;
	}
}


int main(){
	int C, k; // Inisiasi variabel C dan k
	scanf("%d %d", &C, &k); // Input nilai C dan k
	
	int D[k], N[k]; // Inisiasi array D dan N
	
	// Input nilai D
	for (int i = 0; i < k; i++) scanf("%d", &D[i]);
	
	printf("Kombinasi kembalian untuk C = %d\n\n", C);
	
	// Memanggil fungsi uangKembalian() (simpan ke variabel ans)
	int ans = uangKembalian(C, D, k, N);
	
	// Jika solusi tidak ditemukan, program berhenti
	if (ans == -1) return 0;

	// Cetak hasil (pengulangan mundur)
	for (int i = k-1; i >= 0; i--){
		// Jika uang tidak digunakan, lanjut ke iterasi berikutnya
		if(N[i] == 0) continue;

		// Cetak nilai
		printf("Denominasi %d: %d lembar\n", D[i], N[i]);
	} 
	
	// Cetak total koin / lembaran yang diperlukan
	printf("\nTotal Lembar / Koin: %d\n", ans);
	
	return 0;
}
```

Perbedaan antara program ini dengan program awal adalah adanya sistem untuk mengecek apakah set denominasi yang digunakan adalah *Canonical Coin System* atau bukan. Program akan mencetak informasi apakah set denominasi adalah *Canonical* atau tidak berdasarkan hasil dari fungsi ${canonicalCheck()}$ (${1 = true}$, ${0 = false}$)

Berikut input untuk contoh *test case* yang diberikan pada program tersebut:
```
133000 7
1000 2000 5000 10000 20000 50000 100000
```

Berikut output untuk *test case* tersebut:
```
Kombinasi kembalian untuk C = 133000

Sistem koin adalah canonical (solusi dijamin optimal)
Denominasi 100000: 1 lembar
Denominasi 20000: 1 lembar
Denominasi 10000: 1 lembar
Denominasi 2000: 1 lembar
Denominasi 1000: 1 lembar

Total Lembar / Koin: 5
```

###### Implementasi *Sorting*
Apabila ingin menambahkan algoritma *Sorting* pada program, maka fungsi ${qsort()}$ dapat ditambahkan dan diimplementasikan seperti pada program utama. 

##### Jumlah Terbatas + Pengecekan *Canonical*
###### Implementasi
Apabila kedua fitur ingin ditambahkan dalam program, maka fungsi ${canonicalCheck()}$ dan ${greedy()}$ untuk pengecekan *Canonical* perlu diubah agar sesuai dengan array ${D}$ yang telah dimodifikasi menjadi array dua dimensi (menggunakan ${D[i][0]}$). Pengecekan *Canonical* tidak perlu mengecek ketersediaan jumlah koin / lembaran, ${m_i}$, pada *vending machine* (asumsikan jumlah koin / lembaran tidak terbatas saat melakukan pengecekan *Canonical*)

Berikut implementasi untuk menambahkan kedua fitur tersebut dari algoritma utama:

```c
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

// Program Utama + Nominal Terbatas + Pengecekan Canonical 

// Fungsi untuk menghitung banyaknya koin / lembaran yang digunakan
int greedy(int C, int D[][2], int k) {

	// 1. Inisialisasi variabel total
    int total = 0;

	// 2. Melakukan pengulangan mundur untuk setiap denominasi
    for (int i = k; i >= 0; i--) {
		int nominal = D[i][0]; // Nominal mata uang
        if (C == 0) break;
        int n = C / nominal;
        C -= n * nominal;
        total += n;
    }

	// 3. Mengembalikan total koin / lembaran yang digunakan
    return total;
}

// Fungsi untuk memeriksa apakah sistem koin adalah canonical
int canonicalCheck(int D[][2], int k) {
	// 1. Pemeriksaan basis kasus
    if (D[0][0] != 1000) return 0; // Denominasi pertama harus 1000
    if (k <= 2 && D[1][0] > D[0][0]) return 1; // Jika hanya ada 2 denominasi, pasti canonical

	// 2. Pemeriksaan rekursif untuk denominasi selanjutnya
    for (int i = 2; i < k; i++) {
		// 2.1. Inisialisasi nominal dan prev_nominal
		int nominal = D[i][0];
		int prev_nominal = D[i-1][0];

		// 2.2. Hitung n dan m
        int n = (int)ceil((double)nominal / prev_nominal);
        int m = n * prev_nominal - nominal;

		// 2.3. Jika greedy(m) >= n, maka bukan canonical
        if (1 + greedy(m, D, i - 2) >= n) {
            return 0;
        }
    }

	// 3. Jika semua pemeriksaan lolos, maka canonical
    return 1;
}

// Fungsi utama untuk mencari solusi dari soal
int uangKembalian(int C, int D[][2], int k, int N[]){
	// 1. Memeriksa apakah sistem koin adalah canonical
	if(canonicalCheck(D, k) == 0) printf("Peringatan: Sistem koin bukan canonical\n");
	else printf("Sistem koin adalah canonical (solusi dijamin optimal)\n");

	// 2. Inisialisasi array N dengan nilai 0
	for (int i = 0; i < k; i++) N[i] = 0;

	// 3. Inisialisasi variabel total (menghitung total koin / lembaran)
	int total = 0;

	// 4. Melakukan pengulangan mundur untuk setiap denominasi
	for (int i = k-1; i >= 0; i--){
		int nominal = D[i][0]; // Nominal mata uang
		int stock = D[i][1]; // Jumlah lembaran uang

		// 4.1. Jika d_i > C, lanjut ke iterasi berikutnya
		if(C < nominal) continue;

		// 4.2. Jika selainnya, lanjutkan perhitungan
		N[i] = C / nominal; // Jumlah uang yang diperlukan
		if (N[i] > stock) N[i] = stock; // Jika stok uang tidak cukup
		C = C - N[i] * nominal; // Update sisa kembalian
		total += N[i]; // Update total koin / lembaran
	}
	
	// 5. Jika C bukan 0, berarti tidak ada solusi
	if (C != 0){
		// Cetak error log
		printf("Error: Solusi tidak ditemukan\n");
		
		// Ubah nilai N[i] = -1
		for (int i = 0; i < k; i++) N[i] = -1;
		
		// Mengembalikan nilai -1 (tidak ada solusi)
		return -1;
	}

	// 6. Jika ada solusi
	else {
		// Mengembalikan total koin / lembaran yang digunakan
		return total;
	}
}


int main(){
	int C, k; // Inisiasi variabel C dan k
	scanf("%d %d", &C, &k); // Input nilai C dan k
	
	int D[k][2], N[k]; // Inisiasi array D dan N
	
	// Input nilai D
	for (int i = 0; i < k; i++) scanf("%d", &D[i][0]);
	
	// Input nilai M
	for (int i = 0; i < k; i++) scanf("%d", &D[i][1]);

	printf("Kombinasi kembalian untuk C = %d\n\n", C);
	
	// Memanggil fungsi uangKembalian() (simpan ke variabel ans)
	int ans = uangKembalian(C, D, k, N);
	
	// Jika solusi tidak ditemukan, program berhenti
	if (ans == -1) return 0;

	// Cetak hasil (pengulangan mundur)
	for (int i = k-1; i >= 0; i--){
		// Jika uang tidak digunakan, lanjut ke iterasi berikutnya
		if(N[i] == 0) continue;

		// Cetak nilai
		printf("Denominasi %d: %d lembar\n", D[i][0], N[i]);
	} 
	
	// Cetak total koin / lembaran yang diperlukan
	printf("\nTotal Lembar / Koin: %d\n", ans);
	
	return 0;
}
```

Berikut input untuk contoh *test case* yang diberikan pada program tersebut:
```
246000 7
1000 2000 5000 10000 20000 50000 100000
100 100 100 100 10 2 0
```

Berikut output untuk *test case* tersebut:
```
Kombinasi kembalian untuk C = 246000

Sistem koin adalah canonical (solusi dijamin optimal)
Denominasi 50000: 2 lembar
Denominasi 20000: 7 lembar
Denominasi 5000: 1 lembar
Denominasi 1000: 1 lembar

Total Lembar / Koin: 11
```

###### Implementasi *Sorting*
Apabila ingin menambahkan algoritma *Sorting* pada program, maka fungsi ${qsort()}$ dapat ditambahkan dan diimplementasikan seperti pada program variasi dengan jumlah set denominasi yang terbatas.

###### Kelemahan Algoritma
Kelemahan dari algoritma ini telah dijelaskan pada variasi jumlah set denominasi yang terbatas, yaitu tidak dapat menemukan solusi apabila jumlah koin / lembar mata uang yang terbatas untuk nominal yang kecil

### Analisis Efisiensi Algoritma

Berikut adalah rangkuman kompleksitas waktu dan ruang untuk masing-masing algoritma dan variasi:

|                    Algoritma                     | Kompleksitas Waktu | Kompleksitas Ruang |
| :----------------------------------------------: | :----------------: | :----------------: |
|            Algoritma Utama (*Greedy*)            |      ${O(k)}$      |      ${O(k)}$      |
|             Variasi dengan *Sorting*             |  ${O(k \log k)}$   |      ${O(k)}$      |
|             Variasi Jumlah Terbatas              |      ${O(k)}$      |      ${O(k)}$      |
|          Variasi Pengecekan *Canonical*          |     ${O(k^2)}$     |      ${O(k)}$      |
| Variasi Jumlah Terbatas + Pengecekan *Canonical* |     ${O(k^2)}$     |      ${O(k)}$      |
|         Algoritma *Dynamic Programming*          | ${O(C \times k)}$  |      ${O(C)}$      |

##### Algoritma Utama
###### Kompleksitas Waktu = ${O(k)}$
Nilai ini didapatkan karena pada fungsi ${uangKembalian()}$, diperlukan pengulangan satu tingkat sebesar ${O(k)}$ untuk menghitung jumlah koin yang diperlukan:

```c
int uangKembalian(int C, int D[], int k, int N[]){
	// ...
	
	// 3. Melakukan pengulangan mundur untuk setiap denominasi
	for (int i = k-1; i >= 0; i--){
		if(C < D[i]) continue;
		N[i] = C / D[i];
		C = C - N[i] * D[i]; 
		total += N[i];
	}
	
	// ...
}
```

Selain itu, semua proses input maupun output yang dilakukan pada program juga berjalan dengan pengulangan sebanyak ${k}$ kali sehingga kompleksitasnya juga ${O(k)}$

###### Kompleksitas Ruang = ${O(k)}$
Nilai ini didapatkan karena program perlu menyimpan array ${D}$ dan ${N}$ sebanyak ${k}$ elemen sehingga kompleksitas ruangnya adalah ${O(k)}$

```c
int main(){
	// ...
	
	int D[k], N[k]; // Inisiasi array D dan N
	
	// ...
}
```

##### Variasi dengan *Sorting*
###### Kompleksitas Waktu = ${O(k \log k)}$
Nilai ini didapatkan karena fungsi ${qsort()}$ memiliki kompleksitas ${O(k \log k)}$ untuk Best dan Average Case (${O(k^2)}$ untuk Worst Case)

```c
int uangKembalian(int C, int D[], int k, int N[]){
	// 1. Mengurutkan array D
	qsort(D, k, sizeof(D[0]), comp);
	
	// ...
}
```

Karena fungsi ${qsort()}$ dijalankan sebelum pengulangan dalam fungsi ${uangKembalian()}$, maka kompleksitas total untuk program ini adalah:
$$
O(k) + O(k \log k) = O(k \log k)
$$

###### Kompleksitas Ruang = ${O(k)}$
Tidak ada perubahan pada kompleksitas ruang dari algoritma utama untuk variasi ini

##### Variasi dengan Jumlah Terbatas
###### Kompleksitas Waktu = ${O(k)}$
Meskipun nilai kompleksitasnya sama seperti algoritma utama, namun program berjalan lebih lambat dari algoritma utama karena adanya pengecekan tambahan untuk jumlah koin / lembaran pada loop utama di fungsi ${uangKembalian()}$

```c
int uangKembalian(int C, int D[][2], int k, int N[]){
	// ...
	
	// 3. Melakukan pengulangan mundur untuk setiap denominasi
	for (int i = k-1; i >= 0; i--){
		// ...
		
		if(N[i] > stock) N[i] = stock; // Pengecekan tambahan
		
		// ...
	}
	
	// ...
}
```

###### Kompleksitas Ruang = ${O(k)}$
Meskipun nilai kompleksitasnya sama seperti algoritma utama, namun secara riilnya, program ini memerlukan ruang tambahan sebesar ${O(k)}$ karena array ${D}$ perlu menyimpan data tambahan, yaitu ${m_i}$

```c
int main(){
	// ...
	
	int D[k][2], N[k]; // Inisiasi array D dan N
	
	// ...
}
```

##### Variasi dengan Pengecekan *Canonical*
###### Kompleksitas Waktu = ${O(k^2)}$
Nilai kompleksitas variasi ini lebih tinggi dari algoritma utama karena fungsi ${canonicalCheck()}$ pada program memerlukan pengulangan satu tingkat yang pada setiap iterasinya juga memanggil fungsi ${greedy()}$ yang melakukan pengulangan satu tingkat. Hal ini menyebabkan fungsi ${canonicalCheck()}$ melakukan *nested loop* sebanyak dua tingkat sehingga kompleksitasnya menjadi ${O(k^2)}$

```c
int greedy(int C, int D[], int k) {
	// ...

	// Loop sebanyak k kali
    for (int i = k; i >= 0; i--) {
        if (C == 0) break;
        int n = C / D[i];
        C -= n * D[i];
        total += n;
    }

	// ...
}

int canonicalCheck(int D[], int k) {
	// ...

	// Loop sebanyak k-2 kali
    for (int i = 2; i < k; i++) {
		// ...
		
		// Fungsi greedy() akan melakukan loop satu tingkat
        if (1 + greedy(m, D, i - 2) >= n) {
            return 0;
        }
    }

	// ...
}
```

###### Kompleksitas Ruang = ${O(k)}$
Tidak ada perubahan pada kompleksitas ruang dari algoritma utama untuk variasi ini

##### Jumlah Terbatas + Pengecekan *Canonical*
###### Kompleksitas Waktu = ${O(k^2)}$
Meskipun nilai kompleksitasnya sama seperti variasi pengecekan *Canonical*, namun program akan berjalan lebih lambat karena jumlah pengulangan dan pengecekan yang lebih banyak dari variasi awalnya.

###### Kompleksitas Ruang = ${O(k)}$
Nilai riil dari memori yang diperlukan pada variasi ini sama seperti variasi Jumlah Terbatas

##### Algoritma *Dynamic Programming*
###### Kompleksitas Waktu = ${O(C \times k)}$
Nilai ini didapatkan karena terdapat pengulangan dua tingkat yang dilakukan pada algoritma *Dynamic Programming*
- Loop pertama sebanyak ${C-1}$ kali untuk mengisi nilai setiap sub-masalah
- Loop kedua sebesar ${k}$ kali untuk menentukan nilai optimal dari setiap sub-masalah

Pengulangan dua tingkat yang terjadi membuat algoritma ini memiliki kompleksitas waktu sebesar ${O(C \times k)}$

###### Kompleksitas Ruang = ${O(C)}$
Keperluan ruang untuk algoritma *Dynamic Programming* jauh lebih besar dari algoritma *Greedy* karena program perlu menyimpan hasil setiap sub-masalah yang ada. Hal ini membuat algoritma *Dynamic Programming* memiliki kompleksitas waktu yang lebih baik meskipun memerlukan memori yang lebih besar.

### Kesimpulan
Berdasarkan analisis semua algoritma yang ada, berikut algoritma yang ideal untuk masing-masing skenario dalam masalah *Change-Making Problem*
#### Kapan Algoritma *Greedy* Ideal?
Algoritma *Greedy* sangat ideal untuk digunakan apabila:
- Set denominasi mata uang memenuhi *Canonical Coin System*
- Tidak ada batasan jumlah koin / lembar untuk nilai mata uang

Kompleksitas waktu dan ruang yang lebih baik dari pendekatan *Dynamic Programming* membuat algoritma *Greedy* jauh lebih baik untuk set denominasi atau *test case* spesifik. Meskipun set denominasi memerlukan proses *Sorting* terlebih dahulu, kompleksitas waktu algoritma *Greedy*, yaitu ${O(k \log k)}$ masih jauh lebih baik daripada pendekatan *Dynamic Programming*, ${O(C \times k)}$

#### Kapan Algoritma *Greedy* Kurang Baik?
##### Jika Jumlah Koin / Lembar Uang Terbatas
Meskipun kompleksitas untuk penyelesaian masalah tersebut menggunakan algoritma *Greedy* lebih baik dari pendekatan *Dynamic Programming*, akan tetapi algoritma ini tidak bekerja dengan baik untuk setiap kasus yang ada, yaitu ketika jumlah koin / lembaran uang yang terbatas untuk nominal yang kecil. Oleh karena itu, algoritma *Dynamic Programming* lebih baik untuk kasus ini karena hasilnya yang konsisten merupakan solusi optimal

##### Jika Set Denominasi Bukan *Canonical Coin System*
Variasi algoritma *Greedy* untuk menyelesaikan masalah ini memiliki kompleksitas waktu yang lebih tinggi dari pendekatan *Dynamic Programming*. Selain itu, variasi algoritma yang diberikan di atas hanya berfungsi untuk mengecek suatu set denominasi adalah *Canonical* atau tidak, bukan mencari solusi optimal sebenarnya dari persoalan.


