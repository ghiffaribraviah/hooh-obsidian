[[Bravi's Academic/Semester 5/Metode Statistika Aktuaria I/Kuliah/index|Metode Statistika Aktuaria I]] - K1 <br>Ghiffari Bravia Hisham (G6401231050)

### Peluang

#### Definisi
Peluang adalah ukuran kemungkinan terjadinya suatu kejadian. Rumus peluang dapat ditulis sebagai berikut:
$$
P(E) = \frac {n(E)} {n(S)}
$$
#### Aksioma Peluang
1. Jika E suatu kejadian, berlaku ${0 \le P(E) \le 1}$
2. ${P(S) = 1}$
3. Jika ${E_1, E_2, \dots}$ adalah kejadian-kejadian yang saling lepas (*mutually exclusive*), irisannya adalah himpunan kosong, maka berlaku:
$$
P(E_1 \cup E_2 \cup \dots) = P(E_1) + P(E_2) + \dots
$$
#### Peluang Bersyarat
Peluang bersyarat kejadian A setelah diketahui kejadian B terjadi adalah:
$$
P(A|B) = \frac {P(A \cap B)} {P(B)}
$$

#### Peubah Acak (*Random Variable*)
Peubah acak merupakan kuantifikasi dari titik-titik contoh di ruang contoh. Peubah acak dapat didefinisikan juga sebagai fungsi/aturan yang memetakan setiap kemungkinan hasil percobaan ke bilangan riil, ditulis ${X:S \rightarrow \mathbb R}$ dengan S dikenal sebagai ruang contoh yaitu himpunan semua kemungkinan hasil percobaan.

#### Fungsi Peluang
Fungsi yang menyatakan peluang dari setiap nilai peubah acak. Terdapat dua jenis fungsi peluang, yaitu:

1. Fungsi Massa Peluang (Diskret)
$$
p(x) = P(X=x) = \begin{cases} p(i)\;; \; x = i \\ 0 \;\;\;\;\;\;; \; x \; lainnya  \end{cases}
$$
	- Berlaku untuk peubah acak diskret
	- ${p(x) \ge 0}$
	- ${\sum{p(x)} = 1}$

2. Fungsi Kepekatan Peluang (Kontinu)
$$
f(x) = \begin{cases} f_i(x) \;;\; a_i \le x \le b_i \\ 0 \;\;\;\;\;\;\;;\; x \; lainnya \end{cases}
$$
	- Berlaku untuk peubah acak kontinu
	- ${f(x) = 0}$
	- ${\int f(x)dx = 1}$

### Nilai Harapan dan Ragam

#### Nilai Harapan (*Expected Value*)
*Expected value* (nilai harapan) adalah rata-rata terboboti dari semua kemungkinan hasil, dinotasikan sebagai:
- Untuk peubah acak diskret
$$
\mu_x = E(X) = p_1X_1 + \dots + p_sX_s = \sum_{\forall s} p_sX_s 
$$
- Untuk peubah acak kontinu
$$
\mu_x = E(X) = \int xf(x)dx
$$
#### Sifat-Sifat Nilai Harapan
Misalkan peubah acak X dengan nilai harapan ${E(X)}$
- Jika ${a}$ suatu konstanta, maka
$$
E(X + a) = E(X) + a
$$
- Jika ${c}$ suatu konstanta, maka
$$
E(cX) = cE(X)
$$
#### Ragam (*Variance*)
Ragam adalah tolak ukur kedekatan suatu data terhadap rata-ratanya. Suatu peubah acak X dinotasikan ${Var(X)}$, dan didefinisikan:
$$
Var(X) = E(X - E(X))^2 = E(X^2) - (E(X))^2
$$
- Jika X peubah acak diskret dengan fungsi massa peluang ${p(x)}$, maka:
$$
Var(X) = \sum_{\forall x}{x^2p(x) - (E(X))^2}
$$
- Jika X peubah acak kontinu dengan fungsi massa peluang ${f(x)}$, maka:
$$
Var(X) = \int {x^2f(x)dx} - (E(X))^2
$$
#### Sifat-Sifat Ragam (*Variance*)
Misalkan peubah acak X dengan ragam ${Var(X)}$
- Jika ${a}$ suatu konstanta, maka
$$
Var(X + a) = Var(X)
$$
- Jika ${c}$ suatu konstanta, maka
$$
Var(cX) = c^2Var(X)
$$
### Sebaran Bersama, Koragam, dan Korelasi

#### Definisi
Sebaran bersama adalah sebaran peluang dari semua kemungkinan hasil dua peubah acak. Terdapat dua jenis sebaran bersama, yaitu:

1. Fungsi Massa Peluang (Diskret)
$$
p(x, y) = P(X=x, Y=y) = \begin{cases} p(i, j)\;; \; x = i, y = j \\ 0 \;\;\;\;\;\;\;\;; \; x,y \; lainnya  \end{cases}
$$
	- Berlaku untuk X dan Y peubah acak diskret
	- ${p(x,y) \ge 0}$
	- ${\sum{p(x,y)} = 1}$

2. Fungsi Kepekatan Peluang (Kontinu)
$$
f(x,y) = \begin{cases} f_{ij}(x,y) \;;\; a_i \le x \le b_i \;;\; c_j \le y \le d_j \\ 0 \;\;\;\;\;\;\;\;\;\;\;\,;\; x,y \; lainnya \end{cases}
$$
	- Berlaku untuk X dan Y peubah acak kontinu
	- ${f(x) = 0}$
	- ${\int f(x)dx = 1}$

#### Koragam (*Covariance*)
Koragam adalah tolak ukur hubungan antar dua variabel. Koragam antara peubah acak X dan Y dinotasikan ${Cov(X, Y)}$, dan didefinisikan:
$$
Cov(X, Y) = \sum_{\forall i}{\sum_{\forall j} p_{ij}(X_i - E(X))(Y_j - E(Y))}
$$
atau
$$
Cov(X, Y) = E(X - E(X))(Y - E(Y)) = E(XY) - (E(X)E(Y))
$$
dengan
$$
E(XY) = \sum_{\forall i}{\sum_{\forall j} x_iy_jp_{ij}}
$$
#### Korelasi (*Correlation*)
Korelasi adalah ukuran kekuatan dan arah hubungan antara dua variabel. Korelasi antara peubah acak X dan Y dinotasikan ${Corr(X, Y) = \rho_{XY}}$, dan didefinisikan:
$$
Corr(X, Y) = \rho_{XY} = \frac {Cov(X, Y)}{\sigma_X\sigma_Y}
$$
dengan:
- ${\sigma_X = \sqrt {Var(X)}}$ yang dikenal standar deviasi p.a. X
- ${\sigma_Y = \sqrt {Var(Y)}}$ yang dikenal standar deviasi p.a. Y

#### Sifat-Sifat Nilai Harapan, Ragam, dan Koragam
Misalkan X dan Y peubah acak dan ${a, b}$ konstanta. Berikut sifat-sifat nilai harapan dan ragam:
- ${E(X + Y) = E(X) + E(Y)}$
- ${Var(X + Y) = Var(X) + Var(Y) + 2Cov(X, Y)}$
- ${Var(aX + bY) = a^2Var(X) + b^2Var(Y) + 2abCov(X, Y)}$

Jika X dan Y saling bebas, maka:
- ${E(XY) = E(X)E(Y)}$
- ${Cov(X, Y) = 0}$ (tidak berlaku sebaliknya)