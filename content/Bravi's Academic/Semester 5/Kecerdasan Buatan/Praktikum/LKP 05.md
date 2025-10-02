[[Bravi's Academic/Semester 5/Kecerdasan Buatan/Praktikum/index|Kecerdasan Buatan]] - P2 <br>Ghiffari Bravia Hisham (G6401231050)

### Soal

>**Constraint Satisfaction Problem**
>
>Kecamatan Dramaga berada di Kabupaten Bogor Barat. Perhatikan Peta Kabupaten Bogor Barat berikut:
>
>![[05-R-01-Map Soal.png]]
>![[05-P-02-Gambar Graph.png]]
>
>Selesaikan masalah graph coloring menggunakan peta Kecamatan Bogor Barat di atas dengan Algoritme Backtracking secara manual, kemudian bandingkan hasil manual Anda dengan implementasi yang menggunakan AIMA Python.

### AIMA Python

#### Kode Program

Berikut adalah implementasi dari backtracking search untuk empat warna menggunakan AIMA Python

```python
from csp import *

neighborhoods = {
	"Tenjo": ["Jasinga", "Parung_Panjang", "Cigudeg"],
	"Jasinga": ["Tenjo", "Sukajaya", "Cigudeg"],
	"Sukajaya": ["Jasinga", "Nanggung", "Cigudeg"],
	"Nanggung": ["Sukajaya", "Cigudeg", "Leuwisadeng", "Leuwiliang"],
	"Leuwisadeng": ["Nanggung", "Leuwiliang", "Rumpin", "Cigudeg"],
	"Leuwiliang": ["Nanggung", "Leuwisadeng", "Rumpin", "Cibungbulang", "Pamijahan"],
	"Pamijahan": ["Leuwiliang", "Cibungbulang", "Ciampea", "Tenjolaya"],
	"Tenjolaya": ["Pamijahan", "Ciampea", "Cibungbulang", "Dramaga"],
	"Ciampea": ["Pamijahan", "Tenjolaya", "Dramaga", "Cibungbulang"],
	"Cibungbulang": ["Leuwiliang", "Pamijahan", "Ciampea", "Tenjolaya", "Rumpin"],
	"Dramaga": ["Ciampea", "Tenjolaya"],
	"Rumpin": ["Leuwisadeng", "Cigudeg", "Cibungbulang", "Parung_Panjang", "Leuwiliang"],
	"Parung_Panjang": ["Tenjo", "Cigudeg", "Rumpin"],
	"Cigudeg": ["Tenjo", "Jasinga", "Sukajaya", "Nanggung", "Leuwisadeng", "Rumpin", "Parung_Panjang"]
} 

coloring_problem = MapColoringCSP("RGBY", neighborhoods)
solution = backtracking_search(coloring_problem)

if solution:
	for region, color in solution.items():
		print(f"{region}: {color}")
else:
	print("No solution found")
```

#### Hasil Output

Berikut hasil output dari program di atas

```
Tenjo: R
Jasinga: G
Sukajaya: R
Nanggung: G
Leuwisadeng: R
Leuwiliang: B
Pamijahan: R
Tenjolaya: G
Ciampea: B
Cibungbulang: Y
Dramaga: R
Rumpin: G
Parung_Panjang: B
Cigudeg: Y
```

### Analisis Manual

#### Tabel Analisis

Berikut adalah hasil dari analisis manual untuk problem menggunakan backtracking search

| Langkah |    Variabel    | Warna |        Pengecekan         |       Hasil        |
| :-----: | :------------: | :---: | :-----------------------: | :----------------: |
|    1    |     Tenjo      |   R   |           Valid           |     Tenjo = R      |
|    2    |    Jasinga     |   R   |    Konflik (Tenjo = R)    |      ditolak       |
|    3    |    Jasinga     |   G   |           Valid           |    Jasinga = G     |
|    4    |    Cigudeg     |   R   |    Konflik (Tenjo = R)    |      ditolak       |
|    5    |    Cigudeg     |   G   |   Konflik (Jasinga = G)   |      ditolak       |
|    6    |    Cigudeg     |   B   |           Valid           |    Cigudeg = B     |
|    7    |     Rumpin     |   R   |    Konflik (Tenjo = R)    |      ditolak       |
|    8    |     Rumpin     |   G   |   Konflik (Jasinga = G)   |      ditolak       |
|    9    |     Rumpin     |   B   |   Konflik (Cigudeg = B)   |      ditolak       |
|   10    |     Rumpin     |   Y   |           Valid           |     Rumpin = Y     |
|   11    |  Leuwisadeng   |   R   |    Konflik (Tenjo = R)    |      ditolak       |
|   12    |  Leuwisadeng   |   G   |           Valid           |  Leuwisadeng = G   |
|   13    |    Nanggung    |   R   |    Konflik (Tenjo = R)    |      ditolak       |
|   14    |    Nanggung    |   G   | Konflik (Leuwisadeng = G) |      ditolak       |
|   15    |    Nanggung    |   B   |           Valid           |    Nanggung = B    |
|   16    |   Leuwiliang   |   R   |    Konflik (Tenjo = R)    |      ditolak       |
|   17    |   Leuwiliang   |   G   | Konflik (Leuwisadeng = G) |      ditolak       |
|   18    |   Leuwiliang   |   B   |  Konflik (Nanggung = B)   |      ditolak       |
|   19    |   Leuwiliang   |   Y   |           Valid           |   Leuwiliang = Y   |
|   20    |  Cibungbulang  |   R   |    Konflik (Tenjo = R)    |      ditolak       |
|   21    |  Cibungbulang  |   G   | Konflik (Leuwisadeng = G) |      ditolak       |
|   22    |  Cibungbulang  |   B   |  Konflik (Nanggung = B)   |      ditolak       |
|   23    |  Cibungbulang  |   Y   |           Valid           |  Cibungbulang = Y  |
|   24    |   Pamijahan    |   R   |    Konflik (Tenjo = R)    |      ditolak       |
|   25    |   Pamijahan    |   G   |           Valid           |   Pamijahan = G    |
|   26    |    Ciampea     |   R   |    Konflik (Tenjo = R)    |      ditolak       |
|   27    |    Ciampea     |   G   |  Konflik (Pamijahan = G)  |      ditolak       |
|   28    |    Ciampea     |   B   |           Valid           |    Ciampea = B     |
|   29    |   Tenjolaya    |   R   |    Konflik (Tenjo = R)    |      ditolak       |
|   30    |   Tenjolaya    |   G   |  Konflik (Pamijahan = G)  |      ditolak       |
|   31    |   Tenjolaya    |   B   |   Konflik (Ciampea = B)   |      ditolak       |
|   32    |   Tenjolaya    |   Y   |           Valid           |   Tenjolaya = Y    |
|   33    |    Dramaga     |   R   |    Konflik (Tenjo = R)    |      ditolak       |
|   34    |    Dramaga     |   G   |           Valid           |    Dramaga = G     |
|   35    | Parung_Panjang |   R   |    Konflik (Tenjo = R)    |      ditolak       |
|   36    | Parung_Panjang |   G   |           Valid           | Parung_Panjang = G |
|   37    |    Sukajaya    |   R   |    Konflik (Tenjo = R)    |      ditolak       |
|   38    |    Sukajaya    |   G   |   Konflik (Jasinga = G)   |      ditolak       |
|   39    |    Sukajaya    |   B   |   Konflik (Cigudeg = B)   |      ditolak       |
|   40    |    Sukajaya    |   Y   |           Valid           |    Sukajaya = Y    |

#### Hasil

Berikut adalah hasil akhir dari algoritma di atas

|    Variabel    | Warna |
| :------------: | :---: |
|     Tenjo      |   R   |
|    Jasinga     |   G   |
|    Cigudeg     |   B   |
|     Rumpin     |   Y   |
|  Leuwisadeng   |   G   |
|    Nanggung    |   B   |
|   Leuwiliang   |   Y   |
|  Cibungbulang  |   Y   |
|   Pamijahan    |   G   |
|    Ciampea     |   B   |
|   Tenjolaya    |   Y   |
|    Dramaga     |   G   |
| Parung_Panjang |   G   |
|    Sukajaya    |   Y   |

### Perbandingan Hasil

Hasil *Backtracking Search* dari AIMA Python berbeda dengan hasil pada analisis manual. Hal ini terjadi karena banyak faktor yang dapat memengaruhi hasil akhir dari *Backtracking Search*. Salah satu faktor yang memengaruhi adalah *Ordering* atau penentuan urutan variabel atau node yang dicek. Perbedaan urutan variabel pada AIMA Python dan analisis manual menyebabkan 