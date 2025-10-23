[[Bravi's Academic/Semester 5/Metode Statistika Aktuaria I/Responsi/index|Metode Statistika Aktuaria I]] - R1 <br>Ghiffari Bravia Hisham (G6401231050)

### Soal 1

>Misalkan model regresi logistik dapat diekspresikan sebagai berikut:
>
>${ln(\frac p {1-p}) = \beta_0 + \beta_1x_1 + \beta_2x_2}$
>
>dengan ${x_1}$ menyatakan *gender* (1 untuk laki-laki dan 0 untuk perempuan), ${x_2}$ menyatakan dosis vaksin dalam mililiter, dan p menyatakan peluang bahwa seseorang terjangkit suatu penyakit. Parameter ${\beta_0}$, ${\beta_1}$, dan ${\beta_2}$ diestimasi menggunakan metode *maximum likelihood* dan didapat model dugaan sebagai berikut:
>
>${ln(\frac {\hat p}{1 - \hat p}) = 3.54 + 2.75x_1 - 1.15x_2}$
>
>Tentukan ${\hat p}$ untuk perempuan yang telah divaksin dengan dosis 2 mililiter. Interpretasikan hasilnya

#### Jawaban Soal 1
Tentu, mari kita kerjakan Soal 1.

**Soal 1:**
Misalkan model regresi logistik dapat diekspresikan sebagai berikut:
$ln(\frac p {1-p}) = \beta_0 + \beta_1x_1 + \beta_2x_2$
dengan $x_1$ menyatakan *gender* (1 untuk laki-laki dan 0 untuk perempuan), $x_2$ menyatakan dosis vaksin dalam mililiter, dan p menyatakan peluang bahwa seseorang terjangkit suatu penyakit. Parameter $\beta_0$, $\beta_1$, dan $\beta_2$ diestimasi menggunakan metode *maximum likelihood* dan didapat model dugaan sebagai berikut:
$ln(\frac {\hat p}{1 - \hat p}) = 3.54 + 2.75x_1 - 1.15x_2$

Tentukan $\hat p$ untuk perempuan yang telah divaksin dengan dosis 2 mililiter. Interpretasikan hasilnya.

---

**Penyelesaian:**

1.  **Identifikasi nilai $x_1$ dan $x_2$ untuk skenario yang diberikan:**
    *   Untuk perempuan, $x_1 = 0$.
    *   Untuk dosis vaksin 2 mililiter, $x_2 = 2$.

2.  **Substitusikan nilai $x_1$ dan $x_2$ ke dalam model dugaan:**
    $ln(\frac {\hat p}{1 - \hat p}) = 3.54 + 2.75(0) - 1.15(2)$
    $ln(\frac {\hat p}{1 - \hat p}) = 3.54 + 0 - 2.30$
    $ln(\frac {\hat p}{1 - \hat p}) = 1.24$

3.  **Ubah dari log-odds ke odds:**
    $\frac {\hat p}{1 - \hat p} = e^{1.24}$
    $\frac {\hat p}{1 - \hat p} \approx 3.456$

4.  **Selesaikan untuk $\hat p$:**
    $\hat p = 3.456 (1 - \hat p)$
    $\hat p = 3.456 - 3.456\hat p$
    $\hat p + 3.456\hat p = 3.456$
    $4.456\hat p = 3.456$
    $\hat p = \frac{3.456}{4.456}$
    $\hat p \approx 0.7755$

    Atau bisa juga menggunakan rumus: $\hat p = \frac{e^{1.24}}{1 + e^{1.24}} = \frac{3.456}{1 + 3.456} = \frac{3.456}{4.456} \approx 0.7755$

**Interpretasi Hasil:**
Untuk perempuan yang telah divaksin dengan dosis 2 mililiter, estimasi peluang ($\hat p$) bahwa mereka terjangkit suatu penyakit adalah sekitar **0.7755** atau **77.55%**. Ini berarti ada kemungkinan yang cukup tinggi bagi perempuan dengan dosis vaksin 2 ml untuk terjangkit penyakit tersebut berdasarkan model ini.

### Soal 2

>Regresi Poisson digunakan untuk memodelkan data ${(y_i, x_i)}$, ${i = 1, 2, \dots, n}$ dengan ${y_i}$ menyatakan frekuensi klaim dan ${x_{1i}}$ peubah penjelas yang menyatakan gender yaitu ${x_{1i} = 1}$ untuk laki-laki dan ${x_{2i} = 0}$ untuk perempuan, ${x_{2i}}$ peubah penjelas yang menyatakan pola hidup yaitu ${x_{2i} = 1}$ untuk pola hidup sehat dan ${x_{2i} = 0}$ untuk pola hidup tidak sehat. *Link function* diekspresikan berikut:
>
>${\log(\mu_i) = \beta_0 + \beta_1x_{1i} + \beta_2x_{2i}}$
>
>(a) Fungsi *log-likelihood* dapat diekspresikan sebagai ${l(\beta) = \dots}$
>
>(b) Jika hasil pendugaan model sebagai berikut:
>
>${\log(\mu_i) = -1.54 + 2.08x_{1i} + 3.67x_{2i}}$
>
>Maka tentukan estimasi frekuensi klaim untuk pemegang polis perempuan yang melakukan pola hidup sehat

#### Jawaban Soal 2A
Tentu, mari kita kerjakan Soal 2A.

**Soal 2 (a):**
Fungsi *log-likelihood* dapat diekspresikan sebagai $l(\beta) = \dots$

---

**Penyelesaian:**

1.  **Fungsi Massa Peluang (PMF) untuk distribusi Poisson:**
    Jika $Y_i$ mengikuti distribusi Poisson dengan parameter $\mu_i$, maka fungsi massa peluangnya adalah:
    $P(Y_i = y_i) = \frac{e^{-\mu_i} \mu_i^{y_i}}{y_i!}$

2.  **Fungsi *Link*:**
    Diberikan *link function*:
    $\log(\mu_i) = \beta_0 + \beta_1x_{1i} + \beta_2x_{2i}$
    Dari sini, kita bisa mendapatkan $\mu_i$:
    $\mu_i = e^{\beta_0 + \beta_1x_{1i} + \beta_2x_{2i}}$

3.  **Fungsi *Likelihood* ($L(\beta)$):**
    Untuk $n$ pengamatan yang saling bebas, fungsi *likelihood* adalah produk dari fungsi massa peluang individu:
    $L(\beta) = \prod_{i=1}^{n} P(Y_i = y_i) = \prod_{i=1}^{n} \frac{e^{-\mu_i} \mu_i^{y_i}}{y_i!}$

4.  **Fungsi *Log-Likelihood* ($l(\beta)$):**
    Fungsi *log-likelihood* adalah logaritma natural dari fungsi *likelihood*:
    $l(\beta) = \log(L(\beta)) = \log \left( \prod_{i=1}^{n} \frac{e^{-\mu_i} \mu_i^{y_i}}{y_i!} \right)$
    Menggunakan sifat logaritma ($\log(AB) = \log A + \log B$ dan $\log(A/B) = \log A - \log B$, serta $\log(A^B) = B \log A$):
    $l(\beta) = \sum_{i=1}^{n} \log \left( e^{-\mu_i} \mu_i^{y_i} \right) - \sum_{i=1}^{n} \log(y_i!)$
    $l(\beta) = \sum_{i=1}^{n} (-\mu_i + y_i \log(\mu_i)) - \sum_{i=1}^{n} \log(y_i!)$

5.  **Substitusikan $\mu_i$ dan $\log(\mu_i)$ dari *link function*:**
    Kita tahu $\log(\mu_i) = \beta_0 + \beta_1x_{1i} + \beta_2x_{2i}$ dan $\mu_i = e^{\beta_0 + \beta_1x_{1i} + \beta_2x_{2i}}$.
    Maka, fungsi *log-likelihood* menjadi:
    $l(\beta) = \sum_{i=1}^{n} \left( -e^{\beta_0 + \beta_1x_{1i} + \beta_2x_{2i}} + y_i (\beta_0 + \beta_1x_{1i} + \beta_2x_{2i}) \right) - \sum_{i=1}^{n} \log(y_i!)$

Jadi, fungsi *log-likelihood* dapat diekspresikan sebagai:
$l(\beta) = \sum_{i=1}^{n} \left( y_i (\beta_0 + \beta_1x_{1i} + \beta_2x_{2i}) - e^{\beta_0 + \beta_1x_{1i} + \beta_2x_{2i}} - \log(y_i!) \right)$

#### Jawaban Soal 2B
Tentu, mari kita kerjakan Soal 2B.

**Soal 2 (b):**
Jika hasil pendugaan model sebagai berikut:

${\log(\mu_i) = -1.54 + 2.08x_{1i} + 3.67x_{2i}}$

Maka tentukan estimasi frekuensi klaim untuk pemegang polis perempuan yang melakukan pola hidup sehat.

---

**Penyelesaian:**

1.  **Identifikasi nilai peubah penjelas ($x_{1i}$ dan $x_{2i}$):**
    *   Untuk pemegang polis perempuan, ${x_{1i} = 0}$.
    *   Untuk pola hidup sehat, ${x_{2i} = 1}$.

2.  **Substitusikan nilai-nilai tersebut ke dalam model dugaan:**
    ${\log(\mu_i) = -1.54 + 2.08(0) + 3.67(1)}$
    ${\log(\mu_i) = -1.54 + 0 + 3.67}$
    ${\log(\mu_i) = 2.13}$

3.  **Hitung estimasi frekuensi klaim ($\mu_i$):**
    Untuk mendapatkan nilai $\mu_i$, kita perlu melakukan eksponensiasi pada hasil di atas:
    ${\mu_i = e^{2.13}}$
    ${\mu_i \approx 8.4146}$

**Interpretasi Hasil:**
Estimasi frekuensi klaim untuk pemegang polis perempuan yang melakukan pola hidup sehat adalah sekitar **8.41**. Ini berarti, berdasarkan model ini, seorang perempuan dengan pola hidup sehat diperkirakan akan membuat klaim sebanyak 8.41 kali.

### Soal 3

>Misalkan peubah acak ${Y \sim Poisson(\mu)}$. Diberikan 5 data pengamatan dengan ${y_i}$ menyatakan frekuensi klaim dari pemegang polis ke-i, ${x_i}$ menyatakan umur dari pemegang polis ke-i. Dihipotesiskan bahwa frekuensi klaim dipengaruhi oleh umur pemegang polis tersebut, dimodelkan dengan regresi Poisson. Berdasarkan data pengamatan, didapat estimasi model
>
>${ln(\mu_i) = -2.71 + 0.11x_i\;;\;i = 1, 2, \dots, 5}$
>
>dengan ${\mu_i = E(Y_i) = \hat {y_i}}$. Jika diketahui

|    i    |  1  |  2  |  3  |  4  |  5  |
| :-----: | :-: | :-: | :-: | :-: | :-: |
| ${y_i}$ |  3  |  1  |  5  |  1  |  2  |
| ${x_i}$ | 35  | 25  | 40  | 20  | 30  |
>Tentukan ${\hat{y_1} = \mu_i = E(Y_i)\;;\;i = 1,2,\dots,5}$.

#### Jawaban Soal 3
Tentu, mari kita kerjakan Soal 3.

**Soal 3:**
Misalkan peubah acak $Y \sim Poisson(\mu)$. Diberikan 5 data pengamatan dengan $y_i$ menyatakan frekuensi klaim dari pemegang polis ke-i, $x_i$ menyatakan umur dari pemegang polis ke-i. Dihipotesiskan bahwa frekuensi klaim dipengaruhi oleh umur pemegang polis tersebut, dimodelkan dengan regresi Poisson. Berdasarkan data pengamatan, didapat estimasi model
$ln(\mu_i) = -2.71 + 0.11x_i\;;\;i = 1, 2, \dots, 5$
dengan $\mu_i = E(Y_i) = \hat {y_i}$. Jika diketahui

| i | 1 | 2 | 3 | 4 | 5 |
| :-----: | :-: | :-: | :-: | :-: | :-: |
| $y_i$ | 3 | 1 | 5 | 1 | 2 |
| $x_i$ | 35 | 25 | 40 | 20 | 30 |
Tentukan $\hat{y_i} = \mu_i = E(Y_i)\;;\;i = 1,2,\dots,5$.

---

**Penyelesaian:**

Kita akan menggunakan model dugaan $ln(\mu_i) = -2.71 + 0.11x_i$ untuk menghitung $\hat{y_i} = \mu_i$ untuk setiap $i$ dengan nilai $x_i$ yang diberikan. Untuk mendapatkan $\mu_i$, kita perlu meng-eksponensialkan hasil dari $ln(\mu_i)$, yaitu $\mu_i = e^{(-2.71 + 0.11x_i)}$.

1.  **Untuk $i = 1$:**
    $x_1 = 35$
    $ln(\mu_1) = -2.71 + 0.11(35) = -2.71 + 3.85 = 1.14$
    $\hat{y_1} = \mu_1 = e^{1.14} \approx 3.1268$

2.  **Untuk $i = 2$:**
    $x_2 = 25$
    $ln(\mu_2) = -2.71 + 0.11(25) = -2.71 + 2.75 = 0.04$
    $\hat{y_2} = \mu_2 = e^{0.04} \approx 1.0408$

3.  **Untuk $i = 3$:**
    $x_3 = 40$
    $ln(\mu_3) = -2.71 + 0.11(40) = -2.71 + 4.40 = 1.69$
    $\hat{y_3} = \mu_3 = e^{1.69} \approx 5.4185$

4.  **Untuk $i = 4$:**
    $x_4 = 20$
    $ln(\mu_4) = -2.71 + 0.11(20) = -2.71 + 2.20 = -0.51$
    $\hat{y_4} = \mu_4 = e^{-0.51} \approx 0.6005$

5.  **Untuk $i = 5$:**
    $x_5 = 30$
    $ln(\mu_5) = -2.71 + 0.11(30) = -2.71 + 3.30 = 0.59$
    $\hat{y_5} = \mu_5 = e^{0.59} \approx 1.8039$

**Hasil Estimasi Frekuensi Klaim ($\hat{y_i}$):**

|  i  | $x_i$ | $ln(\mu_i)$ | $\hat{y_i} = \mu_i$ |
| :-: | :---: | :---------: | :-----------------: |
|  1  |  35   |    1.14     |       3.1268        |
|  2  |  25   |    0.04     |       1.0408        |
|  3  |  40   |    1.69     |       5.4185        |
|  4  |  20   |    -0.51    |       0.6005        |
|  5  |  30   |    0.59     |       1.8039        |

### Soal 4

>Regresi logistik biner digunakan untuk memodelkan data ${(y_i, x_i)\;;\;i = 1,2,\dots,n}$ dengan ${y_i}$ menyatakan rate premi (1: untuk premi tinggi, 0: untuk premi rendah) dan ${x_i}$ menyatakan wilayah tempat tinggal pemegang polis ke-i (1: untuk wilayah Jabodetabek, 0: untuk wilayah luar Jabodetabek). *Link function* dapat dinyatakan sebagai berikut:
>
>${\log(\frac{\pi_i}{1-{\pi_i}}) = \beta_0 + \beta_1x_i}$ 
>
>dimana ${\pi_i = P(Y_i = 1 | x_i)}$ adalah peluang pemegang polis membayar premi tinggi dan ${Y_i \sim bernoulli(\pi_i)}$.
>
>(a) Tuliskan fungsi massa peluang bagi peubah respon ${Y_i}$
>
>(b) Jika ${y_1, y_2, \dots, y_n}$ merupakan realisasi dari peubah acak ${Y_1, Y_2, \dots, Y_n}$ yang saling bebas, maka rumuskan fungsi *log-likelihood* nya.

#### Jawaban Soal 4A
Tentu, mari kita kerjakan Soal 4A.

**Soal 4 (a):**
Tuliskan fungsi massa peluang bagi peubah respon $Y_i$.

---

**Penyelesaian:**

Diberikan bahwa peubah respon $Y_i$ mengikuti distribusi Bernoulli dengan parameter $\pi_i$, yaitu $Y_i \sim Bernoulli(\pi_i)$.
Fungsi massa peluang (Probability Mass Function - PMF) untuk peubah acak Bernoulli adalah:

$P(Y_i = y_i) = \pi_i^{y_i} (1 - \pi_i)^{1 - y_i}$

dimana $y_i$ dapat bernilai 0 atau 1.

*   Jika $y_i = 1$ (premi tinggi), maka $P(Y_i = 1) = \pi_i^1 (1 - \pi_i)^{1 - 1} = \pi_i^1 (1 - \pi_i)^0 = \pi_i$.
*   Jika $y_i = 0$ (premi rendah), maka $P(Y_i = 0) = \pi_i^0 (1 - \pi_i)^{1 - 0} = 1 \cdot (1 - \pi_i)^1 = 1 - \pi_i$.

Jadi, fungsi massa peluang bagi peubah respon $Y_i$ adalah:
$P(Y_i = y_i) = \pi_i^{y_i} (1 - \pi_i)^{1 - y_i}$, untuk $y_i \in \{0, 1\}$.

#### Jawaban Soal 4B
Tentu, mari kita kerjakan Soal 4B.

**Soal 4 (b):**
Jika $y_1, y_2, \dots, y_n$ merupakan realisasi dari peubah acak $Y_1, Y_2, \dots, Y_n$ yang saling bebas, maka rumuskan fungsi *log-likelihood* nya.

---

**Penyelesaian:**

1.  **Fungsi Massa Peluang (PMF) untuk distribusi Bernoulli:**
    Dari Soal 4(a), kita tahu bahwa fungsi massa peluang untuk $Y_i \sim Bernoulli(\pi_i)$ adalah:
    $P(Y_i = y_i) = \pi_i^{y_i} (1 - \pi_i)^{1 - y_i}$

2.  **Fungsi *Link*:**
    Diberikan *link function*:
    $\log(\frac{\pi_i}{1-{\pi_i}}) = \beta_0 + \beta_1x_i$
    Misalkan $\eta_i = \beta_0 + \beta_1x_i$. Maka:
    $\log(\frac{\pi_i}{1-{\pi_i}}) = \eta_i$
    $\frac{\pi_i}{1-{\pi_i}} = e^{\eta_i}$
    $\pi_i = e^{\eta_i} (1 - \pi_i)$
    $\pi_i = e^{\eta_i} - \pi_i e^{\eta_i}$
    $\pi_i (1 + e^{\eta_i}) = e^{\eta_i}$
    $\pi_i = \frac{e^{\eta_i}}{1 + e^{\eta_i}}$
    Dan $1 - \pi_i = 1 - \frac{e^{\eta_i}}{1 + e^{\eta_i}} = \frac{1 + e^{\eta_i} - e^{\eta_i}}{1 + e^{\eta_i}} = \frac{1}{1 + e^{\eta_i}}$.

3.  **Fungsi *Likelihood* ($L(\beta)$):**
    Karena $y_1, y_2, \dots, y_n$ adalah realisasi yang saling bebas, fungsi *likelihood* adalah produk dari fungsi massa peluang individu:
    $L(\beta) = \prod_{i=1}^{n} P(Y_i = y_i) = \prod_{i=1}^{n} \pi_i^{y_i} (1 - \pi_i)^{1 - y_i}$

4.  **Fungsi *Log-Likelihood* ($l(\beta)$):**
    Fungsi *log-likelihood* adalah logaritma natural dari fungsi *likelihood*:
    $l(\beta) = \log(L(\beta)) = \log \left( \prod_{i=1}^{n} \pi_i^{y_i} (1 - \pi_i)^{1 - y_i} \right)$
    Menggunakan sifat logaritma:
    $l(\beta) = \sum_{i=1}^{n} \log \left( \pi_i^{y_i} (1 - \pi_i)^{1 - y_i} \right)$
    $l(\beta) = \sum_{i=1}^{n} \left( y_i \log(\pi_i) + (1 - y_i) \log(1 - \pi_i) \right)$

5.  **Substitusikan $\pi_i$ dan $1 - \pi_i$ dalam bentuk $\eta_i$:**
    $\log(\pi_i) = \log\left(\frac{e^{\eta_i}}{1 + e^{\eta_i}}\right) = \log(e^{\eta_i}) - \log(1 + e^{\eta_i}) = \eta_i - \log(1 + e^{\eta_i})$
    $\log(1 - \pi_i) = \log\left(\frac{1}{1 + e^{\eta_i}}\right) = -\log(1 + e^{\eta_i})$

    Maka, substitusikan ini ke dalam $l(\beta)$:
    $l(\beta) = \sum_{i=1}^{n} \left( y_i (\eta_i - \log(1 + e^{\eta_i})) + (1 - y_i) (-\log(1 + e^{\eta_i})) \right)$
    $l(\beta) = \sum_{i=1}^{n} \left( y_i \eta_i - y_i \log(1 + e^{\eta_i}) - \log(1 + e^{\eta_i}) + y_i \log(1 + e^{\eta_i}) \right)$
    $l(\beta) = \sum_{i=1}^{n} \left( y_i \eta_i - \log(1 + e^{\eta_i}) \right)$

6.  **Ganti $\eta_i$ kembali dengan $\beta_0 + \beta_1x_i$:**
    $l(\beta) = \sum_{i=1}^{n} \left( y_i (\beta_0 + \beta_1x_i) - \log(1 + e^{\beta_0 + \beta_1x_i}) \right)$

Jadi, fungsi *log-likelihood* dapat dirumuskan sebagai:
$l(\beta) = \sum_{i=1}^{n} \left( y_i (\beta_0 + \beta_1x_i) - \log(1 + e^{\beta_0 + \beta_1x_i}) \right)$