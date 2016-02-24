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
    select2.options[4] = new Option("国民");
    select2.options[5] = new Option("栄典");
    select2.options[6] = new Option("公務員");
    select2.options[7] = new Option("宗教的活動");
    select2.options[8] = new Option("家族に関する事項");
    select2.options[9] = new Option("義務教育");
    select2.options[10] = new Option("勤労条件");
    select2.options[11] = new Option("国会");
    select2.options[12] = new Option("両議院");
    select2.options[13] = new Option("任期(衆議院議員)");
    select2.options[14] = new Option("任期(参議院議員)");
    select2.options[15] = new Option("選挙に関する事項");
    select2.options[16] = new Option("常会(国会)");
    select2.options[17] = new Option("参議院");
    select2.options[18] = new Option("措置(緊急集会, on(54-2))");
    select2.options[19] = new Option("議事(両議院)");
    select2.options[20] = new Option("会議(両議院)");
    select2.options[21] = new Option("法律");
    select2.options[22] = new Option("予算");
    select2.options[23] = new Option("行政権");
    select2.options[24] = new Option("内閣");
    select2.options[25] = new Option("内閣総理大臣");
    select2.options[26] = new Option("指名(内閣総理大臣)");
    select2.options[27] = new Option("事務(内閣)");
    select2.options[28] = new Option("司法権");
    select2.options[29] = new Option("裁判官");
    select2.options[30] = new Option("最高裁判所");
    select2.options[31] = new Option("裁判官(下級裁判所)");
    select2.options[32] = new Option("皇室財産");
    select2.options[33] = new Option("地方公共団体");
    select2.options[34] = new Option("長(地方公共団体)");
    select2.options[35] = new Option("議員(議会(地方公共団体))");
    select2.options[36] = new Option("吏員(地方公共団体, by(法律))");
    select2.options[37] = new Option("憲法");
  }

  else if (select1.options[select1.selectedIndex].value == "by") {
    ele.innerHTML = "天皇の地位は何で定められている？";
    question = new Array("| ?-by(天皇, X, N).<br>",
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
    select2.options[7] = new Option("勤労条件に関する基準");
    select2.options[8] = new Option("財産権");
    select2.options[9] = new Option("議員定数(両議院)");
    select2.options[10] = new Option("議員資格");
    select2.options[11] = new Option("選挙人資格");
    select2.options[12] = new Option("選挙に関する事項");
    select2.options[13] = new Option("弾劾に関する事項");
    select2.options[14] = new Option("員数(裁判官(最高裁判所))");
    select2.options[15] = new Option("審査に関する事項");
    select2.options[16] = new Option("組織(会計検査院)");
    select2.options[17] = new Option("権限(会計検査院)");
    select2.options[18] = new Option("組織(地方公共団体)");
    select2.options[19] = new Option("運営(地方公共団体)");
  }

  else if (select1.options[select1.selectedIndex].value == "need") {
    ele.innerHTML = "国事行為に必要なものは？";
    question = new Array("| ?-need(国事行為, X, N).<br>",
                          "X       = 内閣の助言,",
                          "N       = 3;",
                          "X       = 内閣の承認,",
                          "N       = 3");
      result = "国事行為に必要なものは？<br><br>内閣の助言と内閣の承認です。(第3条)";
    select2.options[0] = new Option("国事行為");
    select2.options[1] = new Option("生命、自由及び幸福追求の権利");
    select2.options[2] = new Option("婚姻");
    select2.options[3] = new Option("法律");
    select2.options[4] = new Option("財産権");
    select2.options[5] = new Option("正当な理由");
    select2.options[6] = new Option("捜索");
    select2.options[7] = new Option("押収");
    select2.options[8] = new Option("議員資格の剥奪");
    select2.options[9] = new Option("除名(議員)");
    select2.options[10] = new Option("国務大臣");
    select2.options[11] = new Option("政令");
    select2.options[12] = new Option("課税");
    select2.options[13] = new Option("変更(租税(現行))");
    select2.options[14] = new Option("支出(国費)");
    select2.options[15] = new Option("負担(債務(国))");
    select2.options[16] = new Option("支出(予備費)");
    select2.options[17] = new Option("改正(憲法)");
    select2.options[18] = new Option("承認(国民)");
    select2.options[19] = new Option("条約");
    select2.options[20] = new Option("国際法規");
  }

  else if (select1.options[select1.selectedIndex].value == "res") {
    ele.innerHTML = "国事行為の責任はどこにありますか？";
    question = new Array("| ?-res(国事行為, X, N).<br>",
                          "X       = 責任(内閣),",
                          "N       = 3");
      result = "国事行為の責任はどこにありますか？<br><br>内閣の責任です。(第3条)";
    select2.options[0] = new Option("国事行為");
    select2.options[1] = new Option("国民");
    select2.options[2] = new Option("内閣");
  }

  else if (select1.options[select1.selectedIndex].value == "do") {
    ele.innerHTML = "天皇はなにをするの？";
    question = new Array("| ?-do(天皇, X, N).<br>",
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
    select2.options[2] = new Option("両議院");
    select2.options[3] = new Option("指名(内閣総理大臣)");
    select2.options[4] = new Option("内閣総理大臣");
    select2.options[5] = new Option("内閣");
    select2.options[6] = new Option("裁判官");
    select2.options[7] = new Option("判決(裁判)");
    select2.options[8] = new Option("対審(裁判)");
    //select2.options[9] = new Option("会計検査院");
  }

  else if (select1.options[select1.selectedIndex].value == "have_not") {
    ele.innerHTML = "天皇が持たないものは？";
    question = new Array("| ?-have_not(天皇, X, N).<br>",
                          "X       = 国政に関する権能,",
                          "N       = 4-1");
      result = "天皇が持たないものは？<br><br>国政に関する権能です。(第4条第1項)";
    select2.options[0] = new Option("天皇");
    select2.options[1] = new Option("日本");
    select2.options[2] = new Option("全部又は一部(憲法に反する法律、命令、詔勅及び国務に関するその他の行為)");
  }

  else if (select1.options[select1.selectedIndex].value == "can") {
    ele.innerHTML = "天皇ができることは？";
    question = new Array("| ?-can(天皇, X, N).<br>",
                          "X       = 委任(国事行為,by(法律)),",
                          "N       = 4-2");
      result = "天皇ができることは？<br><br>法律により、国事行為の委任ができます。(第4条第2項)";
    select2.options[0] = new Option("天皇");
    select2.options[1] = new Option("すべての人");
    select2.options[2] = new Option("私有財産");
    select2.options[3] = new Option("刑事被告人");
    select2.options[4] = new Option("内閣");
    select2.options[5] = new Option("会議(両議院)");
    select2.options[6] = new Option("両議院");
    select2.options[7] = new Option("衆議院");
    select2.options[8] = new Option("内閣総理大臣");
    select2.options[9] = new Option("国務大臣");
    select2.options[10] = new Option("最高裁判所");
    select2.options[11] = new Option("対審");
    select2.options[12] = new Option("地方公共団体");
    select2.options[13] = new Option("制定(法律(for(施行(憲法))))");
    select2.options[14] = new Option("準備手続(for(施行(憲法)))");
  }

  else if (select1.options[select1.selectedIndex].value == "apply") {
    ele.innerHTML = "摂政について関係する規定は？";
    question = new Array("| ?-apply(摂政, X, N).<br>",
                          "X       = 4-1,",
                          "N       = 5");
      result = "摂政について関係する規定は？<br><br>第4条第1項があります。(第5条)";
    select2.options[0] = new Option("摂政");
    select2.options[1] = new Option("");
  }

  else if (select1.options[select1.selectedIndex].value == "call") {
    ele.innerHTML = "日本国民が求めるものは？";
    question = new Array("| ?-call(日本国民, X, N).<br>",
                          "X       = 正義と秩序を基調とする国際平和,",
                          "N       = 9-1");
      result = "日本国民が求めるものは？<br><br>日本国民は正義と秩序を基調とする国際平和を求めます。(第9条第1項)";
    select2.options[0] = new Option("日本国民");
    // select2.options[1] = new Option("");
  }

  else if (select1.options[select1.selectedIndex].value == "renounce") {
    ele.innerHTML = "日本国民が放棄するものは？";
    question = new Array("| ?-renounce(日本国民, X, N).<br>",
                          "X       = 国権の発動たる戦争(as(国際紛争を解決する手段)),",
                          "X       = 武力による威嚇又は武力の行使(as(国際紛争を解決する手段)),",
                          "N       = 9-1");
      result = "日本国民が放棄するものは？<br><br>日本国民は国際紛争を解決する手段としての国権の発動たる戦争を放棄します。<br>日本国民は国際紛争を解決する手段としての武力による威嚇又は武力の行使を放棄します。(第9条第1項)";
    select2.options[0] = new Option("日本国民");
    // select2.options[1] = new Option("");
  }

  else if (select1.options[select1.selectedIndex].value == "not_recognize") {
    ele.innerHTML = "日本では何が認められない？";
    question = new Array("| ?-not_recognize(日本, X, N).<br>",
                          "X       = 国の交戦権,",
                          "N       = 9-2");
      result = "日本では何が認められない？<br><br>日本では国の交戦権が認められません。(第9条第2項)";
    select2.options[0] = new Option("日本");
    select2.options[1] = new Option("憲法");
    select2.options[2] = new Option("栄典");
  }

  else if (select1.options[select1.selectedIndex].value == "not_be_prevented") {
    ele.innerHTML = "国民は何を妨げられない？";
    question = new Array("| ?-not_be_prevented(国民, X, N).<br>",
                          "X       = 基本的人権の享有,",
                          "N       = 11");
      result = "国民は何を妨げられない？<br><br>国民は基本的人権の享有を妨げられません。(第11条)";
    select2.options[0] = new Option("国民");
    select2.options[1] = new Option("国");
    select2.options[2] = new Option("すべての人");
    select2.options[3] = new Option("規定(59-2)");
  }

  else if (select1.options[select1.selectedIndex].value == "guarantee") {
    ele.innerHTML = "憲法が保障するものは？";
    question = new Array("| ?-guarantee(憲法, X, N).<br>",
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
    question = new Array("| ?-confer(基本的人権, X, N).<br>",
                          "X       = 現在及び将来の国民,",
                          "N       = 11");
      result = "基本的人権は誰に与えられる？<br><br>基本的人権は、現在及び将来の国民に与えられます。(第11条)";
    select2.options[0] = new Option("基本的人権");
    // select2.options[1] = new Option("");
  }

  else if (select1.options[select1.selectedIndex].value == "maintain") {
    ele.innerHTML = "国民が保持しなければならないものは？";
    question = new Array("| ?-maintain(国民, X, N).<br>",
                          "X       = 憲法が保障する自由及び権利(by(不断の努力)),",
                          "N       = 12");
      result = "国民が保持しなければならないものは？<br><br>国民は不断の努力によって、憲法が保障する自由及び権利を保持しなければならない。(第12条)";
    select2.options[0] = new Option("国民");
    select2.options[1] = new Option("夫婦");
  }

  else if (select1.options[select1.selectedIndex].value == "ban") {
    ele.innerHTML = "国民が禁止されていることは？";
    question = new Array("| ?-ban(国民, X, N).<br>",
                          "X       = 濫用(自由及び権利),",
                          "N       = 12");
    result = "国民が禁止されていることは？<br><br>国民は自由及び権利の濫用が禁止されています。(第12条)";
    select2.options[0] = new Option("国民");
    select2.options[1] = new Option("宗教団体");
    select2.options[2] = new Option("国及びその機関");
    select2.options[3] = new Option("国");
    select2.options[4] = new Option("憲法");
    select2.options[5] = new Option("公務員");
  }

  else if (select1.options[select1.selectedIndex].value == "be_respected") {
    ele.innerHTML = "国民はどのように尊重される？";
    question = new Array("| ?-be_respected(国民, X, N).<br>",
                          "X       = as(個人),",
                          "N       = 13");
    result = "国民はどのように尊重される？<br><br>国民は個人として尊重されます。(第13条)";
    select2.options[0] = new Option("国民");
    // select2.options[1] = new Option("");
  }

  else if (select1.options[select1.selectedIndex].value == "right") {
    ele.innerHTML = "国民の権利は？";
    question = new Array("| ?-right(国民, X, N).<br>",
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
    select2.options[1] = new Option("すべての人");
    select2.options[2] = new Option("夫婦");
    select2.options[3] = new Option("刑事被告人");
  }

  else if (select1.options[select1.selectedIndex].value == "not") {
    ele.innerHTML = "国民は何をされない？";
    question = new Array("| ?-not(国民, X, N).<br>",
                          "X       = 差別(政治的、経済的又は社会的関係において,人種、信条、性別、社会的身分又は門地により),",
                          "N       = 14-1");
    result = "国民は何をされない？<br><br>国民は、政治的、経済的又は社会的関係において、人種、信条、性別、社会的身分又は門地により、差別されません。(第14条第1項)";
    select2.options[0] = new Option("国民");
    select2.options[1] = new Option("公務員");
    select2.options[2] = new Option("すべての人");
    select2.options[3] = new Option("児童");
    select2.options[4] = new Option("議員");
    select2.options[5] = new Option("選挙人");
    select2.options[6] = new Option("両議院議員");
    select2.options[7] = new Option("国務大臣");
    select2.options[8] = new Option("公金");
    select2.options[9] = new Option("財産(公)");
    //select2.options[10] = new Option("国務大臣(現職(憲法施行時))");
  }

  else if (select1.options[select1.selectedIndex].value == "no_res") {
    ele.innerHTML = "選挙人は何の責任を問われない？";
    question = new Array("| ?-no_res(選挙人, X, N).<br>",
                          "X       = 選択,",
                          "N       = 15-4");
    result = "選挙人は何の責任を問われない？<br><br>国民は選択の責任を問われません。(第15条第4項)";
    select2.options[0] = new Option("選挙人");
    select2.options[1] = new Option("両議院議員");
  }

  else if (select1.options[select1.selectedIndex].value == "have") {
    ele.innerHTML = "すべての人は何を持っている？";
    question = new Array("| ?-have(すべての人, X, N).<br>",
                          "X       = 居住、移転及び職業選択の自由(extent(公共の福祉に反する場合)),",
                          "N       = 22-1");
    result = "すべての人は何を持っている？<br><br>すべての人は、公共の福祉に反する場合を除き、居住、移転及び職業選択の自由を持っています。(第22条第1項)";
    select2.options[0] = new Option("すべての人");
    select2.options[1] = new Option("最高裁判所");
    select2.options[2] = new Option("地方公共団体");
  }

  else if (select1.options[select1.selectedIndex].value == "shall") {
    ele.innerHTML = "国の義務は？";
    question = new Array("| ?-shall(国, X, N).<br>",
                          "X       = 社会福祉の向上及び増進,",
                          "N       = 25-2;",
                          "X       = 社会保障の向上及び増進,",
                          "N       = 25-2;",
                          "X       = 公衆衛生の向上及び増進,",
                          "N       = 25-2;",
                          "X       = 総選挙(衆議院議員,case(衆議院解散),on(解散の日から四十日以内)),",
                          "N       = 54-1;",
                          "X       = 召集(国会,case(衆議院総選挙),on(選挙の日から三十日以内)),",
                          "N       = 54-1");
    result = "国の義務は？<br><br>社会福祉の向上及び増進<br>社会保障の向上及び増進<br>公衆衛生の向上及び増進<br>(第25条第2項)<br>衆議院解散のとき、解散の日から四十日以内に、衆議院議員の総選挙をしなければならない。<br>衆議院総選挙のとき、選挙の日から三十日以内に、国会の召集をしなければならない。<br>(第54条第1項)";
    select2.options[0] = new Option("国");
    select2.options[1] = new Option("国民");
    select2.options[2] = new Option("内閣");
    select2.options[3] = new Option("両議院");
    select2.options[4] = new Option("表決(各議員)");
    select2.options[5] = new Option("予算");
    select2.options[6] = new Option("内閣総理大臣");
    select2.options[7] = new Option("国務大臣");
    select2.options[8] = new Option("検察官");
    select2.options[9] = new Option("対審");
    select2.options[10] = new Option("権限(処理する(国の財政))");
    select2.options[11] = new Option("費用(皇室)");
    select2.options[12] = new Option("天皇");
    select2.options[13] = new Option("摂政");
    select2.options[14] = new Option("裁判官");
    select2.options[15] = new Option("公務員");
  }

  else if (select1.options[select1.selectedIndex].value == "case") {
    ele.innerHTML = "証拠とすることができないのは？";
    question = new Array("| ?-case(not(証拠), X, N).<br>",
                          "X       = 自白(on(強制)),",
                          "N       = 38-2;",
                          "X       = 自白(on(拷問)),",
                          "N       = 38-2;",
                          "X       = 自白(on(脅迫)),",
                          "N       = 38-2;",
                          "X       = 自白(on(不当に長い抑留)),",
                          "N       = 38-2;",
                          "X       = 自白(on(不当に長い拘禁)),",
                          "N       = 38-2");
    result = "証拠とすることができないのは？<br><br>強制による自白<br>拷問による自白<br>脅迫による自白<br>不当に長い抑留による自白<br>不当に長い拘禁による自白<br>(第38条第2項)";
    select2.options[0] = new Option("not(証拠)");
    //select2.options[1] = new Option("国民");
  }

  else if (select1.options[select1.selectedIndex].value == "can_not") {
    ele.innerHTML = "すべての人がすることができないことは？";
    question = new Array("| ?-can_not(すべての人, X, N).<br>",
                          "X       = 兼職(両議院議員),",
                          "N       = 48");
    result = "すべての人がすることができないことは？<br><br>すべての人は、両議院議員の兼職をすることができません。(第48条)";
    select2.options[0] = new Option("すべての人");
    select2.options[1] = new Option("両議院");
    select2.options[2] = new Option("特別裁判所");
    select2.options[3] = new Option("行政機関");
    select2.options[4] = new Option("報酬(裁判官(下級裁判所))");
    //select2.options[5] = new Option("国会");
  }

  else if (select1.options[select1.selectedIndex].value == "receive") {
    ele.innerHTML = "議員が受け取るものは？";
    question = new Array("| ?-receive(両議院議員, X, N).<br>",
                          "X       = 歳費(国庫,by(法律)),",
                          "N       = 49");
    result = "議員が受け取るものは？<br><br>両議院の議員は、法律の定めるところにより、国庫から歳費を受け取ります。(第49条)";
    select2.options[0] = new Option("両議院議員");
    select2.options[1] = new Option("裁判官(下級裁判所)");
  }

  else if (select1.options[select1.selectedIndex].value == "must_be") {
    ele.innerHTML = "内閣総理大臣はどんな人？";
    question = new Array("| ?-must_be(内閣総理大臣, X, N).<br>",
                          "X       = 文民,",
                          "N       = 66-2");
    result = "内閣総理大臣はどんな人？<br><br>内閣総理大臣は、文民でなければなりません。(第66条第2項)";
    select2.options[0] = new Option("内閣総理大臣");
    select2.options[1] = new Option("国務大臣");
  }

}

//=====================================================================

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
      question = new Array("| ?-def(皇位, X, N).<br>",
                          "X       = 世襲のもの,",
                          "N       = 2");
      result = "皇位とはなんですか？<br><br>皇位とは世襲のものです。(第2条)";
    } else if (select2Val == "国事行為") {
      ele.innerHTML = "国事行為ってなに？";
      question = new Array("| ?-def(国事行為, X, N).<br>",
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
      question = new Array("| ?-def(基本的人権, X, N).<br>",
                          "X       = 侵すことのできない永久の権利,",
                          "N       = 11;",
                          "X       = 成果(努力(自由獲得)),",
                          "N       = 97;",
                          "X       = 侵すことのできない永久の権利(for(国民(現在及び将来))),",
                          "N       = 97;");
      result = "基本的人権ってなに？<br><br>侵すことのできない永久の権利(第11条)<br>自由獲得の努力の成果、現在及び将来の国民の侵すことのできない永久の権利(第97条)";
    } else if (select2Val == "国民") {
      ele.innerHTML = "国民とはどんなもの？";
      question = new Array("| ?-def(国民, X, N).<br>",
                          "X       = 法の下に平等,",
                          "N       = 14-1;");
      result = "国民とはどんなもの？<br><br>国民とは法の下に平等なものです。(第14条第1項)";
    } else if (select2Val == "栄典") {
      ele.innerHTML = "栄典とはどんなもの？";
      question = new Array("| ?-def(栄典, X, N).<br>",
                          "X       = 栄誉,",
                          "N       = 14-3;",
                          "X       = 勲章,",
                          "N       = 14-3;",
                          "X       = その他,",
                          "N       = 14-3");
      result = "栄典とはどんなもの？<br><br>栄典とは栄誉、勲章。その他のものです。(第14条第3項)";
    } else if (select2Val == "公務員") {
      ele.innerHTML = "公務員とはどんなもの？";
      question = new Array("| ?-def(公務員, X, N).<br>",
                          "X       = 全体の奉仕者,",
                          "N       = 15-2");
      result = "公務員とはどんなもの？<br><br>公務員は全体の奉仕者です。(第15条第2項)";
    } else if (select2Val == "宗教的活動") {
      ele.innerHTML = "宗教的活動とはどんなもの？";
      question = new Array("| ?-def(宗教的活動, X, N).<br>",
                          "X       = 宗教教育,",
                          "N       = 20-3;",
                          "X       = その他,",
                          "N       = 20-3");
      result = "宗教的活動とはどんなもの？<br><br>宗教教育(第20条第3項)<br>その他(第20条第3項)";
    } else if (select2Val == "家族に関する事項") {
      ele.innerHTML = "家族に関する事項とはどんなもの？";
      question = new Array("| ?-def(家族に関する事項, X, N).<br>",
                          "X       = 配偶者の選択,",
                          "N       = 24-2;",
                          "X       = 財産権,",
                          "N       = 24-2;",
                          "X       = 相続,",
                          "N       = 24-2;",
                          "X       = 住居の選定,",
                          "N       = 24-2;",
                          "X       = 離婚,",
                          "N       = 24-2;",
                          "X       = 婚姻,",
                          "N       = 24-2");
      result = "家族に関する事項とはどんなもの？<br><br>配偶者の選択<br>財産権<br>相続<br>住居の選定<br>離婚<br>婚姻<br>(第24条第2項)";
    } else if (select2Val == "義務教育") {
      ele.innerHTML = "義務教育とはどんなもの？";
      question = new Array("| ?-def(義務教育, X, N).<br>",
                          "X       = 無償,",
                          "N       = 26-2");
      result = "義務教育とはどんなもの？<br><br>義務教育は無償のものです。(第26条第2項)";
    } else if (select2Val == "勤労条件") {
      ele.innerHTML = "勤労条件とはどんなもの？";
      question = new Array("| ?-def(勤労条件, X, N).<br>",
                          "X       = 賃金,",
                          "N       = 27-2;",
                          "X       = 就業時間,",
                          "N       = 27-2;",
                          "X       = 休息,",
                          "N       = 27-2;",
                          "X       = その他,",
                          "N       = 27-2");
      result = "勤労条件とはどんなもの？<br><br>賃金<br>就業時間<br>休息<br>その他<br>(第27条第2項)";
    } else if (select2Val == "国会") {
      ele.innerHTML = "国会ってなに？";
      question = new Array("| ?-def(国会, X, N).<br>",
                          "X       = 最高機関(国権),",
                          "N       = 41;",
                          "X       = 立法機関(唯一),",
                          "N       = 41;",
                          "X       = 構成する(両議院),",
                          "N       = 42;",
                          "X       = 設置(弾劾裁判所(組織(両議院議員)),for(裁判(罷免の訴追を受けた裁判官))),",
                          "N       = 64-1");
      result = "国会ってなに？<br><br>国権の最高機関(第41条)<br>唯一の立法機関(第41条)<br>両議院で構成するもの(第42条)<br>罷免の訴追を受けた裁判官の裁判のため、両議院の議員で組織する弾劾裁判所を設置するもの(第64条第1項)";
    } else if (select2Val == "両議院") {
      ele.innerHTML = "両議院ってなに？";
      question = new Array("| ?-def(両議院, X, N).<br>",
                          "X       = 衆議院及び参議院,",
                          "N       = 42;",
                          "X       = 組織する(選挙された議員(全国民の代表)),",
                          "N       = 43-1");
      result = "両議院ってなに？<br><br>衆議院及び参議院(第42条)<br>全国民の代表の選挙された議員で組織するもの(第43条第1項)";
    } else if (select2Val == "任期(衆議院議員)") {
      ele.innerHTML = "衆議院議員の任期は？";
      question = new Array("| ?-def(任期(衆議院議員), X, N).<br>",
                          "X       = ４年,",
                          "N       = 45;",
                          "X       = 終了(期間満了前(case(衆議院解散))),",
                          "N       = 45");
      result = "衆議院議員の任期は？<br><br>衆議院議員の任期は、4年です。(第45条)<br>衆議院議員の任期は、衆議院解散の場合、期間満了前に終了します。(第45条)";
    } else if (select2Val == "任期(参議院議員)") {
      ele.innerHTML = "参議院議員の任期は？";
      question = new Array("| ?-def(任期(参議院議員), X, N).<br>",
                          "X       = ６年,",
                          "N       = 46;",
                          "X       = 改選(議員の半数(３年ごと)),",
                          "N       = 46");
      result = "参議院議員の任期は？<br><br>参議院議員の任期は、6年です。(第46条)<br>参議院議員は、3年ごとに、議員の半数を改選します。(第46条)";
    } else if (select2Val == "選挙に関する事項") {
      ele.innerHTML = "選挙に関する事項とは？";
      question = new Array("| ?-def(選挙に関する事項, X, N).<br>",
                          "X       = 選挙区,",
                          "N       = 47;",
                          "X       = 投票の方法,",
                          "N       = 47");
      result = "選挙に関する事項とは？<br><br>選挙区(第47条)<br>投票の方法(第47条)";
    } else if (select2Val == "常会(国会)") {
      ele.innerHTML = "国会の常会の決まりは？";
      question = new Array("| ?-def(常会(国会), X, N).<br>",
                          "X       = 召集(毎年一回),",
                          "N       = 52");
      result = "国会の常会の決まりは？<br><br>毎年一回、召集すること(第52条)";
    } else if (select2Val == "参議院") {
      ele.innerHTML = "参議院の決まりは？";
      question = new Array("| ?-def(参議院, X, N).<br>",
                          "X       = 閉会(case(衆議院解散)),",
                          "N       = 54-2");
      result = "参議院の決まりは？<br><br>参議院は、衆議院解散のとき、閉会します。(第54条第2項)";
    } else if (select2Val == "措置(緊急集会, on(54-2))") {
      ele.innerHTML = "第54条第2項の緊急集会の措置の決まりは？";
      question = new Array("| ?-def(措置(緊急集会, on(54-2)), X, N).<br>",
                          "X       = 臨時のもの,",
                          "N       = 54-3;",
                          "X       = 失う(効力,case(衆議院の同意がない場合,on(次の国会開会の後十日以内))),",
                          "N       = 54-3");
      result = "第54条第2項の緊急集会の措置の決まりは？<br><br>第54条第2項の緊急集会の措置は、臨時のものです。(第54条第3項)<br>第54条第2項の緊急集会の措置は、次の国会開会の後十日以内に、衆議院の同意がない場合、効力を失う。(第54条第3項)";
    } else if (select2Val == "議事(両議院)") {
      ele.innerHTML = "両議院の議事の決まりは？";
      question = new Array("| ?-def(議事(両議院), X, N).<br>",
                          "X       = 決定(過半数(出席議員),extent(case(特別の定め(憲法)))),",
                          "N       = 56-2;",
                          "X       = 決定(議長,case(可否同数),extent(case(特別の定め(憲法)))),",
                          "N       = 56-2");
      result = "両議院の議事の決まりは？<br><br>両議院の議事は、憲法の特別の定めがある場合を除き、出席議員の過半数で決定します。(第56条第2項)<br>両議院の議事は、憲法の特別の定めがある場合を除き、可否同数の場合、議長が決定します。(第56条第2項)";
    } else if (select2Val == "会議(両議院)") {
      ele.innerHTML = "両議院の会議の決まりは？";
      question = new Array("| ?-def(会議(両議院), X, N).<br>",
                          "X       = 公開,",
                          "N       = 57-1");
      result = "両議院の会議の決まりは？<br><br>両議院の会議は公開されます。(第57条第1項)";
    } else if (select2Val == "法律") {
      ele.innerHTML = "法律はどのようなもの？";
      question = new Array("| ?-def(法律, X, N).<br>",
                          "X       = 成立(case(可決(on(両議院))),extent(憲法に特別の定めがある場合)),",
                          "N       = 59-1;",
                          "X       = 成立(case(衆議院で出席議員の三分の二以上の多数で再び可決したとき)),",
                          "N       = 59-2");
      result = "法律はどのようなもの？<br><br>法律は、憲法に特別の定めがある場合を除き、両議院で可決した時に成立します。(第59条第1項)<br>法律は、衆議院で出席議員の三分の二以上の多数で再び可決したときに成立します。(第59条第2項)";
    } else if (select2Val == "予算") {
      ele.innerHTML = "予算の決まりは？";
      question = new Array("| ?-def(予算, X, N).<br>",
                          "X       = 議決(衆議院,case(参議院で衆議院と異なつた議決をした場合,case(両議院の協議会を開いても意見が一致しないとき,by(法律)))),",
                          "N       = 60-2;",
                          "X       = 議決(衆議院,case(参議院で衆議院と異なつた議決をした場合,case(参議院が、衆議院の可決した予算を受け取つた後、国会休会中の期間を除いて三十日以内に、議決しないとき))),",
                          "N       = 60-2");
      result = "予算の決まりは？<br><br>予算は、参議院で衆議院と異なつた議決をした場合、法律の定めるところにより、両議院の協議会を開いても意見が一致しないときは、衆議院が議決します。<br>(第60条第2項)<br>予算は、参議院で衆議院と異なつた議決をした場合、参議院が、衆議院の可決した予算を受け取つた後、国会休会中の期間を除いて三十日以内に、議決しないときは、衆議院が議決します。<br>(第60条第2項)";
    } else if (select2Val == "行政権") {
      ele.innerHTML = "行政権ってなに？";
      question = new Array("| ?-def(行政権, X, N).<br>",
                          "X       = 属する(内閣),",
                          "N       = 65");
      result = "行政権ってなに？<br><br>行政権は、内閣に属するものです。<br>(第65条)";
    } else if (select2Val == "内閣") {
      ele.innerHTML = "内閣ってなに？";
      question = new Array("| ?-def(内閣, X, N).<br>",
                          "X       = 組織する(その首長たる内閣総理大臣及びその他の国務大臣(by(法律))),",
                          "N       = 66-1");
      result = "内閣ってなに？<br><br>内閣は、法律の定めるところにより、その首長たる内閣総理大臣及びその他の国務大臣で組織するものです。<br>(第66条第1項)";
    } else if (select2Val == "内閣総理大臣") {
      ele.innerHTML = "内閣総理大臣ってなに？";
      question = new Array("| ?-def(内閣総理大臣, X, N).<br>",
                          "X       = 指名される(on(議決(国会),国会議員の中から)),",
                          "N       = 67-1");
      result = "内閣総理大臣ってなに？<br><br>内閣総理大臣は、国会議員の中から、国会の議決で指名されるものです。(第67条第1項)";
    } else if (select2Val == "指名(内閣総理大臣)") {
      ele.innerHTML = "内閣総理大臣の指名の決まりは？";
      question = new Array("| ?-def(指名(内閣総理大臣), X, N).<br>",
                          "X       = 議決(衆議院,case(衆議院と参議院とが異なつた指名の議決をした場合)),",
                          "N       = 67-2");
      result = "内閣総理大臣の指名の決まりは？<br><br>内閣総理大臣の指名は、衆議院と参議院とが異なつた指名の議決をした場合、衆議院の議決となります。(第67条第2項)";
    } else if (select2Val == "事務(内閣)") {
      ele.innerHTML = "内閣の事務ってなに？";
      question = new Array("| ?-def(事務(内閣), X, N).<br>",
                          "X       = 執行(法律),",
                          "N       = 73-1;",
                          "X       = 処理(外交関係),",
                          "N       = 73-2;",
                          "X       = 締結(条約,need(承認(国会),on(事前または事後))),",
                          "N       = 73-3;",
                          "X       = 掌理(官吏に関する事務,need(従う(基準(法律)))),",
                          "N       = 73-4;",
                          "X       = 作成(予算),",
                          "N       = 73-5;",
                          "X       = 提出(国会),",
                          "N       = 73-5;",
                          "X       = 制定(政令(for(実施(規定(憲法及び法律))))),",
                          "N       = 73-6;",
                          "X       = 決定(大赦),",
                          "N       = 73-7;",
                          "X       = 決定(特赦),",
                          "N       = 73-7;",
                          "X       = 決定(減刑),",
                          "N       = 73-7;",
                          "X       = 免除(執行(刑)),",
                          "N       = 73-7;",
                          "X       = 決定(復権),",
                          "N       = 73-7");
      result = "内閣の事務ってなに？<br><br>法律の執行(第73条第1項)<br>外交関係の処理(第73条第2項)<br>事前または事後の国会の承認を必要とする条約の締結(第73条第3項)<br>法律の基準に従った官吏に関する事務の掌理(第73条第4項)<br>予算の作成(第73条第5項)<br>予算の国会への提出(第73条第5項)<br>憲法及び法律の規定の実施のための政令の制定(第73条第6項)<br>大赦の決定(第73条第7項)<br>特赦の決定(第73条第7項)<br>減刑の決定(第73条第7項)<br>刑の執行の免除(第73条第7項)<br>刑の復権の決定(第73条第7項)";
    } else if (select2Val == "司法権") {
      ele.innerHTML = "司法権とは？";
      question = new Array("| ?-def(司法権, X, N).<br>",
                          "X       = 属する(下級裁判所(設置,by(最高裁判所),by(法律))),",
                          "N       = 76-1");
      result = "司法権とは？<br><br>司法権は、法律と最高裁判所の定めるところに設置される下級裁判所に属するものです。(第76条第1項)";
    } else if (select2Val == "裁判官") {
      ele.innerHTML = "裁判官の決まりは？";
      question = new Array("| ?-def(裁判官, X, N).<br>",
                          "X       = 拘束される(憲法及び法律),",
                          "N       = 76-3;",
                          "X       = 罷免(case(投票者の多数が裁判官の罷免を可とするとき,case(79-2))),",
                          "N       = 79-3");
      result = "裁判官の決まりは？<br><br>裁判官は、憲法及び法律に拘束されます。(第76条第3項)<br>裁判官は、第79条第2項の場合、投票者の多数が裁判官の罷免を可とするとき、罷免されます。(第79条第3項)";
    } else if (select2Val == "最高裁判所") {
      ele.innerHTML = "最高裁判所ってなに？";
      question = new Array("| ?-def(最高裁判所, X, N).<br>",
                          "X       = 構成(長たる裁判官及びその他の裁判官),",
                          "N       = 79-1;",
                          "X       = 終審裁判所(have(権限(決定(憲法への適合性(法律、命令、規則又は処分))))),",
                          "N       = 81");
      result = "最高裁判所ってなに？<br><br>最高裁判所は、長たる裁判官及びその他の裁判官で構成されます。(第79条第1項)<br>最高裁判所は、法律、命令、規則又は処分の憲法への適合性の決定をする権限を持つ終審裁判所です。(第81条)";
    } else if (select2Val == "裁判官(下級裁判所)") {
      ele.innerHTML = "下級裁判所の裁判官ってどんなもの？";
      question = new Array("| ?-def(裁判官(下級裁判所), X, N).<br>",
                          "X       = 十年(任期),",
                          "N       = 80-1;",
                          "X       = can(再任),",
                          "N       = 80-1;",
                          "X       = 退官(case(達する(年齢(by(法律))))),",
                          "N       = 80-1");
      result = "下級裁判所の裁判官ってどんなもの？<br><br>任期は十年です。<br>再任することができます。<br>法律によって定められた年齢に達すると退官します。<br>(第80条第1項)";
    } else if (select2Val == "皇室財産") {
      ele.innerHTML = "皇室財産ってどんなもの？";
      question = new Array("| ?-def(皇室財産, X, N).<br>",
                          "X       = 属する(国),",
                          "N       = 88");
      result = "皇室財産ってどんなもの？<br><br>皇室財産は、国に属するものです。<br>(第88条)";
    } else if (select2Val == "地方公共団体") {
      ele.innerHTML = "地方公共団体ってどんなもの？";
      question = new Array("| ?-def(地方公共団体, X, N).<br>",
                          "X       = 設置(議会,for(諸事機関),by(法律)),",
                          "N       = 93-1");
      result = "地方公共団体ってどんなもの？<br><br>地方公共団体には、法律の定めるところにより、諸事機関として、議会が設置されます。<br>(第93条第1項)";
    } else if (select2Val == "長(地方公共団体)") {
      ele.innerHTML = "地方公共団体の長ってどんなもの？";
      question = new Array("| ?-def(長(地方公共団体), X, N).<br>",
                          "X       = 直接選挙(by(住民(その地方公共団体))),",
                          "N       = 93-2");
      result = "地方公共団体の長ってどんなもの？<br><br>地方公共団体の長は、その地方公共団体の住民によって、直接選挙されます。<br>(第93条第2項)";
    } else if (select2Val == "議員(議会(地方公共団体))") {
      ele.innerHTML = "地方公共団体の議会の議員ってどんなもの？";
      question = new Array("| ?-def(議員(議会(地方公共団体)), X, N).<br>",
                          "X       = 直接選挙(by(住民(その地方公共団体))),",
                          "N       = 93-2");
      result = "地方公共団体の議会の議員ってどんなもの？<br><br>地方公共団体の議会の議員は、その地方公共団体の住民によって、直接選挙されます。<br>(第93条第2項)";
    } else if (select2Val == "吏員(地方公共団体, by(法律))") {
      ele.innerHTML = "法律の定める地方公共団体の吏員ってどんなもの？";
      question = new Array("| ?-def(吏員(地方公共団体, by(法律)), X, N).<br>",
                          "X       = 直接選挙(by(住民(その地方公共団体))),",
                          "N       = 93-2");
      result = "法律の定める地方公共団体の吏員ってどんなもの？<br><br>法律の定める地方公共団体の吏員は、その地方公共団体の住民によって、直接選挙されます。<br>(第93条第2項)";
    } else if (select2Val == "憲法") {
      ele.innerHTML = "憲法ってなに？";
      question = new Array("| ?-def(憲法, X, N).<br>",
                          "X       = 最高法規(国),",
                          "N       = 98-1;",
                          "X       = 施行(on(公布の日から起算して六箇月を経過した日)),",
                          "N       = 100-1");
      result = "憲法ってなに？<br><br>憲法は、国の最高法規です。<br>(第98条第1項)<br>憲法は、公布の日から起算して六箇月を経過した日に施行します。<br>(第100条第1項)";
    }
  }

  else if (select1Val == "by") {
    if (select2Val == "天皇") {
      ele.innerHTML = "天皇の地位は何で定められている？";
      question = new Array("| ?-by(天皇, X, N).<br>",
                          "X       = 基づく(地位,日本国民の総意),",
                          "N       = 1");
      result = "天皇の地位は何で定められている？<br><br>天皇の地位は日本国民の総意に基づいています。(第1条)";
    } else if (select2Val == "皇位") {
      ele.innerHTML = "皇位は何で定められている？";
      question = new Array("| ?-by(皇位, X, N).<br>",
                          "X       = 継承する(皇室典範の定め),",
                          "N       = 2");
      result = "皇位は何で定められている？<br><br>皇位は皇室典範の定めで継承されます(第2条)";
    } else if (select2Val == "天皇") {
      ele.innerHTML = "天皇は何をすることができる？";
    } else if (select2Val == "国会議員") {
      ele.innerHTML = "国会議員はなにをすることができる？";
    } else if (select2Val == "摂政") {
      ele.innerHTML = "摂政は何で定められている？";
      question = new Array("| ?-by(摂政, X, N).<br>",
                          "X       = 定める(皇室典範),",
                          "N       = 5");
      result = "摂政は何で定められている？<br><br>皇室典範で定められています(第5条)";
    } else if (select2Val == "皇室への財産譲渡") {
      ele.innerHTML = "皇室への財産譲渡は何に基づく？";
      question = new Array("| ?-by(皇室への財産譲渡, X, N).<br>",
                          "X       = 国会の議決,",
                          "N       = 8");
      result = "皇室への財産譲渡は何に基づく？<br><br>皇室への財産譲渡は国会の議決に基づきます。(第8条)";
    } else if (select2Val == "皇室の財産譲受") {
      ele.innerHTML = "皇室の財産譲受は何に基づく？";
      question = new Array("| ?-by(皇室の財産譲受, X, N).<br>",
                          "X       = 国会の議決,",
                          "N       = 8");
      result = "皇室の財産譲受は何に基づく？<br><br>皇室の財産譲受は国会の議決に基づきます。(第8条)";
    } else if (select2Val == "皇室の財産賜与") {
      ele.innerHTML = "皇室の財産賜与は何に基づく？";
      question = new Array("| ?-by(皇室の財産賜与, X, N).<br>",
                          "X       = 国会の議決,",
                          "N       = 8");
      result = "皇室の財産賜与は何に基づく？<br><br>皇室の財産賜与は国会の議決に基づきます。(第8条)";
    } else if (select2Val == "日本国民の要件") {
      ele.innerHTML = "日本国民の要件は何で定められている？";
      question = new Array("| ?-by(日本国民の要件, X, N).<br>",
                          "X       = 法律で定める,",
                          "N       = 10");
      result = "日本国民の要件は何で定められている？<br><br>日本国民の要件は法律で定められています。(第10条)";
    } else if (select2Val == "勤労条件に関する基準") {
      ele.innerHTML = "勤労条件の基準は何で定められている？";
      question = new Array("| ?-by(勤労条件に関する基準, X, N).<br>",
                          "X       = 法律,",
                          "N       = 27-2");
      result = "勤労条件の基準は何で定められている？<br><br>勤労条件に関する基準は法律で定められています。(第27条第2項)";
    } else if (select2Val == "財産権") {
      ele.innerHTML = "財産権の内容は何で定められている？";
      question = new Array("| ?-by(財産権, X, N).<br>",
                          "X       = 法律,",
                          "N       = 29-2");
      result = "財産権の内容は何で定められている？<br><br>財産権の内容は法律で定められています。(第29条第2項)";
    } else if (select2Val == "議員定数(両議院)") {
      ele.innerHTML = "両議院の議員定数は何で定められている？";
      question = new Array("| ?-by(議員定数(両議院), X, N).<br>",
                          "X       = 法律,",
                          "N       = 43-2");
      result = "両議院の議員定数は何で定められている？<br><br>両議院の議員定数は法律で定められています。(第43条第2項)";
    } else if (select2Val == "議員資格") {
      ele.innerHTML = "議員資格は何で定められている？";
      question = new Array("| ?-by(議員資格, X, N).<br>",
                          "X       = 法律,",
                          "N       = 44");
      result = "議員資格は何で定められている？<br><br>議員資格は法律で定められています。(第44条)";
    } else if (select2Val == "選挙人資格") {
      ele.innerHTML = "選挙人資格は何で定められている？";
      question = new Array("| ?-by(選挙人資格, X, N).<br>",
                          "X       = 法律,",
                          "N       = 44");
      result = "選挙人資格は何で定められている？<br><br>選挙人資格は法律で定められています。(第44条)";
    } else if (select2Val == "選挙に関する事項") {
      ele.innerHTML = "選挙に関する事項は何で定められている？";
      question = new Array("| ?-by(選挙に関する事項, X, N).<br>",
                          "X       = 法律,",
                          "N       = 47");
      result = "選挙に関する事項は何で定められている？<br><br>選挙に関する事項は、法律で定められています。(第47条)";
    } else if (select2Val == "弾劾に関する事項") {
      ele.innerHTML = "弾劾に関する事項は何で定められている？";
      question = new Array("| ?-by(弾劾に関する事項, X, N).<br>",
                          "X       = 法律,",
                          "N       = 64-2");
      result = "弾劾に関する事項は何で定められている？<br><br>弾劾に関する事項は、法律で定められています。(第64条第2項)";
    } else if (select2Val == "員数(裁判官(最高裁判所))") {
      ele.innerHTML = "最高裁判所の裁判官の員数は何で定められている？";
      question = new Array("| ?-by(員数(裁判官(最高裁判所)), X, N).<br>",
                          "X       = 法律,",
                          "N       = 79-1");
      result = "最高裁判所の裁判官の員数は何で定められている？<br><br>最高裁判所の裁判官の員数は、法律で定められています。(第79条第1項)";
    } else if (select2Val == "審査に関する事項") {
      ele.innerHTML = "審査に関する事項は何で定められている？";
      question = new Array("| ?-by(審査に関する事項, X, N).<br>",
                          "X       = 法律,",
                          "N       = 79-4");
      result = "審査に関する事項は何で定められている？<br><br>審査に関する事項は、法律で定められています。(第79条第4項)";
    } else if (select2Val == "組織(会計検査院)") {
      ele.innerHTML = "会計検査院の組織は何で定められている？";
      question = new Array("| ?-by(組織(会計検査院), X, N).<br>",
                          "X       = 法律,",
                          "N       = 90-2");
      result = "会計検査院の組織は何で定められている？<br><br>会計検査院の組織は、法律で定められています。(第90条第2項)";
    } else if (select2Val == "権限(会計検査院)") {
      ele.innerHTML = "会計検査院の権限は何で定められている？";
      question = new Array("| ?-by(権限(会計検査院), X, N).<br>",
                          "X       = 法律,",
                          "N       = 90-2");
      result = "会計検査院の権限は何で定められている？<br><br>会計検査院の権限は、法律で定められています。(第90条第2項)";
    } else if (select2Val == "組織(地方公共団体)") {
      ele.innerHTML = "地方公共団体の組織は何で定められている？";
      question = new Array("| ?-by(組織(地方公共団体), X, N).<br>",
                          "X       = 法律(by(本旨(地方自治))),",
                          "N       = 92");
      result = "地方公共団体の組織は何で定められている？<br><br>地方公共団体の組織は、地方自治の本旨により、法律で定められています。(第92条)";
    } else if (select2Val == "運営(地方公共団体)") {
      ele.innerHTML = "地方公共団体の運営については何で定められている？";
      question = new Array("| ?-by(運営(地方公共団体), X, N).<br>",
                          "X       = 法律(by(本旨(地方自治))),",
                          "N       = 92");
      result = "地方公共団体の運営については何で定められている？<br><br>地方公共団体の運営については、地方自治の本旨により、法律で定められています。(第92条)";
    }
  }

  else if (select1Val == "need") {
    if (select2Val == "国事行為") {
      ele.innerHTML = "国事行為に必要なものは？";
      question = new Array("| ?-need(国事行為, X, N).<br>",
                          "X       = 内閣の助言,",
                          "N       = 3;",
                          "X       = 内閣の承認,",
                          "N       = 3");
      result = "国事行為に必要なものは？<br><br>内閣の助言と内閣の承認です。(第3条)";
    } else if (select2Val == "生命、自由及び幸福追求の権利") {
      ele.innerHTML = "生命、自由及び幸福追求の権利には何が必要？";
      question = new Array("| ?-need(生命、自由及び幸福追求の権利, X, N).<br>",
                          "X       = 最大の尊重(立法その他の国政の上で,extent(公共の福祉に反する場合)),",
                          "N       = 13");
      result = "生命、自由及び幸福追求の権利には何が必要？<br><br>公共の福祉に反する場合を除き、立法その他の国政の上で、最大の尊重が必要です。(第13条)";
    } else if (select2Val == "婚姻") {
      ele.innerHTML = "婚姻には何が必要？";
      question = new Array("| ?-need(婚姻, X, N).<br>",
                          "X       = 両性の合意,",
                          "N       = 24-1");
      result = "婚姻には何が必要？<br><br>婚姻には両性の合意が必要です。(第24条第1項)";
    } else if (select2Val == "法律") {
      ele.innerHTML = "法律には何が必要？";
      question = new Array("| ?-need(法律, X, N).<br>",
                          "X       = 制定(家族に関する事項,be_respected(個人の尊厳),be_respected(両性の本質的平等)),",
                          "N       = 24-2;",
                          "X       = 署名(国務大臣(主任)),",
                          "N       = 74;",
                          "X       = 連署(内閣総理大臣),",
                          "N       = 74");
      result = "法律には何が必要？<br><br>家族に関する事項の制定には個人の尊厳と両性の本質的平等の尊重が必要です。(第24条第2項)<br>主任の国務大臣の署名(第74条)<br>内閣総理大臣の連署(第74条)";
    } else if (select2Val == "財産権") {
      ele.innerHTML = "財産権には何が必要？";
      question = new Array("| ?-need(財産権, X, N).<br>",
                          "X       = 公共の福祉への適合,",
                          "N       = 29-2");
      result = "財産権には何が必要？<br><br>財産権には公共の福祉への適合が必要です。(第29条第2項)";
    } else if (select2Val == "正当な理由") {
      ele.innerHTML = "正当な理由はどうされる必要がある？";
      question = new Array("| ?-need(正当な理由, X, N).<br>",
                          "X       = 開示(公開の法廷(本人及び弁護人の出席)),",
                          "N       = 34");
      result = "正当な理由はどうされる必要がある？<br><br>正当な理由は本人及び弁護人の出席する公開の法廷で開示される必要があります。(第34条)";
    } else if (select2Val == "捜索") {
      ele.innerHTML = "捜索には何が必要？";
      question = new Array("| ?-need(捜索, X, N).<br>",
                          "X       = 令状(発行(権限を有する司法官権)),",
                          "N       = 35-2");
      result = "捜索には何が必要？<br><br>捜索には、権限を有する司法官権の発行する令状が必要です。(第35条第2項)";
    } else if (select2Val == "押収") {
      ele.innerHTML = "押収には何が必要？";
      question = new Array("| ?-need(押収, X, N).<br>",
                          "X       = 令状(発行(権限を有する司法官権)),",
                          "N       = 35-2");
      result = "押収には何が必要？<br><br>押収には、権限を有する司法官権の発行する令状が必要です。(第35条第2項)";
    } else if (select2Val == "議員資格の剥奪") {
      ele.innerHTML = "議員資格の剥奪には何が必要？";
      question = new Array("| ?-need(議員資格の剥奪, X, N).<br>",
                          "X       = 議決(三分の二以上の多数(出席議員)),",
                          "N       = 55");
      result = "議員資格の剥奪には何が必要？<br><br>議員資格の剥奪には、出席議員の三分の二以上の多数の議決が必要です。(第55条)";
    } else if (select2Val == "除名(議員)") {
      ele.innerHTML = "議員の除名には何が必要？";
      question = new Array("| ?-need(除名(議員), X, N).<br>",
                          "X       = 議決(三分の二以上の多数(出席議員)),",
                          "N       = 58-2");
      result = "議員の除名には何が必要？<br><br>議員の除名には、出席議員の三分の二以上の多数の議決が必要です。(第58条第2項)";
    } else if (select2Val == "国務大臣") {
      ele.innerHTML = "国務大臣には何が必要？";
      question = new Array("| ?-need(除名(議員), X, N).<br>",
                          "X       = 過半数は国会議員,",
                          "N       = 68-1");
      result = "国務大臣には何が必要？<br><br>国務大臣は、過半数は国会議員である必要があります。(第68条第1項)";
    } else if (select2Val == "政令") {
      ele.innerHTML = "政令には何が必要？";
      question = new Array("| ?-need(政令, X, N).<br>",
                          "X       = 署名(国務大臣(主任)),",
                          "N       = 74;",
                          "X       = 連署(内閣総理大臣),",
                          "N       = 74");
      result = "政令には何が必要？<br><br>主任の国務大臣の署名(第74条)<br>内閣総理大臣の連署(第74条)";
    } else if (select2Val == "課税") {
      ele.innerHTML = "課税には何が必要？";
      question = new Array("| ?-need(課税, X, N).<br>",
                          "X       = 法律又は法律の定める条件によること,",
                          "N       = 84");
      result = "課税には何が必要？<br><br>課税には、法律又は法律の定める条件によることが必要です。(第84条)";
    } else if (select2Val == "変更(租税(現行))") {
      ele.innerHTML = "現行の租税の変更には何が必要？";
      question = new Array("| ?-need(変更(租税(現行)), X, N).<br>",
                          "X       = 法律又は法律の定める条件によること,",
                          "N       = 84");
      result = "現行の租税の変更には何が必要？<br><br>現行の租税の変更には、法律又は法律の定める条件によることが必要です。(第84条)";
    } else if (select2Val == "支出(国費)") {
      ele.innerHTML = "国費の支出には何が必要？";
      question = new Array("| ?-need(支出(国費), X, N).<br>",
                          "X       = 基づく(議決(国会)),",
                          "N       = 85");
      result = "国費の支出には何が必要？<br><br>国費の支出は、国会の議決に基づくことが必要です。(第85条)";
    } else if (select2Val == "負担(債務(国))") {
      ele.innerHTML = "国の債務の負担には何が必要？";
      question = new Array("| ?-need(負担(債務(国)), X, N).<br>",
                          "X       = 基づく(議決(国会)),",
                          "N       = 85");
      result = "国の債務の負担には何が必要？<br><br>国の債務の負担は、国会の議決に基づくことが必要です。(第85条)";
    } else if (select2Val == "支出(予備費)") {
      ele.innerHTML = "予備費の支出には何が必要？";
      question = new Array("| ?-need(支出(予備費), X, N).<br>",
                          "X       = 承諾(国会,on(事後)),",
                          "N       = 87-2");
      result = "予備費の支出には何が必要？<br><br>予備費の支出には、事後の国会の承諾が必要です。(第87条第2項)";
    } else if (select2Val == "改正(憲法)") {
      ele.innerHTML = "憲法の改正には何が必要？";
      question = new Array("| ?-need(改正(憲法), X, N).<br>",
                          "X       = 発議(国会,on(賛成(三分の二以上(総議員(各議院))))),",
                          "N       = 96-1;",
                          "X       = 承認(国民),",
                          "N       = 96-1");
      result = "憲法の改正には何が必要？<br><br>各議院の総議員の三分の二以上の賛成の上での、国会の発議(第96条第1項)<br>国民の承認(第96条第1項)";
    } else if (select2Val == "承認(国民)") {
      ele.innerHTML = "国民の承認には何が必要？";
      question = new Array("| ?-need(承認(国民), X, N).<br>",
                          "X       = 賛成(過半数,on(国民投票,選挙の際行われる投票(by(国会)))),",
                          "N       = 96-1");
      result = "国民の承認には何が必要？<br><br>国会の定める選挙の際行われる投票または国民投票の上での、過半数の賛成<br>(第96条第1項)";
    } else if (select2Val == "条約") {
      ele.innerHTML = "条約には何が必要？";
      question = new Array("| ?-need(条約, X, N).<br>",
                          "X       = 遵守(憲法),",
                          "N       = 98-2");
      result = "条約には何が必要？<br><br>条約には、憲法の遵守が必要です。<br>(第98条第2項)";
    } else if (select2Val == "国際法規") {
      ele.innerHTML = "国際法規には何が必要？";
      question = new Array("| ?-need(国際法規, X, N).<br>",
                          "X       = 遵守(憲法),",
                          "N       = 98-2");
      result = "国際法規には何が必要？<br><br>国際法規には、憲法の遵守が必要です。<br>(第98条第2項)";
    }
  }

  else if (select1Val == "res") {
    if (select2Val == "国事行為") {
      ele.innerHTML = "国事行為の責任はどこにありますか？";
      question = new Array("| ?-res(国事行為, X, N).<br>",
                          "X       = 責任(内閣),",
                          "N       = 3");
      result = "国事行為の責任はどこにありますか？<br><br>内閣の責任です。(第3条)";
    } else if (select2Val == "国民") {
      ele.innerHTML = "国民の責任は？";
      question = new Array("| ?-res(国民, X, N).<br>",
                          "X       = 利用する(自由及び権利(for(公共の福祉))),",
                          "N       = 12");
      result = "国民の責任は？<br><br>国民は公共の福祉のために自由及び権利を利用する責任があります。(第12条)";
    } else if (select2Val == "内閣") {
      ele.innerHTML = "内閣の責任は？";
      question = new Array("| ?-res(内閣, X, N).<br>",
                          "X       = 行使(行政権(as(国会に対して連帯))),",
                          "N       = 66-3");
      result = "内閣の責任は？<br><br>内閣は、国会に対して連帯して、行政権を行使する責任があります。(第66条第3項)";
    }
  }

  else if (select1Val == "do") {
    if (select2Val == "天皇") {
      ele.innerHTML = "天皇はなにをするの？";
      question = new Array("| ?-do(天皇, X, N).<br>",
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
      question = new Array("| ?-do(摂政, X, N).<br>",
                          "X       = 国事行為(on(天皇の名)),",
                          "N       = 5");
      result = "摂政では何が行われる？<br><br>天皇の名で国事行為が行われます。(第5条)";
    } else if (select2Val == "両議院") {
      ele.innerHTML = "両議院がすることは？";
      question = new Array("| ?-do(両議院, X, N).<br>",
                          "X       = 裁判(議員の資格に関する訴訟),",
                          "N       = 55;",
                          "X       = 選任(議長),",
                          "N       = 58-1;",
                          "X       = 選任(その他の役員),",
                          "N       = 58-1");
      result = "両議院がすることは？<br><br>議員の資格に関する訴訟の裁判(第55条)<br>議長の選任(第58条第1項)<br>その他の役員の選任(第58条第1項)";
    } else if (select2Val == "指名(内閣総理大臣)") {
      ele.innerHTML = "内閣総理大臣の指名はどのように行う？";
      question = new Array("| ?-do(指名(内閣総理大臣), X, N).<br>",
                          "X       = すべての案件に先立つ,",
                          "N       = 67-1");
      result = "内閣総理大臣の指名はどのように行う？<br><br>内閣総理大臣の指名は、すべての案件に先立って行われます。(第67条第1項)";
    } else if (select2Val == "内閣総理大臣") {
      ele.innerHTML = "内閣総理大臣は何をするの？";
      question = new Array("| ?-do(内閣総理大臣, X, N).<br>",
                          "X       = 任命(国務大臣),",
                          "N       = 68-1;",
                          "X       = 国会に提出(議案,内閣を代表),",
                          "N       = 72;",
                          "X       = 国会に報告(一般国務及び外交関係),",
                          "N       = 72;",
                          "X       = 指揮監督(行政各部),",
                          "N       = 72;");
      result = "内閣総理大臣は何をする？<br><br>国務大臣の任命(第68条第1項)<br>内閣を代表して、議案を国会に提出(第72条)<br>一般国務及び外交関係を国会に報告(第72条)<br>行政各部の指揮監督(第72条)";
    } else if (select2Val == "内閣") {
      ele.innerHTML = "内閣は何をするの？";
      question = new Array("| ?-do(内閣, X, N).<br>",
                          "X       = 職務(あらたに内閣総理大臣が任命されるまで,case(70),case(69)),",
                          "N       = 71;",
                          "X       = 一般行政事務,",
                          "N       = 73;",
                          "X       = 事務(内閣),",
                          "N       = 73;",
                          "X       = 任命(裁判官(下級裁判所),by(名簿(最高裁判所の指名した者))),",
                          "N       = 80-1;",
                          "X       = 作成(予算(毎会計年度)),",
                          "N       = 86");
      result = "内閣は何をする？<br><br>第69条と第70条の場合、あらたに内閣総理大臣が任命されるまで職務を行う<br>(第71条)<br>一般行政事務<br>(第73条)<br>内閣の事務<br>(第73条)<br>最高裁判所の指名した者の名簿による下級裁判所裁判官の任命<br>(第80条第1項)<br>毎会計年度の予算の作成<br>(第86条)";
    } else if (select2Val == "裁判官") {
      ele.innerHTML = "裁判官は何をするの？";
      question = new Array("| ?-do(裁判官, X, N).<br>",
                          "X       = 職権(need(従う(良心)),need(独立)),",
                          "N       = 76-3");
      result = "裁判官は何をするの？<br><br>裁判官は、独立して良心に従い、職権を行います。(第76条第3項)";
    } else if (select2Val == "判決(裁判)") {
      ele.innerHTML = "裁判の判決はどのように行われる？";
      question = new Array("| ?-do(判決(裁判), X, N).<br>",
                          "X       = 公開法廷,",
                          "N       = 82-1");
      result = "裁判の判決はどのように行われる？<br><br>裁判の判決は、公開法廷で行われます。<br>(第82条第1項)";
    } else if (select2Val == "対審(裁判)") {
      ele.innerHTML = "裁判の対審はどのように行われる？";
      question = new Array("| ?-do(対審(裁判), X, N).<br>",
                          "X       = 公開法廷,",
                          "N       = 82-1");
      result = "裁判の対審はどのように行われる？<br><br>裁判の対審は、公開法廷で行われます。<br>(第82条第1項)";
    }
  }

  else if (select1Val == "have_not") {
    if (select2Val == "天皇") {
      ele.innerHTML = "天皇が持たないものは？";
      question = new Array("| ?-have_not(天皇, X, N).<br>",
                          "X       = 国政に関する権能,",
                          "N       = 4-1");
      result = "天皇が持たないものは？<br><br>天皇は国政に関する権能を持ちません。(第4条第1項)";
    } else if (select2Val == "日本") {
      ele.innerHTML = "日本が持たないものは？";
      question = new Array("| ?-have_not(日本, X, N).<br>",
                          "X       = 陸海空軍その他の戦力,",
                          "N       = 9-2");
      result = "日本が持たないものは？<br><br>日本は陸海空軍その他の戦力を持ちません。(第9条第2項)";
    } else if (select2Val == "全部又は一部(憲法に反する法律、命令、詔勅及び国務に関するその他の行為)") {
      ele.innerHTML = "憲法に反する法律、命令、詔勅及び国務に関するその他の行為の全部又は一部が持たないものは？";
      question = new Array("| ?-have_not(全部又は一部(憲法に反する法律、命令、詔勅及び国務に関するその他の行為), X, N).<br>",
                          "X       = 効力,",
                          "N       = 98-1");
      result = "憲法に反する法律、命令、詔勅及び国務に関するその他の行為の全部又は一部が持たないものは？<br><br>憲法に反する法律、命令、詔勅及び国務に関するその他の行為の全部又は一部は、効力を持ちません。<br>(第98条第1項)";
    }
  }

  else if (select1Val == "can") {
    if (select2Val == "天皇") {
      ele.innerHTML = "天皇ができることは？";
      question = new Array("| ?-can(天皇, X, N).<br>",
                          "X       = 委任(国事行為,by(法律)),",
                          "N       = 4-2");
      result = "天皇ができることは？<br><br>法律により、国事行為の委任ができます。(第4条第2項)";
    } else if (select2Val == "すべての人") {
      ele.innerHTML = "すべての人ができることは？";
      question = new Array("| ?-can(すべての人, X, N).<br>",
                          "X       = 賠償請求(公務員の不法行為による損害,by(法律),国又は公共団体),",
                          "N       = 17;",
                          "X       = 賠償請求(case(無罪の裁判を受けたとき(case(抑留後),case(拘禁後))),by(法律),国),",
                          "N       = 40;");
      result = "すべての人ができることは？<br><br>すべての人は、国又は公共団体に、法律の定めるところにより、公務員の不法行為による損害の賠償請求ができます。(第17条)<br>すべての人は、抑留後または拘禁後に無罪の裁判を受けたときは、法律の定めるところにより、国に賠償請求ができます。(第40条)";
    } else if (select2Val == "私有財産") {
      ele.innerHTML = "私有財産はどのように使われる？";
      question = new Array("| ?-can(私有財産, X, N).<br>",
                          "X       = 使用(for(公共(正当な保障の下))),",
                          "N       = 29-3");
      result = "私有財産はどのように使われる？<br><br>正当な保障の下、公共のために使用されることがあります。(第29条第3項)";
    } else if (select2Val == "刑事被告人") {
      ele.innerHTML = "刑事被告人ができることは？";
      question = new Array("| ?-can(刑事被告人, X, N).<br>",
                          "X       = 資格を有する弁護人の依頼(not(例外)),",
                          "N       = 37-3");
      result = "刑事被告人ができることは？<br><br>刑事被告人は、例外なく、資格を有する弁護人の依頼をすることができます。(第37条第3項)";
    } else if (select2Val == "内閣") {
      ele.innerHTML = "内閣ができることは？";
      question = new Array("| ?-can(内閣, X, N).<br>",
                          "X       = 決定(召集(臨時会(国会))),",
                          "N       = 53;",
                          "X       = 求める(緊急集会(参議院),case(国に緊急の必要があるとき)),",
                          "N       = 54-2");
      result = "内閣ができることは？<br><br>内閣は、国会の臨時会を召集をすることができます。(第53条)<br>内閣は、国に緊急の必要があるときは、参議院の緊急集会を求めることができます。(第54条第2項)";
    } else if (select2Val == "会議(両議院)") {
      ele.innerHTML = "両議院の会議ができることは？";
      question = new Array("| ?-can(会議(両議院), X, N).<br>",
                          "X       = 秘密会(case(議決(三分の二以上の多数(出席議員)))),",
                          "N       = 57-1");
      result = "両議院の会議ができることは？<br><br>両議院の会議は、出席議院の三分の二以上の多数の議決がある場合、秘密会とすることができます。(第57条第1項)";
    } else if (select2Val == "両議院") {
      ele.innerHTML = "両議院ができることは？";
      question = new Array("| ?-can(両議院, X, N).<br>",
                          "X       = 定める(会議その他の手続及び内部の規律に関する規則),",
                          "N       = 58-2;",
                          "X       = 懲罰(院内の秩序をみだした議員),",
                          "N       = 58-2;",
                          "X       = 国政に関する調査,",
                          "N       = 62;",
                          "X       = 要求(証人の出頭、証人の証言、記録の提出),",
                          "N       = 62");
      result = "両議院ができることは？<br><br>会議その他の手続及び内部の規律に関する規則を定めること(第58条第2項)<br>院内の秩序をみだした議員の懲罰(第58条第2項)<br>国政に関する調査(第62条)<br>証人の出頭、証人の証言、記録の提出の要求(第62条)";
    } else if (select2Val == "衆議院") {
      ele.innerHTML = "衆議院ができることは？";
      question = new Array("| ?-can(衆議院, X, N).<br>",
                          "X       = みなす(否決(参議院),case(衆議院の可決した法律案を受け取つた後、国会休会中の期間を除いて六十日以内に、議決しないとき)),",
                          "N       = 59-4");
      result = "衆議院ができることは？<br><br>衆議院は、衆議院の可決した法律案を受け取つた後、国会休会中の期間を除いて六十日以内に、議決しないとき、参議院の否決とみなすことができます。(第59条第4項)";
    } else if (select2Val == "内閣総理大臣") {
      ele.innerHTML = "内閣総理大臣ができることは？";
      question = new Array("| ?-can(内閣総理大臣, X, N).<br>",
                          "X       = 出席(議院,for(議案についての発言)),",
                          "N       = 63;",
                          "X       = 罷免(国務大臣,on(任意)),",
                          "N       = 68-2");
      result = "内閣総理大臣ができることは？<br><br>内閣総理大臣は、議案についての発言のために、議院に出席することができます。<br>(第63条)<br>内閣総理大臣は、任意に、国務大臣を罷免することができます。<br>(第68条第2項)";
    } else if (select2Val == "国務大臣") {
      ele.innerHTML = "国務大臣ができることは？";
      question = new Array("| ?-can(国務大臣, X, N).<br>",
                          "X       = 出席(議院,for(議案についての発言)),",
                          "N       = 63");
      result = "国務大臣ができることは？<br><br>国務大臣は、議案についての発言のために、議院に出席することができます。(第63条)";
    } else if (select2Val == "最高裁判所") {
      ele.innerHTML = "最高裁判所ができることは？";
      question = new Array("| ?-can(最高裁判所, X, N).<br>",
                          "X       = 委任(for(下級裁判所),規則を定める権限(about(下級裁判所))),",
                          "N       = 77-3");
      result = "最高裁判所ができることは？<br><br>最高裁判所は、下級裁判所についての規則を定める権限を、下級裁判所に委任することができます。(第77条第3項)";
    } else if (select2Val == "対審") {
      ele.innerHTML = "対審はどうすることができる？";
      question = new Array("| ?-can(対審, X, N).<br>",
                          "X       = 非公開(case(決定(全員一致(裁判官(as(公の秩序又は善良の風俗を害する虞がある)))))),",
                          "N       = 82-2");
      result = "対審はどうすることができる？<br><br>対審は、公の秩序又は善良の風俗を害する虞があると裁判官の全員一致の決定があった場合、非公開とすることができます。(第82条第2項)";
    } else if (select2Val == "地方公共団体") {
      ele.innerHTML = "地方公共団体ができることは？";
      question = new Array("| ?-can(地方公共団体, X, N).<br>",
                          "X       = 制定(条例,on(範囲内(法律))),",
                          "N       = 94");
      result = "地方公共団体ができることは？<br><br>地方公共団体は、法律の範囲内で、条例を制定することができます。(第94条)";
    } else if (select2Val == "制定(法律(for(施行(憲法))))") {
      ele.innerHTML = "憲法の施行のために法律を制定できる？";
      question = new Array("| ?-can(制定(法律(for(施行(憲法)))), X, N).<br>",
                          "X       = 期日より前(100-1),",
                          "N       = 100-2");
      result = "憲法の施行のために法律を制定できる？<br><br>憲法の施行のために、第100条第1項の期日より前に法律を制定することができます。<br>(第100条第2項)";
    } else if (select2Val == "準備手続(for(施行(憲法)))") {
      ele.innerHTML = "憲法の施行のために準備手続をすることができる？";
      question = new Array("| ?-can(準備手続(for(施行(憲法))), X, N).<br>",
                          "X       = 期日より前(100-1),",
                          "N       = 100-2");
      result = "憲法の施行のために準備手続をすることができる？<br><br>憲法の施行のために、第100条第1項の期日より前に準備手続をすることができます。<br>(第100条第2項)";
    }
  }

  else if (select1Val == "apply") {
    if (select2Val == "摂政") {
      ele.innerHTML = "摂政について関係する規定は？";
      question = new Array("| ?-apply(摂政, X, N).<br>",
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
    question = new Array("| ?-call(日本国民, X, N).<br>",
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
    question = new Array("| ?-renounce(日本国民, X, N).<br>",
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
    question = new Array("| ?-not_recognize(日本, X, N).<br>",
                          "X       = 国の交戦権,",
                          "N       = 9-2");
      result = "日本では何が認められない？<br><br>日本では国の交戦権が認められません。(第9条第2項)";
    } else if (select2Val == "憲法") {
      ele.innerHTML = "憲法では何が認められない？";
      question = new Array("| ?-not_recognize(憲法, X, N).<br>",
                          "X       = 華族その他の貴族の制度,",
                          "N       = 14-2");
      result = "憲法では何が認められない？<br><br>憲法では華族その他の貴族の制度が認められません。(第14条第2項)";
    } else if (select2Val == "栄典") {
      ele.innerHTML = "栄典では何が認められない？";
      question = new Array("| ?-not_recognize(栄典, X, N).<br>",
                          "X       = 特権,",
                          "N       = 14-3");
      result = "栄典では何が認められない？<br><br>栄典では特権が認められません。(第14条第3項)";
    }
  }

  else if (select1Val == "not_be_prevented") {
    if (select2Val == "国民") {
      ele.innerHTML = "国民は何を妨げられない？";
    question = new Array("| ?-not_be_prevented(国民, X, N).<br>",
                          "X       = 基本的人権の享有,",
                          "N       = 11");
      result = "国民は何を妨げられない？<br><br>国民は基本的人権の享有を妨げられません。(第11条)";
    } else if (select2Val == "国") {
      ele.innerHTML = "国は何を侵してはいけない？";
      question = new Array("| ?-not_be_prevented(国, X, N).<br>",
                          "X       = 投票の秘密,",
                          "N       = 15-4");
      result = "国は何を侵してはいけない？<br><br>国は投票の秘密を侵してはいけません。(第15条第4項)";
    } else if (select2Val == "すべての人") {
      ele.innerHTML = "すべての人は何を侵害されない？";
      question = new Array("| ?-not_be_prevented(すべての人, X, N).<br>",
                          "X       = 外国に移住し、又は国籍を離脱する自由,",
                          "N       = 22-2;",
                          "X       = 裁判を受ける権利,",
                          "N       = 32;",
                          "X       = 侵入、捜索及び押収を受けることのない権利(extent(33),need(令状(need(正当な理由),need(捜索する場所及び押収する物の明示)))),",
                          "N       = 35-1");
      result = "すべての人は何を侵害されない？<br><br>外国に移住し、又は国籍を離脱する自由(第22条第2項)<br>裁判を受ける権利(第32条)<br>第33条の場合を除き、正当な理由と捜索する場所及び押収する物の明示する令状なしに、侵入、捜索及び押収を受けることのない権利(第35条第1項)";
    } else if (select2Val == "規定(59-2)") {
      ele.innerHTML = "第59条第2項の規定は何を妨げない？";
      question = new Array("| ?-not_be_prevented(規定(59-2), X, N).<br>",
                          "X       = 開催(両議院協議会,衆議院,by(法律)),",
                          "N       = 59-3");
      result = "第59条第2項の規定は何を妨げない？<br><br>第59条第2項の規定は、法律の定めるところにより、衆議院が、両議院協議会を開催することを妨げません。(第59条第3項)";
    }
  }

  else if (select1Val == "guarantee") {
    if (select2Val == "憲法") {
      ele.innerHTML = "憲法が保障するものは？";
    question = new Array("| ?-guarantee(憲法, X, N).<br>",
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
    question = new Array("| ?-confer(基本的人権, X, N).<br>",
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
    question = new Array("| ?-maintain(国民, X, N).<br>",
                          "X       = 憲法が保障する自由及び権利(by(不断の努力)),",
                          "N       = 12");
      result = "国民が保持しなければならないものは？<br><br>国民は不断の努力によって、憲法が保障する自由及び権利を保持しなければならない。(第12条)";
    } else if (select2Val == "夫婦") {
      ele.innerHTML = "夫婦は何を維持する？";
      question = new Array("| ?-maintain(夫婦, X, N).<br>",
                          "X       = 婚姻(by(相互の協力)),",
                          "N       = 24-1");
      result = "夫婦は何を維持する？<br><br>夫婦は相互の協力により婚姻を維持します。(第24条第1項)";
    }
  }

  else if (select1Val == "ban") {
    if (select2Val == "国民") {
      ele.innerHTML = "国民が禁止されていることは？";
      question = new Array("| ?-ban(国民, X, N).<br>",
                          "X       = 濫用(自由及び権利),",
                          "N       = 12");
      result = "国民が禁止されていることは？<br><br>国民は自由及び権利の濫用が禁止されています。(第12条)";
    } else if (select2Val == "宗教団体") {
      ele.innerHTML = "宗教団体がしてはいけないことは？";
      question = new Array("| ?-ban(宗教団体, X, N).<br>",
                          "X       = 受ける(国からの特権),",
                          "N       = 20-1;",
                          "X       = 行使(政治上の権力),",
                          "N       = 20-1");
      result = "宗教団体がしてはいけないことは？<br><br>国からの特権を受けること(第20条第1項)<br>政治上の権力の行使(第20条第1項)";
    } else if (select2Val == "国及びその機関") {
      ele.innerHTML = "国及びその機関は何を禁止されている？";
      question = new Array("| ?-ban(国及びその機関, X, N).<br>",
                          "X       = 宗教的活動,",
                          "N       = 20-3");
      result = "国及びその機関は何を禁止されている？<br><br>国及びその機関は宗教的活動を禁止されています。(第20条第3項)";
    } else if (select2Val == "国") {
      ele.innerHTML = "国は何を禁止されている？";
      question = new Array("| ?-ban(国, X, N).<br>",
                          "X       = 検閲,",
                          "N       = 21-2;",
                          "X       = 侵害(通信の秘密),",
                          "N       = 21-2;");
      result = "国は何を禁止されている？<br><br>検閲(第21条第2項)<br>通信の秘密の侵害(第21条第2項)";
    } else if (select2Val == "憲法") {
      ele.innerHTML = "憲法が禁止していることは？";
      question = new Array("| ?-ban(憲法, X, N).<br>",
                          "X       = 侵害(財産権),",
                          "N       = 29-1");
      result = "憲法が禁止していることは？<br><br>憲法は財産権の侵害を禁止しています。(第29条第1項)";
    } else if (select2Val == "公務員") {
      ele.innerHTML = "公務員が禁止されていることは？";
      question = new Array("| ?-ban(公務員, X, N).<br>",
                          "X       = 拷問,",
                          "N       = 36;",
                          "X       = 残虐な刑罰,",
                          "N       = 36");
      result = "公務員が禁止されていることは？<br><br>拷問(第36条)<br>残虐な刑罰(第36条)";
    }
  }

  else if (select1Val == "be_respected") {
    if (select2Val == "国民") {
      ele.innerHTML = "国民はどのように尊重される？";
      question = new Array("| ?-be_respected(国民, X, N).<br>",
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
    question = new Array("| ?-right(国民, X, N).<br>",
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
    } else if (select2Val == "すべての人") {
      ele.innerHTML = "すべての人に与えられている権利は？";
      question = new Array("| ?-right(すべての人, X, N).<br>",
                          "X       = 請願権(for(損害の救済),for(公務員の罷免),for(法律、命令又は規則の制定、廃止又は改正その他の事項)),",
                          "N       = 16;",
                          "X       = 侵入、捜索及び押収を受けることのない権利(住居、書類及び所持品),",
                          "N       = 35-1");
      result = "すべての人に与えられている権利は？<br><br>損害の救済、公務員の罷免、法律、命令又は規則の制定、廃止又は改正その他の事項に関する請願権(第16条)<br>住居、書類及び所持品について、侵入、捜索及び押収を受けることのない権利(第35条第1項)";
    } else if (select2Val == "夫婦") {
      ele.innerHTML = "夫婦はどのような権利を持っている？";
      question = new Array("| ?-right(夫婦, X, N).<br>",
                          "X       = 同等,",
                          "N       = 24-1");
      result = "夫婦はどのような権利を持っている？<br><br>夫婦は同等の権利を持っています。(第24条第1項)";
    } else if (select2Val == "刑事被告人") {
      ele.innerHTML = "刑事被告人が持つ権利は？";
      question = new Array("| ?-right(刑事被告人, X, N).<br>",
                          "X       = 公平な裁判所の迅速な公開裁判を受ける権利",
                          "N       = 37-1;",
                          "X       = 証人を求める権利(on(公費),on(強制手続),for(自己)),",
                          "N       = 37-2;",
                          "X       = 国選弁護人の依頼(case(自ら依頼することができない)),",
                          "N       = 37-3");
      result = "刑事被告人が持つ権利は？<br><br>公平な裁判所の迅速な公開裁判を受ける権利<br>(第37条第1項)<br>自己のために、強制手続きにより、公費で、証人を求める権利<br>(第37条第2項)<br>自ら依頼することができない場合、国選弁護人の依頼<br>(第37条第3項)";
    }
  }

  else if (select1Val == "not") {
    if (select2Val == "国民") {
      ele.innerHTML = "国民は何をされない？";
      question = new Array("| ?-not(国民, X, N).<br>",
                          "X       = 差別(政治的、経済的又は社会的関係において,人種、信条、性別、社会的身分又は門地により),",
                          "N       = 14-1");
      result = "国民は何をされない？<br><br>国民は、政治的、経済的又は社会的関係において、人種、信条、性別、社会的身分又は門地により、差別されません。(第14条第1項)";
    } else if (select2Val == "公務員") {
      ele.innerHTML = "公務員は何ではない？";
      question = new Array("| ?-not(公務員, X, N).<br>",
                          "X       = 一部の奉仕者,",
                          "N       = 15-2");
      result = "公務員は何ではない？<br><br>公務員は一部の奉仕者ではありません。(第15条第2項)";
    } else if (select2Val == "すべての人") {
      ele.innerHTML = "すべての人は何をされない？";
      question = new Array("| ?-not(すべての人, X, N).<br>",
                          "X       = 差別待遇(for(請願)),",
                          "N       = 16;",
                          "X       = 奴隷的拘束,",
                          "N       = 18;",
                          "X       = 苦役(extent(犯罪に因る処罰)),",
                          "N       = 18;",
                          "X       = 強制(宗教上の行為、祝典、儀式又は行事に参加すること),",
                          "N       = 20-2;",
                          "X       = 生命の剥奪(extent(法律に定める手続き)),",
                          "N       = 31;",
                          "X       = 自由の剥奪(extent(法律に定める手続き)),",
                          "N       = 31;",
                          "X       = 刑罰(extent(法律に定める手続き)),",
                          "N       = 31;",
                          "X       = 逮捕(extent(現行犯逮捕),need(令状(need(権限を有する司法官憲の発行,need(理由の明示))))),",
                          "N       = 33;",
                          "X       = 抑留(need(理由の告知),need(弁護人に依頼する権利)),",
                          "N       = 34;",
                          "X       = 拘禁(need(理由の告知),need(弁護人に依頼する権利),need(正当な理由)),",
                          "N       = 34;",
                          "X       = 強要(自己に不利益な供述),",
                          "N       = 38-1;",
                          "X       = 有罪(case本人の自白(自己に不利益な唯一の証拠)),",
                          "N       = 38-3;",
                          "X       = 刑罰(case本人の自白(自己に不利益な唯一の証拠)),",
                          "N       = 38-3;");
      result = "すべての人は何をされない？<br><br>請願をしたことによる差別待遇(第16条)<br>奴隷的拘束(第18条)<br>犯罪に因る処罰を除く苦役(第18条)<br>宗教上の行為、祝典、儀式又は行事に参加することの強制(第20条第2項)<br>法律に定める手続きを除く生命の剥奪(第31条)<br>法律に定める手続きを除く自由の剥奪(第31条)<br>法律に定める手続きを除く刑罰(第31条)<br>現行犯逮捕を除く、権限を有する司法官憲の発行した理由の明示する令状のない逮捕(第33条)<br>理由の告知と弁護人に依頼する権利のない抑留(第34条)<br>理由の告知、弁護人に依頼する権利、正当な理由のない拘禁(第34条)<br>自己に不利益な供述の強要(第38条第1項)<br>自己に不利益な唯一の証拠が本人の自白の場合、有罪とされない(第38条第3項)<br>自己に不利益な唯一の証拠が本人の自白の場合、刑罰を科されない(第38条第3項)";
    } else if (select2Val == "児童") {
      ele.innerHTML = "児童は何をされない？";
      question = new Array("| ?-not(児童, X, N).<br>",
                          "X       = 酷使,",
                          "N       = 27-3");
      result = "児童は何をされない？<br><br>酷使(第27条第3項)";
    } else if (select2Val == "議員") {
      ele.innerHTML = "議員は何をされない？";
      question = new Array("| ?-not(議員, X, N).<br>",
                          "X       = 差別(by(人種),by(信条),by(性別),by(社会的身分),by(門地),by(教育),by(財産),by(収入)),",
                          "N       = 44");
      result = "議員は何をされない？<br><br>人種による差別<br>信条による差別<br>性別による差別<br>社会的身分による差別<br>教育による差別<br>財産による差別<br>収入による差別<br>(第44条)";
    } else if (select2Val == "選挙人") {
      ele.innerHTML = "選挙人は何をされない？";
      question = new Array("| ?-not(選挙人, X, N).<br>",
                          "X       = 差別(by(人種),by(信条),by(性別),by(社会的身分),by(門地),by(教育),by(財産),by(収入)),",
                          "N       = 44");
      result = "選挙人は何をされない？<br><br>人種による差別<br>信条による差別<br>性別による差別<br>社会的身分による差別<br>教育による差別<br>財産による差別<br>収入による差別<br>(第44条)";
    } else if (select2Val == "両議院議員") {
      ele.innerHTML = "議員は何をされない？";
      question = new Array("| ?-not(両議院議員, X, N).<br>",
                          "X       = 逮捕(extent(法律),case(会期中(国会))),",
                          "N       = 50");
      result = "議員は何をされない？<br><br>両議院の議員は、国会の会期中、法律の定める場合を除いて、逮捕されません。(第50条)";
    } else if (select2Val == "国務大臣") {
      ele.innerHTML = "国務大臣は何をされない？";
      question = new Array("| ?-not(国務大臣, X, N).<br>",
                          "X       = 訴追(在任中,extent(同意(内閣総理大臣))),",
                          "N       = 75");
      result = "国務大臣は何をされない？<br><br>国務大臣は、内閣総理大臣の同意があるときを除いて、在任中は起訴されません。(第75条)";
    } else if (select2Val == "公金") {
      ele.innerHTML = "公金はどうしてはいけない？";
      question = new Array("| ?-not(公金, X, N).<br>",
                          "X       = 支出(for(宗教上の組織若しくは団体の使用、便益若しくは維持)),",
                          "N       = 89;",
                          "X       = 支出(for(公の支配に属しない慈善、教育若しくは博愛の事業)),",
                          "N       = 89");
      result = "公金はどうしてはいけない？<br><br>宗教上の組織若しくは団体の使用、便益若しくは維持のための支出(第89条)<br>公の支配に属しない慈善、教育若しくは博愛の事業のための支出(第89条)";
    } else if (select2Val == "財産(公)") {
      ele.innerHTML = "公の財産はどうしてはいけない？";
      question = new Array("| ?-not(財産(公), X, N).<br>",
                          "X       = 支出(for(宗教上の組織若しくは団体の使用、便益若しくは維持)),",
                          "N       = 89;",
                          "X       = 支出(for(公の支配に属しない慈善、教育若しくは博愛の事業)),",
                          "N       = 89");
      result = "公の財産はどうしてはいけない？<br><br>宗教上の組織若しくは団体の使用、便益若しくは維持のための支出(第89条)<br>公の支配に属しない慈善、教育若しくは博愛の事業のための支出(第89条)";
    } 
  }

  else if (select1Val == "no_res") {
    if (select2Val == "選挙人") {
      ele.innerHTML = "選挙人は何の責任を問われない？";
    question = new Array("| ?-no_res(選挙人, X, N).<br>",
                          "X       = 選択,",
                          "N       = 15-4");
    result = "選挙人は何の責任を問われない？<br><br>国民は選択の責任を問われません。(第15条第4項)";
    } else if (select2Val == "両議院議員") {
      ele.innerHTML = "議員は何の責任を問われない？";
      question = new Array("| ?-no_res(両議院議員, X, N).<br>",
                          "X       = 議院で行った演説(on(院外)),",
                          "N       = 51;",
                          "X       = 議院で行った討論(on(院外)),",
                          "N       = 51;",
                          "X       = 議院で行った表決(on(院外)),",
                          "N       = 51");
      result = "議員は何の責任を問われない？<br><br>両議院の議員は、議院で行った演説について、院外で責任を問われません。<br>両議院の議員は、議院で行った表決について、院外で責任を問われません。<br>両議院の議員は、議院で行った演説について、院外で責任を問われません。<br>(第51条)";
    }
  }

  else if (select1Val == "have") {
    if (select2Val == "すべての人") {
      ele.innerHTML = "すべての人は何を持っている？";
    question = new Array("| ?-have(すべての人, X, N).<br>",
                          "X       = 居住、移転及び職業選択の自由(extent(公共の福祉に反する場合)),",
                          "N       = 22-1");
    result = "すべての人は何を持っている？<br><br>すべての人は、公共の福祉に反する場合を除き、居住、移転及び職業選択の自由を持っています。(第22条第1項)";
    } else if (select2Val == "最高裁判所") {
      ele.innerHTML = "最高裁判所は何を持っている？";
      question = new Array("| ?-have(最高裁判所, X, N).<br>",
                          "X       = 権限(定める(規則,about(訴訟に関する手続、弁護士、裁判所の内部規律及び司法事務処理に関する事項))),",
                          "N       = 77-1");
      result = "最高裁判所は何を持っている？<br><br>訴訟に関する手続、弁護士、裁判所の内部規律及び司法事務処理に関する事項について、規則を定める権限<br>(第77条第1項)";
    } else if (select2Val == "地方公共団体") {
      ele.innerHTML = "地方公共団体は何を持っている？";
      question = new Array("| ?-have(地方公共団体, X, N).<br>",
                          "X       = 権限(財産管理),",
                          "N       = 94;",
                          "X       = 権限(事務処理),",
                          "N       = 94;",
                          "X       = 権限(執行(行政)),",
                          "N       = 94");
      result = "地方公共団体は何を持っている？<br><br>財産管理の権限<br>事務処理の権限<br>行政の執行の権限<br>(第94条)";
    }
  }

  else if (select1Val == "shall") {
    if (select2Val == "国") {
      ele.innerHTML = "国の義務は？";
    question = new Array("| ?-shall(国, X, N).<br>",
                          "X       = 社会福祉の向上及び増進,",
                          "N       = 25-2;",
                          "X       = 社会保障の向上及び増進,",
                          "N       = 25-2;",
                          "X       = 公衆衛生の向上及び増進,",
                          "N       = 25-2;",
                          "X       = 総選挙(衆議院議員,case(衆議院解散),on(解散の日から四十日以内)),",
                          "N       = 54-1;",
                          "X       = 召集(国会,case(衆議院総選挙),on(選挙の日から三十日以内)),",
                          "N       = 54-1");
    result = "国の義務は？<br><br>社会福祉の向上及び増進<br>社会保障の向上及び増進<br>公衆衛生の向上及び増進<br>(第25条第2項)<br>衆議院解散のとき、解散の日から四十日以内に、衆議院議員の総選挙をしなければならない。<br>衆議院総選挙のとき、選挙の日から三十日以内に、国会の召集をしなければならない。<br>(第54条第1項)";
    } else if (select2Val == "国民") {
      ele.innerHTML = "国民の義務は？";
      question = new Array("| ?-shall(国民, X, N).<br>",
                          "X       = 普通教育を受けさせる義務(for(保護する子女),by(法律)),",
                          "N       = 26-2;",
                          "X       = 勤労,",
                          "N       = 27-1;",
                          "X       = 納税(by(法律)),",
                          "N       = 30");
      result = "国民の義務は？<br><br>法律の定めるところにより、保護する子女に、普通教育を受けさせる義務(第26条第2項)<br>勤労(第27条第1項)<br>法律の定めるところによる納税(第30条)";
    } else if (select2Val == "内閣") {
      ele.innerHTML = "内閣の義務は？";
      question = new Array("| ?-shall(内閣, X, N).<br>",
                          "X       = 決定(召集(臨時会(国会)),case(要求(四分の一以上(いずれかの議院の総議員)))),",
                          "N       = 53;",
                          "X       = 総辞職(case(可決(決議案(不信任)),on(衆議院),extent(十日以内の衆議院解散))),",
                          "N       = 69;",
                          "X       = 総辞職(case(否決(決議案(信任)),extent(十日以内の衆議院解散))),",
                          "N       = 69;",
                          "X       = 総辞職(case(内閣総理大臣が欠けたとき)),",
                          "N       = 70;",
                          "X       = 総辞職(case(衆議院議員総選挙の後に初めて国会の召集があつたとき)),",
                          "N       = 70;",
                          "X       = 提出(決算,検査報告書,for(国会),after(検査(会計検査院))),",
                          "N       = 90-1;",
                          "X       = 報告(about(財政状況(国)),for(国会及び国民),on(少なくとも毎年一回)),",
                          "N       = 91");
      result = "内閣の義務は？<br><br>いずれかの議院の総議員の四分の一以上の要求があった場合、国会の臨時会の召集を決定すること<br>(第53条)<br>衆議院で不信任の決議案が可決した場合、十日以内の衆議院解散がない限り、総辞職すること<br>(第69条)<br>信任の決議案が否決した場合、十日以内の衆議院解散がない限り、総辞職すること<br>(第69条)<br>内閣総理大臣が欠けたときは、総辞職すること<br>(第70条)<br>衆議院議員総選挙の後に初めて国会の召集があつたときは、総辞職すること<br>(第70条)<br>会計検査院の検査の後、国会に決算と検査報告書を提出すること<br>(第90条第1項)<br>少なくとも毎年一回、国会及び国民に対し、国の財政状況について報告すること<br>(第91条)";
    } else if (select2Val == "両議院") {
      ele.innerHTML = "両議院の義務は？";
      question = new Array("| ?-shall(両議院, X, N).<br>",
                          "X       = 保存(会議の記録),",
                          "N       = 57-2;",
                          "X       = 公表(会議の記録(extent(特に秘密を要するもの(on(秘密会))))),",
                          "N       = 57-2;",
                          "X       = 頒布(会議の記録(for(一般))),",
                          "N       = 57-2");
      result = "両議院の義務は？<br><br>会議の記録の保存<br>秘密会での特に秘密を要するもの以外の、会議の記録の公表<br>一般への会議の記録の頒布<br>(第57条第2項)";
    } else if (select2Val == "表決(各議員)") {
      ele.innerHTML = "各議員の表決はどうしなければならない？";
      question = new Array("| ?-shall(表決(各議員), X, N).<br>",
                          "X       = 記載(on(会議録),case(要求(五分の一以上(出席議員)))),",
                          "N       = 57-3");
      result = "各議員の表決はどうしなければならない？<br><br>各議員の表決は、出席議員の五分の一以上の要求がある場合、会議録に記載しなければなりません。(第57条第3項)";
    } else if (select2Val == "予算") {
      ele.innerHTML = "予算はどうしなければならない？";
      question = new Array("| ?-shall(予算, X, N).<br>",
                          "X       = 先議(衆議院),",
                          "N       = 60-1;",
                          "X       = 議決と審議(on(国会)),",
                          "N       = 86");
      result = "予算はどうしなければならない？<br><br>衆議院の先議(第60条第1項)<br>国会での議決と審議(第86条)";
    } else if (select2Val == "内閣総理大臣") {
      ele.innerHTML = "内閣総理大臣の義務は？";
      question = new Array("| ?-shall(内閣総理大臣, X, N).<br>",
                          "X       = 出席(case(答弁又は説明のため出席を求められたとき)),",
                          "N       = 63");
      result = "内閣総理大臣の義務は？<br><br>内閣総理大臣は、答弁又は説明のため出席を求められたときは、出席しなければなりません。(第63条)";
    } else if (select2Val == "国務大臣") {
      ele.innerHTML = "国務大臣の義務は？";
      question = new Array("| ?-shall(国務大臣, X, N).<br>",
                          "X       = 出席(case(答弁又は説明のため出席を求められたとき)),",
                          "N       = 63;",
                          "X       = 尊重(憲法),",
                          "N       = 99;",
                          "X       = 擁護(憲法),",
                          "N       = 99");
      result = "国務大臣の義務は？<br><br>国務大臣は、答弁又は説明のため出席を求められたときは、出席しなければなりません。<br>(第63条)<br>国務大臣は、憲法を尊重しなければなりません。<br>(第99条)<br>国務大臣は、憲法を擁護しなければなりません。<br>(第99条)";
    } else if (select2Val == "検察官") {
      ele.innerHTML = "検察官の義務は？";
      question = new Array("| ?-shall(検察官, X, N).<br>",
                          "X       = 従う(規則(by(最高裁判所))),",
                          "N       = 77-2");
      result = "検察官の義務は？<br><br>検察官は最高裁判所による規則に従わなければなりません。<br>(第77条第2項)";
    } else if (select2Val == "対審") {
      ele.innerHTML = "対審はどうしなければならない？";
      question = new Array("| ?-shall(対審, X, N).<br>",
                          "X       = 常に公開(case(政治犯罪、出版に関する犯罪又はこの憲法第三章で保障する国民の権利が問題となつてゐる事件)),",
                          "N       = 82-2");
      result = "対審はどうしなければならない？<br><br>対審は、政治犯罪、出版に関する犯罪又はこの憲法第三章で保障する国民の権利が問題となつてゐる事件の場合、常に公開されなければなりません。<br>(第82条第2項)";
    } else if (select2Val == "権限(処理する(国の財政))") {
      ele.innerHTML = "国の財政を処理する権限はどうしなければならない？";
      question = new Array("| ?-shall(権限(処理する(国の財政)), X, N).<br>",
                          "X       = 行使(by(議決(国会))),",
                          "N       = 83");
      result = "国の財政を処理する権限はどうしなければならない？<br><br>国の財政を処理する権限は、国会の議決によって、行使されなければなりません。<br>(第83条)";
    } else if (select2Val == "費用(皇室)") {
      ele.innerHTML = "皇室の費用はどうされなければならない？";
      question = new Array("| ?-shall(費用(皇室), X, N).<br>",
                          "X       = 議決(国会(as(予算))),",
                          "N       = 88");
      result = "皇室の費用はどうされなければならない？<br><br>皇室の費用は、予算として国会で議決されなければなりません。<br>(第88条)";
    } else if (select2Val == "天皇") {
      ele.innerHTML = "天皇の義務は？";
      question = new Array("| ?-shall(天皇, X, N).<br>",
                          "X       = 尊重(憲法),",
                          "N       = 99;",
                          "X       = 擁護(憲法),",
                          "N       = 99");
      result = "天皇の義務は？<br><br>憲法の尊重(第99条)<br>憲法の擁護(第99条)";
    } else if (select2Val == "摂政") {
      ele.innerHTML = "摂政の義務は？";
      question = new Array("| ?-shall(摂政, X, N).<br>",
                          "X       = 尊重(憲法),",
                          "N       = 99;",
                          "X       = 擁護(憲法),",
                          "N       = 99");
      result = "摂政の義務は？<br><br>憲法の尊重(第99条)<br>憲法の擁護(第99条)";
    } else if (select2Val == "裁判官") {
      ele.innerHTML = "裁判官の義務は？";
      question = new Array("| ?-shall(裁判官, X, N).<br>",
                          "X       = 尊重(憲法),",
                          "N       = 99;",
                          "X       = 擁護(憲法),",
                          "N       = 99");
      result = "裁判官の義務は？<br><br>憲法の尊重(第99条)<br>憲法の擁護(第99条)";
    } else if (select2Val == "公務員") {
      ele.innerHTML = "公務員の義務は？";
      question = new Array("| ?-shall(公務員, X, N).<br>",
                          "X       = 尊重(憲法),",
                          "N       = 99;",
                          "X       = 擁護(憲法),",
                          "N       = 99");
      result = "公務員の義務は？<br><br>憲法の尊重(第99条)<br>憲法の擁護(第99条)";
    }
  }

  else if (select1Val == "case") {
    if (select2Val == "not(証拠)") {
      ele.innerHTML = "証拠とすることができないのは？";
    question = new Array("| ?-case(not(証拠), X, N).<br>",
                          "X       = 自白(on(強制)),",
                          "N       = 38-2;",
                          "X       = 自白(on(拷問)),",
                          "N       = 38-2;",
                          "X       = 自白(on(脅迫)),",
                          "N       = 38-2;",
                          "X       = 自白(on(不当に長い抑留)),",
                          "N       = 38-2;",
                          "X       = 自白(on(不当に長い拘禁)),",
                          "N       = 38-2");
    result = "証拠とすることができないのは？<br><br>強制による自白<br>拷問による自白<br>脅迫による自白<br>不当に長い抑留による自白<br>不当に長い拘禁による自白<br>(第38条第2項)";
    }
  }

  else if (select1Val == "can_not") {
    if (select2Val == "すべての人") {
      ele.innerHTML = "すべての人がすることができないことは？";
    question = new Array("| ?-can_not(すべての人, X, N).<br>",
                          "X       = 兼職(両議院議員),",
                          "N       = 48");
    result = "すべての人がすることができないことは？<br><br>すべての人は、両議院議員の兼職をすることができません。(第48条)";
    } else if (select2Val == "両議院") {
      ele.innerHTML = "両議院は何をすることができない？";
      question = new Array("| ?-can_not(両議院, X, N).<br>",
                          "X       = 議決(開く(議事),case(not(出席(三分の一以上(総議員))))),",
                          "N       = 56-1");
      result = "両議院は何をすることができない？<br><br>両議院は、総議員の三分の一以上の出席がなければ、議事を開き、議決することができません。(第56条第1項)";
    } else if (select2Val == "特別裁判所") {
      ele.innerHTML = "特別裁判所は何をすることができない？";
      question = new Array("| ?-can_not(特別裁判所, X, N).<br>",
                          "X       = 設置,",
                          "N       = 76-2");
      result = "特別裁判所は何をすることができない？<br><br>特別裁判所は設置することができません。(第76条第2項)";
    } else if (select2Val == "行政機関") {
      ele.innerHTML = "行政機関は何をすることができない？";
      question = new Array("| ?-can_not(行政機関, X, N).<br>",
                          "X       = 裁判(as(終審)),",
                          "N       = 76-2;",
                          "X       = 懲戒処分(裁判官),",
                          "N       = 78");
      result = "行政機関は何をすることができない？<br><br>終審としての裁判(第76条第2項)<br>裁判官の懲戒処分(第78条)";
    } else if (select2Val == "報酬(裁判官(下級裁判所))") {
      ele.innerHTML = "下級裁判所の裁判官の報酬については何をすることができない？";
      question = new Array("| ?-can_not(報酬(裁判官(下級裁判所)), X, N).<br>",
                          "X       = 減額(on(在任中)),",
                          "N       = 80-2");
      result = "下級裁判所の裁判官の報酬については何をすることができない？<br><br>下級裁判所の裁判官の報酬については、在任中の減額をすることができません。(第80条第2項)";
    }
  }

  else if (select1Val == "receive") {
    if (select2Val == "両議院議員") {
      ele.innerHTML = "議員が受け取るものは？";
    question = new Array("| ?-receive(両議院議員, X, N).<br>",
                          "X       = 歳費(国庫,by(法律)),",
                          "N       = 49");
    result = "議員が受け取るものは？<br><br>両議院の議員は、法律の定めるところにより、国庫から歳費を受け取ります。(第49条)";
    } else if (select2Val == "裁判官(下級裁判所)") {
      ele.innerHTML = "下級裁判所の裁判官が受け取るものは？";
      question = new Array("| ?-receive(裁判官(下級裁判所), X, N).<br>",
                          "X       = 報酬(相当額(on(定期))),",
                          "N       = 80-2");
      result = "下級裁判所の裁判官が受け取るものは？<br><br>下級裁判所の裁判官は、定期に相当額の報酬を受け取ります。(第80条第2項)";
    }
  }

  else if (select1Val == "must_be") {
    if (select2Val == "内閣総理大臣") {
      ele.innerHTML = "内閣総理大臣はどんな人？";
    question = new Array("| ?-must_be(内閣総理大臣, X, N).<br>",
                          "X       = 文民,",
                          "N       = 66-2");
    result = "内閣総理大臣はどんな人？<br><br>内閣総理大臣は、文民でなければなりません。(第66条第2項)";
    } else if (select2Val == "国務大臣") {
      ele.innerHTML = "国務大臣はどんな人？";
      question = new Array("| ?-must_be(国務大臣, X, N).<br>",
                          "X       = 文民,",
                          "N       = 66-2");
      result = "国務大臣はどんな人？<br><br>国務大臣は、文民でなければなりません。(第66条第2項)";
    }
  }

}

//=====================================================================

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
