[[Bravi's Academic/Semester 5/Kecerdasan Buatan/Praktikum/index|Kecerdasan Buatan]] - P2 <br>Ghiffari Bravia Hisham (G6401231050)

### Proportional Logic

![[06-P-01-Wumpus World.png]]

>Selesaikan permainan ***Wumpus World*** di atas. Definisikan semua fakta yang ada dan beritahu agent tentang informasi tersebut. Selanjutnya, minta agent untuk menemukan emas dan membawanya keluar dari gua dengan selamat. Tunjukan langkah-langkah dalam menemukan emas dengan mengajukan pertanyaan dengan method *ask_if_true*. Gunakan fungsi dalam python jika diperlukan.

#### Program AIMA

```python
from utils import *
from logic import *

kb_wumpus = PropKB()

# Inisiasi Variabel
P = {} # Pit
B = {} # Breeze
W = {} # Wumpus
S = {} # Stench
G = {} # Glitter
A = {} # Gold (Au)

# Deklarasi Symbol setiap Variabel
for i in range(1, 5, 1):
for j in range(1, 5, 1):
P[i, j] = Symbol(f"P[{i},{j}]")
B[i, j] = Symbol(f"B[{i},{j}]")
W[i, j] = Symbol(f"W[{i},{j}]")
S[i, j] = Symbol(f"S[{i},{j}]")
G[i, j] = Symbol(f"G[{i},{j}]")
A[i, j] = Symbol(f"A[{i},{j}]")

# Menambahkan Rules Pit/Breeze dan Wumpus/Stench
# 1. Ujung / Corner
kb_wumpus.tell(B[1, 1] |'<=>'| ((P[1, 2] | P[2, 1])))
kb_wumpus.tell(B[1, 4] |'<=>'| ((P[1, 3] | P[2, 4])))
kb_wumpus.tell(B[4, 1] |'<=>'| ((P[3, 1] | P[4, 2])))
kb_wumpus.tell(B[4, 4] |'<=>'| ((P[3, 4] | P[4, 3])))
kb_wumpus.tell(S[1, 1] |'<=>'| ((W[1, 2] | W[2, 1])))
kb_wumpus.tell(S[1, 4] |'<=>'| ((W[1, 3] | W[2, 4])))
kb_wumpus.tell(S[4, 1] |'<=>'| ((W[3, 1] | W[4, 2])))
kb_wumpus.tell(S[4, 4] |'<=>'| ((W[3, 4] | W[4, 3])))

# 2. Kolom Kiri / Kanan
for i in range(2, 4):
kb_wumpus.tell(B[i, 1] |'<=>'| ((P[i, 2] | P[i + 1, 1] | P[i - 1, 1])))
kb_wumpus.tell(B[i, 4] |'<=>'| ((P[i, 3] | P[i + 1, 4] | P[i - 1, 4])))
kb_wumpus.tell(S[i, 1] |'<=>'| ((W[i, 2] | W[i + 1, 1] | W[i - 1, 1])))
kb_wumpus.tell(S[i, 4] |'<=>'| ((W[i, 3] | W[i + 1, 4] | W[i - 1, 4])))

# 3. Baris Atas / Bawah
for j in range(2, 4):
kb_wumpus.tell(B[1, j] |'<=>'| ((P[2, j] | P[1, j + 1] | P[1, j - 1])))
kb_wumpus.tell(B[4, j] |'<=>'| ((P[3, j] | P[4, j + 1] | P[4, j - 1])))
kb_wumpus.tell(S[1, j] |'<=>'| ((W[2, j] | W[1, j + 1] | W[1, j - 1])))
kb_wumpus.tell(S[4, j] |'<=>'| ((W[3, j] | W[4, j + 1] | W[4, j - 1])))

# 4. Bagian Tengah
for i in range (2, 4):
	for j in range (2, 4):
		kb_wumpus.tell(B[i, j] |'<=>'| ((P[i, j+1] | P[i, j-1] | P[i+1, j] | P[i-1, j])))
		kb_wumpus.tell(S[i, j] |'<=>'| ((W[i, j+1] | W[i, j-1] | W[i+1, j] | W[i-1, j])))

# Menambah Rules untuk Gold/Glitter
for i in range(1, 5):
	for j in range(1, 5):
		kb_wumpus.tell(G[i, j] | '<=>' | A[i, j])
  
# Menambahkan Informasi
# 1. Petak Breeze
B_true = [(1,2),(1,4),(2,3),(3,2),(3,4),(4,3)]
for i in range(1, 5):
	for j in range(1, 5):
		if (i, j) in B_true:
			kb_wumpus.tell(B[i, j])
		else:
			kb_wumpus.tell(~B[i, j])

# 2. Petak Stench
S_true = [(2, 1), (3, 2), (4, 1)]
for i in range(1, 5):
	for j in range(1, 5):
		if (i, j) in S_true:
			kb_wumpus.tell(S[i, j])
		else:
			kb_wumpus.tell(~S[i, j])

# 3. Petak Glitter
G_true = [(3, 2)]
for i in range(1, 5):
	for j in range(1, 5):
		if (i, j) in G_true:
			kb_wumpus.tell(G[i, j])
		else:
			kb_wumpus.tell(~G[i, j])
```

#### Penjelasan Program

Program di atas adalah implementasi solusi *Wumpus World* menggunakan AIMA Python dengan memanfaatkan *Proportional Logic*. Program bekerja dengan langkah-langkah sebagai berikut:

1. Program akan mendeklarasikan PropKB() dan dictionary variabel yang diperlukan:
	- P = Pit, simbol untuk menandakan ada atau tidaknya pit di suatu petak
	- B = Breeze, simbol untuk menandakan ada atau tidaknya breeze di suatu petak
	- W = Wumpus, simbol untuk menandakan ada atau tidaknya Wumpus di suatu petak
	- S = Stench, simbol untuk menandakan ada atau tidaknya Stench di suatu petak
	- G = Glitter, simbol untuk menandakan ada atau tidaknya Glitter di suatu petak
	- A = Gold(Au), simbol untuk menandakan ada atau tidaknya Gold di suatu petak

2. Program akan memasukkan setiap variabel ke dalam dictionary variabelnya:
	- Setiap dictionary akan memiliki 16 variabel (sesuai jumlah petak yang ada)

3. Program akan menambahkan rules untuk setiap variabel:
	- Petak yang terdapat Pit hanya boleh ada jika ada Breeze di sekitarnya
	- Petak yang terdapat Wumpus hanya boleh ada jika ada Stench di sekitarnya
	- Petak yang terdapat Gold hanya boleh ada jika terdapat Glitter

4. Program akan menambahkan informasi pada setiap petak
	- Ada/tidaknya Breeze di petak tersebut
	- Ada/tidaknya Stench di petak tersebut
	- Ada/tidaknya Glitter di petak tersebut
