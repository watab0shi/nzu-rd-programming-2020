---
title: 図形を描く
description: ''
position: 6.3
category: p5.js
---

<!-- ### colorModeについて -->

## 座標系

プログラムでグラフィックを描画するにあたって、まず画面の座標系を把握しておく必要があります。
例えば、点をひとつ描画するにしてもどこのピクセルに点を打つのかを正確に数字で示さないといけません。

<static-img src="resource/image/p5js_primitives.png"></static-img>

数学のグラフを上下逆さまにしたものと思ってください。
2Dの座標系の場合は<strong>左上が原点で、右に行くほど x がプラス、下に行くほど y がプラス</strong>になります。



## point関数

中心座標を指定して点を描画します。

[point() reference | p5.js](https://p5js.org/reference/#/p5/point)

### stroke関数

p5.jsでは点は線扱いなので、点の色を指定するには線の色を指定する `stroke` 関数を使用します。

色の指定は `background` 関数と同じく、`0` ~ `255` の値で グレースケール か RGB を指定します。

[stroke() reference | p5.js](https://p5js.org/reference/#/p5/stroke)

### strokeWeight関数

p5.jsでは点は線扱いなので、点の大きさを指定するには線の太さを指定する `strokeWeight` 関数を使用します。

[strokeWeight() reference | p5.js](https://p5js.org/reference/#/p5/strokeWeight)

## line関数

始点、終点の座標を指定して線分を描画します。

[line() reference | p5.js](https://p5js.org/reference/#/p5/line)

## rect関数

[rect() reference | p5.js](https://p5js.org/reference/#/p5/rect)

### fill関数

図形の塗りつぶしの色を指定します。

色の指定は `background` 関数と同じく、`0` ~ `255` の値で グレースケール か RGB を指定します。

[rect() reference | p5.js](https://p5js.org/reference/#/p5/rect)

## circle関数

[circle() reference | p5.js](https://p5js.org/reference/#/p5/circle)

## ellipse関数

[ellipse() reference | p5.js](https://p5js.org/reference/#/p5/ellipse)

## triangle関数

[triangle() reference | p5.js](https://p5js.org/reference/#/p5/triangle)

<alert type="success">

上記の描画関数をそれぞれ少なくとも一回以上使って簡単な絵を書いてみましょう！  
ひとつのスケッチに無理して全ての関数を詰め込む必要はないので、複数のスケッチで合計して上記全ての関数を使っていれば大丈夫です。

</alert>



## 変数

```javascript
let 変数名;

let 変数名 = 値;
```

### Number（数値）

### String（文字列）

### Boolean（真偽値）

`true` / `false`

### 配列

### 条件分岐

### 繰り返し：while文

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
  background(220);

  let x = 50;
  while (x < 400) {
    line(x, 180, x, 220);
    x += 50;
  }
}
```

#### ライブデモ

<live-demo src="resource/livedemo/p5js/loop/while/"></live-demo>

### 繰り返し：for文

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
  background(220);

  for (let x = 50; x < 400; x += 50) {
    line(x, 180, x, 220);
  }
}
```

#### ライブデモ

<live-demo src="resource/livedemo/p5js/loop/for/"></live-demo>


### 繰り返し：for文

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
  background(220);

  for (let i = 0; i < 7; i++) {
    let x = (i * 50) + 50;
    line(x, 180, x, 220);
  }
}
```

#### ライブデモ

<live-demo src="resource/livedemo/p5js/loop/for-times/"></live-demo>


### ブロック / スコープ / インデント

`{`と`}`で囲まれた中身をブロックといいます。

```javascript[sketch.js]
let global = 123;

function setup() {
  let scoped = 456;

  print(global);
  print(scoped);
}

print(global);
print(scoped);
```

#### インデント（字下げ）
JavaScriptにおけるインデントはプログラムを読みやすくするためのものです。

```javascript[sketch.js]
function setup() {
  // ← スペース2つ

  if (true) {
    // ← スペース4つ
  }
}
```

JavaScriptはインデントに厳しくないため記述しなくてもプログラムは動作しますが、インデントがないとどこまでがどのブロックでこの変数はどこまで有効なのかが把握しにくくなってしまいます。

メニューバー > Edit > Tidy Code でコード整形をすることができます。
タブを閉じる前に必ずコード整形をしましょう。

### コーディングのコツ

例えば`background(255, 200, 200);`と書きたい場合、

関数名を書く
`background`

先に関数のカッコ`()`を閉じる
`background()`

行末にセミコロンをつける
`background();`

引数を入れる
`background(255, 255, 255);`


### エラーの読み方

<alert type="danger">`関数/変数名 is not defined (sketch: line 6)`</alert>

スケッチの6行目にある`関数/変数名`は宣言されていません

<alert type="danger">`Uncaught SyntaxError: missing ) after argument list (sketch: line 10)`</alert>

構文エラー：スケッチ10行目の引数リストの後ろに`)`がありません

セミコロンを書かなくてもプログラムは動いてしまいます。