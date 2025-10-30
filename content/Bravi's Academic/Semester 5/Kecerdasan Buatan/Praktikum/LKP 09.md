[[Bravi's Academic/Semester 5/Kecerdasan Buatan/Praktikum/index|Kecerdasan Buatan]] - P2 <br>Ghiffari Bravia Hisham (G6401231050)

### Soal 1

>Misalkan kita memiliki data berikut tentang preferensi olahraga berdasarkan jenis kelamin

|               | Suka Sepak Bola | Tidak Suka Sepak Bola | Total |
| :-----------: | :-------------: | :-------------------: | :---: |
| **Laki-Laki** |      0.35       |         0.15          | 0.50  |
| **Perempuan** |      0.05       |         0.46          | 0.50  |
|   **Total**   |      0.40       |         0.60          |   1   |
>Berapa peluang seseorang suka sepak bola jika diketahui orang tersebut berjenis kelamin laki-laki?

#### Jawaban Soal 1
Jika dimisalkan:
- ${M}$ = Kejadian seseorang berjenis kelamin laki-laki
- ${F}$ = Kejadian seseorang berjenis kelamin perempuan
- ${S}$ = Kejadian seseorang suka sepak bola
- ${S^c}$ = Kejadian seseorang tidak suka sepak bola

Peluang seseorang suka sepak bola jika diketahui orang tersebut berjenis kelamin laki-laki adalah:
$$
P(S|M) = \frac {P(S \cap M)}{P(M)}
$$
$$
P(S|M) = \frac {0.35} {0.50}
$$
$$
P(S|M) = 0.7
$$

Peluang seseorang suka sepak bola jika diketahui orang tersebut berjenis kelamin laki-laki adalah 0.7 atau 70%

### Soal 2

>Jika diketahui gejala dan kondisi pasien sebagai berikut :

| Data Latih | B (Batuk) | M (Mata Merah) | S (Sesak Nafas) | D (Demam) |      Kelas      |
| :--------: | :-------: | :------------: | :-------------: | :-------: | :-------------: |
|     d1     |     +     |       -        |        -        |     -     | Negatif (Sehat) |
|     d2     |     -     |       -        |        -        |     +     | Positif (Sakit) |
|     d3     |     +     |       -        |        -        |     +     | Negatif (Sehat) |
|     d4     |     -     |       +        |        +        |     -     | Positif (Sakit) |
|     d5     |     -     |       -        |        +        |     -     | Positif (Sakit) |
|     d6     |     -     |       -        |        -        |     -     | Negatif (Sehat) |
|     d7     |     +     |       -        |        +        |     +     | Positif (Sakit) |
>Jika setiap gejala dianggap tidak saling berhubungan, tentukan apakah seseorang sakit atau sehat jika orang tersebut menderita batuk dan sesak nafas!

#### Jawaban Soal 2
Diketahui data sebagai berikut:
- ${P(B) = \frac 3 7}$
- ${P(M) = \frac 1 7}$
- ${P(S) = \frac 3 7}$
- ${P(D) = \frac 3 7}$

Jika dimisalkan ${+}$ = Sakit dan ${-}$ = Sehat, Peluang Bayes untuk masing-masing kelas adalah sebagai berikut:
- ${P(+) = \frac 4 7}$
- ${P(-) = \frac 3 7}$
- ${P(B|+) = \frac 1 4}$
- ${P(M|+) = \frac 1 4}$
- ${P(S|+) = \frac 3 4}$
- ${P(D|+) = \frac 2 4}$
- ${P(B|-) = \frac 2 3}$
- ${P(M|-) = 0}$
- ${P(S|-) = 0}$
- ${P(D|-) = \frac 1 3}$

Nilai proporsional antara seseorang sakit dan sehat adalah sebagai berikut:
$$
P(-|B, S) = P(-) \times P(B|-) \times P(S|-)
$$
$$
P(-|B,S) = \frac 3 7 \times \frac 2 3 \times 0
$$
$$
P(-|B,S) = 0
$$
$$
P(+|B,S) = P(+) \times P(B|+) \times P(S|+)
$$
$$
P(+|B,S) = \frac 4 7 \times \frac 1 4 \times \frac 3 4
$$
$$
P(+|B,S) = \frac {12}{112} \approx 0.107
$$

Karena nilai proporsional untuk orang tersebut sakit lebih besar daripada nilai seseorang tersebut untuk sehat, maka seseorang yang menderita batuk dan sesak nafas lebih mungkin untuk dikategorikan sebagai sakit 

### Soal 3

>Jika diketahui sebagai berikut:
- Peluang Dika membawa helm saat bepergian adalah 60%
- Jika Dika membawa helm, peluang dia berhenti di pos pemeriksaan adalah 20%
- Jika Dika tidak membawa helm, peluang dia berhenti di pos pemeriksaan adalah 70%

>Berapa peluang Dika membawa helm jika dia berhenti di pos pemeriksaan?

#### Jawaban Soal 3
Dari soal, didapatkan peluang Dika jika berhenti di pos pemeriksaan sebagai berikut:
$$
P(S) = P(S|H) \times P(H) + P(S^C|H) \times P(H)
$$
$$
P(S) = 0.2 \times 0.6 + 0.7 \times 0.6
$$
$$
P(S) = 0.12 + 0.28
$$
$$
P(S) = 0.40
$$

Peluang Dika membawa helm jika dia berhenti di pos pemeriksaan adalah:
$$
P(H|S) = \frac {P(S|H) \times P(H)} {P(S)}
$$
$$
P(H|S) = \frac {0.2 \times 0.6} {0.4}
$$
$$
P(H|S) = \frac {0.12} {0.4}
$$
$$
P(H|S) = 0.3
$$

Peluang Dika membawa helm jika dia berhenti di pos pemeriksaan adalah 0.3 atau 30%

### Soal 4

>Sebuah penelitian di IPB mencatat kejadian pencurian motor di beberapa lokasi berikut:

| Merk Motor | Tempat Parkir | Waktu Parkir | Hilang Dicuri |
| :--------: | :-----------: | :----------: | :-----------: |
|   Vario    |   Gymnasium   |     Pagi     |     Tidak     |
|   Yamaha   |   Agrimart    |    Siang     |      Ya       |
|   Suzuki   |      GWW      |     Pagi     |     Tidak     |
|   Honda    |    Satari     |    Siang     |      Ya       |
|   Yamaha   |   Agrimart    |    Malam     |      Ya       |
|   Vario    |   Gymnasium   |    Malam     |     Tidak     |
|  Kawasaki  |      GWW      |    Siang     |      Ya       |
|   Honda    |   Gymnasium   |    Siang     |      Ya       |
|   Suzuki   |    Satari     |     Pagi     |     Tidak     |
|  Kawasaki  |   Gymnasium   |    Malam     |     Tidak     |
|   Yamaha   |   Agrimart    |    Siang     |      Ya       |
|   Vario    |    Satari     |    Siang     |     Tidak     |
>A. Berapa peluang motor yang diparkir di Satari pada siang hari akan hilang dicuri?  
>B. Budi, seorang mahasiswa IPB yang memiliki motor Kawasaki, berencana untuk memarkir motornya di GWW pada siang hari. Berikan pendapat Anda tentang keputusan Budi tersebut!

#### Jawaban Soal 4A
Diketahui terdapat dua kejadian yang memenuhi kriteria pada soal:
- Kejadian 4: Honda, Satari, Siang, **Ya**
- Kejadian 12: Vario, Satari, Siang, **Tidak**

Peluang motor yang diparkir di Satari pada siang hari akan hilang dicuri adalah:
$$
P(Hilang \; Dicuri|Satari, Siang) = \frac{1}{2}
$$

#### Jawaban Soal 4B
Diketahui terdapat satu kejadian yang memenuhi kriteria yang dimiliki Budi, yaitu Kejadian 7 dengan motor tersebut hilang dicuri. Berdasarkan data tersebut, dapat diputuskan bila keputusan Budi untuk memarkir motor Kawasaki-nya di GWW pada siang hari sangat beresiko untuk dicuri.