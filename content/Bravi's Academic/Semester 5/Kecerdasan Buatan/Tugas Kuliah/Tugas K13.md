[[Bravi's Academic/Semester 5/Kecerdasan Buatan/Tugas Kuliah/index|Kecerdasan Buatan]] - K2 <br>Ghiffari Bravia Hisham (G6401231050)

### Soal

>Diberikan sebuah dataset berikut: [soil_suitability.csv](https://drive.google.com/file/d/1YD6ima_2GKuVieUxAt4rxN0FnoUyYwt_/view?usp=sharing)  
>Buat model decision tree dengan algoritme ID3 untuk kasus analisis kelayakan tanah untuk pertanian. Baca data yang sudah disediakan dan buat program decision tree. Perhatikan tipe data kategorik dan numerik.
### Kode Program
Berikut model decision tree dengan algoritme ID3 yang diimplementasikan secara manual menggunakan bahasa pemrograman Python:

```python
import numpy as np
import pandas as pd
from collections import Counter
import math
from graphviz import Digraph

# 1. Fungsi untuk mencari entropy
def entropy(y):
    counts = Counter(y)
    total = len(y)
    return -sum((count / total) * math.log2(count / total) for count in counts.values())

# 2. Fungsi Information Gain Kategorikal
def information_gain_categorical(X, y):
    parent_entropy = entropy(y)
    total = len(y)

    split_entropy = 0
    for value in set(X):
        subset = [y[i] for i in range(total) if X[i] == value]
        w = len(subset) / total
        split_entropy += w * entropy(subset)

    return parent_entropy - split_entropy, None


# 3. Fungsi Information Gain Numerik
def information_gain_numeric(X, y):
    data = pd.DataFrame({"X": X, "y": y}).sort_values("X")
    X_sorted = data["X"].values
    y_sorted = data["y"].values
    parent_entropy = entropy(y)

    best_gain = -1
    best_threshold = None

    for i in range(1, len(X_sorted)):
        if X_sorted[i] == X_sorted[i - 1]:
            continue

        threshold = (X_sorted[i] + X_sorted[i - 1]) / 2
        left_y = y_sorted[X_sorted <= threshold]
        right_y = y_sorted[X_sorted > threshold]

        if len(left_y) == 0 or len(right_y) == 0:
            continue

        w_left = len(left_y) / len(y)
        w_right = len(right_y) / len(y)

        split_entropy = w_left * entropy(left_y) + w_right * entropy(right_y)
        gain = parent_entropy - split_entropy

        if gain > best_gain:
            best_gain = gain
            best_threshold = threshold

    return best_gain, best_threshold

# 4. Fungsi untuk Memilih Fitur Terbaik
def choose_best_feature(df, target):
    y = df[target].values

    best_feature = None
    best_gain = -1
    best_threshold = None

    for feature in df.columns:
        if feature == target:
            continue

        X = df[feature].values

        if df[feature].dtype == "O":
            gain, threshold = information_gain_categorical(X, y)
        else:
            gain, threshold = information_gain_numeric(X, y)

        if gain > best_gain:
            best_gain = gain
            best_feature = feature
            best_threshold = threshold

    return best_feature, best_threshold

# 5. Fungsi untuk memmbangun pohon ID3
def build_tree(df, target):
    y = df[target]
    
    if len(set(y)) == 1:
        return {"label": y.iloc[0]}

    if len(df.columns) == 1:
        return {"label": Counter(y).most_common(1)[0][0]}

    best_feature, threshold = choose_best_feature(df, target)

    tree = {"feature": best_feature, "threshold": threshold}

    # Kategorik
    if threshold is None:
        tree["branches"] = {}
        for value in set(df[best_feature]):
            subset = df[df[best_feature] == value].drop(columns=[best_feature])
            tree["branches"][value] = build_tree(subset, target)
    # Numerik
    else:
        left_df = df[df[best_feature] <= threshold]
        right_df = df[df[best_feature] > threshold]
        tree["left"] = build_tree(left_df, target)
        tree["right"] = build_tree(right_df, target)

    return tree

# 6. Visualisasi dengan Graphviz
def visualize_tree(tree, dot=None, parent=None, edge_label=""):
    if dot is None:
        dot = Digraph()
        dot.attr("node", shape="box", style="rounded,filled", color="lightblue")

    if "label" in tree:
        node_id = str(id(tree))
        if tree['label'] == 0:
          dot.node(node_id, "Not Suitable", color="darksalmon")
        else:
          dot.node(node_id, "Suitable", color="lightgreen")
        if parent:
            dot.edge(parent, node_id, label=edge_label)
        return dot

    node_id = str(id(tree))

    if tree["threshold"] is None:
        label = f"{tree['feature']}?"
    else:
        label = f"{tree['feature']} ≤ {tree['threshold']:.3f}?"

    dot.node(node_id, label)

    if parent:
        dot.edge(parent, node_id, label=edge_label)

    if tree["threshold"] is None:
        for value, subtree in tree["branches"].items():
            visualize_tree(subtree, dot, node_id, edge_label=str(value))
    else:
        visualize_tree(tree["left"], dot, node_id, "true")
        visualize_tree(tree["right"], dot, node_id, "false")

    return dot


# 7. Fungsi untuk memprediksi data baru
def predict(tree, sample):
    if "label" in tree:
        if tree["label"] == 0:
          return "Not Suitable"
        else:
          return "Suitable"

    feature = tree["feature"]
    threshold = tree["threshold"]

    # Kategorik
    if threshold is None:
        value = sample[feature]
        if value in tree["branches"]:
            return predict(tree["branches"][value], sample)
        else:
            return None
    
    # Numerik
    else:
        if sample[feature] <= threshold:
            return predict(tree["left"], sample)
        else:
            return predict(tree["right"], sample)


# 8. Program utama
if __name__ == "__main__":
    df = pd.read_csv("/content/drive/MyDrive/Data/soil_suitability.csv")

    # Encoding data kategorik
    categorical_cols = df.select_dtypes(include=["object"]).columns

    label_maps = {}
    for col in categorical_cols:
        unique_vals = df[col].unique()
        mapping = {v: i for i, v in enumerate(unique_vals)}
        df[col] = df[col].map(mapping)
        label_maps[col] = mapping

    target = "Suitability"

    # Membuat pohon ID3
    tree = build_tree(df, target)

    # Visualisasi Pohon
    dot = visualize_tree(tree)
    dot.render("soil_tree", format="png", cleanup=True)
    print("\nVisualisasi pohon disimpan sebagai soil_tree.png")

    # Contoh Prediksi
    example = {
        'pH Level': 6.5,
        'Moisture Content (%)': 45,
        'Organic Matter (%)': 5.1,
        'Drainage Quality': 0.0,
        'Soil Texture': 0.0,
        'Suitability': 1
    }
    pred = predict(tree, example)
    print("\nPrediksi untuk sample:", pred)
```

Berikut hasil output yang diberikan oleh program:
```
Visualisasi pohon disimpan sebagai soil_tree.png 

Prediksi untuk sample: Suitable
```

Berikut visualisasi decision tree yang dibuat menggunakan library *graphviz*:

![[soil_tree.png]]

### Pembahasan

#### Pendahuluan
*Decision Tree* (Pohon Keputusan) adalah salah satu metode *supervised learning* yang memodelkan data dalam struktur tree. Setiap internal node pada tree merepresentasikan sebuah "tes" atau aturan pada suatu atribut / fitur pada data, dan setiap leaf node pada tree merepresentasikan label kelas atau keputusan akhir.

Salah satu algoritma yang digunakan untuk membangun *decision tree* adalah algoritma **ID3 (Iterative Dichotomiser 3)** yang dikembangkan oleh Ross Quinlan. Algoritma ini merupakan pendekatan algoritma *greedy* yang bekerja dengan memilih atribut terbaik yang dapat menjadi penentu keputusan untuk menentukan hasil akhir dari prediksi.

Untuk menentukan atribut terbaik dari data, algoritma ini menggunakan dua nilai penting yang dihitung dari data:
1. *Entropy*, ukuran ketidakteraturan dari suatu data. *Entropy* bernilai 0 jika semua data berada dalam satu kelas yang sama, dan bernilai 1 jika data terdistribusi secara merata
2. *Information Gain*, mengukur seberapa besar penuruan *Entropy* setelah data dibagi berdasarkan suatu atribut. Algoritma ID3 akan memilih atribut dengan nilai *Information Gain* tertinggi sebagai "tes" / aturan yang digunakan pada *decision tree*

Proses ini diulang secara rekursif hingga tidak ada lagi atribut yang bisa digunakan dalam membagi data / membuat keputusan.

#### Implementasi Algoritma

##### *Pre-Processing Data*
Sebelum *modelling* dilakukan, data csv yang diberikan harus diolah agar dapat digunakan. Proses *pre-processing* yang dilakukan untuk data adalah mengubah fitur-fitur kategorik yang awalnya merupakan teks menjadi angka. Selain itu, target dari *decision tree* juga ditentukan pada tahap ini.

```python
if __name__ == "__main__":
    df = pd.read_csv("/content/drive/MyDrive/Data/soil_suitability.csv")
    categorical_cols = df.select_dtypes(include=["object"]).columns

    label_maps = {}
    for col in categorical_cols:
        unique_vals = df[col].unique()
        mapping = {v: i for i, v in enumerate(unique_vals)}
        df[col] = df[col].map(mapping)
        label_maps[col] = mapping

    target = "Suitability"
```

##### Perhitungan *Entropy*
Agar *decision tree* dapat dibuat, *Entropy* dari data perlu dihitung menggunakan fungsi ${entropy(y)}$:

```python
def entropy(y):
    counts = Counter(y)
    total = len(y)
    return -sum((count / total) * math.log2(count / total) for count in counts.values())
```

Fungsi ini mencari frekuensi kemunculan setiap kelas dan melakukan perhitungan *Entropy* untuk data tersebut:

$$
Entropy = -\sum p_i \log_2(p_i)
$$

${p_i}$ pada formula adalah proporsi dari kelas ${i}$ yang dihitung dengan formula berikut:
$$
p_i = \frac {count_i} {total}
$$

##### Perhitungan *Information Gain* Atribut Kategorik
Perhitungan *Information Gain* untuk atribut kategorik dilakukan dengan menggunakan fungsi ${information\_gain]_categorical(X, y)}$:

```python
def information_gain_categorical(X, y):
    parent_entropy = entropy(y)
    total = len(y)

    split_entropy = 0
    for value in set(X):
        subset = [y[i] for i in range(total) if X[i] == value]
        w = len(subset) / total
        split_entropy += w * entropy(subset)

    return parent_entropy - split_entropy, None
```

Fungsi ini bekerja dengan menghitung *Entropy* total dari data (*parent entropy*) dan frekuensi total dari data. Kemudian, fungsi ini akan menghitung *weighted entropy* dari setiap nilai unik pada atribut ${X}$:
$$
weighted\_entropy(v) = \frac {|S_v|}{|S|} \times entropy(v) 
$$

Berikutnya, diperlukan perhitungan *split entropy* yang merupakan jumlah dari semua *weighted entropy* dari setiap nilai unik di atribut ${X}$
$$
split\_entropy = - \sum_{\forall v} weighted\_entropy(v)
$$

Nilai *information gain* yang didapat merupakan selisih antara *parent entropy* dengan *split entropy*:
$$
IG = entropy(y) - split\_entropy
$$
##### Perhitungan *Information Gain* Atribut Numerik
Perhitungan *Information Gain* untuk atribut kategorik dilakukan dengan menggunakan fungsi ${information\_gain\_numeric(X, y)}$:

```python
def information_gain_numeric(X, y):
    data = pd.DataFrame({"X": X, "y": y}).sort_values("X")
    X_sorted = data["X"].values
    y_sorted = data["y"].values
    parent_entropy = entropy(y)

    best_gain = -1
    best_threshold = None

    for i in range(1, len(X_sorted)):
        if X_sorted[i] == X_sorted[i - 1]:
            continue

        threshold = (X_sorted[i] + X_sorted[i - 1]) / 2
        left_y = y_sorted[X_sorted <= threshold]
        right_y = y_sorted[X_sorted > threshold]

        if len(left_y) == 0 or len(right_y) == 0:
            continue

        w_left = len(left_y) / len(y)
        w_right = len(right_y) / len(y)

        split_entropy = w_left * entropy(left_y) + w_right * entropy(right_y)
        gain = parent_entropy - split_entropy

        if gain > best_gain:
            best_gain = gain
            best_threshold = threshold

    return best_gain, best_threshold
```

Pertama, fungsi ini akan mengurutkan data berdasarkan nilai atribut ${X}$ terlebih dahulu. Kemudian, program akan menghitung *parent entropy* dari data dengan fungsi ${entropy(y)}$. Program kemudian akan melakukan iterasi semua data dan mengecek semua kemungkinan titik potong (*threshold*) terbaik yang ada.

Titik potong (*threshold*) adalah titik tengah antara dua nilai berurutan yang unik:
$$
threshold = \frac {X_i + X_{i-1}}{2}; \;\; X_i \neq X_{i-1}
$$

Lalu untuk setiap *threshold* yang ditemukan, program akan membagi data menjadi dua subset, yaitu *left* (${X_i \le threshold}$) dan *right* (${X_i \gt threshold}$). *Split entropy* kemudian dihitung menggunakan *weighted entropy* dari kedua subset beserta dengan *Information Gain* nya.

Jika *gain* terbaru memiliki nilai yang lebih besar dari *best gain*, maka nilai *Information Gain* akhir akan diupdate dengan nilai *gain* terbaru. Setelah iterasi, program akan mengembalikan nilai *Threshold* terbaik, yaitu dengan nilai *Information Gain* tertinggi 

##### Penentuan Atribut Terbaik
Penentuan atribut terbaik yang akan menjadi *rule* dalam *decision tree* ditentukan dengan fungsi ${choose\_best\_feature(df, target)}$:

```python
def choose_best_feature(df, target):
    y = df[target].values

    best_feature = None
    best_gain = -1
    best_threshold = None

    for feature in df.columns:
        if feature == target:
            continue

        X = df[feature].values

        if df[feature].dtype == "O":
            gain, threshold = information_gain_categorical(X, y)
        else:
            gain, threshold = information_gain_numeric(X, y)

        if gain > best_gain:
            best_gain = gain
            best_feature = feature
            best_threshold = threshold

    return best_feature, best_threshold
```

Fungsi ini akan memeriksa semua kolom fitur dalam data dan mencari nilai *information gain* tertinggi beserta *threshold* dari masing-masing kolom. Fitur dengan nilai *Information Gain* tertinggi akan dikembalikan dan menjadi *rule* untuk *decision tree*

##### Pemodelan *Decision Tree*
Pemodelan *decision tree* dilakukan menggunakan fungsi ${build\_tree(df, target)}$:
```python
def build_tree(df, target):
    y = df[target]
    
    if len(set(y)) == 1:
        return {"label": y.iloc[0]}

    if len(df.columns) == 1:
        return {"label": Counter(y).most_common(1)[0][0]}

    best_feature, threshold = choose_best_feature(df, target)

    tree = {"feature": best_feature, "threshold": threshold}

    # Kategorik
    if threshold is None:
        tree["branches"] = {}
        for value in set(df[best_feature]):
            subset = df[df[best_feature] == value].drop(columns=[best_feature])
            tree["branches"][value] = build_tree(subset, target)
    # Numerik
    else:
        left_df = df[df[best_feature] <= threshold]
        right_df = df[df[best_feature] > threshold]
        tree["left"] = build_tree(left_df, target)
        tree["right"] = build_tree(right_df, target)

    return tree
```

Fungsi ini akan mengembalikan *leaf node* jika semua data telah masuk dalam satu kelas yang sama atau ketika tidak ada lagi fitur yang tersisa untuk membagi data (kondisi dasar)

Jika kondisi dasar belum terpenuhi, program akan memanggil fungsi ${choose\_best\_feature}$ untuk menentukan atribut terbaik dan akan membuat *internal node* baru menggunakan *rule* / atribut tersebut. Child kiri dari node adalah kondisi ketika *rule* tidak terpenuhi dan child kanan ketika sebaliknya.

##### Fungsi Prediksi Data
Untuk melakukan prediksi dari suatu data baru atau sampel, program akan memanggil fungsi ${predict(tree, sample)}$:

```python
def predict(tree, sample):
    if "label" in tree:
        if tree["label"] == 0:
          return "Not Suitable"
        else:
          return "Suitable"

    feature = tree["feature"]
    threshold = tree["threshold"]

    # Kategorik
    if threshold is None:
        value = sample[feature]
        if value in tree["branches"]:
            return predict(tree["branches"][value], sample)
        else:
            return None
    
    # Numerik
    else:
        if sample[feature] <= threshold:
            return predict(tree["left"], sample)
        else:
            return predict(tree["right"], sample)
```

Fungsi ini akan menelusuri *decision tree* dari root dan akan bergerak ke bawah sesuai dengan atribut / fitur yang dimiliki oleh data baru / sampel tersebut

##### Visualisasi *Decision Tree*

Visualisasi dari *decision tree* dapat dibuat dengan memanggil fungsi ${visualize\_tree(tree, dot, parent, edge\_label)}$ yang diimplementasikan menggunakan library *graphviz*:

```python
def visualize_tree(tree, dot=None, parent=None, edge_label=""):
    if dot is None:
        dot = Digraph()
        dot.attr("node", shape="box", style="rounded,filled", color="lightblue")

    if "label" in tree:
        node_id = str(id(tree))
        if tree['label'] == 0:
          dot.node(node_id, "Not Suitable", color="darksalmon")
        else:
          dot.node(node_id, "Suitable", color="lightgreen")
        if parent:
            dot.edge(parent, node_id, label=edge_label)
        return dot

    node_id = str(id(tree))

    if tree["threshold"] is None:
        label = f"{tree['feature']}?"
    else:
        label = f"{tree['feature']} ≤ {tree['threshold']:.3f}?"

    dot.node(node_id, label)

    if parent:
        dot.edge(parent, node_id, label=edge_label)

    if tree["threshold"] is None:
        for value, subtree in tree["branches"].items():
            visualize_tree(subtree, dot, node_id, edge_label=str(value))
    else:
        visualize_tree(tree["left"], dot, node_id, "true")
        visualize_tree(tree["right"], dot, node_id, "false")

    return dot
```

