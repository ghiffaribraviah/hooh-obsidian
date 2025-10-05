[[Bravi's Academic/Semester 5/Metode Statistika Aktuaria I/Kuliah/index|Metode Statistika Aktuaria I]] - K1 <br>Ghiffari Bravia Hisham (G6401231050)

### Sebaran Peubah Acak Diskret
#### Sebaran Bernoulli
- Terdapat satu kali percobaan
- Setiap percobaan menghasilkan 2 kemungkinan (ya/tidak), ${X = \{0,1\}}$
- Peluang terjadinya "1" adalah ${p}$
- Fungsi massa peluang untuk peubah acak X ini adalah:
$$
p_x(x) = P(X = x) = p^x(1-p)^{1-x}\;;\;x = 0,1
$$
- ${E(X) = p}$
- ${Var(X) = p(1-p)}$
- Rumus sebaran bernoulli dalam excel adalah:
$$
BINOM.DIST(x, n, p, CUM)
$$
	- x = Jumlah keberhasilan (dalam bernoulli, bisa 0 atau 1)
	- n = Jumlah percobaan (dalam bernoulli, N = 1)
	- p = Probabilitas berhasil
	- CUM = Pilihan distribusi kumulatif (FALSE by default)

#### Sebaran Binomial
- Terdapat n kali percobaan yang saling bebas
- Setiap percobaan menghasilkan 2 kemungkinan (ya/tidak), ${X = \{0, 1\}}$
- Peubah acak X adalah banyaknya kejadian "1" dari n kali percobaan, ditulis ${X = \{0,1,2,\dots,n\}}$
- Fungsi massa peluang peubah acak X ini adalah:
$$
p_x(x) = P(X = x) = {n \choose x}p^x(1-p)^{n-x}\;;\; x = 0,1,\dots,n
$$
	dengan ${{n \choose x} = \frac{n!}{x!(n-x)!}}$
- ${E(X) = np}$
- ${Var(X) = np(1-p)}$
- Rumus sebaran binomial dalam excel adalah:
$$
BINOM.DIST(x, n, p, CUM)
$$
	- x = Jumlah keberhasilan
	- n = Jumlah percobaan
	- p = Probabilitas berhasil
	- CUM = Pilihan distribusi kumulatif (FALSE by default)

#### Sebaran Poisson
- Sering digunakan untuk menggambarkan banyaknya suatu kejadian jarang dalam suatu rentang waktu tertentu
- Kasus khusus dari sebaran binomal dengan n sangat besar dan peluang "1" sangat kecil
- Fungsi massa peluang peubah acak X ini adalah:
$$
p_x(x) = P(X = x) = \frac{\lambda^xe^{-\lambda}}{x!}\;;\; x = 0, 1, 2, \dots
$$
- ${E(X) = Var(X) = \lambda}$
- ${\lambda = np}$
- Rumus sebaran poisson dalam excel adalah:
$$
POISSON.DIST(x, \lambda, CUM)
$$
	- x = Jumlah keberhasilan
	- ${\lambda}$ = Rata-rata
	- CUM = Pilihan distribusi kumulatif (FALSE by default)

### Sebaran Peubah Acak Kontinu
#### Sebaran Normal
- Paling banyak digunakan dalam analisis statistika
- Misalkan X peubah acak dengan rataan ${\mu}$ dan ragam ${\sigma^2}$, ditulis:
$$
X \sim N(\mu, \sigma^2)
$$
- Fungsi kepekatan peluang peubah acak X ini adalah:
$$
f_x(x) = \frac{1}{\sqrt{2\pi\sigma^2}}e^{\frac{-(x-\mu)^2}{2\sigma^2}}\;;\; -\infty \lt x \lt \infty
$$
- ${E(X) = \mu}$
- ${Var(X) = \sigma^2}$
- Rumus sebaran normal dalam excel adalah:
$$
NORM.DIST(x, \mu, \sigma, CUM)
$$
	- x = Nilai sebaran yang ditentukan
	- ${\mu}$ = Rataan dari sebaran normal
	- ${\sigma}$ = Simpangan baku dari sebaran normal
	- CUM = Pilihan distribusi kumulatif (FALSE by default)

#### Sebaran Normal Baku
- Sebaran normal dengan ${\mu = 0}$ dan ${\sigma^2 = 1}$
- Peubah acak Z dengan ${Z \sim N(0, 1)}$ dengan Z adalah peubah acak normal baku
- Cara mengkonversi X dari sebaran normal biasa menjadi Z score adalah dengan:
$$
Z = \frac {X - \mu}{\sigma}
$$
- Fungsi kepekatan peluang peubah acak Z ditulis:
$$
f_z(z) = \frac{1}{\sqrt{2\pi}}e^{\frac{-z^2}{2}}\;;\; -\infty \lt z \lt \infty
$$
- ${E(Z) = 0}$
- ${Var(Z) = 1}$
- Rumus sebaran normal baku dalam excel adalah:
$$
NORM.S.DIST(Z)
$$
	- Z = Nilai Z score yang ditentukan
	- Hasil merupakan distribusi kumulatif

#### Sebaran Eksponen
- Sering digunakan dalam menentukan waktu / interval terjadinya setiap kejadian dalam proses Poisson
- Fungsi kepekatan peluang peubah acak X ini adalah:
$$
f_x(x) = \lambda e^{-\lambda x} \;;\; 0 \lt x \lt \infty
$$
- ${E(X) = \frac 1 \lambda}$
- ${Var(X) = \frac 1 {\lambda^2}}$
- Rumus sebaran eksponen dalam excel adalah:
$$
EXPON.DIST(x, \lambda, CUM)
$$
	- x = Nilai sebaran yang ditentukan
	- ${\lambda}$ = Rata-rata
	- CUM = Pilihan distribusi kumulatif (FALSE by default)

### Sebaran Sampling

#### Konsep Dasar

![[02-K-01-Sebaran Sampling.png]]

- Sebaran sampling adalah sebaran peluang dari statistik untuk semua sampel dari populasi tertentu. 
- Setiap sampel dari populasi dapat dikatakan peubah acak ${X_1, X_2, \dots, X_n}$ dengan rataan ${\bar {x_i}}$ dan ragam ${\sigma_{\bar {x_i}}^2}$ 
- Suatu fungsi ${T = T(X_1, X_2, \dots, X_n)}$ juga merupakan peubah acak dan memiliki bentuk sebaran peluang, yaitu sebaran sampling statistik T

#### Sebaran Sampling Statistik
- Untuk ${T = T(X_1, X_2, \dots, X_n)}$, ${\bar X = \frac 1 n \sum {X_i}}$ 
- Untuk ${T = T(X_1, X_2, \dots, X_n)}$, ${S^2 = \frac 1 {n-1} \sum {(X_i - \bar X)^2}}$ 
- Setelah mendapatkan semua kemungkinan statistik ${\bar X}$ dan ${S^2}$, T dapat ditulis menjadi sebaran sampling statistik T
- T dapat ditulis sebagai sebaran peluang *mean*:
$$
p(\bar x) = P(\bar X = \bar x) = \begin{cases} P(\bar X = i)\;;\; \bar x = i \\ 0 \;\;\;\;\;\;\;\;\;\;\;\;\;\;;\; \bar x \; lainnya\end{cases}
$$
- Mean populasi, ${E(X) = \mu_{\bar x} = \sum {\bar x P(\bar X = \bar x)}}$
- Ragam populasi, ${Var(X) = \sigma_{\bar X}^2 = \sum{(\bar x - \mu_{\bar x})^2P(\bar X = \bar x)}}$
- Misalkan terdapat populasi dengan banyak anggota sebesar N dengan rataan populasi ${\mu}$ dan ragam ${\sigma^2}$. Jika diambil sampel/contoh berukuran n, maka:
	1. ${\bar X}$ memiliki rataan sebesar ${\mu_{\bar X} = \mu}$
	2. ${\bar X}$ memiliki ragam sebesar:
		- Dengan pengembalian, ${\sigma_{\bar X}^2 = \frac {\sigma^2}{n}}$
		- Tanpa pengembalian, ${\sigma_{\bar X}^2 = \frac {\sigma^2}{n} \frac{N-n}{N-1}}$
- Berdasarkan Teorema Limit Pusat [(Central Limit Theorem)](https://www.geeksforgeeks.org/maths/central-limit-theorem/), sampling dari populasi non-normal akan memiliki sebaran sampling ${\bar X}$ mendekati sebaran normal asalkan ukuran contoh besar ${(n \ge 30)}$
- Untuk sampling dari populasi normal, sebaran rataan contoh ${\bar X}$ juga normal

#### Sebaran Sampling Bagi Beda 2 Rataan
- Misalkan terdapat 2 populasi, X dan Y dengan rataan dan ragam yang berbeda, yaitu ${\mu_X}$, ${\mu_Y}$, ${\sigma_X^2}$, dan ${\sigma_Y^2}$ 
- Misalkan diambil sampel dari X dan Y dengan jumlah yang berbeda, yaitu ${n_X}$ dan ${n_Y}$
- Setelah mendapatkan mean populasi X (${\mu_{\bar X}}$) dan mean populasi Y (${\mu_{\bar Y}}$), nilai mean, ragam, dan standar deviasi bagi beda 2 rataan dapat dihitung sebagai berikut:
	- ${\mu_{\bar X - \bar Y} = \mu_{\bar X} - \mu_{\bar Y} = \mu_X - \mu_Y}$
	- ${\sigma_{\bar X - \bar Y}^2 = \sigma_{\bar X}^2 + \sigma_{\bar Y}^2 = \frac{\sigma_X^2}{n_X} + \frac{\sigma_Y^2}{n_Y}}$
	- ${\sigma_{\bar X - \bar Y} = \sqrt{\sigma_{\bar X - \bar Y}^2}}$

