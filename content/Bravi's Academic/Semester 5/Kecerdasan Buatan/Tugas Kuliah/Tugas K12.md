[[Bravi's Academic/Semester 5/Kecerdasan Buatan/Tugas Kuliah/index|Kecerdasan Buatan]] - K2 <br>Ghiffari Bravia Hisham (G6401231050)

### Introduksi

>Sebuah neural network sederhana terdiri dari:
- Input Layer: 2 neuron - ${x_1, x_2}$
- Hidden Layer: 2 neuron, dengan aktivasi sigmoid
- Output Layer: 1 neuron, dengan aktivasi sigmoid

>Parameter:
- Input = ${x_1 = 2}$, ${x_2 = 3}$
- Bobot input ke hidden:
$$
w_{1,1} = 0.4, \; w_{2,1} = 0.7, \; b_{h1} = -1.0
$$
$$
w_{1,2} = 0.2, \; w_{2,2} = 0.5, \; b_{h2} = 0.0
$$
- Target / label: ${t = 0.6}$

>Fungsi aktivasi (sigmoid): ${\sigma(z) = \frac {1} {1 + e^{-z}}}$

### Soal 1 (*Forward Propagation*)

>a. Hitung nilai ${z_{h1}}$, ${z_{h2}}$  
>b. Hitung output hidden layer ${a_{h1}}$, ${a_{h2}}$ dengan sigmoid  
>c. Hitung ${z_{out}}$, dan hasil akhir (prediksi) setelah sigmoid

#### Jawaban 1A
Rumus umum untuk neuron hidden ke-j:
$$
z_{hj} = w_{1,j} \times x_1 + w_{2,j} \times x_2 + b_{hj}
$$
Untuk ${h_1}$:
$$
z_{h1} = 0.4 \times 2 + 0.7 \times 3 + (-1.0)
$$
$$
z_{h1} = 1.9
$$
Untuk ${h_2}$:
$$
z_{h2} = 0.2 \times 2 + 0.5 \times 3 + (0.0)
$$
$$
z_{h2} = 1.9
$$

#### Jawaban 1B
Untuk ${\sigma_{h1}}$:
$$
\sigma_{h1} = \sigma(1.9) = \frac {1} {1 + e^{-1.9}} \approx 0.8699
$$
Untuk ${\sigma_{h2}}$:
$$
\sigma_{h2} = \sigma(1.9) = \frac {1} {1 + e^{-1.9}} \approx 0.8699
$$

#### Jawaban 1C
Rumus neuron output:
$$
z_{out} = w_{h1,o} \times a_{h1} + w_{h2, o} \times a_{h2} + b_o
$$
$$
z_{out} = 1.1 \times 0.8699 + (-0.8) \times 0.8699 + 0.3
$$
$$
z_{out} \approx 0.561
$$

Untuk menghitung hasil akhir / prediksi:
$$
y = \sigma(0.561) = \frac {1}{1 + e^{-0.561}} \approx 0.6367
$$

### Soal 2 (*Backward Propagation*)

>a. Hitung loss(${L = \frac 1 2 (prediksi - t)^2}$)  
>b. Hitung turunan loss ${wrt}$ output neuron (${\frac {\partial Loss}{\partial w_{h1, o}}}$)  
>c. Dengan learning rate ${\eta = 0.2}$, tentukan bobot baru ${w_{h1, o}}$ setelah satu kali update gradient descent  
>d. Bonus: Langkah yang sama untuk ${w_{h2,o}}$

#### Jawaban 2A
Nilai Loss yang dihitung adalah:
$$
L = \frac 1 2 (prediksi - t)^2
$$
$$
L = \frac 1 2(0.6367 - 0.6)^2
$$
$$
L \approx 0.00068
$$

#### Jawaban 2B
Nilai turunan Loss yang dihitung adalah:
$$
\frac {\partial L}{\partial w_{h1, o}} = \frac {\partial L}{\partial y} \times \frac {\partial y}{\partial z} \times \frac {\partial z}{\partial w_{h1,o}}
$$
Nilai dari ${\frac {\partial L}{\partial y}}$ adalah:
$$
L = \frac 1 2 (y-t)^2
$$
$$
\frac {\partial L}{\partial y} = (y - t)
$$
Nilai dari ${\frac {\partial y}{\partial z}}$ adalah:
$$
y = \sigma(z) = \frac {1}{1 + e^{-z}}
$$
$$
\frac {\partial y}{\partial z} = y(1 - y)
$$
Nilai dari ${\frac {\partial z}{\partial w_{h1,o}}}$ adalah:
$$
z_{out} = w_{h1,o} \times a_{h1} + w_{h2, o} \times a_{h2} + b_o
$$
$$
\frac {\partial z}{\partial w_{h1,o}} = a_{h1}
$$
Nilai akhir dari ${\frac {\partial L}{\partial w_{h1, o}}}$ adalah:
$$
\frac {\partial L}{\partial w_{h1, o}} = (y - t)\times y(1-y) \times a_{h1}
$$
$$
\frac {\partial L}{\partial w_{h1, o}} = (0.6367 - 0.6) \times 0.6367(1 - 0.6367) \times 0.8699
$$
$$
\frac {\partial L}{\partial w_{h1, o}} \approx 0.00738
$$

#### Jawaban 2C
Rumus update gradient untuk ${w_{h1,o}}$ setelah satu kali update adalah:
$$
w_{new} = w_{prev} - \eta \frac {\partial L}{\partial w}
$$
$$
w_{new} = 1.1 - 0.2 \times 0.00738
$$
$$
w_{new} \approx 1.09852
$$

#### Jawaban 2D
Dengan menggunakan cara yang sama dengan jawaban 2C:
$$
w_{new} = w_{prev} - \eta \frac {\partial L}{\partial w}
$$
Nilai dari ${\frac {\partial L}{\partial w}}$ adalah:
$$
\frac {\partial L}{\partial w_{h2,o}} = (y-t)\times y(1-y) \times a_{h2}
$$
$$
\frac {\partial L}{\partial w_{h2,o}} = (0.6367 - 0.6) \times 0.6367(1 - 0.6367) \times 0.8699
$$
$$
\frac {\partial L}{\partial w_{h2,o}} \approx 0.00738
$$
Nilai akhir dari ${w_{new}}$ adalah:
$$
w_{new} = (-0.8) - 0.2 \times 0.00738
$$
$$
w_{new} \approx -0.80147
$$
