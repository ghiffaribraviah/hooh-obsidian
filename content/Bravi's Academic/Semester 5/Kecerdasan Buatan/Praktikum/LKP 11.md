[[Bravi's Academic/Semester 5/Kecerdasan Buatan/Praktikum/index|Kecerdasan Buatan]] - P2 <br>Ghiffari Bravia Hisham (G6401231050)

### Aturan Universitas

>Sebuah universitas memiliki aturan terkait mata kuliah dan mahasiswa sebagai berikut:
- Setiap mata kuliah memiliki prasyarat tertentu. Jika seorang mahasiswa ingin mendaftar mata kuliah, dia harus sudah menyelesaikan semua prasyarat mata kuliah tersebut,
- Seorang mahasiswa yang tidak lulus di suatu mata kuliah harus mengulang mata kuliah tersebut di semester berikutnya,
- Mahasiswa yang mendaftar ke suatu mata kuliah harus menghadiri setidaknya 75% dari total pertemuan,
- Jika seorang mahasiswa tidak menghadiri setidaknya 75% pertemuan, dia dianggap tidak lulus dalam mata kuliah tersebut,
- Tidak ada mahasiswa yang dapat mengambil dua mata kuliah yang dijadwalkan bersamaan,
- Jika seorang mahasiswa gagal pada mata kuliah yang merupakan prasyarat mata kuliah lainnya, dia tidak dapat mendaftar ke mata kuliah lanjutan.

### Skenario Mahasiswa

>Diberikan skenario sebagai berikut:

#### Andi
- Andi adalah seorang mahasiswa yang ingin mendaftar ke mata kuliah "AI",
- Mata kuliah "AI" memiliki prasyarat yaitu "Introduction to Programming" dan "Mathematics",
- Andi telah lulus dari "Introduction to Programming", tetapi tidak lulus di "Mathematics",
- Mata kuliah "AI" dijadwalkan bersamaan dengan mata kuliah "Data Science" yang juga ingin diambil oleh Andi pada hari Senin jam 9.

#### Budi
- Budi adalah seorang mahasiswa yang ingin mendaftar ke mata kuliah "Sistem Operasi" dan "Komunikasi Data",
- Mata kuliah "Sistem Operasi" memiliki prasyarat yaitu "Organisasi dan Arsitektur Komputer",
- Kehadiran Budi di mata kuliah "Organisasi dan Arsitektur Komputer" sebesar 70%,
- Mata kuliah "Komunikasi Data" dilaksanakan pada hari Senin jam 8,
- Mata kuliah "Sistem Operasi" dilaksanakan pada hari Selasa jam 10

### Pertanyaan

>Diberikan pertanyaan sebagai berikut:
1. Apakah Andi dapat mendaftar ke mata kuliah "AI"?
2. Apakah Andi dapat mengambil mata kuliah "Data Science" dan "AI" secara bersamaan?
3. Apa yang akan terjadi jika kehadiran Andi di mata kuliah "Mathematics" tidak mencapai 75%?
4. Apakah Andi harus mengulang mata kuliah "Introduction to Programming"?
5. Andi lulus di mata kuliah apa saja?
6. Mata kuliah apa saja yang terjadwal di hari Senin jam 9?
7. Apakah Budi dapat mendaftar ke mata kuliah "Sistem Operasi"?
8. Apakah Budi dapat mendaftar ke mata kuliah "Komunikasi Data"?
9. Apakah Budi harus mengulang "Organisasi dan Arsitektur Komputer"?

### Jawaban

>Berikut jawaban dari pertanyaan pada LKP 11:

1. TIDAK, Andi tidak dapat mendaftar AI karena tidak lulus di mata kuliah prasyaratnya (Mathematics)
2. TIDAK, karena mata kuliah "AI" dan "Data Science" memiliki jadwal yang sama
3. Andi dinyatakan tidak lulus dan harus mengulang mata kuliah "Mathematics"
4. TIDAK, Andi tidak perlu mengulang mata kuliah "Introduction to Programming" karena sudah lulus di mata kuliah tersebut
5. Andi lulus di mata kuliah "Introduction to Programming"
6. Mata kuliah yang terjadwal di hari Senin jam 9 adalah mata kuliah "AI" dan "Data Science"
7. TIDAK, Budi tidak dapat mendaftar mata kuliah "Sistem Operasi" karena tidak lulus di mata kuliah prasyaratnya (Organisasi dan Arsitektur Komputer)
8. YA, Budi dapat mendaftar mata kuliah "Komunikasi Data"
9. YA, Budi harus mengulang mata kuliah "Organisasi dan Arsitektur Komputer" karena tidak memenuhi persyaratan absensi kehadiran > 75%

### Program Python

#### Kode Program
```python
from logic4e import FolKB, expr

test_kb = FolKB(
    map(expr, [
        # Aturan Umum
        'TidakAbsen75(p, l) ==> TidakLulus(p, l)',
        'TidakLulus(p, l) ==> Mengulang(p, l)',
        'TidakLulus(p, l2) & Prasyarat(l1, l2) ==> TidakMendaftar(p, l1)',

        # Aturan Jadwal
        'Jadwal(l1, d, h) & Jadwal(l2, d, h) & Berbeda(l1, l2) ==> Bentrok(l1, l2)',
        'Ingin(p, l1) & Ingin(p, l2) & Bentrok(l1, l2) ==> TidakMendaftar(p, l1)',
        'Ingin(p, l1) & Ingin(p, l2) & Bentrok(l1, l2) ==> TidakMendaftar(p, l2)',

        # Aturan Prasyarat
        'Prasyarat(AI, Programming)',
        'Prasyarat(AI, Math)',
        'Prasyarat(SO, OAK)',

        # Aturan Pemenuhan Syarat
        'Lulus(p, Programming) & Lulus(p, Math) ==> Terpenuhi(p, AI)',
        'Lulus(p, OAK) ==> Terpenuhi(p, SO)',
        'Ingin(p, Komdat) ==> Terpenuhi(p, Komdat)',

        # Data Jadwal Mata Kuliah
        'Jadwal(AI, Senin, 9)',
        'Jadwal(Data, Senin, 9)',
        'Jadwal(Komdat, Senin, 8)',
        'Jadwal(SO, Selasa, 10)',

        # Berbeda
        'Berbeda(AI, Data)',
        'Berbeda(AI, Komdat)',
        'Berbeda(AI, SO)',
        'Berbeda(AI, Programming)',
        'Berbeda(AI, Math)',
        'Berbeda(AI, OAK)',

        'Berbeda(Data, Komdat)',
        'Berbeda(Data, SO)',
        'Berbeda(Data, Programming)',
        'Berbeda(Data, Math)',
        'Berbeda(Data, OAK)',
        'Berbeda(Data, AI)',

        'Berbeda(Komdat, SO)',
        'Berbeda(Komdat, Programming)',
        'Berbeda(Komdat, Math)',
        'Berbeda(Komdat, OAK)',
        'Berbeda(Komdat, AI)',
        'Berbeda(Komdat, Data)',

        'Berbeda(SO, Programming)',
        'Berbeda(SO, Math)',
        'Berbeda(SO, OAK)',
        'Berbeda(SO, AI)',
        'Berbeda(SO, Data)',
        'Berbeda(SO, Komdat)',

        'Berbeda(Programming, Math)',
        'Berbeda(Programming, OAK)',
        'Berbeda(Programming, AI)',
        'Berbeda(Programming, Data)',
        'Berbeda(Programming, Komdat)',
        'Berbeda(Programming, SO)',

        'Berbeda(Math, OAK)',
        'Berbeda(Math, AI)',
        'Berbeda(Math, Data)',
        'Berbeda(Math, Komdat)',
        'Berbeda(Math, SO)',
        'Berbeda(Math, Programming)',

        'Berbeda(OAK, AI)',
        'Berbeda(OAK, Data)',
        'Berbeda(OAK, Komdat)',
        'Berbeda(OAK, SO)',
        'Berbeda(OAK, Programming)',
        'Berbeda(OAK, Math)',

        # Data tentang Andi
        'Ingin(Andi, AI)',
        'Ingin(Andi, Data)',
        'Lulus(Andi, Programming)',
        'TidakLulus(Andi, Math)',

        # Data tentang Budi
        'Ingin(Budi, SO)',
        'Ingin(Budi, Komdat)',
        'TidakAbsen75(Budi, OAK)'
    ])
)

# Soal 1
print("Soal 1:")
tidak_lulus = list(test_kb.ask_generator(expr('TidakLulus(Andi, AI)')))
terpenuhi = list(test_kb.ask_generator(expr('Terpenuhi(Andi, AI)')))
if tidak_lulus:
    print("Andi tidak dapat mendaftar mata kuliah AI karena tidak lulus mata kuliah prasyaratnya.")
elif terpenuhi:
    print("Andi dapat mendaftar mata kuliah AI karena telah memenuhi syarat prasyaratnya.")
else:
    print("Andi tidak dapat mendaftar mata kuliah AI karena belum mengambil mata kuliah prasyaratnya.")

# Soal 2
print("\nSoal 2:")
bentrok = list(test_kb.ask_generator(expr('Bentrok(AI, Data)')))
if bentrok:
    print("Andi tidak dapat mendaftar kedua mata kuliah tersebut karena jadwalnya bentrok.")
else:
    print("Andi dapat mendaftar kedua mata kuliah tersebut karena jadwalnya tidak bentrok.")

# Soal 3
print("\nSoal 3:")
tidak_lulus = list(test_kb.ask_generator(expr('TidakLulus(Andi, Math)')))
mengulang = list(test_kb.ask_generator(expr('Mengulang(Andi, Math)')))
if tidak_lulus and mengulang:
    print("Andi harus mengulang mata kuliah Math karena tidak lulus.")
else:
    print("Andi tidak perlu mengulang mata kuliah Math.")

# Soal 4
print("\nSoal 4:")
mengulang = list(test_kb.ask_generator(expr('Mengulang(Andi, Programming)')))
if mengulang:
    print("Andi harus mengulang mata kuliah Programming.")
else:
    print("Andi tidak perlu mengulang mata kuliah Programming karena sudah lulus.")

# Soal 5
print("\nSoal 5:")
lulus = list(test_kb.ask_generator(expr('Lulus(Andi, x)')))
if lulus:
    mk_lulus = [str(list(ans.values())[0]) for ans in lulus if ans]
    print(f"Andi telah lulus mata kuliah: {', '.join(mk_lulus)}.")
else:
    print("Andi belum lulus mata kuliah apapun.")

# Soal 6
print("\nSoal 6:")
jadwal_senin_9 = list(test_kb.ask_generator(expr('Jadwal(x, Senin, 9)')))
if jadwal_senin_9:
    mk_senin_9 = [str(list(ans.values())[0]) for ans in jadwal_senin_9 if ans]
    print(f"Mata kuliah yang dijadwalkan pada Senin pukul 9 adalah: {', '.join(mk_senin_9)}.")
else:
    print("Tidak ada mata kuliah yang dijadwalkan pada Senin pukul 9.")

# Soal 7
print("\nSoal 7:")
tidak_lulus = list(test_kb.ask_generator(expr('TidakMendaftar(Budi, SO)')))
terpenuhi = list(test_kb.ask_generator(expr('Terpenuhi(Budi, SO)')))
if tidak_lulus:
    print("Budi tidak dapat mendaftar mata kuliah SO.")
elif terpenuhi:
    print("Budi dapat mendaftar mata kuliah SO karena telah memenuhi syarat prasyaratnya.")
else:
    print("Budi tidak dapat mendaftar mata kuliah SO karena belum memenuhi syarat prasyaratnya.")

# Soal 8
print("\nSoal 8:")
tidak_lulus = list(test_kb.ask_generator(expr('TidakMendaftar(Budi, Komdat)')))
terpenuhi = list(test_kb.ask_generator(expr('Terpenuhi(Budi, Komdat)')))
if tidak_lulus:
    print("Budi tidak dapat mendaftar mata kuliah Komdat.")
elif terpenuhi:
    print("Budi dapat mendaftar mata kuliah Komdat karena telah memenuhi syarat prasyaratnya.")
else:
    print("Budi tidak dapat mendaftar mata kuliah Komdat karena belum memenuhi syarat prasyaratnya.")

# Soal 9
print("\nSoal 9:")
mengulang = list(test_kb.ask_generator(expr('Mengulang(Budi, OAK)')))
if mengulang:
    print("Budi harus mengulang mata kuliah OAK karena tidak lulus.")
else:
    print("Budi tidak perlu mengulang mata kuliah OAK.")

```

#### Output
```
Soal 1:
Andi tidak dapat mendaftar mata kuliah AI karena belum memenuhi syarat prasyaratnya.

Soal 2:
Andi tidak dapat mendaftar kedua mata kuliah tersebut karena jadwalnya bentrok.

Soal 3:
Andi harus mengulang mata kuliah Math karena tidak lulus.

Soal 4:
Andi tidak perlu mengulang mata kuliah Programming karena sudah lulus.

Soal 5:
Andi telah lulus mata kuliah: Programming.

Soal 6:
Mata kuliah yang dijadwalkan pada Senin pukul 9 adalah: AI, Data.

Soal 7:
Budi tidak dapat mendaftar mata kuliah SO.

Soal 8:
Budi dapat mendaftar mata kuliah Komdat karena telah memenuhi syarat prasyaratnya.

Soal 9:
Budi harus mengulang mata kuliah OAK karena tidak lulus.
```
