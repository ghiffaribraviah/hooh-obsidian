[[Bravi's Academic/Semester 5/Analisis Algoritme/Responsi/index|Analisis Algoritme]] - R2 <br>Ghiffari Bravia Hisham (G6401231050)

### Soal 1

>Buatlah penelusuran dengan **Prim** dan **Kruskal** untuk graf berikut:
![[Pasted image 20251125181202.png]]
>Lalu gambarkan hasil graph dan hitung berapa total cost masing-masing algoritma!

#### Penelusuran Algoritma **Prim**
Algoritma **Prim** bekerja dengan cara memilih memilih edge terkecil yang menghubungkan antara vertex yang telah dipilih dengan vertex yang belum dipilih pada setiap iterasi. 

Berikut penelusuran graph pada soal menggunakan algoritma **Prim** (Asumsikan dimulai dari vertex A):

##### Iterasi 1

![[Pasted image 20251125182923.png]]

| Vertex | ${MST_i}$ | ${d_i}$ | ${p_v}$ |
| :----: | :-------: | :-----: | :-----: |
| **A**  |     T     |    0    |    -    |
|   B    |           |   *2*   |   *A*   |
|   C    |           |   *4*   |   *A*   |
|   D    |           |         |         |
|   E    |           |         |         |
|   F    |           |         |         |
|   G    |           |   *7*   |   *A*   |
|   H    |           |         |         |
|   I    |           |         |         |
Pilih B dengan ${d_i}$ terkecil dari A

##### Iterasi 2

![[Pasted image 20251125183315.png]]

| Vertex | ${MST_i}$ | ${d_i}$ | ${p_v}$ |
| :----: | :-------: | :-----: | :-----: |
| **A**  |     T     |    0    |    -    |
| **B**  |     T     |    2    |    A    |
|   C    |           |    4    |    A    |
|   D    |           |         |         |
|   E    |           |   *6*   |   *B*   |
|   F    |           |   *4*   |   *B*   |
|   G    |           |    7    |    A    |
|   H    |           |         |         |
|   I    |           |         |         |
Pilih C dengan ${d_i}$ terkecil dari A

##### Iterasi 3

![[Pasted image 20251125184446.png]]

| Vertex | ${MST_i}$ | ${d_i}$ | ${p_v}$ |
| :----: | :-------: | :-----: | :-----: |
| **A**  |     T     |    0    |    -    |
| **B**  |     T     |    2    |    A    |
| **C**  |     T     |    4    |    A    |
|   D    |           |   *5*   |   *C*   |
|   E    |           |    6    |    B    |
|   F    |           |    4    |    B    |
|   G    |           |    7    |    A    |
|   H    |           |         |         |
|   I    |           |         |         |
Pilih F dengan ${d_i}$ terkecil dari B 

##### Iterasi 4

![[Pasted image 20251125184820.png]]

| Vertex | ${MST_i}$ | ${d_i}$ | ${p_v}$ |
| :----: | :-------: | :-----: | :-----: |
| **A**  |     T     |    0    |    -    |
| **B**  |     T     |    2    |    A    |
| **C**  |     T     |    4    |    A    |
|   D    |           |    5    |    C    |
|   E    |           |   *3*   |   *F*   |
| **F**  |     T     |    4    |    B    |
|   G    |           |    7    |    A    |
|   H    |           |   *5*   |   *F*   |
|   I    |           |         |         |
Pilih E dengan ${d_i}$ terkecil dari F

##### Iterasi 5

![[Pasted image 20251125185034.png]]

| Vertex | ${MST_i}$ | ${d_i}$ | ${p_v}$ |
| :----: | :-------: | :-----: | :-----: |
| **A**  |     T     |    0    |    -    |
| **B**  |     T     |    2    |    A    |
| **C**  |     T     |    4    |    A    |
|   D    |           |   *2*   |   *E*   |
| **E**  |     T     |    3    |    F    |
| **F**  |     T     |    4    |    B    |
|   G    |           |    7    |    A    |
|   H    |           |    5    |    F    |
|   I    |           |   *3*   |   *E*   |
Pilih D dengan ${d_i}$ terkecil dari E

##### Iterasi 6

![[Pasted image 20251125185137.png]]

| Vertex | ${MST_i}$ | ${d_i}$ | ${p_v}$ |
| :----: | :-------: | :-----: | :-----: |
| **A**  |     T     |    0    |    -    |
| **B**  |     T     |    2    |    A    |
| **C**  |     T     |    4    |    A    |
| **D**  |     T     |    2    |    E    |
| **E**  |     T     |    3    |    F    |
| **F**  |     T     |    4    |    B    |
|   G    |           |    7    |    A    |
|   H    |           |    5    |    F    |
|   I    |           |    3    |    E    |
Pilih I dengan ${d_i}$ terkecil dari E

##### Iterasi 7

![[Pasted image 20251125185312.png]]

| Vertex | ${MST_i}$ | ${d_i}$ | ${p_v}$ |
| :----: | :-------: | :-----: | :-----: |
| **A**  |     T     |    0    |    -    |
| **B**  |     T     |    2    |    A    |
| **C**  |     T     |    4    |    A    |
| **D**  |     T     |    2    |    E    |
| **E**  |     T     |    3    |    F    |
| **F**  |     T     |    4    |    B    |
|   G    |           |    7    |    A    |
|   H    |           |   *1*   |   *I*   |
| **I**  |     T     |    3    |    E    |
Pilih H dengan ${d_i}$ terkecil dari I

##### Iterasi 8

![[Pasted image 20251125185440.png]]

| Vertex | ${MST_i}$ | ${d_i}$ | ${p_v}$ |
| :----: | :-------: | :-----: | :-----: |
| **A**  |     T     |    0    |    -    |
| **B**  |     T     |    2    |    A    |
| **C**  |     T     |    4    |    A    |
| **D**  |     T     |    2    |    E    |
| **E**  |     T     |    3    |    F    |
| **F**  |     T     |    4    |    B    |
|   G    |           |    7    |    A    |
| **H**  |     T     |    1    |    I    |
| **I**  |     T     |    3    |    E    |
Pilih G dengan ${d_i}$ terkecil dari A

##### Hasil Akhir

![[Pasted image 20251125185637.png]]

| Vertex | ${MST_i}$ | ${d_i}$ | ${p_v}$ |
| :----: | :-------: | :-----: | :-----: |
| **A**  |     T     |    0    |    -    |
| **B**  |     T     |    2    |    A    |
| **C**  |     T     |    4    |    A    |
| **D**  |     T     |    2    |    E    |
| **E**  |     T     |    3    |    F    |
| **F**  |     T     |    4    |    B    |
|   G    |           |    7    |    A    |
| **H**  |     T     |    1    |    I    |
| **I**  |     T     |    3    |    E    |
Program selesai karena semua vertex telah dipilih. MST yang terbentuk sesuai pada gambar di atas dengan total cost yaitu 26.

#### Penelusuran Algoritma **Kruskal**
Algoritma **Kruskal** bekerja dengan cara memilih setiap edge yang terdapat dalam graph, lalu mengurutkannya mulai dari yang terkecil dan algoritma akan memilih edge terkecil pada setiap iterasi. Edge yang dipilih tidak boleh membentuk sebuah cycle dengan edge-edge sebelumnya yang telah dipilih.

Berikut penelusuran graph pada soal menggunakan algoritma **Kruskal** (Edge telah diurut dari yang terkecil):

##### Iterasi 1

![[Pasted image 20251125190805.png]]

|   Edge   | ${d_v}$ | Taken | Cycle? |
| :------: | :-----: | :---: | :----: |
| *(H, I)* |   *1*   |  *T*  |        |
|  (A, B)  |    2    |       |        |
|  (D, E)  |    2    |       |        |
|  (E, F)  |    3    |       |        |
|  (E, I)  |    3    |       |        |
|  (A, C)  |    4    |       |        |
|  (B, C)  |    4    |       |        |
|  (B, F)  |    4    |       |        |
|  (C, D)  |    5    |       |        |
|  (F, H)  |    5    |       |        |
|  (B, E)  |    6    |       |        |
|  (E, H)  |    6    |       |        |
|  (A, G)  |    7    |       |        |
|  (F, G)  |    8    |       |        |
|  (G, H)  |    9    |       |        |
Pilih (H, I) dengan ${d_v}$ terkecil

##### Iterasi 2

![[Pasted image 20251125190954.png]]

|    Edge    | ${d_v}$ | Taken | Cycle? |
| :--------: | :-----: | :---: | :----: |
| **(H, I)** |    1    |   T   |        |
|   *(A, B)*   |    *2*    |   *T*   |        |
|   (D, E)   |    2    |       |        |
|   (E, F)   |    3    |       |        |
|   (E, I)   |    3    |       |        |
|   (A, C)   |    4    |       |        |
|   (B, C)   |    4    |       |        |
|   (B, F)   |    4    |       |        |
|   (C, D)   |    5    |       |        |
|   (F, H)   |    5    |       |        |
|   (B, E)   |    6    |       |        |
|   (E, H)   |    6    |       |        |
|   (A, G)   |    7    |       |        |
|   (F, G)   |    8    |       |        |
|   (G, H)   |    9    |       |        |
Pilih (A, B) dengan ${d_v}$ terkecil

##### Iterasi 3

![[Pasted image 20251125191057.png]]

|    Edge    | ${d_v}$ | Taken | Cycle? |
| :--------: | :-----: | :---: | :----: |
| **(H, I)** |    1    |   T   |        |
| **(A, B)** |    2    |   T   |        |
|   *(D, E)*   |    *2*    |   *T*   |        |
|   (E, F)   |    3    |       |        |
|   (E, I)   |    3    |       |        |
|   (A, C)   |    4    |       |        |
|   (B, C)   |    4    |       |        |
|   (B, F)   |    4    |       |        |
|   (C, D)   |    5    |       |        |
|   (F, H)   |    5    |       |        |
|   (B, E)   |    6    |       |        |
|   (E, H)   |    6    |       |        |
|   (A, G)   |    7    |       |        |
|   (F, G)   |    8    |       |        |
|   (G, H)   |    9    |       |        |
Pilih (D, E) dengan ${d_v}$ terkecil

##### Iterasi 4

![[Pasted image 20251125191216.png]]

|    Edge    | ${d_v}$ | Taken | Cycle? |
| :--------: | :-----: | :---: | :----: |
| **(H, I)** |    1    |   T   |        |
| **(A, B)** |    2    |   T   |        |
| **(D, E)** |    2    |   T   |        |
|  *(E, F)*  |   *3*   |  *T*  |        |
|   (E, I)   |    3    |       |        |
|   (A, C)   |    4    |       |        |
|   (B, C)   |    4    |       |        |
|   (B, F)   |    4    |       |        |
|   (C, D)   |    5    |       |        |
|   (F, H)   |    5    |       |        |
|   (B, E)   |    6    |       |        |
|   (E, H)   |    6    |       |        |
|   (A, G)   |    7    |       |        |
|   (F, G)   |    8    |       |        |
|   (G, H)   |    9    |       |        |
Pilih (E, F) dengan ${d_v}$ terkecil

##### Iterasi 5

![[Pasted image 20251125191216.png]]

|    Edge    | ${d_v}$ | Taken | Cycle? |
| :--------: | :-----: | :---: | :----: |
| **(H, I)** |    1    |   T   |        |
| **(A, B)** |    2    |   T   |        |
| **(D, E)** |    2    |   T   |        |
| **(E, F)** |    3    |   T   |        |
|  *(E, I)*  |   *3*   |  *T*  |        |
|   (A, C)   |    4    |       |        |
|   (B, C)   |    4    |       |        |
|   (B, F)   |    4    |       |        |
|   (C, D)   |    5    |       |        |
|   (F, H)   |    5    |       |        |
|   (B, E)   |    6    |       |        |
|   (E, H)   |    6    |       |        |
|   (A, G)   |    7    |       |        |
|   (F, G)   |    8    |       |        |
|   (G, H)   |    9    |       |        |
Pilih (E, I) dengan ${d_v}$ terkecil

##### Iterasi 6

![[Pasted image 20251125191758.png]]

|    Edge    | ${d_v}$ | Taken | Cycle? |
| :--------: | :-----: | :---: | :----: |
| **(H, I)** |    1    |   T   |        |
| **(A, B)** |    2    |   T   |        |
| **(D, E)** |    2    |   T   |        |
| **(E, F)** |    3    |   T   |        |
| **(E, I)** |    3    |   T   |        |
|   *(A, C)*   |    *4*    |   *T*   |        |
|   (B, C)   |    4    |       |        |
|   (B, F)   |    4    |       |        |
|   (C, D)   |    5    |       |        |
|   (F, H)   |    5    |       |        |
|   (B, E)   |    6    |       |        |
|   (E, H)   |    6    |       |        |
|   (A, G)   |    7    |       |        |
|   (F, G)   |    8    |       |        |
|   (G, H)   |    9    |       |        |
Pilih (A, C) dengan ${d_v}$ terkecil

##### Iterasi 7

![[Pasted image 20251125192028.png]]

|    Edge    | ${d_v}$ | Taken | Cycle? |
| :--------: | :-----: | :---: | :----: |
| **(H, I)** |    1    |   T   |        |
| **(A, B)** |    2    |   T   |        |
| **(D, E)** |    2    |   T   |        |
| **(E, F)** |    3    |   T   |        |
| **(E, I)** |    3    |   T   |        |
| **(A, C)** |    4    |   T   |        |
|  *(B, C)*  |   *4*   |  *-*  |  *T*   |
|  *(B, F)*  |   *4*   |  *T*  |        |
|   (C, D)   |    5    |       |        |
|   (F, H)   |    5    |       |        |
|   (B, E)   |    6    |       |        |
|   (E, H)   |    6    |       |        |
|   (A, G)   |    7    |       |        |
|   (F, G)   |    8    |       |        |
|   (G, H)   |    9    |       |        |
- (B, C) tidak dipilih karena akan membuat *cycle* 
- Pilih (B, F) dengan ${d_v}$ terkecil

##### Iterasi 8

![[Pasted image 20251125192310.png]]

|    Edge    | ${d_v}$ | Taken | Cycle? |
| :--------: | :-----: | :---: | :----: |
| **(H, I)** |    1    |   T   |        |
| **(A, B)** |    2    |   T   |        |
| **(D, E)** |    2    |   T   |        |
| **(E, F)** |    3    |   T   |        |
| **(E, I)** |    3    |   T   |        |
| **(A, C)** |    4    |   T   |        |
|   (B, C)   |    4    |   -   |   T    |
| **(B, F)** |    4    |   T   |        |
|  *(C, D)*  |   *5*   |  *-*  |  *T*   |
|  *(F, H)*  |   *5*   |  *-*  |  *T*   |
|  *(B, E)*  |   *6*   |  *-*  |  *T*   |
|  *(E, H)*  |   *6*   |  *-*  |  *T*   |
|  *(A, G)*  |   *7*   |  *T*  |        |
|   (F, G)   |    8    |       |        |
|   (G, H)   |    9    |       |        |
- (C, D), (F, H), (B, E), dan (E, H) tidak dipilih karena akan membuat *cycle* 
- Pilih (A, G) dengan ${d_v}$ terkecil

##### Hasil Akhir

![[Pasted image 20251125192748.png]]

|    Edge    | ${d_v}$ | Taken | Cycle? |
| :--------: | :-----: | :---: | :----: |
| **(H, I)** |    1    |   T   |        |
| **(A, B)** |    2    |   T   |        |
| **(D, E)** |    2    |   T   |        |
| **(E, F)** |    3    |   T   |        |
| **(E, I)** |    3    |   T   |        |
| **(A, C)** |    4    |   T   |        |
|   (B, C)   |    4    |   -   |   T    |
| **(B, F)** |    4    |   T   |        |
|   (C, D)   |    5    |   -   |   T    |
|   (F, H)   |    5    |   -   |   T    |
|   (B, E)   |    6    |   -   |   T    |
|   (E, H)   |    6    |   -   |   T    |
| **(A, G)** |    7    |   T   |        |
|   (F, G)   |    8    |   -   |   -    |
|   (G, H)   |    9    |   -   |   -    |
Program selesai karena semua vertex telah dipilih. MST yang terbentuk sesuai pada gambar di atas dengan total cost yaitu 26.

### Soal 2

>Berdasarkan sebelumnya, buatlah ke dalam kode program. Bebas menggunakan bahasa pemrograman apa saja. (Tempelkan kode program dan output yang sudah dibuat ke jawaban LKP)

#### Program Algoritma **Prim**
Untuk mengimplementasikan algoritma **Prim**, graph yang terdapat pada soal perlu diimplementasikan dalam program sebagai *adjacency matrix*, yaitu ${graph[V][V]}$ pada program dengan ${V}$ adalah jumlah vertex pada graph.

Algoritma **Prim** yang diimplementasikan pada program sebagai ${primMST(V, \; graph[V][V])}$ memiliki langkah-langkah sebagai berikut.
1. Inisialisasi ${P[V]}$, ${MST[V]}$, dan ${D[V]}$
	- ${P[i]}$ menunjukkan parent dari vertex ${i}$
	- ${MST[i]}$ menunjukkan apakah vertex ${i}$ sudah berada di MST atau belum
	- ${D[i]}$ (key) menunjukkan nilai edge terkecil dari suatu vertex ke vertex ${i}$
2. Set nilai ${D[i] = \infty}$ atau ${INT\_MAX}$ (nilai awal setiap key)
3. Set nilai ${MST[i] = false}$ (Setiap vertex belum dimasukkan dalam MST)
4. Inisialisasi nilai ${D[0] = 0}$ dan ${P[0] = -1}$ (Node awal / root)
5. Lakukan iterasi sebanyak ${V - 1}$ kali (iterator ${i}$)
	- *Cari vertex dengan nilai key minimum*, yaitu vertex ${u}$
	- Masukkan vertex ${u}$ ke MST, ${MST[u] = true}$
	- Lakukan iterasi sebanyak ${V}$ kali (iterator ${v}$)
		- Cek jika ${0 \lt graph[u][v] \lt D[v]}$ dan ${MST[v] == false}$ (Nilai edge ${u-v}$ lebih kecil dari key saat ini dan vertex ${v}$ belum berada di MST)
		- Apabila benar, update ${D[v] = graph[u][v]}$ (Ada jalur lain menuju vertex ${v}$ yang lebih kecil)
		- Update juga parentnya, ${P[v] = u}$ (vertex ${v}$ dapat dikunjungi dari vertex ${u}$)
6. *Cetak MST yang telah dibuat*

Untuk mencari nilai key minimum dari suatu vertex, algoritma utama dapat memanggil fungsi tambahan, yaitu ${minKey(V, \; D[V], \; MST[V])}$ dengan algoritma sebagai berikut:
1. Inisialisasi nilai ${min = \infty}$ atau ${INT\_MAX}$, nilai key yang disimpan
2. Inisalisasi ${min\_index}$, yaitu index suatu vertex dengan nilai key terkecil
3. Lakukan iterasi sebanyak ${V}$ kali (iterator ${v}$)
	- Cek jika ${MST[v] == false}$ dan ${D[v] \lt min}$ (Vertex ${v}$ belum berada di MST dan memiliki nilai key yang lebih kecil)
	- Apabila benar, update ${min = D[v]}$ dan ${min\_index = v}$ (Vertex dengan key terkecil berubah menjadi vertex ${v}$)
4. Return nilai ${min\_index}$ (vertex dengan nilai key terkecil)

Untuk mencetak MST yang telah dibuat, algoritma utama dapat memanggil fungsi tambahan, yaitu ${printMST(V, \; P[V],\; graph[V][V])}$ dengan algoritma sebagai berikut:
1. Lakukan iterasi sebanyak ${V}$ kali (iterator ${i}$)
	- Cetak "${P[i]}$ - ${i}$", yaitu edge yang dicetak (misalnya "A - B")
	- Cetak nilai edgenya, yaitu ${graph[P[i]][i]}$

Berikut implementasi dari algoritma **Prim** dalam bahasa pemrograman C:
```c
#include <limits.h>
#include <stdio.h>

// Fungsi untuk mencari vertex dengan nilai key minimum
int minKey(int V, int D[V], int MST[V])
{
    int min = INT_MAX; // Inisialisasi nilai minimum
    int min_index = -1; // Inisialisasi indeks minimum

    // Cari vertex dengan nilai key minimum
    for (int v = 0; v < V; v++) {
        if (MST[v] == 0 && D[v] < min) {
            min = D[v]; 
            min_index = v;
        }
    }

    return min_index;
}

// Fungsi untuk mencetak MST yang dibangun
void printMST(int V, int P[V], int graph[V][V])
{
    printf("Edge \tWeight\n");
    for (int i = 1; i < V; i++){
        printf("%d - %d \t%d \n", P[i], i, graph[P[i]][i]);
    }
}

// Fungsi utama untuk membangun dan mencetak MST menggunakan Algoritma Prim
void primMST(int V, int graph[V][V])
{
    int P[V]; // Array untuk menyimpan parent dari setiap vertex dalam MST
    int D[V]; // Array untuk menyimpan nilai key
    int MST[V]; // Array untuk menandai vertex yang sudah termasuk dalam MST

    // Inisialisasi semua nilai key sebagai INFINITE dan MST[] sebagai false
    for (int i = 0; i < V; i++) {
        D[i] = INT_MAX; 
        MST[i] = 0;
    }

    // Nilai key untuk vertex pertama adalah 0 sehingga dipilih sebagai vertex pertama
    D[0] = 0;
    P[0] = -1;

    // MST akan memiliki V-1 edges
    for (int count = 0; count < V - 1; count++) {
        int u = minKey(V, D, MST); // Pilih vertex dengan nilai key minimum
        MST[u] = 1; // Tandai vertex yang dipilih sebagai termasuk dalam MST

        // Update nilai key dan parent dari vertex tetangga dari vertex yang dipilih
        for (int v = 0; v < V; v++)
            if (graph[u][v] && MST[v] == 0 && graph[u][v] < D[v]){
                P[v] = u; 
                D[v] = graph[u][v];
            }
    }

    printMST(V, P, graph);
}

int main()
{
    // Contoh graf yang diwakili dalam bentuk adjacency matrix
    int graph[9][9] = { { 0, 2, 4, 0, 0, 0, 7, 0, 0 },
                        { 2, 0, 4, 0, 6, 4, 0, 0, 0 },
                        { 4, 4, 0, 5, 0, 0, 0, 0, 0 },
                        { 0, 0, 5, 0, 2, 0, 0, 0, 0 },
                        { 0, 6, 0, 2, 0, 3, 0, 6, 3 },
                        { 0, 4, 0, 0, 3, 0, 8, 5, 0 },
                        { 7, 0, 0, 0, 0, 8, 0, 9, 0 },
                        { 0, 0, 0, 0, 6, 5, 9, 0, 1 },
                        { 0, 0, 0, 0, 3, 0, 0, 1, 0 } };

    // Hitung jumlah vertex
    int V = sizeof(graph) / sizeof(graph[0]);

    // Panggil fungsi Prim untuk membangun dan mencetak MST
    primMST(V, graph);

    return 0;
}
```

Berikut output dari program yang dijalankan:
```
Edge    Weight
0 - 1   2 
0 - 2   4 
4 - 3   2 
5 - 4   3 
1 - 5   4 
0 - 6   7 
8 - 7   1 
4 - 8   3 
```

#### Program Algoritma **Kruskal**
Untuk mengimplementasikan algoritma **Kruskal**, graph yang terdapat pada soal perlu diimplementasikan sebagai himpunan ${edge[E][3]}$ dengan ${E}$ adalah jumlah edge yang terdapat pada graph. Data yang disimpan pada ${edge[E][3]}$ adalah vertex awal (${A}$), vertex akhir (${B}$), dan nilai edge yang menghubungkan kedua vertex tersebut. Selain itu, diperlukan juga variabel ${V}$ yang merupakan jumlah vertex pada graph.

Algoritma **Kruskal** yang diimplementasikan pada program sebagai fungsi ${kruskalMST(E, \; V, \; edge[E][3])}$ memiliki langkah sebagai berikut:
1. Inisiasliasi ${P[V]}$ dan ${rank[V]}$
	- ${P[i]}$ menyimpan data parent dari vertex ${i}$
	- *${rank[i]}$ menyimpan data rank dari vertex ${i}$*
2. Lakukan *sorting* untuk ${edge}$ berdasarkan elemen ketiga dari setiap edge (menggunakan ${qsort()}$). *Fungsi ${comp()}$ perlu dibuat secara manual*
3. Set ${P[i] = i}$ (parent dari vertex ${i}$ adalah dirinya sendiri)
4. Set ${rank[i] = 0}$ (tree belum terbentuk)
5. Inisialisasi ${minCost = 0}$, nilai total cost yang dicari
6. Lakukan iterasi sebanyak ${E}$ kali (iterator ${i}$):
	- *Inisialisasi ${v1}$, parent tertinggi dari vertex ${A}$*
	- *Inisialisasi ${v2}$, parent tertinggi dari vertex ${B}$*
	- Inisialisasi ${cost = edge[i][2]}$
	- Cek jika ${v1 \neq v2}$ (artinya vertex ${A}$ dan ${B}$ tidak terhubung pada parent yang sama)
	- Jika iya, maka lakukan hal berikut:
		- *Gabungkan ${v1}$ dan ${v2}$*
		- ${minCost = minCost + cost}$
7. *Cetak MST yang dibentuk*

### Soal 3

>Berapa kompleksitas dari program tersebut? Jelaskan bagaimana kompleksitas tersebut bisa didapatkan!
