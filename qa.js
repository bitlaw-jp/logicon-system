var question = new Array("| ?-def(天皇, X, N).<br>", 
                          "X       = 象徴(日本国),",
                          "N       = 1",
                          "X       = 象徴(日本国民統合),",
                          "N       = 1",
                          "no");

var result = "天皇は日本国の象徴です。<br>天皇は日本国民統合の象徴です。<br>これらは第１条で規定されています。";


function functionName() {
  var select1 = document.forms.formName.selectName1; //変数select1を宣言
  var select2 = document.forms.formName.selectName2; //変数select2を宣言

  select2.options.length = 0; // 選択肢の数がそれぞれに異なる場合、これが重要
  var ele = document.getElementById("target"); // 自然言語形式の質問に置き換える

  if (select1.options[select1.selectedIndex].value == "def") {
    ele.innerHTML = "天皇ってどういうもの？";
    select2.options[0] = new Option("天皇");
    select2.options[1] = new Option("国会");
    select2.options[2] = new Option("内閣");
  }

  else if (select1.options[select1.selectedIndex].value == "can") {
    ele.innerHTML = "国民は何をすることができる？";
    select2.options[0] = new Option("国民");
    select2.options[1] = new Option("内閣総理大臣");
    select2.options[2] = new Option("天皇");
    select2.options[3] = new Option("国会議員");
  }

  else if (select1.options[select1.selectedIndex].value == "can_not") {
    ele.innerHTML = "国民は何をすることができない？";
    select2.options[0] = new Option("国民");
    select2.options[1] = new Option("裁判官");
  }
}

function functionName2() {
  var select1 = document.forms.formName.selectName1; //変数select1を宣言
  var select2 = document.forms.formName.selectName2; //変数select2を宣言

  var ele = document.getElementById("target"); // 自然言語形式の質問に置き換える

  var select1Val = select1.options[select1.selectedIndex].value;
  var select2Val = select2.options[select2.selectedIndex].value;

  if (select1Val == "def") {
    if (select2Val == "天皇") {
      ele.innerHTML = "天皇ってどういうもの？";
      question = new Array("| ?-def(天皇, X, N).<br>", 
                          "X       = 象徴(日本国),",
                          "N       = 1",
                          "X       = 象徴(日本国民統合),",
                          "N       = 1",
                          "no");
      result = "天皇は日本国の象徴です。<br>天皇は日本国民統合の象徴です。<br>これらは第１条で規定されています。";
    } else if (select2Val == "国会") {
      ele.innerHTML = "国会ってどういうもの？";
      question = new Array("def(国会, X, N).<br>",
                          "X       = 最高機関(国権),",
                          "N       = 41;",
                          "X       = 立法機関(唯一),",
                          "N       = 41;",
                          "X       = 構成する(両議院),",
                          "N       = 42;",
                          "X       = 設置(弾劾裁判所(組織(両議院議員)),for(裁判(罷免の訴追を受けた裁判官))),",
                          "N       = 64-1;",
                          "no");
    } else if (select2Val == "内閣") {
      ele.innerHTML = "内閣ってどういうもの？";
    }
  } 
  else if (select1Val == "can") {
    if (select2Val == "国民") {
      ele.innerHTML = "国民は何をすることができる？";
    } else if (select2Val == "内閣総理大臣") {
      ele.innerHTML = "内閣総理大臣は何をすることができる？";
    } else if (select2Val == "天皇") {
      ele.innerHTML = "天皇は何をすることができる？";
    } else if (select2Val == "国会議員") {
      ele.innerHTML = "国会議員は何をすることができる？";
    }
  } 
  else if (select1Val == "can_not") {
    if (select2Val == "国民") {
      ele.innerHTML = "国民は何をすることができない？";
    } else if (select2Val == "裁判官") {
      ele.innerHTML = "裁判官は何をすることができない？";
    }
  }
}


function questionBtn() {
  var select1 = document.forms.formName.selectName1; //変数select1を宣言
  var select2 = document.forms.formName.selectName2; //変数select2を宣言

  var select1Val = select1.options[select1.selectedIndex].value;
  var select2Val = select2.options[select2.selectedIndex].value;

  //var ele = document.getElementById("target2");
  //ele.innerHTML = question;
  initText();
}


dy = 18; //　文字の縦方向の間隔
speed = 30; //　文字の表示速度

//　文字の表示位置を初期化
function initText() {
  strX = 10; //　文字の表示X座標
  strY = document.body.clientHeight - dy; //　文字の最初の表示
  text = "";  //　表示テキスト
  count = 0;  //　文字の表示番号
  line = 0; //　文字の表示行数番号
  moveText();
}


//　文字の移動
function moveText() {
  if (line < question.length) {
    text += question[line].charAt(count);
    count++;
    if (count > question[line].length) {
      line++;
      strY -= dy;
      text += "<br>";
      count = 0;
    }
  }
  document.getElementById("target2").innerHTML = text;
  document.getElementById("target2").style.left = strX;
  document.getElementById("target2").style.top = strY;
  // document.getElementById("result").innerHTML = "結果";
  setTimeout("moveText()",speed); //　移動速度

  document.getElementById("result").innerHTML = result;

}
