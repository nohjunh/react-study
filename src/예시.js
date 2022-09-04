
예시 HTML

<html lang="ko">

<head>
  <meta charset="utf-8" />
  <title>가위 바위 보!</title>
  <link href="style.css" rel="stylesheet" />
</head>

<body cz-shortcut-listen="true">
  <div id="root">
    <div class="App">
      <h1 class="App-heading">가위바위보</h1>
      <img class="App-reset" src="ic-reset.svg" alt="초기화" />
      <div class="App-scores">
        <div class="Score">
          <div class="Score-num">0</div>
          <div class="Score-name">나</div>
        </div>
        <div class="App-versus">:</div>
        <div class="Score">
          <div class="Score-num">0</div>
          <div class="Score-name">상대</div>
        </div>
      </div>
      <div class="Box App-box">
        <div class="Box-inner">
          <div class="App-hands">
            <div class="Hand">
              <img class="Hand-icon" src="rock.svg" alt="rock" />
            </div>
            <div class="App-versus">VS</div>
            <div class="Hand">
              <img class="Hand-icon" src="rock.svg" alt="rock" />
            </div>
          </div>
          <div class="App-bet">
            <span>배점</span><input type="number" min="1" max="9" step="1" value="1" /><span>배</span>
          </div>
          <div class="App-history">
            <h2>승부기록</h2>
            <p></p>
          </div>
        </div>
      </div>
      <button class="HandButton">
        <img class="HandButton-icon" src="rock.svg" alt="rock" />
      </button>
      <button class="HandButton">
        <img class="HandButton-icon" src="scissor.svg" alt="scissor" />
      </button>
      <button class="HandButton">
        <img class="HandButton-icon" src="paper.svg" alt="paper" />
      </button>
    </div>
  </div>
</body>

</html>
예시 CSS

@font-face {
  font-style: normal;
  font-weight: normal;
  font-family: 'GmarketSansMedium';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
}

.Box, .Box-inner {
  border-radius: 35px;
}

.Box {
  padding: 5px;
  box-shadow: 0 3px 8px 0 rgba(56, 15, 110, 0.44);
}

.Box-inner {
  width: 100%;
  max-width: 520px;
  border: 6px solid #6e08fc;
  box-shadow: inset 0 3px 8px 0 rgba(56, 15, 110, 0.44);
}

.Hand {
  display: inline-block;
  width: 207px;
  height: 207px;
  text-align: center;
  background-image: url(yellow.svg);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
}

.Hand-icon {
  opacity: 0.87;
  width: 70px;
  height: 70px;
  margin: 70px auto 0;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.Hand.winner {
  background-image: url(yellow-win.svg);
}

.HandButton {
  width: 166px;
  height: 166px;
  border: none;
  outline: none;
  text-align: center;
  cursor: pointer;
  background-color: transparent;
  background-image: url(purple.svg);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: contain;
}

.HandButton-icon {
  opacity: 0.45;
  width: 55px;
  height: 55px;
}

.HandButton:hover {
  background-image: url(yellow.svg);
}

.HandButton:hover .HandButton-icon {
  opacity: 0.87;
}

.Score {
  display: inline-block;
  min-width: 130px;
  height: 130px;
  padding: 28px 35px;
  border-radius: 27px;
  background-color: #6000db;
  box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.07);
}

.Score-num {
  color: #fc0;
  font-weight: 700;
  font-size: 47px;
  line-height: 1;
  text-align: center;
  text-shadow: 0 3px 0 #af8d07;
}

.Score-name {
  margin-top: 14px;
  color: #9680ff;
  font-weight: 700;
  font-size: 15px;
  font-family: GmarketSans;
  letter-spacing: -0.3px;
}

.App {
  position: relative;
  width: 100%;
  min-width: 575px;
  max-width: 620px;
  margin: 45px auto;
  padding: 50px;
  border-radius: 44px;
  text-align: center;
  background: #6f00ff;
  background-color: #6f00ff;
  box-shadow: 0 4.2px 2px #5900cc, 0 -4.2px 2px #8500ff;
}

.App-heading {
  margin: 0 0 34px;
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  text-shadow: 0 3px 0 #a875e9;
  letter-spacing: 0.19px;
  -webkit-text-stroke: 1px #fff;
}

.App-reset {
  position: absolute;
  top: 48px;
  right: 49px;
  cursor: pointer;
}

.App-box {
  margin: 26px 0 23px;
}

.App-scores>* {
  display: inline-block;
  vertical-align: middle;
}

.App-scores>.App-versus {
  margin: 0 7px;
  color: #fff;
  font-size: 64px;
}

.App-hands>* {
  display: inline-block;
  vertical-align: middle;
}

.App-hands>.App-versus {
  color: #fff;
  font-weight: 700;
  font-size: 22px;
  text-shadow: 0 3px 0 hsla(0, 0%, 87.5%, 0.5);
  letter-spacing: -0.33px;
}

.App-bet {
  margin-top: -15px;
  color: #fff;
  font-size: 17px;
}

.App-bet>* {
  vertical-align: middle;
}

.App-bet>input {
  width: 73px;
  margin: 0 9px;
  padding: 14px 10px;
  border: 2px solid #753cf7;
  border-radius: 10px;
  color: #fff;
  font-size: 17px;
  background-color: #6000db;
}

.App-history {
  margin: 20px 40px 36px;
  padding: 30px 47px;
  border-radius: 19px;
  color: #625f63;
  background-color: #fff;
  box-shadow: 0 3px 8px 0 rgba(89, 72, 112, 0.44), 0 5px 3px rgba(215, 189, 248, 0.65);
}

.App-history>h2 {
  margin: 0;
  color: #6000db;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.24px;
}

* {
  box-sizing: border-box;
  font-family: 'GmarketSansMedium', sans-serif;
}

body {
  background-color: #40089a;
}