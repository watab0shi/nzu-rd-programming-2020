---
title: 三角関数
description: ''
position: 6.12
category: p5.js
---

`sin` `cos` を使うことで円周上の座標を作成することができます。

## 円周上の座標を算出する

```javascript
// 書き方
let x = 円の中心X + cos(角度（ラジアン）) * 円の半径;
let y = 円の中心Y + sin(角度（ラジアン）) * 円の半径;

// サンプル
let angle = PI;
let r = 150;
let x = 200 + cos(angle) * r;
let y = 200 + sin(angle) * r;
```

<alert type="success">

スケッチ名：`transform-translate`  
`sin` `cos` 関数を使って、<strong>座標変換を使わずに</strong>円周上に回る円を描画してみよう！  

</alert>

<live-demo src="/resource/livedemo/p5js/trigonometric/circular/"></live-demo>

<alert type="success">

スケッチ名：`transform-translate`  
`sin` `cos` 関数を使って、座標変換を使わずに<strong>30個の円を円周上に配置</strong>してみよう！

</alert>

<live-demo src="/resource/livedemo/p5js/trigonometric/circular-align/"></live-demo>

### 背景をフェードさせる

`background` ではなく、`fill` でアルファ（不透明度）を指定した全画面の矩形で塗りつぶすことで、残像を残すことができます。

[examples | p5.js](https://p5js.org/examples/structure-create-graphics.html)

```javascript
// background(0);
noStroke();
fill(0, 8);// 色の指定に二つ引数を入れたときは、二つ目はアルファ（不透明度）になる
rect(0, 0, width, height);
```

<live-demo src="/resource/livedemo/p5js/trigonometric/circular-fade/"></live-demo>


### リサジュー図形

`sin` `cos` の周期をそれぞれバラバラの数を掛けることでリサジュー図形と呼ばれる図形を描くことができます。

[リサジュー図形 - Wikipedia](https://ja.wikipedia.org/wiki/%E3%83%AA%E3%82%B5%E3%82%B8%E3%83%A5%E3%83%BC%E5%9B%B3%E5%BD%A2)

`x = cos(angle)`  
`y = sin(angle * 3)`
<live-demo src="/resource/livedemo/p5js/trigonometric/lissajous-1/"></live-demo>

`x = cos(angle * 7)`  
`y = sin(angle * 4)`
<live-demo src="/resource/livedemo/p5js/trigonometric/lissajous-2/"></live-demo>
