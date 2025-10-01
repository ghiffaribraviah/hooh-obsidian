[[Bravi's Academic/Semester 5/Metode Statistika Aktuaria I/Responsi/index|Metode Statistika Aktuaria I]] - R1 <br>Ghiffari Bravia Hisham (G6401231050)

### Soal 1

>Seorang agen properti ingin memprediksi harga jual rumah (dalam ratus juta rupiah) berdasarkan luas tanah (dalam ${m^2}$) dan jumlah kamar tidur. Data dari 8 rumah yang baru saja terjual disajikan berikut ini:

|       Harga (Y)        |  5  |  7  |  9  |  8  | 10  | 11  | 12  | 14  |
| :--------------------: | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
|  Luas Tanah ${(X_1)}$  | 100 | 120 | 150 | 140 | 180 | 200 | 210 | 250 |
| Jumlah Kamar ${(X_2)}$ |  3  |  3  |  4  |  4  |  4  |  5  |  5  |  5  |

#### 1a

>Plot antara y dengan x1 , y dengan x2 . Dapatkah model regresi linear diterapkan pada data tersebut

Hasil Plot antara Y dengan ${X_1}$

![[05 - R - 01 - Plot 1a (X1).png]]

Hasil Plot antara Y dengan ${X_2}$

![[Pasted image 20250930232114.png]]

Pada gambar hasil plot, diketahui susunan setiap titik membentuk pola linear sehingga model regresi linear dapat diterapkan pada data tersebut.
#### 1b

>Tentukan model linear peubah banyak beserta asumsi yang mendasarinya

Model Regresi Peubah Banyak:
$$
Y_i = \beta_0 + \beta_1 x_{1i} + \beta_2 x_{2i} + \varepsilon_i \; ; \quad i = 1, \dots, 8 
$$
Asumsi:
- Hubungan antara X dan Y linear
- Tidak ada hubungan linear antara 2 atau lebih peubah bebas / peubah penjelas
- ${E(\varepsilon_i)}$ = 0
- Ragam Konstan, ${E(\varepsilon_i^2) = \sigma^2}$
- Peubah acak ${\varepsilon_i}$ saling bebas, ${E(\varepsilon_i\varepsilon_j) = 0; \; \forall i \neq j}$
- Error ${\varepsilon_i \sim N(0, \sigma^2)}$

#### 1c

>Nyatakan model pada (b) secara matriks

Model Regresi Peubah Banyak dalam Matriks:
$$
Y = X\beta + \varepsilon
$$
untuk:
$$
Y = \begin{bmatrix} 5 \\ 7 \\ 9 \\ 8 \\ 10 \\ 11 \\ 12 \\ 14 \end{bmatrix}, \quad X = \begin{bmatrix} 1 \ 100 \ 3 \\ 1 \ 120 \ 3 \\ 1 \ 150 \ 4 \\ 1 \ 140 \ 4 \\ 1 \ 180 \ 4 \\ 1 \ 200 \ 5 \\ 1 \ 210 \ 5 \\ 1 \ 250 \ 5 \end{bmatrix}, \quad \beta = \begin{bmatrix} \beta_0 \\ \beta_1 \\ \beta_2 \end{bmatrix}, \quad \varepsilon = \begin{bmatrix} \varepsilon_1 \\ \varepsilon_2 \\ \varepsilon_3 \\ \varepsilon_4 \\ \varepsilon_5 \\ \varepsilon_6 \\ \varepsilon_7 \\ \varepsilon_8 \end{bmatrix}
$$

#### 1d

> Tentukan estimasi parameter model pada (b) menggunakan OLS

Dengan menggunakan OLS, didapatkan rumus:
$$
\hat\beta = (X^TX)^{-1}(X^TY) 
$$
Dengan model dugaan:
$$
\hat Y = X\hat\beta
$$

Perhitungan ${(X^TX)^{-1}}$
$$
X^T = \begin{bmatrix} 1 \ 1 \ 1 \ 1 \ 1 \ 1 \ 1 \ 1 \\ 100 \ 120 \ 150 \ 140 \ 180 \ 200 \ 210 \ 250 \\ 3 \ 3 \ 4 \ 4 \ 4 \ 5 \ 5 \ 5\end{bmatrix}
$$
$$
X^TX = \begin{bmatrix} 1 \ 1 \ 1 \ 1 \ 1 \ 1 \ 1 \ 1 \\ 100 \ 120 \ 150 \ 140 \ 180 \ 200 \ 210 \ 250 \\ 3 \ 3 \ 4 \ 4 \ 4 \ 5 \ 5 \ 5\end{bmatrix} \begin{bmatrix} 1 \ 100 \ 3 \\ 1 \ 120 \ 3 \\ 1 \ 150 \ 4 \\ 1 \ 140 \ 4 \\ 1 \ 180 \ 4 \\ 1 \ 200 \ 5 \\ 1 \ 210 \ 5 \\ 1 \ 250 \ 5 \end{bmatrix}
$$
$$
X^TX = \begin{bmatrix} 8 \ 1350 \ 33 \\ 1350 \ 245500 \ 5840 \\ 33 \ 5840 \ 141 \end{bmatrix}
$$
$$
(X^TX)^{-1} = \begin{bmatrix} 5.0385 \ 0.02342 \ -2.1492 \\ 0.02342 \ 0.000385 \ -0.02144 \\ -2.1492 \ 0.02144 \ 1.3982 \end{bmatrix}
$$

Perhitungan ${X^TY}$
$$
X^T = \begin{bmatrix} 1 \ 1 \ 1 \ 1 \ 1 \ 1 \ 1 \ 1 \\ 100 \ 120 \ 150 \ 140 \ 180 \ 200 \ 210 \ 250 \\ 3 \ 3 \ 4 \ 4 \ 4 \ 5 \ 5 \ 5\end{bmatrix}
$$
$$
X^TY = \begin{bmatrix} 1 \ 1 \ 1 \ 1 \ 1 \ 1 \ 1 \ 1 \\ 100 \ 120 \ 150 \ 140 \ 180 \ 200 \ 210 \ 250 \\ 3 \ 3 \ 4 \ 4 \ 4 \ 5 \ 5 \ 5\end{bmatrix} \begin{bmatrix} 5 \\ 7 \\ 9 \\ 8 \\ 10 \\ 11 \\ 12 \\ 14 \end{bmatrix}
$$
$$
X^TY = \begin{bmatrix} 76 \\ 13830 \\ 329 \end{bmatrix}
$$

Perhitungan ${\hat\beta}$ 
$$
\hat\beta = (X^TX)^{-1} = \begin{bmatrix} 5.0385 \ 0.02342 \ -2.1492 \\ 0.02342 \ 0.000385 \ -0.02144 \\ -2.1492 \ 0.02144 \ 1.3982 \end{bmatrix} \begin{bmatrix} 76 \\ 13830 \\ 329 \end{bmatrix}
$$
$$
\hat\beta = \begin{bmatrix} -0.2766815 \\ 0.05494072 \\ 0.12252873 \end{bmatrix}
$$

Model dugaan yang didapatkan adalah
$$
\hat Y = X\hat\beta
$$
$$
\hat Y_i = \hat\beta_0 + \hat\beta_1 X_{1i} + \hat\beta_2 X_{2i}
$$
$$
\hat Y_i = -0.2766815 + 0.05494072 \times X_{1i} + 0.12252873 \times X_{2i}
$$

#### 1e

>Tentukan koefisien determinasinya dan interpretasikan

Mencari SST
$$
SST = Y^TY - n\bar y^2
$$
$$
Y^TY = \begin{bmatrix} 5 \ 7 \ 9 \ 8 \ 10 \ 11 \ 12 \ 14 \end{bmatrix} \begin{bmatrix} 5 \\ 7 \\ 9 \\ 8 \\ 10 \\ 11 \\ 12 \\ 14 \end{bmatrix}
$$
$$
Y^TY = 780
$$
$$
n\bar y^2 = n \times \sum{(\frac {y_i} n)^2}
$$
$$
n\bar y^2 = 8 \times 90.25 = 722
$$
$$
SST = 780 - 722 = 58
$$
Mencari SSE
$$
SSE = Y^TY - \hat\beta^TX^TY
$$
$$
\hat\beta^TX^TY = \begin{bmatrix} -0.2766815 \ 0.05494072 \ 0.12252873 \end{bmatrix} \begin{bmatrix} 76 \\ 13830 \\ 329 \end{bmatrix}
$$
$$
\hat\beta^TX^TY = \begin{bmatrix} -21.027794 + 759.984 + 40.31195217 \end{bmatrix}
$$
$$
\hat\beta^TX^TY = 779.2681582
$$
$$
SSE = 780 - 779.2681582 = 0.73184183
$$
Mencari SSR
$$
SSR = SST - SSE
$$
$$
SSR = 58 - 0.73184183 = 57.26815817
$$

Didapatkan nilai:
$$
SST = 58, \quad SSE = 0.73184183, \quad SSR = 57.26815817
$$

Perhitungan ${R^2}$
$$
R^2 = \frac {SSR} {SST} = \frac {57.26815817} {58} = 0.987
$$

Nilai ${R^2}$ yang mencapai 98.7% menunjukkan akurasi dari model regresi tersebut terhadap data yang ada. Hasil ini menunjukkan bila model regresi sangat baik untuk data tersebut dengan error yang minim.

#### 1f

>Uji hipotesis parameter model secara serentak dan sekuensial dengan taraf signifikansi 5%



