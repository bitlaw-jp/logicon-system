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
    select2.options[3] = new Option("基本的人権");
  }

  else if (select1.options[select1.selectedIndex].value == "by") {
    ele.innerHTML = "天皇の地位は何で定められている？";
    question = new Array("by(天皇, X, N).<br>",
                          "X       = 基づく(地位,日本国民の総意),",
                          "N       = 1");
      result = "天皇の地位は何で定められている？<br><br>天皇の地位は日本国民の総意に基づいています。(第1条)";
    select2.options[0] = new Option("天皇");
    select2.options[1] = new Option("皇位");
    select2.options[2] = new Option("摂政");
    select2.options[3] = new Option("皇室への財産譲渡");
    select2.options[4] = new Option("皇室の財産譲受");
    select2.options[5] = new Option("皇室の財産賜与");
    select2.options[6] = new Option("日本国民の要件");
  }

  else if (select1.options[select1.selectedIndex].value == "need") {
    ele.innerHTML = "国事行為に必要なものは？";
    question = new Array("need(国事行為, X, N).<br>",
                          "X       = 内閣の助言,",
                          "N       = 3;",
                          "X       = 内閣の承認,",
                          "N       = 3");
      result = "国事行為に必要なものは？<br><br>内閣の助言と内閣の承認です。(第3条)";
    select2.options[0] = new Option("国事行為");
    select2.options[1] = new Option("生命、自由及び幸福追求の権利");
  }

  else if (select1.options[select1.selectedIndex].value == "res") {
    ele.innerHTML = "国事行為の責任はどこにありますか？";
    question = new Array("res(国事行為, X, N).<br>",
                          "X       = 責任(内閣),",
                          "N       = 3");
      result = "国事行為の責任はどこにありますか？<br><br>内閣の責任です。(第3条)";
    select2.options[0] = new Option("国事行為");
    select2.options[1] = new Option("国民");
  }

  else if (select1.options[select1.selectedIndex].value == "do") {
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
    select2.options[0] = new Option("天皇");
    select2.options[1] = new Option("摂政");
  }

  else if (select1.options[select1.selectedIndex].value == "have_not") {
    ele.innerHTML = "天皇が持たないものは？";
    question = new Array("have_not(天皇, X, N).<br>",
                          "X       = 国政に関する権能,",
                          "N       = 4-1");
      result = "天皇が持たないものは？<br><br>国政に関する権能です。(第4条第1項)";
    select2.options[0] = new Option("天皇");
    select2.options[1] = new Option("日本");
  }

  else if (select1.options[select1.selectedIndex].value == "can") {
    ele.innerHTML = "天皇ができることは？";
    question = new Array("can(天皇, X, N).<br>",
                          "X       = 委任(国事行為,by(法律)),",
                          "N       = 4-2");
      result = "天皇ができることは？<br><br>法律により、国事行為の委任ができます。(第4条第2項)";
    select2.options[0] = new Option("天皇");
    select2.options[1] = new Option("");
  }

  else if (select1.options[select1.selectedIndex].value == "apply") {
    ele.innerHTML = "摂政について関係する規定は？";
    question = new Array("apply(摂政, X, N).<br>",
                          "X       = 4-1,",
                          "N       = 5");
      result = "摂政について関係する規定は？<br><br>第4条第1項があります。(第5条)";
    select2.options[0] = new Option("摂政");
    select2.options[1] = new Option("");
  }

  else if (select1.options[select1.selectedIndex].value == "call") {
    ele.innerHTML = "日本国民が求めるものは？";
    question = new Array("call(日本国民, X, N).<br>",
                          "X       = 正義と秩序を基調とする国際平和,",
                          "N       = 9-1");
      result = "日本国民が求めるものは？<br><br>日本国民は正義と秩序を基調とする国際平和を求めます。(第9条第1項)";
    select2.options[0] = new Option("日本国民");
    // select2.options[1] = new Option("");
  }

  else if (select1.options[select1.selectedIndex].value == "renounce") {
    ele.innerHTML = "日本国民が放棄するものは？";
    question = new Array("renounce(日本国民, X, N).<br>",
                          "X       = 国権の発動たる戦争(as(国際紛争を解決する手段)),",
                          "X       = 武力による威嚇又は武力の行使(as(国際紛争を解決する手段)),",
                          "N       = 9-1");
      result = "日本国民が放棄するものは？<br><br>日本国民は国際紛争を解決する手段としての国権の発動たる戦争を放棄します。<br>日本国民は国際紛争を解決する手段としての武力による威嚇又は武力の行使を放棄します。(第9条第1項)";
    select2.options[0] = new Option("日本国民");
    // select2.options[1] = new Option("");
  }

  else if (select1.options[select1.selectedIndex].value == "not_recognize") {
    ele.innerHTML = "日本では何が認められない？";
    question = new Array("not_recognize(日本, X, N).<br>",
                          "X       = 国の交戦権,",
                          "N       = 9-2");
      result = "日本では何が認められない？<br><br>日本では国の交戦権が認められません。(第9条第2項)";
    select2.options[0] = new Option("日本");
    // select2.options[1] = new Option("");
  }

  else if (select1.options[select1.selectedIndex].value == "not_be_prevented") {
    ele.innerHTML = "国民は何を妨げられない？";
    question = new Array("not_be_prevented(国民, X, N).<br>",
                          "X       = 基本的人権の享有,",
                          "N       = 11");
      result = "国民は何を妨げられない？<br><br>国民は基本的人権の享有を妨げられません。(第11条)";
    select2.options[0] = new Option("国民");
    // select2.options[1] = new Option("");
  }

  else if (select1.options[select1.selectedIndex].value == "guarantee") {
    ele.innerHTML = "憲法が保障するものは？";
    question = new Array("guarantee(憲法, X, N).<br>",
                          "X       = 基本的人権の享有,",
                          "N       = 11",
                          "X       = 成年者による普通選挙(公務員の選挙),",
                          "N       = 15-3;",
                          "X       = 思想及び良心の自由,",
                          "N       = 19;",
                          "X       = 信教の自由,",
                          "N       = 20-1;",
                          "X       = 集会の自由,",
                          "N       = 21-1;",
                          "X       = 結社の自由,",
                          "N       = 21-1;",
                          "X       = 言論の自由,",
                          "N       = 21-1;",
                          "X       = 出版の自由,",
                          "N       = 21-1;",
                          "X       = 表現の自由,",
                          "N       = 21-1;",
                          "X       = 学問の自由,",
                          "N       = 23;",
                          "X       = 団結権(for(勤労者)),",
                          "N       = 28;",
                          "X       = 団体交渉権(for(勤労者)),",
                          "N       = 28;",
                          "X       = 団体行動権(for(勤労者)),",
                          "N       = 28;",
                          "X       = 基本的人権(for(日本国民)),",
                          "N       = 97;");
      result = "憲法が保障するものは？<br><br>基本的人権の享有(第11条)<br>公務員の選挙での成年者による普通選挙(第15条第3項)<br>思想及び良心の自由(第19条)<br>信教の自由(第20条第1項)<br>集会の自由、結社の自由、言論の自由、出版の自由、表現の自由(第21条第1項)<br>学問の自由(第23条)<br>勤労者の団結権、勤労者の団体交渉権、勤労者の団体行動権(第28条)<br>日本国民の基本的人権(第97条)";
    select2.options[0] = new Option("憲法");
    // select2.options[1] = new Option("");
  }

  else if (select1.options[select1.selectedIndex].value == "confer") {
    ele.innerHTML = "基本的人権は誰に与えられる？";
    question = new Array("confer(基本的人権, X, N).<br>",
                          "X       = 現在及び将来の国民,",
                          "N       = 11");
      result = "基本的人権は誰に与えられる？<br><br>基本的人権は、現在及び将来の国民に与えられます。(第11条)";
    select2.options[0] = new Option("基本的人権");
    // select2.options[1] = new Option("");
  }

  else if (select1.options[select1.selectedIndex].value == "maintain") {
    ele.innerHTML = "国民が保持しなければならないものは？";
    question = new Array("maintain(国民, X, N).<br>",
                          "X       = 憲法が保障する自由及び権利(by(不断の努力)),",
                          "N       = 12");
      result = "国民が保持しなければならないものは？<br><br>国民は不断の努力によって、憲法が保障する自由及び権利を保持しなければならない。(第12条)";
    select2.options[0] = new Option("国民");
    // select2.options[1] = new Option("");
  }

  else if (select1.options[select1.selectedIndex].value == "ban") {
    ele.innerHTML = "国民が禁止されていることは？";
    question = new Array("ban(国民, X, N).<br>",
                          "X       = 濫用(自由及び権利),",
                          "N       = 12");
    result = "国民が禁止されていることは？<br><br>国民は自由及び権利の濫用が禁止されています。(第12条)";
    select2.options[0] = new Option("国民");
    // select2.options[1] = new Option("");
  }

  else if (select1.options[select1.selectedIndex].value == "be_respected") {
    ele.innerHTML = "国民はどのように尊重される？";
    question = new Array("be_respected(国民, X, N).<br>",
                          "X       = as(個人),",
                          "N       = 13");
    result = "国民はどのように尊重される？<br><br>国民は個人として尊重されます。(第13条)";
    select2.options[0] = new Option("国民");
    // select2.options[1] = new Option("");
  }

  else if (select1.options[select1.selectedIndex].value == "right") {
    ele.innerHTML = "国民の権利は？";
    question = new Array("right(国民, X, N).<br>",
                          "X       = 生命、自由及び幸福追求の権利,",
                          "N       = 13",
                          "X       = 公務員の選定,",
                          "N       = 15-1;",
                          "X       = 公務員の罷免,",
                          "N       = 15-1;",
                          "X       = 健康で文化的な最低限度の生活を営む権利,",
                          "N       = 25-1;",
                          "X       = 能力に応じて、ひとしく教育を受ける権利(by(法律)),",
                          "N       = 26-1;",
                          "X       = 勤労,",
                          "N       = 27-1");
    result = "国民の権利は？<br><br>生命、自由及び幸福追求の権利(第13条)<br>公務員の選定、公務員の罷免(第15条第1項)<br>健康で文化的な最低限度の生活を営む権利(第25条第1項)<br>法律の定めるところにより、能力に応じて、ひとしく教育を受ける権利(第26条第1項)<br>勤労(第27条第1項)";
    select2.options[0] = new Option("国民");
    // select2.options[1] = new Option("");
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
    } else if (select2Val == "基本的人権") {
      ele.innerHTML = "基本的人権ってなに？";
      question = new Array("def(基本的人権, X, N).<br>",
                          "X       = 侵すことのできない永久の権利,",
                          "N       = 11;",
                          "X       = 成果(努力(自由獲得)),",
                          "N       = 97;",
                          "X       = 侵すことのできない永久の権利(for(国民(現在及び将来))),",
                          "N       = 97;");
      result = "基本的人権ってなに？<br><br>侵すことのできない永久の権利(第11条)<br>自由獲得の努力の成果、現在及び将来の国民の侵すことのできない永久の権利(第97条)";
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
    } else if (select2Val == "皇室への財産譲渡") {
      ele.innerHTML = "皇室への財産譲渡は何に基づく？";
      question = new Array("by(皇室への財産譲渡, X, N).<br>",
                          "X       = 国会の議決,",
                          "N       = 8");
      result = "皇室への財産譲渡は何に基づく？<br><br>皇室への財産譲渡は国会の議決に基づきます。(第8条)";
    } else if (select2Val == "皇室の財産譲受") {
      ele.innerHTML = "皇室の財産譲受は何に基づく？";
      question = new Array("by(皇室の財産譲受, X, N).<br>",
                          "X       = 国会の議決,",
                          "N       = 8");
      result = "皇室の財産譲受は何に基づく？<br><br>皇室の財産譲受は国会の議決に基づきます。(第8条)";
    } else if (select2Val == "皇室の財産賜与") {
      ele.innerHTML = "皇室の財産賜与は何に基づく？";
      question = new Array("by(皇室の財産賜与, X, N).<br>",
                          "X       = 国会の議決,",
                          "N       = 8");
      result = "皇室の財産賜与は何に基づく？<br><br>皇室の財産賜与は国会の議決に基づきます。(第8条)";
    } else if (select2Val == "日本国民の要件") {
      ele.innerHTML = "日本国民の要件は何で定められている？";
      question = new Array("by(日本国民の要件, X, N).<br>",
                          "X       = 法律で定める,",
                          "N       = 10");
      result = "日本国民の要件は何で定められている？<br><br>日本国民の要件は法律で定められています。(第10条)";
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
    } else if (select2Val == "生命、自由及び幸福追求の権利") {
      ele.innerHTML = "生命、自由及び幸福追求の権利には何が必要？";
      question = new Array("need(生命、自由及び幸福追求の権利, X, N).<br>",
                          "X       = 最大の尊重(立法その他の国政の上で,extent(公共の福祉に反する場合)),",
                          "N       = 13");
      result = "生命、自由及び幸福追求の権利には何が必要？<br><br>公共の福祉に反する場合を除き、立法その他の国政の上で、最大の尊重が必要です。(第13条)";
    }
  }

  else if (select1Val == "res") {
    if (select2Val == "国事行為") {
      ele.innerHTML = "国事行為の責任はどこにありますか？";
      question = new Array("res(国事行為, X, N).<br>",
                          "X       = 責任(内閣),",
                          "N       = 3");
      result = "国事行為の責任はどこにありますか？<br><br>内閣の責任です。(第3条)";
    } else if (select2Val == "国民") {
      ele.innerHTML = "国民の責任は？";
      question = new Array("res(国民, X, N).<br>",
                          "X       = 利用する(自由及び権利(for(公共の福祉))),",
                          "N       = 12");
      result = "国民の責任は？<br><br>国民は公共の福祉のために自由及び権利を利用する責任があります。(第12条)";
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
    } else if (select2Val == "摂政") {
      ele.innerHTML = "摂政では何が行われる？";
      question = new Array("do(摂政, X, N).<br>",
                          "X       = 国事行為(on(天皇の名)),",
                          "N       = 5");
      result = "摂政では何が行われる？<br><br>天皇の名で国事行為が行われます。(第5条)";
    }
  }

  else if (select1Val == "have_not") {
    if (select2Val == "天皇") {
      ele.innerHTML = "天皇が持たないものは？";
      question = new Array("have_not(天皇, X, N).<br>",
                          "X       = 国政に関する権能,",
                          "N       = 4-1");
      result = "天皇が持たないものは？<br><br>天皇は国政に関する権能を持ちません。(第4条第1項)";
    } else if (select2Val == "日本") {
      ele.innerHTML = "日本が持たないものは？";
      question = new Array("have_not(日本, X, N).<br>",
                          "X       = 陸海空軍その他の戦力,",
                          "N       = 9-2");
      result = "日本が持たないものは？<br><br>日本は陸海空軍その他の戦力を持ちません。(第9条第2項)";
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

  else if (select1Val == "apply") {
    if (select2Val == "摂政") {
      ele.innerHTML = "摂政について関係する規定は？";
      question = new Array("apply(摂政, X, N).<br>",
                          "X       = 4-1,",
                          "N       = 5");
      result = "摂政について関係する規定は？<br><br>第4条第1項があります。(第5条)";
    } else if (select2Val == "裁判官") {
      ele.innerHTML = "裁判官はなにをすることができない？";
    }
  }

  else if (select1Val == "call") {
    if (select2Val == "日本国民") {
      ele.innerHTML = "日本国民が求めるものは？";
    question = new Array("call(日本国民, X, N).<br>",
                          "X       = 正義と秩序を基調とする国際平和,",
                          "N       = 9-1");
      result = "日本国民が求めるものは？<br><br>日本国民は正義と秩序を基調とする国際平和を求めます。(第9条第1項)";
    } else if (select2Val == "裁判官") {
      ele.innerHTML = "裁判官はなにをすることができない？";
    }
  }

  else if (select1Val == "renounce") {
    if (select2Val == "日本国民") {
      ele.innerHTML = "日本国民が放棄するものは？";
    question = new Array("renounce(日本国民, X, N).<br>",
                          "X       = 国権の発動たる戦争(as(国際紛争を解決する手段)),",
                          "X       = 武力による威嚇又は武力の行使(as(国際紛争を解決する手段)),",
                          "N       = 9-1");
      result = "日本国民が放棄するものは？<br><br>日本国民は国際紛争を解決する手段としての国権の発動たる戦争を放棄します。<br>日本国民は国際紛争を解決する手段としての武力による威嚇又は武力の行使を放棄します。(第9条第1項)";
    } else if (select2Val == "裁判官") {
      ele.innerHTML = "裁判官はなにをすることができない？";
    }
  }

  else if (select1Val == "not_recognize") {
    if (select2Val == "日本") {
      ele.innerHTML = "日本では何が認められない？";
    question = new Array("not_recognize(日本, X, N).<br>",
                          "X       = 国の交戦権,",
                          "N       = 9-2");
      result = "日本では何が認められない？<br><br>日本では国の交戦権が認められません。(第9条第2項)";
    } else if (select2Val == "裁判官") {
      ele.innerHTML = "裁判官はなにをすることができない？";
    }
  }

  else if (select1Val == "not_be_prevented") {
    if (select2Val == "国民") {
      ele.innerHTML = "国民は何を妨げられない？";
    question = new Array("not_be_prevented(国民, X, N).<br>",
                          "X       = 基本的人権の享有,",
                          "N       = 11");
      result = "国民は何を妨げられない？<br><br>国民は基本的人権の享有を妨げられません。(第11条)";
    } else if (select2Val == "裁判官") {
      ele.innerHTML = "裁判官はなにをすることができない？";
    }
  }

  else if (select1Val == "guarantee") {
    if (select2Val == "憲法") {
      ele.innerHTML = "憲法が保障するものは？";
    question = new Array("guarantee(憲法, X, N).<br>",
                          "X       = 基本的人権の享有,",
                          "N       = 11",
                          "X       = 成年者による普通選挙(公務員の選挙),",
                          "N       = 15-3;",
                          "X       = 思想及び良心の自由,",
                          "N       = 19;",
                          "X       = 信教の自由,",
                          "N       = 20-1;",
                          "X       = 集会の自由,",
                          "N       = 21-1;",
                          "X       = 結社の自由,",
                          "N       = 21-1;",
                          "X       = 言論の自由,",
                          "N       = 21-1;",
                          "X       = 出版の自由,",
                          "N       = 21-1;",
                          "X       = 表現の自由,",
                          "N       = 21-1;",
                          "X       = 学問の自由,",
                          "N       = 23;",
                          "X       = 団結権(for(勤労者)),",
                          "N       = 28;",
                          "X       = 団体交渉権(for(勤労者)),",
                          "N       = 28;",
                          "X       = 団体行動権(for(勤労者)),",
                          "N       = 28;",
                          "X       = 基本的人権(for(日本国民)),",
                          "N       = 97;");
      result = "憲法が保障するものは？<br><br>基本的人権の享有(第11条)<br>公務員の選挙での成年者による普通選挙(第15条第3項)<br>思想及び良心の自由(第19条)<br>信教の自由(第20条第1項)<br>集会の自由、結社の自由、言論の自由、出版の自由、表現の自由(第21条第1項)<br>学問の自由(第23条)<br>勤労者の団結権、勤労者の団体交渉権、勤労者の団体行動権(第28条)<br>日本国民の基本的人権(第97条)";
    } else if (select2Val == "裁判官") {
      ele.innerHTML = "裁判官はなにをすることができない？";
    }
  }

  else if (select1Val == "confer") {
    if (select2Val == "基本的人権") {
      ele.innerHTML = "基本的人権は誰に与えられる？";
    question = new Array("confer(基本的人権, X, N).<br>",
                          "X       = 現在及び将来の国民,",
                          "N       = 11");
      result = "基本的人権は誰に与えられる？<br><br>基本的人権は、現在及び将来の国民に与えられます。(第11条)";
    } else if (select2Val == "裁判官") {
      ele.innerHTML = "裁判官はなにをすることができない？";
    }
  }

  else if (select1Val == "maintain") {
    if (select2Val == "国民") {
      ele.innerHTML = "国民が保持しなければならないものは？";
    question = new Array("maintain(国民, X, N).<br>",
                          "X       = 憲法が保障する自由及び権利(by(不断の努力)),",
                          "N       = 12");
      result = "国民が保持しなければならないものは？<br><br>国民は不断の努力によって、憲法が保障する自由及び権利を保持しなければならない。(第12条)";
    } else if (select2Val == "裁判官") {
      ele.innerHTML = "裁判官はなにをすることができない？";
    }
  }

  else if (select1Val == "ban") {
    if (select2Val == "国民") {
      ele.innerHTML = "国民が禁止されていることは？";
      question = new Array("ban(国民, X, N).<br>",
                          "X       = 濫用(自由及び権利),",
                          "N       = 12");
      result = "国民が禁止されていることは？<br><br>国民は自由及び権利の濫用が禁止されています。(第12条)";
    } else if (select2Val == "裁判官") {
      ele.innerHTML = "裁判官はなにをすることができない？";
    }
  }

  else if (select1Val == "be_respected") {
    if (select2Val == "国民") {
      ele.innerHTML = "国民はどのように尊重される？";
      question = new Array("be_respected(国民, X, N).<br>",
                          "X       = as(個人),",
                          "N       = 13");
      result = "国民はどのように尊重される？<br><br>国民は個人として尊重されます。(第13条)";
    } else if (select2Val == "裁判官") {
      ele.innerHTML = "裁判官はなにをすることができない？";
    }
  }

  else if (select1Val == "right") {
    if (select2Val == "国民") {
      ele.innerHTML = "国民の権利は？";
    question = new Array("right(国民, X, N).<br>",
                          "X       = 生命、自由及び幸福追求の権利,",
                          "N       = 13",
                          "X       = 公務員の選定,",
                          "N       = 15-1;",
                          "X       = 公務員の罷免,",
                          "N       = 15-1;",
                          "X       = 健康で文化的な最低限度の生活を営む権利,",
                          "N       = 25-1;",
                          "X       = 能力に応じて、ひとしく教育を受ける権利(by(法律)),",
                          "N       = 26-1;",
                          "X       = 勤労,",
                          "N       = 27-1");
    result = "国民の権利は？<br><br>生命、自由及び幸福追求の権利(第13条)<br>公務員の選定、公務員の罷免(第15条第1項)<br>健康で文化的な最低限度の生活を営む権利(第25条第1項)<br>法律の定めるところにより、能力に応じて、ひとしく教育を受ける権利(第26条第1項)<br>勤労(第27条第1項)";
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

  var question = document.getElementById('question');
addListener(question, 'click', function() {
  ga('send', 'event', 'button', 'click', 'question');
});
}

// function resultGithub() {
// var downloadLink = document.getElementById('github');
// addListener(downloadLink, 'click', function() {
//   ga('send', 'event', 'button', 'click', 'result-github');
// });
// }

// function resultOrigin() {
// var downloadLink = document.getElementById('original');
// addListener(downloadLink, 'click', function() {
//   ga('send', 'event', 'button', 'click', 'result-original');
// });
// }

function addListener(element, type, callback) {
 if (element.addEventListener) element.addEventListener(type, callback);
 else if (element.attachEvent) element.attachEvent('on' + type, callback);
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
