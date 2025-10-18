[[Bravi's Academic/Semester 5/Kecerdasan Buatan/Praktikum/index|Kecerdasan Buatan]] - P2<br>Ghiffari Bravia Hisham (G6401231050)

### Tugas Praktikum

>1. Buat tree dengan minimal 7 node sesuai contoh. 
>2. Implementasikan DFS dan BFS menggunakan kode di atas dan perhitungan manual. 
>3. Cari sebuah node target dan tampilkan urutan kunjungan node. 
>4. Bandingkan hasilnya antara DFS dan BFS. 
>5. Hitung jumlah langkah pencarian.

Berikut merupakan implementasi dari BFS dan DFS untuk melakukan Tree Search menggunakan data Tree yang ada pada LKP dengan target node "E":

```python
from collections import deque

class Node:
	def __init__(self, data):
		self.data = data
		self.children = []

def add_child(parent, child):
	parent.children.append(child)

def dfs(node, target):
	print("Visit:", node.data)
	if node.data == target:
		return True
	for child in node.children:
		if dfs(child, target):
			return True
	return False

def bfs(root, target):
	queue = deque([root])
	while queue:
		node = queue.popleft()
		print("Visit:", node.data)
		if node.data == target:	
			return True
		for child in node.children:
			queue.append(child)
	return False

# Example usage:
root = Node("A")
child1 = Node("B")
child2 = Node("C")
add_child(root, child1)
add_child(root, child2)
add_child(child1, Node("D"))
add_child(child1, Node("E"))
add_child(child2, Node("F"))
add_child(child2, Node("G"))

dfs_result = dfs(root, "E")
bfs_result = bfs(root, "E")

print("DFS found target:", dfs_result)
print("BFS found target:", bfs_result)
```

Berikut merupakan output dari program di atas:

```
Visit: A
Visit: B
Visit: D
Visit: E
Visit: A
Visit: B
Visit: C
Visit: D
Visit: E
DFS found target: True
BFS found target: True
```

Berikut merupakan hasil perhitungan dari DFS dan BFS menggunakan data Tree dan target node yang sama:

![[07-P-01-BFS dan DFS.png]]

Berdasarkan kedua perhitungan di atas, algoritma BFS dan DFS memberikan hasil yang sama baik pada program Python maupun perhitungan manual. Baik algoritma BFS maupun DFS memberikan hasil yang urutan kunjungan yang sama untuk target node "E", akan tetapi algoritme BFS memerlukan satu langkah lebih banyak dari algoritme DFS karena perlu mengecek node C yang berada di level satu terlebih dahulu