---
title: 概要
description: ''
position: 1.0
category: ''
---

## 演習内容

<div class="flex justify-around items-center">
  <img src="/resource/image/common_logo-js.svg" width="128" height="128" alt="JavaScriptロゴ"/>
  <img src="/resource/image/common_logo-p5js.svg" width="128" height="58" alt="p5.js"//>
</div>

<strong>JavaScript</strong>（じゃばすくりぷと）の基礎を学びながら、そのライブラリである<strong>p5.js</strong>（ぴーふぁいぶじぇーえす）を使用して<strong>ジェネラティブアート / インタラクティブアートの制作</strong>を行います。

## この資料の見方

それぞれ以下のように表示されます。

### プログラム

```javascript[sketch.js]
function setup() {
  createCanvas(400, 400);
}

function draw() {
  let brightness = frameCount % 255;
  background(brightness);
}
```

### 実行結果

<live-demo src="/resource/livedemo/p5js/intro/"></live-demo>

### 補足情報

<alert>

猫派です🐈

</alert>

### 注意事項

<alert type="warning">

熊出没注意！

</alert>

### エラー

<alert type="danger">

`Uncaught SyntaxError: Unexpected token ';' (sketch: line 6)`

</alert>

### 作業箇所

<alert type="success">

○○○を使ったコードを書いてみましょう！

</alert>

### カラーテーマ

<div class="flex items-center">
  <p>このボタンでページのカラーテーマを変更できます：</p>
  <app-color-switcher></app-color-switcher>
</div>

ライトモード / ダークモード の好きなほうを使ってください。  
モード切り替えボタンは全てのページの最下部の右側にあります。