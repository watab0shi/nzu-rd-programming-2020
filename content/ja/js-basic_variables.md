---
title: 変数
description: ''
position: 20.3
category: JavaScript基礎
---

```javascript
// 書き方
let 変数名;// 変数定義
変数名 = 値;// 代入
let 変数名 = 値;// 変数定義 & 代入

// サンプル
let num;// 変数定義
num = 123;// 代入
let num = 123;// 変数定義 & 代入
```

<alert type="warning">

変数に代入をせず定義のみ行なった場合、その時点では変数の中身が未定義（`undefined`）になり、バグの原因になったりします。  
変数定義と同時に代入できるときはしましょう。

</alert>

## 変数の更新

### 加算

```javascript
変数名 = 変数名 + 1;// 1 を足す
変数名 += 1;// 1 を足す
```

#### インクリメント
変数に `1` を足すときのみ使える省略記法です。

```javascript
変数名++;// 1 を足す
```

### 減算

```javascript
変数名 = 変数名 - 1;// 1 を引く
変数名 -= 1;// 1 を引く
```

#### デクリメント

変数から `1` を引くときのみ使える省略記法です。

```javascript
変数名--;// 1 を引く
```