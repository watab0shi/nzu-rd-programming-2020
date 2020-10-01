---
title: 図形を描く
description: ''
position: 6.3
category: p5.js
---

## 座標系

プログラムでグラフィックを描画するにあたって、まず画面の座標系を把握しておく必要があります。
例えば、点をひとつ描画するにしてもどこのピクセルに点を打つのかを正確に数字で示さないといけません。

<img src="/resource/image/p5js_primitives.png"/>

数学のグラフを上下逆さまにしたものと思ってください。
2Dの座標系の場合は<strong>左上が原点で、右に行くほど x がプラス、下に行くほど y がプラス</strong>になります。

## point関数

座標を指定して点を描画します。  
デフォルトだと1ピクセルの点が描画されます。  

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  point(200, 200);
}
```

めちゃくちゃ小さくてわかりづらいですが、ちゃんと表示されています。

<live-demo src="/resource/livedemo/p5js/primitives/point/"></live-demo>

[point() reference | p5.js](https://p5js.org/reference/#/p5/point)

### strokeWeight関数

`p5.js` では `point` は線扱いなので、`point` の大きさを指定するには線の太さを指定する `strokeWeight` 関数を使用します。  
`strokeWeight` が適用される関数の前に実行します。

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  strokeWeight(15);// 線の太さを 15px に指定
  point(200, 200);
}
```

<live-demo src="/resource/livedemo/p5js/primitives/strokeWeight/"></live-demo>

[strokeWeight() reference | p5.js](https://p5js.org/reference/#/p5/strokeWeight)

### stroke関数

`p5.js` では `point` は線扱いなので、`point` の色を指定するには線の色を指定する `stroke` 関数を使用します。  
色の指定は `background` 関数と同じく、`0` ~ `255` の値で グレースケール か RGB を指定します。  
`stroke` を指定していない場合は線の色は黒色になります。  
図形が描画される前に実行します。

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  stroke(0, 205, 129);// 線の色を緑に指定
  strokeWeight(15);
  point(200, 200);
}
```

<live-demo src="/resource/livedemo/p5js/primitives/stroke/"></live-demo>

[stroke() reference | p5.js](https://p5js.org/reference/#/p5/stroke)

## line関数

始点、終点の座標を指定して線分を描画します。

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  line(50, 50, 350, 350);// (50, 50) から (350, 350) に線を引く
}
```

<live-demo src="/resource/livedemo/p5js/primitives/line/"></live-demo>

[line() reference | p5.js](https://p5js.org/reference/#/p5/line)

## rect関数

左上の点と幅、高さを指定して矩形（四角形）を描画します。

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rect(150, 150, 100, 100);// 左上を (150, 150) とする、幅100px 高さ100px の矩形を描画
}
```

<live-demo src="/resource/livedemo/p5js/primitives/rect/"></live-demo>

[rect() reference | p5.js](https://p5js.org/reference/#/p5/rect)

### rectMode関数

`rect` 関数の座標を左上で指定するか、中心座標で指定するかを設定できます。

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  rectMode(CORNER);// 矩形の左上座標指定モード
  rect(150, 150, 100, 100);
  rectMode(CENTER);// 矩形の中心座標指定モード
  rect(150, 150, 100, 100);
}
```

<live-demo src="/resource/livedemo/p5js/primitives/rectMode/"></live-demo>


[rectMode() reference | p5.js](https://p5js.org/reference/#/p5/rectMode)

### noStroke関数

図形の線を非表示にします。
デフォルトでは線と塗りの両方が表示されるため、塗りのみ表示したい場合に使用します。

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();// 線を非表示
  rect(150, 150, 100, 100);
}
```

<live-demo src="/resource/livedemo/p5js/primitives/noStroke/"></live-demo>

[noStroke() reference | p5.js](https://p5js.org/reference/#/p5/noStroke)

### fill関数

図形の塗りつぶしの色を指定します。  
色の指定は `background` 関数と同じく、`0` ~ `255` の値で グレースケール か RGB を指定します。  
図形が描画される前に実行します。

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  fill(0, 205, 129);// 塗りの色を緑に指定
  rect(150, 150, 100, 100);
}
```

<live-demo src="/resource/livedemo/p5js/primitives/fill/"></live-demo>

[fill() reference | p5.js](https://p5js.org/reference/#/p5/fill)

## circle関数

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(200, 200, 100);// (200, 200) に 直径100px の正円を描画
}
```

<live-demo src="/resource/livedemo/p5js/primitives/circle/"></live-demo>

[circle() reference | p5.js](https://p5js.org/reference/#/p5/circle)

## ellipse関数

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(200, 200, 100, 50);// (200, 200) に 幅100px 高さ50px の楕円を描画
}
```

<live-demo src="/resource/livedemo/p5js/primitives/ellipse/"></live-demo>

[ellipse() reference | p5.js](https://p5js.org/reference/#/p5/ellipse)

## triangle関数

３点の座標を指定して、三角形を描画します。

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  triangle(150, 150, 250, 150, 200, 240);// (150, 150) (250, 150) (200, 240) からなる三角形を描画
}
```

<live-demo src="/resource/livedemo/p5js/primitives/triangle/"></live-demo>

[triangle() reference | p5.js](https://p5js.org/reference/#/p5/triangle)

<alert type="success">

上記全ての描画関数を少なくとも一回以上使って簡単な絵を書いてみましょう！（なんでも構いません、アイスクリームでも、顔でもキャラのデフォルメでも）  
ひとつのスケッチに無理して全ての関数を詰め込む必要はないので、複数のスケッチで合計して上記全ての関数を使っていれば大丈夫です。  
保存するスケッチの名前は `primitives-{ 絵の名前 }`（例 顔を描いたスケッチの場合：`primitives-face`）としてください。
少なくともひとり５枚は制作しましょう！

</alert>


## エラーの読み方

<alert type="danger">

`🌸 p5.js says: circle() was expecting at least 3 arguments, but received only 2`

</alert>

`cirlce()` 関数は３つの引数をとりますが、２つしか入っていません。

<alert type="danger">

`関数名 is not defined (sketch: line 6)`

</alert>

スケッチの6行目にある `関数名` は宣言されていません。  
スペルミスの可能性があります。

<alert type="danger">

`Uncaught SyntaxError: missing ) after argument list (sketch: line 10)`

</alert>

構文エラー：スケッチ10行目の引数リストの後ろに`)`がありません

上記のような単純なエラーであれば、エラーコードをコピペで翻訳するだけでなんとなく意味がわかるのですが、場合によっては原因と関係のない場所でエラーが出ることもあります。  一度翻訳をかけてみて、まるで意味がわからなかったら聞いてください。


<!-- ### 配列

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

<live-demo src="/resource/livedemo/p5js/loop/while/"></live-demo>

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

<live-demo src="/resource/livedemo/p5js/loop/for/"></live-demo>


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

<live-demo src="/resource/livedemo/p5js/loop/for-times/"></live-demo>


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


### エラーの読み方

<alert type="danger">`関数/変数名 is not defined (sketch: line 6)`</alert>

スケッチの6行目にある`関数/変数名`は宣言されていません

<alert type="danger">`Uncaught SyntaxError: missing ) after argument list (sketch: line 10)`</alert>

構文エラー：スケッチ10行目の引数リストの後ろに`)`がありません -->
