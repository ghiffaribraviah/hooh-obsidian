[[Bravi's Academic/Semester 5/Kecerdasan Buatan/Tugas Kuliah/index|Kecerdasan Buatan]] - K2<br>Ghiffari Bravia Hisham (G6401231050)

### Soal 1 - Pemahaman Konsep *Naive Bayes* (Perhitungan Manual)

>**Topik: Klasifikasi Risiko Serangan Hama Wereng pada Tanaman Padi**  
>Petani ingin memprediksi apakah minggu depan risiko serangan hama wereng akan tinggi atau rendah, berdasarkan tiga indikator lingkungan seperti pada Tabel 1

| Hari (H) | Suhu (S) | Kelembapan (K) | Curah Hujan (C) | Risiko Hama (R) |
| :------: | :------: | :------------: | :-------------: | :-------------: |
|    1     |  Panas   |     Tinggi     |     Rendah      |     Tinggi      |
|    2     |  Panas   |     Tinggi     |     Tinggi      |     Rendah      |
|    3     |  Normal  |     Tinggi     |     Rendah      |     Tinggi      |
|    4     |  Dingin  |     Normal     |     Tinggi      |     Rendah      |
|    5     |  Normal  |     Normal     |     Rendah      |     Tinggi      |
|    6     |  Dingin  |     Tinggi     |     Tinggi      |     Rendah      |
|    7     |  Panas   |     Normal     |     Rendah      |     Tinggi      |
|    8     |  Normal  |     Tinggi     |     Tinggi      |     Rendah      |
>1. Hitung probabilitas prior untuk setiap kelas:
$$
P(Tinggi), \;\;\;\; P(Rendah)
$$
>2. Hitung probabilitas bersyarat (*likelihood*) untuk setiap fitur dengan menggunakan Laplace Smoothing (${\alpha = 1}$). Contoh:
$$
P(Suhu = Panas|Tinggi), \;\;\;\; P(Kelembapan=Normal|Rendah)
$$
>3. Berdasarkan kondisi lingkungan baru berikut:
- Suhu = Normal
- Kelembapan  = Tinggi
- Curah Hujan = Rendah
>Hitung probabilitas posterior untuk setiap kelas dan tentukan hasil klasifikasinya:
$$
P(Tinggi|X), \;\;\;\; P(Rendah|X)
$$
>**Catatan:** Gunakan perhitungan manual langkah demi langkah. Tunjukkan semua proses mulai dari prior, likelihood, hingga posterior untuk membuktikan pemahaman konsep inferensi *Naive Bayes*

#### Jawaban Soal 1.1
Berdasarkan data yang diberikan, terdapat total 8 kejadian dengan detail sebagai berikut:
- Risiko Hama Tinggi: 4
- Risiko Hama Rendah: 4

Probabilitas prior untuk setiap kelas adalah:
$$
P(Tinggi) = \frac{4}{8} = 0.5
$$
$$
P(Rendah) = \frac 4 8 = 0.5
$$

#### Jawaban Soal 1.2
Diketahui informasi sebagai berikut dari soal:
- Total jumlah data (${N}$) = 8
- Jumlah kasus Risiko Hama Tinggi = 4
- Jumlah kasus Risiko Hama Rendah = 4
- ${\alpha = 1}$ (Laplace Smoothing)

Berikut adalah jumlah nilai unik untuk setiap fitur:
- Suhu (S) = 3 (Panas, Normal, Dingin)
- Kelembapan (K) = 2 (Tinggi, Normal)
- Curah Hujan (C) = 2 (Rendah, TInggi)

Rumus Laplace Smoothing yang digunakan adalah:
$$
P(X=x|Y=y) = \frac{n(X=x \cap Y=y) + \alpha}{n(Y=y) + \alpha \times nilai \; unik \; x}
$$

Berikut perhitungan Laplace Smoothing untuk masing-masing fitur:

1. Risiko Hama Tinggi:
	*   Untuk Fitur S (Suhu):
	    *   $P(S=Panas|Tinggi) = \frac{n(S=Panas \cap Tinggi) + 1}{n(Tinggi) + 1 \times 3} = \frac{2+1}{4+3} = \frac{3}{7}$
	    *   $P(S=Normal|Tinggi) = \frac{n(S=Normal \cap Tinggi) + 1}{n(Tinggi) + 1 \times 3} = \frac{2+1}{4+3} = \frac{3}{7}$
	    *   $P(S=Dingin|Tinggi) = \frac{n(S=Dingin \cap Tinggi) + 1}{n(Tinggi) + 1 \times 3} = \frac{0+1}{4+3} = \frac{1}{7}$

	*   Untuk Fitur K (Kelembapan):
	    *   $P(K=Tinggi|Tinggi) = \frac{n(K=Tinggi \cap Tinggi) + 1}{n(Tinggi) + 1 \times 2} = \frac{2+1}{4+2} = \frac{3}{6} = 0.5$
	    *   $P(K=Normal|Tinggi) = \frac{n(K=Normal \cap Tinggi) + 1}{n(Tinggi) + 1 \times 2} = \frac{2+1}{4+2} = \frac{3}{6} = 0.5$

	*   Untuk Fitur C (Curah Hujan):
	    *   $P(C=Rendah|Tinggi) = \frac{n(C=Rendah \cap Tinggi) + 1}{n(Tinggi) + 1 \times 2} = \frac{4+1}{4+2} = \frac{5}{6}$
	    *   $P(C=Tinggi|Tinggi) = \frac{n(C=Tinggi \cap Tinggi) + 1}{n(Tinggi) + 1 \times 2} = \frac{0+1}{4+2} = \frac{1}{6}$


2. Risiko Hama Rendah:
	*   Untuk Fitur S (Suhu):
	    *   $P(S=Panas|Rendah) = \frac{n(S=Panas \cap Rendah) + 1}{n(Rendah) + 1 \times 3} = \frac{1+1}{4+3} = \frac{2}{7}$
	    *   $P(S=Normal|Rendah) = \frac{n(S=Normal \cap Rendah) + 1}{n(Rendah) + 1 \times 3} = \frac{1+1}{4+3} = \frac{2}{7}$
	    *   $P(S=Dingin|Rendah) = \frac{n(S=Dingin \cap Rendah) + 1}{n(Rendah) + 1 \times 3} = \frac{2+1}{4+3} = \frac{3}{7}$

	*   Untuk Fitur K (Kelembapan):
	    *   $P(K=Tinggi|Rendah) = \frac{n(K=Tinggi \cap Rendah) + 1}{n(Rendah) + 1 \times 2} = \frac{3+1}{4+2} = \frac{4}{6} = \frac{2}{3}$
	    *   $P(K=Normal|Rendah) = \frac{n(K=Normal \cap Rendah) + 1}{n(Rendah) + 1 \times 2} = \frac{1+1}{4+2} = \frac{2}{6} = \frac{1}{3}$

	*   Untuk Fitur C (Curah Hujan):
	    *   $P(C=Rendah|Rendah) = \frac{n(C=Rendah \cap Rendah) + 1}{n(Rendah) + 1 \times 2} = \frac{0+1}{4+2} = \frac{1}{6}$
	    *   $P(C=Tinggi|Rendah) = \frac{n(C=Tinggi \cap Rendah) + 1}{n(Rendah) + 1 \times 2} = \frac{4+1}{4+2} = \frac{5}{6}$

#### Jawaban Soal 1.3
Berikut informasi yang diperlukan untuk mencari probabilitas posterior dari soal 1.3:
- ${P(Tinggi) = 0.5}$
- ${P(Rendah) = 0.5}$
- ${P(S = Normal|Tinggi) = \frac 3 7}$
- ${P(K = Tinggi|Tinggi) = \frac 3 6}$
- ${P(C = Rendah|Tinggi) = \frac 5 6}$
- ${P(S = Normal|Rendah) = \frac 2 7}$
- ${P(K = Tinggi|Rendah) = \frac 4 6}$
- ${P(C = Rendah|Rendah) = \frac 1 6}$

Berikut perhitungan probabilitas Posterior untuk Risiko Hama Tinggi:
$$
P(X|Tinggi) = P(S=Normal|Tinggi) \times P(K = Tinggi|Tinggi) \times P(C = Rendah|Tinggi) \times P(Tinggi)
$$
$$
P(X|Tinggi) = \frac 3 7 \times \frac 3 6 \times \frac 5 6 \times 0.5
$$
$$
P(X|Tinggi) = 0.089285
$$

Berikut perhitungan probabilitas Posterior untuk Risiko Hama Rendah:
$$
P(X|Rendah) = P(S = Normal|Rendah) \times P(K = Tinggi|Rendah) \times P(C = Rendah|Rendah) \times P(Rendah)
$$
$$
P(X|Rendah) = \frac 2 7 \times \frac 4 6 \times \frac 1 6 \times 0.5
$$
$$
P(X|Rendah) = 0.015873
$$

Berdasarkan perbandingan probabilitas Posterior. model Naive Bayes akan mengklasifikasikan kondisi lingkungan baru yang diberikan pada soal 1.3 sebagai Risiko Hama Tinggi

### Soal 2 - Implementasi Program *Naive Bayes* (Inferensi Otomatis)

>**Topik: Prediksi Potensi Zona Penangkapan Ikan di Perairan Indonesia**  
>Peneliti kelautan mengumpulkan data dari 20 titik pengamatan laut di WPP 714. Setiap titik memiliki empat atribut lingkungan seperti pada Tabel 2. Tujuannya adalah memprediksi apakah suatu area termasuk dalam kategori Potensi Ikan Tinggi atau Rendah

| No  | SST (°C) | Chl (mg/m³) | Angin (m/s) | Kedalaman (m) | Potensi |
| :-: | :------: | :---------: | :---------: | :-----------: | :-----: |
|  1  |   25.8   |    1.20     |     5.8     |      80       | Tinggi  |
|  2  |   26.0   |    1.10     |     5.5     |      90       | Tinggi  |
|  3  |   27.5   |    0.60     |     4.0     |      120      | Rendah  |
|  4  |   26.2   |    1.00     |     5.9     |      85       | Tinggi  |
|  5  |   28.5   |    0.45     |     3.8     |      130      | Rendah  |
|  6  |   25.5   |    1.25     |     6.0     |      70       | Tinggi  |
|  7  |   29.0   |    0.40     |     3.2     |      140      | Rendah  |
|  8  |   26.1   |    0.95     |     5.7     |      95       | Tinggi  |
|  9  |   28.2   |    0.50     |     3.9     |      125      | Rendah  |
| 10  |   25.9   |    1.10     |     5.8     |      80       | Tinggi  |
| 11  |   27.8   |    0.55     |     3.7     |      135      | Rendah  |
| 12  |   26.0   |    1.15     |     6.1     |      85       | Tinggi  |
| 13  |   28.7   |    0.42     |     3.6     |      140      | Rendah  |
| 14  |   25.6   |    1.18     |     5.9     |      75       | Tinggi  |
| 15  |   27.9   |    0.48     |     3.5     |      130      | Rendah  |
| 16  |   26.4   |    1.05     |     5.6     |      90       | Tinggi  |
| 17  |   28.0   |    0.52     |     3.8     |      125      | Rendah  |
| 18  |   25.7   |    1.22     |     6.0     |      85       | Tinggi  |
| 19  |   27.6   |    0.58     |     3.9     |      130      | Rendah  |
| 20  |   25.5   |    1.20     |     5.7     |      75       | Tinggi  |
>1. Gunakan bahasa pemrograman Python dan model Gaussian Naive Bayes untuk melakukan klasifikasi Potensi Ikan (Tinggi/Rendah)

>2. Pisahkan data menjadi:
- 70% untuk training set
- 30% untuk testing set
>Gunakan fungsi ${train\_test\_split()}$ dengan ${random\_state}$ yang tetap agar hasil reprodusibel

>3. Evaluasi performa model menggunakan:
- Confusion Matrix
- Accuracy, Precision, Recall, dan F1-score

>4. Lakukan inferensi probabilistik menggunakan fungsi ${predict\_proba()}$ untuk tiga titik pengamatan baru berikut:

| SST  | Chl  | Angin | Kedalaman |
| ---- | ---- | ----- | --------- |
| 26.0 | 1.05 | 5.8   | 85        |
| 28.0 | 0.48 | 3.5   | 130       |
| 25.7 | 1.20 | 6.0   | 80        |
>Tampilkan hasil inferensi dalam bentuk tabel:
$$
Titik \;|\; P(Tinggi) \;|\; P(Rendah) \;|\; Kelas \; Prediksi
$$
>5. Tambahkan satu skenario tambahan dengan Laplace Smoothing untuk mengatasi fitur atau nilai yang tidak muncul dalam data pelatihan. Jelaskan efek Laplace Smoothing terhadap hasil inferensi

>**Catatan:**
- Visualisasi hasil model dan interpretasi hasil inferensi sangat dianjurkan
- Jelaskan secara singkat hubungan antara kondisi lingkungan laut (SST, klorofil, kecepatan angin, kedalaman) dan peluang potensi penangkapan ikan

#### Jawaban Soal 2.1
Untuk mengimplementasikan program *Naive Bayes* ke dalam bahasa pemrograman Python, pertama perlu mengimport semua library yang diperlukan
```python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import confusion_matrix, accuracy_score, precision_score, recall_score, f1_score
```

Kemudian, data dimasukkan secara eksplisit ke dalam variabel di dalam program
```python
data = {
'SST': [25.8, 26.0, 27.5, 26.2, 28.5, 25.5, 29.0, 26.1, 28.2, 25.9,
27.8, 26.0, 28.7, 25.6, 27.9, 26.4, 28.0, 25.7, 27.6, 25.5],
'Chl': [1.20, 1.10, 0.60, 1.00, 0.45, 1.25, 0.40, 0.95, 0.50, 1.10,
0.55, 1.15, 0.42, 1.18, 0.48, 1.05, 0.52, 1.22, 0.58, 1.20],
'Angin': [5.8, 5.5, 4.0, 5.9, 3.8, 6.0, 3.2, 5.7, 3.9, 5.8,
3.7, 6.1, 3.6, 5.9, 3.5, 5.6, 3.8, 6.0, 3.9, 5.7],
'Kedalaman': [80, 90, 120, 85, 130, 70, 140, 95, 125, 80,
135, 85, 140, 75, 130, 90, 125, 85, 130, 75],
'Potensi': ['Tinggi', 'Tinggi', 'Rendah', 'Tinggi', 'Rendah', 'Tinggi', 'Rendah', 'Tinggi', 'Rendah', 'Tinggi',
'Rendah', 'Tinggi', 'Rendah', 'Tinggi', 'Rendah', 'Tinggi', 'Rendah', 'Tinggi', 'Rendah', 'Tinggi']
}
```

Data kemudian diubah menjadi dataframe dan dilakukan labelling agar dapat digunakan dalam *model training*
```python
df = pd.DataFrame(data)
display(df.head())

X = df[['SST', 'Chl', 'Angin', 'Kedalaman']]
y = df['Potensi']
```

Jenis model yang digunakan dalam program adalah ${GaussianNB()}$ yang merupakan bagian dari library ${sklearn.naive\_bayes}$
```python
model = GaussianNB()
model.fit(X_train, y_train)
```

#### Jawaban Soal 2.2
Berikut merupakan cara melakukan data splitting pada dataframe menggunakan fungsi ${train\_test\_split()}$ 
```python
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)
```

#### Jawaban Soal 2.3
Evaluasi model dapat dilakukan dengan menggunakan fungsi-fungsi yang terdapat pada library ${sklearn.metrics}$
```python
y_pred = model.predict(X_test)

cm = confusion_matrix(y_test, y_pred)
acc = accuracy_score(y_test, y_pred)
prec = precision_score(y_test, y_pred, pos_label='Tinggi')
rec = recall_score(y_test, y_pred, pos_label='Tinggi')
f1 = f1_score(y_test, y_pred, pos_label='Tinggi')
```

Berikut merupakan output dari setiap evaluasi model yang ada
```python
print("Confusion Matrix:\n", cm)
print(f"\nAccuracy: {acc:.3f}")
print(f"Precision: {prec:.3f}")
print(f"Recall: {rec:.3f}")
print(f"F1-score: {f1:.3f}")
```

```
Confusion Matrix: 
[[1 0] 
[0 5]] 

Accuracy: 1.000 
Precision: 1.000 
Recall: 1.000 
F1-score: 1.000
```

Berikut merupakan interpretasi dari evaluasi model yang ada:
- *Accuracy* yang tinggi menandakan bahwa model dapat mengklasifikasikan kebanyakan data dengan benar
- *Precision* yang tinggi menandakan bahwa semua prediksi positif yang dibuat oleh model benar-benar bernilai positif (*false positive* yang kecil)
- *Recall* yang tinggi menandakan bahwa model dapat menemukan banyak kasus positif yang ada dari semua data (*false negative* yang kecil)
- *F1-Score* yang tinggi menandakan bahwa model memiliki keseimbangan yang baik antara *Precision* dan *Recall*

#### Jawaban Soal 2.4
Berikut merupakan program untuk melakukan inferensi probabilistik dengan fungsi ${predict\_proba()}$ sekaligus dengan outputnya
```python
X_new = pd.DataFrame({
'SST': [26.0, 28.0, 25.7],
'Chl': [1.05, 0.48, 1.20],
'Angin': [5.8, 3.5, 6.0],
'Kedalaman': [85, 130, 80]
})

prob = model.predict_proba(X_new)
pred = model.predict(X_new)

result = pd.DataFrame({
'Titik': ['1', '2', '3'],
'P(Tinggi)': prob[:, list(model.classes_).index('Tinggi')],
'P(Rendah)': prob[:, list(model.classes_).index('Rendah')],
'Kelas Prediksi': pred
})

print("\nHasil inferensi probabilistik:")
display(result)
```

![[09-TK-01-Hasil Inferensi Probabilistik.png]]

Dari hasil inferensi probabilistik, dapat disimpulkan bahwa titik 1 dan 3 sangat mungkin berada di kategori Potensi Ikan Tinggi dan titik 2 berada di kategori Potensi Ikan Rendah
#### Jawaban Soal 2.5
Berikut merupakan program untuk skenario dengan Laplace Smoothing sekaligus dengan outputnya
```python
model_smooth = GaussianNB(var_smoothing=1e-3)
model_smooth.fit(X_train, y_train)

prob_smooth = model_smooth.predict_proba(X_new)
pred_smooth = model_smooth.predict(X_new)

result_smooth = pd.DataFrame({
'Titik': ['1', '2', '3'],
'P(Tinggi)': prob_smooth[:, list(model_smooth.classes_).index('Tinggi')],
'P(Rendah)': prob_smooth[:, list(model_smooth.classes_).index('Rendah')],
'Kelas Prediksi': pred_smooth
})

print("\nHasil inferensi probabilistik (dengan Laplace smoothing / var_smoothing=1e-3):")
display(result_smooth)
```
![[09-TK-02-Inferensi Probabilistik dengan Laplace Smoothing.png]]

Hasil dengan laplace smoothing memiliki kesamaan dengan hasil inferensi probabilistik biasa pada soal 2.4. Dari output, dapat disimpulkan bahwa titik 1 dan 3 sangat mungkin berada di kategori Potensi Ikan Tinggi dan titik 2 berada di kategori Potensi Ikan Rendah