[[Bravi's Academic/Semester 5/Kecerdasan Buatan/Tugas Kuliah/index|Kecerdasan Buatan]] - K2 <br>Ghiffari Bravia Hisham (G6401231050)

### Soal 1

>NAIVE BAYES. Perhatikan tabel di bawah ini

| Pengalaman (PGN) | Komunikasi (KOM) | IPK     | Keputusan |
| -------------------- | -------------------- | ----------- | ------------- |
| Sedikit              | Baik                 | Baik        | Ya            |
| Sedikit              | Cukup                | Sangat Baik | Ya            |
| Sedang               | Cukup                | Baik        | Ya            |
| Sedang               | Kurang               | Cukup       | Tidak         |
| Sedikit              | Baik                 | Kurang      | Tidak         |
| Banyak               | Kurang               | Kurang      | Tidak         |
| Banyak               | Kurang               | Baik        | Ya            |
| Sedikit              | Baik                 | Baik        | Ya            |
| Banyak               | Sangat Baik          | Cukup       | Ya            |
>A. Tentukan apakah seorang calon akan diterima atau tidak jika dia memiliki Pengalaman Sedang, Komunikasi Baik, dan IPK Kurang?  
>B. Tentukan berapa peluang dia akan ditolak jika dia memiliki Pengalaman Sedikit, Komunikasi Kurang, dan IPK nya Baik?

#### Jawaban 1A
Diketahui:
- ${P(Yes) = \frac 6 9 = \frac 2 3}$
- ${P(No) = \frac 3 9 = \frac 1 3}$
- ${P(PGN = Sedang | Yes) = \frac 1 6}$
- ${P(KOM = Baik|Yes) = \frac 2 6 = \frac 1 3}$
- ${P(IPK = Kurang|Yes) = 0}$
- ${P(PGN = Sedang|No) = \frac 1 3}$
- ${P(KOM = Baik|No) = \frac 1 3}$
- ${P(IPK = Kurang|No) = \frac 2 3}$

##### Perhitungan ${P(X|Yes) \times P(Yes)}$
$$
P(X|Yes)\times P(Yes) = P(PGN = Sedang|Yes) \times P(KOM = Baik|Yes) \times P(IPK = Kurang | Yes) \times P(Yes)
$$
$$
P(X|Yes) \times P(Yes) = \frac 1 6 \times \frac 1 3 \times 0 \times \frac 2 3
$$
$$
P(X|Yes) \times P(Yes) = 0
$$

##### Perhitungan ${P(X|No) \times P(No)}$
$$
P(X|No) \times P(No) = P(PGN = Sedang|No) \times P(KOM = Baik|No) \times P(IPK = Kurang|No) \times P(No)
$$
$$
P(X|No) \times P(No) = \frac 1 3 \times \frac 1 3 \times \frac 2 3 \times \frac 1 3
$$
$$
P(X|No) \times P(No) = \frac {2}{81}
$$

##### Kesimpulan
Karena ${P(X|Yes) \times P(Yes) \lt P(X|No) \times P(No)}$, maka calon diprediksi tidak diterima

#### Jawaban 1B
Diketahui:
- ${P(Yes) = \frac 2 3}$
- ${P(No) = \frac 1 3}$
- ${P(PGN = Sedikit|Yes) = \frac 1 3}$
- ${P(KOM = Kurang|Yes) = \frac 1 9}$
- ${P(IPK = Baik|Yes) = \frac 4 9}$
- ${P(PGN = Sedikit|No) = \frac 1 9}$
- ${P(KOM = Kurang|No) = \frac 2 3}$
- ${P(IPK = Baik|No) = 0}$

##### Kesimpulan
Karena diketahui ${P(IPK = Baik|No) = 0}$, maka peluang calon ditolak akan sama dengan nol.


### Soal 2
![[Pasted image 20251114100359.png]]

>Sebelum menjawab, kita perlu memahami bahwa jaringan LO-CO-IO membentuk struktur diverging. Artinya, IO menjadi penyebab dari LO dan CO. Untuk menghitung peluang bersyarat, digunakan aturan dasar probabilitas dan penjumlahan atas seluruh state IO.  
- ${P(IO) = 0.6}$
- ${P(\sim IO) = 0.4}$
- ${P(LO|IO) = 0.5}$
- ${P(LO| \sim IO) = 0.05}$
- ${P(CO|IO) = 0.8}$
- ${P(CO | \sim IO) = 0.1}$

>A. Berapa ${P(LO|CO)}$?  
>B. Berapa ${P(CO|LO)}$?

#### Jawaban 2A
##### Mencari ${P(CO)}$
$$
P(CO) = P(CO|IO) \times P(IO) + P(CO|\sim IO) \times P(\sim IO)
$$
$$
P(CO) = 0.8 \times 0.6 + 0.1 \times 0.4
$$
$$
P(CO) = 0.52
$$
##### Mencari ${P(LO, CO)}$
$$
P(LO, CO) = P(LO|IO) \times P(CO|IO) \times P(IO) + P(LO|\sim IO) \times P(CO| \sim IO) \times P(\sim IO)
$$
$$
P(LO, CO) = 0.5 \times 0.8 \times 0.6 + 0.05 \times 0.1 \times 0.4
$$
$$
P(LO, CO) = 0.242
$$
##### Mencari ${P(LO|CO)}$
$$
P(LO|CO) = \frac {0.242}{0.52} = 0.465
$$
Peluang lampu menyala ketika komputer menyala adalah **46.5%**

#### Jawaban 2B
##### Mencari ${P(LO)}$
$$
P(LO) = P(LO|IO) \times P(IO) + P(LO|\sim IO) \times P(\sim IO)
$$
$$
P(LO) = 0.5 \times 0.6 + 0.05 \times 0.4
$$
$$
P(LO) = 0.32
$$
##### Mencari ${P(CO, LO)}$
Menggunakan hasil perhitungan ${P(LO, CO)}$ pada jawaban 2A
$$
P(CO, LO) = P(LO, CO) = 0.242
$$
##### Mencari ${P(CO|LO)}$
$$
P(CO|LO) = \frac{P(CO, LO)}{P(LO)}
$$
$$
P(CO|LO) = \frac {0.242}{0.32} = 0.756
$$
Peluang komputer menyala ketika lampu menyala adalah **75.6%**

### Soal 3
![[Pasted image 20251114101712.png]]

>Diketahui:
- TB = Tuberculosis
- PX = Positive X-Ray
- SB = Shortness of Breath
- SM = Smoker
- L = Lung Cancer
- B = Bronchitis

>A. Berapa peluang ${P(TB|SB, PX)}$?  
>B. Berapa peluang ${P(PX|SM)}$?

#### Jawaban 3A
Karena TB dan L memengaruhi PX, serta L dan B memengaruhi SB, maka semua variabel penyebab yang relevan harus dijumlahkan terlebih dahulu:
$$
P(TB|SB, PX) = \alpha \times P(TB) \times \sum_L {(P(L)P(PX|TB, L)\sum_B{P(B)P(SB|L, B)})}
$$

#### Jawaban 3B
Karena SM memengaruhi L dan B, serta PX dipengaruhi TB dan L, maka peluang bersyaratnya menjadi seperti berikut:
$$
P(PX|SM) = \sum_{TB}{\sum_L{P(PX|TB, L)P(TB)P(L|SM)}}
$$

### Soal 4
![[Pasted image 20251114102640.png]]

>Jika diketahui bahwa pasien memiliki High Blood Pressure, berapa peluang pasien itu menderita heart disease?

#### Jawaban
Diketahui:
- HD = Heart Disease
- BP = Blood Pressure
- E = Exercise
- D = Diet

Karena BP dipengaruhi oleh HD, dan HD dipengaruhi oleh E dan D, maka perlu dihitung terlebih dahulu semua priornya.

##### Menghitung ${P(HD = Yes)}$ dan ${P(HD = No)}$
$$
P(HD = Yes) = \sum_E{\sum_D{P(E)P(D)P(HD = Yes|E, D)}}
$$
- E = Yes, D = Healthy -> ${P(HD = Yes) = 0.7 \times 0.25 \times 0.25 = 0.04375}$
- E = Yes, D = Unhealthy -> ${P(HD = Yes) = 0.7 \times 0.75 \times 0.45 = 0.23625}$
- E = No, D = Healthy -> ${P(HD = Yes) = 0.3 \times 0.25 \times 0.55 = 0.04125}$
- E = No, D = Unhealthy -> ${P(HD = Yes) = 0.3 \times 0.75 \times 0.75 = 0.16875}$
$$
P(HD = Yes) = 0.04375 + 0.23625 + 0.04125 + 0.16875 = 0.49
$$
Sehingga didapatkan:
$$
P(HD = Yes) = 0.49
$$
$$
P(HD = No) = 1 - P(HD = Yes) = 0.51
$$

##### Menghitung ${P(BP = High)}$
$$
P(BP = High) = P(BP = High | HD = Yes) \times P(HD = Yes) + P(BP = High | HD = No) \times P(HD = No)
$$
$$
P(BP = High) = 0.85 \times 0.49 + 0.20 \times 0.51
$$
$$
P(BP = High) = 0.5185
$$

##### Menghitung ${P(HD = Yes | BP = High)}$
$$
P(HD = Yes|BP = High) = \frac {P(BP = High|HD = Yes)\times P(HD = Yes)}{P(BP = High)}
$$
$$
P(HD = Yes|BP = High) = \frac {0.85 \times 0.49}{0.5185}
$$
$$
P(HD = Yes|BP = High) \approx 0.8033
$$
Peluang seorang pasien menderita Heart Disease jika diketahui memiliki High Blood Pressure adalah sekitar **80.3%**

### Soal 5
![[Pasted image 20251114104155.png]]

>Jika mahasiswa sudah study, berapa peluang dia akan pass (lulus)?

#### Jawaban
Diketahui:
- P = Pass
- Pr = Prepared
- F = Fair
- Sm = Smart
- S = Study

Lalu terdapat hubungan kausalitas sebagai berikut:
- Sm dan S memengaruhi Pr
- Sm, Pr, dan F memengaruhi P

Berdasarkan informasi di atas, didapatkan formula berikut:
$$
P(P|S) = \sum_{Sm}{\sum_{Pr}{\sum_F{P(F)P(Sm)P(Pr|Sm, S)P(P|Sm, Pr, F)}}}
$$

Untuk setiap kombinasi Sm, Pr, dan F, berikut adalah hasil perhitungan dari formula tersebut:

| Sm  | Pr  |  F  | ${P(P\|Sm, Pr, F)}$ | ${P(Pr \| Sm, S)}$ | ${P(Sm)}$ | ${P(F)}$ | Hasil  |
| :-: | :-: | :-: | :-----------------: | :----------------: | :-------: | :------: | :----: |
|  1  |  1  |  1  |         0.9         |        0.9         |    0.8    |   0.9    | 0.5832 |
|  1  |  1  |  0  |         0.1         |        0.9         |    0.8    |   0.1    | 0.0072 |
|  1  |  0  |  1  |         0.7         |        0.1         |    0.8    |   0.9    | 0.0504 |
|  1  |  0  |  0  |         0.1         |        0.1         |    0.8    |   0.1    | 0.0008 |
|  0  |  1  |  1  |         0.7         |        0.7         |    0.2    |   0.9    | 0.0882 |
|  0  |  1  |  0  |         0.1         |        0.7         |    0.2    |   0.1    | 0.0014 |
|  0  |  0  |  1  |         0.2         |        0.3         |    0.2    |   0.9    | 0.0108 |
|  0  |  0  |  0  |         0.1         |        0.3         |    0.2    |   0.1    | 0.0006 |
$$
P(P|S) = 0.5832 + 0.0072 + 0.0504 + 0.0008 + 0.0882 + 0.0014 + 0.0108 + 0.0006
$$
$$
P(P|S) = 0.7426
$$
Peluang seseorang lulus ujian jika diketahui sudah belajar adalah **74.26%**
