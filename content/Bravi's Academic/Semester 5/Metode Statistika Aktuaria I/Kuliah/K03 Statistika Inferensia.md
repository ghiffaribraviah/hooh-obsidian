[[Bravi's Academic/Semester 5/Metode Statistika Aktuaria I/Kuliah/index|Metode Statistika Aktuaria I]] - K1 <br>Ghiffari Bravia Hisham (G6401231050)

### Konsep Statistika Inferensia

![[03-K-01-Statistika Inferensia.png]]
#### Definisi
Statistika inferensia adalah pendugaan parameter populasi dari data sampel yang didapatkan. Berbeda dengan statistika deskriptif yang mendapatkan karakteristik data untuk sampel tersebut, statistika inferensia menggunakan data sampel tersebut untuk melakukan prediksi mengenai karakteristik data populasi secara keseluruhan

#### Jenis Penduga Parameter
Secara umum, jenis penduga parameter yang digunakan dalam statistika inferensia adalah:
1. Penduga Titik, membuktikan asumsi kebenaran mengenai suatu nilai parameter (menggunakan Uji Hipotesis atau MLE)
2. Penduga Selang, mendapatkan rentang nilai yang mungkin dari parameter populasi yang sebenarnya (menggunakan Interval Kepercayaan)

#### Metode Pendugaan Parameter
Terdapat tiga metode pendugaan yang umum digunakan dalam statistika inferensia, yaitu:
1. *Maximum Likelihood Estimation* (MLE)
	Mendapatkan estimasi nilai parameter yang memaksimalkan fungsi kemungkinan (*likelihood function*) 
2. Metode Momen
	Mendapatkan estimasi nilai parameter menggunakan data dari sampel (misalnya mean, ragam, dll)
3. *Ordinary Least Squares* (OLS)
	Mendapatkan estimasi nilai parameter dengan meminimalkan kuadrat dari error pada data. Banyak digunakan pada model regresi linear

Metode yang banyak digunakan pada mata kuliah ini adalah metode momen (Interval Kepercayaan, Uji Hipotesis) dan OLS (Model Regresi)

#### Sifat Penduga Parameter
Dalam menduga suatu parameter, terdapat beberapa opsi penduga yang dapat dipilih. Penduga terbaik (*best estimator*) dari berbagai pilihan adalah penduga yang dapat meminimalkan *Mean Square Error* (MSE) bagi nilai penduga tersebut (${\hat \theta}$):
$$
MSE(\hat \theta) = E[(\hat\theta - \theta)^2] = Var(\hat\theta) + (bias)^2
$$
Sifat penduga titik yang baik (dapat meminimalkan MSE) adalah:
1. Ketakbiasan (*Unbiased*)
	- Penduga ${\hat\theta}$ dikatakan tak bias bagi ${\theta}$ jika dipenuhi ${E(\hat\theta) = 0}$
	- Atau, ${bias = E(\hat\theta) - \theta}$

2. Efisien (*Efficient*)
	- Penduga tak bias ${\hat\theta}$ dikatakan efisien jika untuk ukuran sampel tertentu, ragam ${\hat\theta}$ (${Var(\hat\theta)}$) lebih kecil daripada ragam penduga tak bias lainnya
	- Jika ${Var(\hat\theta) = 0}$, maka ${\hat\theta = \theta}$

3. Konsisten (*Consistent*)
	- Penduga ${\hat\theta}$ dikatakan konsisten jika untuk ukuran sampel yang sangat besar, maka peluang bahwa ${\hat\theta}$ berbeda dari ${\theta}$ sangat kecil
	- Penduga ${\hat\theta}$ dikatakan konsisten bagi parameter ${\theta}$ jika untuk sebarang ${\delta \gt 0}$, dipenuhi:
$$
\lim_{n\rightarrow\infty}{P(|\theta-\hat\theta|\lt \delta) = 1}
$$
	- Penduga konvergen dalam peluang ke parameter

### Metode *Maximum Likelihood Estimation* (MLE)

#### *Likelihood Function*

![[03-K-02-Likelihood Function.png]]

Fungsi kemungkinan (*Likelihood Function*) adalah sebuah fungsi untuk mengukur "seberapa mungkin untuk mengobservasi data berdasarkan parameter ${\theta}$ yang diberikan". Dengan mengasumsikan setiap data bersifat independen, fungsi kemungkinan dapat dituliskan sebagai berikut:
$$
L(\theta|X = x) = P(x_1,x_2,\dots,x_n|\theta) = P(x_1|\theta) \cdot P(x_2|theta) \cdot \dots \cdot P(x_n|\theta)
$$
$$
L(\theta|X = x) = \prod_{i=1}^{n}{P(x_i|\theta)}
$$
Pada banyak kasus, bentuk logaritmik dari fungsi kemungkinan lebih banyak digunakan karena memudahkan proses perhitungan MLE:
$$
\log L(\theta|X=x) = \log(\prod_{i=1}^{n}{P(x_i|\theta)}) = \sum_{i=1}^{n}{\log P(x_i|\theta)}
$$

#### *Maximum Likelihood Estimation* (MLE)
Metode MLE merupakan salah satu cara untuk melakukan pendugaan parameter dalam statistika inferensia. Metode MLE dilakukan dengan memaksimalkan fungsi kemungkinan ${L(\theta|X=x)}$, yaitu menyamakan turunan pertamanya dengan 0:
$$
\frac {\partial L}{\partial \theta} = \frac{\partial}{\partial \theta}{L(\theta|X=x)} = 0
$$

### Interval Kepercayaan

#### Definisi
Merupakan bagian dari metode momen, interval kepercayaan adalah metode untuk mendapatkan rentang nilai dari parameter sebenarnya pada populasi. Hasil interval kepercayaan sangat bergantung pada level signifikansi ${\alpha}$ dengan level kepercayaan = ${1 - \alpha}$. Interval kepercayaan memerlukan dua statistik utama, yaitu *mean* (${\mu}$) dan standar deviasi (${\sigma}$) dari data sampel maupun populasi. 

#### Bentuk Umum
Terdapat dua bentuk umum untuk interval kepercayaan dari suatu data, yaitu:
1. Uji-Z
	- Menggunakan sebaran normal baku (Z) dalam perhitungan interval
	- Digunakan jika ragam populasi (${\sigma^2}$) diketahui dan ukuran sampel besar
	- Bentuk selang kepercayaan ${(1-\alpha)100\%}$ untuk parameter ${\mu}$ adalah:
$$
\bar x - z_{\alpha / 2}\frac{\sigma}{\sqrt n} \lt \mu \lt x + z_{\alpha / 2}\frac{\sigma}{\sqrt n}
$$
		- ${\mu}$ = rataan populasi
		- ${\sigma}$ = standar deviasi populasi
		- ${\bar x}$ = rataan sampel
		- ${n}$ = banyaknya sampel

2. Uji-t
	- Menggunakan sebaran t-student (t) dalam perhitungan interval
	- Digunakan jika ragam populasi (${\sigma^2}$) tidak diketahui atau ukuran sampel kecil (diganti dengan ragam sampel (${s^2}$))
	- Bentuk selang kepercayaan ${(1-\alpha)100\%}$ untuk parameter ${\mu}$ adalah:
$$
\bar x - t_{(n-1, \,\alpha / 2)}\frac{s}{\sqrt n} \lt \mu \lt x + t_{(n-1, \,\alpha / 2)}\frac{s}{\sqrt n}
$$
		- ${\mu}$ = rataan populasi
		- ${\bar x}$ = rataan sampel
		- ${s}$ = standar deviasi sampel
		- ${n}$ = banyaknya sampel

### Pengujian Hipotesis

#### Definisi
Merupakan bagian dari metode momen, uji hipotesis merupakan metode untuk menguji kebenaran mengenai asumsi nilai dari suatu parameter populasi. Hasil uji hipotesis sangat bergantung pada level signifikansi ${\alpha}$ dengan level kepercayaan = ${1 - \alpha}$. Interval kepercayaan memerlukan dua statistik utama, yaitu *mean* (${\mu}$) dan standar deviasi (${\sigma}$) dari data sampel maupun populasi. 

#### Langkah-Langkah Uji Hipotesis
Secara umum, uji hipotesis memerlukan empat langkah terurut yang harus dipenuhi untuk mendapatkan kesimpulan yang sesuai, yaitu:

1. Definisi Hipotesis, menentukan asumsi / hipotesis yang akan diambil.
	- Hipotesis nol (${H_0}$), asumsi dasar bahwa tidak ada efek atau perubahan
	- Hipotesis alternatif (${H_1}$), asumsi bahwa ada suatu efek atau perubahan tertentu

2. Memilih Level Signifikansi (${\alpha}$), yaitu kesalahan pengambilan keputusan dari uji hipotesis (Umumnya ${\alpha = 0.05}$)

3. Menentukan Statistik Uji, yaitu nilai statistik untuk mengukur seberapa besar data sampel menyimpang dari ekspektasi jika hipotesis nol bernilai benar. Secara umum, terdapat tiga jenis statistik uji, yaitu:
	- Uji-Z, digunakan ketika ragam populasi diketahui dan ukuran sampel besar
	- Uji-t, digunakan ketika ragam populasi tidak diketahui atau ukuran sampel kecil
	- *Chi-square test*, digunakan untuk data kategorik

4. Menentukan Keputusan, membandingkan nilai statistik uji dengan nilai kritis atau menggunakan *p-value*
	- Nilai kritis, membandingkan hasil statistik uji dengan nilai kritis dari tabel sebaran
	- *p-value*, membandingkan *p-value* yang didapat dengan ${\alpha}$

5. Interpretasi hasil, menyimpulkan apakah ada cukup bukti untuk mendukung hipotesis alternatif (${H_1}$) atau tidak (menerima ${H_0}$)

#### Bentuk Umum Uji Hipotesis
Secara umum, terdapat tiga jenis kasus dalam melakukan uji hipotesis yang dapat dilakukan menggunakan salah satu dari dua jenis statistik uji, yaitu:

1. Uji-Z
	- Digunakan ketika ragam populasi (${\sigma_{\bar X}}$) diketahui dan ukuran sampel besar
	- Menggunakan tabel sebaran normal baku dalam statistik uji
	- Terdapat tiga jenis kasus yang mungkin terjadi, yaitu:
		1. ${H_0: \theta = \theta_0}$ dengan ${H_1: \theta \ne \theta_0}$
		2. ${H_0: \theta = \theta_0}$ dengan ${H_1: \theta \gt \theta_0}$
		3. ${H_0: \theta = \theta_0}$ dengan ${H_1: \theta \lt \theta_0}$
	- Statistik Uji untuk Uji-Z adalah:
$$
Z_{hitung} = \frac{\hat\theta - \theta_0}{\sigma_{\hat\theta}} \;;\; Z_{tabel} = Z_{\alpha/2}
$$
		- ${\hat\theta}$ = Nilai parameter sampel
		- ${\theta_0}$ = Nilai parameter yang diduga
		- ${\sigma_{\hat\theta}}$ = ${\frac{\sigma_\theta}{\sqrt n}}$ = Standar deviasi rata-rata populasi
	- Penentuan keputusan untuk ketiga jenis kasus adalah:
		1. ${|Z_{hitung}| \gt Z_{\alpha / 2}}$ untuk ${H_1: \theta \ne \theta_0}$
		2. ${Z_{hitung} \gt Z_\alpha}$ untuk ${H_1: \theta \gt \theta_0}$
		3. ${Z_{hitung} \lt -Z_\alpha}$ untuk ${H_1: \theta \lt \theta_0}$

2. Uji-t
	- Digunakan ketika ragam populasi (${\sigma_{\bar X}}$) tidak diketahui atau ukuran sampel kecil
	- Menggunakan tabel sebaran t-student dalam statistik uji
	- Terdapat tiga jenis kasus yang mungkin terjadi, yaitu:
		1. ${H_0: \theta = \theta_0}$ dengan ${H_1: \theta \ne \theta_0}$
		2. ${H_0: \theta = \theta_0}$ dengan ${H_1: \theta \gt \theta_0}$
		3. ${H_0: \theta = \theta_0}$ dengan ${H_1: \theta \lt \theta_0}$
	- Statistik Uji untuk Uji-t adalah:
$$
t_{hitung} = \frac{\hat\theta - \theta_0}{s_{\hat\theta}} \;;\; t_{tabel} = t_{\alpha/2, db}
$$
		- ${\hat\theta}$ = Nilai parameter sampel
		- ${\theta_0}$ = Nilai parameter yang diduga
		- ${s_{\hat\theta}}$ = ${\frac{s_\theta}{\sqrt n}}$ = Standar deviasi rata-rata sampel
	- Penentuan keputusan untuk ketiga jenis kasus adalah:
		1. ${|t_{hitung}| \gt t_{\alpha / 2, db}}$ untuk ${H_1: \theta \ne \theta_0}$
		2. ${t_{hitung} \gt t_{\alpha,db}}$ untuk ${H_1: \theta \gt \theta_0}$
		3. ${t_{hitung} \lt -t_{\alpha,db}}$ untuk ${H_1: \theta \lt \theta_0}$