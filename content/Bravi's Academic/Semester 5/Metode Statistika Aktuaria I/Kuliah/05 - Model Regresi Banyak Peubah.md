### Definisi Umum

Model:
$$
Y_i = \beta_o + \beta_1X_{1i} + ... + \beta_pX_{pi} + \epsilon_i \; ; \; i = 1, ... , n
$$
Asumsi:
1. Hubungan antara X dan Y linear,
2. Tidak ada hubungan linear antar 2 atau lebih peubah bebas/peubah penjelas,
3. ${E(\epsilon_i) = 0 }$
4. Ragam konstan, ${E(\epsilon_i^2) = \sigma^2}$
5. Peubah acak ${\epsilon_i}$ saling bebas, ${E(\epsilon_i\epsilon_j) = 0, \; \forall i \neq j}$
6. Error ${\epsilon_i \sim N(0, \sigma^2)}$

### Model Matriks

Model:
$$
Y = X\beta + \epsilon
$$

Dengan:
$$
Y = \begin{pmatrix} y_1 \\ . \\ . \\ n \end{pmatrix}, \quad X = \begin{pmatrix} 1 & ... & X_{1p} \\ . & ... & . \\ 1 & ... & X_{np} \end{pmatrix}, \quad \beta = \begin{pmatrix} \beta_0 \\ . \\ . \\ \beta_p \end{pmatrix}, \quad \epsilon = \begin{pmatrix} \epsilon_1 \\ . \\ . \\ \epsilon_p \end{pmatrix}
$$
### Pendugaan Parameter

Menggunakan Metode Kuadrat Terkecil (_Ordinary Least Square/OLS_ ), model dugaan didapat sebagai berikut:
$$
\hat\beta = (X^TX)^{-1}X^TY
$$
$$
\hat Y = X\hat\beta
$$
Pembuktian dapat dicek di [[MSA1_05_E_01 - Pembuktian Model Dugaan Parameter|sini]]

### Pengujian Hipotesis Parsial

Dengan asumsi ${E(\epsilon) = 0}$ dan ${Var(\epsilon) = \sigma^2I}$, penduga parameter tak bias yaitu:
$$
E(\hat\beta) = \beta
$$
dan
$$
Var(\hat\beta) = \sigma^2 (X^TX)^{-1}
$$
atau
$$
s(\hat\beta_j) = s\sqrt {elemen \; diagonal \; ke -(j+1) * matriks(X^TX)^{-1}}
$$

### Pengujian Hipotesis Sequensial

Tabel Hipotesis Sekuensial

|             |    Estimate     |     Std. Error     |      t-value       | ${Pr(>\vert t \vert)}$ |
| :---------: | :-------------: | :----------------: | :----------------: | :--------------------: |
| (Intercept) | ${\hat\beta_0}$ | ${s(\hat\beta_0)}$ | ${t(\hat\beta_0)}$ |                        |
|   ${X_1}$   | ${\hat\beta_1}$ | ${s(\hat\beta_1)}$ | ${t(\hat\beta_1)}$ |                        |
|     ...     |       ...       |        ...         |        ...         |                        |
|   ${X_n}$   | ${\hat\beta_n}$ | ${s(\hat\beta_n)}$ | ${t(\hat\beta_0)}$ |                        |

