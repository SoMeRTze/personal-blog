---
title: The range() Function
date: "2021-01-10T22:12:03.284Z"
description: "If you do need to iterate over a sequence of numbers, the built-in function range() comes in handy. It generates arithmetic progressions: .."
---


If you do need to iterate over a sequence of numbers, the built-in python function range() comes in handy. It generates arithmetic progressions:

```
>>> for i in range(5):
...     print(i)
...
0
1
2
3
4
```

```
range(5, 10)
   5, 6, 7, 8, 9

range(0, 10, 3)
   0, 3, 6, 9

range(-10, -100, -30)
  -10, -40, -70
```

```
>>> a = ['Mary', 'had', 'a', 'little', 'lamb']
>>> for i in range(len(a)):
...     print(i, a[i])
...
0 Mary
1 had
2 a
3 little
4 lamb
```

```
>>> sum(range(4))  # 0 + 1 + 2 + 3
6
```

```
>>> list(range(4))
[0, 1, 2, 3]
```


Source: [https://www.python.org/](https://www.python.org/)
