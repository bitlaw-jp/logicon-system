var question = new Array("| ?-def(天皇, X, N).<br>", 
                          "X       = 象徴(日本国),",
                          "N       = 1;",
                          "X       = 象徴(日本国民統合),",
                          "N       = 1");

var result = "天皇ってなに？<br><br>天皇は日本国の象徴です。(第１条)<br>天皇は日本国民統合の象徴です。(第１条)";


function functionName() {
  var select1 = document.forms.formName.selectName1; //変数select1を宣言
  var select2 = document.forms.formName.selectName2; //変数select2を宣言

  select2.options.length = 0; // 選択肢の数がそれぞれに異なる場合、これが重要
  var ele = document.getElementById("target"); // 自然言語形式の質問に置き換える

  if (select1.options[select1.selectedIndex].value == "def") {
    ele.innerHTML = "天皇ってなに？";
    select2.options[0] = new Option("天皇");
    select2.options[1] = new Option("皇位");
    select2.options[2] = new Option("国事行為");
  }

  else if (select1.options[select1.selectedIndex].value == "by") {
    ele.innerHTML = "天皇の地位は何で定められている？";
    select2.options[0] = new Option("天皇");
    select2.options[1] = new Option("皇位");
    select2.options[1] = new Option("摂政");
  }

  else if (select1.options[select1.selectedIndex].value == "need") {
    ele.innerHTML = "国事行為に必要なものは？";
    select2.options[0] = new Option("国事行為");
    select2.options[1] = new Option("");
  }

  else if (select1.options[select1.selectedIndex].value == "res") {
    ele.innerHTML = "国事行為の責任はどこにありますか？";
    select2.options[0] = new Option("国事行為");
    select2.options[1] = new Option("");
  }

  else if (select1.options[select1.selectedIndex].value == "do") {
    ele.innerHTML = "天皇はなにをするの？";
    select2.options[0] = new Option("天皇");
    select2.options[1] = new Option("");
  }

  else if (select1.options[select1.selectedIndex].value == "have_not") {
    ele.innerHTML = "天皇が持たないものは？";
    question = new Array("have_not(天皇, X, N).<br>",
                          "X       = 国政に関する権能,",
                          "N       = 4-1");
      result = "天皇が持たないものは？<br><br>国政に関する権能です。(第4条第1項)";
    select2.options[0] = new Option("天皇");
    select2.options[1] = new Option("");
  }

  else if (select1.options[select1.selectedIndex].value == "can") {
    ele.innerHTML = "天皇ができることは？";
    select2.options[0] = new Option("天皇");
    select2.options[1] = new Option("");
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
      ele.innerHTML = "天皇ってなに？";
      question = new Array("| ?-def(天皇, X, N).<br>", 
                          "X       = 象徴(日本国),",
                          "N       = 1;",
                          "X       = 象徴(日本国民統合),",
                          "N       = 1");
      result = "天皇ってなに？<br><br>天皇は日本国の象徴です。(第１条)<br>天皇は日本国民統合の象徴です。(第１条)";
    } else if (select2Val == "皇位") {
      ele.innerHTML = "皇位とはなんですか？";
      question = new Array("def(皇位, X, N).<br>",
                          "X       = 世襲のもの,",
                          "N       = 2");
      result = "皇位とはなんですか？<br><br>皇位とは世襲のものです。(第2条)";
    } else if (select2Val == "国事行為") {
      ele.innerHTML = "国事行為ってなに？";
      question = new Array("def(国事行為, X, N).<br>",
                          "X       = 天皇の国事に関するすべての行為,",
                          "N       = 3;",
                          "X       = 公布(憲法改正,法律,政令,条約),",
                          "X       = 召集(国会),",
                          "X       = 解散(衆議院),",
                          "X       = 公示(国会議員の総選挙),",
                          "X       = 任免(国務大臣及び法律の定めるその他の官吏),",
                          "X       = 認証(全権委任状及び公使の信任状),",
                          "X       = 大赦,",
                          "X       = 特赦,",
                          "X       = 減刑,",
                          "X       = 免除(刑の執行),",
                          "X       = 認証(復権),",
                          "X       = 授与(栄典),",
                          "X       = 認証(批准書及び法律の定めるその他の外交文書),",
                          "X       = 接受(外国の大使及び公使),",
                          "X       = 儀式,",
                          "N       = 7;");
      result = "国事行為ってなに？<br><br>国事行為とは天皇の国事に関するすべての行為です。(第3条)<br>憲法改正,法律,政令,条約の公布、国会の召集、衆議院の解散、国会議員の総選挙の公示、国務大臣及び法律の定めるその他の官吏の任免、全権委任状及び公使の信任状の認証、大赦、特赦、減刑、刑の執行の免除、復権の認証、栄典の授与、批准書及び法律の定めるその他の外交文書の認証、外国の大使及び公使の接受、儀式があります。(第7条)";
    }
  }

  else if (select1Val == "by") {
    if (select2Val == "天皇") {
      ele.innerHTML = "天皇の地位は何で定められている？";
      question = new Array("by(天皇, X, N).<br>",
                          "X       = 基づく(地位,日本国民の総意),",
                          "N       = 1");
      result = "天皇の地位は何で定められている？<br><br>天皇の地位は日本国民の総意に基づいています。(第1条)";
    } else if (select2Val == "皇位") {
      ele.innerHTML = "皇位は何で定められている？";
      question = new Array("by(皇位, X, N).<br>",
                          "X       = 継承する(皇室典範の定め),",
                          "N       = 2");
      result = "皇位は何で定められている？<br><br>皇位は皇室典範の定めで継承されます(第2条)";
    } else if (select2Val == "天皇") {
      ele.innerHTML = "天皇は何をすることができる？";
    } else if (select2Val == "国会議員") {
      ele.innerHTML = "国会議員はなにをすることができる？";
    } else if (select2Val == "摂政") {
      ele.innerHTML = "摂政は何で定められている？";
      question = new Array("by(摂政, X, N).<br>",
                          "X       = 定める(皇室典範),",
                          "N       = 5");
      result = "摂政は何で定められている？<br><br>皇室典範で定められています(第5条)";
    }
  }

  else if (select1Val == "need") {
    if (select2Val == "国事行為") {
      ele.innerHTML = "国事行為に必要なものは？";
      question = new Array("need(国事行為, X, N).<br>",
                          "X       = 内閣の助言,",
                          "N       = 3;",
                          "X       = 内閣の承認,",
                          "N       = 3");
      result = "国事行為に必要なものは？<br><br>内閣の助言と内閣の承認です。(第3条)";
    } else if (select2Val == "裁判官") {
      ele.innerHTML = "裁判官はなにをすることができない？";
    }
  }

  else if (select1Val == "res") {
    if (select2Val == "国事行為") {
      ele.innerHTML = "国事行為の責任はどこにありますか？";
      question = new Array("res(国事行為, X, N).<br>",
                          "X       = 責任(内閣),",
                          "N       = 3");
      result = "国事行為の責任はどこにありますか？<br><br>内閣の責任です。(第3条)";
    } else if (select2Val == "裁判官") {
      ele.innerHTML = "裁判官はなにをすることができない？";
    }
  }

  else if (select1Val == "do") {
    if (select2Val == "天皇") {
      ele.innerHTML = "天皇はなにをするの？";
      question = new Array("do(天皇, X, N).<br>",
                          "X       = 国事行為,",
                          "N       = 4-1;",
                          "X       = 任命(内閣総理大臣,by(国会の指名)),",
                          "N       = 6-1;",
                          "X       = 任命(最高裁判所裁判長,by(内閣の指名)),",
                          "N       = 6-2;",
                          "X       = 国事行為(by(内閣の助言と承認),for(国民のために)),",
                          "N       = 7;",
                          "X       = 公布(憲法(case(承認(96-1)),on(名(国民)),for(憲法と一体を成すもの))),",
                          "N       = 96-2");
      result = "天皇はなにをするの？<br><br>国事行為(第4条第1項)<br>国会の指名による内閣総理大臣の任命(第6条第1項)<br>国民のための内閣の助言と承認による国事行為(第7条)<br>96-1の承認を得た場合、国民の名での憲法と一体を成すものとしての憲法の公布(第96条第2項)";
    } else if (select2Val == "裁判官") {
      ele.innerHTML = "裁判官はなにをすることができない？";
    }
  }

  else if (select1Val == "have_not") {
    if (select2Val == "天皇") {
      ele.innerHTML = "天皇が持たないものは？";
      question = new Array("have_not(天皇, X, N).<br>",
                          "X       = 国政に関する権能,",
                          "N       = 4-1");
      result = "天皇が持たないものは？<br><br>国政に関する権能です。(第4条第1項)";
    } else if (select2Val == "裁判官") {
      ele.innerHTML = "裁判官はなにをすることができない？";
    }
  }

  else if (select1Val == "can") {
    if (select2Val == "天皇") {
      ele.innerHTML = "天皇ができることは？";
      question = new Array("can(天皇, X, N).<br>",
                          "X       = 委任(国事行為,by(法律)),",
                          "N       = 4-2");
      result = "天皇ができることは？<br><br>法律により、国事行為の委任ができます。(第4条第2項)";
    } else if (select2Val == "裁判官") {
      ele.innerHTML = "裁判官はなにをすることができない？";
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
