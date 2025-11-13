[[Bravi's Academic/Semester 5/Kecerdasan Buatan/Praktikum/index|Kecerdasan Buatan]] - P2 <br>Ghiffari Bravia Hisham (G6401231050)

### Soal 1

>Diketahui Graf Bayesian Network sebagai berikut:
>![[11-P-01-Soal 1.png]]  
>A. Bagaimana peluang Lampu Menyala, jika diketahui Komputer Menyala?  
>B. Bagaimana peluang Komputer Menyala, jika diketahui Lampu Menyala?

#### Jawaban 1A
Untuk menghitung *P(LO | CO)*, dapat menggunakan rumus sebagai berikut:
$$
P(LO|CO) = \frac {P(LO,CO)}{P(CO)}
$$
##### Menghitung ${P(LO, CO)}$
Karena peluang *Light On* dan *Computer On* sama-sama bergantung pada keadaan *In Office*, maka perhitungannya dapat dilakukan sebagai berikut:
$$
P(LO, CO) = \sum{P(LO, CO, IO)}
$$
$$
P(LO, CO) = P(LO|IO)\times P(CO|IO) \times P(IO) + P(LO|\sim IO) \times P(CO|\sim IO) \times P(\sim IO)
$$
$$
P(LO, CO) = (0.5 \times 0.8 \times 0.6) + (0.05 \times 0.1 \times 0.4)
$$
$$
P(LO, CO) = 0.24 + 0.002
$$
$$
P(LO, CO) = 0.242
$$

##### Menghitung ${P(CO)}$
$$
P(CO) = \sum{P(CO, IO)}
$$
$$
P(CO) = P(CO|IO) \times P(IO) + P(CO|\sim IO) \times P(\sim IO)
$$
$$
P(CO) = (0.8 \times 0.6) + (0.1 \times 0.4)
$$
$$
P(CO) = 0.48 + 0.04
$$
$$
P(CO) = 0.52
$$

##### Menghitung ${P(LO|CO)}$
$$
P(LO|CO) = \frac {P(LO, CO)}{P(CO)}
$$
$$
P(LO|CO) = \frac {0.242}{0.52}
$$
$$
P(LO|CO) \approx 0.4654
$$

#### Jawaban 1B
Untuk menghitung *P(CO | LO)*, dapat digunakan rumus sebagai berikut:
$$
P(CO|LO) = \frac {P(CO, LO)}{P(LO)}
$$

##### Menghitung ${P(CO, LO)}$
Hasil perhitungan ini dapat menggunakan perhitungan ${P(LO, CO)}$ yang telah ada pada jawaban 1A
$$
P(CO, LO) = P(LO, CO) = 0.242
$$

##### Menghitung ${P(LO)}$
$$
P(LO) = \sum{P(LO, IO)}
$$
$$
P(LO) = P(LO|IO) \times P(IO) + P(LO|\sim IO) \times P(\sim IO)
$$
$$
P(LO) = (0.5 \times 0.6) + (0.05 \times 0.4)
$$
$$
P(LO) = 0.3 + 0.02
$$
$$
P(LO) = 0.32
$$

##### Menghitung ${P(CO|LO)}$
$$
P(CO|LO) = \frac {P(CO, LO)}{P(LO)}
$$
$$
P(CO|LO) = \frac {0.242}{0.32}
$$
$$
P(CO|LO) = 0.75625
$$

### Soal 2

>Diketahui Graf Bayesian Network sebagai berikut:  
>![[11-P-02-Soal 2.png]]  
>A. Berapa nilai *P(Tuberculosis | Shortness of Breath, Positive X-Ray)* ?  
>B. Berapa nilai *P(Positive X-Ray | Smoker)* ?

Misalkan variabel sebagai berikut:
- A = Asthma
- T = Tuberculosis
- L = Lung Cancer
- S = Smoker
- B = Bronchitis
- SB = Shortness of Breath
- X = Positive X-Ray

#### Jawaban 2A
$$
P(T | SB, X) = \frac {P(T, SB, X)}{P(SB, X)} 
$$

#### Jawaban 2B
$$
P(X | S) = \frac {P(X, S)} {P(S)}
$$

### Soal 3

>Diketahui Graf Bayesian Network sebagai berikut:  
>![[11-P-03-Soal 3.png]]  
>Jika diketahui seorang mahasiswa sudah Belajar (Study), berapa peluang mahasiswa tersebut akan Lolos Ujian (Pass The Exam) ?

Misalkan variabel sebagai berikut:
- S = Study
- P = Pass The Exam
#### Jawaban 3
$$
P(P | S) = \frac {P(P, S)} {P(S)}
$$

