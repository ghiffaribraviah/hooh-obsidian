 [[Bravi's Academic/Semester 5/Analisis Algoritme/Responsi/index|Analisis Algoritme]]- R2 <br>Ghiffari Bravia Hisham (G6401231050)

### Soal 1

>Carilah titik potong antara dua fungsi berikut dengan menggunakan metode subtitusi, eliminasi, atau determinan (salah satu saja)
#### Jawaban 1A. ${f(x) = 2x+3 \;;\; g(x) = -x+5}$
$$
f(x) = g(x)
$$
$$
2x + 3 = -x + 5
$$
$$
3x = 2
$$
$$
x = \frac 2 3
$$
$$
y = 2(\frac 2 3) + 3 = 4.33
$$
$$
(x, y) = (0.67, 4.33)
$$
#### Jawaban 1B. ${f(x) = 3x-4 \;;\; g(x) = 2x+1}$
$$
f(x) = g(x)
$$
$$
3x - 4 = 2x + 1
$$
$$
x = 5
$$
$$
y = 2(5) + 1 = 11
$$
$$
(x, y) = (5, 11)
$$
#### Jawaban 1C. ${f(x) = x^2-4x+3 \;;\; g(x) = x+1}$
$$
f(x) = g(x)
$$
$$
x^2 - 4x + 3 = x + 1
$$
$$
x^2 - 5x + 2 = 0
$$
$$
x =  -5 \pm \sqrt {\frac {(-5)^2 - 4(1)(2)}{2(1)}} 
$$
$$
x = -5 \pm \sqrt {\frac {25 - 8}{2}}
$$
$$
 x = -5 \pm \sqrt{8.5} = -5 \pm 2.9155
$$
$$
x_1 = 7.9155 \;\;;\;\; x_2 = -2.0845
$$
$$
y_1 = 8.9155 \;\;;\;\; y_2 = -1.0845
$$
#### Jawaban 1D. ${f(x) = 0.5x + 2 \;;\; g(x) = -0.25x + 7/4}$ 
$$
f(x) = g(x)
$$
$$
0.5x + 2 = -0.25x + \frac 7 4
$$
$$
0.75x = -0.25
$$
$$
x = -\frac 1 3
$$
$$
y = \frac 5 6= 0.833
$$
$$
(x, y) = (-0.33, 0.833)
$$

### Soal 2

>Di sebuah perusahaan, ada beberapa proyek yang berbeda yang harus dikelola oleh tim manajer.

#### Jawaban 2A

>Berapa banyak cara yang dapat dilakukan oleh manajer untuk memilih 4 proyek dari 10 proyek yang tersedia?

$$
{10 \choose 4} = \frac {10!}{4!*6!} = \frac{10 * 9 * 8 * 7}{4 * 3 * 2 * 1} = 210
$$
#### Jawaban 2B

>Suatu hari, manajer memutuskan bahwa mereka tidak ingin memilih proyek sama sekali untuk ditangani. Berapa banyak cara yang dapat dilakukan oleh manajer untuk memilih 0 proyek dari 10 proyek yang tersedia?

$$
{10 \choose 0} = \frac {10!}{10!*0!}= 1
$$
#### Jawaban 2C

>Di sebuah proyek, ada 5 anggota tim dan mereka ingin membentuk sub-tim kecil dari 2 orang untuk sebuah tugas spesial. Jelaskan bagaimana menghitung banyaknya cara membentuk sub-tim ini?

$$
{5 \choose 2} = \frac {5!}{3!*2!} = \frac{5*4}{2*1} = 10
$$

### Soal 3

>Di sebuah perusahaan perangkat lunak, Anda diminta untuk mengembangkan algoritme pencarian yang efisien. Algoritme tersebut harus memeriksa berbagai kemungkinan konfigurasi dari suatu masalah kombinatorial. Anda memutuskan untuk menggunakan pohon kombinatorial untuk menganalisis kompleksitas algoritme.

#### Jawaban 3A

>Misalkan Anda memiliki sebuah pohon kombinatorial dengan kedalaman d, di mana setiap node memiliki b cabang. Hitunglah jumlah total node dalam pohon tersebut jika kedalaman d=3 dan setiap node memiliki b=2 cabang.

Untuk ${d = 3}$ dan ${b = 2}$, jumlah total node yang ada adalah:
$$
total = 2^{d+1} - 1 = 2^4 - 1 = 16 - 1 = 15
$$
#### Jawaban 3B

>Dalam pohon kombinatorial yang dibangun, setiap cabang mewakili keputusan yang diambil. Jika pohon memiliki 4 level, dan setiap level memiliki 3 cabang, berapa banyak node yang ada pada level ke-2 dari pohon tersebut?

Untuk ${b = 3}$, jumlah node pada level ke-2 adalah:
$$
node = 3^l = 3^2 = 9
$$

### Soal 4

>Prinsip Inklusi-Eksklusi adalah sebuah metode dalam teori himpunan dan probabilitas yang digunakan untuk menghitung ukuran atau jumlah dari union (gabungan) beberapa himpunan yang saling tumpang tindih. Prinsip ini membantu dalam menghindari penghitungan ganda dengan memperhitungkan dan mengoreksi tumpang tindih antara himpunan-himpunan tersebut. Ketika menghitung ukuran union dari beberapa himpunan yang saling tumpang tindih, perlu diperhatikan bahwa elemen yang berada dalam tumpang tindih antara beberapa himpunan dihitung lebih dari sekali. Prinsip Inklusi-Eksklusi membantu dalam mengoreksi perhitungan ini.

Rumus Umum Prinsip Inklusi-Eksklusi:
- Untuk dua himpunan A dan B:
$$
|A\cup B| = |A| + |B| + |A \cap B|
$$
- Untuk tiga himpunan A, B, dan C:
$$
|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|
$$

>Misalkan, dalam sebuah proyek optimisasi, Anda harus menghitung jumlah solusi valid dari beberapa kondisi yang tumpang tindih. Anda memiliki 3 kondisi A, B, dan C, dengan masing-masing kondisi memiliki jumlah solusi yang memenuhi sebagai berikut: ∣A∣=50, ∣B∣=30, dan ∣C∣=20. Selain itu, terdapat tumpang tindih antara kondisi: ∣A∩B∣=15, ∣A∩C∣=10, dan ∣B∩C∣=5. Jumlah solusi yang memenuhi ketiga kondisi bersamaan adalah ∣A∩B∩C∣=2. Hitung jumlah solusi yang memenuhi setidaknya satu dari kondisi A, B, atau C menggunakan prinsip inklusi-eksklusi.

$$
|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|
$$
$$
|A \cup B \cup C| = 50 + 30 + 20 - 15 - 10 - 5 + 2
$$
$$
|A \cup B \cup C| = 72
$$

### Soal 5

>Lakukan pembuktian untuk mencari kebenaran dari pernyataan-pernyataan berikut:

#### Jawaban 5A

>Jika sebuah bilangan bulat n adalah genap, maka nilai 3n+2 pastilah genap.

##### Basis
$$
P(0) = (3(0) + 2) \;mod\; 2 \equiv 2 \;mod\; 2 \equiv 0 
$$
Karena ${P(0) = 2}$ adalah bernilai genap ${2 \;mod\; 2 \equiv 0}$, maka basis bernilai benar

##### Hipotesis
Asumsikan pernyataan berikut bernilai benar untuk k sebuah bilangan bulat genap
$$
P(k) = 3k \;mod\; 2 \equiv 0
$$

##### Induksi
Buktikan bahwa ${P(k+2)}$ bernilai benar bila ${P(k)}$ diasumsikan benar
$$
P(k+2) = 3(k+2) \;mod\; 2 \equiv 0
$$
$$
P(k + 2) = (3k \;mod\; 2  + 6 \;mod\; 2) \;mod\; 2
$$
Dari hipotesis, didapatkan ${3k \;mod\; 2 \equiv 0}$
$$
P(k + 2) = (0 + 0) \;mod\; 2
$$
$$
P(k + 2) = 0 \;mod\;2 \equiv 0
$$
${P(k + 2)}$ terbukti bernilai benar bila ${P(k)}$ bernilai benar

##### Kesimpulan
> Pernyataan 3n + 2 bernilai genap untuk n suatu bilangan bulat genap terbukti benar

#### Jawaban 5B

>Untuk setiap bilangan bulat positif n, ${n^2 + 2}$ pasti bernilai ganjil.

##### Pembuktian Salah dengan Kontradiksi
Untuk n suatu bilangan bulat genap positif, ${n^2 + 2}$ akan selalu bernilai genap
$$
n \;mod\; 2 \equiv 0
$$
$$
(n^2 + 2) \;mod\; 2 \equiv (n^2 \;mod\; 2 + 2\;mod\;2) \;mod\; 2
$$
$$
\equiv n^2 \;mod\; 2
$$
$$
\equiv (n \;mod\; 2)(n \;mod\; 2) \;mod\; 2
$$
$$
\equiv 0 \;mod\; 2 \equiv 0
$$
Karena ${(n^2 + 2) \;mod\; 2}$ bernilai 0, maka ${(n^2 + 2)}$ bernilai genap

#### Jawaban 5C

>Jika a, b, dan c adalah tiga bilangan genap berurutan, nilai rata-rata dari ketiga bilangan tersebut akan sama dengan b.

##### Basis
$$
P(0, 2, 4) = \frac {0 + 2 + 4} {3} = \frac 6 3 = 2 
$$
Karena ${P(0, 2, 4) = 2}$ sama dengan nilai ${b = 2}$, maka basis bernilai benar

##### Hipotesis
Asumsikan pernyataan berikut bernilai benar untuk k, k+2, dan k+4 tiga bilangan bulat genap berurutan
$$
P(k, k+2, k+4) = \frac{k + (k+2) + (k+4)}{3} = \frac{3k + 6}{3} = k+2
$$

##### Induksi
Buktikan bahwa ${P(k+2, k+4, k+6)}$ bernilai benar bila ${P(k, k+2, k+4)}$ diasumsikan benar
$$
P(k+2, k+4, k+6) = \frac{(k+2) + (k+4) + (k+6)}{3} = k+4
$$

$$
P(k+2, k+4, k+6) = \frac{k + (k+2) + (k+4) + 6}{3}
$$
$$
P(k+2, k+4, k+6) = \frac{k + (k+2) + (k+4)}{3} + \frac 6 3
$$
Dari hipotesis, didapatkan ${\frac{k + (k+2) + (k+4)}{3} = \frac{3k + 6}{3} = k+2}$
$$
P(k+2, k+4, k+6) = (k + 2) + 2
$$
$$
P(k+2, k+4, k+6) = k + 4
$$
${P(k + 2)}$ terbukti bernilai benar bila ${P(k)}$ bernilai benar

##### Kesimpulan
> Pernyataan "Jika a, b, dan c adalah tiga bilangan genap berurutan, nilai rata-rata dari ketiga bilangan tersebut akan sama dengan b." terbukti benar

#### Jawaban 5D

>Buktikan dengan kontradiksi bahwa untuk setiap bilangan bulat a dan b, ${a^2 - 4b - 1 \neq 0}$ (sediakan pembuktian lengkap).

##### Pembuktian Salah dengan Kontradiksi
Pernyataan dapat dibuktikan salah dengan mencari nilai a dan b yang memenuhi persamaan berikut:
$$
a^2 - 4b - 1 = 0
$$
Salah satu nilai yang memenuhi adalah ${a = 3}$ dan ${b = 2}$ 

#### Jawaban 5E

>Buktikan dengan induksi matematika bahwa untuk setiap bilangan bulat positif n, jumlah deret aritmetika 1 + 2 + 3 + ... + n adalah ${\frac{n(n+1)}{2}}$ 

##### Basis
$$
P(1) = 1 = \frac{1(1+1)}{2} = \frac 2 2 = 1
$$
Karena P(1) = 1, maka basis bernilai benar

##### Hipotesis
Asumsikan pernyataan berikut benar untuk k suatu bilangan bulat positif
$$
P(k) = 1 + 2 + 3 + \dots + k = \frac{k(k+1)}{2}
$$

##### Induksi
Buktikan bahwa ${P(k+1)}$ bernilai benar bila ${P(k)}$ bernilai benar
$$
P(k+1) = 1 + 2 + 3 + \dots + k + (k+1) = \frac {(k+1)(k+2)}{2}
$$
$$
P(k+1) = (1 + 2+ 3 + \dots + k) + (k+1)
$$
Dari hipotesis, didapatkan ${1 + 2 + 3 + \dots + k = \frac{k(k+1)}{2}}$
$$
P(k + 1) = \frac{k(k+1)}{2} + (k + 1)
$$
$$
P(k + 1) = \frac{k(k+1) + 2(k+1)}{2}
$$
$$
P(k + 1) = \frac{(k+1)(k+2)}{2}
$$
${P(k+1)}$ terbukti benar jika ${P(k)}$ bernilai benar

##### Kesimpulan
>Pernyataan "Buktikan dengan induksi matematika bahwa untuk setiap bilangan bulat positif n, jumlah deret aritmetika 1 + 2 + 3 + ... + n adalah ${\frac{n(n+1)}{2}}$ " terbukti benar

