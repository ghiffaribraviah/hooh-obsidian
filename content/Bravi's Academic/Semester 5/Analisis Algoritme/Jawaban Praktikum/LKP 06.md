Analisis Algoritme - R2 <br>Ghiffari Bravia Hisham (G6401231050)

### A. Algoritme Pemangkatan Modulo

>Diberikan nilai-nilai ${a, n}$, dan ${m}$, tentukan nilai dari ${a^n \; mod \; m}$
#### 1. Iterasi ${a^1, a^2, ..., a^n}$

>Kita dapat melakukan perhitungan secara iteratif, mulai dari ${a, a^2, a^3, ...}$ sampai ditemukan nilai ${a^n}$, kemudian hitung nilai ${a^n \; mod \; m}$. Tuliskan algoritme lengkapnya dan tentukan kompleksitas waktunya!
>
>Apa kelemahan dari algoritme ini?

```c
int a, m, n, b = 1;
for(int i = 0; i < n; i++){
	b = b * a;
}
b = b % m;
```

Kompleksitas waktu untuk algoritme ini adalah ${O(n)}$ karena hanya perlu melakukan satu kali loop sebanyak n kali. Kelemahan dari algoritme ini adalah potensi terjadinya overflow untuk nilai n besar bila suatu nilai ${a^i > INT\_MAX}$ yang menyebabkan kesalahan perhitungan.

#### 2. Iterasi ${b = b*a \; mod \; m}$

>Kita dapat juga melakukan perhitungan modulo pada setiap langkahnya sehingga pada setiap langkah, tidak didapatkan nilai ${a^i}$ yang terlalu besar: pertama hitung ${b = a \; mod \; m}$, kemudian hitung ${c = ba \; mod \; m}$ dst. Tuliskan algoritme lengkapnya!
>
>Apakah kompleksitasnya sama dengan versi pertama tadi?

Rumus modulo yang diperlukan
$$
ba \; mod \; m = ((b \; mod \; m) * (a \; mod \; m)) \; mod \; m
$$

```c
int a, m, n, b = 1;
for(int i = 0; i < n; i++){
	b = ((b % m) * (a % m)) % m;
}
```

Kompleksitas waktu untuk algoritme ini adalah ${O(n)}$ karena hanya perlu melakukan satu kali loop sebanyak n kali. Kompleksitas waktu dari algoritme ini sama dengan algoritme sebelumnya meskipun secara perhitungan detail ${T(n)}$, algoritme ini sedikit lebih lambat. Hal ini terjadi karena adanya operasi modulus tambahan ${ba \; mod \; m}$ yang terjadi pada setiap iterasi (3 operasi modulus / iterasi) sehingga dapat dikatakan bahwa ${T_2(n) = 4 T_1(n)}$. Akan tetapi, algoritme ini dipastikan bebas dari overflow selama ${m < INT\_MAX}$.

#### Iterasi ${n = 2^k}$ 

>Perhatikan bahwa untuk menghitung nilai pangkat n di mana ${n = 2^k}$ untuk sebuah bilangan bulat k tertentu, kita cukup melakukan proses sebagai berikut:
>
>Hitung ${b = a \; mod \; m}$ kemudian hitung ${c = b^2 \; mod \; m}$ dst, sampai ${k}$ kali. Ini tentukan akan lebih cepat dari pada pendekatan sebelumnya. Tuliskan algoritme yang lebih umum untuk melakukan pemangkatan seperti ini untuk sebarang nilai n, dan hitung kompleksitas waktunya!

Rumus modulo yang diperlukan
$$
ba \; mod \; m = ((b \; mod \; m) * (a \; mod \; m)) \; mod \; m
$$

```c
int a, m, n;
int b = 1 % m; 
for(int i = n; i > 0; i = i / 2){
    if(i % 2 == 1) b = ((b % m) * (a % m)) % m;
    a = ((a % m) * (a % m)) % m;
}
```

Algoritme ini bekerja untuk semua nilai n dengan mengubah b menjadi hasil perkalian dari ${a^x}$ untuk nilai ${x = 2^p}$ . Misalnya
$$
b = 2^7 = 2^1 * 2^2 * 2^4
$$
$$
b = 5^{10} = 5^2 * 5^8
$$

Nilai ${a^x}$ yang dikalikan ke b ditentukan dari variabel i. Bila nilai i adalah ganjil saat iterasi berlangsung, maka b akan dikalikan dengan ${a^x}$. Pada setiap iterasi, nilai a akan dikalikan dengan dirinya sendiri sehingga pangkatnya bertambah secara eksponen basis 2.

Kompleksitas waktu untuk algoritme ini adalah ${O(log(n))}$ karena hanya perlu melakukan satu loop sebanyak ${log_2(n)}$ kali. 

### Pencarian Monoton 2D

> Diberikan matriks ${A[m \times n]}$  sedemikian rupa sehingga:
>  
>  ${A[i][n] \le A[i+1][1], \; 1 \le i \le m - 1 }$ (dengan kata lain, semua elemen terurut dari pertama sampai terakhir) 
>  
>  Carilah algoritme pencarian pada matriks dengan kompleksitas terbaik.

Solusi dari permasalahan ini adalah dengan menggunakan binary search untuk array 2D. Referensi di [sini](https://www.geeksforgeeks.org/dsa/search-element-sorted-matrix/).


```c
int m, n;
int arr[m][n]; // matriks m x n  

int x; // value yang ingin dicari
int ans_row = -1; // posisi baris nilai x pada arr
int ans_col = -1; // posisi kolom nilai x pada arr

int low = 0; // batas bawah pencarian
int high = m * n; // batas atas pencarian

while(low <= high){
	int mid = (low + high) / 2; // titik yang dicari
	int row = mid / n; // nilai baris dari titik
	int col = mid % n; // nilai kolom dari titik
	
	if(arr[row][col] == x){ // Jika elemen ditemukan
		ans_row = row; // Update ans_row
		ans_col = col; // Update ans_col
		break; // Hentikan loop
	}
	
	else if (arr[row][col] < x) // Jika elemen lebih kecil
		low = mid + 1; // Naikkan nilai low (search ke kanan)
		
	else // Jika sebaliknya
		high = mid - 1; // Turunkan nilai high (search ke kiri)
}

printf("%d %d", ans_row, ans_col) // Cetak nilai
```

Algoritme ini memiliki kompleksitas waktu sebesar ${O(log(m*n))}$

### C. Biggest Sum Submatrix

>Diberikan matriks ${A[n \times n]}$, buatlah algoritme untuk mencari submatriks ${B[n-1 \times n-1]}$ dari A dengan jumlah terbesar, dan lakukan analisis kompleksitas algoritme tersebut!

Algoritma untuk menyelesaikan masalah ini adalah sebagai berikut:
1. Iterasi setiap elemen pada matriks A untuk mendapatkan jumlah elemen setiap baris, ${sum\_row[n]}$ dan kolom, ${sum\_col[n]}$
2. Lakukan iterasi sebanyak n kali untuk mengecek ${sum\_row[n]}$ dan ${sum\_col[n]}$
	- Dapatkan index untuk nilai terkecil dari ${sum\_row[n]}$ sebagai ${ex\_row}$
	- Dapatkan index untuk nilai terkecil dari ${sum\_col[n]}$ sebagai ${ex\_col}$
3. Insiasi ${bi = 0}$ (variabel index baris untuk matriks B)
4. Lakukan iterasi sebanyak n x n kali, masing-masing pada variabel i dan j
5. Dalam setiap iterasi, lakukan eksekusi berikut:
	- Saat loop i dimulai, set ${bj = 0}$ (variabel index kolom untuk matriks B)
	- Apabila ${i = ex\_row}$, maka continue ke loop i berikutnya
	- Apabila ${j = ex\_col}$, maka continue ke loop j berikutnya
	- Nilai ${B[bi][bj] = A[i][j]}$
	- Setelah setiap iterasi loop j, increment nilai bj sebanyak 1
	- Setelah setiap iterasi loop i, increment nilai bi sebanyak 1

Berikut implementasi dari algoritma yang ada
```c
int n;
int A[n][n];
int B[n-1][n-1];

int sum_row[n] = {0};
int sum_col[n] = {0};

for(int i = 0; i < n; i++){
	for(int j = 0; j < n; j++){
		sum_row[i] += A[i][j];
		sum_col[j] += A[i][j];
	}
}

int lo_sum_row = sum_row[0];
int lo_sum_col = sum_col[0];

int ex_row = 0;
int ex_col = 0;

for(int i = 1; i < n; i++){
	if (lo_sum_row > sum_row[i]){
		lo_sum_row = sum_row[i];
		ex_row = i;
	}
	
	if (lo_sum_col > sum_col[i]){
		lo_sum_col = sum_col[i];
		ex_col = i;
	}
}

int bi = 0;
for(int i = 0; i < n; i++){
	if(i == ex_row) continue;
	int bj = 0;
	for(int j = 0; j < n; j++){
		if(j == ex_col) continue;
		B[bi][bj] = A[i][j];
		bj++;
	}
	bi++;
}
```

Kompleksitas dari algoritma ini adalah ${O(n^2)}$
