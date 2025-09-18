Analisis Algoritme - R2
Ghiffari Bravia Hisham (G6401231050)

## Standar Satuan Waktu untuk Tugas

- Inisiasi nilai variabel = 1 satuan waktu
- Inisiasi array dengan M elemen = M satuan waktu
- Fungsi scanf() dan printf() = 1 satuan waktu
- Fungsi max(a, b) = 1 satuan waktu
- Operasi boolean = 1 satuan waktu
- Operasi aritmatika = 1 satuan waktu
- Increment / Decrement = 1 satuan waktu
- Operasi Konstan O(1) = c satuan waktu
- Operasi Konstan O(n) = c \* n satuan waktu
- Operasi Konstan O(n^2) = c \* n^2 satuan waktu

## Iteratif Sederhana

### Soal 1

```c
int n;
scanf("%d", &n);
for(int i = n; i > 0; i=i/2){
	// Suatu pernyataan konstan O(1)
	break;
}
```

Perhitungan T(n)
$$
T(n) = 1 + 1 + 1 + 1 + c
$$
$$
T(n) = 4 + c
$$

Perhitungan Big-O Notation
$$
Kompleksitas = O(1)
$$

### Soal 2

```c
for(int i = 1; i < n; i=i*2){
	// Suatu pernyataan konstan O(1)
}
```

Perhitungan T(n)
$$
T(n) = 1 + \log_2(n) *c + (\log_2(n) + 1)
$$
$$
T(n) = 2 + (c+1)*\log_2(n)
$$

Perhitungan Big-O Notation
$$
Kompleksitas = O(\log(n))
$$

### Soal 3

```c
int n;
scanf("%d", &n);
while(n > 0){
	n = n / 2;
}
```

Perhitungan T(n)
$$
T(n) = 1 + 1 + (\log_2(n) + 1) + (\log_2(n) + 2) 
$$
$$
T(n) = 2(\log_2(n)) + 5
$$

Perhitungan Big-O Notation
$$
Kompleksitas = O(\log(n))
$$

### Soal 4

```c
int n;
scanf("%d", &n);
for(i = 0; i < sqrt(n); i++){
	// Suatu pernyataan konstan O(1)
}
```

Perhitungan T(n)
$$
T(n) = 1 + 1 + 1 + (\sqrt n)*c + (\sqrt n + 1)
$$
$$
T(n) = (c+1)*\sqrt n + 4
$$

Perhitungan Big-O Notation
$$
Kompleksitas = O(\sqrt n)
$$


### Soal 5

```c
for(int i = n; i > 1; i = i--{
	printf("%d", &i);
}
```

Perhitungan T(n)
$$
T(n) = 1 + n + (n + 1)
$$
$$
T(n)= 2n + 2
$$

Perhitungan Big-O Notation
$$
Kompleksitas = O(n)
$$

### Soal 6

```c
for(int i = 2; i < n; i=pow(i, 2)){
	// Suatu pernyataan konstan O(1)
}
```

Perhitungan T(n)
$$
T(n) = 1 + (\log_2(\log_2(n)) + 1) * c  + (\log_2(\log_2(n))+2)
$$

$$
T(n) = (1 + c)*\log_2(\log_2(n)) + 3 + c
$$

Perhitungan Big-O Notation
$$
Kompleksitas = O(\log(\log(n)))
$$

### Soal 7

```c
int n;
scanf("%d", &n);
for(i = 1; i < sqrt(n); i = i * 2){
	// Suatu pernyataan konstan O(1)
}
```

Perhitungan T(n)
$$
T(n) = 1 + 1 + 1 + \log_2(\sqrt n) * c + (\log_2(\sqrt n) + 1)
$$
$$
T(n) = (1 + c) * \log_2(\sqrt n) + 4
$$

Perhitungan Big-O Notation
$$
Kompleksitas = O(log(n))
$$

### Soal 8

```c
int n;
scanf("%d", &n);
for(i = 2; i < n; i = i * 2){
	// Suatu pernyataan konstan O(n)
}
```

Perhitungan T(n)
$$
T(n) = 1 + 1 + 1 + (\log_2(n) - 1) * cn + \log_2(n)
$$
$$
T(n) = 3 + \log_2(n) + cn(\log_2(n)) - cn
$$

Perhitungan Big-O Notation
$$
Kompleksitas = O(n*\log(n))
$$

### Soal 9

```c
int n;
scanf("%d", &n);
for(i = 0; i < n+n+n; i = i++){
	// Suatu pernyataan konstan O(n^2)
}
```

Perhitungan T(n)
$$
T(n) = 1 + 1 + 1 + 3n * (cn^2) + (3n + 1)
$$
$$
T(n) = 4 + 3n + 3cn^3
$$

Perhitungan Big-O Notation
$$
Kompleksitas = O(n^3)
$$

### Soal 10

```c
int n;
scanf("%d", &n);
for(i = 0; i < n*n; i = i++){
	// Suatu pernyataan konstan O(1)
}
```

Perhitungan T(n)
$$
T(n) = 1 + 1 + 1 + n^2(c) + (n^2 + 1)
$$
$$
T(n) = (c + 1)n^2 + 4
$$

Perhitungan Big-O Notation
$$
Kompleksitas = O(n^2)
$$

## Iteratif Majemuk

### Soal 1

```c
for (int i = 0; i < n; i++){
	for (int j = 0; j < n; j++){
		printf("*");
	}
}
```

Perhitungan Loop 2 (j)
$$
loop_2 = 1 + n(1) + (n + 1)
$$
$$
loop_2 = 2 + 2n
$$

Perhitungan Loop 1 (i)
$$
loop_1 = 1 + n(loop_2) + (n + 1)
$$
$$
loop_1 = 2 + n + n(loop_2)
$$

Perhitungan T(n)
$$
T(n) = 1 + n(2 + 2n) + (n + 1)
$$
$$
T(n) = 2 + 3n + 2n^2
$$

Perhitungan Big-O Notation
$$
Kompleksitas = O(n^2)
$$

### Soal 2

```c
for(int i = 0; i < n; i++){
	for (int j = 0; j < sqrt(n); j++){
		// Suatu pernyataan konstan O(1)
	}
}
```

Perhitungan Loop 2 (j)
$$
loop_2 = 1 + c*\sqrt n + (\sqrt n + 1)
$$
$$
loop_2 = 2 + (c + 1) \sqrt n
$$

Perhitungan Loop 1 (i)
$$
loop_1 = 1 + n(loop_2) + (n + 1)
$$
$$
loop_1 = 2 + n + n(loop_2)
$$

Perhitungan T(n)
$$
T(n) = 2 + n + n(2 + (c + 1)\sqrt n)
$$
$$
T(n) = 2 + 3n + (c + 1) * n\sqrt n
$$

Perhitungan Big-O Notation
$$
Kompleksitas = O(n\sqrt n)
$$

### Soal 3

```c
int n;
int count = 0;
scanf("%d", &n);
for (int i = 0; i < n; i++){
	while (count < i){ // revisi c menjadi count
		sum = sum + count;
		count++;
	}
}
```

Rumus T(n)
$$
T(n) = 1 + 1 + 1 + loop_1
$$
$$
T(n) = 3 + loop_1
$$

Perhitungan Loop 2
$$
loop_2 = i * (3) + (i + 1) 
$$
$$
loop_2 = 4i + 1
$$

Perhitungan Loop 1
$$
i = 0, 1, 2, ..., n-1
$$
$$
i = t; \; t = 0, 1, 2, ..., n-1
$$
$$
loop_1 = \sum_{t=0}^{n-1} loop_2 + (n + 1)
$$
$$
loop_1 = \sum_{t=0}^{n-1}(4t + 1) + (n + 1)
$$
$$
loop_1 = n + 4\sum_{t=0}^{n-1}t + (n + 1)
$$
$$
loop_1 = 2n + 1 + 4(\frac{n*(0 +(n-1))}{2})
$$
$$
loop_1 = 2n + 1 + 2(n^2 - n)
$$
$$
loop_1 = 2n^2 + 1
$$

Perhitungan T(n)
$$
T(n) = 3 + loop_1
$$
$$
T(n) = 3 + 2n^2 + 1
$$
$$
T(n) = 4 + 2n^2
$$

Perhitungan Kompleksitas
$$
Kompleksitas = O(n^2)
$$

### Soal 4

```c
int n;
int c = 0;
scanf("%d", &n);
for(int i = 0; i < n; i++){
	c = 0;
	while (c < i){
		sum = sum + c;
		c++;
	}
}
```

Rumus T(n)
$$
T(n) = 1 + 1 + 1 + loop_1
$$
$$
T(n) = 3 + loop_1
$$

Perhitungan Loop 2
$$
loop_2 = 1 + i * 3 + (i + 1)
$$
$$
loop_2 = 2 + 4i
$$

Perhitungan Loop 1
$$
i = 0, 1, 2, ..., n-1
$$
$$
i = t; \; t = 0, 1, 2, ..., n-1
$$
$$
loop_1 = 1 + \sum_{t=0}^{n-1}loop_2 + (n + 1)
$$
$$
loop_1 = 2 + n + \sum_{t=0}^{n-1}(2 + 4t)
$$
$$
loop_1 = 2 + n + 2n + 4\sum_{t=0}^{n-1}t
$$
$$
loop_1 = 2 + 3n + 4(\frac{n*(0 +(n-1))}{2})
$$
$$
loop_1 = 2 + 3n + 2(n^2 - n)
$$
$$
loop_1 = 2n^2 + n + 2
$$

Perhitungan T(n)
$$
T(n) = 3 + loop_1
$$
$$
T(n) = 3 + (2n^2 + n + 2)
$$
$$
T(n) = 2n^2 + n + 5
$$

Perhitungan Big-O Notation
$$
Kompleksitas  = O(n^2)
$$

### Soal 5

```c
scanf("%d", &n);
for(int  i = 0; i < n=pow(n, 3); i++){
	if (i < n=pow(n, 3)){
		printf("%d", i);
	}
}
```

Perhitungan T(n)
1. Kasus n = 0
$$
T(n) = 1 + 1 + 1
$$
$$
T(n) = 3
$$

2. Kasus n = 1
$$
T(n) = 1 + 1 + 1(3 + 1 + 1) + 3(2)
$$
$$
T(n) = 13
$$

3. Kasus n > 1
$$
T(n) = \infty
$$

Alasan di balik *infinite loop* yang terjadi adalah untuk setiap iterasi, nilai i bertambah secara linear (i++), sementara n bertambah secara kubik (n = pow(n,  3)) sehingga kondisi i < n akan selalu terpenuhi

### Soal 6

```c
int n;
int count = 0;
scanf("%d", &n);
for (int i = 0; i < n; i++){
	for (int j = 0; j < n*n; j++){
		for (int k = n; k > 0; k--){
			count = count + k
		}
	}
}
```

Rumus T(n)
$$
T(n) = 1 + 1 + 1 + loop_1
$$
$$
T(n) = 3 + loop_1
$$

Perhitungan Loop 3
$$
loop_3 = 1 + n(2) + (n + 1)
$$
$$
loop_3 = 3n + 2
$$

Perhitungan Loop 2
$$
loop_2 = 1 + n^2(loop_3) + (n^2 + 1)
$$
$$
loop_2 = 2 + n^2 + n^2(3n + 2)
$$
$$
loop_2 = 3n^3 + 3n^2 + 2
$$

Perhitungan Loop 1
$$
loop_1 = 1 + n(loop_2) + (n + 1)
$$
$$
loop_1 = 2 + n + n(3n^3 + 3n^2 + 2)
$$
$$
loop_1 = 3n^4 + 3n^3 + 3n + 2
$$

Perhitungan T(n)
$$
T(n) = 3 + loop_1
$$
$$
T(n) = 3 + (3n^4 + 3n^3 + 3n + 2)
$$
$$
T(n) = 3n^4 + 3n^3 + 3n + 5
$$

Perhitungan Big-O Notation
$$
Kompleksitas = O(n^4)
$$

### Soal 7

```c
int count = 0;
for (int i = n/2; i <= n; i++){
	for (int j = 1; j+n/2 <= n; j = j++){
		for (int k = 1; k <= n; k = k * 2){
			count++;
		}
	}
}
```

Rumus T(n)
$$
T(n) = 1 + loop_1
$$

Perhitungan Loop 3
$$
loop_3 = 1 + (\log_2(n) + 1) + (\log_2(n) + 2)(2)
$$
$$
loop_3 = 6 + 3log_2(n)
$$

Perhitungan Loop 2
$$
loop_2 = 1 + (\lceil \frac n 2 \rceil)loop_3 + (\lceil \frac n 2 \rceil + 1)
$$
$$
(Asumsikan \; ceiling \; dihilangkan)
$$
$$
loop_2 = 2 + \frac n 2 + (\frac n 2)(6 + 3\log_2(n))
$$
$$
loop_2 = 2 + \frac {7n} 2 + (\frac {3n} 2)\log_2(n)
$$

Perhitungan Loop 1
$$
loop_1 = 1 + (\lceil \frac n 2 \rceil + 1)loop_2 + (\lceil \frac n 2 \rceil + 2)
$$
$$
(Asumsikan \; ceiling \; dihilangkan)
$$
$$
loop_1 = 3 + \frac n 2 + (\frac n 2 + 1)(2 + \frac {7n} 2 + (\frac {3n} 2)\log_2(n))
$$
$$
loop_1 = 3 + \frac n 2 + n + \frac {7n^2} 4 + \frac {3n^2} 4(\log_2(n)) + 2 + \frac {7n} 2 + (\frac {3n} 2)\log_2(n)
$$
$$
loop_1 = 5 + 5n + \frac {7n^2} 4 + (\frac {3n^2 + 6n} 4)\log_2(n)
$$

Perhitungan T(n)
$$
T(n) = 1 + loop_1
$$
$$
T(n) = 6 + 5n + \frac {7n^2} 4 + (\frac {3n^2 + 6n} 4)\log_2(n)
$$

Perhitungan Big-O Notation
$$
Kompleksitas = O(n^2\log(n))
$$

### Soal 8

```c
for (int i = 0; i <= sqrt(n); i++){
	for (int j = n; j >= 1; j = j--){
		for(int k = 1; k <= n; k = k * 2){
			printf("*");
		}
	}
}
```

Rumus T(n)
$$
T(n) = loop_1
$$

Perhitungan Loop 3
$$
loop_3 = 1 + (n + 1) + (n + 2)(2)
$$
$$
loop_3 = 6 + 3n
$$

Perhitungan Loop 2
$$
loop_2 = 1 + n(loop_3) + (n + 1)
$$
$$
loop_2 = 2 + n + n(6 + 3n)
$$
$$
loop_2 = 2 + 7n + 3n^2
$$

Perhitungan T(n)
$$
T(n) loop_1 = 1 + (\sqrt n + 1)loop_2 + (\sqrt n + 2)
$$

$$
T(n) = loop_1 = 3 + \sqrt n + (\sqrt n + 1)(2 + 7n + 3n^2)
$$
$$
T(n) = loop_1 = 5 + 3\sqrt n + 3n^2 + 7n + 3n^2\sqrt n + 7n\sqrt n
$$

Perhitungan Big-O Notation
$$
Kompleksitas = O(n^2\sqrt n)
$$

### Soal 9

```c
int arr[M] = {/*M element*/} // array dengan M element
int top = arr[0];
int best = arr[0];
for (int i = 0; i < M; i++){
	top = max(arr[i], top+arr[i]);
	best = max(top, best);
}
printf("%d", best);
```

Rumus T(M)
$$
T(M) = M + 1 + 1 + loop_1 + 1
$$
$$
T(M) = 3 + M + loop_1
$$

Perhitungan Loop 1
$$
loop_1 = 1 + M(2 + 2 + 1) + (M + 1)
$$
$$
loop_1 = 2 + 6M
$$

Perhitungan T(M)
$$
T(M) = 3 + M + (2 + 6M)
$$
$$
T(M) = 5 + 7M
$$

Perhitungan Big-O Notation
$$
Kompleksitas = O(M)
$$

### Soal 10

```c
scanf("%d", &n);
for (int i = 0; i < n*n; i++){
	for(int j = m/4; j < m/2; i*=2)
		printf("I");
	for(int j = 0; j < 2*m; i+=2){
		printf("B");
		for(int k = 0; j < 2*m; i+=2)
			printf("P");
	}
}

for(int i = 0; i/2 < n*m; i *= 2)
	printf("B");

```

Rumus T(n)

1. Untuk m = 0
$$
T(n) = 1 + 1 + n^2(2 + 2) + (n^2 + 1) + 2
$$
$$
T(n) = 5 + 5n^2
$$

2. Untuk m > 0
$$
T(n) = \infty
$$

Alasan di balik *infinite loop* adalah tidak ada operasi yang mengubah nilai j sehingga kondisi j < m/2 selalu terpenuhi




