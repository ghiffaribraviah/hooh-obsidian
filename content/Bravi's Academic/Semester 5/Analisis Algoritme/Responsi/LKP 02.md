[[Bravi's Academic/Semester 5/Analisis Algoritme/Responsi/index|Analisis Algoritme]] - R2 <br>Ghiffari Bravia Hisham (G6401231050)

### Soal 1

>Anggap bahwa setiap ekspresi di bawah ini memberikan waktu pemrosesan T(n) yang dihabiskan oleh suatu algoritma untuk menyelesaikan masalah dengan ukuran n. Tentukan dominant terms dan kompleksitas Big-Oh dari setiap algoritma.

| Expression                            | Dominant Term    | Kompleksitas    |
| ------------------------------------- | ---------------- | --------------- |
| ${5 + 0.001n^3 + 0.025n}$             | ${0.001n^3}$     | ${O(n^3)}$      |
| ${500n + 100n^{1.5} + 50n\log_{10}n}$ | ${100n^{1.5}}$   | ${O(n^{1.5})}$  |
| ${100n + 0.01n^2}$                    | ${0.01n^2}$      | ${O(n^2)}$      |
| ${0.01n + 100n^2}$                    | ${100n^2}$       | ${O(n^2)}$      |
| ${2n + n^{0.5} + 0.5n^{1.25}}$        | ${0.5n^{1.25}}$  | ${O(n^{1.25})}$ |
| ${100n \log_3n + n^3 + 100n}$         | ${n^3}$          | ${O(n^3)}$      |
| ${0.003\log_4n + \log_2\log_2n}$      | ${0.003\log_4n}$ | ${O(\log n)}$   |

### Soal 2

>Salah satu dari dua paket perangkat lunak, A atau B, harus dipilih.
#### Jawaban 2A

>Waktu pemrosesan rata-rata paket A adalah ${T_A(n) = 0.1n\log_2n}$ mikrodetik, dan waktu pemrosesan rata-rata paket B adalah ${T_B(n) = 5n}$ mikrodetik. Algoritme mana yang memiliki kinerja lebih baik untuk memproses basis data yang berisi hingga ${10^{12}}$ record?

##### Perbandingan Algoritme untuk Worst Case
Berikut perhitungan nilai ${T_A(n)}$ untuk ${n = 10^{12}}$
$$
T_A(10^{12}) = 0.1(10^{12})*\log_2(10^{12})
$$
$$
T_A(10^{12}) = 10^{11}*12\log_2(10)
$$
$$
T_A(10^{12}) \approx 10^{11} * 12(3)
$$
$$
T_A(10^{12}) \approx 36 * 10^{11}
$$
Berikut perhitungan nilai ${T_B(n)}$ untuk ${n = 10^{12}}$
$$
T_B(10^{12}) = 5(10^{12})
$$
$$
T_B(10^{12}) = 50 * 10^{11}
$$
Untuk worst case, yaitu ketika jumlah data ${n = 10^{12}}$, algoritme ${T_A(n)}$ lebih cepat dibandingkan ${T_B(n)}$

##### Kapan ${T_B(n)}$ lebih baik?
Algoritme ${T_B(n)}$ lebih cepat dari ${T_A(n)}$ bila nilai n memenuhi syarat berikut:
$$
T_B(n) \lt T_A(n)
$$
$$
5n \lt 0.001n * \log_2n
$$
$$
5000 \lt \log_2n
$$
Algoritma ${T_B(n)}$ akan lebih cepat untuk nilai ${n \gt 2^{5000}}$, atau hampir sama dengan ${n \gt 10^{1505}}$. Karena jumlah data maksimal hanya ${n = 10^{12}}$, maka kondisi di mana algoritme ${T_B(n)}$ tidak mungkin terjadi

##### Kesimpulan
Algoritme ${T_A(n)}$ lebih baik dari ${T_B(n)}$ untuk semua nilai n yang mungkin terjadi pada persoalan (${n \le 10^{12}}$)

#### Jawaban 2B

>Waktu pemrosesan rata-rata paket A adalah ${T_A(n) = 0.001n}$ milidetik dan waktu pemrosesan rata-rata paket B adalah ${T_B(n) = 500\sqrt n}$ milidetik. Algoritme mana yang memiliki kinerja lebih baik untuk memproses basis data yang berisi hingga ${10^9}$ record?

##### Perbandingan Algoritme untuk Worst Case
Berikut perhitungan nilai ${T_A(n)}$ untuk ${n = 10^9}$
$$
T_A(10^9) = 0.001(10^9)
$$
$$
T_A(10^9) = 10^6
$$
Berikut perhitungan nilai ${T_B(n)}$ untuk ${n = 10^9}$
$$
T_B(10^9) = 500\sqrt{10^9}
$$
$$
T_B(10^9) = 500*10^4*\sqrt {10}
$$
$$
T_B(10^9) = 5\sqrt{10} * 10^6
$$
Untuk worst case, yaitu ketika jumlah data ${n = 10^9}$, algoritme ${T_A(n)}$ lebih cepat dibandingkan ${T_B(n)}$

##### Kapan ${T_B(n)}$ lebih baik?
Algoritme ${T_B(n)}$ lebih cepat dari ${T_A(n)}$ bila nilai n memenuhi syarat berikut:
$$
T_B(n) \lt T_A(n)
$$
$$
500\sqrt n \lt 0.001n
$$
$$
25*10^4*n \lt 10^{-6} * n^2
$$
$$
25*10^{10} \lt n
$$
Algoritma ${T_B(n)}$ akan lebih cepat untuk nilai ${n \gt 25 * 10^{10}}$. Karena jumlah data maksimal hanya ${n = 10^9}$, maka kondisi di mana algoritme ${T_B(n)}$ tidak mungkin terjadi

##### Kesimpulan
Algoritme ${T_A(n)}$ lebih baik dari ${T_B(n)}$ untuk semua nilai n yang mungkin terjadi pada persoalan (${n \le 10^9}$)

### Soal 3

>Tentukan F(n) dan kompleksitas dari potongan kode berikut

#### Jawaban 3A

```c
for(i = 0; i < n; i++){
	for(j = 0; j < n; j++){
		for(k = 0; k < n; k++){
			// Operasi yang jumlahnya konstan (C)
		}
	}
}
```

##### Perhitungan F(n) untuk loop ketiga
$$
loop_3 = 1 + \sum_{k=0}^{n-1}C + (n+1)
$$
$$
loop_3 = (n + 2) + Cn
$$
$$
loop_3 = Cn + n + 2
$$
##### Perhitungan F(n) untuk loop kedua
$$
loop_2 = 1 + \sum_{j = 0}^{n-1} loop_3 + (n + 1)
$$
$$
loop_2 = (n + 2) + \sum_{j = 0}^{n-1} {(Cn + n + 2)}
$$
$$
loop_2 = (n + 2) + (Cn^2 + n^2 + 2n)
$$
$$
loop_2 = Cn^2 + n^2 + 3n + 2
$$
##### Perhitungan F(n) untuk Program 3A
$$
F(n) = loop_1 = 1 + \sum_{i = 0}^{n-1}loop_2 + (n + 1)
$$
$$
F(n) = (n + 2) + \sum_{i = 0}^{n-1}{(Cn^2 + n^2 + 3n + 2)}
$$
$$
F(n) = (n + 2) + (Cn^3 + n^3 + 3n^2 + 2n)
$$
$$
F(n) = Cn^3 + n^3 + 3n^2 + 3n + 2
$$
##### Perhitungan Kompleksitas
Kompleksitas dari program 3A adalah:
$$
O(Cn^3 + n^3 + 3n^2 + 3n + 2) = O(n^3)
$$

#### Jawaban 3B

```c
for(i = n; i > 0; i /= 2){
	for(j = 1; j < n; j *= 2){
		for(k = 0; k < n; k += 2){
			// Operasi yang jumlahnya konstan (C)
		}
	}
}
```

##### Konversi Iterator menjadi Sequence
- Variabel i (loop pertama) -> p
$$
i = n, \frac n 2, \frac n 4, \dots,1
$$
$$
i = \frac n {2^0}, \frac n {2^1}, \frac n {2^2}, \dots, \frac n {2^{\log_2n}} = \frac n {2^p} \;;\; p = 0, 1, 2, \dots, \log_2n
$$
- Variabel j (loop kedua) -> q
$$
j = 1, 2, 4, \dots, \frac n 2
$$
$$
j = 2^0, 2^1, 2^2, ..., 2^{\log_2n - 1} = 2^q \;;\; q = 0, 1, 2, \dots, \log_2n-1
$$
- Variabel k (loop ketiga) -> r
$$
k = 0, 2, 4, \dots, n-2
$$
$$
k = 0, 2(1), 2(2), \dots, 2(\frac 1 2 n-1) = 2r \;;\; r = 0, 1, 2, \dots, \frac 1 2 n-1
$$
##### Perhitungan F(n) untuk loop ketiga
$$
loop_3 = 1 + \sum_{k=0}^{\frac 1 2n-1}C + (\frac 1 2 n + 1)
$$
$$
loop_3 = (\frac 1 2 n + 2) + C(\frac 1 2 n)
$$
$$
loop_3 = \frac 1 2Cn + \frac 1 2n + 2
$$
##### Perhitungan F(n) untuk loop kedua
$$
loop_2 = 1 + \sum_{j = 0}^{\log_2n - 1} loop_3 + (log_2n + 1)
$$
$$
loop_2 = (\log_2n + 2) + \sum_{j = 0}^{log_2n-1} {(\frac 1 2Cn + \frac 1 2n + 2)}
$$
$$
loop_2 = (\log_2n + 2) + (\frac 1 2 Cn\log_2n + \frac 1 2 n\log_2n + 2\log_2n)
$$
$$
loop_2 = \frac 1 2 Cn\log_2n + \frac 1 2 n\log_2n + 3\log_2n + 2
$$
##### Perhitungan F(n) untuk Program 3B
$$

$$
